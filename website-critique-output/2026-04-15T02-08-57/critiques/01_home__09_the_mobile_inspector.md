# The Mobile Inspector — Home / Landing

**Page:** Home / Landing
**URL:** http://localhost:4180/#/landing
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:10:22.881Z

---

## Mobile UX Verdict
This page is a highly effective, native-feeling mobile experience that respects the 390px viewport perfectly—with zero horizontal overflow and smart single-column reflows. The single highest-priority mobile fix is overhauling the cramped, dual-action sticky footer bar at the very bottom, which introduces tap-target friction on small screens. 

**Overall Score: 88 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 95 | Flawless mobile containment. Padding is consistent, and multi-column desktop sections (like the 3-part "See it, Fix it" blocks) stack vertically with excellent rhythm. |
| Typography Legibility | 80 | Headings and primary body copy scale well, but secondary details (integration lists, disclaimers) fall well below the 16px mobile minimum, requiring squinting. |
| Tap Targets & Interaction | 85 | Primary orange CTAs are large and thumb-friendly. However, stacked text links and the sticky bottom bar violate Apple's 44x44px minimum spacing rules. |
| Content Prioritization | 95 | Excellent mobile storytelling. The "Founding-Partner Pick" pricing tier is smartly placed at the top of the pricing stack, ensuring the core offer is seen first. |
| Mobile Conversion Flow | 85 | Frequent, clear inline CTAs keep conversion top-of-mind. The only friction is the execution of the sticky CTA bar which feels cluttered on a 390px screen. |

## Critical Mobile Issues (fix immediately)

**1. Cramped Dual-Action Sticky Footer**
*   **What it is:** The floating bar at the bottom contains two distinct links side-by-side: "Talk to a GM who's using it →" and "Book a Walkthrough". 
*   **Where it occurs:** Very bottom sticky bar.
*   **What the fix is:** On mobile, a sticky bar should only have *one* primary action to ensure a massive, thumb-friendly tap target. Remove the secondary text link from the sticky bar and make "Book a Walkthrough" span 100% of the bar width.
*   **Affected Dimension(s):** Tap Targets & Interaction, Mobile Conversion Flow

**2. Micro-Typography in Integration Cards**
*   **What it is:** The lists of specific systems (e.g., "ForeUP · Lightspeed Golf...", "Mailchimp · Constant Contact...") use a font size that appears to be 12-13px with low-contrast gray text.
*   **Where it occurs:** Inside the dark "28 INTEGRATIONS ACROSS 10 CATEGORIES" section.
*   **What the fix is:** Increase this subtitle text to a minimum of 14px (ideally 15-16px) and bump the text opacity/color to a lighter gray for better contrast against the dark background.
*   **Affected Dimension(s):** Typography Legibility

**3. Stacked Pre-Footer Text Links**
*   **What it is:** The secondary text links "Talk to a GM who's using it →" and "Get a sample morning briefing →" are stacked directly on top of each other.
*   **Where it occurs:** At the bottom of the dark "See what your club misses today." section.
*   **What the fix is:** Add a minimum of `16px` margin/padding between these two links to ensure users don't accidentally fat-finger the wrong link. 
*   **Affected Dimension(s):** Tap Targets & Interaction

**4. Illegible Hero Disclaimers**
*   **What it is:** The string of text under the hero buttons ("No credit card · No IT lift · Live in 2 weeks...") is too small for comfortable mobile reading.
*   **Where it occurs:** Directly underneath the two hero CTA buttons.
*   **What the fix is:** Increase font size to 14px minimum and adjust line-height so it wraps comfortably across two lines if necessary, rather than shrinking to fit one line.
*   **Affected Dimension(s):** Typography Legibility

## Mobile Wins (what works well)
*   **Flawless Width Containment:** Not a single element breaks the 390px boundary. The dark UI dashboard mockup ("What your GM sees at 6:15 AM") is perfectly scaled to fit within the viewport padding.
*   **Strategic Pricing Stacking:** By placing the $499/mo "Founding-Partner Pick" at the top of the mobile pricing stack, you avoid the common mistake of making mobile users scroll past a free/basic tier to find the primary revenue driver.
*   **Accordion for Tech Specs:** Hiding the "Security & Implementation Details" behind a tap target dropdown is a brilliant way to save vertical scroll depth on mobile while still appeasing IT buyers.
*   **Visual Hierarchy in the Z-Pattern:** The alternating text-and-image sections ("One screen.", "The right action.", "Take a dollar number...") translate perfectly to mobile, establishing a great rhythm of Read -> See -> Read -> See.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (<1 hour)**
*   Increase `font-size` and `color` contrast for the sub-text inside the 10 Integration category cards.
*   Add `margin-bottom: 16px` to the "Talk to a GM..." text link in the pre-footer to space it away from the link below it.
*   Bump the `font-size` of the hero disclaimer text and the post-pricing disclaimer text to at least 14px.

**Structural Refactors (>1 day)**
*   Refactor the bottom sticky CTA bar specifically for the mobile breakpoint. Change the DOM structure so it outputs a single, full-width `fixed` button ("Book a Walkthrough") rather than a flex-container with two inline text elements.
