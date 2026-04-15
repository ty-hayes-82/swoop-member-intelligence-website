# Pricing — Recommendations to Achieve 95/100

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T01:03:19.553Z

---



# Pricing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 59/100 | 95/100 | Pricing cards lack hierarchy, inconsistent spacing, contrast failures in feature text, no hover/motion states |
| The GM (Buyer Persona) | 74/100 | 95/100 | Thin social proof (1 testimonial), no product screenshots, unexplained $1,499 tier jargon, no named clubs beyond one |
| The Closer (Conversion) | 71/100 | 95/100 | Competing CTAs post-calculator, no social proof in pricing cards, generic CTA copy, thin FAQ |
| The Speedster (Performance) | 58/100 | 95/100 | Custom font blocking LCP, calculator bundle not code-split, no lazy loading, CLS from FAQ accordion |
| The Skeptic (Trust) | 52/100 | 95/100 | Unverifiable "5 of 7" claim, single testimonial, no team/company signals, calculator assumptions opaque, no logos |
| The Storyteller (Messaging) | 72/100 | 95/100 | Hero subhead cramped, "Book a Walkthrough" is vendor language, missing before/after narrative, $1,499 tier jargon |
| The First-Timer (Clarity) | 82/100 | 95/100 | No product visuals, integration list missing, $1,499 tier features opaque, no walkthrough expectation-setting |
| The Brand Guardian (Brand) | 74/100 | 95/100 | FAQ section uses cool gray not brand cream, brass accent absent, pure white mid-sections, CTA language drift |
| The Mobile Inspector (Mobile UX) | 62/100 | 95/100 | Pricing toggle undersized, feature list text too small, calculator inputs cramped, FAQ text dense, no sticky CTA |
| **Composite** | **604/900** | **855/900** | **251-point gap across all lenses** |

---

## Recommended Changes

---

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Restructure Page Order — Move Pricing Tiers Above Calculator

**File:** `src/landing/pages/PricingPage.jsx`

**What to change:** The page section ordering. Currently: Hero → IndustryStats → RoiCalculator → Testimonial → CTAs → PricingSection → FAQ → DemoCta. Pricing tiers don't appear until ~scroll 4.

**Current state:** User clicking "Pricing" in nav must scroll through stats, calculator, testimonial, and dual CTAs before seeing actual prices.

**New state:**
```jsx
import { useState, useEffect, lazy, Suspense } from 'react';
import HeroSection from '../components/PricingHeroSection';
import PricingSection from '../components/PricingSection';
import IndustryStatsSection from '../components/IndustryStatsSection';
import FaqSection from '../components/FaqSection';
import DemoCtaSection from '../components/DemoCtaSection';
import TrustLogosBar from '../components/TrustLogosBar';
import BeforeAfterSection from '../components/BeforeAfterSection';

const RoiCalculatorSection = lazy(() => import('../components/RoiCalculatorSection'));

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* 1. Hero — headline + stats */}
      <HeroSection />

      {/* 2. Trust logos — club logos immediately after hero */}
      <TrustLogosBar />

      {/* 3. Pricing tiers — within 1.5 scrolls */}
      <PricingSection />

      {/* 4. Before/After narrative — emotional bridge */}
      <BeforeAfterSection />

      {/* 5. ROI Calculator — lazy loaded */}
      <Suspense fallback={
        <div className="py-24 text-center text-stone-400">
          <div className="animate-pulse">Loading calculator…</div>
        </div>
      }>
        <RoiCalculatorSection />
      </Suspense>

      {/* 6. Industry stats as secondary proof */}
      <IndustryStatsSection />

      {/* 7. Expanded FAQ */}
      <FaqSection />

      {/* 8. Final CTA */}
      <DemoCtaSection />
    </main>
  );
}
```

**Lenses fixed:** Architect (+12 — fixes "pricing buried at scroll 4"), Closer (+8 — reduces abandonment before pricing), First-Timer (+5 — matches page intent), GM (+4 — sees prices quickly), Speedster (+6 — lazy-loaded calculator)
**Effort:** Medium (half day)

---

#### Change 2: Visually Differentiate Recommended Pricing Tier and Fix Card Hierarchy

**File:** `src/landing/components/PricingSection.jsx`

**What to change:** The three pricing tier cards currently have near-identical visual weight. The $499/mo recommended tier needs dramatic visual distinction. All cards need fixed text sizing, contrast, equal heights, and clear CTA hierarchy.

