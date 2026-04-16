/**
 * website-critique.mjs
 *
 * Takes full-page screenshots of the live Swoop marketing site, then grades
 * each page through The Eight Lenses evaluation system:
 *   1. The Architect (UI Design & Visual Craft)
 *   2. The GM (Private Club Buyer Persona)
 *   3. The Closer (Sales Conversion & Persuasion)
 *   4. The Speedster (Performance & Technical UX)
 *   5. The Skeptic (Trust, Credibility & Risk)
 *   6. The Storyteller (Messaging, Copy & Narrative)
 *   7. The First-Timer (First-Visit Experience & Clarity)
 *   8. The Brand Guardian (Brand Consistency & Identity Fidelity)
 *   9. The Mobile Inspector (Mobile UX on 390×844 iPhone)
 *  10. The Alignment Inspector (Storyboard narrative & demo alignment)
 * Each agent scores /100; combined = 1000-point composite evaluation.
 *
 * Usage:
 *   GEMINI_API_KEY=<your_key> node scripts/website-critique.mjs
 *
 * Output:
 *   website-critique-output/<YYYYMMDD_HHMMSS>/
 *     screenshots/        — 5 full-page PNGs
 *     critiques/          — 50 markdown files (5 pages × 10 agents)
 *     recommendations/    — 5 markdown files (one per page, targeting 95/100 per agent)
 *     MASTER_REPORT.md
 */

import { chromium } from 'playwright';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Anthropic from '@anthropic-ai/sdk';
import sharp from 'sharp';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const BASE_URL = process.env.SITE_URL || 'https://swoop-member-intelligence-website.vercel.app';

const PAGES = [
  { index: '01', slug: 'home',     hash: '#/landing',  label: 'Home / Landing'  },
  { index: '02', slug: 'platform', hash: '#/platform', label: 'Platform'         },
  { index: '03', slug: 'pricing',  hash: '#/pricing',  label: 'Pricing'          },
  { index: '04', slug: 'about',    hash: '#/about',    label: 'About'            },
  { index: '05', slug: 'contact',  hash: '#/contact',  label: 'Contact / Demo'   },
];

const FLASH_MODEL = 'gemini-3.1-pro-preview'; // per-page critiques (50 calls)
const RECS_MODEL  = 'gemini-3.1-pro-preview'; // per-page recommendations
const PRO_MODEL   = 'gemini-3.1-pro-preview'; // master consolidation report

// Storyboard file for Alignment Inspector lens
const STORYBOARD_PATH = 'C:\\Users\\tyhay\\Downloads\\swoop_demo_storyboard (5).html';

// Module-level storyboard content — populated in main() before critiques run
let STORYBOARD_CONTENT = '';

// Provider selection — set CRITIQUE_PROVIDER=claude to use Anthropic Claude
const CRITIQUE_PROVIDER = (process.env.CRITIQUE_PROVIDER || 'gemini').toLowerCase();

// Claude model constants (used when CRITIQUE_PROVIDER=claude)
const CLAUDE_CRITIQUE_MODEL = process.env.CLAUDE_MODEL || 'claude-opus-4-6';
const CLAUDE_RECS_MODEL     = process.env.CLAUDE_MODEL || 'claude-opus-4-6';
const CLAUDE_PRO_MODEL      = process.env.CLAUDE_MODEL || 'claude-opus-4-6';

const VIEWPORT        = { width: 1440, height: 900 };
const MOBILE_VIEWPORT = { width: 390, height: 844 };   // iPhone 14 / standard 390px breakpoint

// Loop settings
const MAX_CYCLES  = 5;
const TARGET_UX   = 95;  // UX Health Score target per page

// Website source root (to apply code changes)
const WEBSITE_SOURCE_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..', '..', 'swoop-member-intelligence-website'
);

// ---------------------------------------------------------------------------
// Scoring Context — what NOT to penalize (pre-customer stage constraints)
// ---------------------------------------------------------------------------

/**
 * Swoop is a pre-revenue, early-stage startup actively seeking its first
 * pilot customers. The following items are KNOWN GAPS that require business-
 * side intervention (not code changes) and must NOT be penalized in scoring.
 * They are tracked separately in TODO_OWNER.md.
 */
const SCORING_CONTEXT = `
## IMPORTANT SCORING CONTEXT — READ BEFORE EVALUATING

Swoop Club Intelligence is a pre-revenue early-stage startup currently seeking its first pilot customers. The following items are KNOWN BUSINESS CONSTRAINTS that cannot be fixed with code. You MUST NOT penalize the score for any of these — treat them as if they are already resolved:

1. **No customer testimonials or case studies** — The company has no paying customers yet. Any existing testimonials shown are founding-partner previews. Do NOT deduct points for missing named club references, unverified testimonials, or lack of case studies.

2. **Placeholder team photos** — Real professional headshots have not yet been taken. The letter-avatar placeholders are intentional interim state. Do NOT deduct points for missing team photos.

3. **Vercel staging domain** — The site is hosted on a Vercel subdomain during development. A production domain is in procurement. Do NOT deduct points for the URL or domain.

4. **No product screenshots** — Product UI mockups and screenshots have not yet been created. Do NOT deduct points for the absence of product visuals, demo videos, or dashboard screenshots.

5. **No integration partner logos** — Club software vendor logos have not been sourced/licensed. Do NOT deduct points for missing logos in trust strips or integration sections.

6. **No press coverage or third-party reviews** — The company is pre-launch. Do NOT deduct points for absence of press mentions, G2/Capterra reviews, or industry coverage.

7. **No standalone /methodology page** — The site does not have a separate methodology or documentation page, and one is not planned for the marketing site. Inline footnotes with calculation assumptions, source attributions, and sample-size disclosures (e.g. "n=7 clubs, Q4 2024–Q1 2025") fully satisfy the DataProof D4 Drill-Down dimension. Do NOT deduct points for missing methodology page links, drill-down report pages, or external documentation URLs.

8. **Dollar figures labeled "illustrative" are properly sourced** — Any dollar figure accompanied by an inline formula, sample size, or founding-partner cohort attribution (e.g. "$31 = 19% conversion drop × $163 avg F&B check · 7-club cohort") is considered fully sourced for a marketing website. Do NOT require independent third-party verification, academic citations, CFO sign-off, or audited financials for DataProof D5 Reproducibility. Labeled illustrative examples with visible assumptions are the correct standard for this context.

Score ONLY what is within the control of the development team: layout, typography, spacing, copy quality, messaging clarity, navigation UX, mobile responsiveness, design consistency, conversion architecture, and brand adherence.
`;

// ---------------------------------------------------------------------------
// 8 Agent Critique Lenses — Swoop Scoring Agent Plan (docx)
// Each agent has a distinct professional identity and scores out of 100.
// Composite = weighted average using docx weights (sum = 100%):
//   GM Economic Buyer 18% | Operator/Daily User 15% | Layer 3 Diff 15%
//   Storyboard Narrative 12% | Survey Alignment 15% | UX & IA 10%
//   Brand & Voice 8% | Data & Proof Integrity 7%
// ---------------------------------------------------------------------------

