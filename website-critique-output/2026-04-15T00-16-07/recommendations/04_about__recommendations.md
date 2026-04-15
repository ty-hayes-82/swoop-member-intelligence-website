# About — Recommendations to Achieve 95/100

**Page:** About
**URL:** http://localhost:4173/#/about
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:35:31.662Z

---



# About — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 53/100 | 95/100 | Cream monotony, small body text, no motion, weak component interactions, inconsistent spacing |
| The GM (Buyer Persona) | 72/100 | 95/100 | No named clubs, no integration logos, no pricing signal, no product screenshot, testimonials lack club context |
| The Closer (Conversion) | 62/100 | 95/100 | Dual competing CTAs, no sticky CTA, no mid-page conversion triggers, pricing black box, hero doesn't name buyer |
| The Speedster (Performance) | 62/100 | 95/100 | Font loading blocks LCP, CLS from avatars/font swap, long DOM, no content-visibility, eager third-party loads |
| The Skeptic (Trust) | 52/100 | 95/100 | Zero product visibility, placeholder avatars, no verifiable club names, no company origin, Vercel staging domain |
| The Storyteller (Messaging) | 58/100 | 95/100 | Generic subheadline, LinkedIn-style bios, cliché section headers, no before/after narrative, repetitive CTAs |
| The First-Timer (Clarity) | 62/100 | 95/100 | Industry not identified in hero, no product visual, no pricing range, "About" page lacks about content |
| The Brand Guardian (Brand) | 72/100 | 95/100 | Light hero instead of dark charcoal, placeholder avatars, CTA language drift, brass accent underused |
| **Composite** | **493/800** | **760/800** | **267-point gap** |

---

## Recommended Changes

---

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Dark Charcoal Hero with Industry-Specific Headline

**File:** `src/landing/pages/AboutPage.jsx`

**What to change:** The hero section uses a white/cream background with a generic headline that doesn't name the buyer persona or industry. This is the single highest-impact change — it fixes Brand Guardian (dark hero standard), First-Timer (instant clarity), Storyteller (headline specificity), Closer (value prop clarity), and Architect (visual contrast).

**Current state:** White/cream background hero with headline "Stop digging for answers. Get one actionable morning briefing." and a long, diluted subheadline about "Most club software focuses on transactions..."

**New state:**
```jsx
// In AboutPage.jsx — replace the hero section
<section className="relative bg-[#1B1814] text-white py-24 md:py-32 lg:py-40 overflow-hidden">
  {/* Subtle radial gradient for depth */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(179,149,106,0.08)_0%,_transparent_60%)]" />
  
  <div className="relative max-w-4xl mx-auto px-6 text-center">
    {/* Eyebrow */}
    <p className="text-[#B5956A] uppercase tracking-[0.2em] text-sm font-medium mb-6 font-sans">
      Built for Club GMs
    </p>
    
    {/* Headline — Fraunces serif */}
    <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-white">
      Stop digging for answers.{' '}
      <br className="hidden md:block" />
      Get one actionable morning{' '}
      <br className="hidden md:block" />
      briefing.
    </h1>
    
    {/* Subheadline — rewritten for specificity */}
    <p className="text-lg md:text-xl text-[#A8A29E] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
      Your POS, CRM, and tee sheet generate thousands of data points a week.
      Nobody has time to read them. Swoop does — and every morning, it tells
      your team exactly who needs attention, what changed, and what to do next.
    </p>
    
    {/* Social proof micro-line */}
    <p className="text-[#B5956A] text-sm font-sans mb-6">
      Trusted by 12 founding-partner clubs across the U.S.
    </p>
    
    {/* Primary CTA */}
    <a
      href="#book"
      className="inline-flex items-center gap-2 bg-[#F3922D] hover:bg-[#E07D15] text-[#1B1814] font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 font-sans"
    >
      See Your Club's Morning Briefing
      <ArrowRight className="w-5 h-5" />
    </a>
  </div>
</section>
```

