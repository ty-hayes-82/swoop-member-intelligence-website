import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ProductWalkthroughHero from '@/components/ProductWalkthroughHero'
import TrustStrip from '@/components/TrustStrip'
import CTASection from '@/components/CTASection'
import HomeCapabilityTabs from '@/components/HomeCapabilityTabs'
import RoiCalculator from '@/components/RoiCalculator'
import AnimatedStat from '@/components/AnimatedStat'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PrimaryCTA from '@/components/PrimaryCTA'
import { DailyBriefingDemo, HealthScoreGrid } from '@/components/portal-previews'

export const metadata = buildMetadata({
  title: 'Swoop Golf — Club Intelligence for General Managers',
  description: 'AI-powered intelligence for private club General Managers. See what your club misses today and recover it tomorrow.',
  path: '/',
})

const howItWorks = [
  {
    step: 1,
    title: 'See It',
    summary: 'Member health scores',
    detail: 'Your tee sheet, POS, CRM, and staffing signals land in one briefing so you see every wobble before the day starts.',
    accent: '#10B981',
  },
  {
    step: 2,
    title: 'Fix It',
    summary: 'GM-approved actions',
    detail: 'AI agents recommend the next best action with impact math. You approve or assign inside Agent Command.',
    accent: '#059669',
  },
  {
    step: 3,
    title: 'Prove It',
    summary: 'Board-ready reporting',
    detail: 'Every intervention rolls into a board-ready snapshot so you show what was prevented and what still needs attention.',
    accent: '#047857',
  },
]

const proofStats = [
  { label: 'Retention lift', value: '+21%', note: 'Oakmont Hills CC demo · Week 3' },
  { label: 'Members saved', value: '6', note: 'Personal outreach in 10 days', accent: true },
  { label: 'Tee sheet fill', value: '91%', note: 'Retention-prioritized routing' },
]

const weeklyFlow = [
  {
    title: 'Monday — 10 minute briefing',
    bullets: [
      'Spot every member whose score slipped over the weekend.',
      'Approve three AI agent recommendations with impact math.',
      'Assign staff owners before the first tee time goes out.',
    ],
  },
  {
    title: 'Friday — board-ready proof',
    bullets: [
      'Show dues protected and revenue recovered.',
      'Email a PDF briefing to department heads.',
      'Close the loop on every action with owner + outcome.',
    ],
  },
]

const testimonialCards = [
  {
    badge: 'Founding Partner',
    quote: "We're testing Layer 3 Intelligence in live operations. Early results show member health scores catching resignation signals our CRM misses entirely.",
    person: 'Private Beta Partner Club',
    role: 'Mid-Atlantic Region • 320 Members',
    metric: '6 at-risk members identified in first 10 days',
    remark: 'Founding Partner clubs get priority feature access and dedicated implementation support.',
  },
  {
    badge: 'Founding Partner',
    quote: 'The daily briefing replaced three separate system logins. Now we see tee sheet gaps, member risk, and staffing coverage in one 90-second scroll.',
    person: 'Desert Mountain Region Partner',
    role: 'Southwest Private Club • 280 Members',
    metric: 'Briefing reviewed at 7:15 AM daily',
    remark: 'Partners shape the roadmap — your workflow becomes the product.',
  },
  {
    badge: 'Live Demo',
    quote: "Oakmont Hills demo data shows how cross-system intelligence works. Real deployment mirrors the same workflow with your club's actual integrations.",
    person: 'Ty Hayes',
    role: 'Founder, Swoop Golf',
    metric: 'Weekly product walkthroughs available',
    remark: 'See the See It → Fix It → Prove It flow on live demo data.',
  },
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0/mo',
    desc: 'Answer one question: which members are drifting away? Health scores from integrations only.',
    perks: ['3 integrations', 'Weekly briefing email', 'Starter playbooks'],
    cta: 'Get Started Free',
    ctaHref: '/book-demo',
  },
  {
    name: 'Pro',
    price: '$499/mo',
    desc: 'Answer all three questions. See operations breaking, F&B revenue leaking, and members disengaging — then fix it.',
    perks: ['10 integrations', 'AI agent approvals', 'Board-ready attribution'],
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Start Pro Trial',
    ctaHref: '/book-demo',
  },
  {
    name: 'Club',
    price: '$1,499/mo',
    desc: 'All three questions across every property. Portfolio-level intelligence with dedicated success.',
    perks: ['Portfolio rollups', 'Custom ingestion', 'Dedicated success lead'],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
]

