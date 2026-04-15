# Pricing — Recommendations to Achieve 95/100

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Recommendations Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T00:07:19.941Z

---

Here is the comprehensive action plan to elevate the Swoop Club Intelligence Pricing page to a >95/100 composite score across all eight evaluation lenses. 

---

# Pricing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 84/100 | 95/100 | Lack of manual text inputs on calculator, poor mobile scaling, low contrast text. |
| The GM (Buyer Persona) | 93/100 | 96/100 | Tier 3 "Member App" feature sounds like a risky rip-and-replace operation. |
| The Closer (Conversion) | 91/100 | 96/100 | Competing CTAs on pricing cards, missing scroll-intent cues in hero. |
| The Speedster (Performance) | 88/100 | 95/100 | Slider recalculation locking main thread, heavy client-side rendering. |
| The Skeptic (Trust) | 82/100 | 96/100 | Glaring timeline contradictions (14 days vs 10 days vs tomorrow), 2026 typo. |
| The Storyteller (Messaging) | 94/100 | 98/100 | Missed opportunities for emotive storytelling in bottom CTA and FAQ eyebrows. |
| The First-Timer (Clarity) | 92/100 | 96/100 | The exact product category ("Member retention software") is hidden in the footer. |
| The Brand Guardian (Brand) | 95/100 | 98/100 | Hero data points missing brand Monospace font, generic gray eyebrows in cards. |
| **Composite** | 719/800 | 770/800 | |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

#### Change 1: Unify Timelines & Fix Time-Traveler Typo
**File:** `src/landing/components/PricingSection.jsx` & `src/landing/pages/PricingPage.jsx`
**What to change:** The contradictory setup timelines ("Live in 14 days" banner vs "arrives in 10 days" on Tier 2 vs "tomorrow morning" on Bottom CTA) and the footer copyright year.
**Current state:** Text reads "Your first system connects in minutes. Your first brief arrives in 10 days." (Pricing) and "© 2026" (Footer).
**New state:**
*In `PricingSection.jsx` (Tier 2 subtext):*
```jsx
<p className="text-sm text-gray-500 mt-4">
  Setup takes 15 minutes. Your first member brief arrives tomorrow morning.
</p>
```
*In `PricingPage.jsx` (Footer block):*
```jsx
<p className="text-gray-400 text-sm">© {new Date().getFullYear()} Swoop Golf, Inc. All rights reserved.</p>
```
**Lenses fixed:** Skeptic (+12 pts)
**Effort:** Quick Win (<1 hr)

#### Change 2: Add Direct Number Inputs to ROI Calculator
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** GMs need precise inputs. Convert slider-only controls to a paired slider + number input field. Wrap state updates in React 18 `startTransition` to prevent INP locking on slider drag.
**Current state:** `<input type="range" ... />` with a static text label showing the number.
**New state:**
```jsx
{/* Replace static value with synchronized number input */}
<div className="flex justify-between items-center mb-2">
  <label className="text-sm font-bold text-gray-700 tracking-wider uppercase">Total Members</label>
  <input 
    type="number" 
    value={members} 
    onChange={(e) => handleSliderChange('members', e.target.value)}
    className="w-20 text-right text-brand-orange font-mono font-bold border-b border-gray-200 focus:border-brand-orange focus:outline-none bg-transparent"
  />
</div>
<input 
  type="range" 
  min="100" max="1000" 
  value={members} 
  onChange={(e) => handleSliderChange('members', e.target.value)}
  className="w-full accent-brand-orange" 
/>
```
*(Ensure `handleSliderChange` utilizes standard debouncing or `startTransition` for the chart rendering)*
**Lenses fixed:** Architect (+6 pts), Speedster (+5 pts), GM (+2 pts)
**Effort:** Medium (half day)

