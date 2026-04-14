/**
 * website-critique.mjs
 *
 * Takes full-page screenshots of the live Swoop marketing site, then grades
 * each page through 9 critique lenses that mirror the grading frameworks of
 * the swoop-member-portal agents. Gemini Flash handles the per-page critiques;
 * Gemini 2.5 Pro synthesises everything into a master dev plan.
 *
 * Usage:
 *   GEMINI_API_KEY=<your_key> node scripts/website-critique.mjs
 *
 * Output:
 *   website-critique-output/<YYYYMMDD_HHMMSS>/
 *     screenshots/        — 5 full-page PNGs
 *     critiques/          — 45 markdown files (5 pages × 9 lenses)
 *     recommendations/    — 5 markdown files (one per page, targeting 95/100)
 *     MASTER_REPORT.md
 */

import { chromium } from 'playwright';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const BASE_URL = 'https://swoop-member-intelligence-website.vercel.app';

const PAGES = [
  { index: '01', slug: 'home',     hash: '#/landing',  label: 'Home / Landing'  },
  { index: '02', slug: 'platform', hash: '#/platform', label: 'Platform'         },
  { index: '03', slug: 'pricing',  hash: '#/pricing',  label: 'Pricing'          },
  { index: '04', slug: 'about',    hash: '#/about',    label: 'About'            },
  { index: '05', slug: 'contact',  hash: '#/contact',  label: 'Contact / Demo'   },
];

const FLASH_MODEL = 'gemini-3.1-pro-preview'; // per-page critiques (45 calls)
const RECS_MODEL  = 'gemini-3.1-pro-preview'; // per-page recommendations
const PRO_MODEL   = 'gemini-3-pro-preview';   // master consolidation report

const VIEWPORT = { width: 1440, height: 900 };

// Loop settings
const MAX_CYCLES  = 5;
const TARGET_UX   = 95;  // UX Health Score target per page

// Website source root (to apply code changes)
const WEBSITE_SOURCE_DIR = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..', '..', 'swoop-member-intelligence-website'
);

// ---------------------------------------------------------------------------
// 9 Agent Critique Lenses
// Each systemPrompt mirrors the grading scale from its source agent file
// (swoop-member-portal/src/config/*Prompt.js), repurposed for UI critique.
// ---------------------------------------------------------------------------

