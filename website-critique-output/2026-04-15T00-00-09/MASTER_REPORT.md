# Swoop Club Intelligence — Website Audit Master Report
**Date:** April 14, 2026
**Pages Audited:** 5 | **Agents:** 8 (The Eight Lenses) | **Max Composite:** 800/800 | **Total Findings:** 168

---

## 1. Executive Summary
Swoop Club Intelligence operates an elite B2B SaaS website that brilliantly bridges the traditional heritage of private country clubs with the sharp, data-confident reality of modern AI. **The single biggest thing working well** is the copywriting and narrative architecture; the deep industry fluency (e.g., explicitly naming legacy Jonas servers, focusing on dues protection, and proactively addressing GM/Board anxieties) builds massive buyer trust instantly. **The single most important thing to fix** is a series of easily avoidable "trust killers" and conversion leaks—specifically, egregious typos ("Clul", "© 2026"), a major privacy red flag (naming "James Whitfield" in a churn case study), and fragmented CTA funnels that confuse users between self-serve PLG and sales-led motions. Fix the foundational details, and this site will convert at a top-tier rate.

## 2. Overall Site Health Dashboard

| Page | Architect | GM | Closer | Speedster | Skeptic | Storyteller | First-Timer | Brand Guardian | Composite /800 | Top Issue |
|------|----------|----|--------|-----------|---------|-------------|-------------|----------------|----------------|-----------|
| Home | 81 | 91 | 88 | 84 | 79 | 92 | 95 | 96 | **706/800** | Funnel CTA fragmentation & a11y contrast failures. |
| Platform | 86 | 88 | 90 | 87 | 81 | 93 | 92 | 84 | **701/800** | Missing display fonts, 5-col mobile table, no human social proof. |
| Pricing | 84 | 93 | 91 | 88 | 82 | 94 | 92 | 95 | **719/800** | Calculator missing text inputs; timeline contradictions. |
| About | 88 | 87 | 91 | 88 | 80 | 94 | 93 | 92 | **713/800** | "James Whitfield" privacy breach; conflicting CTA narrative. |
| Contact | 86 | 91 | 93 | 85 | 71 | 92 | 88 | 92 | **698/800** | Typo ("Clul"), "2026" copyright, form physically separated from value prop. |
| **Site Avg** | **85** | **90** | **91** | **86** | **79** | **93** | **92** | **92** | **707/800** | |

## 3. Cross-Page Patterns
*These are systemic issues. Fixing them once lifts the conversion rate of the entire site.*

### Critical Patterns (Fix First)
*   **Careless Trust Breaches:** A "© 2026" footer copyright, a typo ("Clul") on the primary lead capture form, "Audit Active" SOC 2 status, and an actual member name ("James Whitfield") used in a churn scenario severely damage the premium credibility established by the copy.
*   **Accessibility & Contrast Failures:** The primary brand orange fails WCAG AA standards when used as text against the dark charcoal background (`#1B1814`) or as a background with white text. Recessive gray text is frequently illegible.
*   **Brand Typography Defaulting:** The design system mandates *JetBrains Mono* for all numerical/financial data and *Fraunces* for display headlines, but developers are frequently defaulting to *Plus Jakarta Sans* across the Platform and About pages.
*   **Main Thread Hydration Blocking (INP Risk):** As a Next.js/React application, large static sections (like FAQs and pricing grids) are triggering expensive client-side hydration, creating input lag when users try to interact with CTAs or the ROI calculator.
*   **Unclear Conversion Motion:** The site trains users to "Book a Walkthrough" (Sales-led), but periodically introduces "Get Free Alerts" or "Test on your data" (PLG), causing choice paralysis and form abandonment when expectations mismatch.

### Positive Patterns (Protect and Replicate)
*   **Exceptional Objection Handling:** Proactive callouts like "GM Approval Required," "Read-only API (even legacy Jonas servers)," and "Take a dollar number to the board. Not a feeling." expertly neutralize buyer anxiety.
*   **Text-First LCP:** By avoiding massive, 5MB lifestyle hero images, the site renders incredibly fast, relying on elegant typography to command attention above the fold. 
*   **Pricing Transparency:** Openly publishing the "$0/mo" and "$499/mo" tiers builds immediate goodwill in an industry plagued by "Contact Us for Pricing" black boxes.
*   **Value-Based Framing:** The "Not a Pitch Deck" angle and the interactive ROI calculator completely reshape the buyer journey from an adversarial sales process to a collaborative consulting engagement.

## 4. Page-by-Page Priority List

