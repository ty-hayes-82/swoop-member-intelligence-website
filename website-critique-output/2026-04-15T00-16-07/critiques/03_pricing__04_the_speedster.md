# The Speedster — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Speedster
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:22:21.259Z

---



# The Speedster's Performance Audit

## Swoop Club Intelligence — Pricing Page

---

## Performance Verdict

This is a **medium-weight marketing page** that leans toward the slower end due to its long vertical scroll depth (~7 full viewport sections), multiple dark-section background renders, an interactive calculator widget with chart rendering, and what appears to be system/web fonts mixed with a custom display typeface. **The single biggest performance bottleneck is almost certainly the interactive ROI calculator section** — it contains a live chart (likely a JavaScript charting library like Chart.js or Recharts), multiple slider inputs, and real-time calculated outputs, all of which imply a significant JS payload that likely loads eagerly whether or not the user scrolls to it.

**Overall Score: 62 / 100**

---

## Core Web Vitals Assessment

| Metric | Estimated Score | Threshold | Status |
|--------|----------------|-----------|--------|
| LCP | ~2.8–3.5s | < 2.5s | ⚠️ Likely Fail |
| INP | ~150–250ms | < 200ms | ⚠️ Borderline |
| CLS | ~0.08–0.15 | < 0.1 | ⚠️ Borderline/Fail |

