# The Architect — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Architect
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T00:03:05.709Z

---

## Site Overview
- **URL/Subject:** Swoop Club Intelligence (Marketing Website - Pricing Page)
- **Industry:** B2B SaaS (Golf & Country Club Operations)
- **Audience:** Club General Managers (GMs), COOs, Board Members
- **Devices Tested:** Desktop (Screenshot Analysis)

## Executive Summary
This is an exceptionally well-crafted pricing page that understands its target demographic. The visual identity successfully balances the traditional, premium expectations of country clubs with the sharp, modern aesthetics of B2B SaaS. The decision to place an interactive ROI calculator *before* the pricing tiers is a masterclass in value-based framing. However, the page suffers from minor usability flaws in the calculator’s interaction paradigm and a few instances of low-contrast typography that undermine legibility for an older, executive demographic. Overall craft level is high, requiring polish rather than structural overhaul.

## Dimension Scores
| Dimension | Score /100 | Priority |
|-----------|-----------|----------|
| Typography & Type System | 86 | Medium |
| Color & Visual Identity | 92 | Low |
| Layout & Spatial Composition | 88 | Low |
| Responsiveness & Cross-Device | 80 | Medium |
| Component Quality & Interaction | 78 | High |
| Motion & Micro-Detail | 75 | Medium |

**Composite Score: 84 / 100** *(Weighted)*

## Detailed Findings

### 1. Typography & Type System (20% Weight)
**Strengths:**
- **Distinctive Pairing:** The use of a high-contrast serif font for primary headings ("Recover your software costs in 60 days", "Find out exactly how much...") projects editorial authority and premium quality, aligning perfectly with the country club industry.
- **Hierarchy:** Excellent size scale consistency. The pricing tier prices ("$0/mo", "$499/mo", "$1,499/mo") are bold and instantly scannable, while the features list drops to a highly legible, utilitarian sans-serif.
- **Information Density:** The "Signals + Actions" card handles a lot of text (features, technical specs, and a quote) without feeling cluttered, thanks to rigorous line heights and font weight variations.

**Issues:**
- **Minor (Legibility):** The fine print under the calculator ("*How this is calculated: At-risk revenue...*") is set in a very small, italicized sans-serif. Given the GM demographic, this risks being unreadable.
- **Minor (Contrast):** In the dark hero section, the subtext inside the stats cards ("Source: Swoop 2024 Cohort") is a muted grey that likely fails WCAG AA contrast standards against the #1A1A1A background.

**Recommendations:**
- Increase the base size of all fine print and legal disclaimers to a minimum of 12px (ideally 14px) and remove the italicization for better screen legibility. (Impact: Medium)
- Brighten the grey text in the hero stat cards to ensure a minimum 4.5:1 contrast ratio. (Impact: Low)

### 2. Color & Visual Identity (20% Weight)
**Strengths:**
- **Strategic Palette:** The page executes a near-perfect 60/30/10 split. Dominant stark white and deep charcoal backgrounds (60%), secondary light greys/creams in cards (30%), and a vibrant, unmissable orange/gold for interactive elements and key numbers (10%).
- **Attention Steering:** The orange accent color is used with extreme discipline. It highlights primary CTAs ("Calculate your ROI", "Book a Walkthrough"), dynamic calculator inputs/outputs, and the "FOUNDING-PARTNER PICK" badge. This trains the user's eye exactly where to look.
- **Section Pacing:** The alternating dark and light backgrounds (Dark Hero → Light Calculator → Light Pricing → Light FAQ → Dark CTA) create a natural rhythm that prevents scrolling fatigue.

**Issues:**
- **Minor (Hover/Focus Assumptions):** The secondary button ("Email this ROI report to my Board") uses a dark outline on a white background. It lacks visual weight next to the dominant solid orange button.

**Recommendations:**
- Ensure the secondary button has a distinct hover state (e.g., a light grey fill) so it doesn't feel like a dead element next to the high-contrast primary CTA. (Impact: Low)
- Verify the contrast of the orange text ("TOTAL MEMBERS", "$8,000") against the light grey calculator background. It may hover around the 3:1 boundary for standard text. (Impact: Medium)

### 3. Layout & Spatial Composition (20% Weight)
**Strengths:**
- **Intentional Framing:** The hero section restricts the line length of the subheadline ("5 of 7 founding-partner clubs..."), keeping it at an optimal reading width (around 60-70 characters) rather than stretching across the viewport.
- **Calculator Layout:** The two-column layout of the calculator is excellent. It creates a physical relationship between cause (sliders on the left) and effect (dark output card on the right).
- **Pricing Tier Emphasis:** The middle tier ("Signals + Actions") is physically elevated above the others and bordered in orange, making the intended choice obvious without completely obscuring the alternatives.

