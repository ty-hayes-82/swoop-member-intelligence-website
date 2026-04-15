# Pricing — Recommendations to Achieve 95/100

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:33:18.614Z

---



# Pricing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 57/100 | 95/100 | Pricing card text too small, no recommended tier badge, typographic monotony, no hover states, anemic color palette |
| The GM (Buyer Persona) | 82/100 | 95/100 | Only 1 testimonial, no club logos, no product screenshots, no feature comparison table, no phone number prominence |
| The Closer (Conversion) | 68/100 | 95/100 | No ROI-to-tier bridge, no sticky CTA, 6+ competing CTAs, no "Most Popular" badge, hero frames cost not revenue |
| The Speedster (Performance) | 62/100 | 95/100 | Calculator chart library loaded eagerly, font blocking LCP, no content-visibility, stat card CLS, no lazy boundaries |
| The Skeptic (Trust) | 62/100 | 95/100 | Unverifiable headline claims, vague stat sources, only 1 testimonial, no product screenshots, no club logos |
| The Storyteller (Messaging) | 72/100 | 95/100 | Tier descriptions are feature-listy, CTA copy generic in places, missing club journey narrative, FAQ answers flat |
| The First-Timer (Clarity) | 79/100 | 95/100 | Hero doesn't say "club" or "member", "Actions" poorly defined, no product visuals, tier features hard to scan |
| The Brand Guardian (Brand) | 72/100 | 95/100 | Pure white backgrounds instead of cream, no JetBrains Mono for figures, brass accent underused, FAQ section flat |
| **Composite** | **554/800** | **760/800** | **+206 points needed** |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Rewrite Hero Headline to Lead with Revenue Loss + Audience Clarity

**File:** `src/landing/pages/PricingPage.jsx`

**What to change:** The hero headline and subheadline text

**Current state:** "Recover your software costs in 60 days. Start for zero." — frames value in terms of software cost (self-referential), doesn't mention "club" or "member" in headline.

**New state:**
```jsx
{/* In the hero section */}
<p className="text-amber-500 uppercase tracking-widest text-sm font-semibold mb-6">
  Pricing
</p>
<h1 className="font-fraunces text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
  Your club is losing $74K a year<br className="hidden md:block" /> in silent member attrition.
  <span className="block mt-2 text-amber-400">Start recovering it for zero.</span>
</h1>
<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
  5 of 7 founding partner clubs recovered Swoop's full annual cost within 60 days
  of their first intervention (2024 cohort). Start free. Upgrade when the ROI shows
  up in your own numbers.
</p>
```

**Lenses fixed:** The Closer (+8 — reframes from cost to loss aversion), The First-Timer (+10 — "club" and "member attrition" appear in headline), The Storyteller (+6 — emotionally resonant opening), The GM (+4 — speaks their language)

**Effort:** Quick Win (<1 hr)

---

#### Change 2: Add "Most Popular" Badge and Visual Emphasis to $499/mo Tier

**File:** `src/landing/components/PricingSection.jsx`

**What to change:** The middle pricing card ($499/mo Signals + Actions) lacks any visual emphasis or recommendation badge. All three tiers appear visually equal.

**Current state:** Three equally-styled white cards side by side with no differentiation.

