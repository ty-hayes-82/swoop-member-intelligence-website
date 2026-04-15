# The Mobile Inspector — Home / Landing

**Page:** Home / Landing
**URL:** http://localhost:4173/#/landing
**Lens:** The Mobile Inspector
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:46:57.282Z

---



## Mobile UX Verdict

This page is a reasonably well-structured mobile landing page that collapses to single-column correctly, but it suffers from several significant legibility issues — particularly small body text in feature description sections, cramped tap targets in the navigation area, and a few sections where contrast and font sizing fall below mobile-acceptable thresholds. The single highest-priority fix is **increasing body text size in the mid-page feature/benefit sections**, where copy appears to render at approximately 12-14px, requiring effort to read on a phone.

**Overall Score: 61 / 100**

## Dimension Scores

| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 74 | Single-column reflow works; some sections feel cramped with insufficient padding |
| Typography Legibility | 48 | Multiple body text blocks appear sub-16px; small descriptive text throughout mid-page sections |
| Tap Targets & Interaction | 62 | Several small link/button elements; nav items appear tight; some CTAs are adequately sized |
| Content Prioritization | 68 | Hero communicates value prop quickly; CTA visible early; but mid-page sections are dense and competing |
| Mobile Conversion Flow | 65 | Primary CTA flow is present; pricing section is clear; but form/demo entry point could be more prominent |

---

## Critical Mobile Issues (fix immediately)

### 1. Sub-16px Body Text in Feature Sections
**Where:** The sections describing "What your GM wishes they had" with the "YES" / "PASS" elements, and the descriptive paragraphs beneath "Your ten-sheet, POS, and CRM each see part of the picture..." and throughout the feature benefit blocks mid-page.
**What:** Body copy in these blocks appears to render at approximately 12-14px. On a 390px viewport, this forces users to bring the phone closer or squint. The lighter gray text on white background compounds this.
**Fix:** Set all body/paragraph text to `min 16px` (`1rem`). Ensure `line-height` is at least `1.5` for readability.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 2. Small Text in the "Your tools into the club intelligence platform" Section
**Where:** The three-column-turned-single-column feature cards with labels like "Tee-sheet/booking," "POS/F&B systems," and what appears to be a third integration card.
**What:** The descriptor text under each card title appears extremely small — likely 11-13px. Additionally, the label text on what look like tag/badge elements may be under 10px.
**Fix:** Increase card descriptor text to 16px minimum. Badge/tag text should be no smaller than 12px, ideally 14px.
**Dimensions affected:** Typography Legibility

### 3. Tight Tap Targets in Top Navigation
**Where:** The header/nav bar at the very top of the page — there appears to be a logo and navigation items or a hamburger menu.
**What:** The nav elements appear compressed with less than 44×44px touch area. If there are inline nav links (not behind a hamburger), they are likely spaced too closely for thumb tapping.
**Fix:** Ensure the hamburger icon (if present) is at least 44×44px tap area. If inline links exist, they need 44px height with ≥8px spacing between them.
**Dimensions affected:** Tap Targets & Interaction

### 4. "YES / PASS" Interactive Elements — Undersized
**Where:** The section titled "What your GM wishes they could do" shows what appear to be "YES" and "PASS" toggle/button elements rendered in green and red.
**What:** These elements appear to be approximately 30-36px in height, below the 44px Apple HIG minimum. If they are interactive (clickable to reveal content), they fail tap target requirements. Even if decorative, they read as interactive.
**Fix:** If interactive, increase to 44px height minimum with 8px spacing. If decorative, style them distinctly from buttons (remove border-radius pill shape or add non-interactive visual cues).
**Dimensions affected:** Tap Targets & Interaction

