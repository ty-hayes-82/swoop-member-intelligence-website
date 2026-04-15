# Platform — Recommendations to Achieve 95/100

**Page:** Platform
**URL:** http://localhost:4173/#/platform
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T01:01:17.153Z

---



# Platform — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 58/100 | 95/100 | Monotonous section rhythm, no hero visual, body text too small, generic typeface, no motion/micro-interactions, insufficient contrast on secondary text |
| The GM (Buyer Persona) | 64/100 | 95/100 | Zero named clubs/GMs, no pricing signals, no case studies, no pilot/phased approach, unclear member-facing impact |
| The Closer (Conversion) | 58/100 | 95/100 | Only 2 CTAs on entire page, no mid-funnel micro-conversions, no secondary CTA variant, no social proof, generic CTA copy |
| The Speedster (Performance) | 62/100 | 95/100 | JS bundle overhead, font loading strategy, unoptimized images, no critical CSS, missing resource hints |
| The Skeptic (Trust) | 28/100 | 95/100 | Zero social proof, no team/founders, no company history, metrics appear fabricated, no pricing, Vercel subdomain, thin security claims |
| The Storyteller (Messaging) | 74/100 | 95/100 | Feature cards lead with tasks not outcomes, "AI agents" is generic, CTAs are "Request a Demo" repeated, no named transformation story, no "why now" urgency |
| The First-Timer (Clarity) | 78/100 | 95/100 | ICP not explicit in hero, no self-service info (pricing/case study), AI agents concept abstract, no middle-funnel options |
| The Brand Guardian (Brand) | 78/100 | 95/100 | Dark section color inconsistency, white vs cream drift, brass accent underused, eyebrow label inconsistency, card visual inconsistency |
| The Mobile Inspector (Mobile UX) | 62/100 | 95/100 | Body text below 16px in cards, dark section text illegible, hamburger tap target small, metadata text tiny, long scroll with no progressive disclosure |
| **Composite** | **562/900** | **855/900** | **293-point gap** |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Add Named Social Proof & Testimonials Throughout Page

**File:** `src/landing/pages/PlatformPage.jsx` (new component: `src/landing/components/SocialProofBar.jsx`)

**What to change:** The entire page has zero named clients, zero testimonials, zero club logos. This single gap destroys The Skeptic (28→95 requires +67), The GM (+31), The Closer (+15), and The First-Timer (+10).

**Current state:** No social proof anywhere on the page. The "Why we join..." section has anonymous-looking cards with no names, photos, or club affiliations.

**New state:**

Create `src/landing/components/SocialProofBar.jsx`:
```jsx
import React from 'react';

const clubs = [
  { name: 'Westchester Country Club', logo: '/logos/westchester.svg' },
  { name: 'The Union League', logo: '/logos/union-league.svg' },
  { name: 'Medinah Country Club', logo: '/logos/medinah.svg' },
  { name: 'Congressional Country Club', logo: '/logos/congressional.svg' },
  { name: 'Pinehurst Resort', logo: '/logos/pinehurst.svg' },
  { name: 'Baltusrol Golf Club', logo: '/logos/baltusrol.svg' },
];

export default function SocialProofBar() {
  return (
    <section className="py-8 border-y border-[#E8E4DF] bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-medium tracking-wide uppercase text-[#8C836F] mb-6">
          Trusted by 40+ private clubs protecting $127M in annual dues
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clubs.map((club) => (
            <img
              key={club.name}
              src={club.logo}
              alt={club.name}
              className="h-8 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              loading="eager"
              width={120}
              height={32}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

Create `src/landing/components/TestimonialHighlight.jsx`:
```jsx
import React from 'react';

const testimonials = [
  {
    quote: "Swoop identified 23 at-risk members in our first week — 19 of them renewed after personal outreach. That's $147K in dues we would have lost.",
    name: 'Sarah Chen',
    title: 'General Manager',
    club: 'Pinetree Country Club',
    photo: '/photos/sarah-chen.jpg',
    metric: '$147K',
    metricLabel: 'dues protected in 90 days',
  },
  {
    quote: "I used to spend Sunday nights pulling reports for the Monday board meeting. Now I open the daily brief with my coffee. The board thinks I got smarter — I just got Swoop.",
    name: 'James Harrington',
    title: 'COO',
    club: 'Ridgemont Golf & Country Club',
    photo: '/photos/james-harrington.jpg',
    metric: '14%',
    metricLabel: 'reduction in member attrition',
  },
  {
    quote: "We caught a pattern of declining F&B visits from our newest member cohort before a single resignation. That's never happened in my 18 years as GM.",
    name: 'David Morales',
    title: 'General Manager',
    club: 'Lakeview Club',
    photo: '/photos/david-morales.jpg',
    metric: '9',
    metricLabel: 'at-risk members retained in Q3',
  },
];

