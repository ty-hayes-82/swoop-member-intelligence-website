# Pricing — Recommendations to Achieve 95/100

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Recommendations Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T01:44:47.605Z

---

Here is the comprehensive technical plan to elevate the Swoop Club Intelligence Pricing page to a >95/100 composite score. 

---

# Pricing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 82/100 | 96/100 | ROI chart lacks data visualization rigor; component spacing below calculator is disjointed; middle pricing card lacks visual elevation. |
| The GM (Buyer Persona) | 92/100 | 97/100 | Apprehension about App integration (replace vs. sit on top?) and mixed messaging regarding setup timelines (minutes vs. 2 weeks). |
| The Closer (Conversion) | 92/100 | 98/100 | Major funnel leak: $1,499 CTA drives away from booking. Board email link loses a critical lead capture opportunity. |
| The Speedster (Performance) | 92/100 | 96/100 | Custom font loading blocks LCP; heavy calculator DOM rendering threatens mobile INP. |
| The Skeptic (Trust) | 92/100 | 95/100 | "Connects in minutes" claim strains credibility for legacy systems like Jonas; exact AI workflow locations need clarification. |
| The Storyteller (Messaging) | 95/100 | 98/100 | Missing a "Day-in-the-Life" GM emotional anchor before the FAQ; minor microcopy enhancements needed. |
| The First-Timer (Clarity) | 94/100 | 97/100 | Unclear how the $0 alerts are actually delivered (email vs. dashboard). |
| The Brand Guardian (Brand) | 96/100 | 99/100 | Uncompiled arrows (`--`) and inconsistent CTA casing/iconography break brand polish. |
| The Mobile Inspector (Mobile UX)| 87/100 | 96/100 | Micro-typography is too small (<14px) and FAQ/Link tap targets violate 44x44px minimums. |
| **Composite** | 822/900 | 872/900 | **50 Point Gap** |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

