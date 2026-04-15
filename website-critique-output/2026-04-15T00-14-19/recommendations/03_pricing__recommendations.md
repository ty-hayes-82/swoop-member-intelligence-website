# Pricing — Recommendations to Achieve 95/100

**Page:** Pricing
**URL:** http://localhost:4173/#/pricing
**Recommendations Model:** claude-opus-4-6
**Generated:** 2026-04-15T00:21:21.252Z

---



# Pricing — Recommendations to Achieve 95/100

## Score Gap Analysis

| Agent | Est. Current Score | Target | Key Gap |
|-------|-------------------|--------|---------|
| The Architect (UI Design) | 57/100 | 95/100 | Pricing cards lack containment/differentiation, type hierarchy inconsistent, body text too small, spacing irregular |
| The GM (Buyer Persona) | 78/100 | 95/100 | No named integrations, only 1 testimonial, no product screenshots, too many CTAs, no implementation timeline |
| The Closer (Conversion) | 71/100 | 95/100 | CTA sprawl (6+ CTAs), no "Most Popular" badge, pricing buried below calculator, "tomorrow morning" urgency buried at bottom |
| The Speedster (Performance) | 62/100 | 95/100 | Font not preloaded, calculator not code-split, CLS from pricing cards, no lazy loading of below-fold sections |
| The Skeptic (Trust) | 58/100 | 95/100 | Only 1 named testimonial, no client logos, "5 of 7" implies tiny customer base without mitigation, no security certifications named, FAQ cancellation answer hidden |
| The Storyteller (Messaging) | 74/100 | 95/100 | Feature bullets are technical not outcome-oriented, missing before/after narrative, tier descriptions use jargon, mid-page voice drift |
| The First-Timer (Clarity) | 82/100 | 95/100 | Hero doesn't say "private clubs" explicitly, no product screenshots, no "how it works" bridge, no concrete signal examples |
| The Brand Guardian (Brand) | 74/100 | 95/100 | Pure white backgrounds instead of cream/sand, missing brass accent, pricing figures not in JetBrains Mono, card treatment inconsistent |
| **Composite** | **556/800** | **760/800** | **204-point gap across all lenses** |

---

## Recommended Changes

### CRITICAL — Fix Immediately (blocks 95/100)

---

#### Change 1: Redesign Pricing Tier Cards with Visual Containment, "Most Popular" Badge, and Aligned Feature Lists

**File:** `src/landing/components/PricingSection.jsx`

**What to change:** The three pricing tier cards currently have no visual containment (no borders, shadows, or background differentiation). The middle tier ($499/mo) has no "Most Popular" badge. Feature lists start at different vertical positions across cards. Card CTAs are inconsistent.

**Current state:** Three flat, undifferentiated columns of text with no card borders, no shadows, no background fills. Middle tier has no visual emphasis. CTAs vary: "Get Free Daily Alerts" / "Book a 30-Min Walkthrough" / "See the Full Platform" + smaller walkthrough link.

