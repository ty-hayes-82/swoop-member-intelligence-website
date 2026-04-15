# The Architect — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Architect
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:16:58.185Z

---



## Site Overview
- **URL:** https://swoop-member-intelligence-website.vercel.app/ (Pricing page)
- **Industry:** Golf/Country Club SaaS (B2B member intelligence platform)
- **Audience:** Club General Managers, COOs — typically 45–65, non-technical, decision-makers managing 7-figure operations
- **Devices tested:** Desktop viewport (single screenshot provided; mobile inferred from layout patterns)

---

## Executive Summary

Swoop's Pricing page is a competent B2B SaaS layout with a clear narrative arc — hero → ROI calculator → pricing tiers → FAQ → CTA — but it suffers from execution inconsistencies that undermine what should feel like a premium, trust-building experience for a high-ticket ($500–$1,500/mo) product. The hero section's bold serif typography and dark background create genuine authority, and the interactive ROI calculator is a standout strategic element. However, the pricing card design lacks visual polish (inconsistent alignment, cramped feature lists, weak tier differentiation), the color palette leans too heavily on a single orange accent without sufficient hierarchy, and the FAQ section feels afterthought-generic. For a product selling to conservative, detail-oriented club executives, every pixel of polish matters — and this page leaves 15–20% of its persuasive potential on the table through spacing inconsistencies, type hierarchy gaps, and component-level roughness.

---

## Dimension Scores

| Dimension | Score /100 | Priority |
|-----------|-----------|----------|
| Typography & Type System | 62 | High |
| Color & Visual Identity | 65 | Medium |
| Layout & Spatial Composition | 58 | High |
| Responsiveness & Cross-Device | 55 | High |
| Component Quality & Interaction | 52 | Critical |
| Motion & Micro-Detail | 40 | Low |

**Composite Score: 57.4 / 100** (weighted)

---

## Detailed Findings

### 1. TYPOGRAPHY & TYPE SYSTEM (Score: 62/100)

**Strengths:**

- **Hero serif typeface ("Recover your software costs in 60 days. Start for zero."):** This is the page's strongest typographic moment. The serif display font (appears to be a transitional or didone-style face) communicates gravitas and financial seriousness — appropriate for a product that claims to save clubs $74K. It's distinctive and avoids the generic SaaS look. *Good choice for the audience.*
- **Section label pattern ("PRICING," "ROI CALCULATOR," "THE TIERS," "POPULAR FAQ"):** Consistent use of orange, small-caps/uppercase labels above each section heading creates a recognizable rhythm and aids scannability.
- **Hero headline sizing** is appropriately large, roughly 40–48px equivalent, providing strong above-the-fold impact.

**Issues:**

- **Body text throughout the pricing cards and feature lists appears to be ~13–14px** (based on relative proportion to surrounding elements). This falls below the 16px minimum for comfortable reading, especially critical for a 50+ year-old GM audience scanning dense feature lists. **Severity: Critical.** Specific location: the bullet-point feature lists under each pricing tier ($0, $499, $1,499).
- **Inconsistent type hierarchy in the ROI calculator section.** The "DUES PROTECTED" chart area uses at least 4–5 different text sizes with unclear hierarchy — the slider labels ("15"), dollar figures ("$120,000," "$80,000," "$74,812"), descriptive copy, and input field labels compete without a clear visual pecking order. **Severity: Major.**
- **The pricing tier descriptions** ("Ready only alerts. Comprehensive your systems and...", "Everything in Signals, plus Swoop deals...") use dense paragraph text at small sizes with insufficient line-height. The line spacing appears cramped at roughly 1.3x or less. **Severity: Major.**
- **Font pairing is unclear.** The body/UI text appears to be a geometric or neo-grotesque sans-serif, but it reads as generic — possibly Inter, DM Sans, or similar. While competent, it doesn't add distinctiveness to complement the strong serif display face. **Severity: Minor — design opinion.**
- **The FAQ section heading "Things GMs ask us."** uses the serif display face effectively, but the question text within the accordion appears to be the same weight/size as body text, failing to differentiate the question from the answer. **Severity: Minor.**

