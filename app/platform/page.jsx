import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import {
  BoardReportPreview,
  AtRiskRosterMock,
  RoutingComparisonMock,
} from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Platform Overview',
  description: 'Complete club intelligence platform connecting your tee sheet, POS, CRM, and staffing systems into one decision layer for private club GMs.',
  path: '/platform',
})

const weeks = [
  {
    title: 'Week 1 Intake',
    detail: 'Connect feeds, normalize entities, validate baseline risk coverage.',
    mock: <AtRiskRosterMock />,
  },
  {
    title: 'Week 2 Activation',
    detail: 'Route first workflows for demand, staffing, and member saves.',
    mock: <RoutingComparisonMock />,
  },
  {
    title: 'Week 3 Automations',
    detail: 'Enable automated board snapshots and agent-driven playbooks.',
    mock: <BoardReportPreview />,
  },
]

export default function PlatformPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Platform</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">One operating layer for member, demand, staffing, and board outcomes.</h1>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          {weeks.map((week) => (
            <article key={week.title} className="rounded-2xl border border-swoop-border bg-white p-6">
              <h2 className="text-xl font-semibold">{week.title}</h2>
              <p className="mt-2 text-sm text-swoop-muted">{week.detail}</p>
              <div className="mt-4">{week.mock}</div>
            </article>
          ))}
        </div>
      </section>

      <ProofStack
        statLabel="Time to first measurable outcome"
        statValue="21 days"
        demoLabel="Platform snapshot"
        quote="By week three we had a complete intake-to-automation rhythm with clear ownership."
        ctaLabel="Book platform demo"
        ctaHref="/book-demo"
      >
        <BoardReportPreview />
      </ProofStack>

      <CTASection headline="See the week-by-week rollout on your stack." subtext="No rip-and-replace required." />
    </div>
  )
}