### 5. Low Contrast Gray Text on Light Backgrounds
**Where:** Subheadings and secondary descriptive text throughout, particularly the paragraph text beneath the hero section ("Your ten-sheet, POS, and CRM each see part of the picture...") and the descriptive text in the pricing area.
**What:** Light/medium gray text (#999 or similar) on white or very light backgrounds likely fails WCAG AA contrast ratio (4.5:1 minimum for body text). This is especially problematic outdoors or in bright environments where club GMs might be reading.
**Fix:** Darken body text to at least `#555` or ideally `#333` on white backgrounds. Verify with a contrast checker.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 6. Pricing Section Text Legibility
**Where:** Near the bottom of the page, the pricing cards showing "$0/mo" and "$1,499/mo" tiers.
**What:** While the price numbers themselves are adequately sized, the feature list text beneath each pricing tier appears very small (likely 12-13px). Bullet points or feature descriptions at this size on mobile mean users can't quickly scan and compare plans — the exact moment that determines conversion.
**Fix:** Feature list items should be 15-16px minimum. Add adequate line-height (1.6+) and vertical spacing between list items (8-12px).
**Dimensions affected:** Typography Legibility, Mobile Conversion Flow

---

## Mobile Wins (what works well)

1. **Hero Section Value Proposition:** The hero heading "Your ten-sheet, POS, and CRM each see part of the picture. Swoop sees the whole member — in real time. (1,219 hrs/yr)" is bold, large, and immediately communicates the core value. The text is appropriately sized for mobile and wraps well at 390px.

2. **Single-Column Layout:** The entire page correctly collapses into a single-column flow. No horizontal scrolling is evident anywhere in the screenshot. Cards, sections, and feature blocks all stack vertically without overlap or clipping.

3. **$42.28 Metric Callout:** The large numerical stat ("$42.28") is visually prominent and well-sized on mobile. This kind of proof point anchors attention and breaks up text-heavy sections. Good mobile content design.

4. **Dark Section Differentiation:** The page uses alternating dark (near-black) and light backgrounds to break up sections. This creates natural visual "chapters" as the user scrolls, which is particularly effective on mobile where users orient by scrolling.

5. **Sticky or Repeated CTA Presence:** There appear to be CTA buttons ("Get early access" or similar) at multiple scroll points — hero, mid-page, and bottom. This ensures a mobile user never has to scroll far to take action.

6. **Pricing Section Clarity:** The two-tier pricing structure ($0/mo vs. $1,499/mo) is simple and doesn't require horizontal scrolling or a comparison table that would break on mobile. The stacked card approach is mobile-appropriate.

7. **Bottom CTA Bar:** There appears to be a dark bottom bar with a CTA, functioning as a final conversion nudge. Its full-width treatment is appropriate for mobile thumb reach.

---

## Quick Fixes vs. Structural Fixes

### Quick CSS Fixes (< 1 hour)

| Fix | Details |
|-----|---------|
| Increase body text to 16px | Add `body { font-size: 16px; }` and audit all `p`, `li`, `span` elements for overrides below 16px |
| Darken gray text color | Change secondary text from ~#999 to #555 or darker for contrast compliance |
| Increase line-height | Set `line-height: 1.6` on all body text and feature descriptions |
| Add padding to cramped sections | Several mid-page sections need `padding: 0 20px` instead of what appears to be 12-14px side padding |
| Increase nav tap target size | Add `min-height: 44px; min-width: 44px` to nav interactive elements |
| Pricing feature list font size | Bump from ~12px to 16px in the pricing card feature lists |
| YES/PASS element sizing | Increase pill height to 44px if interactive, or restyle as non-interactive badges |

### Structural Fixes (> 1 day)

| Fix | Details |
|-----|---------|
| Content density audit for mobile | Several mid-page sections pack too much information into dense blocks. A mobile-specific content strategy would collapse secondary details into expandable accordions, reducing cognitive load per scroll-stop. |
| Sticky mobile CTA bar implementation | If not already sticky, implement a persistent bottom CTA bar (~60px) that stays visible during scroll with proper `padding-bottom` on page content to prevent content occlusion. Requires JS for scroll-aware show/hide. |
| Mobile-specific testimonial carousel | The testimonial/social proof section appears to show multiple quotes stacked vertically. A swipeable carousel would reduce scroll depth while maintaining social proof impact. |
| Form optimization for mobile | If the CTA leads to a form (demo request / early access), ensure it has: proper `inputmode` attributes, large input fields (50px height), single-column layout, and autofill support. This requires a separate mobile form audit. |
| Image/illustration optimization | Some sections appear to include illustrations or UI mockups that may not be optimally sized for mobile. A responsive image strategy with mobile-specific crops/sizes would improve load time and visual impact. |
