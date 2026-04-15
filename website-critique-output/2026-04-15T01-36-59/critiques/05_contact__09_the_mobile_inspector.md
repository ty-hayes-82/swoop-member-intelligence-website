# The Mobile Inspector — Contact / Demo

**Page:** Contact / Demo
**URL:** http://localhost:4173/#/contact
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T01:41:59.341Z

---

## Mobile UX Verdict
This page is fundamentally sound on mobile, featuring excellent full-width form inputs, appropriate padding, and a highly readable single-column flow. However, it suffers from a classic desktop-first oversight: the primary CTA is buried beneath a massive wall of text and bullets, meaning a mobile user has to scroll past roughly two full viewports before they can take their first action. 

**Overall Score: 88 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 95 | Excellent mobile container constraints; consistent 16-20px side padding with no horizontal scrolling issues. |
| Typography Legibility | 82 | Body copy scales well, but fine-print text inside the "What happens next:" box drops below the 14px mobile minimum, requiring squinting. |
| Tap Targets & Interaction | 95 | Buttons are perfectly sized full-width blocks (≥ 44px tall), and form inputs are well-optimized for thumb tapping. |
| Content Prioritization | 75 | The first CTA is pushed too far down the page by a long paragraph and four dense bullet points. |
| Mobile Conversion Flow | 95 | The actual form experience is best-in-class for mobile: top-aligned labels, massive touch areas, and reassuring security microcopy immediately below the submit button. |

## Critical Mobile Issues (fix immediately)

**1. Primary CTA Buried Below the Fold**
*   **What it is:** The first interactive button ("Book My 30-Minute Walkthrough →") is positioned after a 6-line paragraph, a subheadline, and four multi-line bullet points. On a 390px-high viewport, this button is entirely invisible upon page load.
*   **Where it occurs:** The top light-themed hero section.
*   **The fix:** Move the CTA *above* the "What you'll leave with" bullet points, placing it immediately after the introductory paragraph. Alternatively, implement a sticky CTA at the bottom of the viewport that anchors to the form.
*   **Dimension affected:** Content Prioritization.

**2. Microcopy Drops Below Legible Mobile Minimums**
*   **What it is:** The explanatory text ("Seamless read-only API connection to Jonas...") is scaled down too far, appearing to be around 12px. On a dense, high-resolution mobile screen, this becomes illegible without bringing the phone closer to the face. 
*   **Where it occurs:** Inside the dark grey "What happens next:" card, under step 2.
*   **The fix:** Ensure no body text or sub-text on mobile drops below 14px (ideally 15px with a slightly lighter grey for better contrast against the dark background).
*   **Dimension affected:** Typography Legibility.

**3. Low Contrast on Trust Microcopy**
*   **What it is:** The text "Free · No credit card · No IT lift" is a light, low-contrast grey sitting on an off-white background. Mobile screens are often viewed in bright environments (glare), causing low-contrast text to vanish completely.
*   **Where it occurs:** Directly underneath the first orange CTA button.
*   **The fix:** Darken the hex code of this text to meet WCAG AA contrast ratios (at least 4.5:1) against the background.
*   **Dimension affected:** Typography Legibility.

## Mobile Wins (what works well)
*   **Mobile-First Form Design:** The contact form is executed perfectly for 390px. Labels are placed *above* the inputs (preventing layout breaking), the input fields are tall and highly tappable, and the stark white fields contrast beautifully against the dark background.
*   **Smart Content Collapsing:** Using a native-style accordion for "Data handling & security details" at the bottom of the page is a textbook mobile win. It hides secondary legal/security text while keeping the tap target massive.
*   **Graceful Typography Scaling:** The main H1 ("Find the Members You're About to Lose...") avoids the common trap of filling the whole screen with one word per line. The font sizing and line height here feel native to a phone.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (<1 hour)**
*   Increase the `font-size` of the "Seamless read-only API..." text to `14px` or `15px`.
*   Darken the color variable for the microcopy under the first CTA button to improve contrast.
*   Increase the bottom margin of the first CTA to give the microcopy a tiny bit more breathing room from the next section.

**Structural Refactors (>1 day)**
*   **Hero Section Reordering:** Adjust the DOM order or Flexbox/Grid properties for mobile viewports to place the first CTA higher up the page (above the bullet points). Ensure the anchor link logic still flows smoothly down to the form.
