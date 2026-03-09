import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import TrustedBetaStrip from '@/components/TrustedBetaStrip'
import CTASection from '@/components/CTASection'
import ProductWalkthroughHero from '@/components/ProductWalkthroughHero'
import HomeCapabilityTabs from '@/components/HomeCapabilityTabs'
import RoiCalculator from '@/components/RoiCalculator'

export const metadata = buildMetadata({
  title: 'Swoop Golf — Club Intelligence for General Managers',
  description: 'AI-powered intelligence for private club General Managers. See what your club misses today and recover it tomorrow.',
  path: '/',
})

const howItWorks = [
  {
    title: 'See',
    summary: 'Monday 6:00 AM briefing',
    detail: 'All tee sheet, POS, CRM, weather, and staffing signals are waiting in the daily briefing so you know the problems before the huddle starts.',
  },
  {
    title: 'Decide',
    summary: 'Same-day action queue',
    detail: 'AI agents recommend the next best action with outcome math. You approve or dismiss inside Agent Command and the system handles routing.',
  },
  {
    title: 'Act',
    summary: 'By Friday proof pack',
    detail: 'Every intervention rolls up to a board-ready snapshot so you show what was prevented and what’s still at risk going into the weekend.',
  },
]

const testimonialCards = [
  {
    quote: 'We used this exact scenario in Monday committee prep and caught two resignations before they landed.',
    person: 'A. Torres',
    role: 'GM, Desert Ridge Club',
    metric: '2 resignations prevented in 5 days',
  },
  {
    quote: 'The service recovery list gave us cleaner ownership handoffs than our old spreadsheet board packet.',
    person: 'M. Reece',
    role: 'COO, Harbour Town CC',
    metric: '3 recoveries closed same week',
  },
  {
    quote: 'Routing based on member health changed who got prime slots and improved repeat booking confidence.',
    person: 'L. Bennett',
    role: 'Head of Golf, Oakmont Hills GC',
    metric: '87% tee sheet fill by Monday noon',
  },
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0/mo',
    desc: 'Baseline member health scores and weekly summary emails.',
    perks: ['3 integrations', 'Weekly briefing email', 'Starter playbooks'],
  },
  {
    name: 'Pro',
    price: '$499/mo',
    desc: 'Full workflow playbooks for a single club team.',
    perks: ['10 integrations', 'AI agent approvals', 'Board-ready attribution'],
    highlighted: true,
  },
  {
    name: 'Club',
    price: '$1,499/mo',
    desc: 'Multi-property orchestration and dedicated success.',
    perks: ['Portfolio rollups', 'Custom ingestion', 'Dedicated success lead'],
  },
]

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">For private-club GMs</p>
            <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">Know where member value is leaking before Monday gets away from you.</h1>
            <p className="mt-4 max-w-xl text-lg text-swoop-muted">Swoop combines tee sheet, POS, CRM, weather, and staffing data into one operating layer so your team can act faster and prove outcomes weekly.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-5 py-2.5 text-sm font-semibold text-white">Book a Demo</Link>
              <Link href="/pricing" className="inline-flex min-h-[46px] items-center rounded-lg border border-swoop-border bg-white px-5 py-2.5 text-sm font-semibold">See Pricing</Link>
            </div>
            <p className="mt-3 text-sm text-swoop-muted">Next live demo openings: Tuesday 11:00 AM MT · Thursday 2:00 PM MT</p>
          </div>
          <ProductWalkthroughHero />
        </div>
        <TrustStrip />
      </section>

      <section className="px-6 py-12 bg-white">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-swoop-muted">How it works</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step) => (
              <article key={step.title} className="rounded-xl border border-swoop-border/70 bg-swoop-bg px-4 py-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-swoop-muted">{step.summary}</p>
                <h3 className="mt-1 text-lg font-semibold text-swoop-dark">{step.title}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <RoiCalculator />

      <HomeCapabilityTabs />

      <TrustedBetaStrip />

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-3xl border border-swoop-border bg-swoop-dark p-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Founder testimony</p>
          <blockquote className="mt-3 text-xl leading-relaxed font-semibold">“Every Monday we run the Oakmont Hills demo live for GMs and boards. The retention lifts, waitlist recovery, and staffing saves on this site come directly from that environment.”</blockquote>
          <p className="mt-2 text-sm text-white/80">Ty Hayes — Founder, Swoop Golf</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonialCards.map((entry) => (
              <article key={entry.person} className="responsive-card rounded-2xl border border-white/20 bg-white/5 p-5">
                <span className="inline-flex rounded-full border border-white/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">Demo scenario</span>
                <p className="mt-3 text-sm leading-relaxed text-white/90">“{entry.quote}”</p>
                <p className="mt-3 text-xs text-white/70">{entry.person} — {entry.role}</p>
                <p className="mt-3 text-base font-semibold text-white">{entry.metric}</p>
                <p className="text-[11px] uppercase tracking-widest text-white/60">Demo data</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Pricing snapshot</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article key={tier.name} className={`flex flex-col rounded-2xl border ${tier.highlighted ? 'border-swoop-dark bg-swoop-dark text-white' : 'border-swoop-border bg-white text-swoop-dark'} p-6`}>
                <div>
                  <h2 className="text-2xl font-bold">{tier.name}</h2>
                  <p className="mt-1 text-3xl font-bold">{tier.price}</p>
                  <p className={`mt-2 text-sm ${tier.highlighted ? 'text-white/80' : 'text-swoop-muted'}`}>{tier.desc}</p>
                </div>
                <ul className={`mt-4 space-y-2 text-sm ${tier.highlighted ? 'text-white/80' : 'text-swoop-muted'}`}>
                  {tier.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="See Swoop on your club scenarios."
        subtext="We’ll map signal, action, and board proof in one walkthrough."
        note="Next availability: Tuesdays 11:00 AM MT · Thursdays 2:00 PM MT"
      />
    </div>
  )
}
