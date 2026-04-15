

# Swoop Club Intelligence — Website Audit Master Report

**Date:** April 14, 2026
**Pages Audited:** 5 | **Agents:** 8 (The Eight Lenses) | **Max Composite:** 800/800 | **Total Findings:** 247 discrete findings synthesised from 40 critiques

---

## 1. Executive Summary

Swoop's marketing site has exceptional narrative architecture and one of the strongest buyer-persona-aligned voices in niche B2B SaaS — the copy consistently speaks the private club GM's language, the pricing transparency is rare and confidence-building, and the ROI calculator on the Pricing page is a genuine conversion differentiator. However, the site is critically undermined by a single systemic failure: **the near-total absence of verifiable social proof**. Across all five pages, there is effectively one named testimonial (Robert Torres / Meridian Hills CC on Contact) and scattered anonymous or semi-attributed quotes that a skeptical buyer cannot verify. For a product asking club GMs to grant API access to their tee sheet, POS, and CRM — systems containing member PII and financial data — this trust deficit is likely the single largest conversion killer, estimated to suppress demo bookings by 30-50% versus a version with 3-5 named club references and specific outcome metrics. The single biggest thing working well is the storytelling: every page follows a coherent problem → mechanism → proof → CTA arc, the "6 AM brief" concept is concrete and memorable, and the copy reads like it was written by someone who has actually sat in a GM's office at 6:15 AM. The site is 2-3 focused sprints away from being excellent — the bones are outstanding, the proof layer is missing.

---

## 2. Overall Site Health Dashboard

| Page | Architect | GM | Closer | Speedster | Skeptic | Storyteller | First-Timer | Brand Guardian | Composite /800 | Top Issue |
|------|----------|----|--------|-----------|---------|-------------|-------------|----------------|----------------|-----------|
| Home | 65 | 72 | 71 | 52 | 38 | 82 | 88 | 82 | **550** | Zero named social proof despite strong narrative |
| Platform | 59 | 68 | 52 | 58 | 29 | 78 | 78 | 72 | **494** | No social proof + no pricing signal + monotonous layout |
| Pricing | 57 | 82 | 68 | 62 | 62 | 72 | 79 | 72 | **554** | Pricing cards unreadable; no "Recommended" tier anchor |
| About | 53 | 72 | 62 | 62 | 52 | 58 | 62 | 72 | **493** | Placeholder team avatars + cream monotony + industry unclear in hero |
| Contact | 61 | 78 | 74 | 78 | 58 | 82 | 72 | 76 | **579** | Form below fold; only 1 testimonial; no product visual |
| **Site Avg** | **59** | **74** | **65** | **62** | **48** | **74** | **76** | **75** | **534/800** | |

**Key Observations:**
- **Strongest lens: First-Timer (76 avg)** — the site teaches well and the narrative flow is genuinely best-in-class for niche B2B.
- **Weakest lens: Skeptic (48 avg)** — catastrophic trust deficit. The Skeptic scores 29 on Platform and 38 on Home. This is the site's Achilles' heel.
- **Highest-scoring page: Contact (579)** — focused, low-friction, strong copy. Lowest: About (493) — tries to do too much with placeholder content.
- **The GM persona (74 avg) scores much higher than The Closer (65 avg)** — the site resonates emotionally with the buyer but fails to convert that resonance into action due to proof and funnel gaps.

---

## 3. Cross-Page Patterns

### Critical Patterns (fix first)

**1. Zero verifiable social proof (5/5 pages)**
Every agent flagged this. The Skeptic scored it 8-52/100 across pages. The GM agent repeatedly said: "My board president would ask 'Who else is using this?' and I'd have nothing." The Closer estimated a 20-40% qualified visitor bounce attributable to this gap. There is one named testimonial on the entire site (Robert Torres, Meridian Hills CC, Contact page). The Home page quotes appear anonymous or fabricated. The Platform page has zero client references. **This is the #1 revenue-impacting issue across the entire site.**
*(Evidence: Skeptic-Home 18/100 proof density; GM-Home "credibility gap is the biggest risk"; Closer-Home "structural conversion failure"; GM-Platform "complete absence of social proof"; Skeptic-Platform 8/100 proof density)*

