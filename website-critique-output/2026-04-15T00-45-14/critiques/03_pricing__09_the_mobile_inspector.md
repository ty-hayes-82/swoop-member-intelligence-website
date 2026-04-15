# The Mobile Inspector — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Mobile Inspector
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:51:16.061Z

---



## Mobile UX Verdict

This pricing page is reasonably functional on mobile but suffers from several significant issues: undersized tap targets in the pricing toggle area, a revenue calculator section with small text that strains legibility, and some inconsistent spacing that undermines the professional feel. **The single highest-priority fix is the pricing toggle/tab controls ("Signals", "Signals + Actions", "Growth", etc.)** which appear to be small, tightly packed text links that fail minimum tap target sizing and are difficult to accurately tap with a thumb.

**Overall Score: 62 / 100**

## Dimension Scores

| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 72 | Generally single-column with no visible horizontal overflow, but the calculator section and pricing tier cards have cramped internal spacing |
| Typography Legibility | 58 | Multiple instances of text appearing well below 16px — calculator labels, pricing feature lists, and FAQ body text appear to be 12-14px |
| Tap Targets & Interaction | 52 | Pricing plan toggle tabs are critically undersized and too close together; CTA buttons are acceptable but some secondary links are small |
| Content Prioritization | 68 | Hero messaging and primary value prop are above the fold, but the calculator section is dense and may lose mobile users before they reach pricing |
| Mobile Conversion Flow | 65 | Primary CTAs ("Calculate exactly" and "Start for free") are visible and reasonably placed, but the journey from calculator to pricing to signup is long |

## Critical Mobile Issues (fix immediately)

### 1. Pricing Plan Toggle Tabs Are Undersized and Crowded
**Where:** Mid-page pricing section — the row showing "Signals", "Signals + Actions", "Growth", and what appears to be a fourth option
**What:** These tabs appear to be approximately 30-35px tall with minimal horizontal padding and less than 8px spacing between them. On a 390px viewport, this creates a high mis-tap probability.
**Fix:** Increase tab height to ≥ 44px, add at least 12px horizontal padding per tab, or convert to a vertically stacked selector or a swipeable pill design. Consider showing only 2-3 options with a "See all plans" expansion.
**Dimensions affected:** Tap Targets & Interaction, Mobile Conversion Flow

### 2. Small Body Text in Calculator and Feature Lists
**Where:** The "ROI CALCULATOR" section — labels like "MEMBERS," "AVG DUES/MONTH," "ANNUAL REVENUE," and the dynamic output text; also the bullet-point feature lists under each pricing tier ("✓ Engagement scoring by member," "✓ Churn risk flags," etc.)
**What:** These text elements appear to render at approximately 12-13px, requiring users to lean in or pinch-zoom. The calculator input labels and the pricing feature checkmarks are both affected.
**Fix:** Set minimum font-size of 16px for all body/label text. For feature lists, use 15px minimum with generous line-height (1.5+). Calculator labels should be 14px minimum with high contrast.
**Dimensions affected:** Typography Legibility, Content Prioritization

### 3. Calculator Input Fields May Be Difficult to Interact With
**Where:** The ROI calculator section — the slider or input showing "$ of 7" and "65%" and "$74K"
**What:** The interactive calculator elements (sliders/inputs) appear small on mobile. The "$ of 7" input area looks constrained and the percentage display may not have adequate tap target sizing for adjustment.
**Fix:** Ensure all slider tracks are at least 44px tall in their touch area (even if visually thinner), and make input fields full-width with 48px minimum height. Add clear increment/decrement controls if using sliders.
**Dimensions affected:** Tap Targets & Interaction, Mobile Conversion Flow