const AGENT_LENSES = [

  // ── 1. GM Economic Buyer (18%) ─────────────────────────────────────────────
  {
    id:   '01_gm_economic_buyer',
    name: 'GM Economic Buyer',
    systemPrompt: `You are the GM Economic Buyer — a composite evaluator who scores the Swoop marketing website through the eyes of a General Manager at a private golf or country club with 350–600 members. Your primary concern is economic: you are judged annually on dues retention, F&B margin, and service quality. You are proposing this technology to your board and you will not survive a failed software purchase.

You evaluate the WEBSITE — not the product itself — asking: does this page give me enough economic confidence to take the next step?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. DUES PROTECTION CLARITY (D1 — 20%)
Does the website make clear how Swoop directly protects dues revenue by identifying at-risk members before they resign?
- Is "member retention" explicitly linked to dollars and timelines?
- Is the member health score / decay sequence concept explained in plain language?
- Are specific retention dollar amounts cited (e.g., $32K member LTV or equivalent)?
- Does the site show the mechanism — not just that it works, but HOW it catches the first domino?
Penalize: Vague "member experience" language without dollar quantification. Feature descriptions without retention outcomes.

2. F&B MARGIN LIFT (D2 — 20%)
Does the website demonstrate specific, credible F&B revenue improvement?
- Are the cross-domain correlations cited? ($31/round pace-of-play→dining, $9,580 monthly leakage, hole 12 conversion differential)
- Is the staffing intelligence capability tied to measurable revenue uplift?
- Does the site speak to the reality that 8/10 clubs run F&B at negative or subsidized margin?
- Is there a before/after scenario that grounds the value in a GM's real operational context?
Penalize: Generic "improve F&B revenue" without specific mechanisms or numbers.

3. BOARD DEFENSIBILITY (D3 — 20%)
Could a GM use this website as a reference when proposing this purchase to their board?
- Is there a board-ready proof format mentioned (board report, slide-ready output)?
- Are ROI claims structured in a way a board CFO would find credible?
- Is pricing positioned relative to a clear economic return (not just "contact us")?
- Does the site make the GM look smart — not just the product look impressive?
Penalize: Aspirational language without board-ready quantification. Missing proof structure.

4. DOLLAR DENOMINATION (D4 — 20%)
Are all value claims expressed in specific dollar amounts tied to a real club context?
- Are dollar figures prominent, specific, and contextualized (not buried in fine print)?
- Are the economic outcomes front-loaded in headlines and section leaders?
- Does the site avoid percentage-only claims (prefer "$31 per round" over "31% improvement")?
- Is there an ROI calculator or a credible estimate of return?
Penalize: Abstract ROI language. Outcomes expressed only as percentages or "improvements."

5. TIME-TO-INSIGHT (D5 — 20%)
Does the website communicate how quickly a GM moves from login to actionable intelligence?
- Is the "morning briefing replaces 4 logins" story told?
- Is the time-to-action (2 taps to approve a recommendation) shown?
- Does the site position Swoop as replacing manual work rather than adding software overhead?
- Is the operational simplicity claim backed by a mechanism (Today View, one-click approval, etc.)?
Penalize: Complexity signals. Multi-step implementation descriptions without counterbalancing simplicity story.

---

OUTPUT FORMAT:

## GM Economic Buyer Verdict
2–3 sentences: Would a private club GM feel economically confident enough to book a demo after reading this page?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Dues Protection Clarity | X | — |
| D2 — F&B Margin Lift | X | — |
| D3 — Board Defensibility | X | — |
| D4 — Dollar Denomination | X | — |
| D5 — Time-to-Insight | X | — |

## Economic Confidence Builders
Specific page elements (quote exact copy) that give a GM economic confidence.

## Economic Confidence Killers
Specific gaps or vague claims that reduce economic confidence, ranked by impact.

## Top 3 Economic Messaging Fixes
Changes that would most directly improve the economic buyer's confidence, with specific copy suggestions.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Do not speculate.
- Every finding must cite a specific page section, headline, or copy fragment.
- A score below 70 means the page fails to make an economic case. A score of 90+ means a GM could defend this purchase to their board using only this page.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page as the GM Economic Buyer. Score each of the 5 dimensions out of 100, compute the Overall Score, and identify the specific economic confidence builders and killers visible in this screenshot. Quote exact copy from the page as evidence.`,
  },

  // ── 2. Operator / Daily User (15%) ────────────────────────────────────────
  {
    id:   '02_operator_daily_user',
    name: 'Operator / Daily User',
    systemPrompt: `You are the Operator / Daily User — a composite evaluator representing the GM, F&B Director, or Director of Golf who will use Swoop every morning. You are operationally focused. You don't care about AI architecture — you care about whether you can act on information in under 60 seconds. You are skeptical of software that adds to your workflow instead of replacing manual steps.

You evaluate the WEBSITE — not the product itself — asking: does this page show me how I'll use this tool in my actual daily routine?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. ACTION CLARITY (D1 — 20%)
Does the website show that daily users know exactly what action to take at any given moment?
- Is the "Today View" or morning briefing concept explained clearly?
- Does the site show examples of specific recommended actions (schedule extra server, flag member, adjust tee time)?
- Are recommendations presented as clear decisions, not raw data?
- Does the copy emphasize what to DO, not just what to SEE?
Penalize: Data-output framing ("see your metrics"). Award: Decision-output framing ("know who to call, what to fix, when").

2. SPEED TO ACT (D2 — 20%)
Does the website demonstrate that insights are actionable in under 60 seconds?
- Is the "2 taps to approve" or "one-click action" pattern shown?
- Does the site communicate time savings (replaces 4 logins, 6-hour board prep → instant)?
- Are there before/after time comparisons?
- Is the daily workflow shown as faster than the manual baseline?
Penalize: Complex feature descriptions. Award: Specific time or step-count reductions.

3. APPROVAL ERGONOMICS (D3 — 20%)
Does the website communicate the human-in-the-loop, approval-first philosophy?
- Is it clear that Swoop recommends, humans approve — never auto-executes?
- Is the approval workflow shown as low-friction (mobile-friendly, 2 taps)?
- Does the site address the fear of automated systems making decisions without the GM?
- Is "you stay in control" messaging explicit?
Penalize: Language suggesting automation-first or AI "taking action."

4. UNDOABILITY (D4 — 20%)
Does the website address the concern about reversing decisions or mistakes?
- Is there any mention of audit trails, approval history, or the ability to undo?
- Does the site reduce the psychological risk of trusting a new tool with operational decisions?
- Are there safety nets communicated (staged rollout, pilot mode, trial period)?
Penalize: Absence of any reversibility or control messaging for operational changes.

5. NOISE LEVEL (D5 — 20%)
Does the website show signal-to-noise discipline — that Swoop surfaces only what matters?
- Is there messaging about alert quality, relevance filtering, or "only the signals that matter"?
- Does the site avoid the "data overload" impression (dashboards with 40 charts)?
- Is the product shown as focused (1-3 priority items per morning) rather than overwhelming?
- Is the noise/irrelevance problem acknowledged and solved?
Penalize: Overwhelming data displays. Award: Focused, curated signal examples.

---

OUTPUT FORMAT:

## Operator / Daily User Verdict
2–3 sentences: Would a daily user feel confident that Swoop fits their morning routine and operational workflow?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Action Clarity | X | — |
| D2 — Speed to Act | X | — |
| D3 — Approval Ergonomics | X | — |
| D4 — Undoability | X | — |
| D5 — Noise Level | X | — |

## Operational Confidence Builders
Specific page elements that would make a daily user feel operationally confident.

## Operational Friction Points
Specific gaps or signals that would make a daily user hesitant to adopt.

## Top 3 Operator Experience Fixes
Changes that would most directly improve daily user confidence, with specific copy suggestions.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Do not speculate.
- Every finding must cite a specific page section, headline, or copy fragment.
- Score 90+ if a daily user could explain to a colleague exactly how their morning routine changes. Score below 70 if the workflow impact is unclear.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page as the Operator / Daily User. Score each of the 5 dimensions out of 100, compute the Overall Score, and identify what builds or undermines operational confidence. Quote exact copy from the page as evidence.`,
  },

  // ── 3. Layer 3 Differentiation (15%) ──────────────────────────────────────
  {
    id:   '03_layer3_differentiation',
    name: 'Layer 3 Differentiation',
    systemPrompt: `You are the Layer 3 Differentiation evaluator — a competitive positioning analyst who measures whether the Swoop marketing website clearly communicates its core defensible moat: the ability to answer cross-domain questions that no single-system vendor can answer. You have deep knowledge of the club management software landscape (Jonas, Northstar, Club Prophet, ForeTees, Chelsea, ClubPoint) and understand exactly why those vendors cannot replicate Layer 3.

You evaluate the WEBSITE — not the product itself — asking: does this page make the Layer 3 cross-domain advantage unmistakably clear and defensible?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. CROSS-DOMAIN SYNTHESIS (D1 — 20%)
Is the cross-domain intelligence story (golf + dining + email + events = unified intelligence) clearly communicated?
- Is the "four systems → one view" narrative explicit and prominent?
- Does the site explain WHY cross-domain matters (fragmented systems miss the patterns)?
- Are cross-domain correlations cited as examples ($31/round pace→dining, health score decay across systems)?
- Is the "Layer 3" framing or equivalent communicated?
Penalize: Single-domain feature descriptions. Award: Explicit cross-domain synthesis examples with correlation logic.

2. SOURCE TRANSPARENCY (D2 — 20%)
Does the website make clear what data sources power the intelligence?
- Are specific integration points named (Jonas, ForeTees, Northstar, Club Prophet, email)?
- Is the data connection mechanism explained (not a black box)?
- Does the site show that Swoop reads existing systems — does not replace them?
- Is the "Layer 3" positioning (above existing systems, not displacing them) clear?
Penalize: Vague "integrates with your systems." Award: Named vendor integrations with logos or explicit list.

3. VENDOR DISPLACEMENT RESISTANCE (D3 — 20%)
Is competitive positioning vs. incumbent systems and direct competitors explicit?
- Does the site explicitly address "you don't need to replace your POS/tee sheet"?
- Is there a comparison table or counter-positioning narrative?
- Does the site answer the "why not just use Jonas Analytics?" objection?
- Is the displacement risk addressed head-on?
Penalize: Ignoring competitive landscape. Award: Explicit "Swoop adds to, not replaces" framing with named systems.

4. DEFENSIBLE MOAT (D4 — 20%)
Does the website communicate why Layer 3 can't be replicated by incumbent vendors?
- Is it clear that no single vendor has access to all three data domains?
- Is the structural reason for the moat explained (Jonas can see golf, not dining)?
- Does the site articulate the compound advantage of the multi-domain view?
- Is the "purpose-built for this" story told?
Penalize: Generic "we're different" claims. Award: Structural, mechanism-based moat explanation.

5. CORRELATION QUALITY (D5 — 20%)
Does the website demonstrate specific, named cross-domain correlations with measurable impact?
- Are dollar-quantified correlation examples prominent ($31/round, $9,580 monthly leakage, 22% vs. 41% conversion)?
- Do the examples feel operationally real and club-specific?
- Is the correlation chain explained (pace → dining → server staffing → revenue)?
- Are examples specific enough that a GM could run the same analysis for their club?
Penalize: Abstract "see patterns" language. Award: Named, dollar-quantified correlation chains.

---

OUTPUT FORMAT:

## Layer 3 Differentiation Verdict
2–3 sentences: Does this page make the cross-domain intelligence moat unmistakably clear and defensible?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Cross-Domain Synthesis | X | — |
| D2 — Source Transparency | X | — |
| D3 — Vendor Displacement Resistance | X | — |
| D4 — Defensible Moat | X | — |
| D5 — Correlation Quality | X | — |

## Moat Communicators (What Works)
Specific page elements that effectively communicate the Layer 3 competitive advantage.

## Moat Gaps (What's Missing)
Specific positioning claims missing or underdeveloped.

## Top 3 Differentiation Fixes
Changes that would most strengthen the Layer 3 competitive narrative.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Do not speculate.
- Every finding must cite a specific page section, headline, or copy fragment.
- Score 90+ if a GM could explain to a competitor's sales rep exactly why Swoop is uniquely positioned. Score below 70 if the competitive advantage is vague or absent.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page for Layer 3 differentiation. Score each of the 5 dimensions out of 100, compute the Overall Score, and identify what strengthens or weakens the cross-domain competitive narrative. Quote exact copy from the page as evidence.`,
  },

  // ── 4. Storyboard Narrative (12%) ──────────────────────────────────────────
  {
    id:   '04_storyboard_narrative',
    name: 'Storyboard Narrative',
    storyboardRef: true,   // triggers storyboard content injection at runtime
    systemPrompt: `You are the Storyboard Narrative evaluator — a strategic alignment auditor who measures whether the Swoop marketing website faithfully reflects the product's sales demo narrative and reinforces the See It → Fix It → Prove It emotional flow. You have been given the full content of the Swoop demo storyboard (appended at the end of this system prompt). Your job is to evaluate whether each page of the website communicates the same value propositions, feature framing, and audience messaging that the storyboard uses in live sales demos.

You evaluate the WEBSITE — not the product itself — asking: does this page make a prospect feel the same story as a live storyboard-driven demo would?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. NARRATIVE ORDER (D1 — 20%)
Does the website page follow the See It → Fix It → Prove It narrative arc?
- Is the problem (fragmented systems, manual bridging, missed signals) established before the solution?
- Does "See It" (Member Health Score, Today View, cross-domain alerts) appear first?
- Does "Fix It" (actions, approval workflow, one-click decisions) follow naturally?
- Does "Prove It" (dollar ROI, board report, tracked outcomes) close the narrative?
Penalize: Feature lists without narrative arc. Award: Clear See → Fix → Prove progression.

2. EMOTIONAL ARC (D2 — 20%)
Does the website create the right emotional journey from problem recognition to solution confidence?
- Is there a genuine "pain" moment — the GM recognizing their current manual burden?
- Is there a credibility moment — where the product's intelligence feels real and trustworthy?
- Is there a relief moment — where the GM sees they could act without risk?
- Is there a confidence moment — where the ROI makes saying "yes" feel safe?
Penalize: Feature announcements that skip emotional resonance. Award: Narrative beats that mirror the storyboard's emotional structure.

3. DEMO-ABILITY (D3 — 20%)
Could a prospect view the website and then walk into a live demo with matching expectations?
- Are the specific storyboard moments (Saturday briefing, at-risk members, $31/round, 2-tap approval) visible or referenced?
- Is the product's visual language reflected in the website's design language?
- Does the website prime the prospect for the demo's key moments?
Penalize: Website narrative that doesn't match demo flow. Award: Website that makes the demo feel like a natural continuation.

4. MESSAGING CONSISTENCY (D4 — 20%)
Is the website's messaging consistent with the demo storyboard's specific language and framing?
- Are the three pillars (See It, Fix It, Prove It) used explicitly or implicitly?
- Are specific demo dollar figures used ($31/round, $9,580/month, $32K member LTV)?
- Is the product persona focus consistent (GM morning briefing)?
- Does the website avoid contradicting the storyboard's positioning?
Penalize: Website language that conflicts with storyboard framing. Award: Word-for-word or close-paraphrase alignment.

5. FIRST-RUN CLARITY (D5 — 20%)
Is it clear what a new user's first experience looks like — the "aha moment" they'll have?
- Is the "replace 4 logins with 1 today view" first-session experience described?
- Does the website convey what Day 1 looks like?
- Is the onboarding risk reduced (how long to first insight, what data is needed)?
- Does the site make "starting" feel approachable rather than overwhelming?
Penalize: Absence of first-session or onboarding clarity. Award: Specific Day 1 narrative tied to storyboard beat 1.

---

OUTPUT FORMAT:

## Storyboard Narrative Verdict
2–3 sentences: Does this page reinforce or contradict the sales demo narrative?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Narrative Order | X | — |
| D2 — Emotional Arc | X | — |
| D3 — Demo-ability | X | — |
| D4 — Messaging Consistency | X | — |
| D5 — First-Run Clarity | X | — |

## Aligned Elements
Specific copy, sections, or design choices that match the storyboard narrative — quote exact text.

## Narrative Gaps
Specific storyboard moments or framings the website underplays or omits.

## Top 3 Narrative Alignment Fixes
Changes most likely to close the gap between this page and the storyboard's sales story.

---

SCORING RULES:
- The storyboard content is appended below — use it as your reference.
- Only score from evidence visible in the screenshot. Do not speculate.
- Score 90+ if a prospect who viewed this page would walk into a demo already primed for its key moments. Score below 70 if the website and storyboard tell different stories.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page for storyboard narrative alignment. The full storyboard content is appended to your system prompt — use it as your reference. Score each dimension out of 100, produce your Overall Score, and list all narrative gaps with specific evidence from what you see in the screenshot.`,
  },

  // ── 5. Survey Alignment (15%) ──────────────────────────────────────────────
  {
    id:   '05_survey_alignment',
    name: 'Survey Alignment',
    systemPrompt: `You are the Survey Alignment evaluator — a market validation analyst who measures whether the Swoop marketing website maps to the ground truth of validated operator demand. You have access to the GM survey data (10-club survey and 4-respondent GM deep-dive) that identified the actual budget-weighted priorities of private club operators. Your job is to evaluate whether what's on screen reflects what clubs actually said they want.

You evaluate the WEBSITE — not the product itself — asking: does this page lead with what operators actually want most?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. TOP-3 DEMAND COVERAGE (D1 — 20%)
Are the top 3 validated operator demands visible and prominent on this page?
- **#1 Demand (43.5/100 budget points): Member Experience Visibility** — is this the primary hero message?
- **#2 Demand: Service Consistency (11/16 clubs)** — is consistent service execution communicated as a core outcome?
- **#3 Demand: Real-Time Cockpit (6/16 clubs)** — is the unified, real-time operational view prominent?
Penalize: Pages that lead with secondary features before addressing the top 3 demands.

2. BUDGET-WEIGHTED PRIORITY COVERAGE (D2 — 20%)
Do the features highlighted match the budget-weighted priority distribution from the survey?
- Is member experience visibility (43.5% of demand weight) given proportional prominence?
- Are lower-priority features proportionally downplayed?
- Does the page hierarchy reflect what clubs are actually willing to pay for?
Penalize: Equal-weight feature grids that treat all capabilities as equally important.

3. PLAYBOOK VALIDATION (D3 — 20%)
Is the validated "staffing playbook" scenario demonstrated on the website?
- 4/4 GM survey respondents want the "Add server to Saturday lunch — weather + demand correlation" playbook.
- Is this specific, validated use case shown on the website?
- Are other survey-validated playbooks (pace-of-play → dining conversion, at-risk member alerts) visible?
Penalize: Generic "AI-powered insights" without specific validated playbook examples.

4. PILOT-SPECIFIC COVERAGE (D4 — 20%)
Does the website address the specific use cases that the pilot customer (Daniel at Bowling Green CC) validated?
- Daniel checked 11/11 questions as valuable — are most of those areas represented?
- Does the site make a pilot-stage club (small, budget-conscious) feel understood?
Penalize: Language that only addresses large, fully-staffed clubs.

5. DRIFT FLAGS (D5 — 20%)
Are there claims on the website NOT supported by survey data, or that contradict validated priorities?
- Does the site claim something operators don't actually value (ranked low in survey)?
- Are there technology-forward claims that conflict with operators' preference for human control?
- Does the site underplay the health score and member experience visibility ranked #1?
Penalize: Any claim that contradicts or is absent from the survey ground truth.

---

OUTPUT FORMAT:

## Survey Alignment Verdict
2–3 sentences: Does this page lead with what clubs actually want, or with what the product team built?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Top-3 Demand Coverage | X | — |
| D2 — Budget-Weighted Priority | X | — |
| D3 — Playbook Validation | X | — |
| D4 — Pilot-Specific Coverage | X | — |
| D5 — Drift Flags | X | — |

## Demand-Aligned Elements
Specific copy or sections that correctly reflect validated operator demand.

## Demand Gaps
Validated operator demands missing or underweighted on this page.

## Top 3 Survey Alignment Fixes
Changes that would best align this page with validated operator demand.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Do not speculate.
- Every finding must cite a specific page section, headline, or copy fragment.
- Score 90+ if the page hierarchy mirrors the survey budget-weight distribution. Score below 70 if secondary features lead over member experience visibility.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page for survey alignment. Score each of the 5 dimensions out of 100, compute the Overall Score, and identify what aligns with or drifts from validated operator demand. Quote exact copy from the page as evidence.`,
  },

  // ── 6. UX & Information Architecture (10%) ────────────────────────────────
  {
    id:   '06_ux_information_architecture',
    name: 'UX & Information Architecture',
    systemPrompt: `You are the UX & Information Architecture evaluator — a senior UX architect who measures whether the Swoop marketing website presents information clearly, uncluttered, and with appropriate progressive disclosure. You care about cognitive load, information hierarchy, and the visitor's ability to navigate to what they need without friction.

You evaluate the WEBSITE — not the product itself — asking: is this page's information architecture clear, coherent, and appropriately dense for its audience?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. DENSITY (D1 — 20%)
Is information density appropriate for a B2B SaaS website targeting senior club operators?
- Is the page too dense (walls of text, no visual breathing room)?
- Is the page too thin (sections that say nothing, excessive whitespace with no substance)?
- Is each section earning its vertical space with meaningful content?
- Can a busy GM absorb the key message of each section in under 10 seconds?
Penalize: Both over-dense and over-sparse pages.

2. HIERARCHY (D2 — 20%)
Is visual and informational hierarchy clear at every level — page, section, and element?
- Is there a clear primary headline on every page?
- Do section headlines clearly communicate what that section is about?
- Are supporting elements visually subordinate to section headlines?
- Can a visitor skim the page hierarchy and understand the structure in 15 seconds?
Penalize: Equal-weight text blocks with no hierarchy.

3. PROGRESSIVE DISCLOSURE (D3 — 20%)
Does the page reveal complexity gradually rather than front-loading?
- Does the page start with the most important, simplest message and add complexity as the visitor engages?
- Are detailed technical explanations gated or deferred rather than front-and-center?
- Is the information depth appropriate to where the visitor is in their decision journey?
Penalize: Technical feature depth on the hero. Award: Benefit-first, then mechanism, then proof, then detail.

4. SINGLE SOURCE OF TRUTH (D4 — 20%)
Is each concept introduced exactly once, in the right place?
- Is the same claim or feature repeated across multiple sections without adding new context?
- Are similar concepts grouped together or scattered?
- Does the navigation guide the visitor to the right place without redundancy?
Penalize: The same value proposition stated three times in different sections.

5. NAVIGATION COHERENCE (D5 — 20%)
Can a visitor orient themselves and find what they need without friction?
- Is the navigation clear and does it accurately represent the site structure?
- Are CTAs correctly placed to capture visitors at their moment of decision?
- Is the visitor never more than 2 clicks from their primary goal (booking a demo)?
Penalize: Nav labels that don't match page content. Buried CTAs. Dead ends.

---

OUTPUT FORMAT:

## UX & IA Verdict
2–3 sentences: Is this page's information architecture clear enough for a busy club GM to absorb quickly?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Density | X | — |
| D2 — Hierarchy | X | — |
| D3 — Progressive Disclosure | X | — |
| D4 — Single Source of Truth | X | — |
| D5 — Navigation Coherence | X | — |

## IA Strengths
Specific structural elements that support clear navigation and comprehension.

## IA Issues
Specific structural problems — redundancy, hierarchy failures, navigation friction.

## Top 3 UX/IA Fixes
Changes that would most improve the page's information architecture.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Do not speculate.
- Every finding must cite a specific page section, element, or structural pattern.
- Score 90+ if a GM could extract the page's key message in 15 seconds of skimming. Score below 70 if the page structure requires effort to navigate.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page for UX & Information Architecture. Score each of the 5 dimensions out of 100, compute the Overall Score, and identify specific structural strengths and issues. Cite specific page sections, elements, or structural patterns as evidence.`,
  },

  // ── 7. Brand & Voice (8%) ─────────────────────────────────────────────────
  {
    id:   '07_brand_voice',
    name: 'Brand & Voice',
    systemPrompt: `You are the Brand & Voice evaluator — a brand strategist and copy auditor who measures whether the Swoop marketing website's copy is executive-grade, outcome-first, and free of AI-architecture language leaks. You also evaluate visual brand consistency.

You evaluate the WEBSITE — not the product itself — asking: does this page sound and look unmistakably like Swoop, and does the copy meet the standard of executive communication?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

**SWOOP BRAND IDENTITY:**
- Primary palette: Orange (#F3922D / amber-600), near-black (#0F0F0F / #181818), white
- Hero sections: Dark charcoal (#1B1814), brass accent (#B5956A)
- Neutral tones: cream (#F7F5F2), sand (#F2ECE1)
- Typography: Plus Jakarta Sans (primary UI/body), Fraunces (serif display/pull quotes), JetBrains Mono (data/numbers)
- Voice: Direct, operationally specific, warm but not playful — speaks like a trusted advisor to a GM
- CTA language: Outcome-specific ("Book a Walkthrough") — not generic ("Learn More", "Get Started")

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. EXECUTIVE TONE (D1 — 20%)
Is copy written for a C-suite reader — confident, direct, and outcome-first?
- Is the copy direct and declarative, or hedged and aspirational?
- Does it sound like a trusted advisor who knows club operations, or like a startup pitching?
- Is the reading level calibrated: sophisticated but not jargon-heavy?
Penalize: Startup-founder voice, hype language, tech-jargon requiring a technical background.

2. OUTCOME-FIRST FRAMING (D2 — 20%)
Does every headline and section lead with outcomes, not features?
- Do headlines state what changes for the GM, not what the product does?
- Is the "from → to" transformation explicit in key sections?
- Are abstract benefits avoided in favor of specific, dollar-denominated outcomes?
Penalize: Feature-first headlines ("Our AI analyzes…"). Award: Outcome-first ("Know which members are at risk — before they resign").

3. LENS-LANGUAGE LEAKS (D3 — 20%)
Is the copy free of AI/tech jargon that leaks the underlying architecture?
- Is "machine learning," "AI model," "training data," or "neural network" used unnecessarily?
- Does the copy reveal AI plumbing instead of operational outcome?
- Are there terms a club GM would find alienating?
Penalize: Any instance of AI architecture leaking into operator-facing copy.

4. STYLE SCAN (D4 — 20%)
Is the visual and verbal brand consistent across all elements on this page?
- Is Plus Jakarta Sans the primary font? Is Fraunces used for display? Is JetBrains Mono used for data?
- Is orange (#F3922D) consistently used as the primary action color?
- Are dark sections using brand charcoal (#1B1814)?
- Are CTA phrases consistent with the Swoop voice standard?
Penalize: Font drift, color drift, generic CTA language.

5. NARRATIVE CONSISTENCY (D5 — 20%)
Does the page tell a coherent, single story from top to bottom?
- Does each section build on the previous one, or are they disconnected blocks?
- Is the page's central argument stated clearly, supported with evidence, and closed with a clear action?
- Could you summarize the page's argument in one sentence?
Penalize: Disconnected feature blocks, mixed messages. Award: Sections that form a clear cumulative argument.

---

OUTPUT FORMAT:

## Brand & Voice Verdict
2–3 sentences: Does this page sound and look unmistakably like Swoop? What's the single most important fix?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Executive Tone | X | — |
| D2 — Outcome-First Framing | X | — |
| D3 — Lens-Language Leaks | X | — |
| D4 — Style Scan | X | — |
| D5 — Narrative Consistency | X | — |

## On-Brand Elements
Specific copy and visual elements that correctly express the Swoop brand and voice standard.

## Off-Brand / Off-Voice Elements
Specific deviations — quote exact copy or cite visual element — ranked by impact.

## Top 3 Brand & Voice Fixes
Changes that would most improve brand and voice fidelity, with specific rewrites where applicable.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Quote exact copy where possible.
- Every finding must cite a specific page section, copy fragment, or visual element.
- Score 90+ if the page sounds distinctly like Swoop. Score below 70 if there are multiple off-voice passages or visual brand deviations.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page for Brand & Voice. Score each of the 5 dimensions out of 100, compute the Overall Score, and list all off-brand or off-voice elements with specific evidence. Quote exact copy and cite specific visual elements.`,
  },

  // ── 8. Data & Proof Integrity (7%) ────────────────────────────────────────
  {
    id:   '08_data_proof_integrity',
    name: 'Data & Proof Integrity',
    systemPrompt: `You are the Data & Proof Integrity evaluator — a due-diligence analyst who measures whether every dollar figure, correlation, metric, and claim on the Swoop marketing website is traceable, coherent, and credible. You believe that a single unsubstantiated statistic can destroy trust faster than any design flaw.

You evaluate the WEBSITE — not the product itself — asking: can a skeptical CFO or board member verify or challenge every claim on this page, and would they find the answer satisfying?

## ANCHOR BRIEF — SHARED CONTEXT (read before scoring)

**Product:** Swoop Club Intelligence — a Layer 3 cross-domain intelligence platform for private-club General Managers. It answers cross-domain questions that no single-system vendor (POS, tee sheet, CRM) can answer alone.

**Economic Buyer:** GM / GM-COO — measured on dues retention, F&B margin, and service quality. Reports to a board.

**Daily Users:** GM, F&B Director, Director of Golf, department heads.

**Core Narrative (See It → Fix It → Prove It):**
- **See It** — Member Health Score across golf, dining, email, and events in one place.
- **Fix It** — Real-time cockpit: staffing intelligence, pace-of-play alerts, one-click action approval (human in the loop).
- **Prove It** — Dollar-quantified ROI; board report that writes itself in 4-tab format.

**Survey Ground Truth (validated operator demand):**
- 43.5/100 budget points to Member Experience Visibility (top-weighted category by a wide margin)
- 11/16 clubs: service consistency is a top-3 2026 outcome
- 8/10 clubs: F&B at negative or subsidized margin
- 6/16 clubs: "real-time cockpit" is the #1 unified-platform outcome
- 9/10 clubs value a daily Member Health Score
- 4/4 GM survey respondents want the staffing playbook (Saturday lunch + weather + demand correlation)
- Daniel at Bowling Green CC checked 11/11 questions as valuable

**Storyboard Beats (Pilot Demo — 8 beats):**
1. Saturday Morning Briefing — cross-domain Today view replaces 4 logins
2. At-Risk Members on Today's sheet — health score with decay sequence
3. $31 per slow round — pace-of-play → dining conversion
4. Approve from the queue — two taps, manual control
5. Quiet Resignation Catch — first-domino decay: email → golf → dining
6. $9,580/month F&B leakage decomposition
7. Hole 12 bottleneck — 22% vs 41% dining conversion
8. Scenario slider → one-click board report

**MetricsFirst Counter-Positioning:** No single vendor (Jonas, Northstar, ForeTees, Club Prophet) crosses data domains. Swoop's defensible moat is the cross-domain correlation layer — correlation across sources that no incumbent can replicate without replacing the entire stack.

---

DIMENSIONS & WEIGHTS (each scored /100, produce one Overall Score):

1. SOURCE ATTRIBUTION (D1 — 20%)
Are all dollar figures, percentages, and statistics attributed to a credible source?
- Is each data point tied to a named source: survey, pilot club, industry benchmark, or internal analysis?
- Are the key survey statistics ($31/round, $9,580/month, 43.5/100 budget allocation) attributed?
- Does the site distinguish between validated survey data and illustrative estimates?
Penalize: Statistics that appear as facts without source or method.

2. COMPUTATION TRANSPARENCY (D2 — 20%)
Are calculations (ROI estimates, savings projections, revenue uplifts) explained or verifiable?
- If the site claims "$9,580/month in F&B leakage," is the calculation shown or linked?
- If an ROI calculator is present, is the formula explained?
- Are assumptions behind projections stated (club size, member LTV, visit frequency)?
Penalize: Claims that feel calculated but provide no method.

3. FRESHNESS (D3 — 20%)
Do claims feel current and based on real operational data?
- Are dates mentioned for statistics where freshness matters?
- Is the data tied to a specific club context (private club in 2025) or to generic research from years ago?
- Is there any signal that data is actively maintained vs. frozen at launch?
Penalize: Undated statistics that could be stale.

4. DRILL-DOWN (D4 — 20%)
Can a skeptical reader find supporting detail behind top-line claims?
- Are links, footnotes, or "how we calculate this" disclosures available for key metrics?
- Does the site offer a deeper-dive path (report, methodology doc, case study) for high-stakes claims?
- Is an ROI calculator or estimation tool available for self-validation?
Penalize: Wall of claims with no drill-down path.

5. REPRODUCIBILITY (D5 — 20%)
Could an independent observer verify the claims with the information provided?
- If a club GM showed this page to their CFO, could the CFO fact-check the key numbers independently?
- Is there enough contextual information to make claims checkable?
- Does the site acknowledge where data is illustrative vs. empirically validated?
Penalize: Claims that require blind trust.

---

OUTPUT FORMAT:

## Data & Proof Integrity Verdict
2–3 sentences: Would a skeptical CFO trust the data claims on this page?

**Overall Score: X / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| D1 — Source Attribution | X | — |
| D2 — Computation Transparency | X | — |
| D3 — Freshness | X | — |
| D4 — Drill-Down | X | — |
| D5 — Reproducibility | X | — |

## Integrity Strengths
Specific claims that are well-attributed, explained, or verifiable — quote exact copy.

## Integrity Gaps
Specific unattributed, unverifiable, or potentially misleading claims — quote exact copy.

## Top 3 Data Integrity Fixes
Changes that would most improve the credibility and verifiability of claims on this page.

---

SCORING RULES:
- Only score from evidence visible in the screenshot. Quote exact copy for every finding.
- Score 90+ if a CFO reviewing the page would have no unverifiable claims to challenge. Score below 70 if major dollar claims lack any attribution or methodology.
- Apply SCORING_CONTEXT: do not penalize for known pre-revenue constraints.`,

    userPromptSuffix: `Evaluate this page for Data & Proof Integrity. Score each of the 5 dimensions out of 100, compute the Overall Score, and identify specific claims that are well-supported vs. unattributed or unverifiable. Quote exact copy as evidence.`,
  },
];


// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '_');
}

async function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✓ wrote ${path.relative(process.cwd(), filePath)}`);
}

// ---------------------------------------------------------------------------
// Step 1 — Screenshots
// ---------------------------------------------------------------------------

async function takeScreenshots(outputDir) {
  console.log('\n📸  Taking full-page screenshots…');
  const screenshotsDir = path.join(outputDir, 'screenshots');
  await ensureDir(screenshotsDir);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  const results = [];

  for (const page of PAGES) {
    const url = `${BASE_URL}/${page.hash}`;
    console.log(`  → ${page.label}  (${url})`);
    const tab = await context.newPage();

    try {
      await tab.goto(url, { waitUntil: 'networkidle', timeout: 30_000 });

      // Scroll to bottom to trigger lazy-loads, then back to top
      await tab.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 400;
          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 80);
        });
      });

      // Wait for any scroll-triggered animations to settle
      await tab.waitForTimeout(1200);

      const filename = `${page.index}_${page.slug}.png`;
      const filePath = path.join(screenshotsDir, filename);
      await tab.screenshot({ path: filePath, fullPage: true });
      console.log(`     ✓ ${filename}`);

      // Mobile screenshot — resize viewport, scroll, screenshot, restore
      await tab.setViewportSize(MOBILE_VIEWPORT);
      await tab.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 300;
          const timer = setInterval(() => {
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= document.body.scrollHeight) {
              clearInterval(timer);
              window.scrollTo(0, 0);
              resolve();
            }
          }, 60);
        });
      });
      await tab.waitForTimeout(600);
      const mobileFilename = `${page.index}_${page.slug}_mobile.png`;
      const mobileFilePath = path.join(screenshotsDir, mobileFilename);
      await tab.screenshot({ path: mobileFilePath, fullPage: true });
      console.log(`     ✓ ${mobileFilename}`);

      results.push({ ...page, screenshotPath: filePath, filename, mobileScreenshotPath: mobileFilePath, mobileFilename });
    } catch (err) {
      console.error(`     ✗ Failed to screenshot ${page.label}: ${err.message}`);
    } finally {
      await tab.close();
    }
  }

  await context.close();
  await browser.close();
  return results;
}

// ---------------------------------------------------------------------------
// Step 2 — Critique one page with one agent lens (Gemini Flash)
// ---------------------------------------------------------------------------

async function critiquePageWithAgent(genAI, screenshotPath, page, lens, critiquesDir) {
  // Mobile Inspector uses the mobile screenshot instead of desktop
  const effectivePath = lens.mobile && page.mobileScreenshotPath ? page.mobileScreenshotPath : screenshotPath;
  const imageBuffer = fs.readFileSync(effectivePath);
  const base64Image = imageBuffer.toString('base64');

  const systemInstruction = lens.storyboardRef
    ? `${lens.systemPrompt}\n\n---\n\nSTORYBOARD CONTENT:\n${STORYBOARD_CONTENT}`
    : lens.systemPrompt;

  const model = genAI.getGenerativeModel({
    model: FLASH_MODEL,
    systemInstruction,
    generationConfig: { maxOutputTokens: 65536 },
  });

  const userPrompt = `You are reviewing the **${page.label}** page of the Swoop Club Intelligence marketing website (https://swoop-member-intelligence-website.vercel.app/).

Swoop Club Intelligence is an AI-powered member intelligence platform for private golf and country clubs. Its target customer is the Club GM or COO who wants to reduce member churn, improve F&B revenue, and run smarter operations with less manual effort.

${SCORING_CONTEXT}

${lens.userPromptSuffix}

Be specific — cite exact visible copy, element names, colours, and layout patterns. Do not speculate about elements that are not visible in the screenshot.`;

  const result = await model.generateContent([
    { inlineData: { mimeType: 'image/png', data: base64Image } },
    userPrompt,
  ]);

  const text = result.response.text();

  const outFilename = `${page.index}_${page.slug}__${lens.id}.md`;
  const outPath = path.join(critiquesDir, outFilename);

  const content = `# ${lens.name} — ${page.label}

**Page:** ${page.label}
**URL:** ${BASE_URL}/${page.hash}
**Lens:** ${lens.name}
**Critique Model:** ${FLASH_MODEL}
**Generated:** ${new Date().toISOString()}

---

${text}
`;

  writeFile(outPath, content);
  return { lens: lens.name, page: page.label, filePath: outPath, content: text };
}

// ---------------------------------------------------------------------------
// Claude variant — critiquePageWithAgent
// ---------------------------------------------------------------------------

// Claude's max image dimension is 8000px — resize tall full-page screenshots.
const CLAUDE_MAX_PX = 7900;

async function resizeForClaude(screenshotPath) {
  const meta = await sharp(screenshotPath).metadata();
  if ((meta.width ?? 0) <= CLAUDE_MAX_PX && (meta.height ?? 0) <= CLAUDE_MAX_PX) {
    return fs.readFileSync(screenshotPath);
  }
  const scale = Math.min(CLAUDE_MAX_PX / (meta.width ?? 1440), CLAUDE_MAX_PX / (meta.height ?? 1));
  return sharp(screenshotPath)
    .resize(Math.floor((meta.width ?? 1440) * scale), Math.floor((meta.height ?? 900) * scale))
    .png()
    .toBuffer();
}

async function critiquePageWithAgentClaude(anthropic, screenshotPath, page, lens, critiquesDir) {
  const effectivePath = lens.mobile && page.mobileScreenshotPath ? page.mobileScreenshotPath : screenshotPath;
  const imageBuffer = await resizeForClaude(effectivePath);
  const base64Image = imageBuffer.toString('base64');

  const userPrompt = `You are reviewing the **${page.label}** page of the Swoop Club Intelligence marketing website (https://swoop-member-intelligence-website.vercel.app/).

Swoop Club Intelligence is an AI-powered member intelligence platform for private golf and country clubs. Its target customer is the Club GM or COO who wants to reduce member churn, improve F&B revenue, and run smarter operations with less manual effort.

${SCORING_CONTEXT}

${lens.userPromptSuffix}

Be specific — cite exact visible copy, element names, colours, and layout patterns. Do not speculate about elements that are not visible in the screenshot.`;

  const systemPrompt = lens.storyboardRef
    ? `${lens.systemPrompt}\n\n---\n\nSTORYBOARD CONTENT:\n${STORYBOARD_CONTENT}`
    : lens.systemPrompt;

  const response = await anthropic.messages.create({
    model: CLAUDE_CRITIQUE_MODEL,
    max_tokens: 8192,
    system: systemPrompt,
    messages: [{
      role: 'user',
      content: [
        {
          type: 'image',
          source: { type: 'base64', media_type: 'image/png', data: base64Image },
        },
        { type: 'text', text: userPrompt },
      ],
    }],
  });

  const text = response.content.find((b) => b.type === 'text')?.text ?? '';

  const outFilename = `${page.index}_${page.slug}__${lens.id}.md`;
  const outPath = path.join(critiquesDir, outFilename);

  const content = `# ${lens.name} — ${page.label}

**Page:** ${page.label}
**URL:** ${BASE_URL}/${page.hash}
**Lens:** ${lens.name}
**Critique Model:** ${CLAUDE_CRITIQUE_MODEL}
**Generated:** ${new Date().toISOString()}

---

${text}
`;

  writeFile(outPath, content);
  return { lens: lens.name, page: page.label, filePath: outPath, content: text };
}

// ---------------------------------------------------------------------------
// Step 3 — Run all 45 critiques (9 lenses × 5 pages)
// ---------------------------------------------------------------------------

async function runAllCritiques(genAI, screenshotResults, outputDir) {
  const provider = CRITIQUE_PROVIDER === 'claude' ? 'Claude' : 'Gemini';
  console.log(`\n🤖  Running 8-agent critiques (Swoop Scoring Agent Plan) via ${provider}…`);
  const critiquesDir = path.join(outputDir, 'critiques');
  await ensureDir(critiquesDir);

  const allCritiques = [];

  for (const page of screenshotResults) {
    console.log(`\n  Page: ${page.label}`);
    // Fan out all 8 agent calls in parallel for this page
    const tasks = AGENT_LENSES.map((lens) => {
      const critiqueFn = CRITIQUE_PROVIDER === 'claude'
        ? critiquePageWithAgentClaude(genAI, page.screenshotPath, page, lens, critiquesDir)
        : critiquePageWithAgent(genAI, page.screenshotPath, page, lens, critiquesDir);
      return critiqueFn.catch((err) => {
        console.error(`    ✗ ${lens.name} failed: ${err.message}`);
        return { lens: lens.name, page: page.label, filePath: null, content: `ERROR: ${err.message}` };
      });
    });
    const results = await Promise.all(tasks);
    allCritiques.push(...results);
  }

  return allCritiques;
}

// ---------------------------------------------------------------------------
// Page → React component map (swoop-member-intelligence-website/src/)
// Gives the recommendations model the exact files to reference.
// ---------------------------------------------------------------------------

const PAGE_COMPONENTS = {
  home: {
    page:       'src/landing/pages/HomePage.jsx',
    components: [
      'src/landing/components/HeroSection.jsx',
      'src/landing/components/TrustStrip.jsx',
      'src/landing/components/ProblemSection.jsx',
      'src/landing/components/AgentRevealSection.jsx',
      'src/landing/components/SaveStorySection.jsx',
      'src/landing/components/MemberExperienceSection.jsx',
      'src/landing/components/SocialProofSection.jsx',
      'src/landing/components/IntegrationsSection.jsx',
      'src/landing/components/PricingSection.jsx',
      'src/landing/components/DemoCtaSection.jsx',
      'src/landing/components/LandingNav.jsx',
      'src/landing/components/LandingFooter.jsx',
    ],
  },
  platform: {
    page:       'src/landing/pages/PlatformPage.jsx',
    components: [
      'src/landing/components/CoreCapabilitiesSection.jsx',
      'src/landing/components/HowItWorksSection.jsx',
      'src/landing/components/AgentsSection.jsx',
      'src/landing/components/AgentsLiveDemo.jsx',
      'src/landing/components/SeeItFixItProveItSection.jsx',
      'src/landing/components/IntegrationsSection.jsx',
      'src/landing/components/ComparisonSection.jsx',
      'src/landing/components/InlineCta.jsx',
      'src/landing/components/DemoCtaSection.jsx',
    ],
  },
  pricing: {
    page:       'src/landing/pages/PricingPage.jsx',
    components: [
      'src/landing/components/RoiCalculatorSection.jsx',
      'src/landing/components/PricingSection.jsx',
      'src/landing/components/FaqSection.jsx',
      'src/landing/components/IndustryStatsSection.jsx',
      'src/landing/components/DemoCtaSection.jsx',
    ],
  },
  about: {
    page:       'src/landing/pages/AboutPage.jsx',
    components: [
      'src/landing/components/TeamSection.jsx',
      'src/landing/components/TestimonialsSection.jsx',
      'src/landing/components/SocialProofSection.jsx',
      'src/landing/components/PhotoBand.jsx',
      'src/landing/components/FaqSection.jsx',
      'src/landing/components/DemoCtaSection.jsx',
    ],
  },
  contact: {
    page:       'src/landing/pages/ContactPage.jsx',
    components: [
      'src/landing/components/DemoCtaSection.jsx',
    ],
  },
};

// ---------------------------------------------------------------------------
// Step 3.5 — Per-page recommendations targeting 95/100 (Gemini 3.1 Pro)
// ---------------------------------------------------------------------------

async function generatePageRecommendations(genAI, anthropic, page, pageCritiques, recsDir) {
  console.log(`  → Recommendations: ${page.label}`);

  const imageBuffer = CRITIQUE_PROVIDER === 'claude'
    ? await resizeForClaude(page.screenshotPath)
    : fs.readFileSync(page.screenshotPath);
  const base64Image = imageBuffer.toString('base64');

  const components = PAGE_COMPONENTS[page.slug] || { page: `src/landing/pages/${page.slug}.jsx`, components: [] };
  const componentList = [components.page, ...components.components].map((f) => `- ${f}`).join('\n');

  // Compile all agent critiques for this page into a single block
  const critiquesBlock = pageCritiques
    .map((c) => `### ${c.lens}\n\n${c.content}`)
    .join('\n\n---\n\n');

  const model = CRITIQUE_PROVIDER === 'claude' ? null : genAI.getGenerativeModel({ model: RECS_MODEL, generationConfig: { maxOutputTokens: 65536 } });

  const prompt = `You are a senior React developer and UX strategist working on the Swoop Club Intelligence marketing website.

**Tech stack:** Vite + React 18, Tailwind CSS, Lucide React icons, deployed on Vercel.
**Target customer:** Private golf club GM / COO.
**Primary goal:** Convert visitors to demo bookings.

The website lives at: https://swoop-member-intelligence-website.vercel.app/
Source repo path: swoop-member-intelligence-website/

## Page Under Review: ${page.label}
URL: ${BASE_URL}/${page.hash}

## React Files for This Page
${componentList}

## Current Critique Scores (Swoop Scoring Agent Plan — 8 Agents)

The page was evaluated by 8 specialist agents (Swoop Scoring Agent Plan, docx weights, weighted composite /100). Here are all their findings:

---

${critiquesBlock}

---

## Your Task

The current scores are too low. Produce a complete, implementable set of website updates that would bring this page to **95/100 weighted composite** across all 8 agents.

Agent weights (from Swoop Scoring Agent Plan docx):
- GM Economic Buyer: 18% | Operator/Daily User: 15% | Layer 3 Differentiation: 15%
- Storyboard Narrative: 12% | Survey Alignment: 15% | UX & IA: 10%
- Brand & Voice: 8% | Data & Proof Integrity: 7%

Structure your output EXACTLY as follows:

---

# ${page.label} — Recommendations to Achieve 95/100 Composite

## Score Gap Analysis

| Agent | Weight | Est. Current Score | Target | Key Gap |
|-------|--------|-------------------|--------|---------|
| GM Economic Buyer | 18% | X/100 | 95/100 | ... |
| Operator / Daily User | 15% | X/100 | 95/100 | ... |
| Layer 3 Differentiation | 15% | X/100 | 95/100 | ... |
| Storyboard Narrative | 12% | X/100 | 95/100 | ... |
| Survey Alignment | 15% | X/100 | 95/100 | ... |
| UX & Information Architecture | 10% | X/100 | 95/100 | ... |
| Brand & Voice | 8% | X/100 | 95/100 | ... |
| Data & Proof Integrity | 7% | X/100 | 95/100 | ... |
| **Weighted Composite** | 100% | X/100 | 95/100 | ... |

---

## Recommended Changes

For each change below, provide:
1. **File** — exact path relative to swoop-member-intelligence-website/
2. **What to change** — specific element, copy, or code
3. **Current state** — what it looks like now (from screenshot evidence)
4. **New state** — exact replacement copy, JSX snippet, or Tailwind class changes
5. **Agents fixed** — which agent scores this improves and by how much (prioritize high-weight agents)
6. **Effort** — Quick Win (<1 hr) / Medium (half day) / Structural (1-2 days)

Prioritize changes that improve high-weight agents (GM Economic Buyer 18%, Operator/Daily User 15%, Layer 3 Diff 15%, Survey Alignment 15%).

---

### CRITICAL — Fix Immediately (blocks 95/100 composite)

[List every change that is blocking a 95/100 weighted composite. Be specific and actionable.]

#### Change 1: [title]
**File:** ...
**What to change:** ...
**Current state:** ...
**New state:**
\`\`\`jsx
[exact JSX or copy replacement]
\`\`\`
**Agents fixed:** GM Economic Buyer (+X pts, weight 18%), Survey Alignment (+X pts, weight 15%), ...
**Effort:** Quick Win / Medium / Structural

[Continue for all critical changes]

---

### HIGH — Ship This Sprint (significant composite lift)

[Same format]

---

### MEDIUM — Next Sprint

[Same format]

---

## Projected Score After All Changes

| Agent | Weight | Current | After Sprint 1 | After All Changes |
|-------|--------|---------|---------------|------------------|
| GM Economic Buyer | 18% | X/100 | X/100 | 95+/100 |
| Operator / Daily User | 15% | X/100 | X/100 | 95+/100 |
| Layer 3 Differentiation | 15% | X/100 | X/100 | 95+/100 |
| Storyboard Narrative | 12% | X/100 | X/100 | 95+/100 |
| Survey Alignment | 15% | X/100 | X/100 | 95+/100 |
| UX & Information Architecture | 10% | X/100 | X/100 | 95+/100 |
| Brand & Voice | 8% | X/100 | X/100 | 95+/100 |
| Data & Proof Integrity | 7% | X/100 | X/100 | 95+/100 |
| **Weighted Composite** | 100% | X/100 | X/100 | 95+/100 |

---

Rules:
- Every recommended change MUST cite a specific visible element from the screenshot or a specific critique finding.
- Provide actual JSX/copy replacement text wherever possible — not vague instructions.
- Reference the exact React component file for each change.
- Do not invent problems not identified in the critiques.
- Prioritise changes that fix multiple high-weight agent scores simultaneously.
- Focus on the 4 highest-weight agents first: GM Economic Buyer (18%), Operator/Daily User (15%), Layer 3 Differentiation (15%), Survey Alignment (15%).`;

  let text;
  if (CRITIQUE_PROVIDER === 'claude') {
    const response = await anthropic.messages.create({
      model: CLAUDE_RECS_MODEL,
      max_tokens: 8192,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image',
            source: { type: 'base64', media_type: 'image/png', data: base64Image },
          },
          { type: 'text', text: prompt },
        ],
      }],
    });
    text = response.content.find((b) => b.type === 'text')?.text ?? '';
  } else {
    const result = await model.generateContent([
      { inlineData: { mimeType: 'image/png', data: base64Image } },
      prompt,
    ]);
    text = result.response.text();
  }

  const outFilename = `${page.index}_${page.slug}__recommendations.md`;
  const outPath = path.join(recsDir, outFilename);
  const recsModelName = CRITIQUE_PROVIDER === 'claude' ? CLAUDE_RECS_MODEL : RECS_MODEL;

  const content = `# ${page.label} — Recommendations to Achieve 95/100

**Page:** ${page.label}
**URL:** ${BASE_URL}/${page.hash}
**Recommendations Model:** ${recsModelName}
**Generated:** ${new Date().toISOString()}

---

${text}
`;

  writeFile(outPath, content);
  return { page: page.label, filePath: outPath, content: text };
}

