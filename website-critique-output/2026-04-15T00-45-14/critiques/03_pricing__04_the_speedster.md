# The Speedster — Pricing

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Lens:** The Speedster
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:52:15.485Z

---



# ⚡ The Speedster's Performance Audit

## Swoop Club Intelligence — Pricing Page

**URL:** `swoop-member-intelligence-website.vercel.app` (Vercel-hosted)

---

## Performance Verdict

This is a **medium-speed site with strong infrastructure foundations but significant front-end optimization gaps**. The Vercel hosting provides excellent edge delivery and TTFB, but the page is weighed down by what appears to be an unoptimized hero section with a large dark gradient/image background, an interactive chart/calculator widget that likely ships heavy JavaScript, and a long scrolling page (~5+ viewport heights) with no evidence of lazy loading or progressive rendering. **The single biggest bottleneck is the hero section's LCP element** — the large white headline text "Stop losing $74K a year in silent member attrition. Start for zero." rendered on top of a dark background, which depends on both the background asset loading and custom font rendering before it becomes visible.

**Overall Score: 58 / 100**

---

## Core Web Vitals Assessment

| Metric | Estimated Score | Threshold | Status |
|--------|----------------|-----------|--------|
| LCP | ~2.8–3.5s | < 2.5s | ⚠️ Likely Fail |
| INP | ~150–250ms | < 200ms | ⚠️ Borderline |
| CLS | ~0.08–0.15 | < 0.1 | ⚠️ Likely Fail |