**Recommendations:**
1. **Increase all body text to minimum 16px, feature list text to 15–16px.** Expected impact: **High** — directly improves readability for target demographic.
2. **Establish a clear 5-level type scale** (e.g., 48/32/24/18/16) and audit every text element on the page against it. Expected impact: **High.**
3. **Increase line-height on pricing card descriptions to 1.5–1.6.** Expected impact: **Medium.**

---

### 2. COLOR & VISUAL IDENTITY (Score: 65/100)

**Strengths:**

- **The dark hero section** (near-black background with white/off-white text) establishes visual authority and is well-suited for a premium B2B SaaS. The three stat cards ("65%," "$74K," "5 of 7") with dark backgrounds and orange accent text create a strong, memorable data presentation moment.
- **Orange accent color** is used consistently for CTAs ("Calculate your ROI," "Book a 30-min Walkthrough," "Get Free Daily Alerts"), section labels, and the stat card highlights. It reads as energetic and actionable — appropriate for driving conversions.
- **The ROI calculator section** uses an orange gradient/area chart fill that ties the data visualization to the brand palette. Smart, cohesive choice.

**Issues:**

- **Over-reliance on a single orange accent.** The page uses orange for: section labels, CTA buttons, chart fills, stat card text, pricing tier highlights, the footer CTA band, and the navigation "Book a Walkthrough" button. With no secondary accent color, there's no way to create visual hierarchy *within* the accent system. The "Book a 30-Min Walkthrough" CTA and the section labels carry equal visual weight, which shouldn't be the case. **Severity: Major.**
- **The pricing section background is pure white** with very little color differentiation between the three tiers. The middle tier ($499/mo "Signals + Actions") appears to have no visual elevation, border, or background treatment to signal it as the recommended plan — a standard SaaS convention that's conspicuously absent. **Severity: Major.** The "Signals + Actions + Member App" tier at $1,499 also lacks distinction.
- **Contrast concerns in the stat cards.** The supporting text below the stat numbers ("Avg. die-hard member retention rate..." etc.) appears as small, light gray text on dark backgrounds. This likely fails WCAG 4.5:1 contrast for small text. **Severity: Major.**
- **The dark-to-light transition** from the hero section into the white ROI calculator section is abrupt — no gradient, no transitional color band. **Severity: Minor — design opinion.**
- **The final CTA band** ("Ready to see which of your members are at risk?") uses a dark brown/charcoal background with orange buttons, which is effective, but the preceding FAQ section (white) transitions into it without breathing room. **Severity: Minor.**

**Recommendations:**
1. **Introduce a secondary accent** (e.g., a deep teal or navy) for informational/secondary elements, reserving orange exclusively for primary CTAs and critical data points. Expected impact: **High.**
2. **Add a "recommended" or "most popular" visual treatment** to the middle pricing tier — elevated card, subtle background tint, border, or badge. Expected impact: **High** (directly influences conversion).
3. **Audit all small text on dark backgrounds** for WCAG AA compliance. Expected impact: **Medium.**

---

### 3. LAYOUT & SPATIAL COMPOSITION (Score: 58/100)

**Strengths:**

- **The page narrative arc is well-structured:** Hero (promise) → ROI Calculator (proof) → Pricing Tiers (action) → FAQ (objection handling) → Final CTA (close). This follows proven SaaS pricing page conventions and is appropriate for the audience.
- **The hero section's above-the-fold composition** is strong: headline, supporting copy, CTA button, and three proof-point stat cards are all visible without scrolling. Good information density management.
- **The ROI calculator** uses a two-column layout (chart left, inputs/outputs right) that logically separates the visual from the interactive, making the tool intuitive at first glance.

**Issues:**

