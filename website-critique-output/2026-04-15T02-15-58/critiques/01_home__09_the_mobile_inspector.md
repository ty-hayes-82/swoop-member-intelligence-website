# The Mobile Inspector — Home / Landing

**Page:** Home / Landing
**URL:** http://localhost:4180/#/landing
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:17:16.491Z

---

## Mobile UX Verdict
This page is an exceptionally well-executed responsive design that feels native to a 390px viewport. Multi-column desktop layouts have been gracefully collapsed into single-column mobile stacks, and the above-the-fold content prioritizes exactly what a busy GM needs to see. The single highest-priority mobile fix is increasing the font size and contrast of small utility text (disclaimers, metric sub-labels, and footer links), which currently push the limits of legibility for an older B2B demographic.

**Overall Score: 91 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 95 | Flawless 1-column collapsing; no horizontal overflow or awkward side-scrolling. Padding is generous and consistent. |
| Typography Legibility | 82 | Primary headers and body copy are excellent, but secondary meta-text and disclaimers require squinting. |
| Tap Targets & Interaction | 88 | Primary CTAs are massive and thumb-friendly. Footer navigation links are stacked slightly too close together. |
| Content Prioritization | 95 | Above-the-fold is perfect. The narrative flow down the page keeps the user engaged without feeling overwhelming. |
| Mobile Conversion Flow | 90 | Great distribution of full-width CTAs, though a very long page like this would benefit from a sticky mobile CTA. |

## Critical Mobile Issues (fix immediately)

**1. Micro-typography legibility for older demographics**
*   **What it is:** Several instances of "fine print" are rendered too small (likely 11-12px) and will be difficult for Club GMs to read without holding the phone to their face.
*   **Where it occurs:** 
    *   Hero disclaimer: *"No credit card · No IT lift · Live in 2 weeks..."*
    *   "Prove it" metrics sub-labels: *"one save - one call"*, *"members retained"*, *"dues protected"*. (These also suffer from low contrast against the white background).
    *   Footer disclaimer: *"Your club's data stays yours..."*
*   **The Fix:** Ensure all supporting text has a minimum font size of 14px (ideally 15px) on mobile viewports. Darken the orange/grey text under the "Prove it" metrics to meet WCAG AA contrast standards.
*   **Affects:** Typography Legibility

**2. Footer navigation tap target proximity**
*   **What it is:** The vertical list of links in the footer lacks sufficient vertical spacing.
*   **Where it occurs:** Under "PRODUCT" (Platform, Pricing, Integrations) and "COMPANY" (About, Contact, Careers).
*   **The Fix:** Increase the vertical margin or padding on these `<li>` or `<a>` elements so there is at least 12-16px of vertical space between each word, preventing "fat-finger" mis-taps.
*   **Affects:** Tap Targets & Interaction

**3. Long scroll fatigue without a sticky conversion anchor**
*   **What it is:** This is a very long, comprehensive landing page. While inline CTAs are present, a user who reaches the end of a dense section (like Integrations) has to manually scroll to find the next button.
*   **Where it occurs:** Throughout the entire 390px scroll experience.
*   **The Fix:** Implement a sticky bottom bar that appears on *scroll-up* (to avoid blocking content on the way down) containing a compact "Book Walkthrough" button.
*   **Affects:** Mobile Conversion Flow

## Mobile Wins (what works well)

*   **Above-the-Fold Execution:** At 390px, the viewport perfectly frames the logo, hamburger menu, value proposition ("Your tee sheet, POS..."), the "Swoop assembles it..." hook, and *two* distinct CTA buttons. This is textbook mobile prioritization.
*   **Integration List Reflow:** Instead of a messy grid of tiny boxes that often plagues mobile integration sections, the "28 Integrations Across 10 Categories" section uses clean, full-width stacked dark cards (Tee Sheet & Booking, Member CRM, etc.). It reads beautifully.
*   **Full-Width CTAs:** Buttons like "Book the 30-Minute Walkthrough →" span almost the entire width of the viewport, making them effortless to tap with either the left or right thumb.
*   **Rhythm and Contrast:** The alternating dark and light background sections serve as excellent visual breaks, reducing the cognitive load of a long mobile scroll. 
*   **Text-Based UI Elements:** Given the pre-launch constraint of no product screenshots, the custom HTML/CSS UI mockups (like the dark "ACTIVITY FEED" showing Demand Optimizer and Member Pulse) scale perfectly to mobile without the blurriness or unreadable text that usually plagues scaled-down PNG dashboard screenshots.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (< 1 hour):**
*   Increase `font-size` to at least `14px` for the hero disclaimer, metric sub-labels, and footer legal text.
*   Darken the color hex code of the text under the "$32K", "9 / 14", and "$67K" metrics to improve contrast.
*   Add `margin-bottom: 12px;` to the footer navigation links to improve tap target spacing.

**Structural Fixes (> 1 day):**
*   Build and implement a mobile-only sticky bottom CTA ("Book Walkthrough") that hides on scroll down and reveals on scroll up, ensuring the primary conversion action is never more than a thumb-tap away.
