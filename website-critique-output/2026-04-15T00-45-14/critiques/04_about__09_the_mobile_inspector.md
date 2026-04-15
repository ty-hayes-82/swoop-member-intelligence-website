# The Mobile Inspector — About

**Page:** About
**URL:** http://localhost:4173/#/about
**Lens:** The Mobile Inspector
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:53:43.006Z

---



## Mobile UX Verdict

This About page is a solid mobile effort with a well-collapsed single-column layout and strong content hierarchy, but it's held back by several notable issues: undersized typography in key sections, a few tap target concerns, and an overly long page that buries the final CTA. **The single highest-priority fix is increasing body text size in the lower sections where it appears to drop below 14px, making entire paragraphs difficult to read without pinching.**

**Overall Score: 62 / 100**

## Dimension Scores

| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 78 | Single-column reflow works well; no visible horizontal overflow, but some sections feel cramped with minimal side padding |
| Typography Legibility | 52 | Multiple sections show body text well below 16px; small grey-on-white text in mid-page and bottom sections |
| Tap Targets & Interaction | 60 | Orange CTA buttons appear adequately sized, but inline text links and navigation items are likely undersized; link density in "Things GMs ask us" section is concerning |
| Content Prioritization | 68 | Hero section is strong with clear value prop above fold; but page is extremely long with repetitive stat blocks that dilute focus before the conversion CTA |
| Mobile Conversion Flow | 58 | Final CTA form at bottom is a long scroll away; the dark-background form section appears functional but text field legibility is questionable |

---

## Critical Mobile Issues (fix immediately)

### 1. Body Text Below 16px in Multiple Sections
**Where:** The paragraph text under "An extension of your team..." section, the paragraphs under "Intelligence in action" stats, the FAQ-style "Things GMs ask us" section, and the paragraph copy near "Event Tracking" and "Justice CTA" areas.
**What:** Body copy appears to render at approximately 13–14px based on character count per line and visual proportion against the 390px viewport. On the lines reading "To actually fix the problem, we had to..." and similar explanatory paragraphs, the text is clearly smaller than the hero section's body copy.
**Fix:** Set all `<p>` and body copy to `min-font-size: 16px` on mobile breakpoints. Use `clamp(16px, 4vw, 18px)` for fluid scaling.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 2. Low-Contrast Grey Text on White Background
**Where:** Secondary descriptive text throughout the page — visible under the stats section ("$532", "$1.38M" callouts) where explanatory labels appear in a light grey that is hard to read.
**What:** The supporting text under metric callouts appears to be a medium grey (#888 or similar) on white, likely failing WCAG AA contrast ratio (needs 4.5:1 for small text).
**Fix:** Darken secondary text to at least `#595959` (or darker) to meet 4.5:1 contrast against white.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 3. Tap Targets in "Things GMs ask us" Accordion/FAQ Section
**Where:** The expandable question items in the FAQ-style section near the bottom of the page.
**What:** Each question row appears to be tightly stacked with minimal vertical padding between items. The visible questions ("What's the onboarding process?", etc.) seem to have tap target heights of approximately 36–40px with inadequate spacing between them, risking mis-taps.
**Fix:** Add `min-height: 48px` and `padding: 12px 0` to each accordion trigger row; ensure 8px+ gap between items.
**Dimensions affected:** Tap Targets & Interaction, Mobile Conversion Flow

### 4. Final CTA Form Buried at Extreme Bottom of Page
**Where:** The dark-background section at the very bottom with "See what your club misses today and now" heading and the form with orange "Get Your Free Club Diagnostic" button.
**What:** This is the primary conversion form, but it sits approximately 8-10+ full mobile screen scrolls below the fold. Many mobile users will abandon before reaching it. The form fields on the dark background may also have legibility issues — the input field borders/labels are difficult to discern.
**Fix:** Add a sticky mobile CTA bar (fixed bottom, ~56px height) with a "Get Free Diagnostic" button that scrolls to or opens this form. Alternatively, add a mid-page CTA breakpoint after the stats section.
**Dimensions affected:** Mobile Conversion Flow, Content Prioritization

### 5. Navigation Hamburger / Top Nav Usability
**Where:** Top of page — the header area shows "swoop" branding on the left with what appears to be a minimal nav.
**What:** The top navigation elements are very small and appear to lack a visible hamburger menu icon or have a very small tap target for it. At 390px, the nav items (if visible) are likely too small and tightly spaced.
**Fix:** Ensure hamburger icon is 44×44px minimum; if nav links are exposed, collapse them behind a mobile menu.
**Dimensions affected:** Tap Targets & Interaction

---

## Mobile Wins (what works well)

1. **Hero Section Content Hierarchy:** The hero at the top is excellent — "Stop digging for answers. Start leading with intelligence." is punchy, well-sized, and the orange CTA buttons ("See Swoop in Action", "Get Your Free Diagnostic") are prominently visible and appear to be full-width or near-full-width, making them easy thumb targets.

2. **Single-Column Reflow:** The entire page cleanly collapses to a single column with no visible horizontal overflow. Desktop grid elements (stat cards, feature blocks) stack vertically without breaking.

3. **Visual Stat Callouts:** The large numerical stats ("4 days", "$532", "$1.38M") are bold and large enough to be scannable on mobile, creating effective visual anchors as users scroll.

4. **Orange CTA Button Contrast:** The orange (#F5A623 or similar) buttons against both white and dark backgrounds provide strong visual contrast and clear interactive affordance. They appear to be full-width on mobile, which is ideal.

5. **Section Spacing:** There is generally good vertical whitespace between major sections, preventing the "wall of content" feel despite the page's length.

6. **Dark-background final section:** The color shift to a dark background for the final CTA creates a clear visual break that signals "this is important / this is different," which is good mobile UX for conversion sections.

---

## Quick Fixes vs. Structural Fixes

### Quick Fixes (< 1 hour)

| Fix | Effort | Impact |
|-----|--------|--------|
| Increase all body `<p>` text to `min 16px` on `@media (max-width: 768px)` | 15 min | High — fixes primary legibility issue across entire page |
| Darken secondary/grey text to `#595959` or darker | 10 min | Medium — improves contrast for stat labels and descriptions |
| Add `min-height: 48px` and `padding: 12px 16px` to FAQ accordion rows | 20 min | Medium — fixes tap target spacing in FAQ section |
| Increase hamburger/nav icon tap target to 44×44px | 10 min | Medium — prevents top-of-page interaction frustration |
| Add `padding: 0 20px` to any sections where side gutters appear less than 16px | 15 min | Low-Medium — prevents text from feeling edge-to-edge |

### Structural Fixes (> 1 day)

| Fix | Effort | Impact |
|-----|--------|--------|
| Add sticky bottom CTA bar on mobile that persists during scroll with "Get Free Diagnostic" button | 4-6 hours | **Very High** — single biggest conversion improvement; eliminates the need to scroll 10 screens to reach the form |
| Condense mid-page content: collapse the stats section ("4 days", "$532", "$1.38M") into a horizontal scroll carousel or a more compact 2×2 grid to reduce total page length | 1-2 days | High — reduces scroll fatigue and gets users to CTA faster |
| Add a mid-page CTA module after the "Intelligence in action" section (before the page drags on) | 2-4 hours | High — captures users who are convinced early but have no conversion path until the very bottom |
| Redesign the bottom form section for better mobile input UX: larger input fields, visible labels, proper `inputmode` attributes, and field validation feedback | 1 day | Medium-High — form is the actual conversion mechanism and needs to be flawless on touch |