**New state:**
```jsx
{/* Pricing tier cards container */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

  {/* Tier 1: Signals — $0/mo */}
  <div className="bg-white rounded-2xl border border-gray-200 p-8 relative">
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Signals</p>
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-5xl font-bold text-gray-900">$0</span>
        <span className="text-gray-500 text-lg">/mo</span>
      </div>
    </div>
    <p className="text-gray-600 text-base leading-relaxed mb-6">
      See which members are pulling away — before they resign. Connect your systems
      and get weekly at-risk alerts delivered to your inbox.
    </p>
    <button className="w-full py-3.5 px-6 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold text-base hover:border-amber-500 hover:text-amber-600 transition-all duration-200">
      Get Free Daily Alerts
    </button>
    <div className="mt-8 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">What's included</p>
      {signalsFeatures.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700 text-[15px] leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Tier 2: Signals + Actions — $499/mo — RECOMMENDED */}
  <div className="bg-white rounded-2xl border-2 border-amber-500 p-8 relative shadow-xl shadow-amber-500/10 lg:-mt-4 lg:mb-4">
    {/* Most Popular badge */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
      <span className="bg-amber-500 text-gray-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
        Most Popular
      </span>
    </div>
    <div className="mb-6 mt-2">
      <p className="text-sm font-semibold text-amber-600 uppercase tracking-wide mb-1">Signals + Actions</p>
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-5xl font-bold text-gray-900">$499</span>
        <span className="text-gray-500 text-lg">/mo</span>
      </div>
    </div>
    <p className="text-gray-600 text-base leading-relaxed mb-6">
      We spot at-risk members. Then we re-engage them for you — personalized emails
      and texts, sent automatically. Your team doesn't lift a finger.
    </p>
    <button className="w-full py-3.5 px-6 rounded-xl bg-amber-500 text-gray-900 font-semibold text-base hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/25">
      Book a 30-Min Walkthrough
    </button>
    <div className="mt-8 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Everything in Signals, plus</p>
      {actionsFeatures.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700 text-[15px] leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Tier 3: Signals + Actions + Member App — $1,499/mo */}
  <div className="bg-white rounded-2xl border border-gray-200 p-8 relative">
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Signals + Actions + Member App</p>
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-5xl font-bold text-gray-900">$1,499</span>
        <span className="text-gray-500 text-lg">/mo</span>
      </div>
    </div>
    <p className="text-gray-600 text-base leading-relaxed mb-6">
      The complete intelligence platform — everything above plus a white-label member
      app with activity tracking, satisfaction scoring, and push notifications.
    </p>
    <button className="w-full py-3.5 px-6 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold text-base hover:border-amber-500 hover:text-amber-600 transition-all duration-200">
      See the Full Platform
    </button>
    <div className="mt-8 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Everything in Signals + Actions, plus</p>
      {memberAppFeatures.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
          <span className="text-gray-700 text-[15px] leading-relaxed">{feature}</span>
        </div>
      ))}
    </div>
  </div>
</div>
```

**Lenses fixed:** The Architect (+12 — visual hierarchy, card emphasis, spacing), The Closer (+10 — decoy effect, decision guidance), The First-Timer (+5 — scan clarity), The Brand Guardian (+4 — proper card system with border-radius and warm shadows)

**Effort:** Medium (half day)

---

#### Change 3: Increase Pricing Feature Text to 15-16px and Rewrite as Outcomes

**File:** `src/landing/components/PricingSection.jsx`

**What to change:** Feature list items in pricing cards — currently ~12-13px with internal product language

**Current state:** Small feature text using jargon like "AI-powered member wellness scores", "Tableau-ready data access", "Infiniquest"

**New state:**
```jsx
// Feature arrays rewritten as outcome-focused copy at readable sizes

const signalsFeatures = [
  "Weekly member risk scores — know who needs attention this week",
  "Real-time departure forecasts based on activity patterns",
  "At-risk member flagging with engagement history",
  "Connect up to 4 club systems (POS, tee sheet, billing, CRM)",
  "Board-ready retention summary emailed monthly",
];

const actionsFeatures = [
  "AI-generated outreach scripts personalized to each member",
  "Automated re-engagement emails and texts sent on your behalf",
  "Campaign tracking — see which saves worked and why",
  "Staff task lists: who to call, what to say, when to follow up",
  "14+ integrations: Jonas, Northstar, ForeTees, Club Essentials, Toast, and more",
  "Unlimited CSV imports for legacy systems",
  "Dedicated success manager for your club",
];

const memberAppFeatures = [
  "White-label member app with your club's branding",
  "Member activity tracking (dining, golf, events, fitness)",
  "Real-time satisfaction scoring from member behavior",
  "Push notifications for events, offers, and personal milestones",
  "Unlimited integrations across all club systems",
  "Priority onboarding with 48-hour launch guarantee",
];

{/* Each feature item rendered at 15px with proper spacing */}
{features.map((feature, i) => (
  <div key={i} className="flex items-start gap-3 py-1">
    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
    <span className="text-gray-700 text-[15px] leading-relaxed">{feature}</span>
  </div>
))}
```

**Lenses fixed:** The Architect (+10 — readability for older demographic), The Storyteller (+8 — outcome language vs features), The GM (+6 — operational clarity), The First-Timer (+6 — "Actions" now clearly defined)

**Effort:** Quick Win (<1 hr)

---

#### Change 4: Add Dynamic ROI-to-Pricing-Tier Bridge Below Calculator

**File:** `src/landing/components/RoiCalculatorSection.jsx`

