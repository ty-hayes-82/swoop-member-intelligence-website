# Swoop Club Intelligence — Website Audit Master Report
**Date:** April 14, 2026
**Pages Audited:** 5 | **Agents:** 9 (The Eight Lenses + Mobile UX) | **Max Composite:** 800/800 | **Total Findings:** 45

---

## 1. Executive Summary
Swoop Club Intelligence has a profoundly effective B2B marketing foundation. The site masterfully leverages hyper-specific industry empathy, deep operational fluency, and aggressive risk-reversal to build trust with a notoriously skeptical audience (Club GMs). **The single biggest thing working well is the narrative copy**—it reads like it was written by a peer, not a software company. **The single most important thing to fix is catastrophic mobile grid failures**; multi-column layouts on the Home and About pages currently compress side-by-side on 390px screens, completely destroying legibility and blocking conversion paths for mobile researchers.

## 2. Overall Site Health Dashboard

| Page | Architect | GM | Closer | Speedster | Skeptic | Storyteller | First-Timer | Brand Guardian | Composite /800 | Top Issue |
|------|----------|----|--------|-----------|---------|-------------|-------------|----------------|----------------|-----------|
| Home | 82 | 94 | 90 | 94 | 92 | 94 | 95 | 95 | **736/800** | Mobile grid collapse failure (squeezed text) |
| Platform | 86 | 94 | 90 | 84 | 86 | 94 | 94 | 97 | **725/800** | CLS risk from unconstrained UI mockups |
| Pricing | 82 | 92 | 92 | 92 | 92 | 95 | 94 | 96 | **735/800** | CTA expectation mismatch on top tier ($1,499) |
| About | 84 | 95 | 91 | 94 | 82 | 94 | 94 | 91 | **725/800** | Future copyright date (2026) killing trust |
| Contact| 80 | 92 | 90 | 89 | 80 | 89 | 92 | 81 | **693/800** | "15 vs 30 min" contradiction & contrast fails |
| **Site Avg**| **83** | **93** | **91** | **91** | **86** | **93** | **94** | **92** | **723/800** | |

*(Note: The Mobile Inspector scores—averaging 83/100—are excluded from the 800-point composite but inform the priority roadmap below).*

## 3. Cross-Page Patterns
*Systemic issues and wins observed across 3+ pages.*

### Critical Patterns (Fix First)
*   **Mobile Grid Squeezing:** Desktop 2-column and 4-column layouts (Home features, Platform "Fix It", About "Moat") lack mobile stacking rules. They squish into 190px columns on mobile, rendering text illegible.
*   **CTA Expectation Mismatches:** Buttons frequently change verbs mid-funnel ("See Full Platform" vs "Book Walkthrough") or promise instant downloads ("Get My Custom Plan") but link to a calendar booking. 
*   **Web Font LCP Blocking:** The custom sans-serif and Fraunces serif fonts are delaying the Largest Contentful Paint (LCP) by 300-800ms due to missing `<link rel="preload">` tags in the document head.
*   **Dark Mode Accessibility Failures:** Small grey and orange text on the deep charcoal backgrounds (specifically in footers and the Contact page) fail WCAG 4.5:1 contrast requirements.
*   **Sloppy Trust Artifacts:** A "© 2026" footer copyright, mismatched physical addresses, and generic blue UI icons undermine the highly premium, data-secure positioning.

### Positive Patterns (Protect and Replicate)
*   **Hyper-Specific Industry Empathy:** Using precise terminology ("Legacy Jonas servers", "Tee sheet leakage", "Twilight gaps") generates massive instant credibility with GMs.
*   **Radical Risk Reversal:** "Zero IT Lift," "Mutual NDA," "AES-256," and "Data deleted in 30 days" systematically destroy the hardest B2B sales objections. 
*   **Premium Color/Type Discipline:** The 60/30/10 palette (Charcoal, Cream, Orange) and the 3-font system (Fraunces, Plus Jakarta, JetBrains Mono) successfully bypass the "generic SaaS" look for a high-end club aesthetic.

## 4. Page-by-Page Priority List

### Home / Landing
1. **Fix Mobile Column Layouts:** Force the "SEE IT", "FIX IT", and "PROVE IT" sections to stack vertically (`flex-col`) on screens < 768px. *(Impact: Saves mobile bounce rate).*
2. **Add Missing Pricing CTAs:** Add action buttons to the $0/mo and $1,499/mo pricing tiers. Currently, only the middle tier has a button, stranding ready-to-act buyers. *(Impact: Direct conversion leak).*
3. **Fix Dark Mode Contrast:** Lighten the grey body copy and small kickers in the hero and footer to pass WCAG AA standards for an older demographic.

### Platform
1. **Assign Image Dimensions:** Hardcode width/height attributes on the intricate dark-mode dashboard mockups to prevent severe Cumulative Layout Shift (CLS) as they load. *(Impact: Core Web Vitals pass).*
2. **Anchor the Hero Spatially:** Add a visual asset (abstract UI card) below the primary hero CTA to break up the text wall and immediately signal "software."
3. **Clarify CTA Verbiage:** Change text links like "See these six capabilities with your club's data" to "Book a call to map your numbers" so users don't expect a self-serve interactive tool.

### Pricing
1. **Unify CTA Destinations:** Change the $1,499/mo tier CTA from "See the Full Platform" to "Book a Premium Walkthrough." Do not send high-intent buyers backward into an informational funnel. *(Impact: High-ACV pipeline preservation).*
2. **Upgrade the ROI Chart Component:** Replace the decorative "Dues Protected" graphic with a chart containing real axes and gridlines that updates dynamically when sliders move.
3. **Gate the ROI Email Tool:** Turn the `mailto:` link ("Email this ROI report to your board") into a 2-field lead capture modal to trap shadow-funnel intent.