**Issues:**
- **Minor (Proximity):** The "Zero Implementation Fees" banner sits slightly too far below the pricing cards. The whitespace disconnects it from the purchasing decision.
- **Minor (Padding):** The quote below the calculator ("*Swoop flagged the Smith family...*") feels a bit cramped vertically between the calculator block and the "Ready to recover your at-risk dues?" section.

**Recommendations:**
- Reduce the vertical margin between the bottom of the pricing cards and the "Zero Implementation Fees" banner to tighten the association. (Impact: Low)
- Add 24px of top and bottom padding to the testimonial block to let it breathe. (Impact: Low)

### 4. Responsiveness & Cross-Device (15% Weight)
*(Evaluated via structural deduction from desktop layout)*
**Strengths:**
- **Modular Design:** The design is highly modular. The 3-column pricing, 2-column calculator, and 3-column hero stats are built on clear grid systems that will predictably collapse into single columns on mobile devices.

**Issues:**
- **Major (Mobile Fatigue Risk):** The pricing cards are extremely tall due to the extensive feature lists. When stacked on a mobile screen, a user will have to scroll for a very long time to reach the final tier or the subsequent FAQ section.
- **Major (Context Loss):** When the calculator collapses to mobile, the inputs (sliders) will sit above the outputs (dark card). If the inputs take up the whole screen, the user won't see the numbers change in real-time in the output card, destroying the interactive "wow" factor.

**Recommendations:**
- On mobile, consider making the pricing tier feature lists collapsible (accordion style) beneath the price and primary CTA, allowing users to scan all three prices quickly. (Impact: High)
- On mobile, lock the ROI output (the "$80,000" revenue recovered) to the top or bottom of the viewport as a sticky banner while the user adjusts the sliders, ensuring immediate visual feedback. (Impact: High)

### 5. Component Quality & Interaction (15% Weight)
**Strengths:**
- **FAQ Component:** The FAQ accordion is clean, utilizing a clear 'x' to indicate the currently open state and a '+' for closed states.
- **Clear CTAs:** Button labels are specific and action-oriented ("Book a Walkthrough With Your Numbers" rather than a generic "Submit" or "Click Here").

**Issues:**
- **Critical (Input Flexibility):** The calculator relies *entirely* on sliders for inputs ("Total Members", "Avg Annual Dues"). Sliders are notoriously frustrating for entering precise numbers. If a GM has exactly 312 members, trying to hit that exact number on a small slider thumb will be an exercise in frustration.
- **Minor (Visual Data):** The line graph in the "DUES PROTECTED" area is a bit generic. It lacks axis labels or data points, making it feel more like an illustration than a functional data visualization.

**Recommendations:**
- **Crucial:** Add direct numerical text input fields next to or above every slider. Sliders should be for exploring scenarios; text inputs are required for precise calculations. (Impact: High)
- Make the line graph in the calculator interactive—show tooltips on hover to reinforce the data-driven nature of the product. (Impact: Low)

### 6. Motion & Micro-Detail (10% Weight)
*(Evaluated based on visible artifacts and necessary interactions)*
**Strengths:**
- **Micro-Polish:** The "FOUNDING-PARTNER PICK" pill breaking the top border of the pricing card is a classic, effective micro-detail that draws the eye. The subtle inner borders on the hero stat cards provide depth without relying on heavy drop shadows.

**Issues:**
- **Expected Behavior Risk:** If the numbers in the dark calculator output card simply swap instantly when sliders are moved, it will feel cheap. The numbers need to animate (count up/down) to emphasize the financial impact.

**Recommendations:**
- Implement a number-counter animation for the "Revenue recovered" and "Net revenue gain" outputs in the calculator so they scroll dynamically as the user drags the sliders. (Impact: Medium)

---

## Priority Action Plan

**1. Add Direct Number Inputs to Calculator (High Impact, Low Effort)**
GMs want precision. Do not force them to use sliders for exact numbers. Add standard text input fields tied to the slider variables.

**2. Solve Mobile Calculator Layout (High Impact, Medium Effort)**
Design a mobile-specific view for the calculator where the "Net Revenue Gain" number remains sticky on screen while the user manipulates the sliders, ensuring real-time feedback isn't lost below the fold.

**3. Address Mobile Pricing Card Fatigue (Medium Impact, Medium Effort)**
Implement an accordion or tabbed view for mobile pricing cards so the user can see all three tiers and their prices without endless vertical scrolling.

**4. Fix Typography Contrast and Sizing (Medium Impact, Low Effort)**
Bump the fine print under the calculator up by 2px and remove italics. Lighten the "Source" text in the hero to meet WCAG 4.5:1 contrast standards.

**5. Add Number-Counter Animations (Medium Impact, Low Effort)**
Ensure the large orange output numbers in the ROI calculator animate sequentially when data changes. This micro-interaction dramatically increases the perceived value of the software.