**What to change:** Calculator output doesn't connect to a specific pricing tier. The user sees "$74,812 net savings" but has no context for which plan delivers that.

**Current state:** Calculator shows savings figures then two CTAs: "Book a Walkthrough With Your Numbers" and "Present ROI Report to my Board" — no tier recommendation.

**New state:**
```jsx
{/* Add this below the calculator output panel, above the CTAs */}
<div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
  <div className="flex items-center gap-2 mb-1">
    <TrendingUp className="w-5 h-5 text-amber-600" />
    <span className="text-sm font-semibold text-amber-800">Your projected return</span>
  </div>
  <p className="text-gray-700 text-[15px] leading-relaxed">
    At the <strong>Signals + Actions</strong> plan (${tierCost.toLocaleString()}/yr),
    your club's projected return is{' '}
    <strong className="text-amber-700">
      {roiMultiple}x
    </strong>{' '}
    — recovering{' '}
    <strong className="text-emerald-700">
      ${netSavings.toLocaleString()}
    </strong>{' '}
    in at-risk dues revenue.{' '}
    <a href="#pricing-tiers" className="text-amber-600 underline underline-offset-2 hover:text-amber-700">
      See the plan →
    </a>
  </p>
</div>

{/* Updated CTAs with improved copy and hierarchy */}
<div className="mt-8 flex flex-col sm:flex-row gap-4">
  <button className="flex-1 py-4 px-8 rounded-xl bg-amber-500 text-gray-900 font-semibold text-base hover:bg-amber-400 transition-all duration-200 shadow-lg shadow-amber-500/25">
    Book a Walkthrough With Your Numbers
  </button>
  <button className="flex-1 py-4 px-8 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold text-base hover:border-amber-500 hover:text-amber-600 transition-all duration-200 flex items-center justify-center gap-2">
    <FileText className="w-5 h-5" />
    Send This ROI Report to My Board
  </button>
</div>
```

**Lenses fixed:** The Closer (+12 — bridges motivation peak to purchase decision), The GM (+5 — contextualizes pricing in ROI), The First-Timer (+4 — clear connection between calculator and tiers), The Storyteller (+3 — narrative continuity)

**Effort:** Medium (half day)

---

#### Change 5: Add Sticky CTA Bar That Appears After Scrolling Past Calculator

**File:** `src/landing/pages/PricingPage.jsx`

**What to change:** No sticky CTA exists on this very long page (7+ scrolls). Visitors lose access to the primary action.

**Current state:** "Book a Walkthrough" only appears in the static nav header and at various fixed points in the page.

**New state:**
```jsx
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

function StickyCtaBar({ calculatorSavings }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls past ~2 viewports (calculator section)
      const scrollThreshold = window.innerHeight * 2;
      setIsVisible(window.scrollY > scrollThreshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <p className="text-gray-300 text-sm hidden sm:block">
            {calculatorSavings ? (
              <>
                Your club could recover{' '}
                <span className="text-amber-400 font-semibold">
                  ${calculatorSavings.toLocaleString()}
                </span>
                /year in at-risk dues
              </>
            ) : (
              <>
                See which members are at risk —{' '}
                <span className="text-amber-400 font-semibold">setup takes 15 minutes</span>
              </>
            )}
          </p>
          <a
            href="#book-walkthrough"
            className="flex items-center gap-2 bg-amber-500 text-gray-900 font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-amber-400 transition-colors whitespace-nowrap"
          >
            Book a 30-Min Walkthrough
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// In PricingPage.jsx, pass calculator state down:
export default function PricingPage() {
  const [calculatorSavings, setCalculatorSavings] = useState(null);

  return (
    <>
      {/* ... page sections ... */}
      <RoiCalculatorSection onSavingsChange={setCalculatorSavings} />
      {/* ... rest of page ... */}
      <StickyCtaBar calculatorSavings={calculatorSavings} />
    </>
  );
}
```

**Lenses fixed:** The Closer (+8 — captures intent at any scroll depth, personalizes with calculator data), The Architect (+4 — persistent navigation pattern), The Speedster (+2 — uses composited transform animation)

**Effort:** Medium (half day)

---

#### Change 6: Replace Pure White Backgrounds with Brand Cream/Sand + Add Brass Accents

**File:** `src/landing/pages/PricingPage.jsx`, `src/landing/components/RoiCalculatorSection.jsx`, `src/landing/components/PricingSection.jsx`, `src/landing/components/FaqSection.jsx`

