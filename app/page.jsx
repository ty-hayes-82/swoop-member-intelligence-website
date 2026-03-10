import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ProductWalkthroughHero from '@/components/ProductWalkthroughHero'
import CTASection from '@/components/CTASection'
import HomeCapabilityTabs from '@/components/HomeCapabilityTabs'
import RoiCalculator from '@/components/RoiCalculator'
import DemoDisclosure from '@/components/DemoDisclosure'
import ProofStack from '@/components/ProofStack'

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
    accent: '#1F2F24',
  },
  {
    step: 2,
    title: 'Fix It',
    summary: 'Manual interventions',
    detail: 'AI agents recommend the next best action with impact math. You approve or assign inside the action queue.',
    accent: '#F3922D',
  },
  {
    step: 3,
    title: 'Prove It',
    summary: 'Board-ready reporting',
    detail: 'Every intervention rolls into a board-ready snapshot so you show what was prevented and what still needs attention.',
    accent: '#4ADE80',
  },
]

const proofStats = [
  { label: 'Retention lift', value: '+21%', note: 'Oakmont Hills CC demo · Week 3' },
  { label: 'Members saved', value: '6', note: 'Personal outreach in 10 days' },
  { label: 'Tee sheet fill', value: '91%', note: 'Retention-prioritized routing' },
]

const proofStackConfig = {
  statLabel: 'Annual dues protected',
  statValue: '$633K',
  statContext: 'Oakmont Hills CC demo · Week 3',
  demoLabel: 'Board packet preview',
  demoContext: 'Pulled from production build',
  quote: 'This is the only briefing I have seen that tells me exactly who to call, what to say, and what it protects.',
  quoteSource: 'Ty Hayes',
  quoteRole: 'Founder, Swoop Golf',
  ctaLabel: 'See your retention map',
  ctaHref: '/book-demo',
}

const quickWins = [
  {
    label: 'Retention save',
    scenario: 'Monday 7:15 AM briefing',
    summary: 'James Whitfield complaint unresolved for 6 days; health score 42 with $18K dues at risk.',
    action: 'GM call + comp dessert before noon; assign follow-up owner with due time.',
    impact: '$18K dues protected',
  },
  {
    label: 'Waitlist recovery',
    scenario: 'Tee sheet reroute · Saturday AM',
    summary: 'FIFO held six Weekend Warriors behind casual guests. Retention routing moves members to the top before release.',
    action: 'Assign Marcus Webb as slot owner and text members with concierge confirmation.',
    impact: '91% tee sheet fill',
  },
  {
    label: 'Service recovery',
    scenario: 'Action queue · 3 approvals',
    summary: 'Dining complaint idle 48 hours. AI agent drafts apology, comp, and staff assignment with confidence score.',
    action: 'Approve plan, assign Alexis (Member Experience), and log expected revenue at risk.',
    impact: '3 recoveries closed in-week',
  },
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0/mo',
    desc: 'Baseline member health scores and weekly summary emails.',
    perks: ['3 integrations', 'Weekly briefing email', 'Starter playbooks'],
    cta: 'Get Started Free',
    ctaHref: '/book-demo',
  },
  {
    name: 'Pro',
    price: '$499/mo',
    desc: 'Full workflow playbooks for a single club team.',
    perks: ['10 integrations', 'AI action approvals', 'Board-ready attribution'],
    highlighted: true,
    badge: 'Most Popular',
    cta: 'Start Pro Trial',
    ctaHref: '/book-demo',
  },
  {
    name: 'Club',
    price: '$1,499/mo',
    desc: 'Multi-property orchestration and dedicated success.',
    perks: ['Portfolio rollups', 'Custom ingestion', 'Dedicated success lead'],
    cta: 'Contact Sales',
    ctaHref: '/contact',
  },
]

