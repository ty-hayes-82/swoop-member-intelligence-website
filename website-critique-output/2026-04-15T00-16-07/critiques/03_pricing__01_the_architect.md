# The Architect — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Architect
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:22:40.809Z

---



# Swoop Club Intelligence — Pricing Page Design Audit

---

## Site Overview
- **URL:** https://swoop-member-intelligence-website.vercel.app/ (Pricing page)
- **Industry:** B2B SaaS — Golf & Country Club Member Intelligence
- **Target Audience:** Club General Managers, COOs, Board Members — typically 45–65, not digital-native, conservative decision-makers
- **Devices Tested:** Desktop viewport (single full-page screenshot provided)
- **Date of Review:** Based on provided screenshot

---

## Executive Summary

Swoop's Pricing page is a competent, conversion-oriented B2B SaaS page that does several things well — the ROI calculator is a standout interactive tool that directly addresses buyer hesitation, the hero messaging ("Start for zero") is sharp and confidence-building, and the dark-to-light section rhythm creates clear content zones. However, the page suffers from typographic monotony (a single sans-serif doing all the work with insufficient hierarchy differentiation), an overly cautious color palette that leans almost entirely on orange + black + white with no supporting tones, and a pricing card section that becomes a wall of small text at the most critical decision point. The overall craft level is "solid startup template, well-customized" — perhaps a 2024 Framer or Webflow build — but it lacks the spatial confidence and detail polish that would signal premium positioning appropriate for a product selling at $1,499/mo.

---

## Dimension Scores

| Dimension | Score /100 | Priority |
|---|---|---|
| Typography & Type System | 52 | High |
| Color & Visual Identity | 61 | Medium |
| Layout & Spatial Composition | 64 | Medium |
| Responsiveness & Cross-Device | 55 | High |
| Component Quality & Interaction | 58 | High |
| Motion & Micro-Detail | 45 | Low |

**Composite Score: 57 / 100** (weighted)

*(Weights applied: Typography 20%, Color 20%, Layout 20%, Responsiveness 15%, Components 15%, Motion 10%)*

*Calculation: (52×0.20) + (61×0.20) + (64×0.20) + (55×0.15) + (58×0.15) + (45×0.10) = 10.4 + 12.2 + 12.8 + 8.25 + 8.7 + 4.5 = 56.85 ≈ 57*

---

## Detailed Findings

### 1. TYPOGRAPHY & TYPE SYSTEM — 52/100

**Strengths:**
- **Hero headline** ("Recover your software costs in 60 days. Start for zero.") uses a display-weight serif or decorative sans with distinctive character — the slightly rounded, high-contrast letterforms give personality that separates it from generic SaaS. This is the single strongest typographic moment on the page.
- Section headers like "Find out exactly how much dues revenue is walking out your door" are properly sized and scannable at a glance.
- The "Things GMs ask us." heading uses colloquial, audience-specific language that reads naturally at its display size.

**Issues:**

- **Critical — Pricing card body text is dangerously small.** The feature lists inside the three pricing tiers ($0/mo, $499/mo, $1,499/mo) appear to be set at approximately 12–13px. For a decision-critical section where the buyer needs to compare features across tiers, this is a readability failure. The GM audience skews older; this text must be ≥14px absolute minimum, ideally 15–16px.
- **Major — Lack of typographic hierarchy within pricing cards.** Tier names ("Signals", "Signals + Actions", "Signals + Actions + Member App"), prices, feature lists, and sub-descriptions all appear to use the same typeface at marginally different sizes. There's no weight or style contrast to guide the eye from tier name → price → value prop → feature list → CTA.
- **Major — Section subheads ("ROI CALCULATOR", "THE TIERS", "SWOOP FAQ") use small all-caps tracking** that reads as template boilerplate. These kickers add structure but are so small and light that they barely register, wasting an opportunity to reinforce information architecture.
- **Minor — Line height in the ROI calculator explanation text** (the paragraph below the calculator) appears tight, approximately 1.3–1.35. For body text at this size, 1.5–1.6 would improve readability significantly.
- **Minor — The testimonial quote** ("Savings Suggest the most keep a month…") uses italic styling at a small size that compresses readability, especially the attribution line.

**Recommendations:**
1. **Increase pricing card feature text to 15–16px** and add visual grouping (subtle dividers or spacing) between feature categories. **Impact: High** — this is where money decisions happen.
2. **Introduce a secondary typeface or at minimum a distinct weight** for structural elements (section kickers, card tier names) to create genuine typographic tension. **Impact: Medium.**
3. **Increase body text line-height site-wide to 1.5–1.6.** **Impact: Medium.**

