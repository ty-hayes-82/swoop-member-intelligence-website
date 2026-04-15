# Home / Landing — Recommendations to Achieve 95/100

**Page:** Home / Landing
**URL:** http://localhost:4173/#/landing
**Recommendations Model:** gemini-3.1-pro-preview
**Generated:** 2026-04-15T01:42:56.067Z

---

Here is the comprehensive remediation plan to elevate the Swoop Club Intelligence landing page to a 95+/100 composite score based on the 9-lens critique.

---

# Home / Landing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 82/100 | 95/100 | Contrast in dark sections, dense grids, UI card padding. |
| The GM (Buyer Persona) | 94/100 | 95/100 | Missing data privacy explicitly above fold/in flow. |
| The Closer (Conversion) | 90/100 | 95/100 | Missing CTAs on $0 and $1,499 tiers, inconsistent button styles. |
| The Speedster (Performance) | 94/100 | 95/100 | LCP font delay, lack of below-fold lazy loading. |
| The Skeptic (Trust) | 92/100 | 95/100 | "Free Forever" paradox needs reframing, delivery mechanisms unclear. |
| The Storyteller (Messaging) | 94/100 | 95/100 | Occasional B2B cliches, academic jargon in integrations. |
| The First-Timer (Clarity) | 95/100 | 95/100 | How the SMS/brief actually gets delivered to the end user. |
| The Brand Guardian (Brand) | 95/100 | 95/100 | JetBrains Mono missing on pricing, inconsistent CTA arrows/colors. |
| The Mobile Inspector (Mobile UX) | 62/100 | 95/100 | Critical layout collapse in feature blocks, mobile tap targets. |
| **Composite** | 798/900 | 855/900 | |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

