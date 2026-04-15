# Pricing — Recommendations to Achieve 95/100

**Page:** Pricing
**URL:** http://localhost:4180/#/pricing
**Recommendations Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T02:17:16.918Z

---

Here is the comprehensive action plan to elevate the Swoop Pricing page from its current composite score of ~818/900 to an elite **867/900 (96.3 average)**. 

This plan aligns the Vercel/Vite+React 18 architecture with strict brand guidelines, persuasive UX, and technical performance budgets.

---

# Pricing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 81/100 | 95/100 | Typographic widows, component spacing, inconsistent button syntax (`--` vs `→`). |
| The GM (Buyer Persona) | 94/100 | 98/100 | Confusion over tier 3 member app, free tier demo clarity. |
| The Closer (Conversion) | 93/100 | 96/100 | "Email board" micro-conversion is buried; $499 tier card is cluttered. |
| The Speedster (Performance) | 90/100 | 96/100 | INP risk on sliders, heavy charting JS in main bundle, JS-heavy accordions. |
| The Skeptic (Trust) | 94/100 | 97/100 | SLA omissions, ambiguous "5 of 7" stat, SOC 2 timeline vagueness. |
| The Storyteller (Messaging) | 95/100 | 98/100 | Timeline contradiction (10 days vs tomorrow), clinical feature bullets. |
| The First-Timer (Clarity) | 94/100 | 97/100 | Integration list visibility, $0 tier limitations. |
| The Brand Guardian (Brand) | 85/100 | 96/100 | Severe typographic drift (missing Fraunces H2s, missing JetBrains Mono numbers). |
| The Mobile Inspector (Mobile UX) | 83/100 | 95/100 | Broken ROI slider/result loop on mobile; fine print legibility. |
| **Composite** | **809/900** | **868/900** | **Execute typographical audit, responsive reorders, and micro-copy alignment.** |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

#### Change 1: Enforce Brand Typography System (Headings & Data)
**File:** `src/landing/components/RoiCalculatorSection.jsx` & `PricingSection.jsx` & `FaqSection.jsx`
**What to change:** The H2/H3 section headers are incorrectly using Plus Jakarta Sans instead of Fraunces. Large financial/data figures are missing JetBrains Mono. 
**Current state:** `<h2 className="text-3xl font-bold">Find out exactly...</h2>` and `<div className="text-5xl">$499</div>`
**New state:**
```jsx
// Section Headers (All components)
<h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">
  Find out exactly how much dues revenue is walking out your door.
</h2>

// Number displays in Pricing and Hero
<div className="font-mono text-5xl font-bold tracking-tight text-gray-900">
  $499<span className="font-sans text-xl font-medium text-gray-500">/mo</span>
</div>
```
**Lenses fixed:** Brand Guardian (+10 pts), Architect (+5 pts)
**Effort:** Quick Win

#### Change 2: Fix Mobile ROI Calculator Layout (Broken Loop)
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** On mobile, the sliders are at the top, pushing the "$74,012" result box off-screen. Users can't see the numbers change as they drag. Reverse the flex direction on mobile.
**Current state:** `<div className="flex flex-col md:flex-row gap-8">` (Sliders first, results second).
**New state:**
```jsx
// Put the dark result box ABOVE the sliders on mobile, alongside each other on desktop
<div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 items-start">
  {/* Sliders Div... */}
  {/* Dark Result Box Div... */}
</div>
```
**Lenses fixed:** Mobile Inspector (+8 pts), Architect (+5 pts)
**Effort:** Quick Win

#### Change 3: Standardize Button Syntax & Intent
**File:** `src/landing/components/PricingSection.jsx`
**What to change:** Remove double-hyphens (`--`), establish a uniform directional arrow, and unify the commitment level to "Walkthrough" for all tiers. 
**Current state:** `<button>Book a Setup Call --</button>` and `<button>Book a Premium Walkthrough --</button>`
**New state:**
```jsx
// Use standard Lucide React icon or unicode arrow
<button className="flex w-full items-center justify-center rounded-md border border-orange-500 px-6 py-3 text-center text-sm font-medium text-orange-500 hover:bg-orange-50 transition-colors">
  Book a Walkthrough <ArrowRight className="ml-2 h-4 w-4" />
</button>
```
**Lenses fixed:** Architect (+6 pts), Closer (+3 pts), GM (+2 pts)
**Effort:** Quick Win

