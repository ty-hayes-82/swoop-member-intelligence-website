import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { AtRiskRosterMock, RoutingComparisonMock, StaffingForecastGrid } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'How It Works',
  description: 'Connect your existing systems, get intelligence in days, and start acting on AI recommendations. Live in under 2 weeks.',
  path: '/how-it-works',
})

const steps = [
  {
    phase: 'Step 1',
    title: 'Signal',
    description: 'We pull tee sheet, POS, CRM, and labor data into one shared view.',
    mock: <AtRiskRosterMock />,
  },
  {
    phase: 'Step 2',
    title: 'Insight',
    description: 'Swoop ranks what matters now, including routing and cancellation risk.',
    mock: <RoutingComparisonMock />,
  },
  {
    phase: 'Step 3',
    title: 'Action',
    description: 'Your team receives role-specific actions with expected impact and proof.',
    mock: <StaffingForecastGrid />,
  },
]

export default function HowItWorksPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">How it works</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">From early warning to finished follow-up in one rhythm.</h1>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-8 lg:grid-cols-[1fr_280px]">
          <div className="space-y-8">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-swoop-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">{step.phase}</p>
                <h2 className="mt-2 text-2xl font-bold">{step.title}</h2>
                <p className="mt-2 text-swoop-muted">{step.description}</p>
                <div className="mt-4">{step.mock}</div>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-swoop-border bg-white p-5 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Workflow</p>
            <ol className="mt-3 space-y-2 text-sm">
              <li className="rounded bg-swoop-bg px-3 py-2">Signal</li>
              <li className="rounded bg-swoop-bg px-3 py-2">Insight</li>
              <li className="rounded bg-swoop-bg px-3 py-2">Action</li>
            </ol>
          </aside>
        </div>
      </section>

      <CTASection headline="See your own workflow map." subtext="We’ll show exactly how your team would run Monday through Friday." />
    </div>
  )
}