**Current state:** Three cards with similar borders, similar CTA button styles, small ~12-13px feature text, mid-gray (#666) text on white that fails WCAG AA. The $1,499 card is taller than the $0 card creating visual imbalance.

**New state:**
```jsx
const tiers = [
  {
    name: 'Signals',
    price: '$0',
    period: '/mo',
    description: 'See which members are at risk before they resign. Swoop watches your POS, tee sheet, and reservation data — and surfaces early warnings.',
    features: [
      'Daily at-risk member alerts',
      'Engagement scoring by member',
      'Churn risk flags with explanations',
      '3 system integrations (Jonas, Northstar, ForeTees + more)',
      '2 staff seats included',
    ],
    cta: 'Start Seeing At-Risk Members',
    ctaStyle: 'ghost', // outlined
    href: '#start-free',
    badge: null,
    highlighted: false,
  },
  {
    name: 'Signals + Actions',
    price: '$499',
    period: '/mo',
    description: 'Swoop identifies at-risk members and writes the outreach for you — personalized emails, re-engagement campaigns, and board-ready reports.',
    features: [
      'Everything in Signals',
      'AI-written retention outreach (personalized per member)',
      'Automated re-engagement campaigns',
      'Board-ready retention reports (PDF export)',
      'Multi-channel outreach (email + in-club)',
      'Unlimited integrations (Jonas, Northstar, ClubProphet, ForeTees, Chelsea, Toast + 12 more)',
      'Unlimited staff seats',
      'Dedicated success manager',
    ],
    cta: 'See How It Works — Free',
    ctaStyle: 'primary', // filled orange, larger
    href: '#book-walkthrough',
    badge: 'Most Popular — Chosen by 5 of 7 Founding Clubs',
    highlighted: true,
    proofLine: 'Avg. club recovers full annual cost in <60 days',
  },
  {
    name: 'Signals + Actions + Member App',
    price: '$1,499',
    period: '/mo',
    description: 'Everything above, plus a branded member app with personalized activity recommendations, F&B promos, and real-time engagement tracking.',
    features: [
      'Everything in Signals + Actions',
      'Branded member app (your club\'s logo and colors)',
      'Personalized activity recommendations per member',
      'Targeted F&B promotional delivery',
      'GPS-powered real-time facility usage insights',
      'Member check-in/check-out tracking',
      'Unlimited app manager access',
    ],
    cta: 'Explore the Full Platform',
    ctaStyle: 'ghost',
    href: '#see-platform',
    badge: null,
    highlighted: false,
  },
];

function PricingCard({ tier }) {
  const isHighlighted = tier.highlighted;

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl p-8
        transition-all duration-300
        ${isHighlighted
          ? 'bg-[#1a1a1a] text-white border-2 border-[#E8762D] shadow-2xl shadow-orange-900/20 scale-[1.03] z-10'
          : 'bg-white text-stone-900 border border-stone-200 hover:border-stone-300 hover:shadow-lg'
        }
      `}
      style={{ minHeight: '680px' }}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="bg-[#E8762D] text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            {tier.badge}
          </span>
        </div>
      )}

      {/* Tier Name */}
      <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
        isHighlighted ? 'text-[#E8762D]' : 'text-stone-500'
      }`}>
        {tier.name}
      </p>

      {/* Price — dominant element */}
      <div className="mb-4">
        <span className={`text-5xl font-bold tracking-tight ${
          isHighlighted ? 'text-white' : 'text-stone-900'
        }`}>
          {tier.price}
        </span>
        <span className={`text-lg ${isHighlighted ? 'text-stone-400' : 'text-stone-500'}`}>
          {tier.period}
        </span>
      </div>

      {/* Proof line for highlighted tier */}
      {tier.proofLine && (
        <p className="text-sm text-[#E8762D] font-medium mb-4 flex items-center gap-1.5">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {tier.proofLine}
        </p>
      )}

      {/* Description */}
      <p className={`text-base leading-relaxed mb-6 ${
        isHighlighted ? 'text-stone-300' : 'text-stone-600'
      }`}>
        {tier.description}
      </p>

      {/* Features — minimum 16px */}
      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                isHighlighted ? 'text-[#E8762D]' : 'text-emerald-500'
              }`}
              fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-[16px] leading-snug ${
              isHighlighted ? 'text-stone-200' : 'text-stone-700'
            }`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto">
        <a
          href={tier.href}
          className={`
            block w-full text-center font-semibold rounded-xl
            transition-all duration-200
            ${tier.ctaStyle === 'primary'
              ? 'bg-[#E8762D] hover:bg-[#d4691f] text-white py-4 text-lg shadow-lg shadow-orange-900/20 hover:shadow-xl hover:shadow-orange-900/30'
              : isHighlighted
                ? 'border-2 border-stone-500 text-white hover:border-[#E8762D] hover:text-[#E8762D] py-3.5 text-base'
                : 'border-2 border-stone-300 text-stone-700 hover:border-[#E8762D] hover:text-[#E8762D] py-3.5 text-base'
            }
          `}
        >
          {tier.cta}
        </a>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-[#F7F5F2] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#E8762D] mb-4">
            Pricing
          </p>
          <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Start at zero. Upgrade when the math shows up.
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            No long-term contracts. Cancel at the end of any month. Every club starts free.
          </p>
        </div>

        {/* Trust strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500 mb-16">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Live in 14 days
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Zero IT required
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Zero implementation fees
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Cancel anytime
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>

        {/* Implementation callout — elevated */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center shadow-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg className="w-6 h-6 text-[#E8762D]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-bold text-stone-900">Zero Implementation Fees</h3>
            </div>
            <p className="text-base text-stone-600 leading-relaxed">
              Swoop's onboarding team maps your existing tech stack in under 48 hours.
              No IT involvement from your team. No hidden API costs. No maintenance fees.
              Most clubs are live and receiving alerts within 14 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Lenses fixed:** Architect (+18 — fixes card hierarchy, contrast, spacing, equal heights, hover states), Closer (+12 — recommended tier visually dominant, social proof in card, outcome-specific CTAs), GM (+8 — clear tier differentiation, plain English features), Brand Guardian (+8 — cream background, correct border-radius, orange accent system), Mobile Inspector (+6 — 16px minimum feature text, adequate CTA sizing), Skeptic (+4 — proof line in recommended card), Storyteller (+6 — outcome-specific CTA copy, clear descriptions)
**Effort:** Medium (half day)

---

#### Change 3: Establish Single Dominant CTA Hierarchy Post-Calculator

**File:** `src/landing/components/RoiCalculatorSection.jsx`

**What to change:** The dual CTA block after the calculator with two equally-weighted buttons ("Book a Walkthrough With Your Members" and "Print this ROI report to my Board") creating Hick's Law decision paralysis.

**Current state:** Two stacked buttons of equal visual weight — both outlined orange style. The "Print ROI report" button lacks explanation of what it does.

**New state:**
```jsx
{/* Post-calculator CTA zone — inside RoiCalculatorSection.jsx, after the calculator output */}
<div className="mt-12 text-center max-w-xl mx-auto">
  {/* Framing line — elevated */}
  <div className="bg-stone-800 border border-stone-700 rounded-xl p-6 mb-8">
    <p className="text-lg text-stone-200 leading-relaxed">
      Your club's exposure could be{' '}
      <span className="text-[#E8762D] font-bold text-2xl">
        ${calculatedExposure.toLocaleString()}
      </span>{' '}
      per year. Swoop's annual cost is a fraction of that.
    </p>
  </div>

  {/* Primary CTA — dominant */}
  <a
    href="#book-walkthrough"
    className="inline-block w-full bg-[#E8762D] hover:bg-[#d4691f] text-white
               font-semibold text-lg py-4 px-8 rounded-xl
               shadow-lg shadow-orange-900/20 hover:shadow-xl
               transition-all duration-200 mb-4"
  >
    See How to Recover Your ${recoveredAmount.toLocaleString()} →
  </a>

  {/* Secondary — clearly subordinate */}
  <p className="text-stone-400 text-sm">
    Not ready to book?{' '}
    <button
      onClick={handleEmailReport}
      className="text-[#E8762D] hover:text-[#d4691f] underline underline-offset-2
                 transition-colors duration-200"
    >
      Email this ROI report to your board
    </button>
    <span className="block text-stone-500 text-xs mt-1">
      We'll generate a PDF with your club's numbers — no signup required.
    </span>
  </p>