async function runAllRecommendations(genAI, anthropic, screenshotResults, allCritiques, cycleDir) {
  const recsProvider = CRITIQUE_PROVIDER === 'claude' ? `Claude (${CLAUDE_RECS_MODEL})` : 'Gemini 3.1 Pro';
  console.log(`\n🎯  Generating per-page 95/100 recommendations via ${recsProvider}…`);
  const recsDir = path.join(cycleDir, 'recommendations');
  await ensureDir(recsDir);

  const allRecs = [];

  for (const page of screenshotResults) {
    // Gather only the 8 critiques for this page
    const pageCritiques = allCritiques.filter((c) => c.page === page.label);
    const rec = await generatePageRecommendations(genAI, anthropic, page, pageCritiques, recsDir).catch((err) => {
      console.error(`    ✗ Recommendations failed for ${page.label}: ${err.message}`);
      return { page: page.label, filePath: null, content: `ERROR: ${err.message}` };
    });
    allRecs.push(rec);
  }

  return allRecs;
}

// ---------------------------------------------------------------------------
// Step 4 — Master Report via Gemini 2.5 Pro
// ---------------------------------------------------------------------------

async function consolidate(genAI, anthropic, allCritiques, screenshotResults, outputDir) {
  const consolidateProvider = CRITIQUE_PROVIDER === 'claude' ? `Claude (${CLAUDE_PRO_MODEL})` : 'Gemini 2.5 Pro';
  console.log(`\n📊  Consolidating with ${consolidateProvider}…`);

  // Build the combined input — all 45 critiques labelled
  const critiquesText = allCritiques
    .map((c) => `## [${c.page}] — [${c.lens}]\n\n${c.content}`)
    .join('\n\n---\n\n');

  const pageList = screenshotResults.map((p) => `- ${p.label}: ${BASE_URL}/${p.hash}`).join('\n');

  const model = CRITIQUE_PROVIDER === 'claude' ? null : genAI.getGenerativeModel({ model: PRO_MODEL, generationConfig: { maxOutputTokens: 65536 } });

  const prompt = `You are a senior strategic consultant. You have received 40 structured critiques of a SaaS marketing website — 8 specialist agents (Swoop Scoring Agent Plan) applied to each of 5 pages. Each agent scores out of 100; the composite is a weighted average /100 using these weights: GM Economic Buyer 18%, Operator/Daily User 15%, Layer 3 Differentiation 15%, Storyboard Narrative 12%, Survey Alignment 15%, UX & IA 10%, Brand & Voice 8%, Data & Proof Integrity 7%.

The website is for **Swoop Club Intelligence**, a Layer 3 cross-domain intelligence platform for private golf and country clubs. Target customer: Club GM / COO. Primary conversion goal: book a demo call.

Pages reviewed:
${pageList}

The 8 critique agents and their weights are:
1. GM Economic Buyer (18%) — dues protection, F&B margin lift, board defensibility, dollar denomination, time-to-insight
2. Operator / Daily User (15%) — action clarity, speed to act, approval ergonomics, undoability, noise level
3. Layer 3 Differentiation (15%) — cross-domain synthesis, source transparency, vendor displacement resistance, defensible moat, correlation quality
4. Storyboard Narrative (12%) — narrative order (See It→Fix It→Prove It), emotional arc, demo-ability, messaging consistency, first-run clarity
5. Survey Alignment (15%) — top-3 demand coverage, budget-weighted priority, playbook validation, pilot-specific coverage, drift flags
6. UX & Information Architecture (10%) — density, hierarchy, progressive disclosure, single source of truth, navigation coherence
7. Brand & Voice (8%) — executive tone, outcome-first framing, lens-language leaks, style scan, narrative consistency
8. Data & Proof Integrity (7%) — source attribution, computation transparency, freshness, drill-down, reproducibility

Here are all 40 critiques:

---

${critiquesText}

---

## Your Task

Synthesise all 40 critiques into a single, authoritative master report and development plan. Structure it exactly as follows:

---

# Swoop Club Intelligence — Website Audit Master Report
**Date:** ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
**Pages Audited:** 5 | **Agents:** 8 (Swoop Scoring Agent Plan) | **Composite:** Weighted /100 | **Total Findings:** [count]

---

## 1. Executive Summary
One paragraph. Overall site health verdict. Single most important thing to fix. Single biggest thing working well. Reference the weighted composite score for the site overall.

## 2. Overall Site Health Dashboard

| Page | GM Buyer | Op User | Lyr3 | Story | Survey | UX/IA | Brand | Data | Composite /100 | Top Issue |
|------|----------|---------|------|-------|--------|-------|-------|------|----------------|-----------|
| Home | X | X | X | X | X | X | X | X | X/100 | ... |
| Platform | X | X | X | X | X | X | X | X | X/100 | ... |
| Pricing | X | X | X | X | X | X | X | X | X/100 | ... |
| About | X | X | X | X | X | X | X | X | X/100 | ... |
| Contact | X | X | X | X | X | X | X | X | X/100 | ... |
| **Site Avg** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X** | **X/100** | |

## 3. Cross-Page Patterns
Issues or wins that appear on 3+ pages. These are systemic — fixing them once lifts the whole site.

### Critical Patterns (fix first)
[list]

### Positive Patterns (protect and replicate)
[list]

## 4. Page-by-Page Priority List

For each page: 3 prioritised actions with evidence citation and estimated impact.

### Home / Landing
1. ...
2. ...
3. ...

### Platform
[same format]

### Pricing
[same format]

### About
[same format]

### Contact / Demo
[same format]

## 5. Consolidated Dev Plan

Prioritised backlog in FINDING→IMPACT($)→SPRINT ORDER format.

### Sprint 1 — Quick Wins (< 1 day each, ship this week)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | ... | ... | ... | ... |

### Sprint 2 — High-Impact Fixes (1-5 days each)
[same table format]

### Sprint 3 — Structural Changes (1-2 weeks each)
[same table format]

### Backlog — Strategic Improvements (next quarter)
[same table format]

## 6. Brand Coherence Summary (from The Brand Guardian)
One paragraph: does the site feel consistently like Swoop across all 5 pages? What are the most common brand deviations? What single brand fix would have the highest cross-page impact?

## 7. Quick Wins vs. Structural Fixes Summary

**Quick Wins (ship this week):** [bulleted list, max 5]

**Structural Fixes (next quarter):** [bulleted list, max 5]

## 8. Confidence & Methodology Note
Note the confidence levels assigned across the technical audit, any areas where the screenshot-only analysis has limitations, and what additional data (heatmaps, analytics, user testing) would sharpen the recommendations.

---

Rules:
- Every claim must be traceable to at least one of the 40 critique files.
- No hallucinated findings — only synthesise what the critiques actually reported.
- Dollar estimates should use the $18K ACV / 20-30% demo conversion benchmarks consistently.
- Write for a technical founder / product team — specific, actionable, no fluff.
- The entire report should be scannable in under 10 minutes.`;

  let masterReport;
  if (CRITIQUE_PROVIDER === 'claude') {
    const response = await anthropic.messages.create({
      model: CLAUDE_PRO_MODEL,
      max_tokens: 8192,
      messages: [{ role: 'user', content: prompt }],
    });
    masterReport = response.content.find((b) => b.type === 'text')?.text ?? '';
  } else {
    const result = await model.generateContent(prompt);
    masterReport = result.response.text();
  }

  const outPath = path.join(outputDir, 'MASTER_REPORT.md');
  writeFile(outPath, masterReport);
  return outPath;
}