### 4. FAQ Section Text Appears Small and Dense
**Where:** Bottom section — "Things GMs ask us." with questions like "Do I need to replace our current club management system?", "Is my members' data secure?", "What does the free/paid tier program actually look like?"
**What:** The FAQ answer text appears to be around 13-14px with tight line spacing. The expandable question text itself may be borderline at ~15px.
**Fix:** Set question text to 17-18px bold, answer body text to 16px minimum with 1.6 line-height. Ensure each FAQ row has ≥ 44px tap height for the expand/collapse trigger.
**Dimensions affected:** Typography Legibility, Tap Targets & Interaction

### 5. Orange CTA Buttons Have Adequate Size But "Start for free" Link May Be Undersized
**Where:** Multiple locations — "Calculate exactly" (hero), "Start for free today" (mid-page), and secondary text links
**What:** The primary orange buttons appear to meet the 44px minimum height, which is good. However, secondary links like "See full feature list →" beneath pricing cards appear to be plain text links without sufficient tap padding.
**Fix:** Wrap all text links in a container with minimum 44×44px touch area using padding. Style "See full feature list →" as a button or add visible padding.
**Dimensions affected:** Tap Targets & Interaction

## Mobile Wins (what works well)

1. **Hero Section Messaging is Punchy and Above the Fold:** "Stop losing $71K a year in silent member attrition. Start for zero." is immediately visible, emotionally compelling, and perfectly sized for the 390px viewport. The headline doesn't overflow and creates urgency.

2. **Single-Column Layout Throughout:** The page correctly collapses to a single-column layout with no visible horizontal overflow. Cards, sections, and the calculator all stack vertically as expected.

3. **Dark Background with High-Contrast Orange CTAs:** The dark (#1a1a1a or similar) background with bright orange (#FF6B00 range) buttons creates strong visual hierarchy and excellent CTA visibility. The "Calculate exactly" and "Start for free today" buttons are impossible to miss.

4. **Price Anchoring is Effective:** Showing "$74K" walking out the door and then presenting "$0/mo" for the Signals tier creates powerful contrast that works on the small screen because of the large numeric typography.

5. **Sticky-Free Clean Scrolling:** No sticky nav or floating CTA bar is covering content, which on this long-form page actually helps — the content breathes and the user isn't fighting overlapping elements.

6. **Social Proof Positioning:** The "5 of 7" stat (presumably clubs or similar) near the top supports the value proposition early in the scroll journey.

## Quick Fixes vs. Structural Fixes

### Quick CSS Fixes (<1 hour)
| Fix | Details |
|-----|---------|
| Increase feature list font size | Set `font-size: 16px; line-height: 1.6` on all `.feature-list li` or equivalent elements |
| Increase FAQ text size | Set body answer text to `font-size: 16px` and question text to `font-size: 17px` |
| Add tap padding to text links | Add `padding: 12px 0; display: inline-block` to "See full feature list →" and similar links |
| Increase calculator label font size | Set all calculator labels to `font-size: 14px` minimum (16px preferred) |
| Add spacing between pricing toggle tabs | Add `gap: 8px` or `margin: 0 6px` between tab elements |

### Structural Fixes (>1 day)
| Fix | Details |
|-----|---------|
| Redesign pricing plan selector for mobile | Replace horizontal text tabs with a mobile-optimized pattern: vertical stack, swipeable cards, or a dropdown selector. Current 4-option horizontal tabs don't scale to 390px. Requires new component design and testing. |
| Rebuild ROI calculator for touch | Redesign slider/input controls with larger touch targets (44px+), clearer value labels, and possibly a step-based flow instead of inline sliders. May need a dedicated mobile calculator component. |
| Shorten mobile page length | The page is very long on mobile (hero → calculator → pricing → features → FAQ → final CTA). Consider collapsing the calculator into an expandable section or moving it to a separate page, and using progressive disclosure for pricing tiers to reduce scroll fatigue. |
| Add a sticky mobile CTA | While the clean scroll is nice, the page is long enough that a subtle sticky "Start for free" bar appearing after the first scroll would improve conversion. Needs careful implementation to avoid covering content (use ~56px bar with semi-transparent background). |
