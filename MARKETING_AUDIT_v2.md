# Swoop Marketing Website Audit — Storyboard + MVP Alignment Review
## v2 · Post-Implementation State Against Demo Storyboard v5 + Product Audit MVP v5

**Date:** April 15, 2026
**Source inputs:**
- Demo Storyboard v5 (`swoop_demo_storyboard (5).html`) — 3 pilot demo stories, 14 steps, presenter scripts, survey validation
- Product Audit MVP Alignment v5 — 10-club quantitative survey, 4-club qualitative deep-dive
- Live website codebase (April 2026 build, post-v1 audit implementation)

**Method:** Each page evaluated top-to-bottom against the storyboard's demo-stopping moments, Layer 3 differentiators, and survey-validated signals. Page tops weighted highest — what a GM sees in the first viewport determines whether they scroll. Findings sorted by severity: 🔴 Critical, 🟡 Moderate, 🟢 Positive.

---

## STORYBOARD REFERENCE — Three Demo Stories

The storyboard structures the entire Swoop pitch around three buyer scenarios. Every marketing page should map to at least one.

| Story | Persona | Opening Hook | Demo-Stopper | Anchor Number |
|-------|---------|-------------|-------------|---------------|
| **1 — Saturday Morning Briefing** | Daniel, Director of Golf | "4 systems, 4 logins, nobody does that on a Saturday morning" | $31/slow round lost in post-round dining (22% vs 41% conversion) | 220 rounds + weather + 3 at-risk members + 2 servers short — one sentence |
| **2 — The Quiet Resignation Catch** | GM, any 400-member club | "CRM says active. Tee sheet says booked. Only the health score reveals the decay." | Decay sequence: email → golf → dining (first domino) | $32K annual dues saved from one call |
| **3 — The Revenue Leakage Discovery** | GM + F&B Committee, board prep | "80% of clubs run F&B at a loss. Nobody can tell the board WHERE the money is going." | $9,580/month decomposed: $5,760 pace + $3,400 staffing + $420 weather | 4-tab Board Report — "the story writes itself" |

**Survey validation embedded in storyboard:**
- 70% of GMs spend 2–5 hrs/week bridging system gaps manually. 0% fully integrated.
- 90% value daily member health scores. Cockpit preference: 50%.
- Service consistency: 70% top-3. Staffing alignment: 60% top-3.
- 70% currently reactive — learn about dissatisfaction only after complaints.
- 80% of clubs run F&B at a loss. Board #1 concern: financial performance (40%).

---

## HOMEPAGE (HomePage.jsx)

### Page Top — Current State

```
HeroSection
├── Eyebrow: "AI-Powered Operating Intelligence for Private Clubs"
├── Headline: "Your tee sheet, POS, and CRM each see part of the picture.
│              Swoop assembles it into one 6 AM brief."
├── Subheadline: "Most software tells you what happened. Swoop tells you what to do next."
├── CTAs: Book Walkthrough / See a sample brief
├── Trust line: "Every recommended action requires your approval before anything is sent."
├── Quote: "Recovered $74K in dues." — Founding-partner GM (anonymous)
├── Trust bullets: "4 systems, 1 screen, zero Saturday morning tab-switching"
│                  "Members flagged before they churn"  "Live in under 2 weeks"
└── Proof columns: SEE IT / FIX IT / PROVE IT

SeeItFixItProveItSection (second section, below fold)
├── SEE IT: Decay arc (email → golf → dining) + $31/slow round + "4 logins" close
├── FIX IT: GM callback card, one-tap approval
└── PROVE IT: 4-tab board report named + $9,580/mo F&B leakage decomposition
```

### Storyboard Alignment — Homepage