### Home / Landing
1. **Standardize Bottom-of-Funnel CTAs:** Unify the Pricing section. If "Get Free Alerts" requires a walkthrough, change the button to "Book Walkthrough." Do not mix self-serve expectations with sales-led reality. *(Impact: High | Closer)*
2. **Fix Dark Mode A11y Failures:** Lighten the orange CSS variable used for text against dark backgrounds to pass WCAG 4.5:1. GMs are an older demographic; illegible text kills momentum. *(Impact: High | Architect)*
3. **Elevate Human Social Proof:** The copy is excellent, but B2B buyers need visual shorthand. Add a "Trusted by..." logo farm of 4-6 prestigious clubs directly under the Hero. *(Impact: High | Closer/Skeptic)*

### Platform
1. **Fix Global Typography Mapping:** Reapply the Fraunces (Serif) font to all H1s/H2s. Currently, it defaults to a heavy sans-serif, breaking the premium club aesthetic. *(Impact: High | Brand Guardian)*
2. **Restructure 5-Column Comparison Table for Mobile:** Do not rely on horizontal scroll or shrink-to-fit for the competitor comparison table on viewports <768px. Convert to a stacked-card layout. *(Impact: High | Architect)*
3. **Lazy-Load Dashboard UIs:** Add `loading="lazy"` and `decoding="async"` to the heavy dark-mode dashboard graphics below the fold to protect initial load bandwidth. *(Impact: Medium | Speedster)*

### Pricing
1. **Add Text Inputs to the ROI Calculator:** Do not force exact-number buyers (GMs/Controllers) to use imprecise sliders for "Total Members" or "Average Dues". Add direct text input fields. *(Impact: High | Architect/First-Timer)*
2. **Lock "Net Revenue Gain" on Mobile:** When the calculator stacks on mobile, the output number drops below the fold. Make the output sticky while the user drags the inputs. *(Impact: High | Architect)*
3. **Eliminate Timeline Contradictions:** Standardize the rollout promise. The page currently promises "14 days," "10 days," and "tomorrow morning." Pick one and align all copy. *(Impact: High | Skeptic)*

### About
1. **Remove Privacy Red Flag ("James Whitfield"):** Replace the real member name with a clear pseudonym and an asterisk (`*name changed for privacy`), or use a generic title. Publishing real churn data is a massive security red flag for GMs. *(Impact: Critical | Skeptic)*
2. **Anchor the Hero CTA to the Footer Form:** Clicking the top "Book a Walkthrough" should smooth-scroll the user to the pristine 3-field form at the bottom, rather than opening a new page or modal. *(Impact: High | Closer)*
3. **Reconfigure 4-Column "Proof" Grid:** The data metrics in the "Intelligence in Action" section are cramped. Break them into a 2x2 grid to allow the $1.38M figures to breathe. *(Impact: Medium | Architect)*

### Contact / Demo
1. **Fix Form Typos & Copyright:** Change "Clul" to "Club" in the form placeholder, and update "© 2026" to the current year. These careless errors on the final conversion step destroy security credibility. *(Impact: Critical | Skeptic/Architect)*
2. **Move Form / Add Anchor in Hero:** The value prop is in the top white section, but the form is hidden in the bottom dark section. Left-align the hero text and add a "Get My Plan ↓" anchor button to connect desire with action. *(Impact: High | Closer)*
3. **Implement Preload for Serif Font:** Add `<link rel="preload" as="font">` for the Fraunces font to prevent the text-heavy LCP from flashing invisibly. *(Impact: High | Speedster)*

## 5. Consolidated Dev Plan

*Prioritized based on $18K ACV. Assuming fixing a core funnel leak recovers 1-2 lost demos per month ($36k+ pipeline).*

### Sprint 1 — Quick Wins (< 1 day each, ship this week)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **Fix typos & privacy risk:** Update "Clul" to "Club", "2026" to "202X", and anonymize "James Whitfield". | High pipeline protection | Content/Eng | Skeptic (Contact/About) |
| 2 | **Fix WCAG Contrast:** Adjust hex codes for Orange-on-Dark and Gray-on-Dark text to pass 4.5:1. | Low friction drop | Design/Eng | Architect (Home/Contact) |
| 3 | **Typography alignment:** Force JetBrains Mono on all financial data points and restore Fraunces to Platform H1s. | Premium brand trust | Eng/Design | Brand (All) |
| 4 | **Add preload tags:** `<link rel="preload">` for primary Serif to instantly fix FOIT and LCP times. | Improved bounce rate | Eng | Speedster (All) |
| 5 | **Standardize CTA phrasing:** Pick one conversion action (e.g., "Book a Walkthrough") and apply universally. | Higher CTA CTR | Content | Closer/Brand (All) |