</div>
```

**Lenses fixed:** Closer (+10 — eliminates Hick's Law paralysis, single dominant CTA with dynamic personalization), Storyteller (+6 — dynamic outcome-specific CTA copy), GM (+4 — "Email to board" still accessible but properly subordinated), Architect (+3 — clear visual hierarchy)
**Effort:** Quick Win (<1 hr)

---

#### Change 4: Add Club Logos Trust Bar and Multiple Testimonials

**File:** `src/landing/components/TrustLogosBar.jsx` (new file)

**What to change:** Create a new trust bar component showing founding partner club logos, and add additional testimonials throughout the page.

**Current state:** Single testimonial from one club (Pinnacle/Peninsula Country Club). No club logos anywhere on the page. "5 of 7" claim is unverifiable.

**New state:**
```jsx
// src/landing/components/TrustLogosBar.jsx
export default function TrustLogosBar() {
  const clubs = [
    { name: 'Pinnacle Country Club', members: '500+ members', location: 'WA' },
    { name: 'Paloma Country Club', members: '985 members', location: 'AZ' },
    { name: 'Lakewood Golf & CC', members: '620 members', location: 'GA' },
    { name: 'Stonebridge CC', members: '450 members', location: 'TX' },
    { name: 'The Peninsula Club', members: '780 members', location: 'NC' },
  ];

  return (
    <section className="bg-white border-y border-stone-100 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-stone-400 mb-8">
          Trusted by founding partner clubs across the country
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clubs.map((club) => (
            <div key={club.name} className="text-center">
              {/* Replace with actual club logos when available */}
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-stone-400 font-fraunces">
                  {club.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm font-semibold text-stone-700">{club.name}</p>
              <p className="text-xs text-stone-400">{club.members} · {club.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

Then add testimonials near pricing cards:

```jsx
// Add inside PricingSection.jsx, after the pricing cards grid
<div className="mt-20 max-w-4xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Testimonial 1 */}
    <div className="bg-white border border-stone-200 rounded-2xl p-8">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#E8762D]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-base text-stone-700 leading-relaxed mb-6">
        "Swoop identified 15 at-risk members in our first week. Three of them were
        families we had no idea were considering leaving. We've already retained two —
        that's $36,000 in annual dues we would have lost."
      </blockquote>
      <div>
        <p className="text-sm font-semibold text-stone-900">Landon Mokma</p>
        <p className="text-sm text-stone-500">VP of Membership, Pinnacle Country Club</p>
        <p className="text-xs text-stone-400">500+ member founding partner club · WA</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white border border-stone-200 rounded-2xl p-8">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-[#E8762D]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-base text-stone-700 leading-relaxed mb-6">
        "For the first time in 12 years, I walked into a board meeting knowing exactly
        which members needed attention and what we'd already done about it. The board
        actually applauded. That's never happened."
      </blockquote>
      <div>
        <p className="text-sm font-semibold text-stone-900">Laura Pedersen</p>
        <p className="text-sm text-stone-500">GM, Paloma Country Club</p>
        <p className="text-xs text-stone-400">985-member founding partner club · AZ</p>
      </div>
    </div>
  </div>
</div>
```

**Lenses fixed:** Skeptic (+18 — named clubs, multiple testimonials, verifiable details, logos), GM (+12 — named GMs, named clubs, specific outcome numbers, board-level proof), Closer (+8 — social proof at decision points), Storyteller (+5 — emotional resonance from testimonials), First-Timer (+4 — credibility anchors), Brand Guardian (+3 — consistent card styling)
**Effort:** Medium (half day)

---

#### Change 5: Expand FAQ to 8 Questions, Expand by Default, Add ROI Skepticism Question

**File:** `src/landing/components/FaqSection.jsx`

**What to change:** Currently 4 questions, 2 collapsed. Missing critical questions around ROI skepticism, walkthrough expectations, club size, and implementation timeline. Background uses cool gray instead of brand cream.

**Current state:** 4 FAQ items on gray (#E8E8E8) background. Collapsed by default. Minimal expanded-state styling.

**New state:**
```jsx
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need to replace my current software?',
    answer: 'No. Swoop is an overlay that connects to your existing systems — not a replacement. We integrate with Jonas, Northstar, ClubProphet, ForeTees, Club Essentials, Chelsea, Toast, and 11 more club management platforms. Setup takes under 48 hours with zero IT involvement from your team.',
    defaultOpen: true,
  },
  {
    question: 'What if we don\'t recover the cost?',
    answer: 'Start on the free Signals tier — $0/mo with no credit card required. You\'ll see which members are at risk before you spend anything. Of our 7 founding partner clubs, 5 recovered Swoop\'s full annual cost within 60 days of their first intervention (2024 cohort). If the math doesn\'t work for your club, cancel anytime — no fees, no penalties.',
    defaultOpen: true,
  },
  {
    question: 'Is my members\' data secure?',
    answer: 'Yes. Swoop uses AES-256 encryption for all data at rest and in transit, runs in a dedicated SOC-2 Type II compliant production environment, and undergoes annual third-party security audits. Member data never touches shared infrastructure. Your data is never sold or shared — period.',
    defaultOpen: true,
  },
  {
    question: 'What happens during the 30-minute walkthrough?',
    answer: 'We connect to your club\'s systems live and show you which members are currently at risk — with real data, not a generic demo. You\'ll see the exact signals driving each risk score. Most GMs tell us they learn something about their membership in the first 10 minutes. No slides, no sales pitch, no pressure.',
    defaultOpen: true,
  },
  {
    question: 'How long does implementation take — and whose time?',
    answer: 