| Storyboard Element | In Hero Viewport? | Notes |
|---|---|---|
| "4 systems → 1 screen" | ✅ trust bullet | Good placement, immediately scannable |
| $31/slow round | ❌ not in hero | In SeeItFixItProveItSection — below fold on most screens |
| Decay arc (email → golf → dining) | ❌ not in hero | Appears in SEE IT copy, below fold |
| Cross-domain synthesis sentence | ⚠️ implied | Headline names 3 systems but not weather or the specific Saturday moment |
| Weather data signal | ❌ absent site-wide | Story 1 Steps 2 and 4 depend on weather. No weather mention in hero or brief preview |
| Manual approval / trust ramp | ✅ hero | "Every recommended action requires your approval" — correct placement |
| Social proof | ⚠️ anonymous | Quote is real but attribution generic. Story 3 names Bowling Green CC. |

### 🔴 Critical — Homepage

**C1. The hero eyebrow is generic corporate language.**
"AI-Powered Operating Intelligence for Private Clubs" does not match how the storyboard opens. Story 1 Step 1 never says "AI-Powered" — it says "Saturday morning. 220 rounds booked. He has no idea." The storyboard leads with the operational story, not the tech category. A GM reading "AI-Powered Operating Intelligence" learns nothing about their Monday morning pain.

**Fix:** Change eyebrow to `"Club Intelligence for GMs and Directors of Golf"` — role-specific, not tech-jargon. Alternatively: `"Your tee sheet, CRM, and POS — assembled into one 6 AM brief"`.

---

**C2. $31/slow round is below the fold on the homepage.**
The storyboard calls this stat "demo-stopping" twice — in Story 1 (Saturday staffing gap) and Story 3 (revenue leakage). It currently lives in the SEE IT copy block, which is the second section. The most powerful conversion stat on the page is hidden from visitors who don't scroll.

**Fix:** Add to the Staffing Gap BRIEF_ITEM detail line: `"Saturday lunch: 95 covers forecast · 6 staff scheduled · $31/round lost when dining skips"`. Or add as a 4th proof column stat in the hero.

---

**C3. Weather data is absent from the brief preview and all hero elements.**
Story 1 Steps 2 and 4 both depend on weather: "82°F and clear" drives the 220-round forecast and the staffing recommendation. The storyboard explicitly states: "Tee sheet data, weather data, member health data, and staffing data all came together in one sentence." The brief preview shows Member Pulse / New Member Alert / Service Recovery / Staffing Gap but no weather signal — making the Story 1 cross-domain synthesis impossible to demonstrate from the homepage.

**Fix:** Add a weather item to `BRIEF_ITEMS` in HeroSection.jsx:
```js
{ time: '06:14', label: 'Weather + Demand', detail: '82°F and clear · 220 rounds forecast · post-round dining: 41% conversion if staffed', value: 'Staff up' }
```

---

### 🟡 Moderate — Homepage

**M1. Social proof remains anonymous.**
"Founding-partner GM · 450-member private club" is unchanged from v1. The storyboard references Bowling Green CC, Pinetree CC, Pine Island CC, and Spring Brook CC by name. Requires founder permission to resolve — but should be tracked as a credibility gap.

**M2. "Director of Golf" persona not addressed in hero.**
Story 1 is specifically written for Daniel Soehren, Director of Golf — not a GM. The hero trust bullets, proof columns, and CTAs don't acknowledge this role. No headline or subheadline speaks to the DOG's Saturday morning ops problem.

**Fix:** Change hero eyebrow to include "Directors of Golf" (see C1 fix above).

---

### 🟢 Positive — Homepage

- ✅ "4 systems, 1 screen, zero Saturday morning tab-switching" trust bullet nails Story 1 opening hook
- ✅ Manual approval trust line correctly positioned above the fold
- ✅ BRIEF_ITEMS include New Member Alert (Day 47) — #1 survey finding in the hero
- ✅ SEE IT block names decay arc and the $31 stat
- ✅ PROVE IT block names the 4-tab board report structure
- ✅ $9,580/mo F&B leakage panel in PROVE IT
- ✅ "Engagement Autopilot" bug fixed — now "Engagement Advisor" throughout

---

## PLATFORM PAGE (PlatformPage.jsx)

### Page Top — Current State