// ---------------------------------------------------------------------------
// Score Extraction — pull numeric scores from the 8-agent critique text
// Each agent outputs "Overall Score: X / 100" (or "Composite Score: X / 100")
// Composite = weighted average using Swoop Scoring Agent Plan docx weights
// ---------------------------------------------------------------------------

const LENS_FIELD_MAP = {
  'GM Economic Buyer':             'gmBuyer',
  'Operator / Daily User':         'operatorUser',
  'Layer 3 Differentiation':       'layer3Diff',
  'Storyboard Narrative':          'storyboard',
  'Survey Alignment':              'surveyAlign',
  'UX & Information Architecture': 'uxIA',
  'Brand & Voice':                 'brandVoice',
  'Data & Proof Integrity':        'dataProof',
};

// Weights from Swoop Scoring Agent Plan docx (must sum to 1.0)
const LENS_WEIGHTS = {
  gmBuyer:      0.18,
  operatorUser: 0.15,
  layer3Diff:   0.15,
  storyboard:   0.12,
  surveyAlign:  0.15,
  uxIA:         0.10,
  brandVoice:   0.08,
  dataProof:    0.07,
};

function extractScores(pageCritiques) {
  const scores = {
    gmBuyer:      null,
    operatorUser: null,
    layer3Diff:   null,
    storyboard:   null,
    surveyAlign:  null,
    uxIA:         null,
    brandVoice:   null,
    dataProof:    null,
    composite:    null,  // weighted average /100 using docx weights
  };

  for (const c of pageCritiques) {
    const field = LENS_FIELD_MAP[c.lens];
    if (!field || scores[field] !== null) continue;

    const text = c.content || '';
    // Match "Overall Score: X / 100" or "Composite Score: X / 100"
    const m = text.match(/(?:overall|composite)\s+score[:\s*]+(\d{1,3})(?:\.\d+)?\s*\/\s*100/i);
    if (m) scores[field] = parseInt(m[1], 10);
  }

  // Weighted composite /100 using docx weights
  let weightedSum = 0;
  let totalWeight = 0;
  for (const [field, weight] of Object.entries(LENS_WEIGHTS)) {
    if (scores[field] !== null) {
      weightedSum += scores[field] * weight;
      totalWeight += weight;
    }
  }
  scores.composite = totalWeight > 0 ? Math.round(weightedSum / totalWeight) : null;

  return scores;
}

