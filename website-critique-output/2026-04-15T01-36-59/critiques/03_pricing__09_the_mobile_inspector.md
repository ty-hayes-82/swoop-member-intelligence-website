# The Mobile Inspector — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T01:40:10.352Z

---

## Mobile UX Verdict
This page is an exceptionally strong example of mobile-first B2B layout, largely because it correctly reflows complex desktop components (like the interactive ROI calculator and pricing cards) into a logical vertical narrative. The layout and conversion flow are top-tier, but the experience is dragged down by multiple instances of micro-typography that will force users to squint or zoom, particularly in the calculator disclaimers and pricing card details. 

**Overall Score: 87 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 95 | Flawless single-column reflow; the calculator and pricing grids stack perfectly without horizontal scrolling. |
| Typography Legibility | 75 | Primary headings are great, but secondary disclaimers and helper text are dangerously small (likely 11-12px) and low contrast. |
| Tap Targets & Interaction | 80 | Primary CTA buttons are massive and thumb-friendly. FAQ accordion icons and inline text links are potential tap-target risks. |
| Content Prioritization | 95 | Brilliant mobile hierarchy. The featured pricing tier is correctly moved to the top of the stack. |
| Mobile Conversion Flow | 90 | Clear, repeated CTAs with high contrast ("Book a Walkthrough With Your Numbers") drive a strong mobile funnel. |

## Critical Mobile Issues (fix immediately)

**1. Micro-typography fails the 16px mobile legibility rule**
*   **What it is:** Several instances of explanatory text are too small and utilize low-contrast gray colors, requiring a pinch-to-zoom to read comfortably. 
*   **Where it occurs:** 
    *   The "How this is calculated..." italic text beneath the ROI Calculator dark box.
    *   The "Alert: The Smith family hasn't visited..." preview text inside the Signals + Actions pricing card.
    *   The chart axis labels ("Jan", "Dec").
    *   The legal disclaimer in the footer ("Your club's data stays yours...").
*   **The fix:** Increase all micro-copy to an absolute minimum of 14px (ideally 16px for readability) and darken the hex value for gray text to ensure it passes WCAG AA contrast ratios against the white background.
*   **Affects:** Typography Legibility

**2. Ambiguous FAQ Accordion Tap Targets**
*   **What it is:** The visual affordance to open an FAQ is a very small, thin orange "+" icon on the far right. If the touch target is constrained only to that icon, it violates Apple's 44x44px HIG minimum. 
*   **Where it occurs:** The "Things GMs ask us" section.
*   **The fix:** Ensure the *entire* question row (the text, the white space, and the icon) acts as a single, large 44px+ high tap target. Add a subtle active state (like a slight gray background on tap) so users know their thumb registered the action.
*   **Affects:** Tap Targets & Interaction

**3. Inline link proximity to body text**
*   **What it is:** The secondary text link is sitting very close to surrounding elements, increasing the risk of mis-taps.
*   **Where it occurs:** "Email this ROI report to your board →" beneath the main ROI calculator CTA. 
*   **The fix:** Add a minimum of 16px top/bottom padding around this standalone link so a thumb striking the CTA button above it doesn't accidentally trigger the email link instead.
*   **Affects:** Tap Targets & Interaction

## Mobile Wins (what works well)

*   **Intelligent Pricing Card Reordering:** On desktop, the "Signals + Actions" tier is likely the middle column. On mobile, you didn't just stack them left-to-right (which would put the $0 tier first). You explicitly forced the "Founding-Partner Pick" to the top of the mobile stack. This is elite content prioritization.
*   **ROI Calculator Reflow:** Complex calculators often break mobile layouts. Here, the sliders stack neatly on top of the dark "Exposure" output box, maintaining the interactive "cause and effect" relationship without needing a side-by-side layout.
*   **Massive CTA Buttons:** Every primary CTA ("Calculate your ROI", "Book a Walkthrough...") spans nearly the full width of the 390px viewport and uses a high-contrast orange. They are impossible to miss and incredibly easy to tap.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (<1 hour):**
*   Bump all small disclaimer, footer, and helper text (`font-size`) to at least 14px.
*   Darken the gray color of the "How this is calculated" text to improve contrast.
*   Add `padding-top: 16px;` to the "Email this ROI report..." link container to separate it from the main button.
*   Ensure the `cursor: pointer` and touch area for the FAQ accordions spans `width: 100%` of the question container, not just the icon.

**Structural Fixes (>1 day):**
*   *None required.* The fundamental HTML structure, CSS grid/flexbox fallbacks, and mobile layout architecture are extremely solid. All issues can be resolved with simple CSS tweaks.
