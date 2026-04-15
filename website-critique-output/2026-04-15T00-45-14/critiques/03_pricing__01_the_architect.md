# The Architect — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Architect
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:52:48.039Z

---



# Swoop Club Intelligence — Pricing Page Design Audit

---

## Site Overview
- **URL:** https://swoop-member-intelligence-website.vercel.app/ (Pricing page)
- **Industry:** B2B SaaS — Golf & Country Club Member Intelligence
- **Audience:** Club General Managers, COOs, Board Members at private golf/country clubs
- **Devices Tested:** Desktop (primary viewport from screenshot; mobile inferred from layout patterns)
- **Date of Review:** Based on provided screenshot

---

## Executive Summary

Swoop's pricing page demonstrates a confident, dark-hero-to-light-body information architecture that moves the visitor through a compelling value narrative — from loss aversion headline, through an interactive ROI calculator, into tiered pricing, FAQ, and final CTA. The bold display typeface in the hero creates genuine brand distinctiveness rarely seen in B2B SaaS. However, the page suffers from critical contrast failures in the pricing tier cards (light text on white backgrounds), an overly long scroll with repetitive CTA patterns, inconsistent spacing rhythms between sections, and a pricing card layout that fails to create clear visual hierarchy between the three tiers. The interactive calculator is a standout differentiator, but the overall component polish — particularly form elements, card treatments, and the FAQ accordion — feels under-designed relative to the ambition of the hero section. This is a page that starts at 85 and slowly declines to 60 as you scroll.

---

## Dimension Scores

| Dimension | Score /100 | Priority |
|-----------|-----------|----------|
| Typography & Type System | 68 | High |
| Color & Visual Identity | 62 | High |
| Layout & Spatial Composition | 58 | Critical |
| Responsiveness & Cross-Device | 55 | High |
| Component Quality & Interaction | 52 | Critical |
| Motion & Micro-Detail | 45 | Medium |

**Composite Score: 58.7 / 100** (weighted)

---

## Detailed Findings

### 1. TYPOGRAPHY & TYPE SYSTEM — 68/100

**Strengths:**

- **Hero display typeface is genuinely distinctive.** The serif/display face used for "Stop losing $74K a year in silent member attrition. Start for zero." has real character — it reads as premium, editorial, and confident. This is appropriate for a high-ticket B2B product selling to club executives who value prestige. It avoids the Inter/Roboto SaaS trap entirely. *(Specific evidence: hero headline, section headers like "Find out exactly how much dues revenue is walking out your door," and "Start at zero. Upgrade when the math shows up.")*
- **Section subheadings ("ROI CALCULATOR", "OUR TIERS", "PRICING FAQ")** use small-caps or uppercase tracking that creates clear sectional wayfinding throughout the long page.
- **The body copy beneath the hero** ("5 of 7 founding partner clubs recovered Swoop's annual cost within 60 days of their first intervention (2024 cohort). Start free. Upgrade when the ROI shows up in your own numbers.") is set at what appears to be ~16-17px with comfortable line height (~1.5), meeting the minimum readability standard.

**Issues:**

- **Major: Type hierarchy collapses in the pricing cards.** The tier names ("Signals", "Signals + Actions", "Signals + Actions + Member App"), prices ("$0/mo", "$499/mo", "$1,499/mo"), and feature lists all appear to use similar weight and size sans-serif type. The price should be the dominant element but competes with the tier name and feature list. There's no clear size scale progression from tier name → price → description → features.
- **Major: Feature list typography in pricing cards is too small and dense.** The bullet points within each pricing tier are set at what appears to be 12-13px — well below the 16px minimum. At this size, the detailed feature descriptions ("Everything in Signals, plus Swoop writes the outreach, compliance, and legal stuff to hyper-qualify — because most clubs lose members silently") become effortful to parse, especially for the 50+ GM demographic.
- **Minor: Inconsistent type treatment between the testimonial quote and attribution.** The testimonial text uses what appears to be a serif italic, while the attribution below uses a standard sans-serif at a noticeably smaller size. The pairing works conceptually but the size delta is too extreme — the attribution ("Laura Pedersen, VP, Paloma Country Club, 500-member founding partner club") nearly disappears.
- **Minor: The calculator section labels** ("DUES PROJECTED", "TOTAL MEMBERS", "AVG. ANNUAL DUES", "ANNUAL TURNOVER RATE") use a condensed uppercase treatment that, while functional, reads as generic UI label styling rather than the editorial quality established by the hero.

