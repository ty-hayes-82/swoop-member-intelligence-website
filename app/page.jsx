import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import TrustedBetaStrip from '@/components/TrustedBetaStrip'
import CTASection from '@/components/CTASection'
import ProductWalkthroughHero from '@/components/ProductWalkthroughHero'
import HomeCapabilityTabs from '@/components/HomeCapabilityTabs'
import RoiCalculator from '@/components/RoiCalculator'
import DemoDisclosure from '@/components/DemoDisclosure'

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

const faqItems = [
  {
    question: 'How much does Swoop cost?',
    answer: 'Three tiers: Free, Pro at $499/mo, Club at $1,499/mo.',
  },
  {
    question: 'What integrations are supported?',
    answer: 'Tee sheet, POS, CRM, email, and scheduling systems. See /integrations for the full list.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most clubs are live within 2 weeks with existing data connections.',
  },
  {
    question: 'Is this real member data?',
    answer: 'Our demo uses simulated data from Oakmont Hills CC. Your deployment uses your live club data.',
  },
  {
    question: 'Can I try it before committing?',
    answer: 'Yes — book a demo and we will walk through your club&apos;s data.',
  },
]


function DailyBriefingMock() {
  const riskMembers = [
    { name: 'James Whitfield', score: 42, archetype: 'Balanced Active', due: 'Call before 2:00 PM' },
    { name: 'Anne Jordan', score: 38, archetype: 'Weekend Warrior', due: 'Meet starter on #1' },
    { name: 'Robert Callahan', score: 41, archetype: 'Declining', due: "Invite to chef's table" },
  ]
  const actionItems = [
    { label: 'Service Recovery', detail: 'F&B Director call James within 2 hrs', impact: '$18K dues protected' },
    { label: 'Waitlist Routing', detail: 'Fill Sat 8:10A with retention priority', impact: '$36K dues at stake' },
    { label: 'Staffing Alert', detail: 'Cover Grill Room lunch 12–2P', impact: 'Avoid 8% revenue dip' },
  ]
  const timeline = [
    { label: '05:30', text: 'Daily Briefing ready', type: 'ready' },
    { label: '06:45', text: '3 AI agent actions waiting approval', type: 'agent' },
    { label: '09:10', text: 'At-risk member checked in', type: 'member' },
  ]

  return (
    <div className="w-full max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-[#101A2E] via-[#07101F] to-[#010308] p-6 text-left text-white shadow-[0_25px_65px_rgba(12,16,32,0.45)]">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/60">
        <span>Daily Briefing</span>
        <span className="text-white/50">Oakmont Hills · 6:00 AM</span>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {[{
          label: 'Health score',
          value: '74',
          sub: '▲ 4 vs last week',
        }, {
          label: 'Members flagged',
          value: '6',
          sub: 'Personal outreach today',
        }, {
          label: 'Revenue at risk',
          value: '$54K',
          sub: 'If no action is taken',
        }].map((card) => (
          <div key={card.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/50">{card.label}</p>
            <p className="mt-1 text-3xl font-semibold">{card.value}</p>
            <p className="text-sm text-white/70">{card.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.6fr,1fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">At-risk members today</p>
          <div className="mt-4 space-y-3">
            {riskMembers.map((member) => (
              <div key={member.name} className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-white/60">{member.archetype}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-[#F97316]">Score {member.score}</p>
                  <p className="text-[11px] text-white/60">{member.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#F97316]/30 bg-[#F97316]/10 p-5 text-[#FFEDD5]">
          <p className="text-xs font-semibold uppercase tracking-widest">Today’s actions</p>
          <div className="mt-4 space-y-4">
            {actionItems.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/20 bg-white/5/20 p-3">
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-white/80">{item.detail}</p>
                <p className="text-[11px] text-[#FED7AA]">{item.impact}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-white/70">Approve in Agent Command →</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Timeline</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {timeline.map((event) => (
            <div key={event.label} className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-white/70">{event.label}</span>
              <span className="text-sm text-white">{event.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between text-[11px] text-white/60">
        <span>Demo environment — simulated Oakmont Hills data</span>
        <span>CSV fallback · Tee sheet · POS · CRM</span>
      </div>
    </div>
  )
}

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
            <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">Every member has a health score. You just can&apos;t see it yet.</h1>
            <p className="mt-4 max-w-xl text-lg text-swoop-muted">Swoop surfaces engagement decay, spend shifts, and booking drop-offs across every member — then gives your team the playbook to act before a resignation letter lands.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-5 py-2.5 text-sm font-semibold text-white">Book a Demo</Link>
              <Link href="/pricing" className="text-sm font-semibold text-swoop-muted underline underline-offset-4">See Pricing</Link>
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
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday Morning</p>
            <h3 className="mt-2 text-xl font-semibold text-swoop-dark">What you check in 10 minutes</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Open Daily Briefing to see overnight engagement changes</li>
              <li>• Review 3 recommended actions from your AI agents</li>
              <li>• Flag any at-risk members for personal outreach</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday Afternoon</p>
            <h3 className="mt-2 text-xl font-semibold text-swoop-dark">What you prove to your board</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Net member health trend for the week</li>
              <li>• Revenue recovered through proactive interventions</li>
              <li>• Churn prevention score and saves count</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
          <div className="mt-6 flex justify-center">
            <DailyBriefingMock />
          </div>
          <p className="mt-4 text-sm text-swoop-muted">See engagement decay, spend shifts, and recommended actions in one view.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

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
                <DemoDisclosure tone="dark" />
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
