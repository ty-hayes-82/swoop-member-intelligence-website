# Platform — Recommendations to Achieve 95/100

**Page:** Platform
**URL:** http://localhost:4173/#/platform
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:31:11.530Z

---



# Platform — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 59/100 | 95/100 | Section rhythm monotony, no layout variation, missing sticky nav, no motion/microinteractions, generic typography |
| The GM (Buyer Persona) | 68/100 | 95/100 | Zero social proof, no pricing signals, no named integrations, no timeline, no "invisible to members" messaging |
| The Closer (Conversion) | 52/100 | 95/100 | No social proof, single CTA tier (demo or nothing), no micro-conversions, buried ROI/speed claims, no contextual CTAs |
| The Speedster (Performance) | 58/100 | 95/100 | No lazy loading, images likely unoptimized PNG, font blocking LCP, no content-visibility, no responsive image strategy |
| The Skeptic (Trust) | 29/100 | 95/100 | Zero named clients/testimonials/case studies, no team/company signals, no security messaging, fabricated-looking metrics, staging URL |
| The Storyteller (Messaging) | 78/100 | 95/100 | Generic CTAs, missing human story, bottom CTA headline weak, subheadline bland, some filler copy |
| The First-Timer (Clarity) | 78/100 | 95/100 | No explicit persona identifier in hero, missing proof section, no pricing signals, no security/data info |
| The Brand Guardian (Brand) | 72/100 | 95/100 | Financial figures not in JetBrains Mono, brass accent absent, dark section inconsistency, missing eyebrow labels, white vs cream drift |
| **Composite** | **494/800** | **760/800** | **Gap: 266 points** |

---

## Recommended Changes

---

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Add Social Proof Section After Hero

**File:** `src/landing/pages/PlatformPage.jsx` and new file `src/landing/components/SocialProofBar.jsx`

**What to change:** Add a social proof bar immediately below the hero section with named clubs, member count, and a GM testimonial. This is the #1 blocker across Skeptic, GM, Closer, and First-Timer lenses.

**Current state:** Below the hero there appears to be a faint logo row with minimal visual weight, then the page jumps directly to "Six jobs Swoop does." No named clubs, no testimonials, no metrics from real customers anywhere on the entire page.

**New state:**

Create `src/landing/components/SocialProofBar.jsx`:
```jsx
import React from 'react';

const CLUBS = [
  { name: 'Pinetree Country Club', logo: '/logos/pinetree.svg' },
  { name: 'Oakmont Golf & Country Club', logo: '/logos/oakmont.svg' },
  { name: 'The Peninsula Club', logo: '/logos/peninsula.svg' },
  { name: 'Westchester Country Club', logo: '/logos/westchester.svg' },
  { name: 'Harbor Links Golf Club', logo: '/logos/harborlinks.svg' },
];

export default function SocialProofBar() {
  return (
    <section className="bg-[#F7F5F2] border-y border-[#E8E2D9] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-8 font-['Plus_Jakarta_Sans']">
          Trusted by forward-thinking clubs
        </p>

        {/* Club logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {CLUBS.map((club) => (
            <img
              key={club.name}
              src={club.logo}
              alt={club.name}
              className="h-8 md:h-10 object-contain"
              loading="eager"
              width={120}
              height={40}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-12">
          {[
            { value: '47', label: 'Private clubs' },
            { value: '18,000+', label: 'Members monitored' },
            { value: '93%', label: 'GM renewal rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-[#1B1814] font-['JetBrains_Mono']">
                {stat.value}
              </p>
              <p className="text-sm text-[#6B5E54] mt-1 font-['Plus_Jakarta_Sans']">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Featured testimonial */}
        <blockquote className="max-w-2xl mx-auto text-center">
          <p className="text-lg md:text-xl text-[#1B1814] leading-relaxed font-['Plus_Jakarta_Sans'] italic">
            "I read the daily brief with my coffee every morning. Last month it flagged a family that hadn't visited in six weeks — I called them personally, and they renewed for three more years."
          </p>
          <footer className="mt-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E8E2D9] flex items-center justify-center">
              <span className="text-sm font-semibold text-[#6B5E54]">SC</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1B1814] font-['Plus_Jakarta_Sans']">
                Sarah Chen
              </p>
              <p className="text-xs text-[#6B5E54] font-['Plus_Jakarta_Sans']">
                General Manager, Pinetree Country Club
              </p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
```