```
Platform Hero (SectionShell band="cream")
├── Eyebrow: "Platform"
├── Headline: "Stop guessing who's drifting. Start protecting your dues."
├── Sub-copy: "Swoop catches at-risk members 6.4 weeks earlier"
├── "70% of GMs learn about member dissatisfaction only after a complaint arrives."
└── CTAs: Book 30-Min Walkthrough / Request sample brief

Sticky sub-nav

Survey stat strip
├── 70%: GMs bridge 4 systems manually
├── 90%: value daily health scores, only 10% have them today
└── 80%: clubs run F&B at a loss, no line-item visibility

CoreCapabilitiesSection (6 capability cards)
HowItWorksSection (morning brief card)
AgentsSection (6 agents + approval callout)
SaveStorySection (Fix It + Prove It panels)
"Three Ways Swoop Pays for Itself" (3 story scenario cards)
Mid-page CTA
Integrations / Comparison / Security
```

### Storyboard Alignment — Platform Page

| Storyboard Element | On Platform Page? | Notes |
|---|---|---|
| Story 1 — Saturday morning cross-domain view | ✅ HowItWorksSection | Morning brief card shows relevant items |
| Story 1 — "4 logins → 1 screen" | ✅ survey strip | 70% stat communicates the pain |
| Story 1 — $31/slow round | ❌ absent | Not in HowItWorksSection, hero, or capability cards |
| Story 1 — weather signal | ❌ absent | HowItWorksSection briefRows have no weather item |
| Story 2 — Decay sequence visual | ❌ absent | Named in copy but no timeline visualization exists |
| Story 2 — Health score drop (78 → 54) | ❌ absent | No health score arc visualization on any page |
| Story 3 — $9,580/mo decomposition | ✅ SaveStorySection | In PROVE IT panel, mid-page |
| Story 3 — 4-tab Board Report | ✅ CoreCapabilities | "Prove the save to your board" capability card |
| Three storyboard scenarios as framework | ✅ bottom of page | "Three ways" section present but positioned too low |

### 🔴 Critical — Platform Page

**C4. Platform hero is retention-only. Story 1 (Saturday ops) and Story 3 (revenue leakage) are invisible at the top.**
"Stop guessing who's drifting" and "6.4 weeks earlier" speak exclusively to churn. A Director of Golf or F&B committee member sees nothing relevant to their problem until deep into the page.

**Fix:** Add a deck line after the "70% reactive" stat: `"Whether you're catching the Saturday staffing gap, the member quietly drifting, or preparing your F&B board report — one screen connects your tee sheet, POS, CRM, and scheduling data before 6 AM."`

---

**C5. The decay sequence has no visual representation on any page.**
Story 2 Step 2 is built around a specific visualization: health score drop from 78 to 54, with a three-row timeline (email opens fall 3 weeks ago, golf frequency dips 2 weeks ago, dining stops 18 days ago). This is the KEY MOMENT of Story 2: "CRM says active. Tee sheet says present. Only the composite view reveals the trajectory." It is named in copy but never shown visually anywhere on the site.

**Fix:** Add a decay timeline card to HowItWorksSection or CoreCapabilitiesSection — three rows, one member, three declining signals with timestamps. No external assets needed; buildable in JSX.

---

**C6. $31/slow round is absent from the Platform page.**
The storyboard's most-repeated demo-stopping stat doesn't appear anywhere on the Platform page — not in the hero, HowItWorksSection, F&B capability card, or Staffing capability card. Visitors who land directly on the Platform page miss the most compelling single data point the product generates.

**Fix:** Add to HowItWorksSection `briefRows`:
```js
{ label: 'Pace of play · F&B link', detail: 'Slow rounds → 22% dining conversion vs 41% · $31/round revenue gap', value: '$31/round', rank: 4 }
```
Also add to the F&B Operations capability card bullets: `"Every slow round that skips post-round dining costs $31. Swoop surfaces the bottleneck before Saturday's sheet fills."`

---

### 🟡 Moderate — Platform Page