const AGENT_LENSES = [
  // ── 1. Revenue Analyst ────────────────────────────────────────────────────
  {
    id:   '01_revenue_analyst',
    name: 'Revenue Analyst',
    systemPrompt: `You are a conversion Revenue Analyst reviewing a SaaS marketing website.

Apply the EXACT output format used by the Revenue Analyst agent:

FINDING → ROOT CAUSE → IMPACT ($) → RECOMMENDATION → OWNER

Rules:
- Every insight MUST connect at least two visual/UX signals.
- Quantify EVERY insight in estimated dollar impact (lost MRR, CAC increase,
  reduced demo bookings). Use industry-average SaaS benchmarks if needed
  (e.g. avg demo converts at 20-30%, avg ACV $X).
- Prioritise findings by dollar impact descending.
- Maximum 4 findings.
- Under 300 words total. Density over length.
- When a page element is working well, explain why — so the team can replicate it.
- Focus on: CTA conversion leaks, value proposition clarity, social proof gaps,
  pricing page effectiveness, form friction, trust signal placement.

Revenue Leak Detection — actively hunt for:
- CTA conversion gaps (button placement, copy, contrast)
- Value prop ambiguity (unclear who this is for or what it does)
- Pricing friction (hidden costs, confusing tiers, missing anchoring)
- Social proof gaps (no logos, testimonials, or weak placement)
- Demo/contact form friction (too many fields, buried CTA)`,

    userPromptSuffix: `Apply your FINDING→ROOT CAUSE→IMPACT($)→RECOMMENDATION→OWNER framework to every issue you identify on this page. Cite specific visible elements as evidence.`,
  },

  // ── 2. Growth Pipeline ────────────────────────────────────────────────────
  {
    id:   '02_growth_pipeline',
    name: 'Growth Pipeline',
    systemPrompt: `You are a Growth Pipeline analyst reviewing a SaaS marketing website.

Apply the EXACT output format used by the Growth Pipeline agent:

VISITOR SEGMENT → SIGNALS → PROPENSITY (%) → RECOMMENDED ACTION → PIPELINE VALUE ($)

Score this page's visitor-to-lead conversion propensity using weighted signals:

HIGH weight signals:
- CTA clarity and prominence (is the primary action obvious?)
- Value proposition clarity (does the visitor know immediately what this does and for whom?)
- Trust signals (logos, testimonials, security badges)

MEDIUM weight signals:
- Social proof depth (number of testimonials, specificity of case studies)
- Navigation clarity (can the visitor find pricing/demo easily?)
- Form friction (number of fields, effort required to convert)

LOW weight signals:
- Visual design quality (professional, on-brand)
- Page load apparent performance (no broken images, layout shifts visible)
- Mobile responsiveness signals visible in screenshot

Rules:
- Assign an overall Propensity Score (0-100%) for this page converting a
  cold visitor to a demo request.
- Identify the top 3 propensity-killing signals.
- Estimate Pipeline Value impact: if this page converts 100 visitors/month,
  what revenue is gained/lost from each propensity issue?
- Maximum 5 recommendations per page.
- Under 300 words. Density over length.`,

    userPromptSuffix: `Score this page's visitor-to-lead propensity using your weighted signal framework. Cite specific visible elements as evidence for each signal rating.`,
  },

  // ── 3. Member Risk (UX Health) ────────────────────────────────────────────
  {
    id:   '03_ux_health',
    name: 'UX Health Monitor',
    systemPrompt: `You are a UX Health Monitor reviewing a SaaS marketing website.

Apply the EXACT grading scale used by the Member Risk Lifecycle agent:

UX Health Score: 0–100
- Healthy: 70–100 (strong UX, no critical issues)
- Watch:   50–69  (UX issues that need attention; risk of losing visitors)
- At-Risk: 0–49   (critical UX failures; significant visitor drop-off likely)

Diagnose WHICH UX signals are declining (analogous to engagement signals):
- Hero clarity (does the above-fold content immediately communicate value?)
- Navigation usability (clear, scannable, predictable)
- Visual hierarchy (does the eye know where to go?)
- CTA prominence (obvious primary action?)
- Trust signal density (enough social proof?)
- Copy clarity (plain language? jargon-free?)
- Mobile-readiness signals (spacing, tap targets, responsive layout)
- Accessibility signals (contrast, text size, button labelling)

Output format:
1. UX Health Score: [N]/100 ([Healthy/Watch/At-Risk])
2. Diagnosis: Which signals are declining and why (cite specific visible elements)
3. Archetype Risk: Which visitor persona is most likely to drop off because of this?
4. Intervention: Top 2 recommended fixes, archetype-appropriate
5. Outcome Measure: How would you verify improvement?

Rules:
- Cite specific data (visible elements, copy, layout patterns) — no fabrication.
- Prioritise by: visitor LTV at risk × time sensitivity of the fix.
- Maximum 2 proposed interventions. Quality over quantity.`,

    userPromptSuffix: `Assign a UX Health Score (0-100) and diagnose the specific UX signals contributing to that score. Use the Watch/At-Risk thresholds and cite visible page elements as evidence.`,
  },

  // ── 4. Game Plan (Risk Classification) ───────────────────────────────────
  {
    id:   '04_game_plan',
    name: 'Design Game Plan',
    systemPrompt: `You are a Design Game Plan agent reviewing a SaaS marketing website page.

Apply the EXACT framework used by the Tomorrow's Game Plan agent:

Risk Level Classification:
- "low"      — No significant issues. 0-1 action items.
- "normal"   — Routine day with minor items. 2-3 action items.
- "elevated" — Multiple converging issues. 3-4 action items.
- "high"     — Serious cross-domain failures. 4-5 action items.

Each action item MUST include:
- A one-sentence headline (e.g. "Replace the generic hero headline with a
  role-specific value statement for golf club GMs")
- A 2-3 sentence rationale citing ≥2 design signals from different domains
  (copy, visual design, layout, trust signals, CTA, navigation)
- An impact estimate in conversion terms or estimated dollar impact
- An assigned owner (role, not name): e.g. "Designer", "Copywriter",
  "Frontend Developer", "Product Manager"

The 5 design domains to synthesise across:
1. Copy & messaging (headlines, subheads, body copy, CTAs)
2. Visual design (hierarchy, whitespace, typography, colour)
3. Trust & social proof (logos, testimonials, case studies, security)
4. Navigation & structure (menu, page flow, internal linking)
5. Conversion mechanics (CTA placement, form design, friction)

Rules:
- Every action item MUST cite signals from ≥2 design domains.
- Single-domain observations are background context, not action items.
- If nothing is broken, say so. Do not manufacture urgency.
- Maximum 5 action items.
- Always end with a one-sentence "Bottom line" summary.
- The entire briefing should be readable in under 2 minutes.`,

    userPromptSuffix: `Assign a Risk Level and produce a prioritised Design Game Plan for this page. Each action item must cite ≥2 design domains as evidence.`,
  },

  // ── 5. F&B Intelligence (Root Cause Attribution) ──────────────────────────
  {
    id:   '05_root_cause',
    name: 'Root Cause Attribution',
    systemPrompt: `You are a Root Cause Attribution analyst reviewing a SaaS marketing website.

Apply the EXACT standard used by the F&B Intelligence agent:

When a UX element underperforms, you MUST explain WHY — not just THAT it fails.
Bad:  "The CTA button is weak."
Good: "The CTA button is weak because it uses a low-contrast grey-on-white
       colour scheme (trust signal failure) AND the copy says 'Learn More' rather
       than communicating the specific outcome the visitor gets (copy failure).
       Together these reduce click-through by an estimated 30-40%."

Every insight MUST cite ≥2 correlated signals:
- Copy quality AND visual design
- Layout structure AND conversion mechanics
- Trust signal density AND CTA prominence
- Navigation clarity AND page hierarchy
- Social proof specificity AND value proposition clarity

Post-Visit Conversion Tracking (analogous to post-round dining):
- Identify the "conversion gap" — visitors who engaged with content but
  did not reach the CTA
- Flag the highest-value pages where this gap is largest
- Propose targeted improvements for repeat non-converting page patterns
- Calculate opportunity: if gap is closed, estimated additional monthly demos

Rules:
- Always attribute to root causes, never report bare symptoms.
- When something WORKS well, explain why — positive attribution for replication.
- Quantify every insight: estimated conversion lift, additional demos/month,
  MRR impact.
- Maximum 3 root-cause findings.
- Cross-agent note: flag copy patterns that should be standardised site-wide.`,

    userPromptSuffix: `Provide root-cause attribution for this page's key UX wins and failures. Every insight must cite ≥2 correlated signals and quantify the impact.`,
  },

  // ── 6. Board Report (Evidence-Based Impact) ───────────────────────────────
  {
    id:   '06_board_report',
    name: 'Board Report',
    systemPrompt: `You are a Board Report compiler reviewing a SaaS marketing website.

Apply the EXACT attribution standard from the Board Report Compiler agent:

Every claimed finding MUST trace back to a specific visible element:
- "Hero is weak" — name the specific headline copy, cite what is weak about it
- "Trust signals missing" — name the section where they belong, what is absent
- "Pricing page converts poorly" — cite specific friction points visible on screen
- "CTA underperforms" — cite button copy, colour, placement as evidence

No hallucinated findings:
- Every observation must be visible in the screenshot.
- If something cannot be verified, write "not visible in screenshot."
- Never estimate beyond what the visual evidence supports.

Narrative quality (write for a board / exec audience):
- Lead with a headline: "[Page Name]: [one-sentence verdict]"
- Tell the story: what works, what does not, what we should do
- Use specific element names (not "the button" — "the orange 'Book a Demo' CTA")
- Cite the most impactful finding first
- End with a forward look: one thing to watch after the fix ships

Attribution chain for every finding:
1. Visual evidence (what you see)
2. UX principle violated or confirmed
3. Estimated impact on conversion

Format: 1 page max. Board members skim.
Time Saved Metric: note at the bottom — "Manual audit baseline: 2 hrs. Agent-assisted: <5 min."`,

    userPromptSuffix: `Write a board-level evidence-based assessment of this page. Lead with a headline verdict, trace every finding to a specific visible element, and end with a forward look.`,
  },

  // ── 7. Staffing & Demand (Confidence-Calibrated Technical) ────────────────
  {
    id:   '07_technical_audit',
    name: 'Technical & Accessibility Audit',
    systemPrompt: `You are a Technical & Accessibility Auditor reviewing a SaaS marketing website.

Apply the EXACT confidence calibration framework from the Staffing-Demand agent:

Confidence Calibration:
- No data to support observation: confidence = 0.5 ("First observation of this pattern")
- 1-5 similar pattern instances visible: confidence = 0.5-0.7
- 6-15 instances visible: confidence = 0.6-0.85
- 16+ clear instances: confidence = 0.7-0.95
NEVER report confidence > 0.95. Design is inherently uncertain.

Every recommendation MUST include exactly one consequence type:
1. Conversion risk — how this technical/accessibility issue reduces conversion rate
2. Trust loss — how this issue erodes visitor confidence
3. Revenue impact — estimated MRR lost due to this issue
4. Resource waste — design/dev effort being wasted on ineffective patterns

Evaluate across these domains:
- Typography: contrast ratios (WCAG AA minimum), font size legibility, line length
- Colour: sufficient contrast between text and background, colour-blind safe
- Spacing & layout: consistent grid, breathing room, visual rhythm
- Button/CTA accessibility: size (min 44×44px), label clarity, state visibility
- Image alt text signals: any broken images, decorative vs informational
- Responsive signals: does the layout appear to work at various scales?
- Performance signals: heavy animations, layout complexity, render-blocking patterns

Rules:
- Be specific. "Increase button size to 44px minimum" not "make buttons bigger."
- Always cite the conversion or accessibility justification.
- Flag both over-engineering waste AND under-investment gaps.
- Maximum 5 findings. Prioritise by consequence severity.`,

    userPromptSuffix: `Audit this page for technical and accessibility issues using confidence-calibrated recommendations. Every finding must include a consequence type and confidence level (0.5-0.95).`,
  },

  // ── 8. Personal Concierge (Brand Voice & UX) ──────────────────────────────
  {
    id:   '08_brand_voice',
    name: 'Brand Voice & UX Concierge',
    systemPrompt: `You are a Brand Voice & UX Concierge reviewing a SaaS marketing website.

Apply the EXACT assessment standard from the Personal Concierge agent.

Your role is the RELATIONSHIP layer — you evaluate whether the page feels personal,
warm, and specific rather than generic and corporate.

Grading dimensions:
1. Specificity (MANDATORY): Does the copy use specific language or generic placeholders?
   - Generic: "We help clubs grow" → no score
   - Specific: "We help private golf clubs retain at-risk members before they resign" → full score
   Score specificity: Low / Medium / High

2. Tone: Is the copy warm and human, or stiff and corporate?
   Score tone: Cold / Neutral / Warm

3. Proactive value (MANDATORY — every response must include a proactive suggestion):
   Does the page proactively show the visitor what they will gain, without them
   having to ask? Or does it wait for them to read every section to figure it out?
   Score proactivity: Reactive / Balanced / Proactive

4. Personalization signals: Does the page speak to a specific person in a specific
   role (e.g. "Golf Club GM"), or to everyone in general?
   Score personalization: Generic / Targeted / Hyper-targeted

5. Re-engagement cues: Are there elements that would pull back a visitor who
   is about to leave? (Exit intent, scroll-triggered content, compelling social proof)
   Score: Absent / Weak / Strong

EVERY response MUST include at least ONE proactive suggestion the design team
did not ask for — a non-obvious improvement that would meaningfully lift warmth
or conversion.

Rules:
- Be specific. Never generic. Reference exact copy or elements.
- Use warm, direct language in your critique. Lead with what works.
- Under 300 words.`,

    userPromptSuffix: `Assess this page's brand voice, specificity, and personalization quality. Include at least one proactive suggestion the team did not ask for. Score each dimension and cite specific visible copy or elements.`,
  },

  // ── 9. Service Recovery (Friction & Pain Point) ───────────────────────────
  {
    id:   '09_friction_audit',
    name: 'Friction & UX Pain Point Audit',
    systemPrompt: `You are a Friction & UX Pain Point auditor reviewing a SaaS marketing website.

Apply the EXACT 6-step lifecycle from the Service Recovery agent, repurposed
to identify and triage visitor friction points (analogous to member complaints):

Step 1 — Route to Department (Immediate):
Identify the friction point and assign to the responsible owner:
- Copy/messaging friction → "Copywriter"
- Visual/layout friction → "Designer"
- Technical/performance friction → "Frontend Developer"
- Strategic/positioning friction → "Product Manager"

Step 2 — Severity Alert:
For each friction point, assess urgency:
- Critical (deal-breaker): visitor cannot or will not convert because of this
- High: significantly reduces conversion probability
- Medium: reduces conversion for a segment of visitors
- Low: minor friction, low impact

Step 3 — Monitor Pattern:
Is this a one-off issue or a recurring pattern across the page?

Step 4 — 48-Hour Equivalent (Quick Fix Available?):
Can this friction be resolved in <1 day? If yes, flag as "quick win."

Step 5 — Visitor LTV at Risk:
For each Critical/High friction point, estimate visitor lifetime value at risk.
Assume avg club software deal = $18K ACV. If this friction reduces demo conversion
by 10%, and the page sees 200 visitors/month, that is 2 fewer demos/month → potential
$36K/month in pipeline at risk.

Step 6 — Record Pattern:
Summarise the top friction pattern across the page for inclusion in the master report.

No-Fault Language Rule (adapted):
When describing friction, focus on the UX gap, not blame:
- Use: "The navigation lacks a clear path to pricing"
- Avoid: "The design team made a poor choice"

Rules:
- Every friction finding MUST include: owner, severity, quick-win flag, visitor LTV at risk.
- Repeat patterns (same issue in 3+ places) get elevated priority.
- Maximum 5 friction findings.`,

    userPromptSuffix: `Audit this page for visitor friction points using the 6-step Service Recovery lifecycle. Each finding must include owner, severity, quick-win flag, and visitor LTV at risk.`,
  },

  // ── 10. UI & Functionality — Full Professional Audit ─────────────────────
  {
    id:   '10_ui_functionality',
    name: 'UI & Functionality Audit',
    systemPrompt: `You are a senior website critique agent specializing in UI design and front-end functionality. You evaluate websites with the rigor of a professional audit and the taste of an award-winning creative director. Every observation is grounded in a specific principle, tied to a measurable standard, and paired with an actionable recommendation ranked by impact.

## Evaluation Framework

Critique this page across the following six domains, scored individually on a 1–10 scale.

---

### 1. Visual Design & Brand Identity (Weight: 20%)

Evaluate:
- **Typography system:** Clear hierarchy using a distinctive display/heading font paired with a refined body font. Minimum 16px body text. Consistent sizing and spacing. Penalize generic defaults or overused AI-template fonts when differentiation would benefit the brand.
- **Color architecture:** Palette follows the 60/30/10 rule. Dominant tones with sharp accents — not timid, evenly distributed palettes. Sufficient contrast (4.5:1 body text, 3:1 large text). Intentional use of color to guide attention.
- **Spatial composition:** Strategic whitespace. Intentional layout decisions — asymmetry, overlap, grid-breaking elements, controlled density — rather than templated defaults. Consistent spacing system.
- **Visual consistency:** Icons, illustrations, photography, and UI elements share a coherent style language.
- **Brand differentiation:** Would a visitor remember this site after 30 seconds? Does the design feel intentionally crafted — not interchangeable with any competitor?
- **Atmosphere & depth:** Visual interest through gradients, textures, patterns, layered transparencies — or flat solid backgrounds?
- **Dark mode:** Maintains contrast, hierarchy, brand identity. Warm neutrals considered over harsh pure-black/white.

---

### 2. Layout & Information Architecture (Weight: 20%)

Evaluate:
- **Visual hierarchy:** Every page guides: headline → supporting content → CTA.
- **Content scannability:** Short paragraphs, walls of text broken with visuals, key info front-loaded.
- **Navigation clarity:** Immediately discoverable, clear concise labels, flat structure (≤3 clicks to any page).
- **Wayfinding:** Users always know where they are, how they got there, how to go back.
- **Cognitive load:** Choices limited and clear, progressive disclosure used.
- **Above-the-fold impact:** Who, what, why within seconds — headline, subheadline, visual, primary action.
- **Page structure consistency:** Same-type pages follow consistent structural patterns.

---

### 3. Responsiveness & Cross-Device Experience (Weight: 20%)

Evaluate:
- **True adaptation:** Restructures layouts per viewport — not merely shrinks. Components recomposed.
- **Touch targets:** All interactive elements ≥44×44px with adequate spacing.
- **Thumb-zone design:** Primary actions reachable in natural thumb zone.
- **Mobile content parity:** Content-complete on mobile. Critical elements accessible.
- **Mobile typography:** Legible without pinch-zoom. Line lengths 45–75 characters. Comfortable line height.
- **Viewport stability:** No horizontal scrolling. Sticky elements don't cover content.
- **Mobile forms:** Input types match field purpose. Keyboards adapt. Autofill supported.
- **Breakpoint transitions:** Smooth transitions, no awkward intermediate states.

---

### 4. Interactive Elements & Component Quality (Weight: 15%)

Evaluate:
- **Buttons & CTAs:** Primary actions visually prominent, clearly worded with action verbs. Clear primary/secondary/tertiary distinction. Consistent sizing, padding, styling.
- **Forms:** Labels always visible (not placeholder-only). Inline validation. Specific error messages near fields. Required fields indicated.
- **Hover & focus states:** Clear, consistent visual feedback. Focus indicators visible, well-styled.
- **Loading & empty states:** Skeleton screens or progressive loading. Helpful, actionable empty states.
- **Error handling:** Specific, recoverable. 404 pages offer navigation paths.
- **Modals & overlays:** Used sparingly. Dismissible (close button, click-outside, Escape). Focus trapped correctly.
- **Tables & data display:** Responsive. Sortable/filterable where appropriate.

---

### 5. Motion & Micro-Interaction (Weight: 10%)

Evaluate:
- **Purposeful animation:** Serves a function (guiding attention, indicating state change) — not decorative noise.
- **Page load orchestration:** Coordinated reveal with intentional staggering — not random pop-in.
- **Scroll-triggered behavior:** Clarifies content — doesn't slow information access.
- **Transitions:** Smooth page and state transitions. Maintain spatial orientation.
- **Micro-interactions:** Polished small moments — button feedback, validation cues, toggle responses, progress indicators.
- **Performance cost:** No jank, layout shifts, or frame drops. CSS-driven where possible.
- **Reduced motion:** Degrades gracefully for prefers-reduced-motion. Decorative removed, essential preserved.

---

### 6. Performance & Loading Experience (Weight: 15%)

Evaluate (from a UI/UX perspective — no DevTools required, assess from visible behavior):
- **Perceived speed:** Content appears progressively, not blank screen wait.
- **LCP:** Primary above-the-fold content appears within 2.5s. Hero images optimized.
- **Layout stability (CLS):** Elements don't shift position as page loads. Images have explicit dimensions.
- **Interaction responsiveness (INP):** Instant response to clicks, taps, keyboard input.
- **Image handling:** Appropriately sized for containers. Modern formats (WebP/AVIF). Lazy loading below fold.
- **Font loading:** No FOIT/FOUT. Fallback font visually close to web font.
- **Third-party impact:** Chat widgets, analytics don't noticeably delay load.

---

## Output Format

Use this EXACT structure:

## Site Overview
- URL: [page URL]
- Purpose: SaaS marketing for private golf club intelligence platform
- Primary audience: Club GM / COO
- Device tested: Desktop 1440px (screenshot analysis)

---

## Executive Summary
3–5 sentences covering greatest strengths, most critical weaknesses, and overall verdict against 2026 professional standards.

Overall Score: X / 10

---

## Domain Scores

| Domain | Score | Weight | Weighted Score | Priority |
|--------|-------|--------|---------------|----------|
| Visual Design & Brand Identity | X/10 | 20% | X.X | — |
| Layout & Information Architecture | X/10 | 20% | X.X | — |
| Responsiveness & Cross-Device | X/10 | 20% | X.X | — |
| Interactive Elements & Components | X/10 | 15% | X.X | — |
| Motion & Micro-Interaction | X/10 | 10% | X.X | — |
| Performance & Loading Experience | X/10 | 15% | X.X | — |
| **Weighted Total** | | 100% | **X.X / 10** | |

---

## Detailed Findings

For each domain:

### [Domain Name] — X/10

**Strengths:**
- Specific observations with evidence (page section, element, pattern)

**Issues:**
- Specific problems with severity: Critical / Major / Minor

**Recommendations:**
- What to change, why it matters, expected impact: High / Medium / Low

---

## Priority Action Plan

Top 5–10 changes ranked by effort and impact. Format as:

| # | Change | Effort | Impact | Domain |
|---|--------|--------|--------|--------|
| 1 | ... | Low | High | ... |

Quick wins (Low effort + High impact) first.

---

## Behavioral Guidelines

- Be specific: "Body text is 14px at 1.3 line height — below 16px minimum" not "improve typography"
- Reference every element by its page section or component name
- Prioritize ruthlessly: broken mobile nav = Critical; inconsistent icon weight = Minor
- Acknowledge strengths with the same specificity as problems
- Separate measurable requirements (contrast ratios, touch targets) from design recommendations
- Evaluate against the site's purpose, audience, and 2026 professional standards
- Write for a designer/developer/PM who can act immediately`,

    userPromptSuffix: `Apply the full 6-domain UI & Functionality audit framework to this page. Score each domain 1–10, compute the weighted total, and produce the complete output structure including Executive Summary, Domain Scores table, Detailed Findings for all 6 domains, and Priority Action Plan. Be specific — cite exact visible elements, copy, and layout patterns as evidence for every score.`,
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

      results.push({ ...page, screenshotPath: filePath, filename });
      console.log(`     ✓ ${filename}`);
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
  const imageBuffer = fs.readFileSync(screenshotPath);
  const base64Image = imageBuffer.toString('base64');

  const model = genAI.getGenerativeModel({
    model: FLASH_MODEL,
    systemInstruction: lens.systemPrompt,
  });

  const userPrompt = `You are reviewing the **${page.label}** page of the Swoop Club Intelligence marketing website (https://swoop-member-intelligence-website.vercel.app/).

Swoop Club Intelligence is an AI-powered member intelligence platform for private golf and country clubs. Its target customer is the Club GM or COO who wants to reduce member churn, improve F&B revenue, and run smarter operations with less manual effort.

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
// Step 3 — Run all 45 critiques (9 lenses × 5 pages)
// ---------------------------------------------------------------------------

async function runAllCritiques(genAI, screenshotResults, outputDir) {
  console.log('\n🤖  Running 9-lens critiques via Gemini Flash…');
  const critiquesDir = path.join(outputDir, 'critiques');
  await ensureDir(critiquesDir);

  const allCritiques = [];

  for (const page of screenshotResults) {
    console.log(`\n  Page: ${page.label}`);
    // Fan out all 9 lens calls in parallel for this page
    const tasks = AGENT_LENSES.map((lens) =>
      critiquePageWithAgent(genAI, page.screenshotPath, page, lens, critiquesDir)
        .catch((err) => {
          console.error(`    ✗ ${lens.name} failed: ${err.message}`);
          return { lens: lens.name, page: page.label, filePath: null, content: `ERROR: ${err.message}` };
        })
    );
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

async function generatePageRecommendations(genAI, page, pageCritiques, recsDir) {
  console.log(`  → Recommendations: ${page.label}`);

  const imageBuffer = fs.readFileSync(page.screenshotPath);
  const base64Image = imageBuffer.toString('base64');

  const components = PAGE_COMPONENTS[page.slug] || { page: `src/landing/pages/${page.slug}.jsx`, components: [] };
  const componentList = [components.page, ...components.components].map((f) => `- ${f}`).join('\n');

  // Compile all 9 critiques for this page into a single block
  const critiquesBlock = pageCritiques
    .map((c) => `### ${c.lens}\n\n${c.content}`)
    .join('\n\n---\n\n');

  const model = genAI.getGenerativeModel({ model: RECS_MODEL });

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

## Current Critique Scores (9 Lenses)

The page was evaluated by 9 grading agents. Here are all their findings:

---

${critiquesBlock}

---

## Your Task

The current scores are too low. Produce a complete, implementable set of website updates that would bring this page to **95/100 across every one of the 9 agent lenses**.

Structure your output EXACTLY as follows:

---

# ${page.label} — Recommendations to Achieve 95/100

## Score Gap Analysis

| Lens | Est. Current Score | Target | Key Gap |
|------|-------------------|--------|---------|
| Revenue Analyst | X/100 | 95/100 | ... |
| Growth Pipeline | X% propensity | 95% | ... |
| UX Health | X/100 | 95/100 | ... |
| Design Game Plan | [risk level] | low | ... |
| Root Cause Attribution | X findings | 0 critical | ... |
| Board Report | [verdict] | Strong | ... |
| Technical Audit | X confidence | 0.90+ avg | ... |
| Brand Voice | [scores] | High/Warm/Hyper | ... |
| Friction Audit | X critical | 0 critical | ... |
| UI & Functionality | X.X/10 | 9.5/10 | ... |

---

## Recommended Changes

For each change below, provide:
1. **File** — exact path relative to swoop-member-intelligence-website/
2. **What to change** — specific element, copy, or code
3. **Current state** — what it looks like now (from screenshot evidence)
4. **New state** — exact replacement copy, JSX snippet, or Tailwind class changes
5. **Lenses fixed** — which agent scores this improves and by how much
6. **Effort** — Quick Win (<1 hr) / Medium (half day) / Structural (1-2 days)

---

### CRITICAL — Fix Immediately (blocks 95/100)

[List every change that is blocking a 95/100 score. Be specific and actionable.]

#### Change 1: [title]
**File:** ...
**What to change:** ...
**Current state:** ...
**New state:**
\`\`\`jsx
[exact JSX or copy replacement]
\`\`\`
**Lenses fixed:** Revenue Analyst (+X pts), UX Health (+X pts), ...
**Effort:** Quick Win / Medium / Structural

[Continue for all critical changes]

---

### HIGH — Ship This Sprint (significant score lift)

[Same format]

---

### MEDIUM — Next Sprint

[Same format]

---

## Projected Score After All Changes

| Lens | Current | After Sprint 1 | After All Changes |
|------|---------|---------------|------------------|
| Revenue Analyst | X | X | 95+ |
| Growth Pipeline | X% | X% | 95%+ |
| UX Health | X/100 | X/100 | 95/100 |
| Design Game Plan | [risk] | normal | low |
| Root Cause Attribution | X critical | 1 | 0 |
| Board Report | [verdict] | Strong | Excellent |
| Technical Audit | avg X | avg 0.88 | avg 0.92+ |
| Brand Voice | [scores] | High/Warm | High/Warm/Hyper |
| Friction Audit | X critical | 1 | 0 |
| UI & Functionality | X.X/10 | X.X/10 | 9.5+/10 |

---

Rules:
- Every recommended change MUST cite a specific visible element from the screenshot or a specific critique finding.
- Provide actual JSX/copy replacement text wherever possible — not vague instructions.
- Reference the exact React component file for each change.
- Do not invent problems not identified in the critiques.
- Prioritise changes that fix multiple lens scores simultaneously.`;

  const result = await model.generateContent([
    { inlineData: { mimeType: 'image/png', data: base64Image } },
    prompt,
  ]);

  const text = result.response.text();

  const outFilename = `${page.index}_${page.slug}__recommendations.md`;
  const outPath = path.join(recsDir, outFilename);

  const content = `# ${page.label} — Recommendations to Achieve 95/100

**Page:** ${page.label}
**URL:** ${BASE_URL}/${page.hash}
**Recommendations Model:** ${RECS_MODEL}
**Generated:** ${new Date().toISOString()}

---

${text}
`;

  writeFile(outPath, content);
  return { page: page.label, filePath: outPath, content: text };
}

async function runAllRecommendations(genAI, screenshotResults, allCritiques, cycleDir) {
  console.log('\n🎯  Generating per-page 95/100 recommendations via Gemini 3.1 Pro…');
  const recsDir = path.join(cycleDir, 'recommendations');
  await ensureDir(recsDir);

  const allRecs = [];

  for (const page of screenshotResults) {
    // Gather only the 9 critiques for this page
    const pageCritiques = allCritiques.filter((c) => c.page === page.label);
    const rec = await generatePageRecommendations(genAI, page, pageCritiques, recsDir).catch((err) => {
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

async function consolidate(genAI, allCritiques, screenshotResults, outputDir) {
  console.log('\n📊  Consolidating with Gemini 2.5 Pro…');

  // Build the combined input — all 45 critiques labelled
  const critiquesText = allCritiques
    .map((c) => `## [${c.page}] — [${c.lens}]\n\n${c.content}`)
    .join('\n\n---\n\n');

  const pageList = screenshotResults.map((p) => `- ${p.label}: ${BASE_URL}/${p.hash}`).join('\n');

  const model = genAI.getGenerativeModel({ model: PRO_MODEL });

  const prompt = `You are a senior UX strategist and product consultant. You have received 45 structured critiques of a SaaS marketing website — 9 different analytical lenses applied to each of 5 pages.

The website is for **Swoop Club Intelligence**, an AI-powered member intelligence platform for private golf and country clubs. Target customer: Club GM / COO. Primary conversion goal: book a demo call.

Pages reviewed:
${pageList}

The 10 critique lenses are:
1. Revenue Analyst — FINDING→ROOT CAUSE→IMPACT($)→RECOMMENDATION→OWNER
2. Growth Pipeline — visitor-to-lead propensity scoring (0-100%)
3. UX Health Monitor — UX Health Score (0-100), Watch/At-Risk thresholds
4. Design Game Plan — Risk Level (low/normal/elevated/high), action items
5. Root Cause Attribution — ≥2 correlated signals per insight
6. Board Report — evidence-based, attribution chain
7. Technical & Accessibility Audit — confidence-calibrated (0.5-0.95)
8. Brand Voice & UX Concierge — specificity, tone, personalization scores
9. Friction & UX Pain Point Audit — 6-step severity triage
10. UI & Functionality Audit — 6-domain professional audit (Visual Design, Layout, Responsiveness, Interactive Elements, Motion, Performance), each scored 1-10 with weighted overall X/10

Here are all 45 critiques:

---

${critiquesText}

---

## Your Task

Synthesise all 45 critiques into a single, authoritative master report and development plan. Structure it exactly as follows:

---

# Swoop Club Intelligence — Website Audit Master Report
**Date:** ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
**Pages Audited:** 5 | **Critique Lenses:** 9 | **Total Findings:** [count]

---

## 1. Executive Summary
One paragraph. Overall site health verdict. Single most important thing to fix. Single biggest thing working well.

## 2. Overall Site Health Dashboard

| Page | UX Health | Propensity | Risk Level | UI Score | Top Issue |
|------|----------|-----------|-----------|----------|-----------|
| Home | X/100 | X% | low/normal/elevated/high | X.X/10 | ... |
| Platform | ... | ... | ... | ... | ... |
| Pricing | ... | ... | ... | ... | ... |
| About | ... | ... | ... | ... | ... |
| Contact | ... | ... | ... | ... | ... |
| **Site Average** | **X/100** | **X%** | **X** | **X.X/10** | |

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

## 6. Quick Wins vs. Structural Fixes Summary

**Quick Wins (ship this week):** [bulleted list, max 5]

**Structural Fixes (next quarter):** [bulleted list, max 5]

## 7. Confidence & Methodology Note
Note the confidence levels assigned across the technical audit, any areas where the screenshot-only analysis has limitations, and what additional data (heatmaps, analytics, user testing) would sharpen the recommendations.

---

Rules:
- Every claim must be traceable to at least one of the 45 critique files.
- No hallucinated findings — only synthesise what the critiques actually reported.
- Dollar estimates should use the $18K ACV / 20-30% demo conversion benchmarks consistently.
- Write for a technical founder / product team — specific, actionable, no fluff.
- The entire report should be scannable in under 10 minutes.`;

  const result = await model.generateContent(prompt);
  const masterReport = result.response.text();

  const outPath = path.join(outputDir, 'MASTER_REPORT.md');
  writeFile(outPath, masterReport);
  return outPath;
}

// ---------------------------------------------------------------------------
// Score Extraction — pull numeric scores from critique text
// ---------------------------------------------------------------------------

function extractScores(pageCritiques) {
  const scores = {
    uxHealth:         null,
    riskLevel:        null,
    riskNumeric:      null,
    propensity:       null,
    frictionCritical: 0,
    uiOverall:        null,  // X/10 from UI & Functionality lens
  };

  for (const c of pageCritiques) {
    const text = c.content || '';

    // UX Health Score: "UX Health Score: 84/100" or "Score: 84/100"
    if (c.lens === 'UX Health Monitor' && scores.uxHealth === null) {
      const m = text.match(/(?:ux\s*health\s*score|score)[:\s]+(\d{1,3})\s*\/\s*100/i);
      if (m) scores.uxHealth = parseInt(m[1], 10);
    }

    // Risk Level: "Risk Level: elevated" or "**elevated**"
    if (c.lens === 'Design Game Plan' && scores.riskLevel === null) {
      const m = text.match(/risk\s*level[:\s*"*]+\**(low|normal|elevated|high)\**/i);
      if (m) {
        scores.riskLevel = m[1].toLowerCase();
        scores.riskNumeric = { low: 95, normal: 75, elevated: 55, high: 30 }[scores.riskLevel] ?? 60;
      }
    }

    // Propensity: "Propensity: 65%" or "65% propensity"
    if (c.lens === 'Growth Pipeline' && scores.propensity === null) {
      const m = text.match(/(?:propensity|overall\s+propensity)[:\s]+(\d{1,3})\s*%/i)
              || text.match(/(\d{1,3})\s*%\s*(?:propensity|conversion)/i);
      if (m) scores.propensity = parseInt(m[1], 10);
    }

    // Friction critical count
    if (c.lens === 'Friction & UX Pain Point Audit') {
      const matches = text.match(/\bCritical\b/gi) || [];
      scores.frictionCritical = matches.length;
    }

    // UI & Functionality overall score: "Overall Score: 7.6 / 10" or "Weighted Total … 7.6 / 10"
    if (c.lens === 'UI & Functionality Audit' && scores.uiOverall === null) {
      const m = text.match(/(?:overall\s*score|weighted\s*total)[:\s*|]+(\d+(?:\.\d+)?)\s*\/\s*10/i);
      if (m) scores.uiOverall = parseFloat(m[1]);
    }
  }

  // Composite: average across numeric signals (normalise to 0-100)
  const parts = [
    scores.uxHealth,
    scores.riskNumeric,
    scores.propensity,
    scores.uiOverall !== null ? scores.uiOverall * 10 : null,
  ].filter((v) => v !== null);
  scores.composite = parts.length ? Math.round(parts.reduce((a, b) => a + b, 0) / parts.length) : null;

  return scores;
}

function allPagesAtTarget(cycleScores) {
  return Object.values(cycleScores).every(
    (s) => s.uxHealth !== null && s.uxHealth >= TARGET_UX &&
            s.riskLevel === 'low' &&
            (s.propensity === null || s.propensity >= TARGET_UX) &&
            s.frictionCritical === 0 &&
            (s.uiOverall === null || s.uiOverall >= 9.5)
  );
}

function detectRegressions(prevScores, currScores) {
  const regressions = [];
  for (const [page, curr] of Object.entries(currScores)) {
    const prev = prevScores[page];
    if (!prev) continue;
    if (curr.uxHealth !== null && prev.uxHealth !== null && curr.uxHealth < prev.uxHealth) {
      regressions.push({ page, lens: 'UX Health', prev: prev.uxHealth, curr: curr.uxHealth });
    }
    if (curr.riskNumeric !== null && prev.riskNumeric !== null && curr.riskNumeric < prev.riskNumeric) {
      regressions.push({ page, lens: 'Risk Level', prev: prev.riskLevel, curr: curr.riskLevel });
    }
    if (curr.propensity !== null && prev.propensity !== null && curr.propensity < prev.propensity) {
      regressions.push({ page, lens: 'Propensity', prev: prev.propensity, curr: curr.propensity });
    }
    if (curr.frictionCritical > (prev.frictionCritical ?? 0)) {
      regressions.push({ page, lens: 'Friction Critical', prev: prev.frictionCritical, curr: curr.frictionCritical });
    }
    if (curr.uiOverall !== null && prev.uiOverall !== null && curr.uiOverall < prev.uiOverall) {
      regressions.push({ page, lens: 'UI Overall', prev: prev.uiOverall, curr: curr.uiOverall });
    }
  }
  return regressions;
}

// ---------------------------------------------------------------------------
// Main — single cycle: screenshot → critique → score → recommend → EXIT
// Claude reviews recommendations and applies changes between cycles.
// ---------------------------------------------------------------------------

async function main() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('Error: GEMINI_API_KEY environment variable is not set.');
    console.error('Usage: GEMINI_API_KEY=<your_key> node scripts/website-critique.mjs');
    process.exit(1);
  }

  const genAI = new GoogleGenerativeAI(apiKey);

  const run = timestamp();
  const outputDir = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    '..',
    'website-critique-output',
    run
  );
  await ensureDir(outputDir);

  console.log(`\n🚀  Swoop Website Critique — run ${run}`);
  console.log(`📁  Output: ${outputDir}`);
  console.log(`🎯  Target: UX Health ≥ ${TARGET_UX}/100, Risk = low, 0 critical friction, UI ≥ 9.5/10\n`);

  // ── 1. Screenshots ──────────────────────────────────────────────────────
  const screenshotResults = await takeScreenshots(outputDir);
  if (screenshotResults.length === 0) {
    console.error('No screenshots captured. Aborting.');
    process.exit(1);
  }

  // ── 2. Critiques (10 lenses × 5 pages) ─────────────────────────────────
  const allCritiques = await runAllCritiques(genAI, screenshotResults, outputDir);

  // ── 3. Extract & print scores ───────────────────────────────────────────
  const scores = {};
  for (const page of screenshotResults) {
    const pageCritiques = allCritiques.filter((c) => c.page === page.label);
    scores[page.slug] = extractScores(pageCritiques);
  }

  console.log('\n📊  Scores:');
  for (const [slug, s] of Object.entries(scores)) {
    const ui = s.uiOverall !== null ? s.uiOverall.toFixed(1) : '?';
    console.log(`  ${slug.padEnd(12)} UX:${String(s.uxHealth ?? '?').padStart(3)}  Risk:${(s.riskLevel ?? '?').padEnd(8)}  Prop:${String(s.propensity ?? '?').padStart(3)}%  Friction-Crit:${s.frictionCritical}  UI:${ui}/10`);
  }

  writeFile(path.join(outputDir, 'scores.json'), JSON.stringify({ run, scores }, null, 2));

  if (allPagesAtTarget(scores)) {
    console.log('\n🎉  All pages at target! No further changes needed.');
  }

  // ── 4. Recommendations (one file per page) ──────────────────────────────
  await runAllRecommendations(genAI, screenshotResults, allCritiques, outputDir);

  // ── 5. Master report ────────────────────────────────────────────────────
  await consolidate(genAI, allCritiques, screenshotResults, outputDir);

  console.log(`\n✅  Done!`);
  console.log(`   Screenshots    : ${path.join(outputDir, 'screenshots')}`);
  console.log(`   Critiques      : ${path.join(outputDir, 'critiques')} (${allCritiques.length} files)`);
  console.log(`   Recommendations: ${path.join(outputDir, 'recommendations')}`);
  console.log(`   Master Report  : ${path.join(outputDir, 'MASTER_REPORT.md')}`);
  console.log(`   Scores         : ${path.join(outputDir, 'scores.json')}`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