#### Change 3: Inject Instant Clarity & Brand Typography in Hero
**File:** `src/landing/pages/PricingPage.jsx`
**What to change:** Add an eyebrow kicker to the Hero for the First-Timer, change the CTA to a downward anchor, and fix the font of the stat numbers.
**Current state:** H1 starts immediately. Stat numbers use Sans-Serif. CTA says "Calculate your ROI →".
**New state:**
```jsx
{/* Add above the H1 */}
<span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
  AI Member Intelligence for Private Clubs
</span>
<h1 className="...">Recover your software costs...</h1>

{/* Update the Button */}
<a href="#roi-calculator" className="bg-brand-orange text-[#181818] font-bold px-8 py-4 rounded-md hover:scale-[0.98] transition-transform flex items-center justify-center">
  Calculate your club's ROI ↓
</a>

{/* Update Stat Cards Typography */}
<div className="text-5xl font-mono text-brand-orange mb-2">65%</div>
```
**Lenses fixed:** First-Timer (+4 pts), Closer (+3 pts), Brand Guardian (+3 pts)
**Effort:** Quick Win (<1 hr)

#### Change 4: Standardise Pricing CTAs & Elevate Tier Copy
**File:** `src/landing/components/PricingSection.jsx`
**What to change:** Clarify Tier 1 & Tier 3 descriptions to remove jargon and "rip and replace" fears, and standardise CTAs to specific booking actions.
**Current state:** Tier 1 has dry description. Tier 3 mentions "attribution from signal to save" and "See the Full Platform →". 
**New state:**
```jsx
{/* Tier 1 Description */}
<p className="text-gray-600 mb-6">Stop guessing. Swoop safely scans your existing systems to surface at-risk members, hidden complaints, and demand signals in your inbox every morning.</p>

{/* Tier 3 Description */}
<p className="text-gray-600 mb-6">Adds the Swoop member app—track exactly what members do on property with GPS, send targeted push notifications, and measure the exact dollar value of every membership you save.</p>

{/* Tier 3 CTA */}
<button className="w-full border-2 border-gray-200 text-gray-800 font-bold py-3 rounded-md hover:bg-gray-50 active:scale-95 transition-all">
  Book an App Demo →
</button>
```
**Lenses fixed:** Storyteller (+2 pts), GM (+1 pt), Closer (+2 pts)
**Effort:** Quick Win (<1 hr)

---

### HIGH — Ship This Sprint (significant score lift)

#### Change 5: Elevate the "Talk to a GM" Peer Trust CTA
**File:** `src/landing/components/DemoCtaSection.jsx` & `src/landing/pages/PricingPage.jsx`
**What to change:** Pull the peer reference link out of the tiny footer copyright bar and place it directly under the primary conversion buttons.
**Current state:** Buried in the footer.
**New state:**
```jsx
{/* Add directly under the primary 'Book a 30-min Walkthrough' button in DemoCtaSection */}
<div className="mt-4 text-center">
  <a href="/contact" className="text-gray-400 hover:text-white text-sm underline underline-offset-4 transition-colors">
    Not ready? Talk to a GM who uses Swoop →
  </a>
</div>
```
**Lenses fixed:** Skeptic (+2 pts), Closer (+2 pts)
**Effort:** Quick Win (<1 hr)

#### Change 6: Storyteller Headline Rewrites & Eyebrow Branding
**File:** `src/landing/components/DemoCtaSection.jsx`, `src/landing/components/FaqSection.jsx`, `src/landing/components/PricingSection.jsx`
**What to change:** Rewrite passive headlines and fix off-brand generic gray sub-labels in pricing cards.
**Current state:** "Ready to see which of your members are at risk?", "Things GMs ask us.", and `text-gray-400` on "TECHNICAL".
**New state:**
```jsx
{/* DemoCtaSection.jsx */}
<h2 className="text-4xl font-serif text-white mb-4">Don't wait for the resignation email to find out who's unhappy.</h2>

{/* FaqSection.jsx */}
<h2 className="text-3xl font-serif text-[#181818] mb-8">Questions to satisfy your Board (and your IT guy).</h2>

{/* PricingSection.jsx - Change eyebrow color to Brand Brass */}
<h4 className="text-xs font-bold tracking-wider uppercase text-[#B5956A] mb-4">Technical</h4>
```
**Lenses fixed:** Storyteller (+2 pts), Brand Guardian (+1 pt)
**Effort:** Quick Win (<1 hr)