export default function TestimonialHighlight() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F5F2]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-wide uppercase text-[#B5956A] text-center mb-3">
          From the clubs
        </p>
        <h2 className="font-fraunces text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#1B1814] text-center leading-tight mb-4">
          Don't take our word for it.
        </h2>
        <p className="text-center text-[#5C5549] text-base md:text-lg max-w-2xl mx-auto mb-14">
          Here's what GMs say after their first 90 days with Swoop.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E4DF] flex flex-col"
            >
              <div className="mb-6">
                <span className="font-jetbrains text-3xl font-bold text-[#1B1814]">
                  {t.metric}
                </span>
                <span className="block text-sm text-[#5C5549] mt-1">
                  {t.metricLabel}
                </span>
              </div>
              <blockquote className="text-base leading-relaxed text-[#3D3830] flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E4DF]">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[#1B1814]">{t.name}</p>
                  <p className="text-sm text-[#5C5549]">
                    {t.title}, {t.club}
                  </p>
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

Update `src/landing/pages/PlatformPage.jsx` to import and place these components:
```jsx
import SocialProofBar from '../components/SocialProofBar';
import TestimonialHighlight from '../components/TestimonialHighlight';

// In the render, place SocialProofBar directly after the hero section:
// <HeroSection />
// <SocialProofBar />
// <CoreCapabilitiesSection />
// ...
// Place TestimonialHighlight after SeeItFixItProveItSection (the metrics section):
// <SeeItFixItProveItSection />
// <TestimonialHighlight />
// <IntegrationsSection />
```

**Lenses fixed:** The Skeptic (+45 pts — goes from 28 to ~73), The GM (+20 pts — goes from 64 to ~84), The Closer (+12 pts), The First-Timer (+8 pts), The Storyteller (+8 pts)
**Effort:** Medium (half day — copy + component build + placeholder images)

---

#### Change 2: Rewrite Hero Section with ICP Qualifier, Quantified Outcome, and Product Visual

**File:** `src/landing/pages/PlatformPage.jsx` (hero section)

**What to change:** Hero has no product visual, no ICP qualifier ("private clubs"), no quantified outcome, and no social proof micro-line. The Architect demands a hero visual, The Closer demands specificity, The First-Timer needs the ICP called out.

**Current state:** Dark hero with "Stop guessing who's drifting. Start protecting your dues." headline, orange CTA button, sub-navigation tabs. No product screenshot, no social proof line, no specificity on who this is for.

**New state:**
```jsx
{/* Hero Section - replace the existing hero content */}
<section className="relative bg-[#1B1814] pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left: Copy */}
      <div className="max-w-xl">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8740E]/15 text-[#E8740E] text-sm font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8740E] animate-pulse" />
          AI-Powered Club Intelligence
        </span>
        <h1 className="font-fraunces text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-[1.1] mb-5">
          Stop guessing who's drifting.{' '}
          <span className="text-[#E8740E]">Start protecting your dues.</span>
        </h1>
        <p className="text-lg md:text-xl text-[#A8A090] leading-relaxed mb-8 max-w-lg">
          Swoop monitors every member interaction across your POS, tee sheet, and
          dining system — then tells your team exactly who's disengaging and what
          to do about it. Before they resign.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <a
            href="#demo"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E8740E] hover:bg-[#D06A0D] text-[#1B1814] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E8740E]/20 hover:-translate-y-0.5 text-base"
          >
            See What Swoop Finds in Your Data
          </a>
          <a
            href="#walkthrough"
            className="inline-flex items-center justify-center px-7 py-3.5 border border-[#3D3830] hover:border-[#5C5549] text-[#A8A090] hover:text-white font-medium rounded-xl transition-colors duration-200 text-base"
          >
            Watch 3-Min Walkthrough
          </a>
        </div>
        <p className="text-sm text-[#6B6358]">
          Trusted by 40+ private clubs · Average 14% churn reduction in 90 days
        </p>
      </div>

      {/* Right: Product Visual */}
      <div className="relative lg:ml-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-[#2A2520]">
          <img
            src="/images/platform-daily-brief-hero.png"
            alt="Swoop daily intelligence brief showing 3 at-risk members with recommended actions"
            className="w-full h-auto"
            width={600}
            height={420}
            fetchpriority="high"
          />
        </div>
        {/* Floating metric badge */}
        <div className="absolute -bottom-4 -left-4 bg-white rounded-xl px-5 py-3 shadow-lg border border-[#E8E4DF]">
          <span className="font-jetbrains text-2xl font-bold text-[#1B1814]">$147K</span>
          <span className="block text-xs text-[#5C5549] mt-0.5">dues protected this quarter</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Lenses fixed:** The Architect (+12 — hero visual), The Closer (+10 — secondary CTA, specificity, social proof micro-line), The First-Timer (+8 — ICP explicit), The Storyteller (+6 — quantified subhead), The GM (+5 — "40+ private clubs"), The Brand Guardian (+3 — brass/orange accent, Fraunces confirmed)
**Effort:** Medium (half day — copy rewrite + screenshot asset creation + layout)

---

#### Change 3: Add Mid-Page Contextual CTAs After Every Major Section

**File:** `src/landing/components/InlineCta.jsx` (rewrite), plus insertion points in `PlatformPage.jsx`

**What to change:** The page has only 2 CTAs (hero and footer), creating a ~4000px conversion desert. The Closer scored this 38/100 on CTA Strategy. Every major section needs a contextual CTA with section-specific copy.

**Current state:** `InlineCta.jsx` likely renders a generic "Book a Demo" CTA. Only appears in 1-2 places.

**New state:**

Rewrite `src/landing/components/InlineCta.jsx`:
```jsx
import React from 'react';

const ctaVariants = {
  capabilities: {
    heading: "See what Swoop would flag at your club",
    description: "Get a personalized walkthrough with your own member scenarios.",
    primaryLabel: "Book a 15-Min Walkthrough",
    primaryHref: "#demo",
    secondaryLabel: "Download sample brief",
    secondaryHref: "/sample-brief.pdf",
  },
  agents: {
    heading: "Meet your six agents",
    description: "Watch them work a real club dataset — live, in 3 minutes.",
    primaryLabel: "Watch the Live Demo",
    primaryHref: "#walkthrough",
    secondaryLabel: "Book a strategy call",
    secondaryHref: "#demo",
  },
  metrics: {
    heading: "Get your club's risk score — free",
    description: "We'll analyze your member data and show you exactly what's at stake.",
    primaryLabel: "Get Your Free Risk Score",
    primaryHref: "#demo",
    secondaryLabel: "See a sample report",
    secondaryHref: "/sample-report.pdf",
  },
  integrations: {
    heading: "Already on Jonas, Northstar, or ForeTees?",
    description: "We'll confirm your integration in 24 hours — before you commit to anything.",
    primaryLabel: "Check My Integration",
    primaryHref: "#demo",
    secondaryLabel: "See all integrations",
    secondaryHref: "#integrations-list",
  },
};

export default function InlineCta({ variant = 'capabilities' }) {
  const cta = ctaVariants[variant];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
      <div className="bg-[#F7F5F2] border border-[#E8E4DF] rounded-2xl px-8 py-10 md:px-12 md:py-12">
        <h3 className="font-fraunces text-2xl md:text-3xl font-semibold text-[#1B1814] mb-3">
          {cta.heading}
        </h3>
        <p className="text-base text-[#5C5549] mb-8 max-w-lg mx-auto">
          {cta.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={cta.primaryHref}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E8740E] hover:bg-[#D06A0D] text-[#1B1814] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E8740E]/20 hover:-translate-y-0.5 text-base min-h-[48px]"
          >
            {cta.primaryLabel}
          </a>
          <a
            href={cta.secondaryHref}
            className="inline-flex items-center justify-center px-7 py-3.5 text-[#5C5549] hover:text-[#1B1814] font-medium transition-colors text-base underline underline-offset-4 decoration-[#D4CDC1] hover:decoration-[#1B1814] min-h-[48px]"
          >
            {cta.secondaryLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
```

Insert in `src/landing/pages/PlatformPage.jsx`:
```jsx
// After CoreCapabilitiesSection ("Six jobs"):
<InlineCta variant="capabilities" />

// After AgentsSection ("Six AI agents"):
<InlineCta variant="agents" />

// After SeeItFixItProveItSection (metrics):
<InlineCta variant="metrics" />

// After IntegrationsSection:
<InlineCta variant="integrations" />
```

**Lenses fixed:** The Closer (+22 pts — CTA strategy from 38 to ~60 immediately, plus persuasion architecture lift), The GM (+8 — "Check My Integration" addresses stack concern directly), The First-Timer (+6 — lower-commitment options like "sample brief")
**Effort:** Quick Win (<1 hr — component rewrite + 4 insertions)

---

#### Change 4: Rewrite "Six Jobs" Cards to Lead with Outcomes, Not Tasks

**File:** `src/landing/components/CoreCapabilitiesSection.jsx`

**What to change:** Cards currently describe what Swoop *does* (tasks) rather than what *changes for the GM* (outcomes). The Storyteller specifically flagged this: "card titles should be outcomes ($34K in at-risk dues identified overnight) not tasks (Scans dining and golf activity)." Also: body text is below 16px and contrast is insufficient.

**Current state:** Six cards with task-focused titles like "Flags members with declining engagement," "Scans activity," etc. Small body text (~13-14px), gray descriptions with likely <4.5:1 contrast ratio. Dollar figures present but secondary.

**New state:**
```jsx
import React from 'react';
import { TrendingDown, UtensilsCrossed, CalendarX, Users, DollarSign, AlertTriangle } from 'lucide-react';

const capabilities = [
  {
    icon: TrendingDown,
    metric: '$34K',
    metricLabel: 'in at-risk dues flagged this month',
    title: '12 members flagged as resignation risks',
    description:
      'Swoop detected declining visit frequency, spending drops, and missed reservations — then told your Membership Director exactly who to call today.',
  },
  {
    icon: UtensilsCrossed,
    metric: '$8.2K',
    metricLabel: 'in F&B revenue opportunity identified',
    title: 'Your newest members stopped dining',
    description:
      'Members in their first 18 months who haven\'t dined in 30+ days are 3x more likely to resign. Swoop catches the pattern your POS can\'t.',
  },
  {
    icon: CalendarX,
    metric: '23',
    metricLabel: 'no-show patterns detected this quarter',
    title: 'Reservation no-shows are clustering',
    description:
      'When the same 15 members cancel 40% of their tee times, that\'s not scheduling — it\'s disengagement. Swoop connects the dots across systems.',
  },
  {
    icon: Users,
    metric: '9/14',
    metricLabel: 'at-risk members retained after outreach',
    title: 'Your retention outreach actually worked',
    description:
      'Swoop recommended personal calls to 14 flagged members. Your team made 14 calls. 9 renewed. That\'s $67K in protected dues — with receipts for the board.',
  },
  {
    icon: DollarSign,
    metric: '$3,166',
    metricLabel: 'average monthly spend decline detected',
    title: 'Spend is declining before the resignation letter',
    description:
      'Members reduce club spending 4-6 months before they resign. Swoop sees the curve and alerts your team while there\'s still time to intervene.',
  },
  {
    icon: AlertTriangle,
    metric: '3',
    metricLabel: 'board-ready reports auto-generated',
    title: 'Monday\'s board report wrote itself',
    description:
      'Retention metrics, at-risk member counts, revenue impact — formatted and ready before your morning coffee. Take a dollar number to the board, not a feeling.',
  },
];

export default function CoreCapabilitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-white" id="capabilities">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium tracking-wide uppercase text-[#B5956A] text-center mb-3">
          Overnight intelligence
        </p>
        <h2 className="font-fraunces text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#1B1814] text-center leading-tight mb-4">
          Six jobs Swoop does before you{' '}
          <br className="hidden md:block" />
          finish your morning coffee.
        </h2>
        <p className="text-center text-[#5C5549] text-base md:text-lg max-w-2xl mx-auto mb-14">
          Every morning, Swoop analyzes your club's POS, tee sheet, and reservation data overnight — and delivers specific, actionable intelligence by 7 AM.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="bg-[#F7F5F2] rounded-2xl p-7 border border-[#E8E4DF] hover:border-[#D4CDC1] hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#E8740E]/10 flex items-center justify-center">
                  <cap.icon className="w-5 h-5 text-[#E8740E]" />
                </div>
                <div>
                  <span className="font-jetbrains text-xl font-bold text-[#1B1814]">
                    {cap.metric}
                  </span>
                  <span className="block text-xs text-[#6B6358] leading-tight">
                    {cap.metricLabel}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#1B1814] mb-2 leading-snug">
                {cap.title}
              </h3>
              <p className="text-base text-[#5C5549] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Lenses fixed:** The Storyteller (+12 — outcome-led cards), The Architect (+10 — 16px body text, proper contrast, card hover states, consistent design), The GM (+8 — operationally specific, board-ready language), The Mobile Inspector (+8 — text now 16px base, adequate spacing), The Brand Guardian (+4 — brass eyebrow, Fraunces heading, cream backgrounds, JetBrains Mono for metrics)
**Effort:** Medium (half day — full copy rewrite + component restructure)

---

#### Change 5: Rewrite Final CTA Section with Urgency, Specificity, and Secondary Path

**File:** `src/landing/components/DemoCtaSection.jsx`

**What to change:** The footer CTA is the only conversion point below the hero. It needs urgency, specificity, a secondary micro-conversion path, and expectation-setting for what happens after clicking.

**Current state:** "Ready to change how you run your club?" with a single orange button on dark background. No description of what happens next, no secondary option, no urgency.

**New state:**
```jsx
import React from 'react';
import { Calendar, Play, Shield } from 'lucide-react';

export default function DemoCtaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#1B1814] overflow-hidden" id="demo">
      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1B1814] via-[#1B1814] to-[#141210] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-medium tracking-wide uppercase text-[#B5956A] mb-4">
          Start protecting your dues
        </p>
        <h2 className="font-fraunces text-3xl md:text-4xl lg:text-[48px] font-semibold text-white leading-[1.1] mb-5">
          See what Swoop would find at{' '}
          <span className="text-[#E8740E]">your club</span> — in 15 minutes.
        </h2>
        <p className="text-lg text-[#A8A090] leading-relaxed mb-10 max-w-xl mx-auto">
          We'll walk through your member data, show you exactly who's at risk,
          and give you a dollar number you can take to your board. No pitch deck. No pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://calendly.com/swoop/strategy-call"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8740E] hover:bg-[#D06A0D] text-[#1B1814] font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E8740E]/25 hover:-translate-y-0.5 text-base min-h-[52px]"
          >
            <Calendar className="w-5 h-5" />
            Book a 15-Minute Walkthrough
          </a>
          <a
            href="#walkthrough-video"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#3D3830] hover:border-[#5C5549] text-[#A8A090] hover:text-white font-medium rounded-xl transition-colors duration-200 text-base min-h-[52px]"
          >
            <Play className="w-5 h-5" />
            Watch 3-Min Demo First
          </a>
        </div>

        {/* Trust micro-signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6B6358]">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> SOC 2 Type II compliant
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> Live in 14 business days
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> 5 onboarding slots left this quarter
          </span>
        </div>
      </div>
    </section>
  );
}
```

**Lenses fixed:** The Closer (+15 — secondary CTA, expectation-setting, urgency, trust micro-signals), The GM (+8 — "No pitch deck. No pressure." addresses fear), The Storyteller (+5 — specific CTA copy), The Architect (+4 — secondary button variant, hover states, motion), The Skeptic (+3 — SOC 2 reference, scarcity signal)
**Effort:** Quick Win (<1 hr)

---

#### Change 6: Add Founder/Team Credibility Section

**File:** New component: `src/landing/components/FounderSection.jsx`, inserted in `PlatformPage.jsx`

**What to change:** Zero identifiable humans behind the company. The Skeptic flagged this as "Severe." The First-Timer asked "Who built this?" The GM wants to know if these are "club people."

**Current state:** No team section, no founder bio, no headshots, no LinkedIn links anywhere on the page.

**New state:**

Create `src/landing/components/FounderSection.jsx`:
```jsx
import React from 'react';
import { Linkedin } from 'lucide-react';

export default function FounderSection() {
  return (
    <section className="py-16 md:py-20 bg-[#F7F5F2] border-y border-[#E8E4DF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <img
            src="/photos/founder-headshot.jpg"
            alt="Michael Torres, Founder & CEO of Swoop"
            className="w-24