---

### 2. COLOR & VISUAL IDENTITY — 61/100

**Strengths:**
- **The orange accent (#F27A1A or similar) is used with discipline** — it marks CTAs ("Calculate your ROI", "Book a 30-Min Walkthrough", "Get Free Daily Alerts"), the ROI calculator's savings highlight ("$80,000" and the orange bar), and the bottom-of-page conversion banner. This follows the 10% accent principle well.
- **Dark hero section (near-black) transitioning to white content sections** creates a strong visual entry point and clear zone separation. The dark footer mirrors the hero, bookending the page.
- **The three stat cards** (65%, $74K, 5 of 7) use a dark card background with orange/green accents that pop effectively and draw the eye immediately after the hero CTA.
- **The orange gradient bar** in the ROI calculator output area ("$80,000" savings visualization) communicates value in a way that's emotionally resonant — it literally shows money being recovered.

**Issues:**

- **Major — The palette is essentially three-tone: black, white, orange.** There is no secondary or tertiary color. The $120,000 and $80,000 figures in the calculator use what appears to be green and orange respectively, but these are the only moments of expanded palette. For a full-page experience, this creates visual fatigue — especially in the long pricing card section which is entirely black text on white with orange buttons.
- **Major — Contrast concern on the dark hero section.** The body text beneath the headline ("5 of 7 founding partner clubs recovered Swoop's annual cost within 60 days…") appears to be a medium gray on the near-black background. This likely falls below 4.5:1 contrast ratio. For body text of this size, WCAG AA requires 4.5:1.
- **Minor — The stat card labels** ("Avg. dollar lost per member per year", "Avg. mean revenue gain per club in first 90 days") are small light text on dark cards — contrast may be borderline.
- **Minor — The "Zero Implementation Fees" banner** near the bottom of the pricing section uses orange background with dark text. The text appears small and dense for this background treatment.

**Recommendations:**
1. **Add a secondary brand color** — a deep teal, warm gray, or forest green would complement the orange and break the binary feel. Use it for secondary CTAs, card backgrounds, or the FAQ section. **Impact: High.**
2. **Audit all dark-section text for WCAG AA compliance** and increase body text opacity/lightness on dark backgrounds. **Impact: High** (accessibility).
3. **Use subtle background tints** (warm cream, light gray) to differentiate alternating white sections. Currently the ROI section → Pricing section → FAQ section all sit on identical white, creating a seamless but monotonous middle third. **Impact: Medium.**

---

### 3. LAYOUT & SPATIAL COMPOSITION — 64/100

**Strengths:**
- **The page follows a logical narrative arc:** Hero (promise) → Social proof stats → ROI Calculator (prove it) → Pricing tiers (decide) → Testimonials (reassure) → FAQ (overcome objections) → Final CTA. This is textbook B2B SaaS structure executed competently.
- **The ROI calculator section** is the layout highlight. The left-side sliders and the right-side output card create a clear cause-effect spatial relationship. The calculator is given generous vertical space and isn't cramped.
- **Above-the-fold impact is strong.** The hero delivers a bold headline, a supporting stat, a primary CTA, and three proof-point cards all within the first viewport. The information density is high without feeling cluttered.
- **The dark-background "Start at zero. Upgrade when the math shows up." interstitial** provides a much-needed visual break between the calculator and the pricing cards.

**Issues:**

- **Critical — The pricing card section is the weakest layout on the page.** Three cards of unequal height sit side by side, with the rightmost card ($1,499/mo) significantly taller due to more features. The cards appear to have no maximum width constraint, causing feature text to run in long lines. The visual weight distribution makes the $499/mo middle card (presumably the recommended tier) not obviously emphasized — there's no "popular" badge, no elevation, no border treatment, no background differentiation.
- **Major — Inconsistent section spacing.** The gap between the hero stat cards and the "ROI Calculator" section header appears smaller than the gap between the pricing section and the FAQ. Consistent vertical rhythm (e.g., 80px, 120px, or 160px section gaps) would improve flow.
- **Major — The CTA cluster below the calculator** ("Book a Walkthrough With Your Numbers" + "Present ROI Report to my Board") stacks two buttons of similar visual weight. The secondary CTA ("Present ROI Report") lacks sufficient visual distinction from the primary — both appear to be full-width with similar sizing, potentially confusing the hierarchy.
- **Minor — The FAQ section** uses a standard accordion pattern but sits too close to the pricing section, diminishing its perceived importance. Additional padding or a background change would help.

**Recommendations:**
1. **Redesign the pricing card layout:** Add a "Most Popular" or "Recommended" badge to the $499/mo tier, give it a subtle border or shadow elevation, and equalize card heights with a feature comparison table below for details. **Impact: High.**
2. **Establish a spacing scale** (e.g., 8px base: 16, 32, 48, 64, 96, 128) and apply it consistently to section padding. **Impact: Medium.**
3. **Differentiate the dual CTA buttons** below the calculator — make "Book a Walkthrough" the clear primary (filled orange) and "Present ROI Report" an outlined/ghost secondary. **Impact: Medium.**

---

### 4. RESPONSIVENESS & CROSS-DEVICE — 55/100

**Note:** Only a desktop viewport screenshot was provided. This score is partially inferred from visible layout decisions and partially penalized for the inability to confirm mobile behavior.

**Strengths:**
- **The single-column sections** (hero, interstitial, FAQ, final CTA) will naturally adapt to narrow viewports without structural changes.
- **Button sizing appears adequate** for touch — the "Calculate your ROI" and "Book a 30-Min Walkthrough" buttons look ≥44px tall.

**Issues:**

- **Critical (inferred) — The three-column pricing card layout** will almost certainly break on mobile. If these cards simply stack vertically, the user faces an enormous scroll to compare tiers. Without a toggle, tab interface, or comparison table, mobile pricing comparison will be painful.
- **Critical (inferred) — The ROI calculator's side-by-side layout** (sliders left, output right) will need significant recomposition for mobile. If it simply stacks, the output card loses its spatial relationship to the input sliders, breaking the cause-effect feedback loop.
- **Major — The stat cards** (65%, $74K, 5 of 7) in a three-column layout may become too small on tablet viewports or too tall when stacked on mobile.
- **Major — The pricing toggle** ("Learn in 14 days. Zero if I regretted. Cancel any time.") at the top of the pricing section is small text that may become illegible on mobile.
- **Minor — The sticky navigation** with "Book a Walkthrough" CTA button may cover content on small viewports, depending on its height.

**Recommendations:**
1. **Implement a tabbed or toggle pricing comparison for mobile** — show one tier at a time with swipe or tab navigation. **Impact: High.**
2. **Redesign the ROI calculator for mobile** — stack sliders on top with a sticky or scroll-anchored results summary. **Impact: High.**
3. **Test all breakpoints** (768px, 1024px, 1280px) and document behavior. This cannot be scored higher without mobile evidence. **Impact: High.**

---

### 5. COMPONENT QUALITY & INTERACTION — 58/100

**Strengths:**
- **The ROI calculator is a genuinely well-conceived interactive component.** It includes labeled sliders (Dues Protected, Avg. Annual Dues, Annual Renewing Rate), a dynamic output area with dollar figures, and a contextual explanation of the calculation. This is not a generic pricing calculator — it's customized to the club industry, using terms like "dues protected" and "renewing rate" that signal domain expertise.
- **CTA button hierarchy has some differentiation:** The orange filled buttons ("Calculate your ROI", "Book a 30-Min Walkthrough") are clearly primary. The "Get Free Daily Alerts" button appears in an outlined style, suggesting secondary intent.
- **The FAQ accordion** follows convention — section title, expandable questions. The visible expanded answer provides adequate detail.

**Issues:**

- **Major — Pricing cards lack a clear "recommended" state.** There is no visual component treatment (badge, highlight, scale, shadow) to guide the user to the optimal tier. B2B SaaS convention strongly favors making the recommended plan visually dominant.
- **Major — The "Present ROI Report to my Board" button** is a brilliant concept but its component treatment doesn't match its strategic importance. Giving GMs ammunition for board approval is a conversion accelerator — this should be more prominent, possibly with an icon (PDF, presentation) and helper text explaining what they'll receive.
- **Major — The slider inputs in the ROI calculator** lack visible value labels in the current state. The "DUES PROTECTED" slider shows "15" and the "AVG. ANNUAL DUES" shows "$5,000" but it's unclear if these update in real-time or if there's a visible handle position indicator. Without hover/active state visibility, users may not realize these are interactive.
- **Minor — The FAQ accordion** doesn't show a visible expand/collapse icon (+ / chevron) in the screenshot, though this could be a rendering artifact.
- **Minor — No visible loading or empty states** for the calculator — what happens while it computes? Is there a skeleton state?

**Recommendations:**
1. **Add a "Recommended" badge and visual elevation to the $499/mo pricing card.** **Impact: High.**
2. **Enhance the "Present ROI Report" CTA** with an icon, helper text ("Get a board-ready PDF with your club's numbers"), and distinct visual treatment. **Impact: High.**
3. **Add visible tick marks, min/max labels, and real-time value display to calculator sliders.** **Impact: Medium.**
4. **Add expand/collapse chevrons to FAQ items** and ensure focus states are visible for keyboard navigation. **Impact: Medium.**

---

### 6. MOTION & MICRO-DETAIL — 45/100

**Note:** Motion is difficult to fully evaluate from a static screenshot. This score reflects what can be inferred and what is visibly absent.

**Strengths:**
- **The page structure suggests scroll-triggered reveals** — the alternating dark/light sections are natural candidates for entrance animations that guide the user through the narrative. If implemented well, this could score higher.
- **The ROI calculator output area** likely updates dynamically as sliders move — if this transition is animated (number counting up, bar width transitioning), it would add meaningful interaction polish.

**Issues:**

- **Major — No visible evidence of micro-interactions** on buttons, cards, or interactive elements. From the screenshot alone, buttons show no hover state differentiation, pricing cards show no hover elevation or border change, and the FAQ items show no transition indicators.
- **Major — The stat cards** (65%, $74K, 5 of 7) are ideal candidates for a count-up animation on scroll — a standard pattern that adds perceived quality. No evidence this exists.
- **Minor — No visible scroll progress indicator or sticky section navigation** for a page this long. Given the page length (hero → stats → calculator → interstitial → pricing → testimonials → FAQ → CTA → footer), a progress indicator or anchor navigation would reduce cognitive load.
- **Minor — No evidence of `prefers-reduced-motion` support**, though this cannot be confirmed from a screenshot.

**Recommendations:**
1. **Add count-up animations to the stat cards** (65%, $74K, 5 of 7) triggered on scroll into view. **Impact: Medium.**
2. **Implement smooth number transitions in the ROI calculator** as sliders are adjusted — animate the dollar values counting to their new amounts. **Impact: Medium.**
3. **Add hover states to all interactive elements:** buttons (subtle scale + shadow), pricing cards (lift + border), FAQ items (background highlight). **Impact: High** (perceived quality).
4. **Add `prefers-reduced-motion: reduce` media query** to disable animations for users who request it. **Impact: Low effort, High accessibility value.**

---

## Priority Action Plan

| Rank | Action | Effort | Impact | Rationale |
|---|---|---|---|---|
| 1 | **Increase pricing card text to 15–16px** and improve feature list readability | Low | High | This is the decision point. Unreadable features = lost deals. 30-minute CSS fix. |
| 2 | **Add "Recommended" badge and visual emphasis to $499/mo tier** | Low | High | Pricing psychology 101. Guide the eye. Orange border + badge + subtle shadow. |
| 3 | **Audit and fix dark-section text contrast to WCAG AA (4.5:1)** | Low | High | Accessibility compliance and readability for an older demographic. |
| 4 | **Add hover states to buttons, cards, and FAQ items** | Low | High | Perceived quality leap for minimal CSS effort. |
| 5 | **Introduce a secondary brand color** (teal or forest green) to break black/white/orange monotony | Medium | High | Reduces visual fatigue, adds sophistication, supports the premium price point. |
| 6 | **Redesign pricing comparison for mobile** (tabs or swipeable cards) | Medium | High | Mobile pricing comparison is likely broken. Critical for any GM reviewing on phone. |
| 7 | **Enhance "Present ROI Report to my Board" CTA** with icon and helper text | Low | Medium | Unique conversion lever that's currently under-designed. |
| 8 | **Add count-up animations to stat cards and smooth calculator transitions** | Medium | Medium | Polish that signals product quality. |
| 9 | **Establish consistent section spacing scale** across the full page | Low | Medium | Tighten the visual rhythm. Systematic 64/96/128px sections. |
| 10 | **Redesign ROI calculator layout for mobile viewports** | High | High | Complex interactive component needs dedicated mobile treatment, not just stacking. |

---

**Bottom Line:** Swoop's Pricing page tells the right story in the right order, and the ROI calculator is a genuinely differentiated element that most competitors lack. But the execution doesn't yet match the $1,499/mo price point — the typography is undersized where it matters most, the color palette is anemic, and the pricing cards (the most important component on this page) are the least designed element. The fixes are mostly low-effort, high-impact CSS and component-level improvements. Investing 2–3 focused design sprints on the issues above could push this page from a 57 to a 75+ without any structural rebuild.