#### Change 7: Architect Accessibility Polish (Disclaimer & Button Hovers)
**File:** `src/landing/components/RoiCalculatorSection.jsx`
**What to change:** The disclaimer text is too small/italicized for the GM demographic. The secondary button lacks hover feedback. 
**Current state:** `<p className="text-xs italic text-gray-400">`
**New state:**
```jsx
{/* Disclaimer Update */}
<p className="text-sm text-gray-500 mt-4 max-w-lg mx-auto">
  How this is calculated: At-risk revenue × 65% early-intervention retention rate (Pinetree CC founding-partner data, Q4 2023) – Swoop annual cost = net dues recovered.
</p>

{/* Secondary Button Update */}
<button className="border-2 border-[#181818] text-[#181818] font-bold px-8 py-3 rounded-md hover:bg-gray-50 active:scale-95 transition-all">
  Email this ROI report to my Board →
</button>
```
**Lenses fixed:** Architect (+2 pts), GM (+1 pt)
**Effort:** Quick Win (<1 hr)

---

### MEDIUM — Next Sprint

#### Change 8: Mobile Sticky Calculator Output & Pricing Accordions
**File:** `src/landing/components/RoiCalculatorSection.jsx` & `src/landing/components/PricingSection.jsx`
**What to change:** On mobile, the ROI outputs vanish below the fold when sliders are adjusted, and the pricing cards create extreme scroll fatigue. 
**Current state:** Standard CSS grid stacking without sticky positioning or mobile accordion views.
**New state:**
*In `RoiCalculatorSection.jsx`, attach mobile sticky positioning to the dark output card:*
```jsx
<div className="bg-[#1A1A1A] text-white p-8 rounded-xl sticky bottom-4 lg:static z-10 shadow-2xl lg:shadow-none">
  {/* Output content */}
</div>
```
*(For Pricing Section, refactor the mobile view to use tabs or accordions to hide the deep feature lists beneath the primary price/CTA unless expanded).*
**Lenses fixed:** Architect (+3 pts), Closer (+1 pt)
**Effort:** Structural (1-2 days)

#### Change 9: Number Counter Animations & Native FAQ Details
**File:** `src/landing/components/RoiCalculatorSection.jsx` & `src/landing/components/FaqSection.jsx`
**What to change:** Add an easing number counter to the ROI outputs so they "spin" to the new value rather than flash instantly. Convert FAQ to semantic HTML to fix CLS layout shifts.
**Current state:** Instant state swaps for math; custom JS/React state for FAQ accordions.
**New state:**
Implement a lightweight `useCountUp` hook for the calculator numbers.
In `FaqSection.jsx`, replace React toggle state with native `<details className="group">` and `<summary>` tags configured with Tailwind `group-open` modifiers.
**Lenses fixed:** Architect (+1 pt), Speedster (+2 pts)
**Effort:** Medium (half day)

---

## Projected Score After All Changes

| Agent | Current | After Sprint 1 | After All Changes |
|-------|---------|---------------|------------------|
| The Architect (UI Design) | 84/100 | 92/100 | **96/100** |
| The GM (Buyer Persona) | 93/100 | 96/100 | **96/100** |
| The Closer (Conversion) | 91/100 | 96/100 | **97/100** |
| The Speedster (Performance) | 88/100 | 93/100 | **95/100** |
| The Skeptic (Trust) | 82/100 | 96/100 | **96/100** |
| The Storyteller (Messaging) | 94/100 | 98/100 | **98/100** |
| The First-Timer (Clarity) | 92/100 | 96/100 | **96/100** |
| The Brand Guardian (Brand) | 95/100 | 99/100 | **99/100** |
| **Composite** | 719/800 | 766/800 | **773/800** |