### LCP Analysis
The LCP element is almost certainly the hero headline **"Stop losing $74K a year in silent member attrition. Start for zero."** — a large text block in what appears to be a custom serif/display font (possibly a variable or decorative typeface given the stylized ligatures and varying letter weights visible). This text sits on a dark (#1a1a1a or similar) background section that spans the full viewport. LCP for text elements depends on: (1) server response, (2) render-blocking CSS, (3) font file download + rendering. Custom fonts are the likely LCP blocker here.

### INP Analysis
The page contains an **interactive "DUES PROTECTOR" calculator** with sliders for "TOTAL MEMBERS," "AVG. ANNUAL DUES," and "ANNUAL TURNOVER RATE" that dynamically update values ($129,000, $80,000, etc.). This widget implies significant client-side JavaScript — likely React state management at minimum, possibly a charting library for the line graph. Slider interactions could generate long tasks if the chart re-renders on every input event without debouncing. The pricing toggle ("FREQUENCY: ANNUALLY/MONTHLY") is another interactive element. INP risk is moderate-to-high.

### CLS Analysis
Multiple CLS risk factors visible:
- **Three stat cards** ("65%", "$74K", "5 of 7") below the hero — if these animate in or load dynamically, they shift content
- The **calculator section** has a chart image/canvas and dynamically updating dollar figures ($129,000, $80,000, $74,812) that change dimensions as values change
- The **pricing cards** ($0/mo, $499/mo, $1,499/mo) are content-heavy with variable-length feature lists
- **FAQ accordion** ("Things GMs ask us.") — expanding/collapsing sections cause layout shifts if not properly contained
- The **orange CTA buttons** ("Calculate your ROI", "Book a Walkthrough", etc.) — if fonts load late, button text reflows

---

## Dimension Scores

| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 48 | Custom display font blocking LCP; interactive calculator likely causing long INP tasks |
| Asset Optimization | 52 | Likely unoptimized chart/calculator JS bundle; no visible responsive image strategy |
| Perceived Performance | 62 | Hero content loads content-first which is good, but long page with no skeleton/progressive loading |
| Infrastructure & Delivery | 82 | Vercel edge network is strong; likely good TTFB and compression |
| Third-Party Impact | 68 | Likely analytics + potential chat widget; "Book a Walkthrough" may load Calendly or similar |

---

## The Performance Audit — Top 10 Issues

### 1. 🔴 Custom Display Font Blocking LCP (Impact: ~800ms–1.5s LCP delay)

**What's wrong:** The hero headline uses a distinctive display/serif typeface with stylized characters (notice the decorative "f" in "for" and the varied stroke weights). This is not a system font. If this font file isn't preloaded with `<link rel="preload" as="font">` and served with `font-display: swap` or `font-display: optional`, the browser waits for the font download before painting the LCP text element.

**Estimated impact:** Font files for display faces typically run 40–120KB. On a 3G connection, that's 800ms+ of invisible text (FOIT). Even on fast connections, the font discovery happens late in the waterfall because CSS must be parsed first.

**Fix:** 
```html
<link rel="preload" href="/fonts/display-font.woff2" as="font" type="font/woff2" crossorigin>
```
Set `font-display: optional` for the display font (prevents CLS from font swap). Subset the font to only the characters used in the hero: "Stop losing $74K a year in silent member attrition. Start for zero." — this could reduce the font file from ~80KB to ~15KB.

**Measure with:** Chrome DevTools → Network tab filtered by "Font"; Lighthouse font-display audit.

---

### 2. 🔴 Interactive Calculator Widget — Likely Heavy JS Bundle (Impact: ~200–500ms INP, ~100–300KB JS)

**What's wrong:** The "DUES PROTECTOR" section contains a line chart (showing dues recovery over time), three interactive sliders, and real-time dollar calculations ($129,000 → $80,000 recovery, $74,812 net). This almost certainly requires either a charting library (Chart.js ~65KB gzipped, Recharts ~45KB gzipped, or similar) plus the React state logic. If this JavaScript is part of the main bundle, it blocks interactivity for the entire page.

**Estimated impact:** A charting library + slider components could add 80–200KB to the JS bundle. If not code-split, this delays TTI and increases INP for first interactions.

**Fix:** Code-split the calculator into a dynamic import that loads only when the user scrolls to that section (Intersection Observer trigger). Replace the charting library with a lightweight SVG path animation or a pre-rendered SVG with CSS transitions — the chart appears to be a simple upward curve, not a complex data visualization. Consider using `<input type="range">` native sliders with vanilla JS calculations instead of a heavy React slider component.

**Measure with:** Chrome DevTools → Coverage tab to identify unused JS; webpack-bundle-analyzer if source is accessible.

---

### 3. 🟠 CLS from FAQ Accordion Expansion (Impact: ~0.03–0.08 CLS contribution)

**What's wrong:** The "Things GMs ask us." section shows four collapsible FAQ items:
- "Do I need to replace my current software?"
- "Is my members' data secure?"
- "What does the founding partner program actually look like?"
- "What happens if I cancel?"

The first two appear expanded in the screenshot. If these expand/collapse by injecting content that pushes the "Ready to see which of your members are at risk?" CTA section and footer downward, each interaction causes a layout shift. Additionally, if the page loads with FAQs in a collapsed state and then JavaScript expands them, that's a load-time CLS event.

**Fix:** Use CSS `max-height` transitions with a generous max-height value rather than `height: auto` animations. Reserve space with `min-height` on the FAQ container. Use the native `<details>`/`<summary>` HTML elements which handle expansion without layout shifts. Ensure the initial render state matches what JavaScript will set (no hydration mismatch).

---

### 4. 🟠 Hero Background — Potential Unoptimized Dark Section (Impact: ~100–400ms)

**What's wrong:** The hero section features a full-width dark background (appears to be #1a1a1a or similar very dark gray/black) with a subtle gradient or texture. If this is a CSS gradient, the impact is minimal. But if it's a background image (even a dark one with subtle texture/grain), it could be an unnecessarily large asset. The orange "Pricing" label text and the decorative elements suggest possible image assets.

**Fix:** If it's a solid color or simple gradient, ensure it's pure CSS (`background: linear-gradient(...)`) with no image dependency. If there's a texture, convert to a tiny (2KB) repeating WebP tile. The three stat cards below ("65%", "$74K", "5 of 7") with dark backgrounds and orange/white text should also be pure CSS, not images.

**Measure with:** DevTools Network tab → filter by Img; check for background-image in Computed Styles.

---

### 5. 🟠 No Visible Lazy Loading Strategy for Below-Fold Content (Impact: ~300–800ms initial load)

**What's wrong:** The page is approximately 5–6 viewport heights long, containing:
- Hero section (viewport 1)
- ROI Calculator section (viewport 2)
- Testimonial/social proof (viewport 2.5)
- Pricing tier cards (viewports 3–4)
- FAQ section (viewport 5)
- Final CTA + Footer (viewport 5–6)

The calculator chart, pricing card content, and FAQ section content are all below the fold but likely loaded eagerly. The chart visualization in the calculator section is the most expensive below-fold element.

**Fix:** Implement `loading="lazy"` on any images below the fold. Use dynamic imports for the calculator component with an Intersection Observer trigger. Consider a placeholder/skeleton for the calculator section that loads the full interactive widget only when scrolled into view. The pricing cards section can use `content-visibility: auto` to skip rendering until scrolled to.

```css
.pricing-section { content-visibility: auto; contain-intrinsic-size: 0 800px; }
```

---

### 6. 🟠 Pricing Cards — Dynamic Content Without Dimension Reservation (Impact: ~0.02–0.05 CLS)

**What's wrong:** The three pricing tiers ($0/mo "Signals", $499/mo "Signals + Actions", $1,499/mo "Signals + Actions + Member App") have variable-length feature lists. The middle tier appears to be the "recommended" option with an orange header ("FREQUENCY: ANNUALLY/MO" toggle). If the pricing toggle switches between annual/monthly pricing and the dollar amounts change ($499 ↔ some monthly amount), this could cause text reflow and card height changes.

Additionally, the pricing cards have different amounts of bullet points (the $1,499 tier has visibly more features listed), which means different card heights. If these aren't set to a uniform height, they may shift during render.

**Fix:** Set a fixed `min-height` on pricing cards that accommodates the tallest card. When toggling annual/monthly, use CSS transitions on the price text and ensure the container doesn't resize. Pre-calculate both price values and swap only the text content, not the DOM structure.

---

### 7. 🟡 "Book a 30-Min Walkthrough" — Likely Third-Party Calendar Embed (Impact: ~200–500KB JS on interaction)

**What's wrong:** The orange CTAs "Book a Walkthrough With Your Members" and "Book a 30-Min Walkthrough" appear multiple times on the page (at least 3 instances visible). These likely open a Calendly, HubSpot Meetings, or similar scheduling widget. If these scripts are loaded eagerly on page load, they add significant weight. Calendly's embed alone is ~200KB+ of JavaScript.

**Fix:** Load the scheduling widget script only on button click, not on page load. Use a facade pattern: the button click triggers a dynamic script injection, shows a loading spinner for 500ms, then opens the widget. This removes ~200KB+ from the initial page load.

```javascript
button.addEventListener('click', async () => {
  showSpinner();
  await import('scheduling-widget');
  openWidget();
});
```

---

### 8. 🟡 Multiple Identical CTA Buttons — Redundant Event Listeners (Impact: Minor, ~10–20ms INP)

**What's wrong:** I can count at least 6–7 orange CTA buttons on this page: "Calculate your ROI", "Book a Walkthrough With Your Members", "Print this ROI report to my Board", "Get Free Daily Alerts", "Book a 30-Min Walkthrough" (×2), and the final "Book a Walkthrough" in the footer CTA section. If each has individual event listeners with separate handler functions, this contributes to DOM complexity and memory usage.

**Fix:** Use event delegation on a parent container rather than individual click handlers. A single listener on `document.body` that checks for `[data-cta]` attributes would handle all buttons with minimal overhead.

---

### 9. 🟡 Stat Animation Cards — Potential JavaScript Animation (Impact: ~50–200ms render delay)

**What's wrong:** The three stat cards ("65% Avg. all-club member retention rate", "$74K Avg. dues recovered/club for 90 days", "5 of 7 founding clubs recovered annual cost within 60 days") likely animate in (count-up animation on numbers, fade-in on cards). If these use JavaScript-based animation (like a count-up library) rather than CSS animations, they add to main thread work during the critical rendering path.

**Fix:** Replace JavaScript count-up animations with CSS `@property` animations for the numbers, or simply display static numbers. The perceived value of a count-up animation is minimal on a pricing page where users are making purchase decisions — they want to read the number, not watch it count up. If animation is retained, trigger it via Intersection Observer only when visible, and use `requestAnimationFrame` with CSS transforms (not DOM text updates).

---

### 10. 🟡 Page Weight — Long Single-Page Layout (Impact: ~200–400ms total overhead)

**What's wrong:** The page contains approximately 6 distinct sections with dense content. The total page weight is likely 1.5–3MB including all assets. For a pricing page, this is heavier than necessary. The testimonial quote section ("Swoop bypassed the 2-year hiring process... Larry Nelson, VP, Pinnacle Country Club, 985-member founding partner club") and the detailed feature comparison in pricing cards add significant DOM nodes.

**Estimated DOM complexity:** Based on visible content, I estimate 800–1,200 DOM nodes — moderate but could be reduced.

**Fix:** Consider splitting the ROI calculator into its own page/route ("Calculate your ROI" could link to `/calculator`). This would reduce the pricing page to hero + pricing cards + FAQ + CTA, cutting page weight by ~30–40%. Alternatively, use `content-visibility: auto` aggressively on each section.

---

## Performance Budget Recommendations

| Metric | Current (Estimated) | Recommended Budget |
|--------|--------------------|--------------------|
| **Total Page Weight** | ~1.8–2.5MB | ≤ 1.0MB |
| **JavaScript Bundle** | ~400–700KB (parsed) | ≤ 200KB (compressed) |
| **CSS** | ~80–150KB | ≤ 50KB (with critical CSS inlined) |
| **Image Weight** | ~200–500KB | ≤ 150KB (WebP/AVIF) |
| **Font Files** | ~150–300KB (estimated 2–4 font files) | ≤ 60KB (2 files, subsetted, WOFF2) |
| **HTTP Requests** | ~30–50 | ≤ 20 |
| **LCP Target** | ~2.8–3.5s | ≤ 1.8s |
| **INP Target** | ~150–250ms | ≤ 100ms |
| **CLS Target** | ~0.08–0.15 | ≤ 0.05 |
| **TTFB** | ~100–300ms (Vercel edge) | ≤ 200ms ✅ |

---

## Quick Wins Priority Matrix

| Fix | Effort | Impact | Priority |
|-----|--------|--------|----------|
| Preload + subset display font | 🟢 Low | 🔴 High (~1s LCP) | **P0** |
| Code-split calculator widget | 🟠 Medium | 🔴 High (~300KB JS) | **P0** |
| Lazy-load scheduling widget | 🟢 Low | 🟠 Medium (~200KB JS) | **P1** |
| `content-visibility: auto` on below-fold sections | 🟢 Low | 🟠 Medium (~200ms render) | **P1** |
| Fix FAQ accordion CLS | 🟢 Low | 🟡 Medium (~0.05 CLS) | **P1** |
| Reserve pricing card dimensions | 🟢 Low | 🟡 Low-Med (~0.03 CLS) | **P2** |
| Replace chart library with SVG | 🟠 Medium | 🟠 Medium (~80KB JS) | **P2** |
| Remove count-up animations | 🟢 Low | 🟡 Low (~50ms) | **P3** |
| Event delegation for CTAs | 🟢 Low | 🟡 Low (~10ms INP) | **P3** |

---

## Infrastructure Bright Spots ✅

Credit where it's due:
- **Vercel hosting** provides excellent edge CDN, automatic Brotli compression, HTTP/2, and strong caching headers for static assets — this is a solid infrastructure choice
- **Dark background sections** appear to be CSS-based (not image-heavy), which is smart
- **Content-first hierarchy** — the hero communicates value proposition immediately ("Stop losing $74K a year") without a loading screen or splash page
- **No visible chat widget** cluttering the initial load — good restraint
- **The pricing structure is rendered as HTML text**, not as images — this is crawlable and lightweight

---

## Measurement Next Steps

Run these tools against the live URL for real data to validate these estimates:

1. **PageSpeed Insights** (https://pagespeed.web.dev/) — field + lab data for CWV
2. **WebPageTest** (https://webpagetest.org/) — filmstrip view + waterfall for LCP element identification
3. **Chrome DevTools Performance Panel** — record a page load + interact with the calculator sliders to measure INP long tasks
4. **Chrome DevTools Coverage Tab** — identify unused JS/CSS bytes on initial load
5. **`web-vitals` library** — add RUM measurement to track real-user CWV data over time

---

*The fastest pricing page is one that gets out of the user's way. A GM evaluating Swoop at 10pm on their phone after a long day at the club doesn't want to wait 3 seconds to see if they can afford it. Every 100ms you shave off is a step closer to that "Book a Walkthrough" click.*