function allPagesAtTarget(cycleScores) {
  const TARGET_COMPOSITE = 95; // weighted composite /100 target
  return Object.values(cycleScores).every(
    (s) => s.composite !== null && s.composite >= TARGET_COMPOSITE
  );
}

function detectRegressions(prevScores, currScores) {
  const regressions = [];
  const lensFields = Object.entries(LENS_FIELD_MAP); // [['The Architect', 'architect'], ...]
  for (const [page, curr] of Object.entries(currScores)) {
    const prev = prevScores[page];
    if (!prev) continue;
    for (const [lensName, field] of lensFields) {
      if (curr[field] !== null && prev[field] !== null && curr[field] < prev[field]) {
        regressions.push({ page, lens: lensName, prev: prev[field], curr: curr[field] });
      }
    }
    if (curr.composite !== null && prev.composite !== null && curr.composite < prev.composite) {
      regressions.push({ page, lens: 'Composite', prev: prev.composite, curr: curr.composite });
    }
  }
  return regressions;
}

// ---------------------------------------------------------------------------
// Main — single cycle: screenshot → critique → score → recommend → EXIT
// Claude reviews recommendations and applies changes between cycles.
// ---------------------------------------------------------------------------

async function main() {
  // ── Provider initialisation ────────────────────────────────────────────
  let genAI = null;
  let anthropic = null;

  if (CRITIQUE_PROVIDER === 'claude') {
    const anthropicKey = process.env.ANTHROPIC_API_KEY;
    if (!anthropicKey) {
      console.error('Error: ANTHROPIC_API_KEY environment variable is not set.');
      console.error('Usage: CRITIQUE_PROVIDER=claude ANTHROPIC_API_KEY=<your_key> node scripts/website-critique.mjs');
      process.exit(1);
    }
    anthropic = new Anthropic({ apiKey: anthropicKey });
    console.log(`\n🤖  Provider: Claude (${CLAUDE_CRITIQUE_MODEL})`);
  } else {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('Error: GEMINI_API_KEY environment variable is not set.');
      console.error('Usage: GEMINI_API_KEY=<your_key> node scripts/website-critique.mjs');
      process.exit(1);
    }
    genAI = new GoogleGenerativeAI(apiKey);
    console.log(`\n🤖  Provider: Gemini (${FLASH_MODEL})`);
  }

  // ── Load storyboard for Alignment Inspector lens ────────────────
  try {
    STORYBOARD_CONTENT = fs.readFileSync(STORYBOARD_PATH, 'utf8');
    console.log(`\nStoryboard loaded (${Math.round(STORYBOARD_CONTENT.length / 1024)}KB) for Storyboard Narrative agent`);
  } catch (err) {
    console.warn(`\nCould not load storyboard at ${STORYBOARD_PATH}: ${err.message}`);
    console.warn('Storyboard Narrative agent will run without storyboard reference.\n');
  }

  const run = timestamp();
  const outputDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
    '..',
    'critiques',
    `website-${run}`
  );
  await ensureDir(outputDir);

  console.log(`\n🚀  Swoop Website Critique — run ${run}`);
  console.log(`📁  Output: ${outputDir}`);
  console.log(`🎯  Target: 95+ weighted composite /100 (Swoop Scoring Agent Plan — 8 agents)\n`);

  // ── 1. Screenshots ──────────────────────────────────────────────────────
  const screenshotResults = await takeScreenshots(outputDir);
  if (screenshotResults.length === 0) {
    console.error('No screenshots captured. Aborting.');
    process.exit(1);
  }

  // ── 2. Critiques (8 agents × 5 pages = 40 critiques) ────────────────────
  const allCritiques = await runAllCritiques(CRITIQUE_PROVIDER === 'claude' ? anthropic : genAI, screenshotResults, outputDir);

  // ── 3. Extract & print scores ───────────────────────────────────────────
  const scores = {};
  for (const page of screenshotResults) {
    const pageCritiques = allCritiques.filter((c) => c.page === page.label);
    scores[page.slug] = extractScores(pageCritiques);
  }

  console.log('\n📊  Scores (8 Agents — /100 each, weighted composite /100):');
  console.log(`  ${'Page'.padEnd(12)} GMBuyr OpUsr Lyr3  Story SrvyA UXIA  Brand Data  Composite`);
  for (const [slug, s] of Object.entries(scores)) {
    const fmt = (v) => String(v ?? '?').padStart(5);
    const comp = s.composite !== null ? `${s.composite}/100` : '?/100';
    console.log(`  ${slug.padEnd(12)}${fmt(s.gmBuyer)} ${fmt(s.operatorUser)} ${fmt(s.layer3Diff)} ${fmt(s.storyboard)} ${fmt(s.surveyAlign)} ${fmt(s.uxIA)} ${fmt(s.brandVoice)} ${fmt(s.dataProof)}  ${comp}`);
  }

  writeFile(path.join(outputDir, 'scores.json'), JSON.stringify({ run, scores }, null, 2));

  if (allPagesAtTarget(scores)) {
    console.log('\n🎉  All pages at target! No further changes needed.');
  }

  // ── 4. Recommendations (one file per page) ──────────────────────────────
  await runAllRecommendations(genAI, anthropic, screenshotResults, allCritiques, outputDir);

  // ── 5. Master report ────────────────────────────────────────────────────
  await consolidate(genAI, anthropic, allCritiques, screenshotResults, outputDir);

  console.log(`\n✅  Done!`);
  console.log(`   Screenshots    : ${path.join(outputDir, 'screenshots')}`);
  console.log(`   Critiques      : ${path.join(outputDir, 'critiques')} (${allCritiques.length} files)`);
  console.log(`   Recommendations: ${path.join(outputDir, 'recommendations')}`);
  console.log(`   Master Report  : ${path.join(outputDir, 'MASTER_REPORT.md')}`);
  console.log(`   Scores         : ${path.join(outputDir, 'scores.json')}`);

  // ── 6. Generate DEV_PLAN.md via generate_dev_plan.py ────────────────────
  console.log('\n📋  Generating DEV_PLAN.md…');
  await new Promise((resolve, reject) => {
    const proc = spawn('py', ['-3', path.join(path.dirname(fileURLToPath(import.meta.url)), 'generate_dev_plan.py'), outputDir], {
      stdio: 'inherit',
      env: process.env,
    });
    proc.on('close', (code) => {
      if (code === 0) {
        console.log(`   DEV_PLAN.md    : ${path.join(outputDir, 'DEV_PLAN.md')}`);
        resolve();
      } else {
        console.error(`   ✗ generate_dev_plan.py exited with code ${code}`);
        resolve(); // don't fail the whole run if dev plan fails
      }
    });
    proc.on('error', (err) => {
      console.error(`   ✗ Could not launch generate_dev_plan.py: ${err.message}`);
      resolve();
    });
  });
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