**What to change:** Multiple sections use pure white (#FFFFFF) instead of brand cream (#F7F5F2) or sand (#F2ECE1). Brass accent (#B5956A) is absent.

**Current state:** ROI Calculator, Pricing Tiers, and FAQ sections all sit on identical white backgrounds creating monotonous middle third.

**New state:**
```jsx
{/* tailwind.config.js — add brand colors if not present */}
// In extend.colors:
// cream: '#F7F5F2',
// sand: '#F2ECE1',
// brass: '#B5956A',
// charcoal: '#1B1814',

{/* PricingPage.jsx — section backgrounds */}

{/* Hero — dark charcoal (already correct) */}
<section className="bg-[#1B1814] text-white">
  {/* hero content */}
</section>

{/* Stats cards — dark (already correct) */}

{/* ROI Calculator — cream background */}
<section className="bg-[#F7F5F2] py-24">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-[#B5956A] uppercase tracking-widest text-sm font-semibold mb-4">
      ROI Calculator
    </p>
    {/* ... calculator content ... */}
  </div>
</section>

{/* Testimonial + CTA bridge — sand background */}
<section className="bg-[#F2ECE1] py-16">
  {/* testimonial and dual CTAs */}
</section>

{/* "Start at zero" dark interstitial — charcoal (already correct) */}
<section className="bg-[#1B1814] py-20">
  {/* "Start at zero. Upgrade when the math shows up." */}
</section>

{/* Pricing Tiers — cream background */}
<section id="pricing-tiers" className="bg-[#F7F5F2] py-24">
  {/* pricing cards */}
</section>

{/* Zero Implementation Fees banner — charcoal */}
<section className="bg-[#1B1814] py-12">
  {/* implementation banner */}
</section>

{/* FAQ — sand background */}
<section className="bg-[#F2ECE1] py-24">
  {/* FAQ content */}
</section>

{/* Final CTA — charcoal */}
<section className="bg-[#1B1814] py-20">
  {/* final CTA */}
</section>
```

```jsx
{/* Brass accent usage — section eyebrow labels in dark sections */}
<p className="text-[#B5956A] uppercase tracking-widest text-sm font-semibold mb-4">
  The Tiers
</p>

{/* Brass divider lines above testimonial quotes */}
<div className="w-12 h-0.5 bg-[#B5956A] mb-6" />

{/* Brass accent on FAQ section eyebrow */}
<p className="text-[#B5956A] uppercase tracking-widest text-sm font-semibold mb-4">
  Pricing FAQ
</p>
```

**Lenses fixed:** The Brand Guardian (+12 — cream/sand backgrounds, brass accents throughout), The Architect (+8 — visual section differentiation, reduced monotony), The Storyteller (+3 — warm premium feel supports narrative)

**Effort:** Medium (half day)

---

#### Change 7: Fix Dark Section Text Contrast for WCAG AA + Older Demographic

**File:** `src/landing/pages/PricingPage.jsx`, `src/landing/components/DemoCtaSection.jsx`

**What to change:** Body text in dark hero section appears to be medium gray on near-black, likely below 4.5:1 contrast ratio.

**Current state:** Subheadline text in hero appears ~gray-400 (#9CA3AF) on charcoal (#1B1814) — approximately 3.8:1 ratio.

**New state:**
```jsx
{/* Hero body text — upgrade from gray-400 to gray-300 */}
<p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
  {/* gray-300 (#D1D5DB) on #1B1814 = ~10.5:1 — well above AA */}
  5 of 7 founding partner clubs recovered Swoop's full annual cost within 60 days
  of their first intervention (2024 cohort). Start free. Upgrade when the ROI shows
  up in your own numbers.
</p>

{/* Stat card sub-labels — upgrade to gray-300 */}
<p className="text-gray-300 text-sm leading-relaxed mt-2">
  {/* Card description text */}
</p>

{/* "Start at zero" interstitial body text */}
<p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
  Launch in 14 days. Zero IT required. Cancel at the end of any month.
</p>

{/* Final CTA section subtext */}
<p className="text-gray-300 text-lg leading-relaxed">
  Setup takes 15 minutes. Your first member brief arrives tomorrow morning.
</p>
```

**Lenses fixed:** The Architect (+5 — WCAG AA compliance), The Speedster (+2 — accessibility audit pass), The GM (+3 — readability for 45-65 demographic)

**Effort:** Quick Win (<1 hr)

---

#### Change 8: Add Multiple Testimonials with Headshots, Club Logos Section

**File:** `src/landing/components/PricingSection.jsx` (new sub-component), `src/landing/components/RoiCalculatorSection.jsx`

**What to change:** Only one testimonial exists on the entire page. No club logos. No product credibility for $1,499/mo commitment.

**Current state:** Single quote from "Jarvis McDonald, GM" with no headshot, buried between calculator and pricing tiers.

**New state:**
```jsx
{/* New component: TrustBar — add below hero stat cards */}
function TrustBar() {
  return (
    <section className="bg-[#F7F5F2] py-12 border-b border-gray-200/50">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
          Trusted by private clubs across the country
        </p>
        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Club logos — replace with actual club logos */}
          {clubLogos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              className="h-10 object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

{/* Enhanced testimonial between calculator and pricing — now a proper component */}
function TestimonialSection() {
  const testimonials = [
    {
      quote: "Swoop flagged 23 members showing disengagement signals before any of them had contacted us. We re-engaged 14 with personal outreach and saved $215K in annual dues. The Board was thrilled.",
      name: "Jamie McDonald",
      title: "General Manager",
      club: "Pinetree Country Club",
      members: "500+ members",
      headshot: "/images/testimonials/jamie-mcdonald.jpg",
      stat: "$215K saved",
    },
    {
      quote: "We started on the free tier just to see the data. Within two weeks, I knew exactly which members we were about to lose. Upgrading to Signals + Actions was the easiest budget decision I've ever made.",
      name: "Sarah Chen",
      title: "COO",
      club: "Lakewood Golf & Country Club",
      members: "340 members",
      headshot: "/images/testimonials/sarah-chen.jpg",
      stat: "14-day payback",
    },
    {
      quote: "I presented the ROI report to my board on a Tuesday. By Thursday we had approval. Swoop paid for itself before the next board meeting.",
      name: "Robert Patterson",
      title: "General Manager",
      club: "The Metropolitan Club",
      members: "650+ members",
      headshot: "/images/testimonials/robert-patterson.jpg",
      stat: "Board approved in 48hrs",
    },
  ];

  return (
    <section className="bg-[#F2ECE1] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-12 h-0.5 bg-[#B5956A] mx-auto mb-6" />
        <p className="text-center text-[#B5956A] uppercase tracking-widest text-sm font-semibold mb-12">
          What GMs are saying
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-amber-600 font-mono text-2xl font-bold mb-4">
                {t.stat}
              </p>
              <blockquote className="text-gray-700 text-[15px] leading-relaxed mb-6 italic font-fraunces">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img
                  src={t.headshot}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  loading="lazy"
                />
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.title}, {t.club}</p>
                  <p className="text-gray-400 text-xs">{t.members}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Lenses fixed:** The Skeptic (+15 — multiple named testimonials with photos, club logos), The GM (+10 — named clubs, named GMs, specific dollar outcomes, board context), The Closer (+5 — social proof at decision point), The Storyteller (+5 — real club journeys told)

**Effort:** Structural (1-2 days — requires sourcing real testimonials and headshots)

---

#### Change 9: Use JetBrains Mono for All Financial Figures + Stat Numbers

**File:** `src/landing/components/PricingSection.jsx`, `src/landing/components/RoiCalculatorSection.jsx`, `src/landing/components/IndustryStatsSection.jsx`

**What to change:** Pricing figures ($0, $499, $1,499) and stat card numbers (65%, $74K, 5 of 7) and calculator outputs ($120,000, $80,000) appear to use the body sans-serif instead of JetBrains Mono.

**Current state:** All numerical figures rendered in Plus Jakarta Sans (or equivalent body font).

**New state:**
```jsx
{/* Ensure JetBrains Mono is loaded — add to index.html or font config */}
// <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="preload" as="style" />

{/* tailwind.config.js */}
// fontFamily: { mono: ['JetBrains Mono', 'monospace'] }

{/* Pricing tier prices */}
<span className="font-mono text-5xl font-bold text-gray-900">$499</span>
<span className="text-gray-500 text-lg font-mono">/mo</span>

{/* Stat cards */}
<span className="font-mono text-5xl font-bold text-white">65%</span>
<span className="font-mono text-5xl