#### Change 4: Debounce Slider State to Protect INP
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** Ensure range sliders don't block the React main thread during drag. Use React 18's `useTransition`.
**Current state:** `onChange={(e) => setTotalMembers(e.target.value)}`
**New state:**
```jsx
import { useState, useTransition } from 'react';

// Inside component:
const [totalMembers, setTotalMembers] = useState(300);
const [isPending, startTransition] = useTransition();

// Slider handler:
const handleSliderChange = (e) => {
  startTransition(() => {
    setTotalMembers(parseInt(e.target.value, 10));
  });
};
```
**Lenses fixed:** Speedster (+4 pts)
**Effort:** Quick Win

---

### HIGH — Ship This Sprint (significant score lift)

#### Change 5: Elevate the "Email to Board" CTA
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** Upgrade the low-visibility text link into a proper secondary B2B micro-conversion button with appropriate spacing.
**Current state:** `<p className="text-xs">Not ready to book? <a href="...">Email this ROI report...</a></p>`
**New state:**
```jsx
<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <p className="text-sm text-gray-500">Not ready to book?</p>
  <button 
    onClick={handleMailTo}
    className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500"
  >
    <Mail className="mr-2 h-4 w-4 text-gray-400" />
    Email ROI report to your board
  </button>
</div>
```
**Lenses fixed:** Closer (+3 pts), Mobile Inspector (+2 pts)
**Effort:** Quick Win

#### Change 6: Increase Legibility & Contrast of "Fine Print"
**File:** `src/landing/components/RoiCalculatorSection.jsx` & `PricingSection.jsx`
**What to change:** The italicized testimonials and pricing alert boxes fail WCAG 4.5:1 and are too small for mobile (11-12px).
**Current state:** `<p className="text-[11px] text-gray-400 italic">`
**New state:**
```jsx
// Testimonial under calculator
<blockquote className="mt-6 border-l-2 border-orange-300 pl-4 text-sm text-gray-700 italic">
  “Swoop flagged the Smith family a month before they planned to quit. We comped them a dinner, had a chat, and saved <strong className="font-semibold text-gray-900">$15k</strong> in annual dues. The Board was thrilled.”
</blockquote>

// Alert Box inside $499 Tier
<div className="my-4 rounded border border-orange-200 bg-orange-50/50 p-3 text-sm text-gray-800">
  <span className="font-semibold text-orange-800">Example Alert:</span> The Smith family hasn't visited in 21 days. Suggested action: Call James Smith...
</div>
```
**Lenses fixed:** Architect (+4 pts), Mobile Inspector (+3 pts), Closer (+2 pts)
**Effort:** Quick Win

#### Change 7: Refactor FAQ to Native Zero-JS Accordions
**File:** `src/landing/components/FaqSection.jsx`
**What to change:** Remove React state toggles for the FAQ to eliminate hydration blocking and natively improve mobile tap targets.
**Current state:** `<div><button onClick={() => setOpen(!open)}>...</button>{open && <div>...</div>}</div>`
**New state:**
```jsx
<details className="group border-b border-gray-200 pb-4">
  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-gray-900 py-2">
    Do I need to replace my current software?
    <span className="transition group-open:rotate-45">
      <Plus className="h-5 w-5 text-orange-500" />
    </span>
  </summary>
  <div className="mt-4 text-gray-600">
    No. Swoop sits on top of your existing systems and connects via read-only API. We support 28 integrations across 10 categories (including Jonas, Clubessential, and Northstar).
  </div>
</details>
```
**Lenses fixed:** Speedster (+3 pts), Mobile Inspector (+2 pts), First-Timer (+1 pt)
**Effort:** Medium