export default function HomePage() {
  return (
    <div className="page-stack">
      {/* Section 1 — Hero */}
      <section className="px-6 py-8 md:py-16" data-hero-section>
        <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-accent">For private-club GMs</p>
            <h1 className="hero-headline mt-4 text-4xl font-bold leading-[1.2] md:text-5xl">Every member has a health score. You just can&apos;t see it yet.</h1>
            <p className="mt-4 max-w-xl text-lg" style={{ color: '#3d4f44' }}>
              Swoop surfaces engagement decay, spend shifts, and booking drop-offs across every member — then gives your team the playbook to act before a resignation letter lands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-green px-5 py-2.5 text-sm font-semibold text-swoop-dark transition hover:bg-swoop-green-hover">
                Book a Demo
              </Link>
              <Link href="/pricing" className="text-sm font-semibold text-swoop-muted underline underline-offset-4">See Pricing</Link>
            </div>
            <p className="mt-3 text-sm text-swoop-muted">Next live demo openings: Tuesday 11:00 AM MT · Thursday 2:00 PM MT</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-swoop-border bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">{stat.label}</p>
                  <p className="mt-2 text-2xl font-bold text-swoop-dark">{stat.value}</p>
                  <p className="text-xs text-swoop-muted">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
          <ProductWalkthroughHero />
        </div>
      </section>

      {/* Section 2 — Proof stack */}
      <ProofStack {...proofStackConfig}>
        <div className="space-y-3 text-sm text-swoop-dark">
          <p className="font-semibold">Morning Briefing → Action Queue → Board PDF</p>
          <ul className="list-disc space-y-1 pl-5 text-swoop-muted">
            <li>Prioritized save list with dues impact.</li>
            <li>On-property alerts with service recovery scripts.</li>
            <li>Auto-generated board-ready export every Friday.</li>
          </ul>
        </div>
      </ProofStack>

      {/* Section 3 — Quick wins */}
      <section className="px-6">
        <div className="mx-auto max-w-container rounded-3xl border border-swoop-border bg-white p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Quick wins</p>
              <h2 className="mt-2 text-2xl font-bold text-swoop-dark">See it Monday. Fix it mid-week. Prove it Friday.</h2>
            </div>
            <Link href="/book-demo" className="text-sm font-semibold text-swoop-dark underline underline-offset-4">Walk through your scenarios →</Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {quickWins.map((card) => (
              <article key={card.label} className="flex flex-col rounded-2xl border border-swoop-border bg-swoop-bg p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-swoop-accent">{card.label}</span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-swoop-muted">{card.scenario}</p>
                <p className="mt-3 text-sm text-swoop-dark">{card.summary}</p>
                <p className="mt-3 text-sm font-semibold text-swoop-dark">
                  Action: <span className="font-normal text-swoop-muted">{card.action}</span>
                </p>
                <div className="mt-auto pt-4 text-sm font-semibold text-swoop-dark">{card.impact}</div>
                <DemoDisclosure className="mt-3 text-[11px] text-swoop-muted" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How it works */}
      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">How it works</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {howItWorks.map((step) => (
              <article key={step.title} className="rounded-xl border border-swoop-border/70 bg-swoop-bg px-4 py-5" style={{ borderTop: `3px solid ${step.accent}` }}>
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

      {/* Section 5 — ROI calculator */}
      <section className="px-6">
        <div className="mx-auto max-w-container">
          <RoiCalculator />
          <p className="mt-4 text-center text-sm text-swoop-muted">
            Want to see these numbers on your club&apos;s data?{' '}
            <Link href="/book-demo" className="font-semibold text-swoop-dark underline underline-offset-4">Book a live walkthrough</Link>
          </p>
        </div>
      </section>

      {/* Section 6 — Capability preview */}
      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Platform preview</p>
              <h2 className="mt-2 text-2xl font-bold text-swoop-dark">See It · Fix It · Prove It</h2>
              <p className="mt-1 text-sm" style={{ color: '#3d4f44' }}>Member health, dining &amp; events, tee sheet demand, staffing, and revenue — all in one view.</p>
            </div>
            <Link href="/platform" className="text-sm font-semibold text-swoop-dark underline underline-offset-4">Explore the platform →</Link>
          </div>
          <div className="mt-6">
            <HomeCapabilityTabs />
          </div>
        </div>
      </section>

      {/* Section 7 — Pricing snapshot */}
      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">Pricing snapshot</p>
              <h2 className="mt-2 text-2xl font-bold text-swoop-dark">Free to explore · Pro to run a club · Club for multi-property teams</h2>
            </div>
            <Link href="/pricing" className="text-sm font-semibold text-swoop-dark underline underline-offset-4">Full pricing breakdown →</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article key={tier.name} className={`relative flex flex-col rounded-2xl border ${tier.highlighted ? 'border-swoop-dark bg-swoop-dark text-white' : 'border-swoop-border bg-white text-swoop-dark'} p-6`}>
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
                  <Link
                    href={tier.ctaHref}
                    className={`block w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition ${tier.highlighted ? 'bg-swoop-green text-swoop-dark hover:bg-swoop-green-hover' : 'border border-swoop-border bg-swoop-bg text-swoop-dark hover:bg-swoop-border'}`}
                  >
                    {tier.cta}
                  </Link>
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
