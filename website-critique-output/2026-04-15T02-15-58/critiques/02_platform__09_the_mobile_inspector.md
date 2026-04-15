# The Mobile Inspector — Platform

**Page:** Platform
**URL:** http://localhost:4180/#/platform
**Lens:** The Mobile Inspector
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:18:08.238Z

---

## Mobile UX Verdict
The Swoop Platform page is a highly effective, mobile-first experience that avoids the typical B2B SaaS trap of cramming desktop layouts onto small screens. It collapses complex information beautifully into a single column, but it struggles with severe typography legibility issues in its dark "UI mockup" cards and metadata labels, which will require mobile users to squint or zoom. 

**Overall Score: 86 / 100**

## Dimension Scores
| Dimension | Score /100 | Key Finding |
|-----------|-----------|------------|
| Layout & Overflow | 90 | Excellent horizontal constraint; the pill navigation scrolls well, and complex grids stack neatly without breaking the 390px viewport. |
| Typography Legibility | 70 | Major failures in the dark "UI" cards and uppercase metadata labels, where font sizes drop well below readable mobile minimums. |
| Tap Targets & Interaction | 85 | Primary CTAs are massively clickable, but standalone text links (like "See how Swoop handles this →") have small hit areas. |
| Content Prioritization | 95 | Masterful storytelling on mobile. The pacing of the "Six jobs" cards keeps the user scrolling without losing context. |
| Mobile Conversion Flow | 95 | Flawless CTA placement. The user is never more than 1-2 scrolls away from a massive "Book a Walkthrough" button. |

## Critical Mobile Issues (fix immediately)

**1. Unreadable Micro-Typography in Dark "UI" Cards (Typography Legibility)**
*   **What it is:** The text simulating the product interface inside the dark cards is far too small (looks like 10-12px) and has poor contrast (dark gray/brown on black). 
*   **Where it occurs:** In the "Fix it - The Monday" section (e.g., "*assembled from 4 systems - gm@yourclub.com*") and the "LIVE - 6 AGENTS ONLINE" activity feed (e.g., timestamps like *09:16:12*, subtext like *Saturday 8am block - 3 cancellations predicted*). 
*   **The fix:** Increase base font sizes inside these dark containers to an absolute minimum of 14px for mobile. If the text doesn't fit, hide secondary metadata (like timestamps) on the mobile breakpoint to prioritize the core message. 

**2. Illegible Eyebrows and Metadata Labels (Typography Legibility)**
*   **What it is:** All-caps labels used for secondary information are scaled down too much, making them blurry and difficult to read on a mobile screen. 
*   **Where it occurs:** Labels like "READS FROM: CRM + POS + EMAIL", "AVG. EARLY WARNING", and section headers like "TYPICAL CLUB LIVE IN 2 WEEKS".
*   **The fix:** Ensure all uppercase labels are at least 12px (preferably 13px) with increased letter-spacing (`letter-spacing: 0.05em`) to improve readability. 

**3. Undersized Tap Targets on Standalone Text Links (Tap Targets)**
*   **What it is:** Text links that drive users to deeper content lack the minimum 44x44px clickable area required for thumb-tapping.
*   **Where it occurs:** "See these six capabilities with your club's data →" and the repeating "See how Swoop handles this →" links in the FAQ/comparison section. 
*   **The fix:** Wrap these links in a larger touch target. Add `padding: 12px 0;` to the `<a>` tags, or convert them into secondary buttons with a subtle background color. 

**4. Low Contrast on Orange Inline Links (Typography / Accessibility)**
*   **What it is:** The brand's orange color (#E58835 or similar) applied to thin text fails WCAG contrast ratios against the off-white background, making it hard to see outdoors or on dimmed screens. 
*   **Where it occurs:** "See how Swoop handles this →" and "Request our security overview →". 
*   **The fix:** Darken the text color for inline links, or use a heavier font weight (e.g., `font-weight: 600`) to increase visual mass and perceived contrast. 

## Mobile Wins (what works well)
*   **Hero Section Execution:** The H1 ("Stop guessing who's drifting. Start protecting your dues.") is perfectly scaled. It commands attention without taking up the entire screen, allowing the subcopy and CTA to sit comfortably above the fold.
*   **Data-Dense Cards Reflow:** The "Six jobs Swoop does" section avoids awful horizontal tables. Instead, it uses cleanly stacked cards with high-impact, scannable metrics (e.g., **6.4 wks**, **91%**, **$5.7K**) that look native to a smartphone.
*   **Relentless CTA Strategy:** The primary button ("Book a 30-Min Walkthrough →") is a massive, full-width block that appears exactly when the user reaches a high-intent moment (after the hero, after the capabilities, after the integrations).

## Quick Fixes vs. Structural Fixes

**Quick CSS Fixes (<1 hour)**
*   Increase `font-size` and `letter-spacing` on all `.eyebrow`, `.metadata`, and all-caps labels.
*   Add vertical padding (`padding-top`, `padding-bottom`) to all standalone text links with arrows to expand their tap targets.
*   Deepen the hex code for orange text links or bump them to `font-weight: 600`.
*   Ensure the pill navigation ("Capabilities, How it works, Agents") has `scroll-snap-type: x mandatory` and a subtle right-side fade to indicate it can be horizontally scrolled. 

**Structural Fixes (>1 day)**
*   **Refactor Dark Card Layouts:** The HTML/CSS for the "LIVE - 6 AGENTS ONLINE" and "APPROVED" dark boxes needs a mobile-specific refactor. You cannot simply scale down a desktop UI mockup layout. You must selectively use `display: none` on mobile for tertiary data (like exact timestamps or long file paths) so that the primary text ("Demand Optimizer", "rounds ↓42%") can be bumped up to ≥14px without breaking the container limits.