**2. No product screenshots or demo visuals anywhere (5/5 pages)**
Not a single page shows the actual product UI in a way that a buyer can inspect. The Home page has stylized mockups that may be design concepts. The Platform page has dashboard-like screenshots but they're hard to read. Pricing, About, and Contact show nothing. For an intelligence platform, this is ironic — Swoop promises to surface data but never shows the data being surfaced. The First-Timer agent noted on Contact: "Am I signing up for a call with an AI platform, or a call with a consultant who uses Excel? I genuinely can't tell."
*(Evidence: Skeptic-Platform 52/100 product transparency; First-Timer-Contact "zero screenshots, illustrations, or visual representations"; Skeptic-Contact "no product shown — at all"; GM-About "no way to see the product before a call")*

**3. Body text contrast failures on dark sections (4/5 pages)**
The Architect flagged low-contrast body text on dark backgrounds across Home, Platform, About, and Contact. Light gray or warm-muted body text on #1B1814 charcoal backgrounds likely fails WCAG AA 4.5:1 ratio. This affects the target demographic (GMs aged 45-65) disproportionately.
*(Evidence: Architect-Home "likely fails 4.5:1 contrast ratio"; Architect-Pricing "contrast concern on the dark hero section"; Architect-About "contrast ratio between the beige/cream background and any lighter text elements is questionable"; Architect-Contact "text color looks slightly warm/muted")*

**4. No sticky/persistent CTA on long-scroll pages (4/5 pages)**
Home, Platform, Pricing, and About are all 7-15 viewport scrolls long with CTAs only at hero and footer. The Closer repeatedly identified this as a conversion leak: "A visitor who's convinced at section 5 has to scroll all the way down to convert." The Contact page is the only page with a focused, single-purpose conversion design.
*(Evidence: Closer-Home "no sticky header CTA"; Closer-Platform "only 2-3 CTAs across ~10 scroll-depths"; Closer-Pricing "no sticky CTA exists anywhere on the page"; Closer-About "15+ scroll-lengths with no persistent CTA")*

**5. Custom font loading blocking LCP (5/5 pages)**
The Speedster estimated 300ms-1.5s LCP delay from unpreloaded custom serif fonts (likely Fraunces) on every page. LCP is estimated at 2.8-4.0s across pages, failing the 2.5s threshold. The serif display font is brand-critical and should not be removed, but it must be preloaded and subsetted.
*(Evidence: Speedster-Home "estimated LCP at 3.2–4.0 seconds"; Speedster-Platform "LCP delayed by font loading"; Speedster-Pricing "custom display font blocking LCP"; Speedster-About "font discovery → download can add 300–500ms"; Speedster-Contact "LCP is gated on font download")*

**6. No data security/privacy page or prominent security messaging (4/5 pages)**
Only the Contact page and Pricing FAQ mention SOC 2 / AES-256. Home and Platform — where the integration story lives — have no security messaging despite asking clubs to connect POS, CRM, and tee sheet data. The GM agent flagged this repeatedly: "My board doesn't approve vendors without security answers."
*(Evidence: Closer-Home "zero mention of SOC 2, data encryption, privacy practices"; GM-Platform "who's liable if the AI flags a member incorrectly"; Skeptic-Home "no privacy policy, terms of service, or security information visible"; First-Timer-Home "what happens to my member data?")*

**7. Vercel staging subdomain (5/5 pages)**
The site is deployed at `swoop-member-intelligence-website.vercel.app` — not a custom domain. The Skeptic scored this as a "severe" red flag on Platform and About. "A club COO seeing a `.vercel.app` URL would question whether this company is real."
*(Evidence: Skeptic-Home "hosted on a Vercel subdomain — signals pre-launch status"; Skeptic-Platform "staging/unfinished URL — alarming"; Skeptic-About "any sophisticated buyer who notices the URL immediately downgrades credibility")*

### Positive Patterns (protect and replicate)

**1. Buyer-persona-specific copy voice (5/5 pages)**
Every agent praised the GM-native language. "Tee sheet," "POS," "board," "dues," "F&B" — the copy uses insider terms that signal deep domain expertise. The Storyteller scored voice/tone 78-88 across pages. The GM agent said: "This doesn't feel like it was written by a 26-year-old content marketer who's never been inside a clubhouse." **Protect this voice — it is the site's greatest asset.**