- **The pricing tier section is the weakest layout area on the page.** Three columns of feature lists with no visual containment (no card borders, no background differentiation, no shadows) creates a wall of undifferentiated text. The eye has no clear entry point or recommended path. **Severity: Critical.** At this price point ($0–$1,499/mo), the pricing presentation should feel considered and premium.
- **Inconsistent vertical spacing between sections.** The gap between the hero stat cards and the "ROI CALCULATOR" section heading appears significantly larger than the gap between the pricing tiers and the FAQ section. Section rhythm should be consistent (e.g., 120px or 160px between all major sections). **Severity: Major.**
- **The feature lists in pricing cards are not vertically aligned** across the three tiers. The checkmark items start at different vertical positions because the descriptive paragraph above varies in length. This creates a ragged, unpolished appearance. **Severity: Major.**
- **The ROI calculator's right panel** is dense — it contains the slider value ("15"), two large dollar figures, explanatory text, cost calculations, and a sub-total, all in a relatively compact space. The hierarchy within this panel is unclear; everything competes for attention. **Severity: Major.**
- **Two CTA buttons stacked below the ROI calculator** ("Book a Walkthrough With Your Numbers" in orange, "Present ROI Report to My Board" in outline/dark) — these are well-differentiated in style but sit awkwardly centered below the two-column layout with inconsistent spacing above and below. **Severity: Minor.**
- **The FAQ section uses minimal vertical space** — four questions compressed tightly. Given that "Do I need to replace my current software?" is the #1 objection for this audience, this section deserves more visual prominence and breathing room. **Severity: Major — strategic concern.**

**Recommendations:**
1. **Redesign the pricing tier section with proper card containers** — add subtle borders, shadows, or background fills. Align feature lists to start at the same vertical position across all three cards. Expected impact: **High.**
2. **Standardize section spacing** to a consistent vertical rhythm (e.g., 120px between sections). Expected impact: **Medium.**
3. **Give the FAQ section more visual weight** — larger type, more padding, perhaps a light background color to differentiate it from adjacent white sections. Expected impact: **Medium.**

---

### 4. RESPONSIVENESS & CROSS-DEVICE (Score: 55/100)

**Note:** Only a desktop viewport is provided. Scoring is based on visible patterns and inferrable responsive behavior.

**Strengths:**

- **The page's section-based structure** (full-width bands of content) is inherently mobile-friendly and should stack naturally.
- **CTA buttons appear to be full-width or generously padded,** which should translate well to mobile touch targets.

**Issues:**

- **The three-column pricing layout** will need to collapse to single-column on mobile. Given the already-poor visual differentiation between tiers on desktop, this will become *worse* on mobile where the user must scroll through three sequential undifferentiated blocks. Without a "most popular" badge or sticky comparison mechanism, mobile users will struggle to compare plans. **Severity: Critical.**
- **The ROI calculator's two-column layout** (chart + data panel) will likely break or stack on tablets/phones. The slider interaction ("DUES PROTECTED" slider) needs to be verified for touch usability — slider controls are notoriously difficult on mobile without generous touch targets and clear value feedback. **Severity: Major.**
- **The stat cards** ("65%," "$74K," "5 of 7") are in a three-column grid. On mobile, these need to either stack vertically or become a horizontal scroll. If they stack, they push the main CTA significantly below the fold. **Severity: Major.**
- **The navigation bar** has "Home, Platform, Pricing, About, Contact" plus a "Book a Walkthrough" CTA button. On mobile, this must collapse to a hamburger — but the "Book a Walkthrough" CTA should remain visible outside the hamburger for conversion purposes. Cannot confirm this from the screenshot. **Severity: Major (potential).**
- **The feature checklists in pricing tiers** contain dense, small text that will be even harder to read on mobile if the 13–14px issue identified in Typography is not resolved. **Severity: Critical (compounded).**
- **The sticky footer bar** visible at the bottom ("Let's talk if you're looking for..." with "Book a Walkthrough" link) could potentially overlap content on smaller viewports. **Severity: Minor (speculative).**

