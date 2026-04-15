# The Mobile Inspector — Pricing

**Page:** Pricing
**URL:** http://localhost:4180/#/pricing
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:19:05.230Z

---

## Mobile UX Verdict
This page is a masterclass in adapting complex B2B content for a 390px viewport. The single-column reflow of the pricing tiers and the high-contrast, full-width tap targets show a clear mobile-first approach. The primary mobile priority is fixing micro-typography—several critical pieces of fine print and technical details shrink below legible thresholds, requiring users to pinch and zoom.

**Overall Score: 89 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 95 | Flawless single-column reflow; stats, calculators, and pricing cards stack perfectly with consistent ~16px side padding. |
| Typography Legibility | 80 | Primary copy is excellent, but secondary/tertiary text (calculator disclaimers, technical specs, footer NDA) falls below 14px. |
| Tap Targets & Interaction | 85 | Primary CTA buttons are robust and thumb-friendly, but inline links and calculator sliders pose minor touch-target risks. |
| Content Prioritization | 95 | The mobile narrative flows logically from value prop to interactive proof to pricing without losing desktop context. |
| Mobile Conversion Flow | 90 | Conversion touchpoints are frequent, highly visible, and smartly positioned at the end of key scrolling chapters. |

## Critical Mobile Issues (fix immediately)

**1. Illegible Micro-Copy in High-Friction Zones**
*   **What it is:** Text sizes fall below the 15-16px threshold for mobile readability.
*   **Where it occurs:** 
    *   The italicized formula explanation under the ROI calculator (*"How this is calculated: At-risk revenue x 65%..."*).
    *   The gray "TECHNICAL" metadata blocks inside all three pricing cards (*"4 integrations, hourly refresh..."*).
    *   The mutual NDA and SOC 2 compliance text at the very bottom of the footer.
*   **The fix:** Bump these font sizes to an absolute minimum of 14px (ideally 15px) and increase the line height slightly to compensate for the smaller size.
*   **Affects:** Typography Legibility

**2. Two-Line Button Text Wrapping**
*   **What it is:** The button text breaks awkwardly across two lines.
*   **Where it occurs:** Inside the dark calculator results card: *"Book a Walkthrough With Your / Numbers →"*.
*   **The fix:** Adjust the button padding to allow wider text expansion, reduce the font size by 1-2px strictly for this button, or ideally, shorten the copy for mobile to *"Book a Walkthrough →"*.
*   **Affects:** Layout & Overflow, Mobile Conversion Flow

**3. Calculator Slider Thumb Tap Targets**
*   **What it is:** The visual sliders for "Total Members", "Avg Annual Dues", and "Annual Turnover Rate" have small draggable thumb circles (white with orange border).
*   **Where it occurs:** In the light-themed ROI Calculator input card.
*   **The fix:** While the visual thumb can remain its current size, ensure the invisible touch target (the interactive area) is expanded to at least 44x44px so users' thumbs easily catch the slider without precise pecking.
*   **Affects:** Tap Targets & Interaction

**4. Inline Link Proximity to Primary CTA**
*   **What it is:** A secondary text link is positioned very close to a large primary button, risking mis-taps by "fat thumbs."
*   **Where it occurs:** Directly below the wrapped button in the calculator section: *"Email this ROI report to your board →"*.
*   **The fix:** Add a minimum of 16px (ideally 24px) top margin above the inline link to separate it fully from the active tap area of the orange button above it.
*   **Affects:** Tap Targets & Interaction

## Mobile Wins (what works well)
*   **Pricing Card Reflow:** Complex tiered pricing tables are notoriously awful on mobile. The decision to stack these vertically as distinct, well-padded cards (starting with the "Founding-partner pick") is perfectly executed.
*   **High-Contrast Theming:** The strategic toggling between dark backgrounds (hero, calculator results, final CTA) and light backgrounds creates excellent natural scroll-stopping points on a small screen.
*   **Chunky Primary CTAs:** The orange "Book a Walkthrough" buttons are excellent. They span almost the full width of the 390px viewport, making them effortless to tap with a thumb while holding the device one-handed.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (<1 hour):**
*   Increase `font-size` and `line-height` on `.technical` text blocks, calculator disclaimers, and footer legal text to ≥14px.
*   Add `margin-top: 24px` to the "Email this ROI report..." link.
*   Shorten the mobile string for the calculator button to avoid two-line wrapping, or adjust the horizontal padding.
*   Ensure the FAQ accordion headers have `padding: 16px 0` applied to the *entire row* (not just the text or the tiny '+' icon) to act as a massive tap target.

**Structural Fixes (>1 day):**
*   **Slider Component Refactoring:** Modifying the standard HTML `<input type="range">` or custom slider component to guarantee a 44x44px minimum invisible touch area for the thumb grip. This often requires custom pseudo-element styling (`::-webkit-slider-thumb`) to ensure mobile drag gestures are fluid and don't misfire into page scrolls.