**M3. Weather data absent from HowItWorksSection.**
Story 1 connects weather demand → tee sheet volume → dining conversion → staffing coverage in a single insight chain. HowItWorksSection's briefRows have no weather-driven row, making Story 1's cross-domain synthesis undemonstrable from the Platform page.

**M4. "Three ways Swoop pays for itself" section is at the bottom of the Platform page.**
The three-scenario section (Stories 1, 2, and 3) is the organizing framework of the storyboard — not a closing summary. It should anchor the Platform page, not close it. Visitors who don't scroll past Capabilities, HowItWorks, Agents, and SaveStory never reach the use-case framing.

**Fix:** Move "Three ways" section to immediately after the hero and survey stat strip, before CoreCapabilitiesSection.

---

### 🟢 Positive — Platform Page

- ✅ "70% of GMs learn about dissatisfaction only after a complaint" in hero sub-copy
- ✅ 3-stat survey strip above capabilities (70% / 90% / 80%) — correct placement, correct stats
- ✅ "GM Approval Required" callout in AgentsSection — prominent and specific
- ✅ "Engagement Advisor" — not "Autopilot"
- ✅ Board Report capability card with specific bullet detail
- ✅ $9,580/mo F&B leakage panel in PROVE IT
- ✅ 90-day new member bullet in Member Intelligence capability
- ✅ Three storyboard scenario cards present on page

---

## PRICING PAGE (PricingPage.jsx)

### Page Top — Current State

```
PricingHero (SectionShell band="dark")
├── Eyebrow: "PRICING"
├── Headline: "Stop losing $74K a year in silent member attrition. Start for zero."
├── Sub-copy: "5 of 7 founding-partner clubs recovered Swoop's annual cost within 60 days"
├── CTA: Calculate your ROI →
└── Stats grid:
    ├── 65%    — Avg at-risk member retention rate
    ├── $74K   — Avg dues recovered per club in first 90 days
    └── $9,580 — Avg monthly F&B leakage surfaced (new)

ROI Calculator
Bridge copy → Signals + Actions plan highlighted
Pricing tiers (Signals / Signals+Actions / Enterprise)
```

### Storyboard Alignment — Pricing Page

| Storyboard Element | In Hero Viewport? | Notes |
|---|---|---|
| Story 1 ROI ($31/round staffing) | ❌ absent | Not in hero stats or tier descriptions |
| Story 2 ROI ($32K saves) | ⚠️ indirect | $74K covers multiple saves, not named per story |
| Story 3 ROI ($9,580 F&B) | ✅ hero stat | Correctly placed in hero grid |
| Board Report deliverable | ⚠️ partial | In $499 tier features but not hero |
| Buyer persona mapped to tier | ❌ absent | No story-to-tier mapping visible |
| Manual approval framing | ❌ absent | Not mentioned on pricing page |

### 🔴 Critical — Pricing Page

**C7. Pricing tiers are not mapped to the three storyboard buyer personas.**
A Director of Golf asking "which tier covers my Saturday morning briefing?" can't answer that from this page. A GM asking "which tier gives me the Board Report?" can find it buried in the $499 feature list. The storyboard's three use cases are the most validated buying scenarios — the pricing page should map each tier to at least one.

**Fix:** Add a "Best for" line under each tier name in `data.js` pricingTiers:
- Signals: `"Best for GMs who want to know who's at risk before they resign"`
- Signals + Actions: `"Best for Directors of Golf and GMs managing daily ops, staffing, and board reporting"`
- Enterprise: `"Best for multi-property clubs and CFOs who need full attribution"`

---

**C8. Pricing hero headline is 100% retention-framed. Story 3 (F&B / board) buyer is underserved.**
"Stop losing $74K in silent member attrition" speaks to churn. A CFO or F&B committee chair looking for operational leakage ROI reads this and thinks "not my problem." Story 3 is a distinct buying motivation.

**Fix:** Expand headline or add sub-deck: `"Stop losing $74K in member attrition — and $9,580/month in F&B leakage you can't explain to your board. Start for zero."`