### Sprint 2 — High-Impact Fixes (1-5 days each)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **ROI Calculator UX:** Add direct text inputs alongside sliders; make output card sticky on mobile screens. | High ($36k+ pipeline/mo) | Eng/UX | Architect (Pricing) |
| 2 | **Contact Page Flow:** Add an anchor CTA button in the Contact hero to auto-scroll users to the dark form. | Direct conversion lift | Eng | Closer (Contact) |
| 3 | **Logo Farm / Social Proof:** Add a visual banner of 4-6 club logos directly beneath the hero on Home/Platform. | Trust/Conversion lift | Design | Skeptic/Closer (Home) |
| 4 | **Convert FAQs to native `<details>`:** Strip heavy JS from accordions to fix layout shifts and INP. | Mobile UX stability | Eng | Speedster (About/Pricing) |

### Sprint 3 — Structural Changes (1-2 weeks each)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **RSC / Hydration Fix:** Refactor static sections (Pricing, Footer) to React Server Components to eliminate main-thread blocking. | Core Web Vitals pass | Eng | Speedster (All) |
| 2 | **Mobile Comparison Table:** Redesign the 5-column Platform table into an accordion or stacked-card view for <768px. | Mobile bounce reduction | Design/Eng | Architect (Platform) |
| 3 | **Form / CRM Abstraction:** Route the 3-field contact form through a serverless edge function to remove heavy CRM scripts from the client. | INP / Speed lift | Eng | Speedster (Contact) |

### Backlog — Strategic Improvements (next quarter)
| # | Finding | Impact ($) | Owner | Evidence |
|---|---------|-----------|-------|---------|
| 1 | **Visual Product UI/UX:** Create an interactive, anonymized "Sample Morning Brief" modal so users can *see* the output without booking a call. | High PLG potential | UX/Product | First-Timer (Contact) |
| 2 | **Integration Deep Dives:** Create dedicated pages/pop-overs explaining exactly *how* the read-only Jonas API works to satisfy IT diligence. | Reduced sales cycle | Content | GM/Skeptic (Platform) |

## 6. Brand Coherence Summary
**Overall Score: 91.8 / 100.** The site feels distinctly and consistently like Swoop across all 5 pages. It successfully navigates the difficult balance between a heritage country club aesthetic (Fraunces serif, charcoal/brass colors) and a high-tech data platform. **The most common brand deviation** is typographic fallback: developers are missing the strict application of *JetBrains Mono* for numerical data and allowing the sans-serif to hijack display headers. **The single fix with the highest impact** is standardizing the CTA button patterns (casing, arrow usage, and exact wording) across the entire site to establish a singular, confident conversion path.

## 7. Quick Wins vs. Structural Fixes Summary

**Quick Wins (Ship this week):**
*   Fix the "Clul" and "2026" typos on the Contact page.
*   Anonymize "James Whitfield" to neutralize the privacy red flag.
*   Lighten the orange CSS text variable to pass WCAG 4.5:1 on dark backgrounds.
*   Add `<link rel="preload">` to the `<head>` for your custom fonts.
*   Unify all mixed "Free Alerts" / "Test on Data" buttons to point to the core "Book a Walkthrough" motion.

**Structural Fixes (Next quarter):**
*   Add text-input fields to the ROI calculator and design a sticky mobile output view.
*   Refactor long, static marketing blocks into React Server Components to eliminate INP lag.
*   Redesign the 5-column competitor matrix on the Platform page for mobile viewports.
*   Build a visual "Sample Morning Brief" modal to satisfy First-Timer curiosity visually.
*   Offload marketing and CRM scripts from the main thread using Partytown or edge functions.

## 8. Confidence & Methodology Note
*   **Confidence Level:** High for persuasive architecture, brand fidelity, and layout. Medium for performance and technical UX.
*   **Methodology Limitations:** This audit was conducted via visual/DOM analysis and screenshot captures. Specific Core Web Vitals (LCP, INP, CLS) and main-thread blocking times are highly educated estimates based on Vercel/Next.js architecture patterns.
*   **Next Steps for Validation:** To sharpen these recommendations, implement Real User Monitoring (RUM) for INP metrics specifically around the ROI Calculator, run cross-browser testing on the orange/dark contrast ratios, and deploy session recording (e.g., PostHog/Hotjar) on the Contact page to measure exactly where users abandon the form.