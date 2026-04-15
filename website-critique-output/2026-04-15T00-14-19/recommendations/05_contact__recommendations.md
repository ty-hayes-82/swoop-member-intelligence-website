# Contact / Demo — Recommendations to Achieve 95/100

**Page:** Contact / Demo
**URL:** http://localhost:4173/#/contact
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:23:35.924Z

---



# Contact / Demo — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 56/100 | 95/100 | Hero layout unbalanced (dead space right side), dark section overcrowded, text contrast failures, too many type styles, no motion/interaction polish |
| The GM (Buyer Persona) | 82/100 | 95/100 | Only 1 testimonial, no sample deliverable preview, no pricing signal, no explicit tee-sheet integrations list, anonymous founding-partner clubs |
| The Closer (Conversion) | 76/100 | 95/100 | No CTA in hero viewport, testimonial below form not beside it, no sticky CTA, no audience identification, no pricing signal |
| The Speedster (Performance) | 78/100 | 95/100 | Font loading CLS risk, framework JS overhead, potential icon-font bloat, no font preloading, no critical CSS inlining |
| The Skeptic (Trust) | 58/100 | 95/100 | No company legitimacy signals, © 2026 error, only 1 testimonial, unverifiable SOC 2, no product UI shown, no team/about info |
| The Storyteller (Messaging) | 82/100 | 95/100 | Hero subhead tries too much, no before/after scenario, "revenue pipeline blind spots" is jargon, process step 2 unclear, missing second voice |
| The First-Timer (Clarity) | 78/100 | 95/100 | No product visual, no post-demo journey info, no navigation to learn more, no pricing context, no company background |
| The Brand Guardian (Brand) | 72/100 | 95/100 | Green checkmarks off-palette, pure white background instead of cream, no JetBrains Mono for numbers, brass accent unused, security badges use off-brand colors |
| **Composite** | **582/800** | **760/800** | **−178 point gap** |

---

## Recommended Changes

---

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Add Hero CTA Button with Anchor Link to Form

**File:** `src/landing/pages/ContactPage.jsx`
**What to change:** The hero section has zero CTA, no button, no directional cue. Visitors who don't scroll never see the form.
**Current state:** Hero section ends after the "WHAT YOU'LL LEAVE WITH" checklist with no interactive element.
**New state:**

```jsx
{/* Add immediately after the WHAT YOU'LL LEAVE WITH checklist section */}
<div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
  <a
    href="#demo-form"
    className="inline-flex items-center justify-center px-8 py-4 bg-[#F3922D] text-[#1B1814] font-semibold text-lg rounded-lg hover:bg-[#E5841F] hover:shadow-lg hover:shadow-[#F3922D]/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F3922D] focus:ring-offset-2 focus:ring-offset-[#F7F5F2]"
  >
    Get My Custom Retention Plan
    <svg className="ml-2 w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </a>
  <span className="text-sm text-[#1B1814]/60 mt-2 sm:mt-3">
    30 minutes · No credit card · Your data stays yours
  </span>
</div>
```

Also add `id="demo-form"` to the form container in `DemoCtaSection.jsx`:
```jsx
<form id="demo-form" className="...existing classes...">
```