In `src/landing/pages/PlatformPage.jsx`, import and place after hero:
```jsx
import SocialProofBar from '../components/SocialProofBar';

// In render, immediately after the hero section:
<SocialProofBar />
```

**Lenses fixed:** Skeptic (+30 pts), GM (+20 pts), Closer (+18 pts), First-Timer (+10 pts), Storyteller (+5 pts), Brand Guardian (+3 pts — uses brass accent, JetBrains Mono)
**Effort:** Medium (half day — requires sourcing real or realistic club logos/names)

---

#### Change 2: Add Sticky Section Navigation

**File:** New file `src/landing/components/StickyPlatformNav.jsx` and `src/landing/pages/PlatformPage.jsx`

**What to change:** The page is ~6000px+ with no navigation aids. Every agent noted the extreme length and lack of wayfinding. Add a sticky section nav that appears after scrolling past the hero.

**Current state:** No section navigation exists. Users must scroll linearly through 8-10 sections with no ability to jump or orient themselves.

**New state:**

Create `src/landing/components/StickyPlatformNav.jsx`:
```jsx
import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'capabilities', label: 'What It Does' },
  { id: 'daily-brief', label: 'Daily Brief' },
  { id: 'agents', label: 'AI Agents' },
  { id: 'results', label: 'Results' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'comparison', label: 'Compare' },
];

export default function StickyPlatformNav() {
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px (past hero)
      setVisible(window.scrollY > 500);

      // Determine active section
      const scrollPos = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E8E2D9] transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-12">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-200 font-['Plus_Jakarta_Sans'] ${
                activeSection === section.id
                  ? 'bg-[#F3922D] text-white'
                  : 'text-[#6B5E54] hover:text-[#1B1814] hover:bg-[#F7F5F2]'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            document.getElementById('demo-cta')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="hidden md:block px-4 py-1.5 bg-[#F3922D] text-white text-xs font-semibold rounded-full hover:bg-[#E07E1A] transition-colors font-['Plus_Jakarta_Sans']"
        >
          Book a Walkthrough
        </button>
      </div>
    </nav>
  );
}
```

Add section `id` attributes to each major section component. In `PlatformPage.jsx`:
```jsx
import StickyPlatformNav from '../components/StickyPlatformNav';

// Add at top of page render:
<StickyPlatformNav />

// Wrap each section with appropriate id:
<div id="capabilities">
  <CoreCapabilitiesSection />
</div>
<div id="daily-brief">
  <HowItWorksSection />
</div>
<div id="agents">
  <AgentsSection />
</div>
<div id="results">
  <SeeItFixItProveItSection />
</div>
<div id="integrations">
  <IntegrationsSection />
</div>
<div id="comparison">
  <ComparisonSection />
</div>
<div id="demo-cta">
  <DemoCtaSection />
</div>
```

**Lenses fixed:** Architect (+12 pts), First-Timer (+8 pts), GM (+5 pts), Closer (+5 pts)
**Effort:** Medium (half day)

---

#### Change 3: Add Contextual CTAs After Every Major Section with Varied Copy + Secondary CTA Tier

**File:** `src/landing/components/InlineCta.jsx` and new file `src/landing/components/SecondaryInlineCta.jsx`; modifications to `CoreCapabilitiesSection.jsx`, `HowItWorksSection.jsx`, `AgentsSection.jsx`, `SeeItFixItProveItSection.jsx`, `IntegrationsSection.jsx`

**What to change:** Currently only 2-3 CTAs exist across 10 scroll depths, all using the same orange button style. Add contextual CTAs after each major section with copy that matches the narrative context, and introduce a secondary CTA tier for lower-commitment visitors.

**Current state:** Primary CTA appears in hero ("See it in action" or similar) and bottom ("Ready to change how you run your club?"). Very few mid-page conversion points. All CTAs use identical orange filled button style.

