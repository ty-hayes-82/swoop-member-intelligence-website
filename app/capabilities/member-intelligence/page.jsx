import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import StickyCTA from '@/components/StickyCTA'
import ProofStack from '@/components/ProofStack'
import { AtRiskRosterMock, DecayTimelineMock, GmScriptCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Member Intelligence',
  description: 'Surface changing engagement behavior before it turns into churn risk. Prioritize interventions by member value and relationship sensitivity.',
  path: '/capabilities/member-intelligence',
})

const workflow = [
  { title: 'Signal', detail: 'Health score drops, spend softens, and complaint aging passes 72 hours.' },
  { title: 'Action', detail: 'GM receives script + routing recommendation before the morning standup.' },
  { title: 'Proof', detail: 'Save probability and protected ARR are written back to board reporting.' },
]

export default function MemberIntelligencePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Member Intelligence</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Know who is drifting before resignation language appears.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday workflow: Daily Briefing opens with the at-risk roster, the GM acts in minutes, and outcomes are attributed by Friday review.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <AtRiskRosterMock />
          <DecayTimelineMock />
          <GmScriptCard />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday workflow</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.title} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <h2 className="font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm text-swoop-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Desert Sky GC</p>
          <h2 className="mt-2 text-2xl font-bold">9 saves in 30 days with one-call playbooks.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Desert Sky moved from reactive outreach to a Monday-first save cadence: 9 members retained, $168K protected ARR, and average complaint follow-up time cut to 19 hours.</p>
        </article>
      </section>

      <CTASection headline="Run Member Pulse on your club profile." subtext="See the exact Monday save queue your GM would receive." />

      <ProofStack
        statLabel="Retention lift"
        statValue="21.2%"
        demoLabel="At-risk board"
        ctaLabel="Book member demo"
        ctaHref="/book-demo"
      >
        <AtRiskRosterMock />
      </ProofStack>

      <StickyCTA title="See member risk queues with your assumptions" description="Walk through signal, action, and proof in one demo." />
    </div>
  )
}
