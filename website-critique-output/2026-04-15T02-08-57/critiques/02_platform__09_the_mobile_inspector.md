# The Mobile Inspector — Platform

**Page:** Platform
**URL:** http://localhost:4180/#/platform
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:11:30.945Z

---

## Mobile UX Verdict
The Swoop Club Intelligence Platform page has strong conversion fundamentals and excellent CTA placement, but it suffers from severe responsive design failures in the mid-page content. The failure to collapse multi-column layouts into single columns and the use of scaled-down desktop graphics result in microscopic, illegible text that actively damages the product's "show, don't tell" value proposition on a 390px viewport. 

**The single highest-priority mobile fix is to force the side-by-side "FIX IT" and "PROVE IT" columns to stack vertically.**

**Overall Score: 66 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 40 | Critical failure: The "Fix It / Prove It" section forces a side-by-side desktop layout onto mobile, severely compressing text. |
| Typography Legibility | 50 | Graphical "UI" representations scale down rather than reflowing, resulting in ~8-10px microscopic text that cannot be read without zooming. |
| Tap Targets & Interaction | 85 | Primary CTAs are large, full-width, and easily tappable. Horizontal scrolling navigation is well-implemented. |
| Content Prioritization | 80 | The story sequence is logical and the primary CTA is visible above the fold, but unreadable graphics hide the actual product value. |
| Mobile Conversion Flow | 90 | Excellent repetition of the primary conversion action without intrusive sticky elements blocking the reading experience. |

## Critical Mobile Issues (fix immediately)

**1. Unstacked Multi-Column Layout (The "Newspaper" Effect)**
*   **What it is:** The "FIX IT" (The right person...) and "PROVE IT" (Take a dollar number...) sections remain in a side-by-side two-column layout on mobile. This squishes the text into extreme, unreadable narrow columns (1-3 words per line). 
*   **Where it occurs:** Mid-page, below the "Agents" list.
*   **What the fix is:** Update the CSS media queries for this grid/flex container to `flex-direction: column;` or `grid-template-columns: 1fr;` below 768px.
*   **Dimension(s) affected:** Layout & Overflow, Typography Legibility.

**2. Microscopic Text in Scaled-Down Graphics**
*   **What it is:** The dark graphical elements meant to represent the software ("swoop_os / brief", "LIVE - 6 AGENTS ONLINE", and the "APPROVED - 06:33" card) appear to be fixed-aspect-ratio desktop SVGs or containers scaling down to fit the 390px width. As a result, the text inside them (e.g., "complaint aging 4 days", "Demand Optimizer 09:09:11") is microscopic and entirely illegible.
*   **Where it occurs:** In the "The daily brief, written overnight" section, the "Six AI agents working your club" section, and the "FIX IT" column.
*   **What the fix is:** These graphical elements must be rebuilt for mobile. Either hide the complex desktop graphic and swap it for a simplified mobile-specific SVG, or build these "mockups" using HTML/CSS so the text can wrap and remain at ≥ 14px on mobile. 
*   **Dimension(s) affected:** Typography Legibility, Content Prioritization.

**3. Illegible Eyebrow Metadata & Stats**
*   **What it is:** The capitalized metadata tags inside the capability cards are too small to read comfortably on mobile. 
*   **Where it occurs:** The "Six jobs" cards (e.g., the text "READS FROM: CRM + POS + EMAIL" under the 6.4 wks stat). 
*   **What the fix is:** Increase the font size to a minimum of 13px-14px for metadata/eyebrow text, and bump the letter spacing slightly if keeping it uppercase.
*   **Dimension(s) affected:** Typography Legibility.

**4. Awkward Text Wrapping on Inline Links**
*   **What it is:** Standalone text links that span the full width often wrap awkwardly, leaving the directional arrow orphaned on a new line.
*   **Where it occurs:** "See these six capabilities with your club's data →" (below the first 6 cards) and "See the agents working live with your numbers →".
*   **What the fix is:** Add `white-space: nowrap;` to the last word and the arrow (e.g., `data&nbsp;→`) to prevent the arrow from wrapping alone, or center-align these specific standalone links on mobile.
*   **Dimension(s) affected:** Layout & Overflow.

## Mobile Wins (what works well)
*   **Horizontal Scrolling Navigation Pill:** The "Capabilities | How it works | Agents | Integrations" bar is a native-feeling mobile pattern. Allowing the word "Integrations" to be cut off off-screen provides excellent visual affordance that the user should swipe left.
*   **Primary CTA Buttons:** The "Book a 30-Min Walkthrough →" buttons are textbook mobile UI. They span nearly the full width of the screen, use a high-contrast orange, and easily clear the 44x44px Apple HIG tap target rule. 
*   **Accordion/Card Stacking:** The "The Comparison" section (Waitlist tools, CRM, Excel) correctly stacks its cards vertically with ample padding, making for an easy, focused reading experience.

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (<1 hour):**
*   Add a media query to force the "FIX IT" / "PROVE IT" columns to stack vertically (`flex-direction: column`).
*   Increase the font-size of the `READS FROM: ...` tags in the capability cards. 
*   Bind the arrows to the final words of standalone text links using non-breaking spaces or `nowrap`.
*   Slightly increase the contrast of the dark gray text against the black background in the "Integrations" section (e.g., "TEE SHEET Jonas, ClubEssentials...").

**Structural Refactors (>1 day):**
*   **Mobile-First "UI" Graphics:** The dark "dashboard/feed" graphical elements must be completely re-thought for mobile. You cannot scale down a complex desktop data-visualization or feed. You need to create distinct, simplified mobile assets (or rebuild them natively in HTML/CSS) that prioritize showing 1-2 readable data points rather than 6 unreadable ones.