**Recommendations:**
1. **Build a mobile-specific pricing comparison view** — either a toggle between plans or a feature comparison table that collapses intelligently. Expected impact: **High.**
2. **Test the ROI calculator slider on touch devices** and add explicit +/- buttons as an alternative input method. Expected impact: **High.**
3. **Ensure the nav CTA persists outside the mobile hamburger menu.** Expected impact: **Medium.**

---

### 5. COMPONENT QUALITY & INTERACTION (Score: 52/100)

**Strengths:**

- **The ROI calculator is a genuinely excellent component concept.** Allowing a GM to input their number of dues-protected members and immediately see the revenue at risk is a powerful interactive sales tool. The "DUES PROTECTED" slider with a live-updating chart and dollar figures is well-conceived.
- **CTA button hierarchy is partially working:** The primary orange "Book a 30-Min Walkthrough" buttons are clearly distinguished from the secondary dark/outline "Present ROI Report to My Board" button. Good primary/secondary distinction.
- **The pricing toggle** ("Learn in 14 days · Zero if Impacted · Cancel any time") above the pricing tiers serves as a risk-reducer and is positioned correctly.

**Issues:**

- **The ROI calculator input fields** ("DUES PROTECTED," "AVG ANNUAL FEES") appear to use slider + manual input, but the interaction affordances are unclear from the design. The slider track appears thin and low-contrast. The input fields (showing "15" and "$5,000") don't have clearly visible borders or input affordances — they could be mistaken for static text. **Severity: Critical.** A GM who doesn't realize these are interactive misses the entire point of the section.
- **The pricing tier CTAs are inconsistent.** The $0/mo tier has "Get Free Daily Alerts" as its CTA. The $499/mo tier has "Book a 30-Min Walkthrough" in orange. The $1,499/mo tier has "See the Full Platform" as a text link/secondary treatment followed by a smaller "Book a 30-Min Walkthrough." This inconsistency is confusing — why does the highest tier have a weaker primary CTA? **Severity: Major.**
- **The FAQ accordion** shows expanded answers for the first two questions and collapsed state for the last two. The expand/collapse affordance is not clearly visible — no plus/minus icon or chevron is discernible. **Severity: Major.**
- **No visible hover states** can be confirmed from a static screenshot, but the flat design of the buttons and links suggests they may lack sufficient state differentiation. **Severity: Major (potential).**
- **The "Calculate your ROI" button** in the hero section presumably scrolls to the ROI calculator. The interaction between this button and the calculator section should include smooth scroll and potentially a focus/highlight animation on arrival. Cannot confirm from screenshot. **Severity: Minor.**
- **The "ANNUAL RENEWAL RATE" field** in the calculator appears to show a percentage input. Input formatting, validation, and error states for these financial inputs are critical for credibility with this audience. No evidence of input validation is visible. **Severity: Major.**
- **Missing social proof components.** The quote ("Swoop flagged the membership trends a month before...") from a club executive is rendered as plain italic text with no card treatment, photo, or visual distinction. For this audience, testimonials need authority treatments — name, title, club name, headshot. A single styled quote barely registers. **Severity: Major — strategic.**

**Recommendations:**
1. **Redesign calculator inputs** with visible borders, focus states, and clear interactive affordances (styled input fields, bolder slider tracks, hover/active states). Expected impact: **High.**
2. **Standardize pricing tier CTAs** — every tier should have a clear, consistently-styled primary action. Expected impact: **High.**
3. **Add expand/collapse icons** to the FAQ accordion items. Expected impact: **Medium.**
4. **Upgrade the testimonial** to a proper quote card with photo, name, title, and club name. Expected impact: **Medium.**

---

### 6. MOTION & MICRO-DETAIL (Score: 40/100)

**Note:** Motion evaluation is limited with a static screenshot. Score reflects what can be inferred plus absence of visible motion-design indicators.

**Strengths:**