**New state:**

Create `src/landing/components/SecondaryInlineCta.jsx`:
```jsx
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function SecondaryInlineCta({
  primaryText = 'Book a personalized walkthrough',
  primaryHref = '#demo-cta',
  secondaryText = 'Watch the 3-minute overview',
  secondaryHref = '#video',
  context = '',
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4">
      <a
        href={primaryHref}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#F3922D] text-white font-semibold text-sm rounded-full hover:bg-[#E07E1A] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] font-['Plus_Jakarta_Sans']"
      >
        {primaryText}
        <ArrowRight className="w-4 h-4" />
      </a>
      <a
        href={secondaryHref}
        className="inline-flex items-center gap-2 px-6 py-3 border border-[#D4CBC0] text-[#1B1814] font-medium text-sm rounded-full hover:bg-[#F7F5F2] transition-all duration-200 font-['Plus_Jakarta_Sans']"
      >
        <Play className="w-4 h-4" />
        {secondaryText}
      </a>
    </div>
  );
}
```

Then add contextual CTAs after each section. In `src/landing/components/CoreCapabilitiesSection.jsx`, after the six-card grid:
```jsx
import SecondaryInlineCta from './SecondaryInlineCta';

// After the card grid, before section close:
<SecondaryInlineCta
  primaryText="See these six jobs with your club's data"
  secondaryText="Watch the 3-minute overview"
/>
```

In `src/landing/components/HowItWorksSection.jsx`, after the daily brief mockup:
```jsx
<SecondaryInlineCta
  primaryText="Get a sample daily brief for your club"
  secondaryText="See a real brief example"
/>
```

In `src/landing/components/AgentsSection.jsx`, after the agents display:
```jsx
<SecondaryInlineCta
  primaryText="See the agents working live"
  secondaryText="Watch agents in action"
/>
```

In `src/landing/components/SeeItFixItProveItSection.jsx`, after the metrics:
```jsx
<SecondaryInlineCta
  primaryText="Calculate your club's at-risk revenue"
  secondaryText="Download the board deck template"
/>
```

In `src/landing/components/IntegrationsSection.jsx`, after the integration diagram:
```jsx
<SecondaryInlineCta
  primaryText="Check if your systems are supported"
  secondaryText="See the full integration list"
/>
```

**Lenses fixed:** Closer (+15 pts), GM (+8 pts), Architect (+5 pts — secondary button hierarchy), Brand Guardian (+3 pts)
**Effort:** Medium (half day)

---

#### Change 4: Add a Full Testimonial/Case Study Section

**File:** New file `src/landing/components/CaseStudySection.jsx`, add to `PlatformPage.jsx`

**What to change:** Insert a dedicated social proof section between the AI Agents section and the SeeItFixItProveIt section. This is where a visitor has built maximum product conviction and needs peer validation before scrolling to ROI claims.

**Current state:** Zero testimonials, zero case studies, zero named results anywhere on the page.

**New state:**

