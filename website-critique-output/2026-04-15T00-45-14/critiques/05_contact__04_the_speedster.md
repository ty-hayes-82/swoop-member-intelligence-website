# The Speedster — Contact / Demo

**Page:** Contact / Demo
**URL:** http://localhost:4173/#/contact
**Lens:** The Speedster
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:56:29.504Z

---



# Performance Audit: Swoop Club Intelligence — Contact / Demo Page

## Performance Verdict

This is a **fast, lightweight page** — it's primarily text and a simple form with minimal visual complexity, which is exactly the kind of page that *should* scream. However, it's leaving easy wins on the table. The biggest bottleneck is likely **custom font loading** — the page uses at least three distinct typefaces (a serif display face for headlines like "Get a Custom Retention Plan.", a sans-serif for body copy, and a monospaced or condensed sans for labels like "WHAT YOU'LL LEAVE WITH" and "NAME / CLUB / EMAIL"), and without proper font-display and preloading strategies, these fonts are the critical path to LCP.

**Overall Score: 78 / 100**

---

## Core Web Vitals Assessment

| Metric | Estimated Score | Threshold | Status |
|--------|----------------|-----------|--------|
| LCP | ~1.8–2.4s | < 2.5s | ⚠️ Likely Pass (borderline) |
| INP | ~80ms | < 200ms | ✅ Pass |
| CLS | ~0.05–0.15 | < 0.1 | ⚠️ Likely Fail |

### LCP Analysis
The **LCP element** is almost certainly the hero heading **"Get a Custom Retention Plan. Not a Pitch Deck."** — it's the largest text block in the initial viewport. This is a custom serif font (likely a web font like a Playfair Display, Freight, or similar editorial serif). LCP for text elements is gated on:
1. Server response time (Vercel hosting → likely fast, ~100-200ms TTFB)
2. Font file download and rendering
3. Render-blocking CSS

Since this is hosted on `vercel.app`, TTFB should be solid. The risk is font blocking — if `font-display: swap` isn't set, the browser waits for the font to download before painting that heading, pushing LCP past 2.5s on slower connections.

### INP Analysis
This page has **minimal interactivity**: three form fields (Name, Club, Email), one submit button ("Get My Custom Retention Plan"), one `<details>` disclosure ("Data handling & security details"), and footer links. No JavaScript-heavy interactions are visible — no modals, carousels, accordions beyond the disclosure, or dynamic filtering. INP should comfortably pass unless the form submission triggers a heavy JS payload.

