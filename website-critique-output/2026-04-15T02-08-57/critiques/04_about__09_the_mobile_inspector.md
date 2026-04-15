# The Mobile Inspector — About

**Page:** About
**URL:** http://localhost:4180/#/about
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:13:09.689Z

---

## Mobile UX Verdict
This page is generally excellent on a 390px viewport, exhibiting strong single-column flow, clear mobile typography, and well-padded containers. The single highest-priority mobile fix is repairing the "Moat" section's internal grid, which fails to collapse properly and results in severely squished, awkward text wrapping.

**Overall Score: 88 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 80 | Most sections collapse perfectly, but the "Moat" card contains a multi-column flex/grid layout that severely breaks on mobile viewports. |
| Typography Legibility | 90 | Body copy and headings scale beautifully. Minor deduction for undersized text in the bottom "What happens next" box. |
| Tap Targets & Interaction | 85 | Primary CTA buttons are massive and thumb-friendly. Secondary text links ("LinkedIn", "See how...") risk failing the 44x44px minimum. |
| Content Prioritization | 95 | Excellent mobile storytelling rhythm. The page stacks logical arguments sequentially without overwhelming the user. |
| Mobile Conversion Flow | 95 | The embedded mobile form is perfect—full-width inputs, visible labels, and a high-contrast CTA button. |

## Critical Mobile Issues (fix immediately)

**1. Grid Collapse Failure in "Moat" Card**
*   **What it is:** The dark card titled "Why this is hard to copy" uses a 2-column internal layout for the statistics (e.g., "46" next to "production tools in orchestration"). On a 390px screen, the right column is compressed to roughly ~80px wide, forcing words to break awkwardly and causing extreme vertical stacking.
*   **Where it occurs:** Halfway down the page in the dark "Moat" section.
*   **What the fix is:** Force this internal grid to stack vertically on mobile (Number on top, text below) OR change it to a flex-row with `flex-wrap` and full 100% width for each stat block.
*   **Dimension(s) Affected:** Layout & Overflow, Typography Legibility

**2. Undersized Secondary Tap Targets**
*   **What it is:** Bare text links are used for secondary actions. On a touch device, pure text links often fail the Apple HIG minimum of 44x44px, leading to user frustration.
*   **Where it occurs:** The "LinkedIn →" links in the Team cards, and the standalone "See how the platform works →" link in the center of the page.
*   **What the fix is:** Apply CSS `padding: 12px 0;` and `display: inline-block;` (or block) to these links to artificially expand their invisible tap/touch area without changing their visual weight.
*   **Dimension(s) Affected:** Tap Targets & Interaction

**3. Low Legibility in "What happens next" Step List**
*   **What it is:** The numbered list (1, 2, 3) inside the dark box near the final lead capture form uses a noticeably smaller font size (appears to be ~12-13px) and a lighter grey text color that lacks ideal contrast against the dark background.
*   **Where it occurs:** Bottom of the page, inside the dark "See what Swoop would find at your club" section.
*   **What the fix is:** Bump this secondary text to at least 15px/16px and brighten the text color closer to white to ensure it is readable outdoors or on dimmed screens without zooming.
*   **Dimension(s) Affected:** Typography Legibility

## Mobile Wins (what works well)
*   **Padding & Viewport Constraints:** The page holds a strict, consistent 16-20px horizontal padding throughout every section. Content never bleeds to the absolute edge of the glass.
*   **Form Input Design:** The bottom lead capture form is incredibly well-optimized for a phone. The inputs are full-width, tall enough to tap easily, and use persistent top-labels rather than disappearing placeholders.
*   **FAQ Accordions:** The generous vertical padding on each FAQ question ensures that users' thumbs won't accidentally trigger the wrong drop-down. 
*   **Data Card Stacking:** The "Intelligence in action" stats cards stack vertically with perfect spacing.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (< 1 hour)**
*   Add `padding` to the "LinkedIn →" and "See how the platform works →" links to ensure a 44x44px minimum tap area.
*   Increase font size to 15px+ and brighten the color of the "What happens next" steps in the bottom dark section.
*   Add a bit of top margin to the final orphaned text link at the very bottom right of the footer ("Book a Walkthrough") so it doesn't crowd the text next to it.

**Structural Refactors (> 1 day)**
*   Refactor the CSS Grid/Flexbox code for the "Moat" (Why this is hard to copy) card so that the statistics and their accompanying text flow natively on a 390px viewport instead of squeezing into unreadable side-by-side columns.
