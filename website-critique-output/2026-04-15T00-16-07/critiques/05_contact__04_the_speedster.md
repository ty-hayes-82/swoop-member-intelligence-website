# The Speedster — Contact / Demo

**Page:** Contact / Demo
**URL:** http://localhost:4173/#/contact
**Lens:** The Speedster
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:26:49.554Z

---



# Performance Audit: Swoop Club Intelligence — Contact/Demo Page

## Performance Verdict

This is a **fast, lightweight page** — a text-heavy, image-free single-purpose landing page with minimal visual complexity, which is exactly the kind of page that *should* be blazing fast. The biggest risk is not what I can see, but what might be lurking underneath: custom font loading for those serif display headings (the bold "Get a Custom Retention Plan" and "See what your club misses today"), potential render-blocking CSS, and whether the Vercel deployment is properly leveraging edge caching. For what's visible, this page appears well-disciplined — but a few structural issues could shave meaningful milliseconds.

**Overall Score: 78 / 100**

---

## Core Web Vitals Assessment

| Metric | Estimated | Threshold | Status |
|--------|-----------|-----------|--------|
| LCP | ~1.4–2.0s | < 2.5s | ✅ Pass (likely) |
| INP | ~50–100ms | < 200ms | ✅ Pass (likely) |
| CLS | ~0.02–0.08 | < 0.1 | ⚠️ Marginal |

**LCP Element:** The largest contentful paint element is almost certainly the hero heading **"Get a Custom Retention Plan. Not a Pitch Deck."** — a large serif text block rendered in what appears to be a custom display font (likely a web font like a Playfair Display or similar high-contrast serif). If this font is not preloaded, LCP is gated on font download + render, which could push it past 2.0s on 3G connections.

**INP:** The page has extremely low interactive complexity. The only interactive elements are: the 3-field form (NAME, CLUB, EMAIL), the "Get My Custom Retention Plan" CTA button, the `<details>` accordion ("Data handling & security details"), the `demo@swoopgolf.com` mailto link, and the footer navigation links. No heavy JS event handlers are visible. INP should be excellent.

**CLS:** The primary CLS risks are:
1. **Font swap on the display headings** — the serif headings use a distinctly different typeface from the body text (which appears to be a system or sans-serif font). If `font-display: swap` is used without proper fallback sizing, the FOUT will cause measurable layout shift.
2. **The form section in the dark background area** — if this renders after the left-column text, it could shift content.
3. **The `<details>` accordion** near the footer will cause below-fold layout shift when opened, but this is user-initiated and excluded from CLS.

---

## Dimension Scores

| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 80 | Font-dependent LCP on the hero heading |
| Asset Optimization | 82 | Likely unsubsetted custom serif font(s) |
| Perceived Performance | 85 | Content-first, no splash screens — solid |
| Infrastructure & Delivery | 75 | Vercel defaults may not include optimal cache headers for fonts/CSS |
| Third-Party Impact | 68 | Unknown analytics/tracking on a Vercel deploy; form submission endpoint overhead |

---

## The Performance Audit

### 1. 🔴 Custom Display Font Loading Strategy (Est. Impact: 300–800ms on LCP)

**What's wrong:** The hero heading "Get a Custom Retention Plan. Not a Pitch Deck." and the section heading "See what your club misses today and can recover tomorrow." use a heavy serif display typeface — visually distinct from the body copy, which uses a lighter sans-serif. This is almost certainly a web font (not a system font). If it's not preloaded with `<link rel="preload" as="font" crossorigin>`, the browser discovers it only after CSS is parsed, adding a full round trip to LCP.

**Impact:** On a 4G connection, font discovery → download can add 300–500ms. On 3G, 500–800ms. Since the LCP element IS this text, font load time directly equals LCP delay.

**Fix:**
- Add `<link rel="preload" href="/fonts/[serif-font].woff2" as="font" type="font/woff2" crossorigin>` in the `<head>`.
- Use `font-display: optional` instead of `swap` if you want to eliminate CLS entirely (tradeoff: first-visit users may see fallback font).
- Subset the font to Latin characters only — display fonts can be 80–150KB unsubsetted; subsetting can reduce to 15–30KB.
- Serve only WOFF2 format (drop WOFF/TTF/EOT).

