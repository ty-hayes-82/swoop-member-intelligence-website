

# Swoop Club Intelligence — Website Audit Master Report

**Date:** April 14, 2026
**Pages Audited:** 5 | **Agents:** 8 (The Eight Lenses) | **Max Composite:** 800/800 | **Total Findings:** 287

---

## 1. Executive Summary

Swoop's marketing site has genuinely excellent copywriting and a strong narrative architecture — the best in vertical club-tech SaaS — but it is critically undermined by a near-total absence of verifiable social proof, which every single agent on every single page flagged as the dominant trust gap. The site asks conservative, board-accountable club GMs to trust an unidentified company with no named client list, no case studies, no visible team depth, and a Vercel staging URL, to hand over sensitive member POS and tee-sheet data. The copy earns attention; the proof infrastructure loses the deal. **The single most important thing to fix:** add 2–3 named club testimonials with specific dollar outcomes, visible on every page, starting with the Home and Contact pages — this one change would lift every agent's score simultaneously and could increase demo conversion by 25–40%. **The single biggest thing working well:** the operationally specific, GM-native voice — lines like "Take a dollar number to the board. Not a feeling." and "Your tee sheet, POS, and CRM each see part of the picture. Swoop assembles it into one 6 AM brief." demonstrate rare buyer empathy that no competitor in this vertical matches.

---

## 2. Overall Site Health Dashboard

| Page | Architect | GM | Closer | Speedster | Skeptic | Storyteller | First-Timer | Brand Guardian | Mobile | Composite /900 | Top Issue |
|------|----------|----|--------|-----------|---------|-------------|-------------|----------------|--------|----------------|-----------|
| Home | 61 | 74 | 68 | 52 | 42 | 82 | 84 | 78 | 61 | **602/900** | Zero named social proof anywhere on page |
| Platform | 58 | 64 | 58 | 62 | 28 | 74 | 78 | 78 | 62 | **562/900** | No named clients, no pricing, CTA desert mid-page |
| Pricing | 59 | 74 | 71 | 58 | 52 | 72 | 82 | 74 | 62 | **604/900** | Pricing tiers buried below fold; calculator assumptions opaque |
| About | 54 | 74 | 62 | 68 | 52 | 68 | 72 | 74 | 62 | **586/900** | No product visuals; hero doesn't name target audience |
| Contact | 60 | 76 | 78 | 78 | 52 | 82 | 78 | 72 | 82 | **658/900** | Single testimonial; no navigation to rest of site |
| **Site Avg** | **58** | **72** | **67** | **64** | **45** | **76** | **79** | **75** | **66** | **602/900** | **Social proof deficit is the #1 site-wide conversion killer** |

*Note: Nine agents were applied (The Eight Lenses + Mobile Inspector). Composite is out of 900.*

**Key Observations:**
- **The Skeptic scores are devastating** (site average: 45/100). This is the single weakest dimension and the biggest threat to conversion.
- **The Storyteller and First-Timer scores are the strongest** (76 and 79), confirming that the copy and information architecture are well above average.
- **The Contact page is the highest-performing page** (658/900) — its focused, single-purpose design and strong objection handling outperform the more complex pages.
- **The Platform page is the weakest** (562/900) — dense content with no conversion capture between hero and footer.

---

## 3. Cross-Page Patterns

### Critical Patterns (fix first)

**1. Zero Verifiable Social Proof (flagged by: Skeptic ×5, GM ×5, Closer ×5, First-Timer ×5 = 20 citations)**
Not a single page displays a named club logo bar, a named case study with before/after data, or more than one attributed testimonial. The Platform page has zero testimonials. The Home page has unattributed or "synthesized and anonymized" quotes. The Pricing page has one named quote (Landon Mokma, Pinnacle CC). The Contact page has one named quote (Robert Torres, Meridian Hills CC). The About page has founding-partner quotes with partial attribution. For a trust-dependent sale in a peer-referral industry, this is the #1 conversion killer. Every agent, every page, flagged this.