#### Change 1: Standardize CTA Funnel & Stop Lead Leakage
**File:** `src/landing/components/PricingSection.jsx`
**What to change:** The $1,499 tier sends users away ("See the Full Platform"). The $0 tier lacks an arrow and sets the wrong expectation ("Get Free Daily Alerts"). Fix casing on the middle CTA.
**Current state:** 
* $0 Tier CTA: `<button>Get Free Daily Alerts</button>`
* $499 Tier CTA: `<button>Book a 30-Min Walkthrough →</button>`
* $1499 Tier CTA: `<button>See the Full Platform →</button>`
**New state:**
```jsx
// $0 Tier (Secondary outline style)
<button className="w-full py-3 px-4 border border-gray-300 rounded-md font-medium text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
  Book a Setup Call →
</button>

// $499 Tier (Primary solid style)
<button className="w-full py-3 px-4 bg-orange-500 rounded-md font-bold text-[#1B1814] hover:bg-orange-400 transition-colors flex items-center justify-center gap-2">
  Book a 30-min Walkthrough →
</button>

// $1499 Tier (Secondary outline style)
<button className="w-full py-3 px-4 border border-gray-300 rounded-md font-medium text-gray-800 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
  Book a Premium Walkthrough →
</button>
```
**Lenses fixed:** The Closer (+6 pts), The Brand Guardian (+3 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 2: Gate the "Email to Board" Link for Lead Capture
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** Convert the `mailto:` text link into a button that opens a lead capture modal, and fix the mobile tap-target padding. Change the copy to reflect consensus selling.
**Current state:**
```jsx
<p className="text-sm">Not ready to book? <a href="mailto:..." className="text-orange-500 italic underline">Email this ROI report to your board →</a></p>
```
**New state:**
```jsx
<div className="py-4 mt-2 border-t border-gray-100 flex flex-col items-center gap-3">
  <p className="text-sm text-gray-600">Not ready to book?</p>
  <button 
    onClick={() => setBoardModalOpen(true)}
    className="text-orange-600 font-semibold hover:text-orange-700 underline underline-offset-4 decoration-orange-200 hover:decoration-orange-500 transition-all text-base py-2 px-4"
  >
    Send these projected savings to your Board →
  </button>
  {/* Include BoardReportModal component here */}
</div>
```
**Lenses fixed:** The Closer (+5 pts), The Storyteller (+1 pt), The Mobile Inspector (+3 pts)
**Effort:** Medium (half day - requires building the modal)

#### Change 3: Clarify the Pricing Tier Deliverables (Addressing GM Apprehension)
**File:** `src/landing/components/PricingSection.jsx`
**What to change:** Add clarifying microcopy to answer exactly how alerts arrive, where drafts live, and if the app replaces current tech. Update middle-tier copy for stronger value anchoring.
**Current state:** Feature lists in the pricing cards.
**New state:**
```jsx
// $0 Tier Additions (in the feature list)
<li className="flex gap-2 text-sm text-gray-600">
  <CheckIcon className="w-5 h-5 text-orange-600 shrink-0" />
  <span>Daily member health scores <strong>(via email digest)</strong></span>
</li>

// $499 Tier Copy Update (replacing "so your team acts instead...")
<p className="text-sm text-gray-600 mb-6">
  Everything in Signals, plus Swoop drafts the exact callback scripts and comp offers needed to save the member. <strong>Stop sorting spreadsheets; start saving dues.</strong>
</p>

// $1,499 Tier Clarification (in the feature list)
<li className="flex gap-2 text-sm text-gray-600">
  <CheckIcon className="w-5 h-5 text-orange-600 shrink-0" />
  <span>Swoop member app included <strong>(integrates with existing club apps)</strong></span>
</li>
```
**Lenses fixed:** The GM (+3 pts), The First-Timer (+3 pts), The Skeptic (+2 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 4: Fix Mobile UX & Tap Targets in FAQ
**File:** `src/landing/components/FaqSection.jsx`
**What to change:** Ensure the entire FAQ row is clickable (44px min height), not just the icon. Ensure the first FAQ defaults to open to answer the biggest B2B objection instantly.
**Current state:** Custom React state with padding only on the icon or text.
**New state:**
```jsx
{/* Use native details/summary or ensure full-width block tap targets */}
<details className="group border-b border-gray-200" open={isFirstItem}>
  <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 px-2 hover:bg-gray-50 transition-colors">
    <span className="text-gray-900 text-base md:text-lg pr-4">Do I need to replace my current software?</span>
    <span className="transition group-open:rotate-45">
      <PlusIcon className="w-6 h-6 text-orange-600 shrink-0" />
    </span>
  </summary>
  <div className="text-gray-600 text-sm md:text-base pb-6 px-2 animate-fadeIn">
    No. Swoop sits on top of your existing systems and connects via API. We support 28 integrations across 10 categories.
  </div>
</details>
```
**Lenses fixed:** The Mobile Inspector (+5 pts), The Closer (+1 pt)
**Effort:** Quick Win (< 1 hr)

---

### HIGH — Ship This Sprint (significant score lift)

#### Change 5: Redesign ROI Chart to Build Analytical Trust
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** Replace the generic "Dues Protected" graphic with an SVG or charting library component (like Recharts) that features Y-axis labels and dashed gridlines.
**Current state:** A generic ascending line with "Jan" and "Dec" labels.
**New state:** *(Conceptual structural implementation)*
```jsx
<div className="relative h-64 w-full mt-8 border-l border-b border-gray-300 pt-4 pr-2">
  {/* Y-Axis Labels */}
  <div className="absolute -left-12 top-0 flex flex-col justify-between h-full text-xs text-gray-500 font-mono py-2">
    <span>$120k</span>
    <span>$60k</span>
    <span>$0</span>
  </div>
  {/* Horizontal Gridlines */}
  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
    <div className="w-full border-t border-dashed border-gray-200"></div>
    <div className="w-full border-t border-dashed border-gray-200"></div>
    <div className="w-full border-t border-dashed border-gray-200"></div>
  </div>
  {/* Dynamic SVG Line path dependent on slider state */}
  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path 
       d={`M0,100 C40,90 60,${100 - (revenueRecovered / maxRevenue) * 100} 100,${100 - (revenueRecovered / maxRevenue) * 100}`} 
       fill="none" 
       stroke="#F3922D" 
       strokeWidth="3" 
       className="drop-shadow-md transition-all duration-300"
    />
  </svg>
  {/* X-Axis Labels */}
  <div className="absolute -bottom-6 w-full flex justify-between text-xs text-gray-500 font-mono">
    <span>Jan</span>
    <span>Dec</span>
  </div>
</div>
```
**Lenses fixed:** The Architect (+8 pts), The Skeptic (+2 pts)
**Effort:** Medium (half day)

#### Change 6: Elevate the "Founding-Partner" Pricing Card
**File:** `src/landing/components/PricingSection.jsx`
**What to change:** Apply a visual Y-axis offset and an elevated drop shadow to the middle pricing card to make the target tier physically dominate the page.
**Current state:** All three cards sit flat with a faint border, with only the top pill highlighting the middle card.
**New state:**
```jsx
{/* Add these classes to the middle card wrapper */}
<div className="relative flex flex-col p-8 border border-orange-200 rounded-2xl bg-white shadow-2xl -translate-y-2 md:-translate-y-4 z-10">
  {/* Card Content */}
</div>
```
**Lenses fixed:** The Architect (+4 pts), The Closer (+2 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 7: Align Timelines & Soften Integration Copy
**File:** `src/landing/components/DemoCtaSection.jsx` & `PricingSection.jsx`
**What to change:** Resolve the "minutes vs. 2 weeks" cognitive dissonance and soften the Jonas claim. Fix the uncompiled arrow (`--`).
**Current state:** Footer says "Most clubs are live in under 2 weeks - No IT team required..." but Free tier says "connects in minutes." CTA has `--`.
**New state:**
```jsx
// In the subheadline / footer band:
<p className="text-gray-500 text-sm mt-6">
  Systems connect via read-only API in minutes. Your first member intelligence brief arrives in under 2 weeks.
</p>

// In the Demo CTA at the bottom:
<button className="bg-orange-500 hover:bg-orange-400 text-[#1B1814] font-bold py-3 px-8 rounded-md transition-colors">
  Book a 30-min Walkthrough →
</button>
```
**Lenses fixed:** The Storyteller (+2 pts), The Brand Guardian (+2 pts), The Skeptic (+1 pt)
**Effort:** Quick Win (< 1 hr)

#### Change 8: Insert the "Day-in-the-Life" GM Narrative & Subhead
**File:** `src/landing/components/FaqSection.jsx`
**What to change:** Add a short storytelling block above the FAQ to ground the financial math in emotional relief. 
**Current state:** Just the header "Things GMs ask us."
**New state:**
```jsx
<div className="text-center max-w-2xl mx-auto mb-12">
  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Things GMs ask us.</h2>
  <p className="text-lg text-gray-600 mb-6 italic">
    "Imagine sitting down for your Friday management meeting. Instead of guessing why F&B revenue is down, you hand your team a list of 5 at-risk families and the exact scripts to bring them back. That's the power of Club Intelligence."
  </p>
  <p className="text-sm font-semibold text-orange-600 tracking-wider uppercase">
    You're putting your reputation on the line. Here's how we protect it.
  </p>
</div>
```
**Lenses fixed:** The Storyteller (+3 pts)
**Effort:** Quick Win (< 1 hr)

---

### MEDIUM — Next Sprint (Performance & Structural)

#### Change 9: Preload Fonts & Protect Mobile INP
**File:** `index.html` (Vite) and `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** Add a preload tag for the Fraunces display font to eliminate FOIT (Flash of Invisible Text) and ensure LCP stays under 1.2s. Debounce the React state for the calculator sliders so INP stays under 200ms.
**New state:**
```html
<!-- In index.html <head> -->
<link rel="preload" href="/fonts/Fraunces-Bold.woff2" as="font" type="font/woff2" crossorigin>
```
```jsx
// In RoiCalculatorSection.jsx
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

// Ensure the state update attached to the onChange event of the slider is debounced
const handleSliderChange = useCallback(
  debounce((value, type) => {
    // update heavy graph state here
  }, 16), // ~60fps target
  []
);
```
**Lenses fixed:** The Speedster (+4 pts)
**Effort:** Medium (half day)

#### Change 10: Contrast & Micro-typography Fixes
**File:** Global or multiple component files.
**What to change:** Bump tiny disclaimers to 14px. Darken orange text against white backgrounds for WCAG AA compliance. Anchor the Hero button.
**New state:** 
* Ensure `text-orange-500` on white backgrounds is changed to `text-orange-600` (e.g., `#EA580C` in default Tailwind) for better contrast.
* Change the Hero "Calculate your ROI →" button to "Calculate your ROI ↓" to indicate an anchor link.
* In the Footer disclaimer: Change `text-xs text-gray-400` to `text-sm text-gray-500` (14px).
* In the Calculator disclaimer ("How this is calculated"): Change `text-[11px] text-gray-400` to `text-sm text-gray-500`.

**Lenses fixed:** The Mobile Inspector (+4 pts), The Architect (+2 pts)
**Effort:** Quick Win (< 1 hr)

---

## Projected Score After All Changes

| Agent | Current | After Sprint 1 | After All Changes |
|-------|---------|---------------|------------------|
| The Architect (UI Design) | 82/100 | 96/100 | 96/100 |
| The GM (Buyer Persona) | 92/100 | 95/100 | 95/100 |
| The Closer (Conversion) | 92/100 | 98/100 | 98/100 |
| The Speedster (Performance) | 92/100 | 92/100 | 96/100 |
| The Skeptic (Trust) | 92/100 | 96/100 | 96/100 |
| The Storyteller (Messaging) | 95/100 | 98/100 | 98/100 |
| The First-Timer (Clarity) | 94/100 | 97/100 | 97/100 |
| The Brand Guardian (Brand) | 96/100 | 99/100 | 99/100 |
| The Mobile Inspector (Mobile UX) | 87/100 | 96/100 | 96/100 |
| **Composite** | 822/900 | 867/900 | **871/900** |
