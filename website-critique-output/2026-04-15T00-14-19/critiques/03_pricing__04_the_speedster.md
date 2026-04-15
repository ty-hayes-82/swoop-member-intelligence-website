# The Speedster — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Speedster
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:16:51.432Z

---



# The Speedster's Performance Audit

## Swoop Club Intelligence — Pricing Page

---

## Performance Verdict

This is a **medium-weight marketing page** that appears structurally lean but carries several avoidable performance penalties — most notably unoptimized hero imagery against a dark background, a JavaScript-heavy interactive ROI calculator with chart rendering, and what appears to be render-blocking font loading for the distinctive serif display typeface used in headlines like "Recover your software costs in 60 days." The single biggest bottleneck is almost certainly the **LCP element** — the hero section's large headline text combined with a dark background image or gradient and potentially slow custom font rendering, which together could push LCP past the 2.5s threshold on mid-tier mobile devices.

**Overall Score: 62 / 100**

---

## Core Web Vitals Assessment

| Metric | Estimated Score | Threshold | Status |
|--------|----------------|-----------|--------|
| LCP | ~2.8–3.4s | < 2.5s | ⚠️ Likely Fail |
| INP | ~150–220ms | < 200ms | ⚠️ Borderline |
| CLS | ~0.08–0.15 | < 0.1 | ⚠️ Likely Fail |