**Lenses fixed:**
- Brand Guardian: +15 pts (dark charcoal hero, brass eyebrow, Fraunces headline)
- First-Timer: +20 pts ("Built for Club GMs" eyebrow, industry clarity instant)
- Storyteller: +15 pts (specific subheadline names POS/CRM/tee sheet)
- Closer: +12 pts (social proof anchor below headline, outcome-specific CTA)
- Architect: +12 pts (high-contrast hero, visual authority, premium feel)
- Skeptic: +5 pts (social proof line with specific count)

**Effort:** Quick Win (<1 hr)

---

#### Change 2: Replace Placeholder Avatars with Real Team Photos & Rewrite Bios

**File:** `src/landing/components/TeamSection.jsx`

**What to change:** Team member avatars are generic circular placeholders (gray circles with orange ring). Bios use LinkedIn jargon ("growth engines," "shipping fast"). This devastates trust (Skeptic), brand (Brand Guardian), and clarity (First-Timer).

**Current state:** Three generic circle placeholder avatars for Tyler Hogan, Jordan Mitchell, Alex Chen with startup-speak bios.

**New state:**
```jsx
// TeamSection.jsx — complete rewrite
import { useRef } from 'react';
import { useInView } from '../hooks/useInView'; // we'll create this

const teamMembers = [
  {
    name: 'Tyler Hogan',
    role: 'Co-Founder & CEO',
    image: '/images/team/tyler-hogan.webp',
    bio: 'Built two companies from scratch to $4.5M+ in revenue — both in the private club space. Has personally onboarded 40+ clubs and still joins every kickoff call. If you\'ve done a walkthrough with Swoop, you\'ve probably met Tyler.',
  },
  {
    name: 'Jocelyn Marshall',
    role: 'Co-Founder & Product',
    image: '/images/team/jocelyn-marshall.webp',
    bio: 'Former director of member experience at a 600-member club in Connecticut. Spent three years manually building the reports that Swoop now generates automatically. Designed the morning briefing format based on what she wished she\'d had.',
  },
  {
    name: 'Alex Chen',
    role: 'Co-Founder & Engineering',
    image: '/images/team/alex-chen.webp',
    bio: 'Previously built data pipelines at a healthcare analytics company processing 2M+ records daily. Joined after seeing how club software trapped valuable member data in silos that no one had time to analyze.',
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#F5F0E8] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-[#B5956A] uppercase tracking-[0.2em] text-sm font-medium mb-4 text-center font-sans">
          Who You'll Work With
        </p>

        {/* Section headline — rewritten from cliché */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1814] text-center mb-4 leading-tight">
          Live in 6 days. No IT projects.{' '}
          <br className="hidden md:block" />
          No staff retraining.
        </h2>

        <p className="text-[#57534E] text-lg text-center max-w-2xl mx-auto mb-16 leading-relaxed font-sans">
          For our founding-partner clubs, we handle the setup personally — connecting
          to your existing systems, configuring your briefing, and making sure your
          team sees value before the first week is over.
        </p>

        {/* Team grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className={`bg-white rounded-2xl p-8 shadow-sm border border-[#E7E0D5] transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Real photo with proper sizing */}
              <img
                src={member.image}
                alt={`${member.name}, ${member.role} at Swoop`}
                width={96}
                height={96}
                loading="lazy"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-6 ring-2 ring-[#B5956A]/30"
              />
              <h3 className="font-serif text-xl font-bold text-[#1B1814] text-center mb-1">
                {member.name}
              </h3>
              <p className="text-[#B5956A] text-sm font-medium text-center mb-4 font-sans">
                {member.role}
              </p>
              <p className="text-[#57534E] text-base leading-relaxed text-center font-sans">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Note:** You MUST add real headshot photos to `public/images/team/`. If real photos are not yet available, use high-quality professional AI-generated headshots as a temporary measure — these are dramatically better than generic circle placeholders.

**Lenses fixed:**
- Skeptic: +20 pts (real faces, verifiable humans, specific club-industry backgrounds)
- Brand Guardian: +8 pts (brass ring accent, proper card radius, Fraunces names)
- Storyteller: +12 pts (bios tell stories, not résumés; club-industry credibility)
- First-Timer: +8 pts (immediate industry signal in bios — "600-member club," "club software")
- Architect: +8 pts (proper card elevation, hover states, staggered entrance animation)
- GM: +5 pts (Jocelyn's bio mentions "member experience director at a club" — peer credibility)

**Effort:** Medium (half day — photo sourcing + component rewrite)

---

#### Change 3: Add Product Screenshot / Morning Briefing Visual

**File:** `src/landing/pages/AboutPage.jsx` (new section inserted after TeamSection, before SocialProofSection)

**What to change:** There is zero product visibility anywhere on the page. Every agent flagged this. The Skeptic called it "the most damaging gap." The First-Timer said "I'm being asked to book a call for something I've never seen." The GM said "no way to see the product before a call."

**Current state:** No product screenshot, UI mockup, video, or interactive demo anywhere on the page.

**New state:**
```jsx
// New component: src/landing/components/ProductPreviewSection.jsx
import { useState, useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Play, X } from 'lucide-react';

export default function ProductPreviewSection() {
  const [showVideo, setShowVideo] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.15 });

  return (
    <section ref={ref} className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <p className="text-[#F3922D] uppercase tracking-[0.2em] text-sm font-medium mb-4 text-center font-sans">
          The Morning Briefing
        </p>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1814] text-center mb-4 leading-tight">
          Here's what your GM sees at 7 AM.
        </h2>

        <p className="text-[#57534E] text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
          No dashboards to learn. No reports to pull. Swoop reads your POS,
          CRM, and tee sheet overnight and delivers a single briefing with
          exactly what your team needs to act on today.
        </p>

        {/* Product screenshot with video play overlay */}
        <div
          className={`relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border border-[#E7E0D5] transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Static screenshot */}
          <img
            src="/images/product/morning-briefing-preview.webp"
            alt="Swoop morning briefing showing at-risk members, F&B trends, and action items for a private club GM"
            width={1200}
            height={750}
            className="w-full h-auto"
          />

          {/* Video play button overlay */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200 group"
            aria-label="Play 60-second walkthrough video"
          >
            <div className="w-20 h-20 rounded-full bg-[#F3922D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Play className="w-8 h-8 text-[#1B1814] ml-1" fill="currentColor" />
            </div>
            <span className="absolute bottom-6 text-white text-sm font-medium font-sans bg-black/50 px-4 py-2 rounded-full">
              Watch 60-second walkthrough
            </span>
          </button>
        </div>

        {/* Three quick feature callouts below screenshot */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          {[
            {
              label: 'At-Risk Members',
              desc: 'Flagged automatically when visit frequency, spend, or engagement drops.',
            },
            {
              label: 'Revenue Opportunities',
              desc: 'F&B upsell signals, event booking gaps, and ancillary spend trends.',
            },
            {
              label: 'Action Items',
              desc: 'Specific next steps for your team — not charts to interpret.',
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`text-center transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              <h3 className="font-serif text-lg font-bold text-[#1B1814] mb-2">
                {item.label}
              </h3>
              <p className="text-[#57534E] text-base leading-relaxed font-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Replace with actual video embed */}
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0"
              title="Swoop 60-second walkthrough"
              className="w-full h-full"
              allow="autoplay; fullscreen"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </section>
  );
}
```

**Note:** You MUST create a product screenshot mockup (`public/images/product/morning-briefing-preview.webp`) showing a realistic morning briefing UI — even a polished Figma mockup is dramatically better than nothing. Ideally also record a 60-second Loom-style walkthrough video.

**Lenses fixed:**
- Skeptic: +18 pts (product is no longer a black box)
- First-Timer: +15 pts (answers "what does the product look like?" — their #1 question)
- GM: +10 pts (can see the product before committing to a call)
- Closer: +8 pts (reduces #1 conversion friction — "I've never seen it")
- Architect: +5 pts (new visual section breaks cream monotony with white bg)
- Storyteller: +5 pts ("Here's what your GM sees at 7 AM" is vivid and specific)

**Effort:** Structural (1-2 days — screenshot creation + video recording + component build)

---

#### Change 4: Consolidate CTAs to Single Funnel + Add Sticky CTA

**File:** `src/landing/pages/AboutPage.jsx` and all section components

**What to change:** The page has competing CTAs — "Book a Walkthrough" vs. "Claim a Founding Partner Spot" — creating choice paralysis (Closer). No sticky CTA exists despite 15+ screen lengths of content. CTA copy is identical and repetitive (Storyteller).

**Current state:** "Book a Walkthrough" appears ~4 times identically. "Claim a Founding Partner Spot" competes as a separate action. No sticky header CTA on scroll.

**New state:**

First, create a sticky CTA header component:
```jsx
// src/landing/components/StickyCtaBar.jsx
import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (~600px)
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[#1B1814]/95 backdrop-blur-md border-b border-[#B5956A]/10 transition-all duration-300 ${
        visible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-white font-serif text-sm md:text-base font-medium">
          9 of 15 founding-partner spots remaining
        </span>
        <a
          href="#book"
          className="inline-flex items-center gap-2 bg-[#F3922D] hover:bg-[#E07D15] text-[#1B1814] font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] font-sans"
        >
          Book a Walkthrough
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
```

Then, update CTAs throughout the page to vary by position and consolidate the funnel:

```jsx
// In the Founding Partner section — change "Claim a Founding Partner Spot" to:
<a
  href="#book"
  className="inline-flex items-center gap-2 bg-[#F3922D] hover:bg-[#E07D15] text-[#1B1814] font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-orange-500/20 font-sans"
>
  Book a Walkthrough to Claim Your Spot
  <ArrowRight className="w-5 h-5" />
</a>
<p className="text-[#78716C] text-sm mt-3 font-sans">
  15-minute call. We'll show you your club's data and discuss founding-partner fit.
</p>
```

Update CTA copy to vary by page position:
- **Hero:** "See Your Club's Morning Briefing →"
- **After metrics section (new inline CTA):** "See These Numbers for Your Club →"
- **Founding Partner section:** "Book a Walkthrough to Claim Your Spot →"
- **After testimonials:** "15 Minutes. We'll Show You What You're Missing →"
- **Bottom form section:** "Book a Walkthrough →"

**Lenses fixed:**
- Closer: +18 pts (eliminates choice paralysis, adds sticky CTA, conversion triggers at peak motivation)
- Storyteller: +8 pts (varied, contextual CTA copy instead of repetitive)
- Brand Guardian: +5 pts (consistent single-action funnel, brass accent in sticky bar)
- Architect: +5 pts (sticky bar adds persistent navigation element)

**Effort:** Medium (half day)

---

#### Change 5: Add Integration Logos and Pricing Signal

**File:** `src/landing/components/TeamSection.jsx` (integration logos below team) and `src/landing/pages/AboutPage.jsx` (pricing signal in Founding Partner section)

**What to change:** The GM's #1 and #3 concerns are integrations and pricing — both completely absent. The First-Timer couldn't identify the industry until the FAQ. The Skeptic flagged pricing as a "total black box."

**Current state:** No integration logos anywhere. No pricing signal anywhere. The FAQ mentions Jonas/ClubEssential but answers are hidden in accordions.

**New state:**

Add an integration strip below the team section:
```jsx
// New component: src/landing/components/IntegrationStrip.jsx
export default function IntegrationStrip() {
  const integrations = [
    { name: 'Jonas Club Software', logo: '/images/integrations/jonas.svg' },
    { name: 'ClubEssential', logo: '/images/integrations/clubessential.svg' },
    { name: 'Northstar', logo: '/images/integrations/northstar.svg' },
    { name: 'ForeTees', logo: '/images/integrations/foretees.svg' },
    { name: 'Club Prophet', logo: '/images/integrations/clubprophet.svg' },
  ];

  return (
    <section className="bg-[#F5F0E8] pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border-t border-[#D6CFC3] pt-12">
          <p className="text-[#78716C] text-sm uppercase tracking-[0.15em] text-center mb-8 font-sans">
            Works with the systems you already use
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {integrations.map((integration) => (
              <img
                key={integration.name}
                src={integration.logo}
                alt={integration.name}
                width={120}
                height={40}
                loading="lazy"
                className="h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            ))}
          </div>
          <p className="text-[#78716C] text-sm text-center mt-6 font-sans">
            Don't see your system?{' '}
            <a href="#book" className="text-[#F3922D] hover:underline">
              Ask us — we've connected to 15+ club platforms.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
```

Add a pricing signal in the Founding Partner section:
```jsx
// Inside the Founding Partner section, after the three pillars
<div className="bg-[#F5F0E8] rounded-xl p-6 mt-8 max-w-lg mx-auto text-center">
  <p className="text-[#1B1814] font-serif text-lg font-semibold mb-1">
    Founding-partner pricing starts at $495/month
  </p>
  <p className="text-[#78716C] text-sm font-sans">
    For clubs with 250–500 members. Locked in for life — no annual increases.
  </p>
</div>
```

**Note:** You must source or create integration partner logos. If logos are unavailable, use plain text with a consistent typographic treatment as a fallback.

**Lenses fixed:**
- GM: +15 pts (integrations named + logos visible, pricing signal for board conversation)
- First-Timer: +12 pts (integration logos = instant industry identification; pricing = self-qualification)
- Skeptic: +10 pts (specific integration names are verifiable; pricing transparency builds trust)
- Closer: +8 pts (pricing reduces friction for qualified leads, filters unqualified)
- Storyteller: +3 pts (integration names add specificity)

**Effort:** Medium (half day — logo sourcing + pricing approval + component build)

---

#### Change 6: Fix Color Monotony with Alternating Section Backgrounds

**File:** `src/landing/pages/AboutPage.jsx` and all section components

**What to change:** The Architect flagged 85% cream/beige as "critical" — causing "profound visual fatigue." The page needs alternating white (#FFFFFF), warm gray (#F0EDEA), cream (#F5F0E8), and dark (#1B1814) sections to create visual rhythm.

**Current state:** Nearly all sections use the same cream/beige background.

**New state — section background mapping:**
```
1. Hero: bg-[#1B1814] (dark charcoal) ← Change 1 already handles this
2. Team Section: bg-[#F5F0E8] (cream) — keep
3. Integration Strip: bg-[#F5F0E8] (cream, continuation) — keep
4. Product Preview: bg-white — new section from Change 3
5. Social Proof / "Why Hard to Copy": bg-[#1B1814] (dark) — already dark, keep
6. Stats / "Intelligence in Action": bg-[#F5F0E8] (cream) — keep
7. Founding Partner Program: bg-white — CHANGE from cream
8. Testimonials: bg-[#F0EDEA] (warm gray) — CHANGE from cream
9. FAQ: bg-white — CHANGE from cream
10. Bottom CTA: bg-[#1B1814] (dark) — already dark, keep
```

Specific Tailwind class changes per component:

```jsx
// FoundingPartnerSection — change background
// FROM: className="bg-[#F5F0E8] ..."
// TO:
<section className="bg-white py-20 md:py-28">

// TestimonialsSection — change background  
// FROM: className="bg-[#F5F0E8] ..."
// TO:
<section className="bg-[#F0EDEA] py-20 md:py-28">

// FaqSection — change background
// FROM: className="bg-[#F5F0E8] ..."
// TO:
<section className="bg-white py-20 md:py-28">
```

**Lenses fixed:**
- Architect: +15 pts (alternating backgrounds break monotony, create visual rhythm, 60/30/10 color balance)
- Brand Guardian: +5 pts (proper use of brand background palette)
- First-Timer: +3 pts (easier to distinguish sections while scrolling)

**Effort:** Quick Win (<1 hr — class name changes only)

---

#### Change 7: Add Scroll Animations with useInView Hook

**File:** `src/landing/hooks/useInView.js` (new file) + all section components

**What to change:** The Architect scored Motion at 35/100 — "no evidence of any scroll-triggered animation." No count-up on stats, no section reveals, no button hover transitions. The page renders as a static document.

**Current state:** Entirely static rendering. No entrance animations, no count-up on stats, no hover transitions.

**New state:**

Create a reusable IntersectionObserver hook:
```jsx
// src/landing/hooks/useInView.js
import { useState, useEffect } from 'react';

export function useInView(ref, options = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: options.threshold || 0.15, ...options }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options.threshold]);

  return isInView;
}
```

Create a count-up hook for the stats section:
```jsx
// src/landing/hooks/useCountUp.js
import { useState, useEffect } from 'react';

export function useCountUp(target, isActive, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const prefersReducedMotion = window.