### About
1. **Fix the "Moat" Mobile Overlap:** Stack the right-column data pills (46, 12 mo, #1) vertically on mobile. They currently overlap heavily with paragraph text.
2. **Constrain Reading Lines:** Apply a `max-width: 65ch` wrapper to the "I was the GM" founder story. Long line-lengths cause reading fatigue and drop-off.
3. **Correct Trust Errors:** Immediately fix the "© 2026" footer date and verify the legal safety of the "#1 Jonas Integration Partner" claim before launch.

### Contact / Demo
1. **Resolve Timeline Contradictions:** Standardize the copy. The page currently jumps erratically between promising a "15-minute" output and a "30-minute" walkthrough. Pick 30 minutes and unify. 
2. **Align Form Expectations:** Change the form button from "Get My Custom Retention Plan" (implies instant PDF download) to "Request My 30-Minute Walkthrough" (sets correct booking expectation).
3. **Dark Mode Form Styling:** Restyle the blinding `#FFFFFF` form inputs to a translucent dark grey with light borders so they don't break the immersive dark-mode aesthetic.

## 5. Consolidated Dev Plan

*Assumptions: $18K ACV. A 5% lift in demo completion rate conservatively equals 1 net-new deal/month ($18K).*

### Sprint 1 — Quick Wins (< 1 day each, ship this week)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Align Contact CTA text with booking reality. | +$18k/mo | Copy/Marketing | Closer (Contact) |
| 2 | Add missing CTA buttons to $0 and $1.5k tiers. | +$18k/mo | Dev | Closer (Home) |
| 3 | Fix "15 min vs 30 min" copy contradictions. | +$5k/mo | Copy | Skeptic (Contact) |
| 4 | Fix WCAG contrast fails on dark backgrounds. | Usability | Design/Dev | Architect (Home) |
| 5 | Update "2026" copyright & verify Jonas claims. | Trust | Marketing | Skeptic (About) |

### Sprint 2 — High-Impact Fixes (1-5 days each)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Apply `flex-col` to broken mobile grids (Home/About).| +$36k/mo | Dev | Mobile Inspector |
| 2 | Gate the ROI calculator "Email to Board" link. | +$18k/mo | Dev | Closer (Pricing) |
| 3 | Add `<link rel="preload">` for LCP fonts. | SEO/UX | Dev | Speedster (All) |
| 4 | Restyle blinding white inputs on dark Contact form. | Bounce Rate | Design/Dev | Architect (Contact) |
| 5 | Ensure mobile typography min size is 14px-16px. | Usability | Dev | Mobile Inspector |

### Sprint 3 — Structural Changes (1-2 weeks each)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Upgrade ROI chart to interactive data-viz (axes).| +$18k/mo | Dev/Design | Architect (Pricing) |
| 2 | Explicitly set W/H attributes on all UI mockups. | SEO/CLS | Dev | Speedster (Platform) |
| 3 | Offload CRM/Analytics scripts to Web Worker. | INP/SEO | Dev | Speedster (Contact) |
| 4 | Build dedicated mobile view for comparison table. | Usability | Design/Dev | Architect (Platform) |

### Backlog — Strategic Improvements (next quarter)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | Create mobile-specific zoomed crops for UI images. | UX | Design | Mobile (Home) |
| 2 | Add "Before/After Board Meeting" visual narrative. | Conviction | Copy/Design | Storyteller (Platform) |
| 3 | Subset font files to Latin-only to reduce payload. | Perf | Dev | Speedster (Pricing) |

## 6. Brand Coherence Summary
Overall, the site feels exceptionally, distinctly like "Swoop." The Brand Guardian rated it a 92/100, noting that the tone, the 60/30/10 charcoal/cream/orange palette, and the operational specificities build a highly premium, non-generic SaaS identity. The most common deviations are **typographical inconsistencies**: the H2 display headlines incorrectly bounce between Fraunces (serif) and Plus Jakarta Sans, and critical financial figures on the Contact/Pricing pages fail to utilize the mandated JetBrains Mono font. Enforcing strict typographical mapping in your CSS framework (e.g., all `.h2` = Fraunces, all `.data-point` = JetBrains Mono) will instantly unify the brand identity across all pages.

## 7. Quick Wins vs. Structural Fixes Summary

**Quick Wins (Ship this week):**
*   Add CTA buttons to the $0 and $1,499 pricing tiers.
*   Fix the 15 vs 30-minute copy contradiction on the Contact page.
*   Update the Contact page button from "Get Custom Plan" to "Book Walkthrough".
*   Fix all WCAG contrast failures (light grey on dark grey).
*   Correct the 2026 footer copyright date.

**Structural Fixes (Next month):**
*   Rewrite the CSS logic for multi-column grids to properly stack on mobile.
*   Refactor the Pricing ROI chart to feature dynamic Y-axis data rendering.
*   Implement web font preloading and offload third-party CRM scripts from the main thread.
*   Create specific mobile-zoomed image crops for intricate UI dashboards.
*   Build a responsive logic specifically for the complex competitor matrix table.

## 8. Confidence & Methodology Note
*   **Performance Metrics:** Core Web Vitals (LCP, CLS, INP) in this report are mathematically estimated based on DOM depth, asset weight, and Vercel edge infrastructure. Run a live Lighthouse CI test on staging to capture precise millisecond timing.
*   **Static Limitations:** Interaction elements (like hover states, accordion JavaScript weight, and exact mobile zooming) were deduced from static captures and DOM architecture. 
*   **Next Steps:** Validate the "Pricing Expectation Mismatch" theory by running a heatmapping tool (Hotjar/Clarity) on the Pricing page to see if users click "See Full Platform" and subsequently bounce without booking.