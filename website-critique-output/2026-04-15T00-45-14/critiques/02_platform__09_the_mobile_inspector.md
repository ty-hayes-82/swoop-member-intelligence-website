# The Mobile Inspector — Platform

**Page:** Platform
**URL:** http://localhost:4173/#/platform
**Lens:** The Mobile Inspector
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:49:02.118Z

---



## Mobile UX Verdict

This Platform page delivers a reasonable mobile experience with a well-structured single-column layout and no visible horizontal overflow, but it suffers from several legibility issues with small body text in key sections, cramped tap targets in the navigation area, and a dark-themed mid-page section where text contrast and readability become questionable. **The single highest-priority fix is increasing body text size in the feature description cards and the dark "The tools to act within a single..." section, where copy appears to fall below 14px and becomes difficult to read without zooming.**

**Overall Score: 62 / 100**

## Dimension Scores

| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 78 | Clean single-column reflow with no horizontal scroll, but some sections feel cramped with insufficient padding |
| Typography Legibility | 50 | Multiple sections with body text well below 16px; small descriptive copy throughout feature cards is a serious readability concern |
| Tap Targets & Interaction | 60 | Navigation hamburger appears small; some link/button clusters in the feature sections lack adequate spacing |
| Content Prioritization | 68 | Hero message is above the fold but the value proposition gets diluted by the long scroll; primary CTA placement is decent |
| Mobile Conversion Flow | 62 | Bottom sticky CTA bar works but the form and final conversion sections are deep in the page; CTA text in the orange buttons is legible |

---

## Critical Mobile Issues (fix immediately)

### 1. Body Text Below 16px in Feature Description Cards
**Where:** The "Flexible Revenue, simpler operations" section and the subsequent feature cards with descriptive paragraphs (e.g., text under "Member 360," descriptions under each feature block).
**What:** Body copy appears to render at approximately 12-14px. On a 390px viewport, this requires squinting or zooming.
**Fix:** Set all `<p>` and descriptive body text to minimum `font-size: 16px; line-height: 1.5` on mobile breakpoints.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 2. Small Text in Dark-Themed Section ("The tools to act within a single...")
**Where:** The dark/black background section mid-page featuring what appears to be a phone mockup with feature descriptions flanking it.
**What:** The descriptive text items around the phone mockup are extremely small — likely 11-13px. Combined with light gray text on a dark background, this creates a severe legibility problem. The labels around the phone (feature names and descriptions) are nearly illegible at this zoom level.
**Fix:** Reflow this section for mobile: stack the phone mockup and feature descriptions vertically rather than attempting to place text around the device. Increase text to 16px minimum.
**Dimensions affected:** Typography Legibility, Layout & Overflow, Content Prioritization

### 3. Hamburger Menu Tap Target Likely Undersized
**Where:** Top-right corner of the navigation bar — the hamburger/menu icon.
**What:** The icon appears to be approximately 24-30px wide, below the 44×44px Apple HIG minimum for comfortable tapping.
**Fix:** Increase the tap target area to 44×44px minimum (the visual icon can stay smaller, but the tappable area must expand via padding).
**Dimensions affected:** Tap Targets & Interaction

### 4. Small Metadata Text and Labels
**Where:** Throughout the page, particularly in the cards/feature blocks where sub-labels, category tags, or secondary text appear beneath headings.
**What:** Several instances of text that appears to be 11-12px — likely used for labels or secondary descriptors. These are functionally invisible on mobile without zooming.
**Fix:** Set minimum font size for any visible text element to 14px, with 16px preferred for anything the user needs to actually read.
**Dimensions affected:** Typography Legibility

### 5. CTA Button Text in the Orange Bar at Bottom May Be Cramped
**Where:** The sticky orange/amber CTA bar visible near the bottom of the viewport, and the orange "Book a Demo" or equivalent buttons throughout.
**What:** While the orange buttons are visually prominent and likely meet minimum tap target height (~44px), the text within them appears small and some buttons in the page body may have padding issues where the tappable area is adequate but visual affordance is unclear.
**Fix:** Ensure button text is at minimum 16px, with internal padding of at least 12px vertical and 24px horizontal. Verify the sticky bar doesn't obscure the last content section on scroll.
**Dimensions affected:** Tap Targets & Interaction, Mobile Conversion Flow

---

## Mobile Wins (what works well)

1. **No Horizontal Overflow:** The entire page respects the 390px viewport constraint — no elements bleed off-screen, no horizontal scrollbar. This is the foundational requirement and it's met.

2. **Hero Section Above the Fold:** The hero heading "Stop guessing. Start knowing your members." (or similar) with the orange CTA button appears prominently in the first viewport. The value proposition is immediately clear.

3. **Single-Column Reflow:** Multi-column desktop grids (feature cards, comparison sections) have correctly collapsed into a single-column stack. No awkward side-by-side cramming.

4. **Strong Visual Hierarchy with Orange CTAs:** The orange/amber CTA buttons create clear visual anchors throughout the scroll. They stand out against both light and dark backgrounds, making the conversion action always findable.

5. **Sticky Bottom CTA Bar:** The persistent orange bar at the very bottom provides a constant conversion opportunity without requiring the user to scroll back up. This is a strong mobile conversion pattern.

6. **Consistent Brand Color Usage:** The orange accent color is used consistently for interactive elements, creating a learnable pattern for the user about where to tap.

7. **"Why Swoop..." FAQ/Benefits Section:** The bottom section with expandable or listed items appears to have adequate text sizing for headings and functions as good mobile content — scannable, stacked, and clear.

---

## Quick Fixes vs. Structural Fixes

### Quick CSS Fixes (< 1 hour)

| Fix | Effort | Impact |
|-----|--------|--------|
| Increase all body `<p>` text to `font-size: 16px` on `@media (max-width: 768px)` | 15 min | HIGH — fixes the #1 legibility issue across all feature cards |
| Add `min-height: 44px; min-width: 44px` to hamburger menu tap target via padding | 10 min | MEDIUM — fixes HIG compliance for navigation |
| Increase line-height to 1.5-1.6 on mobile body text | 10 min | MEDIUM — improves readability of dense paragraphs |
| Add `padding: 0 20px` to any sections where text runs too close to screen edges | 15 min | LOW-MEDIUM — improves breathing room |
| Ensure sticky bottom bar has adequate `padding-bottom` on the last page section so content isn't obscured | 15 min | MEDIUM — prevents content from being hidden |
| Increase label/tag text from ~11px to 14px minimum | 10 min | MEDIUM — makes metadata readable |

### Structural Refactors (> 1 day)

| Fix | Effort | Impact |
|-----|--------|--------|
| **Redesign the dark phone mockup section** — reflow from "text around device" to vertical stack: phone image → feature list below, with each feature at 16px+ text | 1-2 days | HIGH — this section is currently the least usable on mobile |
| **Add progressive disclosure** to long feature sections — collapse secondary feature descriptions into expandable accordions to reduce scroll depth | 1-2 days | MEDIUM — page is very long; mobile users may abandon before reaching the CTA sections |
| **Implement a mid-page conversion interstitial** — after the first 2-3 feature blocks, insert a focused CTA block to capture high-intent users who don't want to scroll through the entire page | 0.5-1 day | HIGH — reduces the distance to conversion for motivated visitors |
| **Optimize images/mockups for mobile** — the phone mockup and any dashboard screenshots should be rendered at mobile-appropriate dimensions with lazy loading | 1 day | MEDIUM — affects load performance which impacts conversion |