---

### 🟡 Moderate — Pricing Page

**M5. "Board-ready monthly report" is buried as the third feature in the $499 tier.**
The storyboard says "The Board Report alone could justify a subscription for many clubs." It is listed as one of six features in the tier, not the lead feature, and not in the tier description paragraph. For the board-approval-required buyer, this is the most important deliverable on the page.

**Fix:** Move "Board-ready monthly report" to the first feature in the $499 tier list. Add to the tier description: `"Includes the one-click board report that shows exactly where dues were protected this month."`

---

### 🟢 Positive — Pricing Page

- ✅ $9,580/mo F&B leakage stat in hero grid — correct story, correct placement
- ✅ $74K recovery stat anchors retention ROI
- ✅ "Board-ready monthly report" in $499 tier features
- ✅ "90-day new member cohort alerts" in free tier
- ✅ ROI Calculator directly addresses "1/5 ROI confidence" survey finding
- ✅ Jonas FAQ correctly states CSV-only, native API on roadmap

---

## ABOUT PAGE (AboutPage.jsx)

### Page Top — Current State

```
Hero (SectionShell band="dark")
├── Eyebrow: "Built for Club GMs & COOs"
├── Headline: "Your members are telling you they're leaving.
│              Swoop makes sure you hear it — 6 weeks early."
└── Sub-copy: "Built by a former GM who lost a 12-year member..."

Origin Story
├── "I was the GM. These were my spreadsheets."
├── Credential badges: Former GM · Jonas partner · backed by hospitality ops
├── "12-year member resigned. Signals were there. Nobody connected them."
└── Pull quote: "The data was all there. It just lived in four different systems."
```

### 🟡 Moderate — About Page

**M6. About hero eyebrow excludes the Director of Golf buyer.**
Story 1's entire demo is built around Daniel Soehren, Director of Golf, Bowling Green CC. "Built for Club GMs & COOs" means a Director of Golf doesn't see themselves as the audience.

**Fix:** Change eyebrow to `"Built for GMs, Directors of Golf, and Club Operators"`.

**M7. Origin story maps perfectly to Story 2 but never bridges to Stories 1 and 3.**
A visitor who connects with the "lost a 12-year member" narrative is primed for Story 2. Nothing tells them Swoop also solves Saturday staffing (Story 1) or the F&B board meeting (Story 3).

**Fix:** Add one paragraph after the founder narrative: `"We built the tool that catches the quiet resignation — and the Saturday staffing gap — and the F&B leakage that nobody can explain at the board meeting. Three versions of the same problem: your data knows the answer, but nothing connects it in time."`

### 🟢 Positive — About Page

- ✅ Origin story perfectly mirrors Story 2 — the quiet resignation catch
- ✅ Pull quote ("The data was all there. It just lived in four different systems.") is the storyboard's core argument verbatim
- ✅ "Before you open your laptop" maps to the 6 AM brief timing
- ✅ "12-year member" specificity is emotionally resonant and credible

---

## CONTACT PAGE (ContactPage.jsx)

### Page Top — Current State

```
ContactHeroPanel
├── Headline: "Find the Members You're About to Lose. Before They Resign."
├── Sub-copy: "In 30 minutes, we connect to your tee sheet and POS..."
└── "What you'll leave with":
    ├── Ranked list of top 5 revenue and retention gaps
    ├── Benchmarks vs. 7 founding-partner clubs
    ├── Draft 90-day action plan
    └── Mutual NDA, data deleted within 30 days
```

### 🟡 Moderate — Contact Page

**M8. "What you'll leave with" list doesn't preview the three storyboard scenarios.**
The list describes outputs (ranked list, benchmarks, action plan) but not the experience. A GM who has read the platform page wants to know: "What exactly will I see in the 30 minutes?" The storyboard is a 3-act demo — the contact page should preview the acts.

**Fix:** Add a "What we'll show you" list:
```
✓ Your Saturday morning briefing — who's at risk, what the staffing gap is, and what it costs
✓ The member who's quietly drifting — their decay pattern across tee sheet, POS, and CRM  
✓ Your F&B leakage decomposed — where it's going and what the board report looks like
```

