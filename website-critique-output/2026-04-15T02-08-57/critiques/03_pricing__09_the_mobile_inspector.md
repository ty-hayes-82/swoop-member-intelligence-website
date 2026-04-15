# The Mobile Inspector — Pricing

**Page:** Pricing
**URL:** http://localhost:4180/#/pricing
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:12:25.566Z

---

## Mobile UX Verdict
This page is fundamentally well-architected for a 390px viewport, featuring excellent full-width tap targets, a logical single-column reflow, and strong vertical rhythm. However, it suffers from a critical interaction flaw in the ROI Calculator section, where the mobile layout physically separates the input sliders from the financial results, breaking the action-reaction feedback loop. The single highest-priority fix is restructuring the mobile calculator so the "Net revenue gain" updates are visible on-screen *while* the user is moving the sliders.

**Overall Score: 83 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 95 | Flawless single-column reflow; pricing cards and comparison stats collapse beautifully without any horizontal scroll triggers. |
| Typography Legibility | 70 | Primary headings and body copy are highly legible, but critical disclaimers and pricing fine print fall well below the 16px minimum, requiring zooming. |
| Tap Targets & Interaction | 85 | Primary CTA buttons are exceptionally well-sized (>44px height). Minor risks exist with inline text links and native range sliders. |
| Content Prioritization | 75 | The overall narrative flow is perfect, but the interactive calculator forces the user to scroll up and down to see the results of their inputs. |
| Mobile Conversion Flow | 90 | Ample, high-contrast CTAs ensure the user is never more than a scroll or two away from entering the conversion funnel. |

## Critical Mobile Issues (fix immediately)

**1. Broken Action/Reaction Loop in ROI Calculator**
*   **What it is:** When a user adjusts the "Total Members" or "Avg Annual Dues" sliders, the actual financial impact (the black box showing "Net revenue gain $74,012") is pushed completely off-screen below the fold. 
*   **Where it occurs:** The "ROI Calculator" section.
*   **The fix:** On mobile, pin a condensed "Net revenue gain: $X" sticky bar to the top or bottom of the viewport while the user is interacting with the calculator, OR move the total output directly above the sliders.
*   **Affected dimension(s):** Content Prioritization, Interaction.

**2. Illegible "Fine Print" & Micro-copy**
*   **What it is:** Multiple instances of deeply undersized (looks like 11-12px) text that fails mobile accessibility standards, compounded by low-contrast gray colors.
*   **Where it occurs:** 
    *   The italicized calculator disclaimer: *"How this is calculated: At-risk revenue x 65%..."*
    *   The testimonial quote immediately below the calculator disclaimer.
    *   The technical mockup text in the gray box inside the pricing card: *"Alert: The Smith family hasn't visited in 21 days..."*
    *   The footer copyright text.
*   **The fix:** Increase minimum font size for all fine print to 14px (ideally 16px) and darken the text color (e.g., `#4B5563` to `#374151`) to improve contrast against the white background.
*   **Affected dimension(s):** Typography Legibility.

**3. Proximity Risk on Secondary Text Links**
*   **What it is:** A tiny text link placed too close to a massive primary button, risking accidental mis-taps (fat-finger errors).
*   **Where it occurs:** The *"Email this ROI report to your board →"* link sitting directly underneath the large orange *"Book a Walkthrough With Your Numbers"* button.
*   **The fix:** Add a minimum of 16px (preferably 24px) of top margin to the text link to separate it from the button's tap target area, and slightly increase the link's font size.
*   **Affected dimension(s):** Tap Targets & Interaction.

**4. FAQ Icon Tap Targets**
*   **What it is:** The orange `+` and `x` icons in the FAQ section are extremely small (likely sub-20px). 
*   **Where it occurs:** The "Things GMs ask us" section.
*   **The fix:** Ensure the *entire row* (the question text and the whitespace around it) is wrapped in the `<button>` element to trigger the accordion, not just the icon itself. (If already implemented this way, just ensure the padding makes the row at least 44px tall).
*   **Affected dimension(s):** Tap Targets & Interaction.

## Mobile Wins (what works well)
*   **Button Sizing:** Every primary orange and secondary white CTA button spans the full width of the mobile content column with excellent vertical padding. They are unmissable and perfectly thumb-sized.
*   **Hierarchy Collapse:** The complex "Signals + Actions" pricing card retains perfect readability. The "Founding-Partner Pick" badge gracefully overlaps the border without breaking layout, and the checklist items wrap comfortably.
*   **Hero Stat Blocks:** Collapsing the desktop 3-column stats ("65%", "$74K", "5 of 7") into a vertical stack of dark cards keeps the user scrolling and immediately establishes authority without overwhelming the small screen.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (< 1 hour)**
*   Increase font size of all disclaimers, testimonials, and footer copyright text to a minimum of 14px.
*   Darken the hex code on the light gray italicized text below the calculator.
*   Add `margin-top: 20px` to the "Email this ROI report..." link.
*   Ensure FAQ rows have `min-height: 44px` and the `<button>` tag wraps the entire text row.

**Structural Refactors (> 1 day)**
*   **Mobile Calculator Layout:** Refactor the DOM order or introduce a sticky mobile-only element for the ROI calculator so that users can see the "Revenue Recovered" number change dynamically while their thumb is actively dragging the sliders.