**LCP Element Identification:** The LCP element is almost certainly the hero headline text — **"Recover your software costs in 60 days. Start for zero."** — rendered in a large custom display typeface (appears to be a serif/display font, possibly "Playfair Display" or similar) against the dark (#1a1a1a or similar) hero background. This is a text-based LCP, which means font loading is the critical path. If the font file isn't preloaded and uses `font-display: swap`, users will see a FOIT (flash of invisible text) or FOUT (flash of unstyled text), both of which delay LCP.

**INP Concerns:** The ROI calculator section contains interactive sliders ("DUES PROTECTED," "TOTAL MEMBERS," "AVG. ANNUAL DUES," "ANNUAL TURNOVER RATE") that perform real-time calculations and update a chart + dollar figures ($120,000, $80,000, $74,812 visible). Each slider drag fires continuous input events. If the chart re-renders on every input (not debounced), this will generate long tasks exceeding 200ms on mid-tier mobile devices.

**CLS Concerns:** I can see three orange stat cards ("65%", "$74K", "5 of 7") that appear to animate or fade in on scroll. If these use CSS transforms without reserved space, they'll cause layout shift. The pricing tier cards ($0/mo, $499/mo, $1,499/mo) are content-heavy with variable-height feature lists — any dynamic rendering of checkmark/X icons or late-loading list items would shift layout. The FAQ accordion section ("Things GMs ask us.") will cause CLS if expanding answers pushes content below without `content-visibility` management.

---

## Dimension Scores

| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 55 | LCP delayed by custom display font on hero; calculator INP risk |
| Asset Optimization | 58 | Likely unoptimized chart library loaded eagerly; no visible srcset usage |
| Perceived Performance | 72 | Content-first text rendering is good; but long page with no skeleton/progressive loading |
| Infrastructure & Delivery | 68 | Vercel hosting provides decent CDN/edge, but no visible optimization signals |
| Third-Party Impact | 70 | Minimal visible third-party widgets, but analytics/tracking likely present |

---

## The Performance Audit — Top 10 Issues (Ranked by Impact)

### 1. 🔴 Interactive ROI Calculator Loads a Full Charting Library Eagerly
**What's wrong:** The "ROI CALCULATOR" section (heading: "Find out exactly how much dues revenue is walking out your door.") contains a line/area chart with an orange fill gradient, 4 interactive sliders, and real-time dollar calculations ($120,000 gross, $80,000 net with Swoop, $74,812 displayed). This almost certainly requires a charting library (Chart.js ~70KB gzipped, Recharts ~45KB gzipped, or D3 ~80KB gzipped) plus the calculator logic. If this loads in the initial JS bundle, it blocks the main thread during parse/compile.

**Estimated Impact:** 300–800ms added to TTI (Time to Interactive). On a 3G connection, this could add 1.5–2s to page usability.

**Fix:** Code-split the calculator into a dynamic import. Use `Intersection Observer` to lazy-load the entire calculator chunk when the section enters the viewport (it's ~2 full scrolls below the fold). Placeholder: render a static screenshot of the calculator or a skeleton with the slider outlines, then hydrate. Consider using a lightweight canvas-based chart (uPlot ~8KB) instead of a full charting library.

### 2. 🔴 Custom Display Font Blocking LCP on Hero Text
**What's wrong:** The hero headline "Recover your software costs in 60 days. Start for zero." uses a decorative serif/display typeface that is distinctly different from the body sans-serif font. This font file must download before the text renders (assuming no `font-display: swap` or optional strategy). The hero section has a dark background (#1C1C1C approximately) — invisible text on a dark background means the user sees nothing but darkness for 1–3 seconds on slower connections.

**Estimated Impact:** 500ms–1.5s added to LCP depending on font file size and connection speed. Display fonts with full character sets can be 80–150KB.

**Fix:**
- Add `<link rel="preload" href="/fonts/display-font.woff2" as="font" type="font/woff2" crossorigin>` in the `<head>`.
- Use `font-display: optional` (best for LCP — if the font isn't cached, skip it entirely on first load) or `font-display: swap` (shows system font immediately, swaps when ready — causes CLS but faster LCP).
- Subset the font to only the characters used on this page (~40 unique characters in the hero). This can reduce a 120KB font to ~15KB. Use `glyphhanger` or `subfont`.

### 3. 🟡 Three Pricing Tier Cards with Complex Feature Lists — DOM Complexity
**What's wrong:** The pricing section displays three tiers: **"Signals" ($0/mo)**, **"Signals + Actions" ($499/mo)**, and **"Signals + Actions + Member App" ($1,499/mo)**. Each card contains 8–15 line items with checkmarks (✓) and X marks, descriptive text, orange CTA buttons ("Get Free Daily Alerts", "Book a 30-Min Walkthrough"), and subtext. The "$499/mo" card appears to be visually emphasized (likely the recommended tier). This is a substantial DOM subtree — I count approximately 60–80 DOM elements just for the three cards.

**Estimated Impact:** On mobile, rendering this many elements with potential CSS grid/flexbox calculations adds 50–100ms to layout/paint. Combined with scroll-triggered animations, this can push INP above 200ms during scrolling interactions.

**Fix:** Ensure the pricing cards use simple CSS (no complex grid nesting beyond 2 levels). Avoid `box-shadow` transitions on scroll — use `will-change: transform` if animating. Consider rendering only the active/visible card on mobile with a tab switcher to reduce initial DOM.

### 4. 🟡 Hero Section "Calculate your ROI" Button — Potential Scroll-Triggered JS
**What's wrong:** The orange CTA button "Calculate your ROI" in the hero section likely smooth-scrolls to the ROI calculator section below. If this triggers the lazy-load of the calculator JS chunk, there's a jarring delay between click and calculator readiness. The user clicks, scrolls to the section, and then waits for the chart to render.

**Estimated Impact:** 200–500ms perceived delay between scroll completion and calculator interactivity.

**Fix:** When the CTA is clicked, immediately start prefetching the calculator chunk (`import('./Calculator')`) while simultaneously scrolling. By the time the scroll animation completes (~400ms), the chunk should be loaded. Use `requestIdleCallback` or `link rel="prefetch"` on hover of the CTA button.

### 5. 🟡 Stat Cards Animation Without Dimension Reservation
**What's wrong:** The three orange-bordered stat cards ("65% — Avg. do not transfer membership rate", "$74K — Avg. mean revenue per club in first 90 days", "5 of 7 — Founding partner clubs recovered annual cost within 60 days") appear to be scroll-triggered reveal elements. If they animate in with `opacity: 0` + `transform: translateY(20px)` and don't have fixed `height`/`min-height`, the surrounding layout shifts when they appear.

**Estimated Impact:** CLS contribution of ~0.03–0.08 per card appearance, cumulative ~0.05–0.15 if all three animate simultaneously or sequentially.

**Fix:** Set explicit `min-height` on the stat card container matching the rendered height. Use `transform` and `opacity` only (composited properties) for the animation — never animate `height`, `margin`, or `padding`. Alternatively, use `content-visibility: auto` with `contain-intrinsic-size` on the stats section.

### 6. 🟡 Long Page with No Lazy Boundary Strategy
**What's wrong:** This page is approximately 7–8 viewport heights long. I can identify these sections from top to bottom: (1) Nav + Hero, (2) Stat cards, (3) ROI Calculator, (4) "Ready to recover your at-risk dues?" CTA, (5) "Start at zero. Upgrade when the math shows up." Pricing tiers with comparison details, (6) "Zero Implementation Fees" banner, (7) FAQ accordion "Things GMs ask us.", (8) Final CTA "Ready to see which of your members are at risk?", (9) Footer. All sections appear to be rendered in the initial HTML with no progressive loading or virtualization.

**Estimated Impact:** Total DOM size is likely 800–1200 nodes. Full render of the entire page adds 200–400ms to First Contentful Paint on mobile.

**Fix:** Implement section-level lazy rendering. Sections 5–9 (below ~3 viewport heights) should use `content-visibility: auto` with `contain-intrinsic-size: 0 500px` (estimated section height). This tells the browser to skip rendering off-screen content until needed. Zero JavaScript required — pure CSS.

### 7. 🟡 Potential Unoptimized Background Gradients/Images in Dark Sections
**What's wrong:** The hero section and the "Start at zero" section both feature dark backgrounds with what appears to be a subtle gradient or texture overlay. The hero has a slightly warm/brown-tinted dark (#1C1C1C to #2A2016 range). If these are implemented as background images rather than CSS gradients, they add unnecessary network requests.

**Estimated Impact:** A background texture image could be 20–100KB. Even as WebP, a full-width dark gradient texture is unnecessary weight.

**Fix:** Replace any background images with CSS `linear-gradient` or `radial-gradient`. For example: `background: linear-gradient(135deg, #1C1C1C 0%, #2A2016 100%)`. If a noise texture is used for visual depth, generate it with a tiny (4x4px) repeating PNG (<1KB) or use CSS `filter` tricks.

### 8. 🟡 FAQ Accordion CLS Risk
**What's wrong:** The "Things GMs ask us." FAQ section shows 4 visible questions: "Do I need to replace my current software?", "Is my members' data secure?", "What does the founding partner program look like?", and "What happens if we cancel?" The first two appear expanded with visible answers. Toggling these accordions will push content below them (the final CTA section and footer) up or down, causing layout shift.

**Estimated Impact:** CLS of ~0.02–0.05 per toggle if content below shifts. Cumulative CLS could worsen if users interact with multiple FAQ items.

**Fix:** Use CSS `grid` with `grid-template-rows: 0fr` → `1fr` transitions for smooth expansion without layout shift. Alternatively, pre-calculate max-height for each answer and use `max-height` transitions. Ensure the FAQ section has a `contain: layout` to isolate shifts from affecting elements outside the section.

### 9. 🟢 Vercel Hosting — Good Baseline, But Verify Edge Configuration
**What's wrong:** The URL `swoop-member-intelligence-website.vercel.app` indicates Vercel hosting, which provides automatic CDN (Vercel Edge Network), Brotli compression, HTTP/2, and reasonable caching defaults. However, Vercel's default caching for dynamic routes may set `Cache-Control: no-cache` on the HTML document, and static assets may not have immutable/long-lived cache headers if not configured.

**Estimated Impact:** Without `Cache-Control: public, max-age=31536000, immutable` on font/image/JS/CSS assets, repeat visitors re-validate every resource, adding 50–200ms per asset on subsequent loads.

**Fix:** In `vercel.json` or `next.config.js` (if Next.js), set explicit cache headers:
```json
{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```

### 10. 🟢 Sticky Navigation Bar — Ensure Composited Layer
**What's wrong:** The top navigation bar ("SWOOP" logo, "Home, Platform, Pricing, About, Contact" links, "Book a Walkthrough" orange CTA) appears to be sticky/fixed on scroll. If this is implemented with `position: sticky` or `position: fixed` without `will-change: transform` or layer promotion, every scroll event triggers a repaint of the nav bar, blocking the compositor.

**Estimated Impact:** 5–15ms per frame during scroll on mobile. At 60fps, this can cause visible jank and push INP measurements higher.

**Fix:** Add `will-change: transform` or `transform: translateZ(0)` to the nav element to promote it to its own compositing layer. Verify in Chrome DevTools → Layers panel that the nav is on a separate layer.

---

## Performance Budget Recommendations

| Budget Category | Recommended | Estimated Current | Action |
|----------------|-------------|-------------------|--------|
| **Total Page Weight** | < 500KB (compressed) | ~800KB–1.2MB | Reduce JS bundle, optimize fonts |
| **JavaScript Bundle** | < 150KB (compressed) | ~250–400KB (with chart lib) | Code-split calculator, tree-shake |
| **CSS** | < 50KB (compressed) | ~60–80KB | Purge unused CSS (Tailwind purge if applicable) |
| **Font Files** | < 40KB total | ~80–150KB (display + body) | Subset display font, limit to 2 weights |
| **Image Weight** | < 100KB | ~50–150KB | Verify WebP/AVIF, proper sizing |
| **HTTP Requests** | < 25 | ~30–45 | Combine, defer, eliminate |
| **LCP Target** | < 2.0s | ~2.8–3.5s | Preload font, inline critical CSS |
| **Total DOM Nodes** | < 800 | ~1000–1200 | Use `content-visibility`, simplify pricing cards |

---

## Measurement Action Plan

Run these tests to validate my estimates:

1. **PageSpeed Insights** (https://pagespeed.web.dev/) — Enter the URL, check mobile score. I predict a score of **55–70** on mobile.
2. **WebPageTest** (https://webpagetest.org/) — Run from "Dulles, VA" on "Moto G4, 4G" to simulate a GM checking pricing on their phone. Film strip view will reveal the hero font loading delay.
3. **Chrome DevTools → Performance Panel** — Record a session interacting with the ROI calculator sliders. Look for long tasks >50ms during slider input events.
4. **Chrome DevTools → Coverage Tab** — Check JS and CSS unused percentage. I predict >40% of CSS and >30% of JS is unused on this specific page.
5. **Chrome DevTools → Network Tab** — Filter by "Font" to see how many font files load and their sizes. Filter by "JS" to identify the charting library chunk.

---

## Final Note on Business Context

The ROI calculator is likely this page's **highest-converting element** — it lets a GM input their club's numbers and see exactly how Swoop pays for itself. The $80,000 net recovery figure visible in the calculator is the emotional hook that drives the "Book a 30-Min Walkthrough" click. **Do not remove or significantly degrade the calculator to save performance.** Instead, **lazy-load it intelligently** so it's ready by the time the user scrolls to it or clicks "Calculate your ROI." The performance win and the conversion win are aligned here — a calculator that loads faster gets used more.