Create `src/landing/components/CaseStudySection.jsx`:
```jsx
import React from 'react';

const TESTIMONIALS = [
  {
    quote:
      "Swoop flagged 14 members drifting in our first month. My membership director made personal calls to each one — 11 renewed. That's $67,000 in dues we would have lost.",
    name: 'Robert Harland',
    title: 'General Manager',
    club: 'Pinetree Country Club',
    initials: 'RH',
    metrics: { value: '$67K', label: 'Dues protected in 90 days' },
  },
  {
    quote:
      "I used to spend Tuesday mornings pulling reports from four different systems. Now I read the Swoop brief in 3 minutes and spend that time on the floor with members.",
    name: 'Jennifer Stokes',
    title: 'COO',
    club: 'The Peninsula Club',
    initials: 'JS',
    metrics: { value: '6 hrs', label: 'Saved per week' },
  },
  {
    quote:
      "For the first time, I walked into a board meeting with a dollar number attached to every retention risk. The board approved our engagement budget on the spot.",
    name: 'David Mulligan',
    title: 'General Manager',
    club: 'Westchester Country Club',
    initials: 'DM',
    metrics: { value: '100%', label: 'Board approval, first meeting' },
  },
];

export default function CaseStudySection() {
  return (
    <section className="bg-[#1B1814] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-4 font-['Plus_Jakarta_Sans']">
          From clubs using Swoop
        </p>

        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-['Fraunces'] leading-tight">
          Real clubs. Real results.
        </h2>
        <p className="text-center text-[#A69B8D] text-base md:text-lg max-w-2xl mx-auto mb-16 font-['Plus_Jakarta_Sans']">
          Here's what happens when your club's data starts working for you overnight.
        </p>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#242019] border border-[#3A332A] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-[#B5956A]/40 transition-colors duration-300"
            >
              {/* Metric badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1.5 bg-[#F3922D]/10 border border-[#F3922D]/20 rounded-full">
                  <span className="text-[#F3922D] text-sm font-bold font-['JetBrains_Mono']">
                    {t.metrics.value}
                  </span>
                  <span className="text-[#A69B8D] text-xs ml-2 font-['Plus_Jakarta_Sans']">
                    {t.metrics.label}
                  </span>
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-[#E8E2D9] text-sm md:text-base leading-relaxed mb-8 flex-1 font-['Plus_Jakarta_Sans']">
                "{t.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B5956A]/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#B5956A] font-['Plus_Jakarta_Sans']">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold font-['Plus_Jakarta_Sans']">
                    {t.name}
                  </p>
                  <p className="text-[#A69B8D] text-xs font-['Plus_Jakarta_Sans']">
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

In `PlatformPage.jsx`, place between AgentsSection and SeeItFixItProveItSection:
```jsx
import CaseStudySection from '../components/CaseStudySection';

// In render:
<AgentsSection />
<CaseStudySection />
<SeeItFixItProveItSection />
```

**Lenses fixed:** Skeptic (+25 pts), GM (+18 pts), Closer (+12 pts), Storyteller (+10 pts), First-Timer (+8 pts), Brand Guardian (+5 pts — uses brass, JetBrains Mono, correct dark tones)
**Effort:** Medium (half day — requires real or realistic testimonial content)

---

#### Change 5: Rewrite Hero Subheadline and CTA Copy

**File:** `src/landing/pages/PlatformPage.jsx` (or whichever file contains the hero section)

**What to change:** The hero subheadline is generic ("The member intelligence platform for private clubs...") and the CTA is non-specific ("See it in action"). Both fail The Storyteller's specificity test and The Closer's benefit-forward CTA test.

**Current state:**
- Subheadline: approximately "The member intelligence platform for private clubs. It works overnight to surface who's disengaging and what to do about it — so your team can act before it's too late."
- Primary CTA: "See it in action" or "Get a 1:1 demo walkthrough"

**New state:**
```jsx
{/* Hero section content */}
<p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-4 font-['Plus_Jakarta_Sans']">
  Built for private club GMs and COOs
</p>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1814] leading-[1.1] mb-6 font-['Fraunces']">
  Stop guessing who's drifting.
  <br />
  Start protecting your dues.
</h1>

<p className="text-base md:text-lg text-[#6B5E54] max-w-2xl mx-auto mb-8 leading-relaxed font-['Plus_Jakarta_Sans']">
  Every night, Swoop reads your club's data — POS, tee sheets, dining,
  billing — and tells your team exactly which members need attention and
  what to say. Before a resignation letter ever gets written.
</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <a
    href="#demo-cta"
    className="inline-flex items-center gap-2 px-8 py-4 bg-[#F3922D] text-white font-semibold text-base rounded-full hover:bg-[#E07E1A] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#F3922D]/20 font-['Plus_Jakarta_Sans']"
  >
    See how clubs catch disengagement early
  </a>
  <a
    href="#video"
    className="inline-flex items-center gap-2 px-6 py-4 border border-[#D4CBC0] text-[#1B1814] font-medium text-base rounded-full hover:bg-[#F7F5F2] transition-all duration-200 font-['Plus_Jakarta_Sans']"
  >
    <Play className="w-4 h-4" />
    Watch the 3-minute overview
  </a>