**Recommendations:**
1. **Increase pricing card feature text to minimum 14px, ideally 15-16px.** *(Impact: High — directly affects conversion; GMs need to read features to choose a tier.)*
2. **Establish a 3-level hierarchy within each pricing card:** tier name at ~18px medium weight, price at ~36-40px bold, description at 15-16px regular. *(Impact: High)*
3. **Increase testimonial attribution to at least 14px** and consider a slightly bolder weight to maintain readability. *(Impact: Low)*

---

### 2. COLOR & VISUAL IDENTITY — 62/100

**Strengths:**

- **The dark hero (near-black, ~#1a1a1a) with orange accent (#E8762D or similar) is a strong, ownable combination.** It reads as premium and authoritative — appropriate for a product that tells club executives they're losing $74K. The orange is warm enough to avoid alarm-bell red while still conveying urgency.
- **The orange CTA buttons ("Calculate your ROI", "Book a Walkthrough")** are consistently used as the primary action color throughout the page, maintaining the 60/30/10 principle: dark/white backgrounds (60%), text and secondary elements (30%), orange for action (10%).
- **The three stat cards ("65%", "$74K", "5 of 7")** use a dark background with orange underline accents, creating a strong visual anchor below the hero fold. The orange border/underline on these cards ties them to the CTA system.

**Issues:**

- **Critical: The pricing tier cards have serious contrast problems.** The middle tier ("Signals + Actions, $499/mo") appears to have dark text on a white/light background, but the feature description text appears to use a mid-gray (#666 or similar) that likely falls below the 4.5:1 contrast ratio for small text. Given the small type size already noted, this compounds into a genuine readability failure.
- **Major: The "Recommended" badge on the middle pricing tier** uses what appears to be an orange pill/badge, but it doesn't sufficiently differentiate the recommended tier from the other two. The entire card should have a distinct background, border, or elevation treatment. Currently all three cards appear to have near-identical visual weight.
- **Major: The transition from dark hero to white calculator section to dark pricing section and back to white FAQ creates a somewhat arbitrary alternation.** The dark sections (hero, pricing) are the most visually polished; the white sections (calculator, FAQ, testimonial) feel comparatively plain and under-styled. The page oscillates between "premium" and "default."
- **Minor: The footer uses a very dark background with what appears to be low-contrast gray text** for links and legal copy. Footer contrast ratios for secondary navigation likely fall below 4.5:1.

**Recommendations:**
1. **Elevate the recommended pricing tier** with a distinct border (2px orange), subtle background tint, or card elevation/shadow. Make the visual recommendation unmistakable. *(Impact: High — directly affects tier conversion.)*
2. **Audit all text in pricing cards for WCAG AA contrast compliance**, particularly feature descriptions and small print. Target minimum 4.5:1 for all body text. *(Impact: High)*
3. **Add subtle warmth to white sections** — a very light warm gray (#FAFAF8) or faint texture — to bridge the premium feeling of dark sections into the content areas. *(Impact: Medium)*
4. **Increase footer link contrast** to meet 4.5:1 minimum. *(Impact: Low)*

---

### 3. LAYOUT & SPATIAL COMPOSITION — 58/100

**Strengths:**

- **The above-the-fold hero is well-composed.** "Pricing" tag → large headline → supporting paragraph → CTA button → three stat cards forms a clean, gravity-fed visual hierarchy. The stat cards serve as both proof points and a visual "base" to the hero section.
- **The ROI calculator section uses a smart side-by-side layout:** interactive sliders on the left, results on the right. This mirrors the input→output mental model naturally.
- **The pricing tiers use a standard 3-column layout** that communicates progressive value left-to-right ($0 → $499 → $1,499). This is a well-understood B2B pricing pattern.

**Issues:**

- **Critical: The page is excessively long for a pricing page.** Scrolling from hero through calculator → testimonial → CTA block → pricing header → pricing toggle → pricing tiers → zero-implementation callout → social proof line → FAQ → final CTA → footer is approximately 7-8 full viewport scrolls. For a GM who clicked "Pricing" in the nav, the actual pricing tiers don't appear until ~scroll 4. This violates the core user intent of the page.
- **Critical: Inconsistent section spacing.** The gap between the calculator section and the testimonial quote is visually different from the gap between the testimonial and the "Ready to recover your at-risk dues?" CTA block, which is different again from the gap before the pricing tiers. This creates an arrhythmic scroll experience. Sections don't breathe at a consistent cadence.
- **Major: The pricing cards are crammed with content.** The $1,499/mo tier's feature list extends significantly longer than the $0/mo tier, creating uneven card heights. The resulting visual imbalance makes the three-column layout feel lopsided rather than structured.
- **Major: The "Zero Implementation Fees" callout** between the pricing cards and the FAQ is styled as a single centered line of text. Given its importance (it directly addresses a purchase objection), it's under-weighted in the layout — it deserves a distinct visual container, icon, or at minimum larger type.
- **Minor: The CTA block with "Book a Walkthrough With Your Members" and "Email this ROI report to my Board"** stacks two full-width buttons vertically. Both have equal visual weight (outlined style), but the walkthrough booking is clearly the primary action and should be visually dominant.

**Recommendations:**
1. **Move pricing tiers higher on the page** — ideally within 2 scrolls of the hero. Consider placing the ROI calculator below or alongside pricing, not before it. A user clicking "Pricing" expects to see prices quickly. *(Impact: Critical — affects bounce rate.)*
2. **Establish a consistent section spacing system:** 80px between major sections, 40px between sub-sections, applied uniformly. *(Impact: High)*
3. **Equalize pricing card heights** using a fixed card height with scrollable feature lists, or by restructuring content to separate core features from detailed descriptions. *(Impact: High)*
4. **Elevate the "Zero Implementation Fees" callout** into a styled banner or card with an icon. *(Impact: Medium)*
5. **Differentiate the two CTA buttons:** make "Book a Walkthrough" the filled/primary orange button, and "Email ROI report" a ghost/text-link secondary. *(Impact: Medium)*

---

### 4. RESPONSIVENESS & CROSS-DEVICE — 55/100

**Strengths:**

- **The content max-width appears constrained** (~1100-1200px), which prevents ultra-wide monitor issues and suggests some responsive awareness.
- **The hero text appears to be set in responsive units** — the large display type scales proportionally rather than being fixed-pixel.

**Issues:**

- **Critical (inferred): The 3-column pricing tier layout will be severely problematic on mobile.** Each card contains extensive feature lists, prices, descriptions, and CTA buttons. Stacking three such cards vertically on mobile would create an enormously long scroll — potentially 4-5 viewport heights just for the pricing section. Without visible mobile evidence, this is the single highest-risk responsive concern.
- **Major (inferred): The ROI calculator's side-by-side layout** (sliders left, results right) must stack on mobile. The question is whether the results panel remains visible/accessible without scrolling past the inputs. If the user adjusts a slider and can't see the result update, the interactive value proposition is destroyed.
- **Major: The navigation bar** shows "Home | Platform | Pricing | About | Contact" plus a "Book a Walkthrough" CTA button. At tablet breakpoints (~768px), this horizontal nav will likely need to collapse to a hamburger menu. There's no visible indication of how this transition is handled.
- **Minor: The three stat cards ("65%", "$74K", "5 of 7")** in the hero section are laid out in a 3-column grid. On mobile, these would need to stack or switch to a single-column layout. Their current tight spacing suggests this transition may not be smooth.

**Recommendations:**
1. **Implement a tabbed or accordion pricing view on mobile** rather than stacking three full cards. Show the recommended tier by default, with tabs to switch. *(Impact: Critical)*
2. **For the ROI calculator on mobile, use a sticky results summary** that shows the key output number ($80,000 or similar) while the user adjusts sliders below it. *(Impact: High)*
3. **Test and polish tablet breakpoint (768-1024px)** — the 3-column pricing at this width will likely cause cards to be too narrow for their content. Consider switching to a 2+1 or stacked layout at tablet. *(Impact: High)*
4. **Ensure all CTA buttons meet 44×44px minimum touch targets** on mobile, including the FAQ accordion triggers and pricing card CTAs. *(Impact: Medium)*

*Note: Score is penalized for lack of visible mobile adaptation evidence. A B2B product targeting club GMs (who increasingly review vendor sites on tablets and phones) cannot afford mobile as an afterthought.*

---

### 5. COMPONENT QUALITY & INTERACTION — 52/100

**Strengths:**

- **The ROI calculator is a standout interactive component.** The combination of slider inputs (for member count, dues, turnover rate) producing a real-time dollar output with a chart visualization is genuinely compelling for the target audience. It transforms passive pricing into active self-discovery. This is the best element on the page.
- **The pricing toggle ("Live in 14 days · Zero IT required · Cancel any time")** above the tier cards communicates key purchasing objections concisely. The segmented control / toggle between what appears to be annual/monthly billing is a standard, well-understood pattern.
- **The FAQ section uses an accordion pattern** (visible expand/collapse indicators on "Do I need to replace my current software?", "Is my members' data secure?", "What does the founding partner program actually look like?", "What happens if we cancel?"). This is the correct component for this content.

**Issues:**

- **Critical: The pricing cards lack clear primary CTA differentiation.** The $0/mo tier has "Get Free Daily Alerts" (appears as a ghost/outlined button), the $499/mo tier has "Book a 30-Min Walkthrough" (appears similar), and the $1,499/mo tier has "See the Full Platform" (also appears similar). All three CTAs carry approximately equal visual weight. The recommended tier's CTA should be dramatically more prominent — filled orange, larger, more contrast.
- **Major: The FAQ accordion appears to have minimal visual affordance.** The questions are listed with what seem to be simple text lines with a chevron or plus icon. The expanded state (visible for "Do I need to replace my current software?" which shows an answer) doesn't appear to have a distinct background or container, making it hard to parse where one FAQ ends and another begins.
- **Major: The "Calculate your ROI" button in the hero** is the page's first CTA, but it's an in-page scroll link rather than a traditional conversion action. This is smart UX (engages before asking for commitment), but there's no visual indicator that this button scrolls to a section below rather than opening a modal or new page. A subtle downward arrow or "↓" could set expectations.
- **Major: The CTA block with "Book a Walkthrough With Your Members" and "Email this ROI report to my Board"** — the second button implies generating/sending a report, which is a significant system action. There's no visible indication of what clicking this does: Does it open a form? Trigger an email? Require login? The lack of a supporting micro-copy line creates friction.
- **Minor: The pricing toggle/tabs** (if present — the "Recommended" / billing period toggle) appears small and may lack sufficient active/inactive state contrast.

**Recommendations:**
1. **Make the recommended tier's CTA a filled orange button at 20% larger size than other tier CTAs.** Other tiers should use ghost/outlined buttons. *(Impact: Critical — directly drives conversion to target tier.)*
2. **Add subtle background differentiation to FAQ accordion expanded states** — a light gray background (#F5F5F5) on the expanded answer area, with 12-16px padding. *(Impact: Medium)*
3. **Add micro-copy beneath "Email this ROI report to my Board"** explaining the action: "We'll generate a PDF with your club's numbers" or similar. *(Impact: Medium)*
4. **Add focus/hover states to all interactive elements** — buttons should have visible hover transitions, FAQ items should have hover highlights, calculator sliders should show an active/dragging state. *(Impact: Medium)*
5. **Add a scroll indicator or arrow to the "Calculate your ROI" hero CTA** to communicate it's an in-page action. *(Impact: Low)*

---

### 6. MOTION & MICRO-DETAIL — 45/100

**Strengths:**

- **The ROI calculator chart** (the line/area chart showing projected dues recovery) appears to have some form of data visualization that updates dynamically as sliders are adjusted. If this animation is smooth, it's the most purposeful motion on the page — it makes the value proposition tangible.
- **The page uses a dark-to-light-to-dark section rhythm** that, while imperfect in spacing, does create a sense of progression and narrative movement through the scroll.

**Issues:**

- **Major: No visible scroll-triggered animations or entrance transitions.** The page appears to render all content statically. While I generally prefer this to gratuitous animation, the extremely long page would benefit from subtle section entrance animations to maintain engagement through 7+ viewport scrolls. Even a simple 20px upward translate + opacity fade on section entry would add perceived polish.
- **Major: No visible loading or transition states.** The calculator's output area (showing "$129,000", "$80,000", etc.) presumably updates in real-time as sliders move, but there's no visible indication of how this transition is handled. A smooth number counting animation (odometer-style) would reinforce the calculator's interactivity and create a moment of delight.
- **Major: No visible hover states on buttons or cards** in the screenshot. The orange CTAs, pricing cards, FAQ accordion items, and nav links should all have visible hover/focus states. The absence of visible state changes suggests these may be missing or minimal.
- **Minor: No evidence of prefers-reduced-motion handling.** While this is common, a product targeting accessibility-conscious enterprise buyers should implement this.
- **Minor: The pricing cards don't appear to have any hover elevation or border change** that would reinforce interactivity and the comparison shopping behavior.

**Recommendations:**
1. **Add subtle entrance animations to major sections** using `IntersectionObserver` — 200ms fade-up with 20px translate. Stagger the three stat cards and pricing cards by 100ms each. *(Impact: Medium — adds polish without blocking content.)*
2. **Implement odometer/counting animation on the calculator output numbers** when values change. *(Impact: Medium — reinforces the calculator's magic moment.)*
3. **Add hover states to all interactive elements:** buttons (slight darken + subtle scale), pricing cards (border highlight or shadow increase), FAQ items (background highlight). *(Impact: Medium)*
4. **Implement `prefers-reduced-motion: reduce`** media query to disable all non-essential animations. *(Impact: Low effort, signals accessibility maturity.)*

---

## Priority Action Plan

| Rank | Action | Effort | Impact | Rationale |
|------|--------|--------|--------|-----------|
| 1 | **Move pricing tiers higher on page** (within 2 scrolls of hero) | Medium | Critical | Users clicking "Pricing" need to see prices. Current placement at scroll 4 drives abandonment. |
| 2 | **Differentiate recommended pricing tier visually** — orange border, filled CTA button, subtle background tint, "Most Popular" badge enhancement | Low | Critical | Currently all three tiers have equal visual weight; conversion to $499 tier is the business goal. |
| 3 | **Fix pricing card text contrast and size** — increase feature text to 15-16px, ensure all text meets 4.5:1 contrast ratio | Low | High | Measurable accessibility failure that directly impacts whether GMs can read feature lists to make a purchase decision. |
| 4 | **Establish consistent section spacing system** (80px/40px rhythm) throughout page | Low | High | Currently arrhythmic spacing undermines the premium brand impression established by the hero. |
| 5 | **Implement mobile pricing UI** — tabbed or accordion view instead of stacking three dense cards | High | High | 3-column pricing cards stacked on mobile would be an unusable wall of text. |
| 6 | **Add hover and focus states to all interactive elements** | Low | Medium | Missing states make buttons, cards, and FAQ items feel static/unresponsive. Quick CSS additions. |
| 7 | **Equalize pricing card heights** and restructure content density across tiers | Medium | Medium | Lopsided cards (short $0 tier, tall $1,499 tier) break the visual comparison pattern. |
| 8 | **Add number counting animation to calculator outputs** | Low | Medium | The calculator is the page's best feature — this small animation maximizes its impact. |
| 9 | **Add subtle section entrance animations** (fade-up on scroll) | Low | Medium | Page length demands engagement maintenance; 200ms fade-ups add polish without performance cost. |
| 10 | **Redesign FAQ accordion with expanded-state backgrounds** and ensure adequate touch targets | Medium | Medium | Current FAQ feels like an afterthought; it addresses real purchase objections and deserves component quality. |

---

**Bottom Line:** Swoop's pricing page has a strong strategic foundation — the loss-aversion headline, the interactive ROI calculator, and the editorial display typeface all signal a product that understands its buyer. But the page's execution degrades significantly below the fold. The core pricing section — the literal reason someone visits this page — is buried, under-differentiated, and plagued by contrast/sizing issues. The fixes are mostly low-to-medium effort. Addressing the top 5 items would likely move the composite score from ~59 into the low-to-mid 70s and, more importantly, materially improve pricing tier conversion rates.
