# The Mobile Inspector — Home / Landing

**Page:** Home / Landing
**URL:** http://localhost:4173/#/landing
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T01:38:29.232Z

---

## Mobile UX Verdict
This page possesses a strong mobile hero and highly visible, touch-friendly CTAs, but the core product narrative is completely broken by a catastrophic layout failure in the middle of the page. Multi-column desktop grids have failed to collapse into single columns, squeezing text and images side-by-side into 195px spaces that destroy readability. **The single highest-priority fix is forcing the "SEE IT", "FIX IT", and "PROVE IT" sections into a stacked, single-column mobile layout (`flex-col` or `grid-cols-1`).**

**Overall Score: 62 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 20 | Catastrophic failure: Desktop 2-column feature blocks are squeezing side-by-side on mobile instead of stacking vertically. |
| Typography Legibility | 60 | Base sizes are mostly adequate, but line-lengths are crushed to 2-3 words per line due to the layout failure. |
| Tap Targets & Interaction | 85 | Primary CTA buttons are exceptionally well-sized (≥ 48px). Minor mistap risks exist only in the footer text links. |
| Content Prioritization | 80 | The above-the-fold experience correctly prioritizes the value prop and two distinct CTA paths. |
| Mobile Conversion Flow | 75 | Buttons are well-placed and pricing stacks logically, but the broken middle-page layout will cause severe drop-off before users reach the bottom. |

## Critical Mobile Issues (fix immediately)

**1. Severe 2-Column "Squish" (Feature Sections)**
*   **Where it occurs:** The three alternating feature blocks ("SEE IT / One screen...", "FIX IT / The right action...", "PROVE IT / Take a dollar number...").
*   **What it is:** The desktop layout (Text on left, Image on right) is forcing its way onto the 390px mobile viewport, shrinking each column to roughly ~180px wide. This crushes paragraph text into 2-3 words per line, making it highly unnatural to read, and shrinks the UI mockups to illegible thumbnails.
*   **The Fix:** Apply a mobile-first `flex-direction: column` or CSS Grid `grid-template-columns: 1fr` to these parent containers. Stack the text *above* or *below* the images on screens smaller than 768px.
*   **Affects:** Layout & Overflow, Typography Legibility

**2. Illegible Text Inside UI Image Assets**
*   **Where it occurs:** Inside the dark "BRIEF" mockup, the green "APPROVED" mockup, and the large "ACTIVITY FEED" mockup.
*   **What it is:** Scaling full-context dashboard/phone UI images down to fit a mobile viewport renders the text inside those images smaller than 8-10px. Users cannot read the "Detected signal" or the "Revenue Analyst" details without pinch-zooming.
*   **The Fix:** Swap these images out for mobile-specific assets using `<picture>` tags. On mobile, show a zoomed-in, cropped detail of the UI rather than the entire dashboard view. 
*   **Affects:** Content Prioritization, Typography Legibility

**3. Mistap Risk on Footer Links**
*   **Where it occurs:** The absolute bottom of the page ("Talk to a GM who's using it ->" next to "Book a Walkthrough").
*   **What it is:** These two text links are forced side-by-side into a very tight space with small font sizes (<14px) and virtually zero padding between them. This is an Apple HIG violation, as touch targets are smaller than 44x44px and placed too closely together.
*   **The Fix:** Stack these links vertically on mobile with at least 16px of vertical spacing, or convert them into full-width ghost buttons.
*   **Affects:** Tap Targets & Interaction

## Mobile Wins (what works well)
*   **Hero Contrast & Legibility:** The primary headline and subheadline read perfectly on a 390px screen. The stark contrast immediately draws the eye.
*   **CTA Button Sizing:** The primary orange buttons ("Book a Walkthrough") are beautifully sized for thumbs—large, high contrast, with excellent tap-target heights well above the 44px minimum.
*   **Integrations Grid Collapse:** Unlike the feature sections, the "28 Integrations Across 10 Categories" section correctly collapses from a desktop grid into a highly readable, single-column stack of cards with great internal padding.
*   **Pricing Card Hierarchy:** The pricing tier cards correctly stack into a single column, with the "Founding-partner pick" strategically positioned first to capture mobile attention.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (< 1 hour)**
*   Add responsive utility classes (e.g., `flex-col`, `md:flex-row`) to the containers holding the "SEE IT", "FIX IT", and "PROVE IT" content so they stack vertically.
*   Add `flex-col` and `gap-4` to the very bottom footer links to separate them into distinct, tap-safe rows.

**Structural Refactors (> 1 day)**
*   **Asset Art Direction:** The graphic assets (mockups) need mobile-specific crops. A UI that looks great on a 1440px desktop screen becomes a blurry, illegible texture when reduced to 350px wide. Create zoomed-in SVG or high-res PNG crops of the specific UI elements (like the "Labor Optimizer" box) to load specifically for mobile users.