**2. "6 AM brief" as concrete product anchor (Home, Platform)**
The concept of a daily intelligence briefing delivered at 6 AM is mentioned across multiple pages and serves as the single most memorable product artifact. The First-Timer called it "one of the clearest, most specific B2B headlines I've encountered." The Storyteller noted the 15-minute gap between "6 AM brief" in the headline and "6:15 AM" in the brief section as "a subtle, clever detail."

**3. Transparent pricing with $0 entry (Home, Pricing)**
Visible pricing with a free tier is rare in club tech B2B. The GM agent scored Risk Reduction 88/100 on Pricing. The Closer called it "exceptional pricing strategy." The free tier eliminates risk and the "Upgrade when the math shows up" framing positions Swoop as confident in its own ROI.

**4. ROI calculator on Pricing page**
Every agent praised it. The Closer called it "the strongest section on the page and a genuine conversion differentiator." The GM said: "I'd screenshot my results and include them in my board packet." The First-Timer identified it as "the moment I was ready to act." **This is the single highest-converting element on the site.**

**5. Clean, premium dark+cream+orange visual identity (5/5 pages)**
The Brand Guardian scored 72-82 across pages. The warm charcoal, cream/sand sections, and orange accents create a premium feel appropriate for the private club market. The serif display headlines (Fraunces) differentiate Swoop from generic SaaS templates.

---

## 4. Page-by-Page Priority List

### Home / Landing (550/800)

1. **Add 3-5 named club testimonials with specific outcome metrics directly below hero and near pricing CTAs.** The Skeptic scored proof density 18/100. The Closer estimated this alone could reduce qualified visitor bounce by 20-40%. Place one testimonial below the hero, one above the "6 AM brief" section, one above pricing. Format: *"[Club Name] identified $X in at-risk dues revenue in Q1 — [GM Name], General Manager."*
*(Skeptic-Home 18/100; Closer-Home "Social proof is the #1 trust signal for B2B buyers"; GM-Home "Name real clubs with real numbers")*

2. **Add a sticky header CTA ("Start Free" or "Book a Walkthrough") that appears after scrolling past the hero.** The page is 12+ sections long with CTAs only at hero and footer. The Closer called this "the highest-ROI, lowest-effort fix" — 2 hours of CSS/JS work.
*(Closer-Home "every section without a visible CTA is a leaky bucket"; Architect-Home "no visible form or modal")*

3. **Fix body text contrast on all dark sections to WCAG AA minimum (4.5:1).** Multiple sections use mid-gray text on dark backgrounds that likely fails accessibility standards. 30-minute CSS fix affecting readability for the core 45-65 age demographic.
*(Architect-Home "likely fails the 4.5:1 contrast ratio"; Speedster-Home CLS from font swap)*

### Platform (494/800)

1. **Add named social proof throughout — minimum 3 named clubs with specific results.** The Skeptic scored proof density 8/100 — the lowest score on the entire site. The Closer said: "Not one named customer, not one quote, not one logo, not one metric from a real club." Place testimonials after the "Six jobs" section and before the final CTA.
*(Skeptic-Platform 8/100; Closer-Platform "the page's fatal flaw"; GM-Platform "complete absence of social proof")*

2. **Add a sticky section navigation or anchor links** for the 10+ section long-scroll page. The Architect scored layout 55/100 due to "severe section rhythm monotony." GMs are time-constrained — let them jump to Features, Daily Brief, Integrations, Results.
*(Architect-Platform "excessively long page with no navigation anchors"; Closer-Platform "many visitors will build conviction at scroll-depth 4 and then leave because no CTA is visible")*

3. **Elevate "Live in 2 business days" and "Take a dollar number to the board" to hero-adjacent positions.** These are the two strongest objection-killers on the page, currently buried at scroll-depth 7-8. Section reordering requires no new content.
*(Closer-Platform "these are the two most powerful objection-killers and they're buried"; GM-Platform "give me a timeline")*

### Pricing (554/800)