#### Change 8: Fix the Hero Widow & Differentiate Anchor CTA
**File:** `src/landing/pages/PricingPage.jsx`
**What to change:** Fix the isolated "zero." on the third line of the H1. Add a down arrow to the ROI button to signify a page jump, not a page load.
**Current state:** `<h1 className="text-5xl">Stop losing... Start for zero.</h1>`
**New state:**
```jsx
<h1 className="font-serif text-5xl md:text-6xl text-balance font-bold leading-tight text-white">
  Stop losing <span className="font-mono text-orange-400">$74K</span> a year in silent member attrition. Start for&nbsp;zero.
</h1>
{/* ... */}
<a href="#roi-calculator" className="inline-flex items-center justify-center rounded bg-orange-500 px-8 py-4 text-lg font-medium text-gray-900 hover:bg-orange-400 transition-colors">
  Calculate your ROI <ArrowDown className="ml-2 h-5 w-5" />
</a>
```
**Lenses fixed:** Architect (+3 pts), Closer (+1 pt)
**Effort:** Quick Win

---

### MEDIUM — Next Sprint

#### Change 9: Resolve Copy Contradictions & Strengthen Narrative
**File:** `src/landing/components/PricingSection.jsx` & `DemoCtaSection.jsx`
**What to change:** Sync the onboarding timeline, clarify the $1499 App tier, and improve the $0 tier description.
**New Copy Mappings:**
*   **$0 Tier:** "Daily intelligence alerts. Swoop securely scans your systems to expose hidden member risks, complaints, and demand trends every morning."
*   **$499 Tier:** "Everything in Signals, plus AI-drafted intervention plans. Swoop writes the callback script or comp offer in plain English, so your team can act immediately."
*   **$1499 Tier:** "Adds the Swoop Member Utility. Track on-property member behavior via GPS and measure exact attribution from signal to save. (Does not replace your current booking app)."
*   **Footer CTA:** "Setup takes 15 minutes. Your first member risk report arrives in 10 days."
**Lenses fixed:** Storyteller (+3 pts), Skeptic (+2 pts), GM (+2 pts)
**Effort:** Quick Win (Copy only)

#### Change 10: Lazy Load ROI Chart & Add Skeleton
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** Extract the charting library (Recharts/Chart.js) dynamically so it doesn't block initial page load. 
**Current state:** `import { LineChart } from 'recharts';`
**New state:**
```jsx
import React, { Suspense } from 'react';
// Lazy load the heavy chart component
const DuesProtectedChart = React.lazy(() => import('./DuesProtectedChart'));

// Inside render:
<div className="h-64 w-full rounded border border-gray-100 bg-white p-4">
  <Suspense fallback={
    <div className="flex h-full w-full items-center justify-center bg-gray-50/50">
      <div className="h-32 w-full animate-pulse bg-gray-200 rounded"></div>
    </div>
  }>
    <DuesProtectedChart data={chartData} />
  </Suspense>
</div>
```
**Lenses fixed:** Speedster (+3 pts)
**Effort:** Medium

---

## Projected Score After All Changes

| Agent | Current | After Sprint 1 | After All Changes |
|-------|---------|---------------|------------------|
| The Architect (UI Design) | 81/100 | 92/100 | **96/100** |
| The GM (Buyer Persona) | 94/100 | 96/100 | **98/100** |
| The Closer (Conversion) | 93/100 | 96/100 | **96/100** |
| The Speedster (Performance) | 90/100 | 94/100 | **97/100** |
| The Skeptic (Trust) | 94/100 | 96/100 | **96/100** |
| The Storyteller (Messaging) | 95/100 | 98/100 | **98/100** |
| The First-Timer (Clarity) | 94/100 | 95/100 | **95/100** |
| The Brand Guardian (Brand) | 85/100 | 95/100 | **95/100** |
| The Mobile Inspector (Mobile UX) | 83/100 | 94/100 | **96/100** |
| **Composite** | **809/900** | **856/900** | **867/900** (96.3 avg) |