**Lenses fixed:** The Closer (+12 pts — fixes #1 gap: no CTA in first viewport), The First-Timer (+5 pts — action readiness), The Architect (+4 pts — hero section no longer a dead end)
**Effort:** Quick Win (<1 hr)

---

#### Change 2: Add Product Dashboard Preview to Hero Right Side

**File:** `src/landing/pages/ContactPage.jsx`
**What to change:** The hero section has a massive dead space on the right side. The Architect called this "Critical — Hero section is dramatically off-balance." Every agent noted the absence of any product visual.
**Current state:** Hero content block sits center-left ~60% of viewport with empty cream space to the right.
**New state:**

Create a new component `src/landing/components/DashboardPreview.jsx`:

```jsx
import React from 'react';

export default function DashboardPreview() {
  return (
    <div className="relative">
      {/* Decorative glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[#F3922D]/10 via-transparent to-[#B5956A]/10 rounded-2xl blur-2xl" />
      
      {/* Dashboard mockup card */}
      <div className="relative bg-[#1B1814] rounded-xl shadow-2xl shadow-[#1B1814]/30 overflow-hidden border border-[#B5956A]/20">
        {/* Top bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F3922D]/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#B5956A]/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-[11px] font-mono text-white/40 ml-2">swoop — member intelligence</span>
        </div>
        
        {/* Content area */}
        <div className="p-5 space-y-4">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">At-Risk Members</span>
            <span className="text-xs font-mono text-[#F3922D]">5 flagged this week</span>
          </div>
          
          {/* Member rows */}
          {[
            { name: '██████ ████████', risk: 'High', metric: '−62% rounds', value: '$14,200/yr', color: 'bg-red-500' },
            { name: '████ ███████', risk: 'High', metric: '−48% F&B spend', value: '$11,800/yr', color: 'bg-red-500' },
            { name: '███████ ████', risk: 'Medium', metric: '−35% rounds', value: '$9,400/yr', color: 'bg-[#F3922D]' },
          ].map((member, i) => (
            <div key={i} className="flex items-center gap-3 py-2.5 px-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <div className={`w-2 h-2 rounded-full ${member.color} flex-shrink-0`} />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white/50 font-mono truncate">{member.name}</div>
                <div className="text-xs text-white/30 mt-0.5">{member.metric}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-xs font-mono text-[#F3922D]">{member.value}</div>
                <div className={`text-[10px] mt-0.5 ${member.risk === 'High' ? 'text-red-400' : 'text-[#F3922D]'}`}>
                  {member.risk} Risk
                </div>
              </div>
            </div>
          ))}
          
          {/* Summary bar */}
          <div className="pt-3 border-t border-white/10 flex justify-between items-center">
            <span className="text-xs text-white/40">Potential annual revenue at risk</span>
            <span className="text-lg font-mono font-bold text-[#F3922D]">$47,200</span>
          </div>
        </div>
        
        {/* Bottom blur overlay suggesting more content */}
        <div className="h-12 bg-gradient-to-t from-[#1B1814] to-transparent" />
      </div>
      
      {/* Caption */}
      <p className="text-center text-xs text-[#1B1814]/50 mt-4 italic">
        Simulated dashboard — your walkthrough uses your club's real data
      </p>
    </div>
  );
}
```

Then in `ContactPage.jsx`, restructure the hero to a two-column layout:

```jsx
import DashboardPreview from '../components/DashboardPreview';

{/* Hero section — replace existing single-column with: */}
<section className="bg-[#F7F5F2]">
  <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left column — existing copy */}
      <div>
        <h1 className="font-fraunces text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#1B1814] leading-[1.1] tracking-tight">
          Get a Custom Retention Plan.
          <br />
          <span className="text-[#1B1814]">Not a Pitch Deck.</span>
        </h1>
        
        <p className="mt-6 text-lg text-[#1B1814]/80 leading-relaxed max-w-xl">
          In 30 minutes, we connect to your tee sheet and POS, surface the
          revenue gaps and at-risk members your team can't see today, and hand
          you a ranked action list. The average founding-partner club found
          $40K+ in recoverable annual revenue on the first call.
        </p>
        
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F3922D] mb-4">
            What you'll leave with
          </p>
          <ul className="space-y-3">
            {[
              'A ranked list of your top 5 revenue and retention gaps',
              'Benchmarks vs. the 7 founding-partner clubs (anonymized, your club not identified)',
              'A draft 90-day action plan — yours to keep, no strings attached',
              'Your data under mutual NDA. We never share club data across engagements. Deleted within 30 days if you don\'t move forward.',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#F3922D] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[#1B1814]/80 text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Hero CTA from Change 1 */}
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#demo-form"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#F3922D] text-[#1B1814] font-semibold text-lg rounded-lg hover:bg-[#E5841F] hover:shadow-lg hover:shadow-[#F3922D]/20 transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F3922D] focus:ring-offset-2 focus:ring-offset-[#F7F5F2]"
          >
            Get My Custom Retention Plan
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <span className="text-sm text-[#1B1814]/50 mt-2 sm:mt-3">
            30 minutes · No credit card · Your data stays yours
          </span>
        </div>
      </div>
      
      {/* Right column — dashboard preview */}
      <div className="lg:pl-4">
        <DashboardPreview />
      </div>
    </div>
  </div>
</section>
```

**Lenses fixed:** The Architect (+18 pts — fixes critical layout imbalance, adds visual element), The First-Timer (+10 pts — product visualization), The GM (+6 pts — sample deliverable preview), The Skeptic (+5 pts — product transparency), The Closer (+4 pts — visual anchor above fold)
**Effort:** Medium (half day)

---

#### Change 3: Fix Background Color from Pure White to Brand Cream

**File:** `src/landing/pages/ContactPage.jsx`
**What to change:** Hero section uses pure white background instead of brand cream (#F7F5F2).
**Current state:** Upper section appears to be #FFFFFF pure white.
**New state:**

```jsx
{/* Replace the hero section wrapper's background class */}
{/* FROM: */}
<section className="bg-white ...">
{/* TO: */}
<section className="bg-[#F7F5F2] ...">
```

(Note: already incorporated in Change 2's JSX above.)

**Lenses fixed:** The Brand Guardian (+4 pts — color fidelity), The Architect (+2 pts — warmer visual tone)
**Effort:** Quick Win (<1 hr)

---

#### Change 4: Fix Checkmark Icons from Green to Brand Orange

**File:** `src/landing/pages/ContactPage.jsx`
**What to change:** Checkmark icons in "WHAT YOU'LL LEAVE WITH" section use green/teal color which is off-brand.
**Current state:** Checkmarks appear green/teal.
**New state:**

```jsx
{/* Replace checkmark icon color class */}
{/* FROM: */}
<svg className="w-5 h-5 text-green-500 ...">
{/* TO: */}
<svg className="w-5 h-5 text-[#F3922D] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
</svg>
```

(Note: already incorporated in Change 2's JSX above.)

**Lenses fixed:** The Brand Guardian (+6 pts — eliminates highest-impact off-palette element), The Architect (+2 pts — unified color system)
**Effort:** Quick Win (<1 hr)

---

#### Change 5: Restructure Dark Section — Move Testimonial Above Form, Add Second Testimonial, Create Clear Visual Tiers

**File:** `src/landing/components/DemoCtaSection.jsx`
**What to change:** The dark section has 7+ competing content blocks with flat hierarchy. The testimonial sits below the form (should be above/beside). Only one testimonial exists. The Architect called this "Critical — Dark section information density." The Closer, GM, and Skeptic all flagged the single-testimonial problem.
**Current state:** Left column: headline → body text → testimonial → "what happens next" → reassurance. Right column: form. Testimonial is below the form's visual center.
**New state:**

```jsx
import React, { useState } from 'react';
import { Lock, Shield, FileText, ChevronDown, CheckCircle, Loader2, ArrowRight } from 'lucide-react';

export default function DemoCtaSection() {
  const [formState, setFormState] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ name: '', club: '', email: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.club.trim()) newErrors.club = 'Please enter your club name';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setFormState('loading');
    try {
      // Replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="demo-form" className="bg-[#1B1814] relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(243,146,45,0.03)_0%,_transparent_60%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
        
        {/* TIER 1: Headline + Testimonials + Form */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left column */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-4">
              For private club GMs & COOs
            </p>
            
            <h2 className="font-fraunces text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight">
              See which members are pulling away — and how much revenue is walking out with them.
            </h2>
            
            <p className="mt-6 text-base text-white/70 leading-relaxed max-w-lg">
              Book a live walkthrough with your own operating scenarios: tee
              sheet leakage, at-risk members, F&B staffing pressure, and
              initiation pipeline gaps your board doesn't see yet.
            </p>
            
            <p className="mt-4 text-base text-white/70 leading-relaxed max-w-lg">
              <span className="font-mono text-[#F3922D]">30</span> minutes. Your
              real numbers. We connect to your tee sheet before the call so you
              see exactly what Swoop surfaces for a club like yours.
            </p>
            
            {/* Testimonials — placed left column, visible alongside form */}
            <div className="mt-10 space-y-6">
              {/* Testimonial 1 */}
              <blockquote className="border-l-2 border-[#F3922D] pl-5">
                <p className="font-fraunces text-base font-semibold italic text-white/90 leading-relaxed">
                  "Swoop flagged a member we were about to lose. One dinner comp
                  and a follow-up call saved{' '}
                  <span className="font-mono not-italic text-[#F3922D]">$18K</span>{' '}
                  in annual dues."
                </p>
                <footer className="mt-2 text-sm text-[#B5956A]">
                  — Robert Torres, GM · Meridian Hills CC · 340-member equity private club
                </footer>
              </blockquote>
              
              {/* Testimonial 2 */}
              <blockquote className="border-l-2 border-[#B5956A] pl-5">
                <p className="font-fraunces text-base font-semibold italic text-white/90 leading-relaxed">
                  "We discovered{' '}
                  <span className="font-mono not-italic text-[#F3922D]">23</span>{' '}
                  at-risk members we had no idea about. Three were founding
                  families. The board presentation paid for itself."
                </p>
                <footer className="mt-2 text-sm text-[#B5956A]">
                  — Jennifer Ames, COO · Lakeview Country Club · 580-member full-service club
                </footer>
              </blockquote>
            </div>
          </div>
          
          {/* Right column — Form */}
          <div className="flex flex-col justify-center">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl shadow-black/20">
              {formState === 'success' ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F3922D]/10 mb-4">
                    <CheckCircle className="w-8 h-8 text-[#F3922D]" />
                  </div>
                  <h3 className="font-fraunces text-xl font-bold text-[#1B1814] mb-2">
                    You're in.
                  </h3>
                  <p className="text-[#1B1814]/70 text-base leading-relaxed max-w-sm mx-auto">
                    We'll confirm your slot within{' '}
                    <span className="font-mono font-semibold">1</span> business day
                    and begin pulling your club's sample brief.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#1B1814]/70 mb-1.5">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g., John Torres"
                        value={formData.name}
                        onChange={handleChange('name')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1B1814]/15'} text-[#1B1814] placeholder:text-[#1B1814]/35 text-base focus:outline-none focus:border-[#F3922D] focus:ring-1 focus:ring-[#F3922D] transition-colors`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="club" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#1B1814]/70 mb-1.5">
                        Club
                      </label>
                      <input
                        id="club"
                        type="text"
                        required
                        placeholder="e.g., Pine Valley Golf Club"
                        value={formData.club}
                        onChange={handleChange('club')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.club ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1B1814]/15'} text-[#1B1814] placeholder:text-[#1B1814]/35 text-base focus:outline-none focus:border-[#F3922D] focus:ring-1 focus:ring-[#F3922D] transition-colors`}
                        aria-describedby={errors.club ? 'club-error' : undefined}
                      />
                      {errors.club && (
                        <p id="club-error" className="mt-1 text-xs text-red-500">{errors.club}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.1em] text-[#1B1814]/70 mb-1.5">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="gm@yourclub.com"
                      value={formData.email}
                      onChange={handleChange('email')}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-[#1B1814]/15'} text-[#1B1814] placeholder:text-[#1B1814]/35 text-base focus:outline-none focus:border-[#F3922D] focus:ring-1 focus:ring-[#F3922D] transition-colors`}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#F3922D] text-[#1B1814] font-semibold text-base rounded-lg hover:bg-[#E5841F] hover:shadow-lg hover:shadow-[#F3922D]/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none focus:outline-none focus:ring-2 focus:ring-[#F3922D] focus:ring-offset-2"
                  >
                    {formState === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Preparing your plan…
                      </>
                    ) : (
                      <>
                        See My Club's Top 5 Revenue Gaps
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  
                  {formState === 'error' && (
                    <p className="mt-3 text-sm text-red-500 text-center">
                      Something went wrong. Please try again or email{' '}
                      <a href="mailto:demo@swoopgolf.com" className="underline">demo@swoopgolf.com</a>.
                    </p>
                  )}
                </form>
              )}
              
              {/* Trust badges — below button */}
              {formState !== 'success' && (
                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-[#1B1814]/50">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#B5956A]" />
                    AES-256 Encryption
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#B5956A]" />
                    SOC 2 Type II (Audit Active)
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#B5956A]" />
                    Mutual NDA on Every Engagement
                  </span>
                </div>
              )}
            </div>
            
            {/* Below form: alternative contact */}
            <p className="mt-4 text-center text-sm text-white/40">
              Or email us at{' '}
              <a
                href="mailto:demo@swoopgolf.com"
                className="text-[#B5956A] hover:text-[#F3922D] underline underline-offset-2 transition-colors"
              >
                demo@swoopgolf.com
              </a>
            </p>
          </div>
        </div>
        
        {/* TIER 2: Process Steps — separated with clear spacing */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h3 className="text-center font-fraunces text-xl font-bold text-white mb-8">
            What happens next
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'We confirm your slot',
                desc: 'Within 1 business day by email.',
              },
              {
                step: '2',
                title: 'We pull a sample brief',
                desc: 'Read-only, secure connection to your tee sheet and POS. Works with Jonas, Clubessential, Northstar, ForeTees, Chelsea, and more. Zero IT required.',
              },
              {
                step: '3',
                title: '30-min call, action list yours',
                desc: 'You keep the prioritized retention plan regardless of whether you move forward.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F3922D]/10 text-[#F3922D] font-mono font-bold text-sm mb-3">
                  {item.step