1. **Add "Recommended" badge and visual emphasis to the $499/mo tier.** The Architect, Closer, and GM all flagged the absence of tier differentiation. The middle tier should have an orange border, "Most Popular" badge, and slight scale increase. This is pricing psychology 101 — 30 minutes of CSS.
*(Architect-Pricing "no visual component treatment to guide the user to the optimal tier"; Closer-Pricing "no visual 'recommended' anchor on the mid-tier"; GM-Pricing "clarify the $499 vs. $1,499 tier difference more explicitly")*

2. **Increase pricing card feature text to 15-16px and add a feature comparison table.** The Architect scored card text as "dangerously small" at 12-13px — a readability failure at the decision point. The GM said: "I found myself scanning back and forth." A checkmark grid below the cards would enable 10-second comparison.
*(Architect-Pricing "pricing card body text is dangerously small"; GM-Pricing "add a 'What's included at every tier' comparison table")*

3. **Connect ROI calculator output to a specific pricing tier.** After showing "$74,812 net recovery," the page should say: "At the Signals + Actions tier ($499/mo), that's a 12.5x return." This bridges the motivation peak to the purchase decision.
*(Closer-Pricing "the calculator doesn't connect its output to a specific pricing tier"; Storyteller-Pricing "the page stumbles in the middle tiers section where copy becomes feature-listy")*

### About (493/800)

1. **Replace placeholder team avatars with real photos or remove the section entirely.** The Skeptic called generic avatar circles a "significant trust destroyer." The Closer said: "Empty avatars actively destroy trust." Real headshots of Tyler Hogan, Jordan Mitchell, and Alex Chen would transform credibility. If photos aren't available, restructure the section.
*(Skeptic-About "placeholder icons — suggests the team doesn't want to be identified"; Closer-About "fake social proof is worse than no social proof"; Brand Guardian-About "generic circle placeholders feel off-brand")*

2. **Add "golf" or "country club" to the hero headline.** The First-Timer scored instant clarity 48/100: "It took me until the FAQ section to be 100% certain this is for private clubs." The hero "Stop digging for answers. Get one actionable morning briefing." could apply to any analytics tool. Add a qualifier: "The daily intelligence briefing built for private club GMs."
*(First-Timer-About 48/100 instant clarity; Storyteller-About "the headline is solid but the subheadline drowns it in vague software-speak")*

3. **Cut the FAQ from 15+ items to 5-7 or add category tabs.** The Architect flagged the FAQ as creating "enormous vertical sprawl" — approximately 25% of total page length. Group into categories (Getting Started, Data & Security, Pricing) and move overflow to a dedicated FAQ page.
*(Architect-About "13+ questions in a single undifferentiated list"; Closer-About "the pricing question is buried in a 15+ item accordion list")*

### Contact / Demo (579/800)

1. **Move the Robert Torres testimonial above the form** (or adjacent to it in a sidebar). Currently positioned below the form, it's wasted — visitors pass the conversion point before encountering the strongest proof element. The Closer said: "Repositioning this single element could meaningfully lift form submissions."
*(Closer-Contact "positioned BELOW the form — by the time a visitor scrolls to this testimonial, they've already passed the conversion point"; GM-Contact "if Robert Torres' quote wasn't there, I'd be gone")*

2. **Add an anchor CTA button in the hero section** that smooth-scrolls to the form. Currently, the above-the-fold viewport has zero call-to-action. A prominent "Get My Retention Plan ↓" button creates an immediate conversion pathway.
*(Closer-Contact "no CTA or form visible above the fold"; First-Timer-Contact "I don't see a button or a form yet")*

3. **Add a second testimonial from a different club type.** Robert Torres represents a 340-member equity private club. A quote from a larger semi-private or resort club would widen credibility. The Storyteller said: "Two quotes from two club types transforms 'this worked for one club' into 'this works for clubs like mine.'"
*(Storyteller-Contact "one testimonial from one GM at one club type leaves a narrow credibility footprint"; GM-Contact "I need 2-3 more")*

---

## 5. Consolidated Dev Plan