---

### 2. 🔴 Potential Render-Blocking CSS (Est. Impact: 200–500ms on FCP/LCP)

**What's wrong:** This page is visually simple — two sections (light hero, dark form section, light footer). The total CSS needed above the fold is minimal: background colors (#fff, ~#1a1a1a), font styles, padding, and the form layout. If the full site CSS is loaded as a single render-blocking `<link rel="stylesheet">`, the browser waits for the entire file before first paint.

**Impact:** Even a 30KB CSS file on a 4G connection adds ~100–200ms. If it includes styles for other pages (homepage, features, etc.), it's wasted bytes on this page.

**Fix:**
- Inline critical CSS for this page directly in `<head>` — the above-the-fold styles are likely < 5KB.
- Load remaining CSS with `<link rel="stylesheet" media="print" onload="this.media='all'">` pattern or `rel="preload"`.
- If using Next.js on Vercel, ensure per-page CSS splitting is active (it should be by default with CSS Modules or styled-components, but verify with DevTools Network panel).

---

### 3. 🟡 Font File Count — Two Distinct Typefaces (Est. Impact: 100–400ms)

**What's wrong:** I can identify at least two distinct typefaces on this page:
- **Serif display font** (bold, high-contrast) — used for "Get a Custom Retention Plan..." and "See what your club misses..."
- **Sans-serif body font** — used for body copy ("In 30 minutes, we load your tee-sheet data..."), the form labels (NAME, CLUB, EMAIL), button text, and footer.

The "WHAT YOU'LL LEAVE WITH" subheading appears to be a third treatment (uppercase, tracked, likely the same sans-serif with different styling). The testimonial quote also appears in **bold italic serif**, which may require an additional font file (bold italic weight).

Each font file is a separate HTTP request and ~15–40KB.

**Impact:** 2–4 font files × 20–40KB = 40–160KB of font weight, with sequential discovery if not preloaded.

**Fix:**
- Limit to 2 font files maximum: one serif (regular or bold) and one sans-serif.
- For the bold italic testimonial quote, use a `font-synthesis` approach or accept browser-synthesized bold italic rather than loading a 4th file.
- Use `<link rel="preload">` for both critical font files.
- Consider using a variable font if the typeface offers one — single file, multiple weights.

---

### 4. 🟡 Form Submission Endpoint — Client-Side JS Overhead (Est. Impact: 50–200ms INP)

**What's wrong:** The "Get My Custom Retention Plan" button submits a form with 3 fields. This likely involves client-side JavaScript for: form validation, API call to a backend/CRM (HubSpot, Salesforce, or custom endpoint), success/error state rendering. If this form handler is bundled in the main JS bundle, it's loaded and parsed on page load even though the user hasn't interacted yet.

**Impact:** If form handling JS is 20–50KB (including validation library + API client), that's parse time spent on initial load for functionality that's only needed on click.

**Fix:**
- Lazy-load form submission handler — use dynamic `import()` on form submit event.
- For validation, use native HTML5 validation (`required`, `type="email"`, `pattern`) instead of a JS validation library.
- Consider a simple `fetch()` POST instead of a heavyweight form library.

---

### 5. 🟡 CLS Risk: Font Swap on Serif Headings (Est. Impact: CLS 0.02–0.08)

**What's wrong:** The serif headings are large (estimated ~36–48px font-size based on visual proportion) and span multiple lines. When the browser first renders with a fallback font (e.g., Georgia or Times New Roman) and then swaps to the custom serif font, the different metrics (x-height, character width, line height) cause the text block to reflow. A 4-line heading reflowing by even 8px vertically causes measurable CLS.

**Impact:** The hero heading "Get a Custom Retention Plan. Not a Pitch Deck." spans ~3 lines and the second section heading spans ~5 lines. Both are above or near the fold. Combined CLS from font swap could be 0.03–0.08.

