# The Speedster — About

**Page:** About
**URL:** http://localhost:4173/#/about
**Lens:** The Speedster
**Critique Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:54:46.562Z

---



# Performance Audit: Swoop Club Intelligence — About/Landing Page

## Performance Verdict

This is a **medium-to-fast** text-heavy marketing page that benefits from its simplicity but likely suffers from unoptimized font loading, potential render-blocking CSS, and several below-the-fold images that may not be lazy-loaded. The single biggest performance bottleneck is almost certainly **web font loading and render-blocking stylesheets** — this page relies heavily on at least 2–3 custom typefaces (a bold serif for headlines like "Stop digging for answers. Get one actionable morning briefing." and a clean sans-serif for body copy), and any FOIT/FOUT from these fonts will directly delay LCP on a text-dominant page.

**Overall Score: 68 / 100**

---

## Core Web Vitals Assessment

| Metric | Estimated | Threshold | Status |
|--------|-----------|-----------|--------|
| LCP | ~2.8–3.5s | < 2.5s | ⚠️ Likely Fail |
| INP | ~80–120ms | < 200ms | ✅ Likely Pass |
| CLS | ~0.08–0.15 | < 0.1 | ⚠️ Borderline |

**LCP Element:** The LCP candidate is almost certainly the hero headline text — **"Stop digging for answers. Get one actionable morning briefing."** — rendered in a large bold serif typeface on the dark (#1a1a1a or similar) hero section. On a text-dominant above-the-fold like this, LCP is gated by: (1) TTFB, (2) render-blocking CSS, (3) font file download + render. If the custom serif font takes 800ms–1.2s to load after CSS parse, LCP pushes past 2.5s easily.

**INP Assessment:** This page is largely static content — accordion FAQ section ("Things GMs ask us.") is the most interactive element visible. Click/tap handlers for FAQ expand/collapse and CTA buttons ("Book a walkthrough", "Join the Founding Partner Program", "Ready to enroll for your club?") are lightweight interactions. Unless the FAQ is powered by a heavy JS framework with excessive re-renders, INP should pass comfortably.

**CLS Assessment:** Several risk factors visible:
- The orange stats cards section ("6 days", "91%", "$312", "$1.38M") with rounded corners and dark backgrounds — if these render after layout, they'll cause shift.
- Font swap from fallback to custom serif on the hero could cause measurable CLS (~0.05+).
- The testimonial/review cards section ("From founding-partner GMs.") with star ratings could shift if loaded dynamically.
- Images of team members (Kyle Payne, Jordan Mitchell, Alex Elias) in circular crops — if rendered without explicit width/height, these shift surrounding text.

---

## Dimension Scores

| Dimension | Score /100 | Biggest Issue |
|-----------|-----------|---------------|
| Core Web Vitals | 58 | LCP delayed by font loading on text-heavy hero; CLS risk from font swap + dynamic sections |
| Asset Optimization | 65 | Multiple custom font weights, likely unsubsetted; team member images possibly unoptimized |
| Perceived Performance | 78 | Content-first layout is good; but no visible skeleton/progressive loading strategy |
| Infrastructure & Delivery | 72 | Vercel hosting provides good CDN/edge; but caching and compression need verification |
| Third-Party Impact | 75 | Minimal visible third-party bloat; but analytics/tracking likely present |

---

## The Performance Audit

### 1. 🔴 Font Loading Strategy — Likely Render-Blocking LCP (Impact: High, ~500–1500ms LCP delay)

**What's wrong:** The page uses at least 3 distinct typefaces visible in the screenshot: a **bold serif** for major headlines ("Stop digging for answers…", "I was the GM. These were my spreadsheets.", "An extension of your team, not a disruption to it.", "Intelligence in action.", "Why this is hard to copy."), a **sans-serif** for body copy and UI elements, and what appears to be a **monospaced or distinct weight** for stats ("6 days", "91%", "$312", "$1.38M"). Each typeface likely has 2–3 weight files. That's potentially **6–9 font files** (~150–400KB total).

**The LCP element is text.** If fonts are loaded via `@font-face` in an external stylesheet without `font-display: swap` or `font-display: optional`, the browser waits up to 3 seconds before showing fallback text (FOIT). Even with `swap`, CLS occurs.

**Fix:**
- Add `font-display: swap` (or better, `font-display: optional` for non-critical weights) to all `@font-face` declarations.
- **Preload the LCP font file** (the bold serif used in the hero): `<link rel="preload" href="/fonts/serif-bold.woff2" as="font" type="font/woff2" crossorigin>`.
- Subset fonts to Latin characters only — most serif fonts ship with Cyrillic, Greek, Vietnamese glyphs that aren't needed here. Tools: `glyphhanger` or Google Fonts subsetting. Expected savings: **30–50% per file**.
- Consider using a system font stack for body copy and only loading custom fonts for headlines.

---

### 2. 🔴 Render-Blocking CSS (Impact: High, ~300–800ms LCP delay)

**What's wrong:** Hosted on Vercel (likely Next.js or similar framework). If the CSS bundle is served as a single `<link rel="stylesheet">` in `<head>`, it blocks first render entirely. On this page, the dark hero section with the orange "Book a walkthrough" CTA button, the white content sections, the orange accent cards — all require CSS before any pixel paints.

**Fix:**
- **Inline critical CSS** for the above-the-fold hero section directly into `<style>` in `<head>`. The hero is relatively simple: dark background (`~#1a1a1a`), white serif text, orange CTA (`~#E87A2D` or similar), centered layout. This critical CSS is likely < 5KB.
- Load remaining CSS asynchronously: `<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`.
- Tools: `critters` (webpack plugin) or Next.js built-in CSS optimization.

---

### 3. 🟡 Team Member Images — Likely Unoptimized (Impact: Medium, ~200–500KB potential savings)

**What's wrong:** Three circular-cropped team photos are visible in the "An extension of your team" section: **Kyle Payne** (CEO), **Jordan Mitchell**, and **Alex Elias**. These appear to be ~120–150px diameter display size. If served as full-resolution JPG/PNG at original camera dimensions (e.g., 800×800 or larger), they're dramatically oversized.

Additionally, the dark section with the large quote (the `66` quotation mark section with "12 mo" and other metrics) appears to use a background that could be optimized.

**Fix:**
- Serve team photos as **WebP or AVIF** at **2x display size** (e.g., 300×300px for a 150px display). Expected size: ~8–15KB each in WebP vs. ~40–80KB in JPG.
- Use `<img>` with explicit `width` and `height` attributes to prevent CLS.
- Add `loading="lazy"` — these are below the fold.
- Use `srcset` for responsive sizes: `srcset="photo-150.webp 150w, photo-300.webp 300w"`.

---

### 4. 🟡 FAQ Accordion JavaScript Weight (Impact: Medium, ~100–300ms INP risk)

**What's wrong:** The "Things GMs ask us." section contains **at least 12 expandable FAQ items** visible:
- "Can we cancel and keep our data?"
- "How long until we're live?"
- "Does this work with Jonas / ClubEssentials?"
- "My club is on a 5 year Jonas contract — can I still use Swoop?"
- "Does this need board approval?"
- "What rates do data if we leave?"
- "Do I need to replace my current software?"
- "What if I don't have a clean data system?"
- "Is my member's data secure?"
- "Can I try it before committing?"
- "What makes Swoop different from Clubessential's waitlist tools?"
- And several more...

If this accordion is built with a heavy component library (e.g., full Material UI Accordion, Radix with excessive bundle), or if each expansion triggers a React re-render of the entire FAQ list, INP could spike on slower devices.

**Fix:**
- Use native `<details>/<summary>` HTML elements — zero JS required, accessible by default.
- If using React/Next.js components, ensure FAQ items are **not** re-rendering siblings on expand/collapse (use `React.memo` or individual state per item).
- Estimated JS savings: 5–15KB if replacing a component library accordion.

---

### 5. 🟡 Below-Fold Content Not Lazy-Loaded (Impact: Medium, ~300–600KB wasted on initial load)

**What's wrong:** This is a very long page — at least **10 distinct sections** visible:
1. Dark hero with headline + CTA
2. "I was the GM" narrative section
3. "An extension of your team" with team photos
4. Dark stats/quote section ("Why this is hard to copy")
5. "Intelligence in action" stats cards (6 days, 91%, $312, $1.38M)
6. "Join the Founding Partner Program" CTA section
7. "From founding-partner GMs" testimonials
8. "Things GMs ask us" FAQ
9. "See what your club misses today" bottom CTA
10. Footer

Sections 4–10 are well below the fold. If all images, fonts, and JS for these sections load eagerly on initial page load, it competes with the hero LCP element for bandwidth.

**Fix:**
- Add `loading="lazy"` to all images below section 3.
- Use `content-visibility: auto` CSS on sections 5–10 to skip rendering cost until they scroll into view. This can save **200–400ms of rendering time** on mobile.
- Defer any JS animations or intersection observer triggers for stats counter animations (the "6 days", "91%", "$312", "$1.38M" cards likely have count-up animations).

---

### 6. 🟡 Stats Counter Animation JS (Impact: Medium, potential 50–100KB JS + main thread blocking)

**What's wrong:** The "Intelligence in action" section shows four metric cards: **"6 days"** (Average implementation time), **"91%"** (GMs with member retention), **"$312"** (Average revenue/member), **"$1.38M"** (Total tracked). These are commonly implemented with counter animation libraries (e.g., `countup.js`, `react-countup`) that animate from 0 to the target number on scroll.

These libraries add bundle weight and trigger main thread work during scroll.

**Fix:**
- If using `countup.js` (~4KB gzipped) — acceptable, but ensure it's **dynamically imported** and only loaded when the section enters viewport via IntersectionObserver.
- If using a heavier animation library (Framer Motion, GSAP) just for this: replace with CSS `@property` counter animation (zero JS, ~10 lines of CSS). [CSS Tricks reference](https://css-tricks.com/animating-number-counters/).
- `import('countup.js').then(...)` triggered by IntersectionObserver — don't load at page init.

---

### 7. 🟡 CLS from Dynamic Testimonial Cards (Impact: Medium, ~0.02–0.05 CLS contribution)

**What's wrong:** The "From founding-partner GMs." section shows three testimonial cards with:
- Star ratings (★★★★★)
- Quote text
- Attribution ("Scott M, Pebble…", followed by club details)

If these cards are loaded from a CMS or API call (common for testimonials), they inject into the DOM after initial render, causing layout shift. Even if static, the star rating icons (likely SVG or icon font) could cause micro-shifts as they load.

**Fix:**
- Set explicit `min-height` on the testimonial container matching the rendered height (~250–300px).
- If star icons are from an icon font, inline them as SVG to avoid font-loading shift.
- If cards are statically known at build time (which they should be for a marketing page), ensure they're in the SSR/SSG output, not client-rendered.

---

### 8. 🟢 Vercel/Next.js Image Optimization Not Fully Leveraged (Impact: Medium)

**What's wrong:** Hosted on `vercel.app` subdomain, strongly suggesting Next.js. Next.js provides `<Image>` component with automatic WebP/AVIF conversion, responsive sizing, and lazy loading. However, if team photos or any decorative images use raw `<img>` tags instead of `next/image`, they miss all of these optimizations.

**Fix:**
- Ensure all `<img>` elements use Next.js `<Image>` component.
- Configure `next.config.js` with `images: { formats: ['image/avif', 'image/webp'] }`.
- This automatically handles: format negotiation, srcset generation, lazy loading, blur placeholder.

---

### 9. 🟢 Orange CTA Buttons — Potential Reflow from Custom Styling (Impact: Low, ~0.01 CLS)

**What's wrong:** Multiple prominent orange CTA buttons visible: **"Book a walkthrough"** (hero), **"Complete the founding partner application >"** (mid-page), **"Book a 15 Minute Walkthrough"** (testimonial section), **"See what your club misses today"** (bottom CTA section). These appear to have rounded corners, specific padding, and hover states.

If button font loads late (different weight than body), the button text reflows and the button dimensions change — visible CLS.

**Fix:**
- Set explicit `min-width` and `height` on CTA buttons.
- Ensure button font-family includes a well-matched system fallback: e.g., `font-family: 'CustomSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`.
- Use `size-adjust` in `@font-face` for the fallback to match metrics.

---

### 10. 🟢 Third-Party Analytics/Tracking (Impact: Low-Medium, ~50–200ms potential)

**What's wrong:** Not directly visible in screenshot, but a B2B SaaS marketing page on Vercel almost certainly runs: Google Analytics 4 or Segment (~45KB), potentially HubSpot tracking (~100KB+), possibly Hotjar/FullStory for session recording (~60–80KB), and the Intercom/Drift chat widget if present (not visible, which is good).

No chat widget is visible in the screenshot — **this is good**. No cookie consent banner is visible either (could be US-only targeting).

**Fix:**
- Load all analytics with `defer` or via `requestIdleCallback`.
- Replace Google Analytics with **Plausible** (~1KB) or **Fathom** (~2KB) if detailed GA4 features aren't needed.
- Use `partytown` (web worker-based script isolation) for any tracking scripts — built into Next.js via `@builder.io/partytown`.
- Audit with Chrome DevTools → Network tab filtered to third-party domains.

---

## Performance Budget Recommendations

| Metric | Recommended Budget | Reasoning |
|--------|-------------------|-----------|
| **Total Page Weight** | < 800KB (transferred) | Text-heavy page with few images; no excuse for exceeding this |
| **JavaScript Bundle** | < 150KB (gzipped) | Marketing page needs minimal JS — FAQ accordion, possible analytics, scroll animations |
| **CSS** | < 30KB (gzipped), < 5KB inlined critical | Simple layout with ~5 distinct section styles |
| **Image Weight** | < 200KB total | 3 team photos + maybe 1–2 decorative elements |
| **Font Files** | < 120KB total (4 files max) | Subset serif bold + regular; sans-serif medium + regular |
| **HTTP Requests** | < 25 | Document + CSS + JS + fonts + images + analytics |
| **LCP Target** | < 2.0s (mobile), < 1.5s (desktop) | Text-based LCP is achievable under 2s with font preloading |
| **CLS Target** | < 0.05 | Achievable with explicit dimensions and font-display strategy |
| **TTFB** | < 200ms | Vercel edge network should deliver this |

---

## Measurement Recommendations

Run these specific tests to validate estimates:

1. **PageSpeed Insights** (https://pagespeed.web.dev/) — enter the Vercel URL; get field data if available, lab data for LCP/CLS/INP.
2. **WebPageTest** (https://webpagetest.org/) — run from "Dulles, VA - Moto G4 - 4G" to simulate a GM checking this on their phone at the club. Waterfall chart will reveal font-blocking and third-party impact.
3. **Chrome DevTools → Performance tab** — record page load, identify the LCP marker, check for long tasks > 50ms.
4. **Chrome DevTools → Network tab** — filter by "Font" to see exactly how many font files load and their sizes. Filter by "third-party" to audit tracking scripts.
5. **Chrome DevTools → Coverage tab** — quantify unused CSS and JS bytes (expect 40–60% unused on a single-page view if using a component framework).

---

## Summary

This Swoop landing page has strong bones for performance — it's primarily text content, uses a clean section-based layout, lives on Vercel's edge network, and doesn't appear to have heavy third-party widgets. The conversion-focused copy ("I was the GM. These were my spreadsheets.") loads above the fold, which is smart.

But the heavy reliance on custom serif typography for the LCP element, combined with a long scrolling page (~10+ sections) that likely loads everything eagerly, means mobile users on 4G could see a **3+ second LCP** with visible font swap jank. The fix path is clear: **preload the hero font, inline critical CSS, lazy-load everything below section 3, and subset all fonts.** These four changes alone could drop LCP under 2.0s and push the overall score into the 80s.