### Sprint 1 — Quick Wins (< 1 day each, ship this week)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Fix body text contrast on all dark sections to WCAG AA (4.5:1) — increase to #E8E0D8 or #F0F0F0 on #1B1814 | Accessibility compliance; reduces bounce for 45-65 demo target. Est: 5-10% readability improvement → $X in avoided lost leads | Front-end | Architect-Home, Architect-Pricing, Architect-Contact: "likely fails 4.5:1" |
| 2 | Add sticky header CTA on Home + Platform + Pricing ("Book a Walkthrough" in nav, appears after hero scroll) | Captures high-intent visitors at any scroll depth. Closer estimated high impact; industry avg 10-15% lift in demo submissions from sticky CTAs. At 500 monthly visitors × 2% baseline × 15% lift × $18K ACV × 25% close = ~$3.4K/mo | Front-end | Closer-Home, Closer-Platform, Closer-Pricing: "no sticky CTA" |
| 3 | Add "Recommended" / "Most Popular" badge + orange border to $499/mo pricing tier | Reduces decision paralysis; anchors buyers to target tier. Pricing psychology shows 15-25% increase in mid-tier selection. | Front-end | Architect-Pricing, Closer-Pricing, GM-Pricing: all flagged missing tier emphasis |
| 4 | Increase pricing card feature text from 12-13px to 16px; add grouping dividers | Readability at the decision point. The GM audience skews older; small text = lost deals. | Front-end | Architect-Pricing: "dangerously small" |
| 5 | Fix truncated CLUB placeholder on Contact form ("e.g., Pine Valley Golf Clu..." → "e.g., Pine Valley GC") | Perception of polish; 30-second fix. | Front-end | Architect-Contact: "truncated — undermines polished impression" |
| 6 | Add anchor CTA button in Contact hero that scrolls to form | Currently zero CTA above fold on the conversion page. | Front-end | Closer-Contact: "a visitor arriving above the fold sees zero calls to action" |
| 7 | Move Robert Torres testimonial above the Contact form | Proof at the decision point is highest-leverage. CSS reorder, 5 minutes. | Front-end | Closer-Contact: "repositioning this single element could meaningfully lift form submissions" |
| 8 | Preload hero display font (Fraunces bold WOFF2) with `<link rel="preload">` on all pages | Reduces LCP by 300-800ms on every page. Single line of HTML per page. | Front-end | Speedster-Home, Platform, Pricing, About, Contact: all flagged font-blocked LCP |
| 9 | Add `font-display: optional` or `swap` + size-adjust fallback metrics for Fraunces | Eliminates CLS from font swap (est. 0.05-0.15 CLS improvement). | Front-end | Speedster across all pages; Architect-Home CLS concern |
| 10 | Deploy to a custom domain (swoopgolf.com or swoopintelligence.com) | Eliminates the `.vercel.app` staging URL red flag. Skeptic scored this as "severe" on 3 pages. ~$12/year for domain + 15 min DNS config. | DevOps | Skeptic-Home, Platform, About: "Vercel subdomain — signals pre-launch" |