**Fix:**
- Use the CSS `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override` descriptors in `@font-face` for the fallback font to match the custom font's metrics.
- Tool: Use [Fontaine](https://github.com/unjs/fontaine) (if Next.js) or [Font Style Matcher](https://meowni.ca/font-style-matcher/) to generate matching overrides.
- Alternative: Use `font-display: optional` — if the font isn't cached, the fallback renders permanently (no swap, no CLS). On repeat visits, the cached font loads instantly.

---

### 6. 🟡 No Visible Images — Verify Zero Image Requests (Est. Impact: Validation)

**What's wrong:** This is actually a *positive* observation. The page appears to contain **zero images** — no hero image, no logos (the "swoop." wordmark in the nav appears to be text), no icons beyond the checkmarks (✓) and lock/shield emoji characters (🔒, 🛡️) which appear to be Unicode characters or inline SVGs, not image files.

**Impact:** If truly image-free, this eliminates a major performance vector. However, verify in DevTools Network panel that there are no hidden images (e.g., tracking pixels, favicon, social meta images loaded in `<head>`).

**Fix:**
- Confirm with `curl -s [URL] | grep -i '<img\|background-image\|\.png\|\.jpg\|\.webp\|\.svg'` that no images are being loaded.
- Ensure the orange/gold gradient bar at the top of the page (visible thin line below the nav) is CSS-only, not an image.
- If there's a favicon, ensure it's an SVG favicon (single request, tiny payload) rather than multiple `.ico`/`.png` files.

---

### 7. 🟡 Dark Section Background — Check for Unnecessary Background Image (Est. Impact: 0–300ms)

**What's wrong:** The middle section ("See what your club misses today...") has a dark background (~#1a1a1a or similar near-black). This appears to be a pure CSS background color, which is ideal. However, some designs use a subtle texture, noise overlay, or gradient image for dark sections. If a background-image is present, it's an unnecessary asset.

**Impact:** A noise texture PNG can be 20–100KB. Fully unnecessary if it's barely perceptible.

**Fix:**
- Verify in DevTools Elements panel that this section uses only `background-color` and not `background-image`.
- If a texture is present, remove it or replace with a CSS `background-image: linear-gradient(...)` or CSS noise pattern.

---

### 8. 🟡 Vercel Deployment — Cache Headers and Edge Configuration (Est. Impact: 100–300ms TTFB globally)

**What's wrong:** The site is deployed on `swoop-member-intelligence-website.vercel.app` — a Vercel deployment. Vercel provides a CDN by default, but cache behavior depends on configuration:
- Static assets (JS, CSS, fonts) should have `Cache-Control: public, max-age=31536000, immutable` with content-hashed filenames.
- HTML pages on Vercel default to `Cache-Control: public, max-age=0, must-revalidate` for ISR/SSR pages, or immutable for fully static.

**Impact:** If this is a Server-Side Rendered (SSR) Next.js page, every request hits the serverless function, adding 50–200ms TTFB vs. a statically generated page served from CDN edge (~10–50ms).

**Fix:**
- If this page content is static (no personalization), use `getStaticProps` / static export — not SSR.
- Verify with `curl -I [URL]` and check the `Cache-Control` and `x-vercel-cache` headers. You want `x-vercel-cache: HIT` indicating edge cache serving.
- Add `stale-while-revalidate` for ISR pages if content changes occasionally.

---

### 9. 🟢 Third-Party Script Audit (Est. Impact: 200–1000ms total)

**What's wrong:** I cannot see any visible third-party widgets (no chat bubble, no cookie banner, no embedded video, no social widgets). However, on a marketing landing page with a lead-gen form, it's extremely likely that at least some of these are present in the `<head>`:
- **Google Analytics / GA4** or **Segment** (~20–45KB)
- **Google Tag Manager** (~30KB + whatever tags it loads)
- **Facebook/Meta Pixel** (~20KB)
- **HubSpot tracking** or **Salesforce** (~50–100KB if full embed)
- **Hotjar/FullStory** session recording (~40–80KB)

**Impact:** Each third-party script competes for bandwidth and main-thread time. 3–4 analytics scripts can add 150–300KB of JS and 500–1000ms of main-thread blocking.

**Fix:**
- Audit with Chrome DevTools → Network → filter by third-party domain.
- Defer all analytics with `<script defer>` or load via `requestIdleCallback`.
- Replace Google Analytics with a lighter alternative like Plausible (~1KB) or Fathom (~3KB) if full GA4 features aren't needed.
- Load HubSpot form tracking only on form interaction, not on page load.
- Use [Partytown](https://partytown.builder.io/) to move third-party scripts to a web worker (Vercel/Next.js has built-in support).

---

### 10. 🟢 Accordion Component — JS Bundle Impact (Est. Impact: 5–20KB)

**What's wrong:** The "Data handling & security details" section at the bottom uses an expandable disclosure pattern (▶ icon + text). If this is implemented with a native `<details>/<summary>` HTML element, it requires zero JavaScript — excellent. If it uses a custom React accordion component (common in Next.js apps), it adds unnecessary JS weight.

**Impact:** A React accordion component + animation library can add 5–20KB to the JS bundle. The native HTML element costs 0KB.

**Fix:**
- Use native `<details>` and `<summary>` elements. They're supported in all modern browsers (97%+ global support).
- Style with CSS: `details[open] summary::before { content: "▼"; }` for the caret rotation.
- If animation is desired on open/close, use CSS `@starting-style` + transitions (new, progressive enhancement) rather than a JS animation library.

---

## Performance Budget Recommendations

| Metric | Recommended Budget | Rationale |
|--------|-------------------|-----------|
| **Total Page Weight** | < 250KB (transferred) | Text-only page with a form — should be ultralight |
| **HTML** | < 15KB (gzipped) | Simple DOM structure, ~50–80 elements |
| **CSS** | < 20KB (transferred) | Two-section layout, minimal component styles |
| **JavaScript** | < 80KB (transferred) | Form validation + framework hydration only |
| **Fonts** | < 60KB (2 files max) | 1 serif display + 1 sans-serif body, WOFF2 only, subsetted |
| **Images** | 0KB | This page should remain image-free |
| **Third-Party JS** | < 30KB (transferred) | Lightweight analytics only, deferred |
| **Total Requests** | < 15 | HTML + 2 CSS + 2 JS chunks + 2 fonts + 1 analytics + favicon |
| **LCP** | < 1.5s | Achievable for a text-only page on CDN |
| **INP** | < 100ms | Minimal interaction complexity |
| **CLS** | < 0.05 | With proper font fallback metrics |
| **TTFB** | < 100ms | Static generation on Vercel edge |

---

## Measurement Recommendations

Run these specific tests to validate the estimates above:

1. **PageSpeed Insights** (https://pagespeed.web.dev/) — enter the Vercel URL, test both Mobile and Desktop. Check the LCP element identification and CLS sources.
2. **WebPageTest** (https://webpagetest.org/) — run from Dulles, VA on 4G connection. Use filmstrip view to identify exact font swap moment and measure FOUT duration.
3. **Chrome DevTools → Performance panel** — record page load, look for "Layout Shift" entries in the Experience lane. Identify if they correlate with font swap.
4. **Chrome DevTools → Network panel** — filter by `font` to see how many font files load, their sizes, and whether they're preloaded (look for `Priority: High` in the initiator).
5. **Chrome DevTools → Coverage tab** — measure unused CSS and JS percentage. Target < 20% unused bytes on initial load.

---

## Summary

This page has excellent fundamentals — it's text-focused, image-free, has a single clear CTA, and is deployed on a modern edge platform. The architecture is right. The optimization gaps are in the font loading pipeline (likely the #1 bottleneck), potential over-delivery of CSS/JS, and third-party script discipline. With the fixes above — particularly font preloading, subsetting, and static generation — this page should comfortably hit sub-1.5s LCP and feel instantaneous to the club GMs evaluating the product. Speed is trust, and for a page asking someone to hand over their club's operational data, trust starts before they read a single word.