- **The ROI calculator's live-updating chart** implies real-time animation of the area chart fill as the slider moves. If executed smoothly, this is the kind of purposeful, data-driven animation that adds genuine value. *(Conditional strength — cannot confirm execution quality.)*
- **The page structure suggests scroll-triggered section reveals** may be present (the clear section-by-section layout is a common pattern paired with entrance animations).

**Issues:**

- **No visible loading orchestration.** The page appears to render all content simultaneously with no staggered entrance, progressive disclosure, or content choreography. For a page this long (hero → calculator → pricing → testimonial → FAQ → CTA → footer), scroll-triggered reveals would significantly improve the experience. **Severity: Major.**
- **No evidence of micro-interactions** on the stat cards ("65%," "$74K," "5 of 7"). These are prime candidates for count-up animations on scroll-into-view — a standard pattern that would add credibility and engagement. **Severity: Major — missed opportunity.**
- **The pricing tier section** appears completely static. Hover effects on cards (subtle elevation, border highlight) would improve interactivity and signal clickability. **Severity: Minor.**
- **No visible transition between FAQ open/closed states.** Accordion items should animate smoothly (height transition, icon rotation). Cannot confirm from screenshot. **Severity: Minor.**
- **No evidence of prefers-reduced-motion support,** though this cannot be evaluated from a screenshot alone. **Severity: Minor (accessibility standard).**

**Recommendations:**
1. **Add count-up animations** to the three stat cards in the hero section on scroll-into-view. Expected impact: **Medium** (engagement + credibility).
2. **Implement subtle scroll-triggered entrance animations** for major sections (fade-up, 200ms stagger). Expected impact: **Medium.**
3. **Ensure the ROI calculator chart animates smoothly** (60fps, no jank) when slider values change. Expected impact: **High** (this is the page's centerpiece interaction).
4. **Add @media (prefers-reduced-motion: reduce)** to disable all non-essential animation. Expected impact: **Low** effort, **Medium** accessibility impact.

---

## Priority Action Plan

| Rank | Action | Effort | Impact | Rationale |
|------|--------|--------|--------|-----------|
| 1 | **Increase body/feature text to 16px minimum, line-height to 1.5** | Low | High | Directly affects readability for 50+ audience; pure CSS change |
| 2 | **Add card containers to pricing tiers** (borders, shadows, background fills) + "Most Popular" badge on middle tier | Low | High | Standard SaaS convention; current undifferentiated layout loses conversions |
| 3 | **Redesign calculator input affordances** (visible borders, bolder slider, focus states) | Medium | High | Calculator is the page's #1 differentiator but inputs look like static text |
| 4 | **Standardize CTA hierarchy across all three pricing tiers** | Low | High | Inconsistent CTAs create decision friction at the most critical conversion moment |
| 5 | **Align pricing card feature lists vertically** across all three columns | Low | Medium | Pure CSS fix that immediately improves visual polish |
| 6 | **Introduce secondary accent color** for informational elements; reserve orange for CTAs only | Medium | Medium | Reduces visual monotony and strengthens CTA prominence |
| 7 | **Add FAQ accordion expand/collapse icons + smooth transitions** | Low | Medium | Current accordion lacks clear interaction affordance |
| 8 | **Upgrade testimonial to full quote card** with headshot, name, title, club name | Low | Medium | Credibility signal for high-ticket B2B decision makers |
| 9 | **Add stat card count-up animations + section entrance animations** | Medium | Medium | Engagement and perceived quality improvement |
| 10 | **Build mobile-optimized pricing comparison** (plan toggle or responsive comparison table) | High | High | Critical for mobile conversion but requires significant component work |

---

**Bottom line:** Swoop has a strong strategic foundation — the ROI calculator is a genuine differentiator and the page narrative is sound. But the execution is B-minus where it needs to be A-minus. For a product asking club GMs to commit $500–$1,500/month, the pricing presentation must project the same intelligence and precision the product promises. The five low-effort fixes above (items 1–5) would move the composite score from ~57 to ~70 with minimal engineering time.
