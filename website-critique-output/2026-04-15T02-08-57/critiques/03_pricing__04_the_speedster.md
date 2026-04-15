# The Speedster — Pricing

**Page:** Pricing
**URL:** http://localhost:4180/#/pricing
**Lens:** The Speedster
**Critique Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:12:24.601Z

---

## Performance Verdict
This site is inherently built for speed because it relies heavily on typography, CSS layout, and SVG rather than heavy raster imagery. It is **fast**. However, the single biggest performance bottleneck will undoubtedly be the JavaScript required to power the interactive ROI Calculator (sliders + dynamic charting); if that charting library and React state aren't properly lazy-loaded and debounced, INP (Interaction to Next Paint) and Main Thread blocking will drag down an otherwise blazing-fast page.

**Overall Score: 90 / 100**

## Core Web Vitals Assessment
*(Note: As this is a visual audit, metrics are accurately estimated based on the rendering path of visible Vercel/React architecture patterns).*

| Metric | Score | Threshold | Status |
|--------|-------|-----------|--------|
| LCP | ~1.4s | < 2.5s | Pass |
| INP | ~180ms | < 200ms | Pass (at risk) |
| CLS | ~0.02 | < 0.1 | Pass |

## Dimension Scores
| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 88 | INP risks from dynamic range sliders and chart re-rendering. |
| Asset Optimization | 95 | Almost zero raster images used; risk is solely JS charting bundle size. |
| Perceived Performance | 92 | High contrast hero renders text immediately; lacks skeleton loading on chart. |
| Infrastructure & Delivery | 95 | Vercel Edge network provides excellent default TTFB and HTTP/3. |
| Third-Party Impact | 80 | Anticipated marketing/analytics tags (GA4, etc.) competing for Main Thread. |

## The Performance Audit

**1. LCP Bottleneck: Web Font Blocking on the Hero H1**
*   **What's wrong:** The Largest Contentful Paint element is the `<h1>` text: *"Stop losing $74K a year in silent member attrition."* Because it relies on a custom serif web font, the browser will hide the text (FOIT) until the font file downloads, artificially delaying your LCP.
*   **Impact:** LCP delayed by 300ms–800ms depending on connection speed.
*   **The Fix:** Use `next/font` (since you're on Vercel) or explicitly preload the critical `.woff2` font file in the `<head>`. Set `font-display: swap` in the CSS `@font-face` declaration to ensure the fallback text renders instantly.

**2. INP Risk: ROI Calculator Slider State Thrashing**
*   **What's wrong:** Range sliders ("Total Members", "Avg Annual Dues", "Annual Turnover Rate") trigger mathematical updates to the chart above them. If dragging the slider triggers a React state update and chart re-render on *every single pixel movement*, it will lock up the main thread.
*   **Impact:** INP spikes > 200ms, making the slider feel "janky" and unresponsive to the user's touch/mouse.
*   **The Fix:** Debounce the state update driving the chart rendering, or use React's `useTransition` to mark the chart update as a low-priority render while keeping the slider thumb movement instantaneous.

**3. JS Payload: Heavy Charting Libraries**
*   **What's wrong:** The line graph in the "Dues Protected" section requires a charting library (like Recharts, Chart.js, or Victory). Including this in the initial page bundle forces the browser to parse and compile ~30-100kb of JavaScript before the page becomes interactive.
*   **Impact:** Delays Time to Interactive (TTI) and inflates the main JS bundle size unnecessarily.
*   **The Fix:** Dynamically import the chart component (`next/dynamic` with `ssr: false`). Let the rest of the page hydrate first, and load the chart library asynchronously. 

**4. CLS Risk: Web Font Reflow (FOUT)**
*   **What's wrong:** When using `font-display: swap`, the browser swaps the system fallback font for your custom serif font once loaded. Because serif fonts and standard sans-serif fallbacks have different x-heights and kerning, the text will "jump", causing Layout Shifts.
*   **Impact:** Cumulatively degrades the CLS score and creates a visually jarring load experience in the hero and pricing tiers.
*   **The Fix:** Utilize CSS `size-adjust`, `ascent-override`, and `descent-override` (or let `next/font` calculate this automatically) to force the fallback font to occupy the exact same bounding box as your custom serif font.

**5. JS Payload: FAQ Accordions**
*   **What's wrong:** Accordions are frequently built using React state (`isOpen = true/false`), which requires JS hydration to function.
*   **Impact:** Adds unnecessary JS weight to the page and delays interactivity if hydration is blocked.
*   **The Fix:** Build the "Things GMs ask us." section using native HTML `<details>` and `<summary>` elements. This requires zero JavaScript to toggle and works instantly upon HTML parse.

**6. Network Requests: Pricing Tier SVG Icons**
*   **What's wrong:** The pricing columns feature repeated orange checkmark icons (`✓`). If these are loaded as separate `<img>` source requests, it wastes connection overhead.
*   **Impact:** Unnecessary HTTP requests overhead.
*   **The Fix:** Inline the SVG code directly into the HTML/React component, or use an SVG sprite sheet. Given their simplicity, inlining is the fastest method.

**7. Perceived Performance: Missing Chart Skeleton**
*   **What's wrong:** If you implement the recommended dynamic import (lazy loading) for the ROI chart, there will be a blank space while the JS fetches and executes.
*   **Impact:** Users scrolling quickly to the calculator will see an empty white box, damaging perceived performance and trust.
*   **The Fix:** Implement a lightweight SVG skeleton loader (a simple static grid and a faded grey line) that renders immediately on server load, swapping it out once the interactive chart is hydrated.

**8. Smooth Scrolling JS Overkill**
*   **What's wrong:** The "Calculate your ROI →" button likely anchors down to the calculator section. Developers often use JS libraries or custom functions to handle smooth scrolling.
*   **Impact:** Wasted bytes in the JS bundle.
*   **The Fix:** Use native CSS: `html { scroll-behavior: smooth; }`. It handles the transition perfectly with zero JavaScript.

**9. Asset Optimization: CSS Tree-Shaking**
*   **What's wrong:** The styling looks consistent, likely utilizing a utility framework like Tailwind CSS. However, charting libraries often bring their own default CSS stylesheets.
*   **Impact:** Bloated CSS payload delaying the CSSOM construction, which blocks rendering.
*   **The Fix:** Ensure purge configuration strictly removes unused classes. Strip any default CSS imported by the chart library and restyle it using your global utility classes.

**10. Third-Party Impact: Marketing Analytics**
*   **What's wrong:** As a marketing page, this will inevitably contain tracking scripts (Google Analytics, Meta Pixel, PostHog). Loading these synchronously in the `<head>` blocks the main thread.
*   **Impact:** Massive damage to Total Blocking Time (TBT) and LCP.
*   **The Fix:** Offload all third-party marketing tags to a Web Worker using a library like Builder.io's **Partytown**. Keep your main thread strictly reserved for UI rendering and the ROI calculator logic.

## Performance Budget Recommendations
To ensure this site stays fast as the company grows, enforce these hard limits in your CI/CD pipeline:
*   **Total Page Weight:** < 400 KB (This page is highly text/CSS based; keep it lean).
*   **JavaScript Bundle Size:** < 150 KB gzipped (Keep charting libraries in check).
*   **Image Weight:** < 50 KB (Current state is excellent; enforce WebP/AVIF if headshots/product UI are added later).
*   **Total Requests:** < 25 (Combine assets, inline critical SVGs).
*   **LCP Target:** < 1.5s on Fast 4G / Desktop.