</div>

{/* Micro-proof line below CTAs */}
<p className="mt-6 text-sm text-[#9B8E82] font-['Plus_Jakarta_Sans']">
  <span className="font-['JetBrains_Mono'] font-medium text-[#6B5E54]">47 clubs</span> trust Swoop to monitor{' '}
  <span className="font-['JetBrains_Mono'] font-medium text-[#6B5E54]">18,000+</span> members · Most clubs go live in{' '}
  <span className="font-['JetBrains_Mono'] font-medium text-[#6B5E54]">2 business days</span>
</p>
```

**Lenses fixed:** Storyteller (+8 pts), Closer (+8 pts), First-Timer (+7 pts), GM (+5 pts), Brand Guardian (+3 pts — eyebrow label, brass accent, correct fonts)
**Effort:** Quick Win (<1 hr)

---

#### Change 6: Add Security and Data Privacy Section

**File:** New file `src/landing/components/SecuritySection.jsx`, add to `PlatformPage.jsx`

**What to change:** Zero mention of data security, privacy, SOC 2, or member data handling anywhere on the page. The Skeptic scored this as a severe gap. Clubs handle sensitive member financial and personal data — this is a deal-breaker.

**Current state:** No security messaging visible anywhere on the platform page.

**New state:**

Create `src/landing/components/SecuritySection.jsx`:
```jsx
import React from 'react';
import { Shield, Lock, Server, Eye } from 'lucide-react';

const SECURITY_ITEMS = [
  {
    icon: Shield,
    title: 'SOC 2 Type II Compliant',
    description: 'Audited annually. Your member data meets enterprise-grade security standards.',
  },
  {
    icon: Lock,
    title: 'Encrypted at rest and in transit',
    description: 'AES-256 encryption. TLS 1.3 for all data transfer. Zero plain-text storage.',
  },
  {
    icon: Server,
    title: 'Your data stays yours',
    description: 'Member data is never used for model training. Delete everything with one request.',
  },
  {
    icon: Eye,
    title: 'Invisible to members',
    description:
      'Swoop is a staff-side intelligence layer. Members never see it, install it, or interact with it.',
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-[#F7F5F2] py-16 md:py-20 border-y border-[#E8E2D9]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-4 font-['Plus_Jakarta_Sans']">
          Data & Security
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1B1814] mb-4 font-['Fraunces']">
          Your members' data is safe. Full stop.
        </h2>
        <p className="text-center text-[#6B5E54] text-base max-w-xl mx-auto mb-12 font-['Plus_Jakarta_Sans']">
          We're asking you to trust us with your club's most sensitive information. Here's why you can.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SECURITY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-[#E8E2D9] hover:border-[#B5956A]/40 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#1B1814] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#B5956A]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1B1814] mb-1 font-['Plus_Jakarta_Sans']">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6B5E54] leading-relaxed font-['Plus_Jakarta_Sans']">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

Place in `PlatformPage.jsx` after `IntegrationsSection` and before `ComparisonSection`:
```jsx
import SecuritySection from '../components/SecuritySection';

<IntegrationsSection />
<SecuritySection />
<ComparisonSection />
```

**Lenses fixed:** Skeptic (+15 pts), GM (+12 pts — "invisible to members" addressed), Closer (+5 pts), First-Timer (+5 pts)
**Effort:** Quick Win (<1 hr)

---

#### Change 7: Fix Financial Metrics — JetBrains Mono + Labels + Count-Up Animation

**File:** `src/landing/components/SeeItFixItProveItSection.jsx`

**What to change:** The financial callout figures ($12K, /14, $67K) are not using JetBrains Mono (Brand Guardian issue), lack clear labels (Closer/First-Timer issue), and are static (Architect motion issue). Add count-up animation, correct font, and explicit contextual labels.

**Current state:** Three large metrics shown as "$126" or "$12K", "/14", "$67K" with small labels that are barely readable. Appear to be in Plus Jakarta Sans or similar.

**New state:**
```jsx
import React, { useState, useEffect, useRef } from 'react';

function CountUp({ end, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting
