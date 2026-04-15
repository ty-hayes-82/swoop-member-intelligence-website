# About — Recommendations to Achieve 95/100

**Page:** About
**URL:** http://localhost:4173/#/about
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T01:05:25.904Z

---



# About — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 53/100 | 95/100 | White monotony mid-page, inconsistent spacing, no hover states, weak data viz, no motion |
| The GM (Buyer Persona) | 74/100 | 95/100 | No product screenshots, unattributed stats, no pricing signal, no downloadable board asset |
| The Closer (Conversion) | 62/100 | 95/100 | Competing CTAs, no scarcity indicator, no low-commitment option, no sticky nav CTA |
| The Speedster (Performance) | 68/100 | 95/100 | Font render-blocking LCP, no lazy loading, no critical CSS inlining, CLS from font swap |
| The Skeptic (Trust) | 52/100 | 95/100 | Staging URL, no product visuals, "Founded 2025" risk, no LinkedIn links, no third-party validation |
| The Storyteller (Messaging) | 68/100 | 95/100 | Generic hero headline, voice inconsistency mid-page, no day-in-the-life scenario, weak section headers |
| The First-Timer (Clarity) | 72/100 | 95/100 | Hero doesn't name audience, no product visual, no integration logos, no pricing signal |
| The Brand Guardian (Brand) | 74/100 | 95/100 | Pure white backgrounds instead of cream/sand, brass accent underused, FAQ unstyled, eyebrow inconsistency |
| The Mobile Inspector (Mobile UX) | 62/100 | 95/100 | Body text below 16px, low-contrast grey text, FAQ tap targets, no sticky mobile CTA, buried conversion |
| **Composite** | **585/900** | **855/900** | **270-point gap across visual polish, trust, conversion, and mobile** |

---

## Recommended Changes

---

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Rewrite Hero Headline to Name Audience + Lead with Founder Credibility

**File:** `src/landing/pages/AboutPage.jsx`

**What to change:** The hero section headline, subheadline, and CTA copy

**Current state:** Hero reads "Stop digging for answers. Get one actionable morning briefing." with subtext about POS/CRM/tee sheet. CTA says "Book a walkthrough." The hero is industry-agnostic — a first-timer cannot tell this is for private clubs.

**New state:**
```jsx
{/* Hero Section */}
<section className="relative bg-[#1B1814] py-24 md:py-32 lg:py-40">
  <div className="mx-auto max-w-4xl px-5 text-center">
    <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-[#F3922D]">
      Built by a former club GM
    </p>
    <h1 className="font-fraunces text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
      Your morning briefing that tells you which members to call, which tables are empty, and which $312 opportunities you're missing
      <span className="text-[#F3922D]"> — before 9 AM.</span>
    </h1>
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
      Swoop connects to your POS, CRM, and tee sheet overnight. By 7 AM, your GM briefing
      shows which members are disengaging, which F&B patterns shifted, and exactly what your
      team should do about it — no spreadsheet required.
    </p>
    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <a
        href="#founding-partner"
        className="inline-flex items-center rounded-lg bg-[#F3922D] px-8 py-4 text-base font-semibold text-[#1B1814] shadow-lg transition-all duration-200 hover:bg-[#E5841F] hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#F3922D] focus:ring-offset-2 focus:ring-offset-[#1B1814]"
      >
        See Your Club's Morning Briefing
      </a>
      <a
        href="#sample-briefing"
        className="inline-flex items-center rounded-lg border-2 border-[#B5956A] px-8 py-4 text-base font-semibold text-[#B5956A] transition-all duration-200 hover:bg-[#B5956A]/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B5956A] focus:ring-offset-2 focus:ring-offset-[#1B1814]"
      >
        See a Sample Briefing →
      </a>
    </div>
  </div>
</section>
```

**Lenses fixed:**
- Storyteller +18 (specific, quantified headline with founder credibility)
- First-Timer +20 (audience named via "club GM" eyebrow + operational specifics)
- Closer +12 (secondary ghost CTA for low-commitment visitors)
- GM +8 (mentions specific outcome — $312/member)
- Brand Guardian +4 (brass accent on secondary CTA, proper eyebrow styling)
- Architect +6 (button hierarchy with primary/secondary variants)

**Effort:** Quick Win (<1 hr)

---

#### Change 2: Add Product Screenshot / Sample Briefing Section

**File:** `src/landing/pages/AboutPage.jsx` (new section) + `src/landing/components/SampleBriefingSection.jsx` (new component)

**What to change:** Add a visual product preview section between the founder story and the team section. Currently there are ZERO product visuals on the entire page.

**Current state:** The page goes from the "I was the GM" narrative directly to "An extension of your team" with no product imagery anywhere. Every agent flagged this as a critical gap.

**New state:**

Create `src/landing/components/SampleBriefingSection.jsx`:
```jsx
import { Mail, TrendingDown, Utensils, CalendarX, ChevronRight } from 'lucide-react';

export default function SampleBriefingSection() {
  return (
    <section id="sample-briefing" className="bg-[#F7F5F2] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[#F3922D]">
            The Product
          </p>
          <h2 className="font-fraunces text-3xl font-bold text-[#1B1814] md:text-4xl lg:text-5xl">
            This is what 7 AM looks like with Swoop.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#4A4540]">
            Every morning, your GM briefing surfaces what changed overnight — member risks,
            revenue opportunities, and the exact actions your team should take today.
          </p>
        </div>

        {/* Sample Briefing Card */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-[#E8E3DC] bg-white shadow-xl">
            {/* Email Header */}
            <div className="flex items-center gap-3 border-b border-[#E8E3DC] bg-[#FAFAF8] px-6 py-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3922D]/10">
                <Mail className="h-5 w-5 text-[#F3922D]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1B1814]">
                  Your Morning Briefing — Tuesday, Jan 14
                </p>
                <p className="text-xs text-[#8A8580]">
                  Swoop Intelligence · 6:58 AM
                </p>
              </div>
            </div>

            {/* Briefing Content */}
            <div className="space-y-0 divide-y divide-[#E8E3DC] p-0">
              {/* Alert 1 */}
              <div className="flex items-start gap-4 px-6 py-5 transition-colors hover:bg-[#FAFAF8]">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <TrendingDown className="h-4 w-4 text-red-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
                      Retention Risk
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#1B1814]">
                    The Henderson family hasn't booked a tee time in 6 weeks.
                  </p>
                  <p className="mt-0.5 text-sm text-[#6B6560]">
                    F&B spend down 42% vs. prior 90-day average. 12-year members.
                    <span className="ml-1 font-medium text-[#F3922D]">
                      Suggested: personal check-in from membership director.
                    </span>
                  </p>
                </div>
              </div>

              {/* Alert 2 */}
              <div className="flex items-start gap-4 px-6 py-5 transition-colors hover:bg-[#FAFAF8]">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <Utensils className="h-4 w-4 text-amber-600" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                      Revenue Opportunity
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#1B1814]">
                    Thursday wine dinner is 60% booked — but 23 past attendees
                    haven't reserved.
                  </p>
                  <p className="mt-0.5 text-sm text-[#6B6560]">
                    Last 3 events from this group averaged $4,200 in F&B revenue.
                    <span className="ml-1 font-medium text-[#F3922D]">
                      Suggested: targeted reminder to past attendees.
                    </span>
                  </p>
                </div>
              </div>

              {/* Alert 3 */}
              <div className="flex items-start gap-4 px-6 py-5 transition-colors hover:bg-[#FAFAF8]">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <CalendarX className="h-4 w-4 text-blue-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                      Engagement Drop
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[#1B1814]">
                    8 members who golfed 2x/week in Q3 haven't played since Nov 1.
                  </p>
                  <p className="mt-0.5 text-sm text-[#6B6560]">
                    Combined annual dues value: $312,000.
                    <span className="ml-1 font-medium text-[#F3922D]">
                      Suggested: pro shop outreach with winter clinic invite.
                    </span>
                  </p>
                </div>
              </div>

              {/* Summary Footer */}
              <div className="bg-[#FAFAF8] px-6 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[#6B6560]">
                    <span className="font-semibold text-[#1B1814]">12 insights</span> in
                    today's briefing · 4 high-priority
                  </p>
                  <span className="flex items-center gap-1 text-sm font-medium text-[#F3922D]">
                    View full briefing <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="mt-6 text-center text-sm text-[#8A8580]">
            ↑ Actual briefing format. Names changed. Data composited from founding partner clubs.
          </p>
        </div>
      </div>
    </section>
  );
}
```

In `AboutPage.jsx`, import and add after the founder story section:
```jsx
import SampleBriefingSection from '../components/SampleBriefingSection';

// ... inside the page component, after founder story, before team section:
<SampleBriefingSection />
```

**Lenses fixed:**
- GM +20 (the #1 request: "show me the actual product")
- Skeptic +15 (product transparency — previously zero product visuals)
- First-Timer +15 (finally answers "what does the morning briefing look like?")
- Closer +10 (demonstrates value concretely before asking for commitment)
- Storyteller +10 (the "day-in-the-life" scenario the Storyteller identified as missing)
- Architect +8 (high-quality component with clear hierarchy and interaction states)
- Brand Guardian +4 (uses cream background, proper typography, orange accents)

**Effort:** Medium (half day)

---

#### Change 3: Replace All Pure White Section Backgrounds with Cream/Sand Alternating Pattern

**File:** `src/landing/pages/AboutPage.jsx`, `src/landing/components/TeamSection.jsx`, `src/landing/components/TestimonialsSection.jsx`, `src/landing/components/FaqSection.jsx`, `src/landing/components/SocialProofSection.jsx`

**What to change:** Every light-background section currently uses `bg-white` or no background. Replace with alternating `bg-[#F7F5F2]` (cream) and `bg-white` to create visual rhythm and brand warmth.

**Current state:** Between the dark hero and dark footer, the middle ~70% of the page is pure white (#FFFFFF), creating a monotonous, generic mid-page experience. The Brand Guardian scored this as HIGH impact off-brand.

**New state — section background map:**

In `AboutPage.jsx`, apply this alternating pattern:
```jsx
{/* Hero — dark */}
<section className="bg-[#1B1814]">...</section>

{/* Founder Story — cream */}
<section className="bg-[#F7F5F2]">...</section>

{/* Sample Briefing — white (card pops against white) */}
<section className="bg-white">...</section>

{/* Team Section — cream */}
{/* In TeamSection.jsx, change outermost wrapper: */}
<section className="bg-[#F7F5F2] py-20 md:py-28">

{/* "Why this is hard to copy" — dark (already dark, keep) */}

{/* Intelligence in Action / Stats — white */}
<section className="bg-white py-20 md:py-28">

{/* Founding Partner Program — cream */}
<section className="bg-[#F7F5F2] py-20 md:py-28">

{/* Testimonials — white */}
{/* In TestimonialsSection.jsx: */}
<section className="bg-white py-20 md:py-28">

{/* FAQ — cream */}
{/* In FaqSection.jsx, change outermost wrapper: */}
<section className="bg-[#F7F5F2] py-20 md:py-28">

{/* Bottom CTA — dark */}
<section className="bg-[#1B1814]">...</section>
```

For each component file, update the outermost `<section>` or `<div>` wrapper. Example for `TeamSection.jsx`:
```jsx
// Before:
<section className="bg-white py-16 md:py-24">

// After:
<section className="bg-[#F7F5F2] py-20 md:py-28">
```

For `FaqSection.jsx`:
```jsx
// Before:
<section className="bg-white py-16 md:py-24">

// After:
<section className="bg-[#F7F5F2] py-20 md:py-28">
```

**Lenses fixed:**
- Architect +12 (breaks mid-page monotony, establishes visual rhythm — their #1 priority fix)
- Brand Guardian +10 (cream/sand backgrounds are core brand — single biggest brand fix)
- Mobile Inspector +3 (subtle visual section differentiation aids scanning on mobile)

**Effort:** Quick Win (<1 hr)

---

#### Change 4: Add Sticky Navigation CTA on Desktop + Sticky Bottom Bar on Mobile

**File:** `src/landing/components/Navbar.jsx` (or wherever the nav lives) + new `src/landing/components/StickyMobileCTA.jsx`

**What to change:** The page is 10+ viewport-heights long with no persistent CTA once you scroll past the hero. The Closer and Mobile Inspector both flagged this as critical.

**Current state:** Once a visitor scrolls past the hero, there's no persistent way to convert until they reach the next CTA section (several scrolls away). Mobile users must scroll 8-10+ screens to reach the bottom conversion form.

**New state:**

Update Navbar to include a CTA button that appears on scroll:
```jsx
// In Navbar.jsx — add scroll-triggered CTA visibility
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#1B1814]/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        {/* Logo */}
        <a href="/" className="font-fraunces text-xl font-bold text-white">
          swoop
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/#/" className="text-sm text-gray-300 transition-colors hover:text-white">Home</a>
          <a href="/#/about" className="text-sm text-white font-medium">About</a>
          <a href="/#/pricing" className="text-sm text-gray-300 transition-colors hover:text-white">Pricing</a>

          {/* CTA — appears after scroll */}
          <a
            href="#founding-partner"
            className={`rounded-lg bg-[#F3922D] px-5 py-2.5 text-sm font-semibold text-[#1B1814] transition-all duration-300 hover:bg-[#E5841F] ${
              scrolled ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
            }`}
          >
            Reserve Your Spot
          </a>
        </div>

        {/* Mobile hamburger — ensure 44x44 tap target */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Open menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
```

Create `src/landing/components/StickyMobileCTA.jsx`:
```jsx
import { useState, useEffect } from 'react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-[#E8E3DC] bg-white/95 px-4 py-3 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#founding-partner"
        className="flex w-full items-center justify-center rounded-lg bg-[#F3922D] py-3.5 text-base font-semibold text-[#1B1814] shadow-lg transition-colors hover:bg-[#E5841F]"
      >
        Reserve Your Club's Founding Spot
      </a>
    </div>
  );
}
```

Add to `AboutPage.jsx`:
```jsx
import StickyMobileCTA from '../components/StickyMobileCTA';

// At the end of the page component, before the closing fragment:
<StickyMobileCTA />
```

**Lenses fixed:**
- Closer +15 (sticky CTA captures intent at any scroll depth — flagged as 10-20% conversion leak)
- Mobile Inspector +12 (sticky bottom CTA is the #1 structural fix — "very high" impact)
- Architect +4 (proper interaction with scroll-triggered reveal)
- GM +3 (always-available path to action)

**Effort:** Medium (half day)

---

#### Change 5: Rewrite Founder Story Section with Visual Elements + Founder Photo

**File:** `src/landing/pages/AboutPage.jsx` (founder story section)

**What to change:** The "I was the GM" section is a dense wall of text with no visual relief — no photo, no pullout quotes, no bold keywords. Multiple agents flagged this as the emotional core of the page that underperforms visually.

**Current state:** Pure text block, approximately 700-800px wide, with "I was the GM. These were my spreadsheets." headline and several paragraphs. No founder photo. No visual breakup. Ends with "Founded 2023 · Scottsdale, AZ · Backed by former club GMs and hospitality tech investors."

**New state:**
```jsx
{/* Founder Story Section */}
<section className="bg-[#F7F5F2] py-20 md:py-28">
  <div className="mx-auto max-w-6xl px-5">
    <div className="grid items-start gap-12 md:grid-cols-[1fr,320px] lg:grid-cols-[1fr,380px]">
      {/* Left: Story */}
      <div>
        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-[#F3922D]">
          Our Origin Story
        </p>
        <h2 className="font-fraunces text-3xl font-bold leading-tight text-[#1B1814] md:text-4xl lg:text-5xl">
          I was the GM.{' '}
          <span className="text-[#B5956A]">These were my spreadsheets.</span>
        </h2>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-[#4A4540] md:text-lg md:leading-relaxed">
          <p>
            Before I started Swoop, I ran a private club in Scottsdale.{' '}
            <strong className="text-[#1B1814]">
              A 54-member retention report would take me the better part of a day.
            </strong>{' '}
            I'd pull POS exports into one spreadsheet, cross-reference tee sheet data
            in another, and try to spot the members who were quietly disengaging —
            usually six months too late.
          </p>
          <p>
            The data was all there. The problem was that{' '}
            <strong className="text-[#1B1814]">
              no tool was built to read it the way a GM thinks about it.
            </strong>{' '}
            Not as rows and columns — but as relationships, patterns, and the
            gut-level signals that tell you the Hendersons are pulling away before
            they ever mention leaving.
          </p>

          {/* Pull Quote */}
          <blockquote className="border-l-4 border-[#F3922D] pl-6 py-2">
            <p className="font-fraunces text-xl italic text-[#1B1814] md:text-2xl">
              "I kept thinking: if I could hire someone who read every receipt,
              every booking, and every no-show — and briefed me each morning —
              that's the GM I wanted to be."
            </p>
          </blockquote>

          <p>
            So I built it. Swoop reads your POS, CRM, and tee sheet overnight.{' '}
            <strong className="text-[#1B1814]">
              By 7 AM, you get the briefing that used to take your team hours to compile
            </strong>{' '}
            — with specific names, specific numbers, and specific recommendations
            your membership director, F&B manager, and front desk can act on immediately.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#8A8580]">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F3922D]" />
            Founded 2025 · Scottsdale, AZ
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F3922D]" />
            Built by former club GMs
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F3922D]" />
            Backed by hospitality tech operators
          </span>
        </div>
      </div>

      {/* Right: Founder Photo + Credential */}
      <div className="flex flex-col items-center md:sticky md:top-28">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src="/images/founder-cole.jpg"
            alt="Cole Frayne, Founder & CEO of Swoop"
            width={380}
            height={460}
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="mt-4 text-center">
          <p className="text-base font-semibold text-[#1B1814]">Cole Frayne</p>
          <p className="text-sm text-[#6B6560]">Founder & CEO</p>
          <p className="text-sm text-[#8A8580]">Former GM · 8 years in club operations</p>
          <a
            href="https://www.linkedin.com/in/colefrayne"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#F3922D] transition-colors hover:text-[#E5841F]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Lenses fixed:**
- Architect +10 (visual element breaks text wall, two-column layout creates compositional interest)
- Storyteller +8 (pull quote adds emotional peak, bold keywords aid scanning)
- Skeptic +10 (founder photo + LinkedIn link = verifiable credibility)
- GM +6 (founder photo + named background builds trust for the board test)
- First-Timer +5 (visual anchors aid progressive understanding)
- Brand Guardian +4 (brass accent on "These were my spreadsheets," cream bg, proper typography)
- Mobile Inspector +3 (photo stacks above on mobile, text properly sized at 16px+ base)

**Effort:** Medium (half day — includes sourcing/placing founder photo)

---

#### Change 6: Redesign Stats Section with Attribution, Animation, and Context

**File:** `src/landing/components/SocialProofSection.jsx` (or the component rendering "Intelligence in action")

**What to change:** The four stat cards (6 