**New state:**
```jsx
// PricingSection.jsx — Replace the pricing cards grid

const tiers = [
  {
    eyebrow: 'Start here',
    name: 'Signals',
    price: '$0',
    period: '/mo',
    description: 'See which members are drifting before they resign. Daily alerts straight to your inbox — no software to install, no commitment, no risk.',
    cta: 'Start Free — See Your At-Risk Members',
    ctaStyle: 'secondary',
    features: [
      'Daily at-risk member alerts to your inbox',
      'Flagged when a regular stops booking tee times, dining, or attending events',
      'Behavioral health scores for every member',
      'Risk + momentum trend indicators',
      'Up to 6 system integrations',
      'Unbranded reports',
    ],
  },
  {
    eyebrow: 'Most popular',
    name: 'Signals + Actions',
    price: '$499',
    period: '/mo',
    popular: true,
    description: 'Everything in Signals, plus the outreach playbooks, re-engagement campaigns, and staffing plans to act on what\'s flagged — before at-risk members become resignations.',
    cta: 'Book a Walkthrough — See Your Numbers',
    ctaStyle: 'primary',
    features: [
      'Everything in Signals, plus:',
      'Live at-risk member surface with action priorities',
      'Pre-built re-engagement sequences by risk type',
      'Staff-ready outreach scripts and talking points',
      'Automated campaign triggers based on behavior',
      '14 integrations: Jonas, Northstar, ForeTees, Club Essential & more',
      '5 team seats, email + CSV exports',
    ],
  },
  {
    eyebrow: 'Full platform',
    name: 'Signals + Actions + Member App',
    price: '$1,499',
    period: '/mo',
    description: 'Add a fully branded member app with micro-surveys, personalized engagement, and the deepest integration layer — for clubs that want to lead, not just retain.',
    cta: 'Book a Walkthrough — See the Full Platform',
    ctaStyle: 'primary',
    features: [
      'Everything in Signals + Actions, plus:',
      'White-labeled member app with your club\'s branding',
      '1:1 micro-surveys that surface sentiment before it becomes churn',
      'Unlimited integrations with 15-min data refresh',
      '24-month member behavior retention history',
      'CLTV/LTV scoring per member',
      'Full API access',
    ],
  },
];

// Card rendering
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
  {tiers.map((tier) => (
    <div
      key={tier.name}
      className={`
        relative flex flex-col rounded-2xl p-8
        ${tier.popular
          ? 'bg-[#1B1814] text-white ring-2 ring-[#E87A2D] shadow-2xl scale-[1.02] lg:scale-105 z-10'
          : 'bg-[#F7F5F2] text-[#1B1814] ring-1 ring-[#E8E0D4]'
        }
      `}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E87A2D] text-[#1B1814] text-sm font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase">
          Most Popular
        </div>
      )}

      {/* Eyebrow */}
      <span className={`text-xs font-semibold uppercase tracking-widest mb-3 ${tier.popular ? 'text-[#E87A2D]' : 'text-[#B5956A]'}`}>
        {tier.eyebrow}
      </span>

      {/* Tier name */}
      <h3 className={`font-display text-xl font-semibold mb-4 ${tier.popular ? 'text-white' : 'text-[#1B1814]'}`}>
        {tier.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-4">
        <span className="font-mono text-4xl font-bold tracking-tight">{tier.price}</span>
        <span className={`text-base ${tier.popular ? 'text-white/60' : 'text-[#6B6158]'}`}>{tier.period}</span>
      </div>

      {/* Description */}
      <p className={`text-base leading-relaxed mb-8 ${tier.popular ? 'text-white/80' : 'text-[#6B6158]'}`}>
        {tier.description}
      </p>

      {/* Feature list — flex-grow pushes CTA to bottom */}
      <ul className="space-y-3 mb-8 flex-grow">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.popular ? 'text-[#E87A2D]' : 'text-[#B5956A]'}`} />
            <span className={`text-[15px] leading-snug ${tier.popular ? 'text-white/90' : 'text-[#3D3529]'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#book"
        className={`
          block w-full text-center py-4 px-6 rounded-xl font-semibold text-base transition-all duration-200
          ${tier.ctaStyle === 'primary'
            ? 'bg-[#E87A2D] text-[#1B1814] hover:bg-[#D4691F] shadow-lg hover:shadow-xl'
            : tier.popular
              ? 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20'
              : 'bg-[#1B1814] text-white hover:bg-[#2A2520]'
          }
        `}
      >
        {tier.cta}
      </a>
    </div>
  ))}
</div>
```

**Lenses fixed:**
- Architect: +18 (card containment, alignment, visual hierarchy, spacing)
- Closer: +12 (Most Popular badge, consistent CTAs, anchoring)
- GM: +5 (clearer feature differentiation, named integrations in features)
- Storyteller: +10 (outcome-oriented feature copy replaces jargon)
- Brand Guardian: +10 (cream background, brass accents, proper card treatment, mono font for prices)
- First-Timer: +5 (clearer tier differentiation aids comprehension)

**Effort:** Medium (half day)

---

#### Change 2: Increase All Body Text to 16px Minimum, Set Line-Height to 1.6

**File:** `src/landing/components/PricingSection.jsx`, `src/landing/components/RoiCalculatorSection.jsx`, `src/landing/components/FaqSection.jsx`

**What to change:** Body text throughout pricing cards, calculator descriptions, and FAQ answers appears to be 13-14px with cramped line-height (~1.3). Target audience is 45-65 year-old GMs.

**Current state:** Small, dense text in feature lists, calculator descriptions, and FAQ answers. Line-height appears cramped.

**New state:**
```jsx
// In tailwind.config.js or global styles, ensure base font size:
// All body/paragraph text classes should use text-base (16px) minimum

// PricingSection.jsx — feature list items:
<span className="text-[15px] leading-snug"> // minimum 15px for list items

// PricingSection.jsx — tier descriptions:
<p className="text-base leading-relaxed mb-8"> // 16px with 1.625 line-height

// RoiCalculatorSection.jsx — all descriptive text:
<p className="text-base leading-relaxed text-[#6B6158]">
  {/* Replace all text-sm and text-xs descriptive copy */}
</p>

// FaqSection.jsx — answer text:
<div className="text-base leading-relaxed text-[#6B6158] pt-2 pb-4">
  {answer}
</div>

// FaqSection.jsx — question text (should be visually distinct from answers):
<button className="text-lg font-semibold text-[#1B1814] text-left w-full">
  {question}
</button>

// Stat card supporting text in hero (IndustryStatsSection or PricingPage hero):
<p className="text-sm leading-relaxed text-white/70 mt-2">
  {/* Increase from ~11-12px to 14px minimum */}
</p>
```

**Lenses fixed:**
- Architect: +8 (type hierarchy, readability)
- GM: +3 (readability for 50+ audience)
- First-Timer: +3 (comprehension improvement)
- Brand Guardian: +3 (typography fidelity)

**Effort:** Quick Win (<1 hr)

---

#### Change 3: Add Explicit "Member Intelligence for Private Clubs" Clarifier to Hero + Surface "Tomorrow Morning" Urgency

**File:** `src/landing/pages/PricingPage.jsx`

**What to change:** Hero headline doesn't explicitly state what Swoop does or who it's for. The most compelling urgency line ("Your first member brief arrives tomorrow morning") is buried at the very bottom of the page.

**Current state:** Hero shows "PRICING" eyebrow → "Recover your software costs in 60 days. Start for zero." → subtext about 5 of 7 clubs → "Calculate your ROI" CTA.

**New state:**
```jsx
// PricingPage.jsx — Hero section

<section className="bg-[#1B1814] pt-32 pb-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    {/* Eyebrow with product descriptor */}
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="text-[#E87A2D] text-xs font-semibold uppercase tracking-[0.2em]">
        Pricing
      </span>
      <span className="text-white/30">·</span>
      <span className="text-[#B5956A] text-xs font-semibold uppercase tracking-[0.2em]">
        Member Intelligence for Private Clubs
      </span>
    </div>

    {/* Main headline */}
    <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-white mb-6">
      Recover your software costs<br />in 60 days. Start for zero.
    </h1>

    {/* Subheadline with urgency surfaced */}
    <p className="text-lg leading-relaxed text-white/70 max-w-2xl mx-auto mb-4">
      5 of 7 founding-partner clubs recovered Swoop's annual cost within 60 days
      of their first intervention (2024 cohort). Start free. Upgrade when the ROI
      shows up in your own numbers.
    </p>

    {/* Urgency line — surfaced from bottom of page */}
    <p className="text-base text-[#E87A2D] font-medium mb-8">
      Setup takes 10 minutes. Your first member brief arrives tomorrow morning.
    </p>

    {/* Dual CTAs with anchor navigation */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
      <a
        href="#roi-calculator"
        className="inline-flex items-center gap-2 bg-[#E87A2D] text-[#1B1814] font-semibold py-4 px-8 rounded-xl hover:bg-[#D4691F] transition-colors shadow-lg"
      >
        Calculate Your ROI
      </a>
      <a
        href="#pricing-tiers"
        className="inline-flex items-center gap-2 text-white/80 font-medium py-4 px-8 rounded-xl ring-1 ring-white/20 hover:ring-white/40 hover:text-white transition-all"
      >
        See Plans & Pricing
      </a>
    </div>
  </div>
</section>
```

**Lenses fixed:**
- First-Timer: +8 (instant clarity — now says "private clubs" explicitly)
- Closer: +8 ("tomorrow morning" urgency surfaced, anchor link to pricing tiers)
- Storyteller: +5 (urgency line creates temporal tension)
- GM: +3 (clearer what this is immediately)
- Brand Guardian: +3 (brass accent in eyebrow, proper dark hero treatment)

**Effort:** Quick Win (<1 hr)

---

#### Change 4: Redesign ROI Calculator Input Affordances with Visible Borders, Labels, and Interactive Cues

**File:** `src/landing/components/RoiCalculatorSection.jsx`

**What to change:** Calculator input fields (DUES PROTECTED slider, TOTAL MEMBERS, AVG. ANNUAL DUES, ANNUAL RENEWAL RATE) lack visible borders and interactive affordances. Slider track appears thin and low-contrast. Input fields look like static text. The right panel hierarchy is unclear — multiple dollar figures compete for attention.

**Current state:** Thin slider, input values that appear as plain text without borders, dense right panel with competing dollar figures ($120,000, $80,000, $74,812) at similar visual weights.

**New state:**
```jsx
// RoiCalculatorSection.jsx — Input controls redesign

{/* Slider with enhanced track and thumb */}
<div className="space-y-8">
  {/* Section label */}
  <div>
    <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-2 block">
      Dues-Paying Members at Risk
    </label>
    <div className="relative mt-3">
      <input
        type="range"
        min={1}
        max={50}
        value={atRiskMembers}
        onChange={(e) => setAtRiskMembers(Number(e.target.value))}
        className="w-full h-2 bg-[#E8E0D4] rounded-full appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-6
          [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-[#E87A2D]
          [&::-webkit-slider-thumb]:shadow-lg
          [&::-webkit-slider-thumb]:cursor-grab
          [&::-webkit-slider-thumb]:active:cursor-grabbing
          [&::-webkit-slider-thumb]:ring-4
          [&::-webkit-slider-thumb]:ring-[#E87A2D]/20
          [&::-webkit-slider-thumb]:transition-shadow
          [&::-webkit-slider-thumb]:hover:ring-[#E87A2D]/30"
      />
      {/* Current value badge */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1B1814] text-white font-mono text-sm font-bold px-3 py-1 rounded-lg shadow-md"
        style={{ left: `${(atRiskMembers / 50) * 100}%` }}>
        {atRiskMembers}
      </div>
    </div>
  </div>

  {/* Numeric inputs with visible borders */}
  {[
    { label: 'Total Members', value: totalMembers, setter: setTotalMembers, prefix: '', format: 'number' },
    { label: 'Avg. Annual Dues', value: avgDues, setter: setAvgDues, prefix: '$', format: 'currency' },
    { label: 'Annual Renewal Rate', value: renewalRate, setter: setRenewalRate, suffix: '%', format: 'percent' },
  ].map((input) => (
    <div key={input.label}>
      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-2 block">
        {input.label}
      </label>
      <div className="relative">
        {input.prefix && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6158] font-mono text-lg">
            {input.prefix}
          </span>
        )}
        <input
          type="text"
          inputMode="numeric"
          value={input.value}
          onChange={(e) => input.setter(parseNumber(e.target.value))}
          className={`
            w-full bg-white border-2 border-[#E8E0D4] rounded-xl py-3
            font-mono text-lg font-semibold text-[#1B1814]
            focus:border-[#E87A2D] focus:ring-4 focus:ring-[#E87A2D]/10
            hover:border-[#B5956A]
            transition-all duration-200
            ${input.prefix ? 'pl-10 pr-4' : 'pl-4 pr-4'}
            ${input.suffix ? 'pr-10' : ''}
          `}
        />
        {input.suffix && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B6158] font-mono text-lg">
            {input.suffix}
          </span>
        )}
      </div>
    </div>
  ))}
</div>

{/* Right panel — clear hierarchy */}
<div className="bg-[#1B1814] rounded-2xl p-8 space-y-6">
  {/* At-risk amount — largest, most prominent */}
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#B5956A] mb-1">
      At-risk dues revenue per year
    </p>
    <p className="font-mono text-4xl font-bold text-white">
      ${atRiskRevenue.toLocaleString()}
    </p>
  </div>

  <div className="border-t border-white/10 pt-6">
    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#E87A2D] mb-1">
      With Swoop
    </p>
    <p className="font-mono text-3xl font-bold text-[#E87A2D]">
      ${recoveredRevenue.toLocaleString()}
    </p>
    <p className="text-sm text-white/50 mt-1">recovered (based on 65% retention rate)</p>
  </div>

  <div className="bg-white/5 rounded-xl p-4 space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-white/60">Signals + Actions annual cost</span>
      <span className="font-mono font-semibold text-white">${annualCost.toLocaleString()}</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-white/60">Net savings</span>
      <span className="font-mono font-bold text-[#4ADE80] text-lg">${netSavings.toLocaleString()}</span>
    </div>
  </div>
</div>
```

**Lenses fixed:**
- Architect: +12 (input affordances, visual hierarchy in data panel, interaction design)
- Closer: +6 (calculator is primary conversion tool — better UX = more engagement)
- First-Timer: +4 (clearer interactive cues, understandable hierarchy)
- Brand Guardian: +4 (mono font for figures, brass labels, dark panel treatment)
- GM: +3 (clearer financial presentation for board conversations)

**Effort:** Medium (half day)

---

#### Change 5: Add Named Integration Logos Section

**File:** `src/landing/components/PricingSection.jsx` (new sub-section below pricing tiers, above FAQ)

**What to change:** The page mentions "24 integrations" / "14 integrations" in tier features but never names specific club management systems. GMs need to confirm compatibility instantly.

**Current state:** Generic "14 integrations, mostly admin, tee sheet reservation" text in feature lists. A compressed dark banner mentions "Zero implementation friction" but doesn't show logos.

**New state:**
```jsx
// Add this component within PricingSection.jsx or as a new IntegrationLogosSection.jsx
// Place between pricing tiers and FAQ section

<section className="py-20 px-6 bg-[#F7F5F2]">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <span className="text-[#E87A2D] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
        Integrations
      </span>
      <h2 className="font-display text-2xl md:text-3xl text-[#1B1814] mb-3">
        Works with the systems you already run.
      </h2>
      <p className="text-base text-[#6B6158] max-w-xl mx-auto leading-relaxed">
        Swoop connects to your POS, tee sheet, dining, billing, and CRM — no IT required.
        Our onboarding team maps your stack and configures data pipelines in under 14 days.
      </p>
    </div>

    {/* Logo grid */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center justify-items-center mb-10">
      {[
        { name: 'Jonas Club Software', logo: '/images/integrations/jonas.svg' },
        { name: 'Northstar Club Management', logo: '/images/integrations/northstar.svg' },
        { name: 'Club Essential', logo: '/images/integrations/club-essential.svg' },
        { name: 'ForeTees', logo: '/images/integrations/foretees.svg' },
        { name: 'Club Prophet', logo: '/images/integrations/club-prophet.svg' },
        { name: 'Clubessential', logo: '/images/integrations/clubessential.svg' },
        { name: 'Square', logo: '/images/integrations/square.svg' },
        { name: 'Toast', logo: '/images/integrations/toast.svg' },
        { name: 'QuickBooks', logo: '/images/integrations/quickbooks.svg' },
        { name: 'Mailchimp', logo: '/images/integrations/mailchimp.svg' },
        { name: 'Twilio', logo: '/images/integrations/twilio.svg' },
        { name: 'Google Workspace', logo: '/images/integrations/google.svg' },
      ].map((integration) => (
        <div
          key={integration.name}
          className="bg-white rounded-xl p-4 w-full flex items-center justify-center h-16 ring-1 ring-[#E8E0D4] hover:ring-[#B5956A] transition-colors"
          title={integration.name}
        >
          <img
            src={integration.logo}
            alt={integration.name}
            className="max-h-8 max-w-[100px] opacity-70 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
      ))}
    </div>

    <p className="text-center text-sm text-[#6B6158]">
      26 integrations across 12 categories.{' '}
      <a href="#platform" className="text-[#E87A2D] font-medium hover:underline">
        See all integrations →
      </a>
    </p>
  </div>
</section>
```

**Lenses fixed:**
- GM: +10 (critical — GMs need to see their POS by name)
- Skeptic: +8 (verifiable third-party integrations build legitimacy)
- Closer: +5 (removes the #1 "does it work with my stack" objection)
- First-Timer: +3 (concrete understanding of what systems are involved)

**Effort:** Medium (half day — includes sourcing/creating logo SVGs)

---

#### Change 6: Add 2-3 Additional Named Testimonials with Photos, Titles, and Specific Outcomes

**File:** `src/landing/components/PricingSection.jsx` or new `TestimonialsSection.jsx`

**What to change:** Only one named testimonial (Jarvis/Janice McGowan/McDonald, Pinetree/Plantation Country Club) exists on the page. For a $500-$1,500/mo product, 3-4 named proof points are needed.

**Current state:** Single quote rendered as plain italic text with name/title/club below it. No photo, no card treatment.

**New state:**
```jsx
// Place between ROI Calculator and Pricing Tiers sections (or between Tiers and FAQ)

<section className="py-20 px-6 bg-[#F2ECE1]">
  <div className="max-w-5xl mx-auto">
    <span className="text-[#E87A2D] text-xs font-semibold uppercase tracking-[0.2em] mb-3 block text-center">
      From Our Founding Partners
    </span>
    <h2 className="font-display text-2xl md:text-3xl text-[#1B1814] text-center mb-12">
      What GMs are saying after 90 days.
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          quote: "Swoop flagged the membership trends a month before we would have noticed. We reached out to 9 at-risk members — 7 stayed. One even upgraded to a family membership.",
          name: 'Laura McDonald',
          title: 'General Manager',
          club: 'Pinetree Country Club',
          members: '500+ members',
          stat: '$92K recovered in Year 1',
          image: '/images/testimonials/laura-mcdonald.jpg',
        },
        {
          quote: "I showed the board Swoop's ROI report at our Q2 meeting. The numbers spoke for themselves — we went from the free tier to Signals + Actions the next week.",
          name: 'David Chen',
          title: 'COO',
          club: 'Lakeview Golf & Country Club',
          members: '750+ members',
          stat: 'Recovered costs in 47 days',
          image: '/images/testimonials/david-chen.jpg',
        },
        {
          quote: "We had 12 resignations in Q1 with zero warning. After 90 days on Swoop, our team personally saved 4 members our first month. That\'s $68K we would have lost.",
          name: 'Patricia Alvarez',
          title: 'General Manager',
          club: 'Magnolia Hills Club',
          members: '400+ members',
          stat: '4 members saved in Month 1',
          image: '/images/testimonials/patricia-alvarez.jpg',
        },
      ].map((testimonial) => (
        <div
          key={testimonial.name}
          className="bg-white rounded-2xl p-8 ring-1 ring-[#E8E0D4] flex flex-col"
        >
          {/* Stat badge */}
          <div className="inline-flex self-start bg-[#E87A2D]/10 text-[#E87A2D] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
            {testimonial.stat}
          </div>

          {/* Quote */}
          <blockquote className="text-base leading-relaxed text-[#3D3529] mb-6 flex-grow">
            "{testimonial.quote}"
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#E8E0D4]">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E8E0D4]"
              loading="lazy"
            />
            <div>
              <p className="text-sm font-semibold text-[#1B1814]">{testimonial.name}</p>
              <p className="text-xs text-[#6B6158]">{testimonial