**2. No Product Visuals / No Real UI Screenshots (flagged by: Skeptic ×5, GM ×4, First-Timer ×4, Architect ×3 = 16 citations)**
Across all five pages, there is not a single confirmed real product screenshot. The Home page shows what appear to be designed mockups. The Platform page shows stylized dashboard representations. The Pricing, About, and Contact pages show zero product UI. A GM cannot evaluate what their staff would actually use. Multiple agents noted this creates a "vaporware" perception.

**3. White (#FFFFFF) Backgrounds Instead of Brand Cream/Sand (flagged by: Brand Guardian ×5, Architect ×3 = 8 citations)**
Every page uses pure white for light-section backgrounds instead of the brand-specified cream (#F7F5F2) or sand (#F2ECE1). This makes mid-page sections feel generic rather than premium. The Brand Guardian flagged this as the single highest-impact brand fix across all pages.

**4. Body Text Below 16px in Mid-Page Sections (flagged by: Mobile ×5, Architect ×4 = 9 citations)**
Feature card descriptions, pricing tier feature lists, FAQ answer text, stat card labels, and integration section copy all render at approximately 12–14px across multiple pages. This fails WCAG minimums and is particularly problematic for the 40–60 age demographic of target GMs.

**5. No Mid-Page CTAs on Long-Scroll Pages (flagged by: Closer ×3, Architect ×2, First-Timer ×2 = 7 citations)**
The Home, Platform, and About pages are all 8–12+ viewport scrolls long with CTAs only in the hero and footer. A visitor convinced at section 5 has no conversion mechanism within thumb's reach. The Closer estimated this loses 60–70% of engaged visitors on the Platform page.

**6. Vercel Staging URL (flagged by: Skeptic ×4, First-Timer ×2 = 6 citations)**
The site is deployed on `swoop-member-intelligence-website.vercel.app` — not a production domain. Multiple agents noted this signals "pre-launch" or "prototype" and would fail basic due diligence by a careful buyer.

**7. Custom Font Loading Blocking LCP (flagged by: Speedster ×5 = 5 citations)**
Every page uses Fraunces serif for display headlines without evidence of preloading or font-display optimization. The Speedster estimated 500–1500ms LCP delay from font loading alone, pushing all pages past the 2.5s LCP threshold.

**8. Inconsistent CTA Language Across Pages (flagged by: Brand Guardian ×4, Closer ×3 = 7 citations)**
CTA copy varies widely: "See your 6AM brief," "Book a Walkthrough," "Book a 30-Min Walkthrough," "Book a Walkthrough With Your Members," "Get My Custom Retention Plan," "Calculate your ROI," "Complete a founding partner application," "See the Full Platform." The Brand Guardian recommends a maximum of 2–3 standardized CTA phrases site-wide.

**9. Brass Accent (#B5956A) Underutilized (flagged by: Brand Guardian ×5 = 5 citations)**
The brass/gold secondary accent — a key brand differentiator for dark sections — is absent or barely visible on all five pages. Orange carries all accent duties, flattening the premium palette.

**10. No Pricing Signal on Platform, About, or Contact Pages (flagged by: GM ×3, Closer ×2, First-Timer ×3 = 8 citations)**
Only the Home and Pricing pages show pricing. The Platform, About, and Contact pages give zero cost indication, forcing 100% of evaluation into a sales call — which high-autonomy club GMs resist.

### Positive Patterns (protect and replicate)

**1. Operationally Specific, GM-Native Voice (praised by: Storyteller ×5, GM ×5, First-Timer ×5, Brand Guardian ×5 = 20 citations)**
Lines like "Take a dollar number to the board. Not a feeling," "Your tee sheet, POS, and CRM each see part of the picture," and "Stop guessing who's drifting. Start protecting your dues." demonstrate deep buyer empathy. Every agent praised the copy quality. This is Swoop's #1 competitive advantage and must be protected.

**2. Transparent Pricing with $0 Entry Tier (praised by: GM ×2, Closer ×2, Skeptic ×2, First-Timer ×2 = 8 citations)**
"Start at zero. Upgrade when the math shows up." with visible $0/$499/$1,499 tiers is genuinely rare in club tech and was cited as the single strongest trust mechanism by the Skeptic on the Home page.

**3. Strong Narrative Architecture (praised by: Storyteller ×5, First-Timer ×5 = 10 citations)**
Every page follows a logical persuasion arc. The Home page progresses from fragmented data → unified intelligence → automated action → financial proof → member experience → integration → pricing. The Pricing page moves from pain → calculator → proof → tiers → FAQ. The First-Timer scored Progressive Understanding at 88–92 across all pages.

**4. Interactive ROI Calculator on Pricing Page (praised by: Closer, GM, First-Timer, Architect = 4 citations)**
The personalized calculator that outputs club-specific dollar figures is the strongest conversion element on the entire site. It transforms passive pricing into active self-discovery and was called "the gravitational center of the page" by the First-Timer.

**5. Contact Page Objection Handling (praised by: Closer, GM, Skeptic, Storyteller = 4 citations)**
The Contact page's "What You'll Leave With" checklist, mutual NDA commitment, 30-day data deletion promise, and transparent 3-step process earned the highest Closer score (78) of any page.

**6. Fraunces Serif Display Typography (praised by: Architect ×3, Brand Guardian ×5, Storyteller ×2 = 10 citations)**
The editorial serif creates immediate visual differentiation from the Inter/Roboto SaaS monoculture and is appropriate for the premium club audience. This is the single most effective typographic decision on the site.

---

## 4. Page-by-Page Priority List

### Home / Landing (602/900)

**1. Add 2–3 named club testimonials with specific dollar outcomes.**
Place one immediately below the hero CTAs, one after the "$42.2K" section, one above pricing. Even one real testimonial from a named club would transform credibility. The Skeptic scored Proof Density at 18/100. The GM said "If I can't find a single club name I recognize — or any club name at all — my skepticism alarm goes off hard." The Closer estimated this single change could lift hero-section conversion 15–30%.
*Evidence: Skeptic Home (18/100 Proof Density), GM Home ("The complete absence of named social proof"), Closer Home ("Fix #1: Add named testimonials")*

**2. Add count-up animations to stat callouts and animate the GM brief mockup.**
The $42.2K, $324, 9/14, $67K, and $1,480 figures are static. The Architect scored Motion at 30/100 — the lowest dimension on the Home page. Count-up animations triggered on scroll-enter are the highest-ROI motion investment (low effort, high engagement). The "What your GM sees at 6:15 AM" mockup should auto-scroll or highlight to demonstrate the product — this is the "show, don't tell" moment.
*Evidence: Architect Home (Motion 30/100), Closer Home ("The UI mockup is completely static"), Storyteller Home ("The 6:15 AM scenario is vivid and sticky")*

**3. Add a sticky header CTA and embed a lead capture form at the bottom of the page.**
The page is 12+ viewport scrolls long with no persistent conversion mechanism. The Closer noted: "A visitor who's convinced at section 6 should not have to scroll to find the next CTA." Add an inline form (Name, Email, Club) at the final CTA section instead of just a button. The Closer estimated a sticky CTA could capture 5–10% more engaged visitors.
*Evidence: Closer Home ("Add a sticky header CTA — 2-hour implementation"), Architect Home ("No form component visible — Critical"), First-Timer Home ("What would I click first?")*

### Platform (562/900)

**1. Add 3–4 mid-page contextual CTAs after key sections.**
The Platform page has only two CTAs (hero and footer) across 12+ sections. The Closer scored CTA Strategy at 38/100 — the lowest of any dimension on any page. "A visitor who's sold on the 'Six Jobs' section has to scroll significantly to take action." Add section-specific CTAs: "See what Swoop would flag at your club →" after the morning-coffee section, "Meet your six agents → Schedule a live demo" after the agents section.
*Evidence: Closer Platform (CTA Strategy 38/100), GM Platform ("I'm held back by the total absence"), First-Timer Platform ("What would I click first?")*

**2. Add a hero product visual — dashboard screenshot above the fold.**
The Platform page hero has no product image. The Architect noted: "For a product page, showing the product above the fold is critical. The first product visual doesn't appear until below the fold." The GM said: "I've scrolled this entire page and I have no idea what the product actually looks like."
*Evidence: Architect Platform ("Add hero product visual — Low effort, High impact"), GM Platform ("Show me the actual product"), First-Timer Platform ("I never saw the actual product")*

**3. Add named social proof — at minimum one named club with specific outcome.**
The Platform page Skeptic score is 28/100 — the lowest score in the entire audit. There is not one named client, not one testimonial, not one case study. The Skeptic said: "A careful buyer would think: 'This could be two people with a landing page and a GPT wrapper.'"
*Evidence: Skeptic Platform (28/100 overall, 8/100 Proof Density), GM Platform ("The credibility gap is serious"), Closer Platform ("Zero named social proof on the entire page is the single biggest credibility gap")*

### Pricing (604/900)

**1. Move pricing tiers higher — within 2 scrolls of hero.**
A user clicking "Pricing" expects to see prices. The Architect noted the tiers don't appear until scroll 4: "This violates the core user intent of the page." Consider placing the ROI calculator below or alongside pricing, not before it. The Architect scored Layout at 58/100 primarily due to this issue.
*Evidence: Architect Pricing ("Move pricing tiers higher — Critical"), Closer Pricing ("The page is built to convert, not just inform"), First-Timer Pricing ("I see three pricing tiers" — noted approvingly when found)*

**2. Visually differentiate the recommended $499/mo tier and add social proof inside the tier card.**
All three pricing cards have near-identical visual weight. The Architect noted: "The 'Recommended' badge doesn't sufficiently differentiate." The Closer recommended: "Add a proof point directly into the $499/mo tier card — 'Chosen by 5 of 7 founding clubs' or 'Avg. payback: <60 days.'" Make the middle CTA a filled orange button, other two ghost/outlined.
*Evidence: Architect Pricing ("Differentiate recommended tier — Critical"), Closer Pricing ("Add social proof inside the $499/mo pricing tier card"), GM Pricing ("The $1,499/mo tier feels like a jump without justification")*

**3. Dynamically populate post-calculator CTA with the visitor's specific recovery number.**
After the calculator shows "$80,000 in recovered revenue," the CTA says generic "Book a Walkthrough." It should say "See How to Recover Your $80,000 →" using the calculated figure. The Closer estimated this could lift calculator-to-CTA conversion by 15–25% via commitment/consistency.
*Evidence: Closer Pricing ("Dynamically populate post-calculator CTA — HIGH impact"), GM Pricing ("The ROI calculator... is brilliant in concept"), First-Timer Pricing ("The ROI calculator is the MVP of this page")*

### About (586/900)

**1. Add a product screenshot or video to the page.**
The About page has zero product visuals despite being a primary trust-building page. The GM said: "I've scrolled this entire page and I have no idea what the product actually looks like. The copy is strong... but I'm being asked to take a next step based entirely on words." The Skeptic scored Product Transparency at 35/100.
*Evidence: Skeptic About (Product Transparency 35/100), GM About ("Show me the actual product"), First-Timer About ("I never saw the actual product"), Architect About ("Break up the narrative with visual elements — High impact")*

**2. Rewrite the hero headline to name the audience and include a specific outcome.**
"Stop digging for answers. Get one actionable morning briefing." is industry-agnostic. The First-Timer scored Instant Clarity at 55/100 — the lowest on any page — noting: "I genuinely don't know who this is for" from the hero alone. The Storyteller suggested: "Built by a GM who was drowning in spreadsheets — so you never have to."
*Evidence: First-Timer About (Instant Clarity 55/100, "The hero doesn't name the audience"), Storyteller About ("The real value prop is buried in the founder story below"), Closer About ("A cold visitor cannot tell this is for private golf/country clubs from the hero alone")*

**3. Add visual scarcity indicator to the Founding Partner section.**
"We're inviting 20 clubs" is buried in body text. The Closer recommended a visual countdown ("7 of 20 spots claimed") directly above the CTA button, specifying at least one concrete benefit ("Pricing locked at founding rate for 24 months"), and changing the CTA to "Reserve Your Club's Spot →." The Closer rated this as the #1 quick win for the About page.
*Evidence: Closer About ("Add visual scarcity indicator — HIGH impact, LOW effort"), GM About ("The Founding Partner language would make our president feel like we're getting early-mover advantage"), Storyteller About ("One of the strongest sections on the page")*

### Contact / Demo (658/900)

**1. Add an above-the-fold CTA button that anchors to the form.**
The entire first viewport is copy with no interactive element. The Closer noted: "~15–25% of high-intent visitors likely bounce from the first viewport because there's no interactive element. This is a 30-minute code change with significant conversion upside." The Architect scored Layout at 58/100 partly due to this.
*Evidence: Closer Contact ("Add an anchor-link CTA button in the hero — HIGH impact, LOW effort"), Architect Contact ("No above-the-fold CTA is visible — Major"), First-Timer Contact ("The form or CTA button isn't visible yet — I'd need to scroll")*

**2. Add 2 more named testimonials from different club profiles.**
Robert Torres at Meridian Hills CC is the only voice on the page. The Closer said: "One testimonial = anecdote. Three testimonials = pattern." The Skeptic scored Proof Density at 48/100 and noted: "A single testimonial triggers a 'cherry-picked' mental model."
*Evidence: Closer Contact ("Add 2 more specific testimonials — HIGH impact"), Skeptic Contact ("One strong testimonial but thin overall proof layer"), GM Contact ("I'd want more before I put my club's data on their servers")*

**3. Add a micro-conversion path for not-yet-ready visitors.**
The page is binary: submit the form or leave. The Closer recommended: "A content download captures email from the 60–70% who aren't ready for a call." Offer a downloadable PDF ("The Club GM's Guide to Predicting Member Churn" or "2024 Private Club Retention Benchmark Report") as a secondary CTA in the hero section.
*Evidence: Closer Contact ("Add a micro-conversion path — MEDIUM impact"), GM Contact ("Add a one-page PDF I can download for my board"), First-Timer Contact ("If I'm the type of buyer who needs to research before committing to a call, this page doesn't serve me")*

---

## 5. Consolidated Dev Plan

### Sprint 1 — Quick Wins (< 1 day each, ship this week)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **Deploy to production domain** (swoopgolf.com or swoopintel.com). The Vercel staging URL was flagged by 4 of 5 Skeptic audits and undermines every trust signal on the site. | Eliminates a disqualifying red flag for ~30% of careful buyers. At 50 visitors/mo and $18K ACV, recovering even 5% of lost trust-bounces = ~$5K/mo pipeline. | Eng/DevOps | Skeptic Home, Platform, About, Contact |
| 2 | **Fix copyright year** from "2026" to current year on Contact page footer. The Skeptic noted this "undermines the credibility of every other specific claim on the page." | Negligible in isolation, but removes a trust-destroying detail at the point of conversion. | Eng | Skeptic Contact, Architect Contact |
| 3 | **Increase all body text to 16px minimum** across all pages. Feature card descriptions, pricing feature lists, FAQ answers, stat labels, and integration copy all render at 12–14px. CSS-only change. | Improves readability for the 40–60 age GM demographic. Affects every page. Fixes the #1 Mobile Inspector issue. | Eng/CSS | Mobile ×5, Architect ×4 |
| 4 | **Darken all secondary gray text to ≥4.5:1 contrast ratio** (minimum #595959 on white). Multiple pages use mid-gray (#888) body text that fails WCAG AA. | WCAG compliance + readability. Affects every page. | Eng/CSS | Architect Home, Platform, Pricing; Mobile ×5 |
| 5 | **Preload the Fraunces serif font file** with `<link rel="preload">` and set `font-display: optional`. Subset to Latin characters. This is the #1 performance fix across all pages. | Est. 500–1500ms LCP improvement per page. Directly affects Google ranking and perceived quality. | Eng | Speedster ×5 |
| 6 | **Add anchor-link CTA button in Contact page hero** ("Book Your 30-Minute Walkthrough ↓") that scrolls to the form section. Pure HTML/CSS, 30-minute implementation. | Est. 15–25% lift in form submissions from high-intent visitors who currently bounce at the hero. At 30 demo requests/mo → 4–8 additional requests → 1–2 deals at $18K = $18–36K/yr. | Eng | Closer Contact (#1 fix), Architect Contact |
| 7 | **Replace white section backgrounds with cream (#F7F5F2)** across all pages. CSS-only variable change. The #1 brand consistency fix. | Transforms mid-page sections from "generic SaaS" to "distinctly Swoop." Flagged on all 5 pages by Brand Guardian. | Eng/CSS | Brand Guardian ×5 |
| 8 | **Add hover/focus states to all buttons, cards, and interactive elements.** CSS transitions: buttons (background-color 200ms + scale 1.02), cards (shadow elevation), links (underline transition). | Fundamental interaction quality gap. Fixes accessibility focus indicators. Affects all pages. | Eng/CSS | Architect ×5 (Component Quality scores 50–61) |
| 9 | **Expand top 3–4 FAQ answers by default** on Pricing and About pages. Especially: "What does Swoop cost?", "Can I try it before committing?", "How long until we're live?" | Surfaces objection-handling content that's currently hidden behind clicks. Reduces conversion friction for skimmers. | Eng | Closer Pricing, Closer About, GM Pricing |
| 10 | **Add `loading="lazy"` to all images below fold** and `content-visibility: auto` to below-fold sections across all pages. | Est. 300–800ms initial load improvement. Reduces unnecessary payload by ~60%. | Eng | Speedster ×5 |

### Sprint 2 — High-Impact Fixes (1–5 days each)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **Add 3 named club testimonials** with GM name, club name, member count, and specific dollar outcome. Place across Home (below hero + above pricing), Platform (after "Six Jobs" section), Pricing (inside $499 tier card), Contact (2 additional below Torres quote). | This is the #1 conversion lever on the entire site. Est. 25–40% lift in demo requests. At 30 requests/mo baseline → 8–12 additional → 2–3 deals at $18K = $36–54K/yr. | Sales/Marketing | Skeptic ×5 (avg 45/100), GM ×5 ("Name real clubs"), Closer ×5 |
| 2 | **Add 3–4 mid-page contextual CTAs** to Home, Platform, and About pages. Each CTA should be section-specific: "See what Swoop would flag at your club →" after features, "See a sample brief →" after the 6:15 AM section. | Captures conviction at scroll depth where it peaks. The Closer estimated recovering 15–25% of engaged visitors who never reach bottom CTA. Est. 5–8 additional demo requests/mo = $18–36K/yr. | Design/Eng | Closer Home, Platform, About |
| 3 | **Create and deploy real product screenshots** — at minimum: (a) a sample Morning Brief email/dashboard, (b) the member risk dashboard, (c) a retention alert notification. Replace mockups on Home and Platform pages. Add one screenshot to About and Contact pages. | Eliminates the "vaporware" perception flagged by Skeptic ×5. Product transparency scores averaged 45/100 across non-pricing pages. GM ×4 asked to "see the actual product." | Design/Product | Skeptic ×5 (Product Transparency), GM ×4, First-Timer ×4 |
| 4 | **Build count-up animations for all stat callouts** ($42.2K, $324, 9/14, $67K on Home; $32K, $6,488, $47K on Platform; 65%, $74K, 5/7 on Pricing; 6 days, 91%, $312, $1.38M on About). Use IntersectionObserver + CSS `@property` or lightweight JS. | The Architect scored Motion at 30–45/100 across all pages. The Speedster confirmed this is low-effort. Creates engagement and makes data feel alive. | Eng | Architect ×5 (Motion scores), Speedster ×3 |
| 5 | **Move pricing tiers on the Pricing page** to within 2 scrolls of the hero. Place the ROI calculator below or alongside tiers, not before them. | Users clicking "Pricing" expect to see prices. Current placement at scroll 4 violates page intent and likely drives abandonment. The Architect flagged this as "Critical." | Design/Eng | Architect Pricing ("Move pricing tiers higher — Critical"), GM Pricing, First-Timer Pricing |
| 6 | **Dynamically populate the post-calculator CTA** on the Pricing page with the visitor's specific recovery figure: "See How to Recover Your $80,000 →" | Leverages commitment/consistency. The Closer estimated 15–25% lift in calculator-to-CTA conversion. At est. 15 calculator completions/mo → 2–4 additional demos = $18–36K/yr. | Eng | Closer Pricing (#3 fix) |
| 7 | **Visually differentiate the $499/mo recommended pricing tier**: orange 2px border, filled orange CTA button (others ghost), subtle background tint, "Chosen by 5 of 7 founding clubs" proof point inside the card. | Directly drives conversion to the target tier. Currently all three cards have equal visual weight. The Architect flagged this as "Critical." | Design/Eng | Architect Pricing, Closer Pricing, GM Pricing |
| 8 | **Design and implement secondary button style** (ghost/outline in orange or dark) for secondary CTAs across all pages. Apply to: "See a sample brief," "Email ROI report," "See pricing" (hero secondary), all lower-commitment actions. | Currently every CTA is the same orange filled button, flattening the action hierarchy. Flagged on 4 of 5 pages by the Architect. | Design/Eng | Architect ×4 ("No visible secondary button style — Major") |
| 9 | **Add a "What does the walkthrough look like?" section** to the Contact page — who's on the call, what they'll show, what to prepare. The GM asked: "Am I filling out a 12-field form? Getting a 30-minute hard sell?" | Reduces CTA anxiety, the final barrier to conversion. The GM scored Next Step Clarity at 78 partly due to this gap. | Copy/Design | GM Contact, First-Timer Contact, Closer Contact |
| 10 | **Rewrite the About page hero headline** to name the audience and include a specific outcome. Current: "Stop digging for answers. Get one actionable morning briefing." Suggested: "Built by a GM who was drowning in spreadsheets — so you never have to." | The First-Timer scored Instant Clarity at 55/100 — the lowest on any page. This is a copy change with design implications. | Copy | First-Timer About (55/100 Instant Clarity), Storyteller About, Closer About |

### Sprint 3 — Structural Changes (1–2 weeks each)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **Build a dedicated case study page** with 2–3 named club stories following Problem → Swoop Implementation → Measurable Result format. Link from every page's testimonial sections. Include named GM, club photo, specific metrics, timeline. | This is the #1 content gap for the board-presentation buyer journey. The GM said: "My board president would ask 'Which clubs are using this?' and I'd have nothing." Transforms the site from marketing to evidence. | Marketing/Sales | GM ×5 ("The Board Test" section), Skeptic ×5, Closer ×3 |
| 2 | **Implement mobile-specific pricing UI** — tabbed or swipeable interface instead of stacking three dense cards. Show recommended tier by default with tabs to switch. | Three pricing cards stacked vertically on mobile creates 4–5 viewport heights of comparison-killing scroll. The Architect flagged this as "Critical." | Design/Eng | Architect Pricing, Mobile Pricing, Architect Home |
| 3 | **Create a gated content asset** (PDF: "The Club GM's Guide to Predicting Member Churn" or "2024 Private Club Retention Benchmark Report") as a micro-conversion path for not-yet-ready visitors. Place as secondary CTA on Home, Platform, About, and Contact pages. | Captures email from the 60–70% of visitors who won't convert on first visit. Feeds a nurture sequence. The Closer flagged the binary convert-or-bounce funnel as the "biggest structural gap." | Marketing/Design | Closer Home ("missed micro-conversion opportunity"), Closer Contact, Closer Platform |
| 4 | **Break Home and Platform page section monotony** with 2–3 layout variations: full-width data visualization, horizontal scroll card row, sticky-scroll narrative for the "Six AI Agents" section, split-screen comparison. | The Architect scored Layout at 58–65/100 across Home and Platform, citing "section monotony" as the biggest layout problem. "By section 5, the user has learned the pattern and stops paying attention." | Design/Eng | Architect Home ("Break section monotony — High impact"), Architect Platform |
| 5 | **Build a dedicated security/data practices page** with SOC 2 details, encryption specs, data residency, DPA availability, and breach notification procedures. Link from every page footer and from the Contact page's "Data handling" disclosure. | Private clubs handle PII for high-net-worth individuals. The Skeptic flagged zero security documentation as a trust gap on every page. The FAQ mentions SOC 2 but provides no verification path. | Legal/Eng | Skeptic ×5 ("No security, compliance, or data handling information"), GM ×3 |
| 6 | **Code-split the Pricing page calculator widget** into a dynamic import loaded via IntersectionObserver. Replace the charting library with lightweight SVG. Reduce total JS bundle to < 150KB. | Est