### CLS Analysis
**High CLS risk from multiple sources:**
- **Font swap reflow**: The page uses at least 3 font families. If body text renders in a fallback (Arial/system) then swaps to the custom sans-serif, the line heights and widths change, shifting the "WHAT YOU'LL LEAVE WITH" section and everything below.
- **The dark-to-light section transition**: The page has a cream/warm white hero section, then a **dark (#1a1a1a-ish) section** for the form/CTA area. If this section's height depends on dynamically loaded content or late-rendering fonts, it will shift.
- **No visible images with dimension concerns**, which is actually a positive — this page appears to have zero images.

---

## Dimension Scores

| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 72 | CLS from font swap across 3+ font families |
| Asset Optimization | 82 | Multiple font files likely unsubsetted |
| Perceived Performance | 88 | Clean content-first design, minimal chrome |
| Infrastructure & Delivery | 80 | Vercel defaults are good but caching may be suboptimal for static assets |
| Third-Party Impact | 75 | Form submission likely hits a third-party (CRM/Calendly/HubSpot); unknown analytics payload |

---

## The Performance Audit

### 1. 🔴 Multiple Custom Font Families Without Optimization (Impact: High — est. 300-800ms LCP delay)

**What's wrong:** The page renders at least **three distinct typefaces**:
- **Serif display** (bold, high-contrast) for headings: "Get a Custom Retention Plan.", "See what your club misses today and can recover tomorrow."
- **Sans-serif** for body text: "In 30 minutes, we load your tee-sheet data…", form labels
- **Condensed/uppercase sans** for the small-caps label "WHAT YOU'LL LEAVE WITH"
- Possibly a **fourth** for the "swoop." wordmark in the header

Each font family likely involves 2–4 weight/style files (regular, bold, italic, bold italic). At ~20-50KB per WOFF2 file, that's potentially **120-400KB of font downloads** before the page fully renders.

**Fix:**
- Subset all fonts to Latin characters only (saves ~40-60% per file)
- Preload the **single font file used by the LCP element** (the serif bold): `<link rel="preload" href="/fonts/serif-bold.woff2" as="font" type="font/woff2" crossorigin>`
- Set `font-display: swap` on all `@font-face` declarations
- Consider reducing to **two font families** — the uppercase label "WHAT YOU'LL LEAVE WITH" can be achieved with `letter-spacing` and `text-transform: uppercase` on the sans-serif, eliminating a font family entirely

### 2. 🔴 CLS from Font Swap Across Multiple Typefaces (Impact: High — est. CLS 0.05–0.15)

**What's wrong:** When three font families swap from system fallbacks to custom fonts, the cumulative layout shift compounds. The serif headline "Get a Custom Retention Plan. Not a Pitch Deck." likely has significantly different metrics (x-height, letter-spacing, line-height) between the fallback (Georgia/Times) and the actual web font. This shifts the body text, the "WHAT YOU'LL LEAVE WITH" section, and the four checkmark bullet points below it.

**Fix:**
- Use `font-display: optional` for non-LCP fonts (body sans-serif, label font) — this eliminates swap-induced CLS entirely by using the fallback if the font isn't cached
- Use CSS `size-adjust`, `ascent-override`, `descent-override`, and `line-gap-override` on `@font-face` declarations to match fallback metrics to custom font metrics
- Tool: Use [Fontaine](https://github.com/unjs/fontaine) or the `@next/font` automatic font optimization if this is a Next.js site (Vercel hosting suggests it may be)

### 3. 🟡 Form Submission JS Payload Unknown — Potential Main Thread Blockage (Impact: Medium — est. 100-500ms INP spike)

**What's wrong:** The "Get My Custom Retention Plan" button submits a form with Name, Club, and Email fields. This almost certainly hits a CRM integration (HubSpot, Salesforce, or similar). If the CRM's JavaScript SDK is loaded eagerly on page load (e.g., HubSpot's `hs-script-loader` at ~90KB gzipped), it:
- Adds to main thread processing on load
- May inject additional tracking scripts
- Could block interactivity during form submission

**Fix:**
- If using a CRM SDK, **defer it entirely** and load it only on form focus or form submission: `addEventListener('focusin', () => loadHubSpot(), { once: true })`
- Alternatively, submit the form via a **lightweight `fetch()` call to a Vercel serverless function** that proxies to the CRM API server-side — zero client-side CRM SDK needed
- This eliminates potentially 80-150KB of third-party JS

### 4. 🟡 No Visible Image Optimization Concerns — But Verify Zero-Image Strategy (Impact: Low-Medium)

**What's wrong:** This page appears to contain **zero images** — no hero image, no logos, no screenshots, no social proof photos. This is actually excellent for performance. However:
- The "swoop." wordmark in the top-left header — if this is an SVG or PNG rather than styled text, it should be inlined SVG
- The checkmark icons (✓) in the "WHAT YOU'LL LEAVE WITH" section — if these are icon font glyphs or SVG files rather than Unicode characters, they add weight
- The lock icon (🔒), green dot (🟢), and folder icon (📁) next to "AES-256 Encryption", "SOC 2 Type II (Audit Active)", and "Mutual NDA on Every Engagement" — same concern

**Fix:**
- Ensure "swoop." is rendered as styled text (`<span>` with custom font) or inline SVG, not an `<img>` tag
- Ensure all icons are inline SVGs or Unicode characters, not an icon font library (Font Awesome at ~75KB is overkill for 6 icons)
- If any icon library is loaded, replace with hand-crafted inline SVGs (~200 bytes each vs. 75KB library)

### 5. 🟡 Render-Blocking CSS Likely Includes Unused Styles (Impact: Medium — est. 100-300ms render delay)

**What's wrong:** The page has two distinct visual sections:
- **Light cream/warm section** (hero with heading, bullets)
- **Dark charcoal section** (form, testimonial, "what happens next" steps)

If this is a single-page app or uses a CSS framework, the full site's CSS is likely delivered on this page even though only demo-page styles are needed. For a page this simple (headings, paragraphs, a form, a list, a blockquote), the critical CSS should be **under 5KB**.

**Fix:**
- Extract critical CSS for this page and inline it in `<head>` (use [Critical](https://github.com/addyosmani/critical) by Addy Osmani)
- Defer non-critical CSS with `<link rel="preload" as="style" onload="this.rel='stylesheet'">`
- Target: critical CSS payload < 5KB inlined, remainder loaded async

### 6. 🟡 The `<details>` Disclosure May Trigger Layout Shift on Open (Impact: Low-Medium — est. CLS 0.02–0.05)

**What's wrong:** The "▶ Data handling & security details" disclosure widget at the bottom of the page is a `<details>`/`<summary>` element (or JS equivalent). When expanded, it injects content that pushes the footer down. While this is below the fold and likely outside the CLS measurement window for initial load, if a user scrolls to it and expands it within the CLS observation period, it contributes to the score.

**Fix:**
- This is acceptable behavior for a disclosure widget — the CLS from user-initiated interaction within 500ms of the click is excluded from CLS scoring per the [updated CLS definition](https://web.dev/cls/)
- Ensure the expansion uses CSS `transform` or `max-height` animation rather than abrupt height changes, for perceived smoothness
- No critical fix needed, but worth verifying with DevTools

### 7. 🟡 Vercel Default Caching May Not Leverage Long-Term Immutable Caching (Impact: Medium for repeat visitors)

**What's wrong:** Vercel's default caching for static assets is reasonable but not maximal. If font files, CSS, and JS are served with short `Cache-Control` max-age (e.g., `max-age=0, must-revalidate` for HTML, or `max-age=31536000` only for hashed assets), repeat visitors re-download unchanged resources.

**Fix:**
- Ensure all static assets (fonts, CSS, JS) have content-hash filenames and `Cache-Control: public, max-age=31536000, immutable`
- HTML should use `Cache-Control: public, max-age=0, must-revalidate` with `stale-while-revalidate` for ISR-like behavior
- Verify with: `curl -I https://swoop-member-intelligence-website.vercel.app/` and inspect response headers

### 8. 🟢 No Visible Heavy Media — Excellent Content-to-Chrome Ratio (Impact: Positive)

**What's right:** This page has an exceptional content-to-chrome ratio. There are:
- Zero hero images or videos
- Zero carousels or sliders
- Zero animated backgrounds
- Zero decorative illustrations

The entire page is **text, a form, and two-tone background colors**. This is performance-first design done right. Estimated page weight should be under 200KB total (excluding fonts).

**Acknowledgment:** This is a deliberate and correct tradeoff for a B2B demo booking page. The target persona (Club GM) cares about credibility and clarity, not visual spectacle. The bold serif typography and testimonial quote from "Robert Torres, GM · Meridian Hills CC · 340-member equity private club" do the heavy lifting.

### 9. 🟡 Third-Party Analytics Likely Present but Invisible (Impact: Medium — est. 50-150KB JS)

**What's wrong:** A Vercel-hosted marketing page for a SaaS product almost certainly includes analytics (Google Analytics 4, Segment, Mixpanel, or Vercel Analytics). None are visible in the screenshot, but they're present in the source. Each adds:
- GA4: ~45KB gzipped
- Segment: ~35KB gzipped
- Vercel Analytics: ~1KB (negligible)
- HotJar/FullStory session replay: ~60-100KB gzipped

**Fix:**
- Use **Vercel Analytics** (~1KB) instead of GA4 for basic metrics if possible
- If GA4 is required, load it via **Partytown** (web worker) to move it off the main thread
- Defer all non-essential analytics to `requestIdleCallback` or the `load` event
- Tool: Use [Request Map Generator](https://requestmap.pages.dev/) to visualize all third-party requests

### 10. 🟢 Form Input Fields Have Placeholders — Verify Accessible Labels (Impact: Low — performance-adjacent UX)

**What's partially wrong:** The form shows "NAME", "CLUB" (with placeholder "e.g., Pine Valley Golf Club"), and "EMAIL" labels above the inputs. The "CLUB" placeholder is helpful for input guidance. However, if placeholders are used *instead of* labels (visually hidden `<label>` elements), screen reader users face accessibility issues — and accessibility overlays loaded to compensate add significant JS weight (e.g., AccessiBe at ~100KB).

**Fix:**
- Ensure each `<input>` has an associated `<label>` element (can be visually hidden with `sr-only` class)
- Do not rely on third-party accessibility overlay scripts — they add JS weight and don't actually fix accessibility
- This is a 0KB fix that prevents a potential 100KB problem

---

## Performance Budget Recommendations

| Budget Category | Recommended | Estimated Current | Status |
|----------------|-------------|-------------------|--------|
| **Total Page Weight** | < 300KB | ~200-400KB | ⚠️ Verify |
| **HTML** | < 15KB | ~8-12KB | ✅ |
| **CSS (total)** | < 30KB | ~15-50KB | ⚠️ Verify |
| **CSS (critical, inlined)** | < 5KB | Unknown | ❓ |
| **JavaScript (total)** | < 100KB gzipped | ~80-200KB | ⚠️ Verify |
| **Fonts (total)** | < 80KB | ~100-300KB | 🔴 Likely over |
| **Images** | < 10KB | ~0-5KB | ✅ Excellent |
| **HTTP Requests** | < 15 | ~10-25 | ⚠️ Verify |
| **LCP** | < 1.5s | ~1.8-2.4s | ⚠️ Tighten |
| **INP** | < 100ms | ~80ms | ✅ |
| **CLS** | < 0.05 | ~0.05-0.15 | 🔴 Fix fonts |

---

## Measurement Verification Checklist

Run these to validate estimates from this visual audit:

1. **PageSpeed Insights**: `https://pagespeed.web.dev/analysis?url=https://swoop-member-intelligence-website.vercel.app/` — get real CWV field data if available
2. **WebPageTest** (Dulles, VA, Cable, Chrome): Filmstrip view to verify LCP element and font rendering timeline
3. **Chrome DevTools → Performance tab**: Record page load, identify Long Tasks > 50ms
4. **Chrome DevTools → Network tab**: Filter by `font` to count font file requests and sizes
5. **Chrome DevTools → Coverage tab**: Identify unused CSS and JS bytes
6. **`document.fonts.ready`** timing in console: Verify when fonts complete loading vs. LCP

---

## Summary

This page is **architecturally fast** — minimal content, no heavy media, clear conversion focus. The primary risk is **font loading strategy** dragging LCP and causing CLS. Fix the fonts, verify third-party scripts are deferred, and this page can hit sub-1.5s LCP with zero CLS. That's the difference between a page that *looks* fast and one that *is* fast.