### LCP Analysis
The LCP element is almost certainly the hero headline **"Recover your software costs in 60 days. Start for zero."** rendered in a large serif/display typeface against a dark (#1a1a1a or similar) background. The LCP chain involves:
1. **Server response** → HTML delivery from Vercel (likely fast, ~100–200ms TTFB)
2. **Render-blocking CSS** → Stylesheet(s) containing the dark hero styling
3. **Font load** → The distinctive serif display font (appears to be a custom or premium typeface — possibly a variable of Playfair Display, Lora, or a commercial serif) must download before the text renders visibly
4. **Font-display behavior** — if set to `swap`, there's FOUT contributing to CLS; if `block`, invisible text delays LCP

The orange "Calculate your ROI" CTA button and the three stat cards ("65%", "$74K", "5 of 7") below the fold are secondary paint events but could contribute to layout shifts.

### INP Analysis
The interactive **ROI Calculator** section ("Find out exactly how much dues revenue is walking out your door") contains:
- A slider control ("DUES PROTECTED") with real-time chart updates (the orange line chart)
- Input fields for "TOTAL MEMBERS", "AVG. ANNUAL DUES", and "ANNUAL TURNOVER RATE" with editable values ($5,000, etc.)
- Dynamic computation updating "$120,000", "$80,000", and "$74,812" values in real-time

Each slider/input interaction likely triggers JavaScript computation + DOM update + potentially canvas/SVG chart re-render. If this calculator uses a charting library (Chart.js, Recharts, D3), each interaction could involve 50–150ms of main thread work. On mobile, this could push INP above 200ms.

The **FAQ accordion** section ("Things GMs ask us.") at the bottom also involves expand/collapse interactions that could trigger layout recalculations.

### CLS Analysis
Multiple CLS risk vectors visible:
1. **Font swap** on the serif display typeface in the hero — the fallback serif system font likely has different metrics than the custom font, causing reflow on headlines
2. **Three stat cards** ("65%", "$74K", "5 of 7") with orange top borders — if these animate in or load asynchronously, they shift content
3. **ROI Calculator chart** — the orange line chart rendered dynamically could cause shift if the container isn't pre-sized
4. **Pricing cards** — three pricing tiers ($0/mo, $499/mo, $1,499/mo) may shift as content loads if not given fixed dimensions
5. **Dynamic pricing toggle** area ("Learn In 14 Days · Zero If Impacted · Cancel any Time") — if this renders after initial paint

---

## Dimension Scores

| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 55 | LCP delayed by custom font + hero rendering chain |
| Asset Optimization | 60 | Charting library for calculator likely oversized; font files not subsetted |
| Perceived Performance | 72 | Above-fold content is text-heavy (good), but calculator below fold loads eagerly |
| Infrastructure & Delivery | 78 | Vercel hosting is solid; likely missing fine-tuned cache headers for static assets |
| Third-Party Impact | 65 | Analytics + potential chat widget on Vercel; "Book a Walkthrough" likely embeds Calendly or similar |

---

## The Performance Audit — Top 10 Issues (Ranked by Impact)

### 1. 🔴 Custom Serif Display Font Blocking LCP (~800ms–1.2s impact)

**What's wrong:** The hero headline "Recover your software costs in 60 days. Start for zero." uses a distinctive serif typeface that differs from system fonts. This font must download before LCP can register. On the pricing section, it's reused for "Start at zero. Upgrade when the math shows up." and "Things GMs ask us." — meaning multiple weights/styles may be loaded.

**Measured/estimated impact:** Font files typically range 20–80KB each. If 2–3 weights are loaded (regular + bold + italic for the serif, plus a sans-serif for body), that's 80–240KB of font data. Without preloading, browsers discover fonts only after CSS is parsed — adding 200–600ms to the critical path.

**Fix:**
- Add `<link rel="preload" href="/fonts/[serif-font].woff2" as="font" type="font/woff2" crossorigin>` in the `<head>` for the hero font weight only
- Use `font-display: optional` for the display font — this eliminates FOUT/FOIT entirely; if the font doesn't load in ~100ms, the system font is used permanently for that page load (best for LCP)
- Subset the font to Latin characters only (saves 30–60% of file size)
- Limit to 2 font files maximum across the entire page

### 2. 🔴 JavaScript Charting Library for ROI Calculator (~200–400ms INP impact, ~50–150KB bundle)

**What's wrong:** The interactive ROI calculator renders an orange line chart with axes, grid lines, and a dynamic area fill. This almost certainly requires a charting library (Chart.js ~65KB min+gzip, Recharts ~45KB, or D3 ~80KB). This library is likely bundled in the main JS payload and parsed on page load, even though the calculator is below the fold and many users may never interact with it.

**Measured/estimated impact:** 50–150KB of JavaScript that must be downloaded, parsed, and compiled. On a mid-tier mobile device, parsing alone could take 100–300ms. Each slider interaction triggers chart re-render: canvas/SVG manipulation + layout + paint = 80–200ms per interaction.

**Fix:**
- **Code-split the calculator** into a separate chunk that loads only when the section enters the viewport (Intersection Observer + dynamic `import()`)
- Replace the charting library with a lightweight SVG-based approach — the chart shown is a simple area chart with one data series; this can be rendered with ~20 lines of inline SVG + a `<path>` element, eliminating the library entirely
- Use `requestAnimationFrame` to throttle slider-driven updates to 60fps max
- Consider `will-change: transform` on the chart container to promote it to its own compositing layer

### 3. 🟡 Pricing Cards Layout Shift (estimated CLS contribution: 0.03–0.06)

**What's wrong:** The three pricing tiers — "Signals" at $0/mo, "Signals + Actions" at $499/mo, and "Signals + Actions + Member App" at $1,499/mo — are complex cards with variable-length feature lists (checkmarks, bullet points, orange text). If these cards render progressively or if the feature list content loads dynamically, the cards shift as they populate. The "$499/mo" card appears to be the longest, and the cards don't appear to have equal fixed heights.

The "Learn In 14 Days · Zero If Impacted · Cancel any Time" banner above the pricing cards is also a CLS risk if it renders after the cards.

**Estimated impact:** Each card shifting could contribute 0.01–0.02 CLS. Three cards shifting independently could accumulate to 0.03–0.06.

**Fix:**
- Set explicit `min-height` on pricing card containers based on the tallest card
- Use CSS Grid with `grid-template-rows: subgrid` or `align-items: stretch` to equalize card heights
- Ensure the "Learn In 14 Days" banner has a fixed height placeholder in the initial HTML
- If feature lists are fetched from a CMS/API, render them server-side (Vercel + Next.js SSR/SSG should handle this natively)

### 4. 🟡 Hero Section Dark Background — Image vs. CSS (estimated ~100–300ms LCP impact)

**What's wrong:** The hero section has a dark background (appears to be #111 or #1a1a1a) with possible subtle texture or gradient. If this is achieved via a background-image rather than a CSS solid color or gradient, it adds an unnecessary image request to the critical rendering path.

**Estimated impact:** If there's a background image (even a small texture), it adds a network request + decode time. Even a 15KB image adds 50–150ms on 3G connections.

**Fix:**
- Verify the hero background is pure CSS (`background-color: #111` or `background: linear-gradient(...)`) — no image
- If a subtle texture/grain effect is desired, use CSS (`background-image: url("data:image/svg+xml,...")` with an inline SVG noise pattern) or a CSS filter
- Ensure the hero section's CSS is in the critical CSS path (inlined in `<head>`)

### 5. 🟡 "Book a Walkthrough" / "Book a 30-Min Walkthrough" Embed (~150–500ms impact)

**What's wrong:** The page has at least 3 CTA buttons linking to walkthrough booking: "Book a Walkthrough" in the nav header, "Book a Walkthrough With Your Numbers" in the calculator section, and "Book a 30-Min Walkthrough →" in the orange pricing section and bottom CTA. If any of these trigger a Calendly, HubSpot, or Chili Piper embed, the third-party script may be loading eagerly.

**Estimated impact:** Calendly's embed script is ~150KB+ and loads additional CSS + iframe content. If loaded on page init rather than on click, it adds 150–500ms of main thread blocking.

**Fix:**
- Load booking widget scripts **only on button click** (facade pattern): the button initially links to an external booking URL; JavaScript intercepts the click to load the embed inline
- If using Calendly: use `data-url` with lazy initialization, not the auto-embed `<script>` tag
- Alternative: just link to `calendly.com/swoop/...` as a new tab — zero performance cost, negligible UX cost

### 6. 🟡 Unoptimized Stat Card Animations (estimated CLS contribution: 0.02–0.04)

**What's wrong:** The three stat cards below the hero ("65% — Avg. do-not-renew member retention rate", "$74K — Avg. new revenue per club in first 90 days", "5 of 7 — Founding partner clubs recovered annual cost within 60 days") have orange top borders and appear to be designed for scroll-triggered entrance animations. If they animate via `transform` or `opacity` changes triggered by JavaScript, the animation itself is fine — but if they use `margin`, `height`, or `top` properties, they cause layout shifts.

**Estimated impact:** If these cards fade/slide in on scroll and shift surrounding content, each contributes ~0.01–0.015 CLS.

**Fix:**
- Animate only `transform` and `opacity` (compositor-only properties)
- Use `content-visibility: auto` with `contain-intrinsic-size` on sections below the fold
- Better yet: remove entrance animations entirely — they add zero conversion value for a B2B SaaS pricing page targeting busy GMs

### 7. 🟡 Multiple CTA Buttons May Load Separate Interaction Scripts

**What's wrong:** I count at least 8 distinct CTA/interactive elements on this page:
1. "Book a Walkthrough" (header nav, orange button)
2. "Calculate your ROI" (hero, orange button)
3. "Book a Walkthrough With Your Numbers" (calculator section, orange button)
4. "Present ROI Report to my Board" (calculator section, outline button)
5. "Get Free Daily Alerts" ($0/mo card, outline button)
6. "Book a 30-Min Walkthrough →" (pricing section, orange button)
7. "Book a 30-Min Walkthrough →" (bottom CTA, orange button)
8. "See the Full Platform" (link under $1,499 card)
9. FAQ accordion toggles (4 items)

If each button type loads a different handler or third-party integration, the cumulative script cost is significant.

**Estimated impact:** Each unnecessary script listener/integration: 20–80KB + initialization time.

**Fix:**
- Consolidate all "Book a Walkthrough" buttons to use a single shared handler
- Use event delegation on a parent container rather than individual button listeners
- Ensure "Calculate your ROI" scrolls to the calculator section via pure CSS (`scroll-behavior: smooth` + anchor link) rather than JavaScript

### 8. 🟢 Vercel Hosting — Good Baseline, But Verify Edge Config

**What's wrong:** Vercel hosting provides excellent defaults (automatic Brotli compression, HTTP/2, edge CDN, good TTFB). However, the subdomain `swoop-member-intelligence-website.vercel.app` suggests this is deployed on Vercel's default domain rather than a custom domain — meaning:
- No custom `Cache-Control` headers may be set for static assets
- Vercel's default caching may not be optimized for immutable assets (fonts, images)
- The `.vercel.app` domain adds a TLS negotiation that could be preconnected

**Estimated impact:** Suboptimal caching could force repeat visitors to re-download assets. Missing immutable headers on fonts/images wastes 200–500ms on repeat visits.

**Fix:**
- In `vercel.json`, add headers:
```json
{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/images/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    }
  ]
}
```
- Deploy to a custom domain (`swoop.club` or similar) with proper DNS preconnect

### 9. 🟢 ROI Calculator Images/Chart Not Lazy Loaded

**What's wrong:** The ROI calculator section is approximately 1.5–2 viewport heights below the fold. The chart (orange area chart), the input form, and the results panel ("$120,000", "$80,000", "$74,812") all render below the fold. If the chart's canvas or SVG is initialized on page load, it consumes main thread time before the user even scrolls to it.

**Estimated impact:** Chart initialization: 50–150ms main thread. Calculator JS parsing: 30–80ms. Total: ~80–230ms of unnecessary work blocking first paint.

**Fix:**
- Wrap the calculator in a component that initializes only when `IntersectionObserver` detects the section entering the viewport
- In Next.js (likely framework given Vercel): use `next/dynamic` with `{ ssr: false, loading: () => <CalculatorSkeleton /> }`
- Show a lightweight skeleton (gray placeholder for the chart area, static input fields) until the calculator hydrates

### 10. 🟢 FAQ Accordion — Potential DOM Complexity / Reflow

**What's wrong:** The "Things GMs ask us." FAQ section contains at least 4 expandable items:
1. "Do I need to replace my current software?"
2. "Is my members' data secure?"
3. "What does the founding partner program actually look like?"
4. "What happens if we cancel?"

If these accordions use JavaScript-driven height animations (animating `max-height` from 0 to auto), each expansion triggers a layout recalculation on the entire page below the accordion.

**Estimated impact:** Each accordion open: 10–30ms layout recalc. Minimal INP impact individually, but contributes to overall jank perception.

**Fix:**
- Use the native `<details>` / `<summary>` HTML elements — zero JavaScript required
- If custom styling is needed, animate with `grid-template-rows: 0fr → 1fr` (modern CSS accordion technique) which is smoother than `max-height` hacks
- Add `content-visibility: auto` to the FAQ section since it's near the page bottom

---

## Performance Budget Recommendations

| Budget Category | Recommended Budget | Estimated Current | Status |
|----------------|-------------------|-------------------|--------|
| **Total Page Weight** | < 800KB (transferred) | ~1.2–1.8MB | ⚠️ Over |
| **JavaScript (total)** | < 200KB (compressed) | ~300–500KB (if charting lib included) | ⚠️ Over |
| **CSS (total)** | < 50KB (compressed) | ~30–60KB | ✅ Likely OK |
| **Fonts** | < 80KB (2 files max) | ~100–200KB (estimated 3–4 files) | ⚠️ Over |
| **Images** | < 200KB (total) | ~100–300KB | ⚠️ Borderline |
| **HTTP Requests** | < 30 | ~35–50 (estimated) | ⚠️ Over |
| **LCP Target** | < 2.0s | ~2.8–3.4s | 🔴 Over |
| **INP Target** | < 150ms | ~150–220ms | ⚠️ Borderline |
| **CLS Target** | < 0.05 | ~0.08–0.15 | ⚠️ Over |

---

## Recommended Measurement Plan

Run these tests to validate the estimates above:

1. **PageSpeed Insights** (https://pagespeed.web.dev/) — test the exact URL on mobile; focus on the LCP element identification and CLS diagnostic
2. **WebPageTest** (https://webpagetest.org/) — run from Dulles, VA on Moto G4 / 4G Slow connection; examine the filmstrip for first meaningful paint timing and font flash
3. **Chrome DevTools Performance Panel** — record a trace while interacting with the ROI calculator slider; measure main thread blocking per slider tick
4. **Chrome DevTools → Network → Coverage** — identify unused JS/CSS bytes; particularly look for charting library code that could be split
5. **`document.querySelector('[elementtiming]')` or PerformanceObserver for LCP** — identify the exact LCP element in production

---

## Quick Win Summary (Effort vs. Impact)

| Fix | Impact | Effort | Priority |
|-----|--------|--------|----------|
| Preload + subset hero font | High (~600ms LCP) | Low (1 hour) | 🔴 P0 |
| Code-split ROI calculator | High (~200ms INP + 100KB JS) | Medium (3 hours) | 🔴 P0 |
| Lazy-load booking widget | Medium (~200ms) | Low (1 hour) | 🟡 P1 |
| Fix pricing card CLS | Medium (~0.04 CLS) | Low (30 min) | 🟡 P1 |
| Set immutable cache headers | Medium (repeat visits) | Low (15 min) | 🟡 P1 |
| Replace charting library with inline SVG | High (~80KB JS) | High (4–6 hours) | 🟡 P1 |
| Native `<details>` for FAQ | Low (~20ms INP) | Low (30 min) | 🟢 P2 |
| Remove entrance animations | Low (~0.02 CLS) | Low (15 min) | 🟢 P2 |

---

**Bottom line:** This page is *almost* fast. The content structure is smart — text-heavy hero, meaningful stats, clear pricing — but the execution leaves ~800ms–1.2s on the table. Two hours of focused work (font preloading + calculator code-splitting) would move this from a borderline fail to a solid pass on Core Web Vitals. For a B2B page targeting time-strapped Club GMs who probably check it on their phone between tee times, those 800ms are the difference between a booked demo and a bounce.