#### Change 1: Fix Mobile Layout Collapse (Feature Blocks & Footer)
**File:** `src/landing/components/ProblemSection.jsx` and `src/landing/components/LandingFooter.jsx`
**What to change:** The "SEE IT", "FIX IT", "PROVE IT" blocks are squishing to 2-columns on mobile. Footer links are mistap risks.
**Current state:** Hardcoded horizontal layouts (e.g., `flex`, `grid-cols-2`) and inline footer links.
**New state:**
```jsx
// In ProblemSection.jsx (Apply to the container holding text/image pairs)
// Change from: <div className="flex gap-8 ...">
<div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center ...">

// In LandingFooter.jsx (Bottom link row)
// Change from: <div className="flex gap-4 text-xs">
<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm items-center justify-center sm:justify-start">
```
**Lenses fixed:** Mobile Inspector (+30 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 2: Add Missing Pricing CTAs & Apply Brand Font
**File:** `src/landing/components/PricingSection.jsx`
**What to change:** The $0/mo and $1,499/mo tiers have no buttons. The prices are currently in the sans-serif font, missing the `JetBrains Mono` requirement.
**Current state:** No CTA under Free/Enterprise. Prices use `font-sans`. Free tier description is dry.
**New state:**
```jsx
{/* $0 Tier Update */}
<h3 className="text-4xl font-mono text-gray-900">$0/mo</h3>
<p className="mt-4 text-gray-600">Total Visibility. We monitor your systems 24/7 and deliver a daily digest of at-risk members, unlogged complaints, and sudden demand spikes.</p>
<button className="w-full mt-8 bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-3 px-6 rounded-md transition-colors">
  Start Data Audit
</button>

{/* $499 Tier Font Fix */}
<h3 className="text-4xl font-mono text-gray-900">$499/mo</h3>

{/* $1,499 Tier Update */}
<h3 className="text-4xl font-mono text-gray-900">$1,499/mo</h3>
{/* ... existing description ... */}
<button className="w-full mt-8 bg-orange-500 text-white hover:bg-orange-600 font-semibold py-3 px-6 rounded-md transition-colors">
  Book a Walkthrough
</button>
```
**Lenses fixed:** The Closer (+5 pts), The Brand Guardian (+5 pts), The Skeptic (+2 pts), The Storyteller (+1 pt)
**Effort:** Quick Win (< 1 hr)

#### Change 3: Standardize CTAs & Fix Ghost Button
**File:** `src/landing/components/MemberExperienceSection.jsx` & `src/landing/components/IntegrationsSection.jsx`
**What to change:** The CTA under the emotional Member Experience section is an outlined ghost button. Integrations changes CTA text to "Test Swoop on your data". Arrows are inconsistent.
**Current state:** `<button className="border border-gray-800...">Book a Walkthrough</button>` and `<button>Test Swoop on your data →</button>`
**New state:**
```jsx
// In MemberExperienceSection.jsx - Upgrade to primary
<button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors inline-flex items-center gap-2">
  Book a Walkthrough
</button>

// In IntegrationsSection.jsx - Standardize Language
<button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors inline-flex items-center gap-2">
  Book a Walkthrough
</button>
```
*Note: Ensure NO arrows inside the button text globally to adhere to Brand Guardian findings, unless strictly used for text links.*
**Lenses fixed:** The Closer (+3 pts), The Brand Guardian (+3 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 4: Fix Dark Mode Contrast & Kicker Legibility
**File:** `src/landing/components/HeroSection.jsx` & `src/landing/components/ProblemSection.jsx`
**What to change:** Dark grey text on charcoal (`#1B1814`) fails WCAG AA. Kickers ("SEE IT") are too small for the GM demographic.
**Current state:** `<p className="text-gray-400 text-lg">` and `<span className="text-[10px] text-brass uppercase">`
**New state:**
```jsx
// Hero body copy (lighten text)
<p className="text-gray-200 text-lg max-w-2xl mx-auto">
  Most software tells you what happened. Swoop tells you what to do next.
</p>

// Kickers in all dark sections (increase size and brightness)
<span className="text-xs tracking-widest text-[#D4AF37] font-semibold uppercase mb-2 block">
  See It
</span>
```
**Lenses fixed:** The Architect (+8 pts)
**Effort:** Quick Win (< 1 hr)

---

### HIGH — Ship This Sprint (significant score lift)

#### Change 5: Rewrite Copy Clichés & Academic Jargon
**File:** `src/landing/components/AgentRevealSection.jsx` & `src/landing/components/IntegrationsSection.jsx`
**What to change:** Replace "team that never sleeps" and "Cross-System Behavioral Correlation".
**Current state:** Existing headings.
**New state:**
```jsx
// In AgentRevealSection.jsx
<h2 className="text-3xl md:text-4xl font-serif text-white">
  Four dedicated specialists. Zero added headcount.
</h2>

// In IntegrationsSection.jsx
<h3 className="text-lg font-semibold text-white mb-2">Connect the Dots Across Departments</h3>
<p className="text-gray-300">
  See how a member's dining habits predict their tee times, or how a staffing shortage in the Grill Room impacts pro shop revenue.
</p>

// Rollout Text in IntegrationsSection.jsx
<p className="text-gray-300">
  Week 1: We connect your systems and let Swoop learn your club's rhythms. Week 2: We configure your custom alerts and hand you the keys. Zero IT headaches.
</p>
```
**Lenses fixed:** The Storyteller (+5 pts), The Skeptic (+2 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 6: Increase Padding in 4-Col "Agents" Grid & Integration List
**File:** `src/landing/components/AgentRevealSection.jsx` & `src/landing/components/IntegrationsSection.jsx`
**What to change:** The 4 agents are packed too tightly (`gap-4` or similar). Integrations categories lack vertical rhythm.
**Current state:** Tight grids causing "walls of text".
**New state:**
```jsx
// In AgentRevealSection.jsx
// Change from: <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-16">

// In IntegrationsSection.jsx (Category spacing)
// Change from: <div className="space-y-4"> for each category
<div className="flex flex-col gap-8 md:gap-12">
```
**Lenses fixed:** The Architect (+4 pts)
**Effort:** Quick Win (< 1 hr)

#### Change 7: Make "See a sample brief" a Functional CTA
**File:** `src/landing/components/HeroSection.jsx`
**What to change:** Convert the secondary text link into a ghost button that opens a lead-capture modal, rather than acting as a dead or anchor link.
**Current state:** `<a href="#" className="text-white hover:text-orange-500">See a sample brief</a>`
**New state:**
```jsx
<button 
  onClick={() => setIsSampleModalOpen(true)} 
  className="border-2 border-gray-400 text-white hover:border-white hover:bg-white/10 font-semibold py-3 px-6 rounded-md transition-colors inline-flex items-center gap-2"
>
  See a sample brief
</button>
```
**Lenses fixed:** The Closer (+3 pts), The GM (+3 pts)
**Effort:** Medium (Requires adding a simple React Modal component for email capture)

---

### MEDIUM — Next Sprint

#### Change 8: Add Anti-Anxiety Microcopy & Security Reassurance
**File:** `src/landing/components/HeroSection.jsx` & `src/landing/components/DemoCtaSection.jsx`
**What to change:** Add explicit mention of data privacy near the top, and clarify the sales process at the bottom.
**Current state:** Footer only mentions NDA/SOC 2 in tiny print. Bottom CTA has no microcopy.
**New state:**
```jsx
// In HeroSection.jsx (Trust subtext below buttons)
<p className="text-sm text-gray-400 mt-6 font-medium">
  No credit card · NO IT lift · Live in 2 weeks · <span className="text-white">Zero member data sold or shared.</span>
</p>

// In DemoCtaSection.jsx (Below final Book button)
<p className="text-sm text-gray-400 mt-4">
  No high-pressure sales. Just a 30-minute look at how Swoop maps to your exact club data.
</p>
```
**Lenses fixed:** The Skeptic (+3 pts), The GM (+2 pts), The Closer (+1 pt)
**Effort:** Quick Win (< 1 hr)

#### Change 9: Performance Foundations (LCP Preload)
**File:** `index.html` (or `src/App.jsx` if injecting into helmet)
**What to change:** The main Fraunces serif and Plus Jakarta Sans fonts are delaying text render.
**New state:**
```html
<head>
  <!-- Add inside <head> before stylesheets -->
  <link rel="preload" href="/fonts/Fraunces-Variable.woff2" as="font" type="font/woff2" crossorigin="anonymous">
  <link rel="preload" href="/fonts/PlusJakartaSans-Variable.woff2" as="font" type="font/woff2" crossorigin="anonymous">
</head>
```
*Also ensure CSS `@font-face` declarations include `font-display: swap;`.*
**Lenses fixed:** The Speedster (+3 pts)
**Effort:** Quick Win (< 1 hr)

---

## Projected Score After All Changes

| Agent | Current | After Sprint 1 | After All Changes |
|-------|---------|---------------|------------------|
| The Architect (UI Design) | 82/100 | 90/100 | **95/100** |
| The GM (Buyer Persona) | 94/100 | 97/100 | **99/100** |
| The Closer (Conversion) | 90/100 | 97/100 | **99/100** |
| The Speedster (Performance) | 94/100 | 94/100 | **97/100** |
| The Skeptic (Trust) | 92/100 | 96/100 | **99/100** |
| The Storyteller (Messaging) | 94/100 | 99/100 | **99/100** |
| The First-Timer (Clarity) | 95/100 | 95/100 | **97/100** |
| The Brand Guardian (Brand) | 95/100 | 100/100 | **100/100** |
| The Mobile Inspector (Mobile UX) | 62/100 | 95/100 | **95/100** |
| **Composite** | 798/900 | 863/900 | **880/900** |