### Sprint 2 — High-Impact Fixes (1-5 days each)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **Add 3-5 named club testimonials with photos, titles, club names, and specific dollar outcomes.** Place: (a) below Home hero, (b) mid-Home above pricing, (c) Platform after "Six jobs," (d) Pricing near tiers, (e) About replacing one of the founding-partner sections. | **This is the single highest-revenue-impact fix.** Estimated 25-40% lift in demo conversion for qualified visitors. At 500 monthly visitors × 3% baseline conversion × 30% lift × $18K ACV × 25% close = ~$6K-10K/mo in pipeline. | Content / Sales | Skeptic average 48/100; every Closer report: "zero named customers"; every GM report: "who else is using this?" |
| 2 | Add a data security / trust section near integrations on Home + Platform | SOC 2 badge, AES-256 mention, "Your data is encrypted in transit and at rest." with link to a security page. Removes a silent deal-killer for board-approval-dependent buyers. | Content / Legal | Closer-Home: "zero mention of SOC 2"; GM-Platform: "who's liable?"; Skeptic-Home: "no privacy policy visible" |
| 3 | Connect ROI calculator output to specific pricing tier with dynamic text | "Your projected 12.5x ROI is based on Signals + Actions at $499/mo" below calculator results. Bridges motivation peak → purchase decision. | Front-end | Closer-Pricing: "the calculator doesn't connect its output to a specific pricing tier" |
| 4 | Add one interactive product demo element on Home — e.g., annotated "6 AM brief" walkthrough or tabbed signal explorer | The product is invisible across the site. Even a static annotated screenshot with callouts would help. Interactive walkthrough is ideal. | Design / Front-end | Architect-Home: "extremely limited component variety"; First-Timer-Contact: "I haven't seen the product"; Skeptic across all pages: "near-total black box" |
| 5 | Replace About page team avatar placeholders with real photos | Placeholder circles are destroying trust on the About page. If photos don't exist, remove the section or use professional illustrations. | Content / Design | Skeptic-About: "significant trust destroyer"; Closer-About: "empty avatars actively destroy trust" |
| 6 | Add micro-conversion path for non-demo-ready visitors: "See a sample daily brief" or downloadable PDF | Currently every page offers demo-or-nothing. Club GMs are deliberative buyers who research before committing. A low-commitment email capture recovers 60-70% of traffic that currently bounces. | Marketing / Design | Closer-Platform: "currently the page offers demo-or-nothing"; Closer-Contact: "not every GM who lands here is ready to book a 30-minute call" |
| 7 | Implement lazy loading for all below-fold images and `content-visibility: auto` for below-fold sections on Home + Platform | Estimated 40-60% reduction in initial page weight. Home estimated at 4-6MB → target <1.5MB. | Front-end | Speedster-Home: "likely 1-3MB unnecessary initial payload"; Speedster-Platform: "no lazy loading on below-fold images" |
| 8 | Add count-up animations to all metric callouts ($42.2K on Home, $74K on Pricing, stats on About) triggered on scroll | Low-effort, high-polish signal. Reinforces the "data intelligence" brand promise. | Front-end | Architect-Home, Platform, Pricing, About: all flagged static metrics as missed animation opportunity |
| 9 | Add explicit form focus states (orange 2px border), required field indicators, and submission states (loading/success/error) on Contact form | Accessibility compliance + conversion confidence. Currently no visible focus, validation, or success states. | Front-end | Architect-Contact: "no visible input focus states"; "no inline validation indicators visible" |
| 10 | Add "What your board sees" section on Home — a sample board report screenshot or mockup | GMs need ammunition for internal selling. The "Take a dollar number to the board" section promises this but doesn't deliver a tangible artifact. | Content / Design | GM-Home: "give me a sample board report I could literally show in my next board meeting" |

### Sprint 3 — Structural Changes (1-2 weeks each)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Create a dedicated Security & Data Handling page linked from nav and every integration section | Clubs handle member PII and financial data. A dedicated page with SOC 2 report availability, data residency, encryption details, and CCPA/GDPR stance is table-stakes for board approval. | Legal / Content | Skeptic across all pages: "no privacy policy visible"; GM-Home: "my board doesn't approve vendors without security answers" |
| 2 | Restructure About page: add founder story, make industry explicit in hero, consolidate Founding Partner + testimonials into unified narrative | The About page scores lowest (493/800) and tries to be a landing page, About page, and founding partner recruitment page simultaneously. Needs editorial focus. | Content / Design | First-Timer-About 48/100 instant clarity; Storyteller-About 58/100; Closer-About: "split focus between two competing CTAs" |
| 3 | Add Platform page section navigation with anchor links + break monotonous center-aligned layout with alternating compositions | Platform page is 10+ sections with identical centered layout creating scroll fatigue. Add left-right alternation, full-bleed sections, and a persistent section nav. | Design / Front-end | Architect-Platform: "severe section rhythm monotony"; Closer-Platform: "extremely long with only 2-3 CTAs across ~10 scroll-depths" |
| 4 | Create a 60-second product walkthrough video showing the actual "6 AM brief" experience | The site's most memorable concept (the daily brief) is never shown. A video on Home + Platform would be the single highest-conviction visual asset. | Production / Marketing | Closer-Home: "a 60-second 'day in the life' video would be enormously persuasive"; Storyteller-Home: "missing a day-in-the-life contrast" |
| 5 | Convert all product screenshots to WebP/AVIF with srcset/sizes; subset all fonts to Latin-only | Images estimated at 2-4MB reducible to 200-500KB. Font files estimated at 200-500KB reducible to 80KB. Combined: 60-70% page weight reduction. | Front-end / DevOps | Speedster-Home: "estimated 1-3MB of image weight"; Speedster across all pages: font budget recommendations |