export default function HomePage() {
  return (
    <div className="page-stack">
      {/* Section 1 — Hero + proof metrics */}
      <section className="relative px-6 py-12 md:py-20 lg:py-24 overflow-hidden" data-animate="fade-up" data-hero-section>
        {/* Enhanced gradient background with more visual drama */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/30 to-white -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_50%)] -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(74,222,128,0.05),_transparent_60%)] -z-10"></div>
        <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">For private-club GMs</p>
            <h1 className="hero-headline mt-4 text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">Stop firefighting. Start orchestrating.</h1>
            <p className="mt-4 max-w-xl text-lg" style={{ color: '#3d4f44' }}>The Real-Time Cockpit that shows you where today is breaking — before members feel it.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/book-demo" className="inline-flex items-center justify-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white cta-primary-dark">See the Daily Briefing</Link>
              <Link href="/pricing" className="text-sm font-semibold text-swoop-muted underline underline-offset-4">See Pricing</Link>
            </div>
            <p className="mt-3 text-sm text-swoop-muted">Next live demo openings: Tuesday 11:00 AM MT · Thursday 2:00 PM MT</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofStats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-animate="fade-up"
                  data-animate-delay={String(200 + index * 80)}
                  className={`hover-lift rounded-2xl border p-4 ${stat.accent ? 'border-swoop-green/40 bg-swoop-green/5' : 'border-swoop-border bg-white'}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">{stat.label}</p>
                  <p className={`mt-2 text-2xl font-bold ${stat.accent ? 'text-swoop-green-hover' : 'text-swoop-dark'}`}><AnimatedStat value={stat.value} /></p>
                  <p className="text-xs text-swoop-muted">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-animate="fade-scale" data-animate-delay="200">
            <ProductWalkthroughHero />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip />

      {/* Wedge Strategy Section — Member Health as Entry Point */}
      <section className="px-6 py-8" data-animate="fade-up">
        <div className="mx-auto max-w-container rounded-3xl border border-swoop-green/30 bg-gradient-to-br from-swoop-green/5 to-white p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Wedge Product · 90% adoption rate</p>
              <h2 className="section-headline mt-3 text-3xl font-bold text-swoop-dark md:text-4xl lg:text-5xl">Start with the Early Warning System</h2>
              <p className="mt-4 text-lg" style={{ color: '#3d4f44' }}>90% of clubs value a daily Health Score. It&rsquo;s the fastest way to protect your dues base.</p>
              <p className="mt-4 text-sm" style={{ color: '#6B7280' }}>Member Health sits at the center of Swoop&rsquo;s intelligence platform. It connects tee sheet activity, F&amp;B spend, email engagement, and complaint signals into one simple score — so you know which members need outreach before they start the resignation conversation.</p>
              <div className="mt-6">
                <Link href="/platform#member-health" className="inline-flex items-center justify-center rounded-lg bg-swoop-green px-6 py-3 text-sm font-semibold text-swoop-dark cta-primary-green">See Member Health in action</Link>
              </div>
            </div>
            <div className="relative" data-animate="fade-scale" data-animate-delay="200">
              {/* Live portal component - replaces static screenshot */}
              <div className="overflow-hidden rounded-2xl border-2 border-swoop-green/20 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                    LIVE COMPONENT
                  </span>
                  <span className="text-xs text-gray-500">Not a screenshot</span>
                </div>
                <HealthScoreGrid showAll={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Three Questions Only Swoop Can Answer */}
      <section className="px-6 py-8 bg-gray-50" data-animate="fade-up">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Why Swoop exists</p>
          <h2 className="section-headline mt-2 text-2xl font-bold text-swoop-dark md:text-3xl">Three questions your current systems cannot answer</h2>
          <p className="mt-2 text-sm" style={{ color: '#3d4f44' }}>Your tee sheet, POS, and CRM each see one slice. Swoop connects them to answer the questions that actually drive retention, revenue, and service consistency.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="hover-lift rounded-xl border border-swoop-border/70 bg-swoop-bg p-5" style={{ borderTop: '3px solid #F59E0B' }}>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Operational Command</p>
              <h3 className="mt-2 text-lg font-semibold text-swoop-dark">Where is today at risk of breaking &mdash; right now?</h3>
              <p className="mt-2 text-sm italic" style={{ color: '#6B7280' }}>&ldquo;I manage by anecdotes. I cannot see what is about to break until it is too late.&rdquo;</p>
            </article>
            <article className="hover-lift rounded-xl border border-swoop-border/70 bg-swoop-bg p-5" style={{ borderTop: '3px solid #10B981' }}>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Revenue Optimization</p>
              <h3 className="mt-2 text-lg font-semibold text-swoop-dark">Which operational failures are costing you F&amp;B spend?</h3>
              <p className="mt-2 text-sm italic" style={{ color: '#6B7280' }}>&ldquo;I know my F&amp;B numbers, but I cannot connect a bad hole-9 experience to a lost dinner.&rdquo;</p>
            </article>
            <article className="hover-lift rounded-xl border border-swoop-border/70 bg-swoop-bg p-5" style={{ borderTop: '3px solid #3B82F6' }}>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Member Health</p>
              <h3 className="mt-2 text-lg font-semibold text-swoop-dark">Which members are quietly drifting away?</h3>
              <p className="mt-2 text-sm italic" style={{ color: '#6B7280' }}>&ldquo;I can see rounds and spend, but I cannot see when a good member is quietly disengaging.&rdquo;</p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 2 — How it works */}
      <section className="px-6 py-8 bg-white">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">How it works</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <article
                key={step.title}
                data-animate="fade-up"
                data-animate-delay={String(120 + index * 80)}
                className="hover-lift rounded-xl border border-swoop-border/70 bg-swoop-bg px-4 py-5"
                style={{ borderTop: `3px solid ${step.accent}` }}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: step.accent }}>{step.step}</span>
                  <h3 className="text-lg font-semibold text-swoop-dark">{step.title}</h3>
                </div>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">{step.summary}</p>
                <p className="mt-2 text-sm" style={{ color: '#3d4f44' }}>{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — ROI calculator */}
      <section className="px-6">
        <div className="mx-auto max-w-container">
          <RoiCalculator />
          <p className="mt-4 text-center text-sm text-swoop-muted">
            Want to see these numbers on your club&apos;s data?{' '}
            <Link href="/book-demo" className="font-semibold text-swoop-dark underline underline-offset-4">Book a live walkthrough</Link>
          </p>
        </div>
      </section>

      {/* Section 4 — Capability preview */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Platform preview</p>
              <h2 className="section-headline mt-2 text-2xl font-bold text-swoop-dark md:text-3xl">See It · Fix It · Prove It</h2>
              <p className="mt-1 text-sm" style={{ color: '#3d4f44' }}>Member health, dining &amp; events, tee sheet demand, staffing, and revenue — all in one view.</p>
            </div>
            <Link href="/platform" className="text-sm font-semibold text-swoop-dark underline underline-offset-4">Explore the platform →</Link>
          </div>
          <div className="mt-6">
            <HomeCapabilityTabs />
          </div>
        </div>
      </section>

      {/* Section 5 — Weekly flow */}
      <section className="px-6 py-8 bg-white">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          {weeklyFlow.map((block, index) => (
            <article
              key={block.title}
              data-animate="fade-up"
              data-animate-delay={String(120 + index * 80)}
              className="hover-lift rounded-2xl border border-swoop-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">{block.title}</p>
              <h3 className="mt-2 text-xl font-semibold text-swoop-dark">{block.title.includes('Monday') ? 'What you check in 10 minutes' : 'What you prove by Friday'}</h3>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: '#3d4f44' }}>
                {block.bullets.map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Section 6 — Social proof */}
      <section className="px-6">
        <div className="mx-auto max-w-container rounded-3xl border border-swoop-border bg-swoop-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[1.2px] text-white/60">Testimonials & case studies</p>
          <h2 className="section-headline mt-3 text-2xl font-bold md:text-3xl">GMs, founders, and pilots on what changed.</h2>
          <p className="mt-2 text-sm text-white/70">Live demo data becomes real action plans — saves, labor fixes, and demand recovery that boards can see.</p>
          <div className="mt-8">
            <TestimonialCarousel items={testimonialCards} />
          </div>
        </div>
      </section>

      {/* Section 7 — Pricing snapshot */}
      <section className="px-6 py-8 bg-gray-50">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Pricing snapshot</p>
              <h2 className="section-headline mt-2 text-2xl font-bold text-swoop-dark md:text-3xl">Free to explore · Pro to run a club · Club for multi-property teams</h2>
            </div>
            <Link href="/pricing" className="text-sm font-semibold text-swoop-dark underline underline-offset-4">Full pricing breakdown →</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <article
                key={tier.name}
                data-animate="fade-up"
                data-animate-delay={String(140 + index * 100)}
                className={`hover-lift relative flex flex-col rounded-2xl border ${tier.highlighted ? 'border-swoop-dark bg-swoop-dark text-white' : 'border-swoop-border bg-white text-swoop-dark'} p-6`}>
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-swoop-green px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-swoop-dark">{tier.badge}</span>
                )}
                <div>
                  <h3 className="text-2xl font-bold">{tier.name}</h3>
                  <p className="mt-1 text-3xl font-bold">{tier.price}</p>
                  <p className={`mt-2 text-sm ${tier.highlighted ? 'text-white/80' : 'text-swoop-muted'}`}>{tier.desc}</p>
                </div>
                <ul className={`mt-4 space-y-2 text-sm ${tier.highlighted ? 'text-white/80' : 'text-swoop-muted'}`}>
                  {tier.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <Link href={tier.ctaHref} className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${tier.highlighted ? 'bg-swoop-green text-swoop-dark hover:bg-swoop-green-hover' : 'border border-swoop-border bg-swoop-bg text-swoop-dark hover:bg-swoop-border'}`}>{tier.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <CTASection
        headline="See Swoop on your club scenarios."
        subtext="We&rsquo;ll map signal, action, and board proof in one walkthrough."
        note="Next availability: Tuesdays 11:00 AM MT · Thursdays 2:00 PM MT"
      />
    </div>
  )
}