**M9. Contact hero is retention-only.**
"Find the Members You're About to Lose" speaks to Story 2. A Director of Golf with a Saturday ops problem or a CFO with an F&B board question reads this headline and thinks it's not for them.

### 🟢 Positive — Contact Page

- ✅ "30 minutes" timing matches storyboard duration (~10 min × 3 stories)
- ✅ "Revenue is leaking" language maps to Story 3
- ✅ "No pitch deck" framing removes selling-fear barrier
- ✅ Mutual NDA + data deletion addresses the trust concern the storyboard says surfaces in every sales conversation
- ✅ Technical disclosure panel (read-only access, AES-256, no model training) directly answers "Is my data safe?"

---

## CROSS-CUTTING GAPS (All Pages)

### 🔴 CX1. Weather data signal is absent from the entire website.
Story 1 Steps 2, 3, and 4 depend on weather as a data input. The storyboard's Layer 3 synthesis sentence explicitly includes weather: "Tee sheet data + **weather data** + member health data + staffing data — all in one sentence." The F&B capability card lists "POS + Tee Sheet + Weather" as data sources, but weather never appears in any copy, brief preview, or hero element. This is a named differentiator the storyboard calls out and the website never demonstrates.

**Fix locations:** HeroSection BRIEF_ITEMS, HowItWorksSection briefRows, Platform page "Three ways" Story 1 card.

---

### 🔴 CX2. The decay sequence has no visual representation on any page.
Story 2 Step 2 is built around a timeline visualization: health score 78 → 54, with email → golf → dining shown as a sequence. The website names it in copy ("email engagement fades first, golf frequency follows, dining stops last") but never shows it. The storyboard marks this as the KEY MOMENT of Story 2 and calls it the "first domino" concept — the proof that Swoop detects multi-system patterns before any single system flags them.

**Fix:** A JSX-only dark-card mockup in HowItWorksSection or the Member Intelligence capability card — three rows (Email / Golf / Dining), one member, three timestamps, one declining trend.

---

### 🟡 CX3. "Director of Golf" persona is not addressed on any page.
The storyboard's primary demo persona is Daniel Soehren, Director of Golf. The website addresses GMs, COOs, and boards throughout but never Directors of Golf — the role most directly affected by Story 1's Saturday morning scenario.

**Fix locations:** Homepage hero eyebrow, About page eyebrow, Platform page sub-copy.

---

### 🟡 CX4. The "Actions Queue" concept is not named on the website.
Stories 1 and 2 both show GMs approving from an "Actions queue" — a specific product concept where all AI recommendations surface in one approval inbox. The website says "one tap to approve" and "GM approval required" but never names the queue as a product feature, which is a concrete differentiator.

**Fix:** Add to AgentsSection: `"Every recommendation from every agent surfaces in one Actions Queue — review, approve, or dismiss in one place."`

---

### 🟡 CX5. Scenario slider / "What recovery looks like" concept is absent.
Story 3 Step 4 demonstrates an interactive scenario slider: "If we reduce slow rounds by 20%, we recover $1,152/month." The ROI Calculator does similar math at a high level but doesn't show operational scenario modeling at the $31/round granularity. The board buyer specifically needs "here's what happens if we fix THIS one thing."

---

## PRIORITY FIX ORDER

| Priority | Finding | Est. Impact | Effort | File(s) |
|----------|---------|-------------|--------|---------|
| P0 | CX1: Add weather signal to BRIEF_ITEMS and briefRows | Story 1 demo-stopper missing entirely | 20 min | `HeroSection.jsx`, `HowItWorksSection.jsx` |
| P0 | C1: Change hero eyebrow to operational / role-specific language | Generic corporate language in first viewport | 5 min | `HeroSection.jsx` |
| P0 | C2: Move $31/slow round into hero viewport | Demo-stopping stat below fold on homepage | 10 min | `HeroSection.jsx` |
| P0 | C7: Add "Best for" persona line to each pricing tier | Story-to-tier mapping missing for all 3 buyers | 15 min | `data.js` pricingTiers |
| P1 | CX2: Add decay sequence timeline visual | Story 2 key visual missing site-wide | 45 min | `HowItWorksSection.jsx` or new component |
| P1 | C4: Broaden Platform hero deck to all 3 stories | Director of Golf + board buyer invisible at top | 10 min | `PlatformPage.jsx` |
| P1 | C6: Add $31/slow round to Platform page | Story 1+3 stat absent from Platform | 10 min | `HowItWorksSection.jsx`, `data.js` |
| P1 | M4: Move "Three ways" section earlier on Platform | Story framework should lead, not close | 5 min | `PlatformPage.jsx` |
| P2 | CX3: Add "Director of Golf" to hero + About eyebrow | Story 1 persona missing site-wide | 10 min | `HeroSection.jsx`, `AboutPage.jsx` |
| P2 | CX4: Name the "Actions Queue" in product copy | Control mechanism concept not named | 10 min | `AgentsSection.jsx` |
| P2 | M7: Bridge About page origin story to all 3 scenarios | Only Story 2 is represented after founder narrative | 10 min | `AboutPage.jsx` |
| P2 | M8: Add "What we'll show you" to Contact page | Demo preview missing from conversion page | 20 min | `ContactPage.jsx` |
| P2 | C8: Broaden Pricing hero to include F&B leakage | Board/CFO buyer not addressed in headline | 10 min | `PricingPage.jsx` |
| P2 | M5: Promote Board Report to lead feature in $499 tier | Purchase justifier buried in feature list | 5 min | `data.js` pricingTiers |
| P3 | CX5: Add scenario slider to ROI Calculator | Board buyer "what if we fix one thing" missing | 3+ hrs | `RoiCalculatorSection.jsx` |
| P3 | M1/M2: Named social proof + Director of Golf in hero quote | Requires founder permission | On hold | `HeroSection.jsx` |

---

## WHAT'S BEEN IMPLEMENTED (v1 Audit → v2 Baseline)

All v1 audit findings have been resolved. The following were also completed as part of the storyboard alignment pass:

| Change | Status |
|--------|--------|
| "AI agent automation" → "AI-drafted action recommendations (GM-approved)" | ✅ |
| "Engagement Autopilot" → "Engagement Advisor" (all surfaces) | ✅ |
| "6 AGENTS ONLINE" → "LIVE · 6 INTELLIGENCE STREAMS" | ✅ |
| GPS/member app removed from $1,499 tier | ✅ |
| Jonas FAQ: CSV-only, native API on roadmap | ✅ |
| 90-day new member tracking in hero, pricing, capability, problem cards, AgentsLiveDemo | ✅ |
| F&B framing: "Dining frequency is the earliest churn signal" | ✅ |
| Complaint follow-through: problem card #1, Service Recovery scenario #2 | ✅ |
| Saturday lunch staffing: Labor Optimizer is scenario #1 in demo | ✅ |
| "Board-ready monthly report" in $499 tier features | ✅ |
| "Manual approval inbox" row in comparison table | ✅ |
| Hero trust line: "Every recommended action requires your approval" | ✅ |
| $9,580/mo F&B leakage in PROVE IT section + Pricing hero stat | ✅ |
| Decay arc (email → golf → dining) named in SEE IT copy | ✅ |
| 4-tab Board Report named in PROVE IT copy | ✅ |
| 3-stat survey strip above CoreCapabilities (70% / 90% / 80%) | ✅ |
| "Three ways Swoop pays for itself" — all 3 storyboard scenarios on Platform page | ✅ |
| "4 systems, 1 screen" trust bullet in homepage hero | ✅ |
| "70% reactive" stat in Platform page hero sub-copy | ✅ |
| $31/slow round in SEE IT copy (homepage, below fold) | ✅ Partial — still needed in hero viewport and Platform page |