### Backlog — Strategic Improvements (next quarter)

| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Build a "Make your board case" downloadable PDF generator from ROI calculator inputs | The "Present ROI Report to my Board" CTA on Pricing is a hidden gem. If it generates a branded PDF with the GM's own numbers, it becomes a viral internal-selling tool that brings the economic buyer (board) into the funnel. | Product / Marketing | GM-Pricing: "if that generates a branded PDF with my numbers, you've just done my internal selling for me"; Closer-Pricing: "hidden gem for multi-stakeholder B2B buy" |
| 2 | Add an interactive loss-aversion calculator: "What does one resigned member cost your club?" | Expand the mid-page Pricing CTA into a full section with a specific dollar figure and simple calculator (members × avg dues × churn rate). | Product / Front-end | Closer-Pricing: "loss aversion is 2x more powerful than gain framing" |
| 3 | Create 2-3 full case studies as dedicated pages linked from relevant sections | Named clubs with before/after metrics, timeline, GM quotes, and board impact. The single most powerful trust-building content asset for this buyer persona. | Content / Sales | Every Skeptic report; every GM report: "name real clubs with real numbers" |
| 4 | Evaluate migrating from Next.js to Astro or static generation for the marketing site | The marketing site has near-zero client-side interactivity (except the ROI calculator). Next.js ships 80-120KB of unnecessary React runtime. Astro would deliver zero JS by default. | Engineering | Speedster-Home: "this is purely static content with zero client-side interactivity visible"; Speedster-Platform: "full React hydration is unnecessary overhead" |
| 5 | Add enterprise/multi-club pricing path for management companies (Troon, Invited, etc.) | No pathway for multi-club operators who represent high-LTV prospects. Add "Managing multiple clubs?" with a custom contact path. | Product / Sales | Closer-Home: "multi-club operators are high-value prospects who need a custom path" |

---

## 6. Brand Coherence Summary

The site is recognizably Swoop across all five pages, which is a meaningful achievement for an early-stage product. The Fraunces serif + Plus Jakarta Sans + JetBrains Mono type system is deployed with reasonable consistency, the warm charcoal (#1B1814) + cream (#F7F5F2) + orange (#F3922D) palette creates a premium, club-appropriate identity, and the copy voice maintains its operationally specific, GM-native tone throughout. The Brand Guardian averaged 75/100, with the highest score on Home (82) and lowest on Platform and About (72 each).

The most common brand deviations are: **(1) Pure white backgrounds (#FFFFFF) used where cream (#F7F5F2) or sand (#F2ECE1) should appear** — this affects 60%+ of light sections across Pricing, About, and Platform, diluting the warm premium feel into generic SaaS territory. **(2) Brass accent (#B5956A) is virtually absent** — this secondary warm tone should appear in dark section accents, divider lines, and eyebrow labels, but is deployed on only 1-2 sections across the entire site. **(3) JetBrains Mono inconsistently used for financial figures** — pricing amounts ($0, $499, $1,499), testimonial dollar figures ($18K, $42.2K), and dashboard metrics should all use the monospace face but frequently render in the sans-serif.

The single brand fix with the highest cross-page impact would be **replacing all pure white section backgrounds with cream (#F7F5F2) or sand (#F2ECE1)** — this is a global CSS variable change that would instantly warm every page and reinforce the premium club-world positioning that the copy and typography have established. Estimated effort: 30 minutes. Impact: transforms the visual temperature of the entire site.

---

## 7. Quick Wins vs. Structural Fixes Summary

**Quick Wins (ship this week):**
- Fix body text contrast on all dark sections to WCAG AA 4.5:1 minimum (30 min CSS)
- Add `<link rel="preload">` for Fraunces display font on all pages (5 lines of HTML)
- Deploy