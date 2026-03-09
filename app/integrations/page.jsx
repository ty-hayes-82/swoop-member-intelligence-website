import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import IntegrationStatusGrid from '@/components/IntegrationStatusGrid'
import { SourceBadgeRow, BoardReportPreview } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Integrations',
  description: 'Connect tee sheet, POS, CRM, and staffing systems into one data flow with implementation milestones.',
  path: '/integrations',
})

const flow = ['Tee Sheet', 'Swoop ingestion', 'Playbooks', 'Outcomes']
const timeline = [
  'Week 1: Intake mapping and credential setup',
  'Week 2: Data validation and first workflow launch',
  'Week 3: Automation tuning and board report handoff',
]

export default function IntegrationsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Integrations</p>
          <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">From source systems to measurable outcomes.</h1>
          <p className="mt-4 text-swoop-muted">Swoop connects to your existing club management system (Jonas, Northstar, Clubessential) — no rip-and-replace required. CSV fallback is available while API credentials are finalized.</p>
          <div className="mt-4 flex justify-center">
            <SourceBadgeRow />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <IntegrationStatusGrid />
        </div>
      </section>

      <section className="px-6">
        <div className="responsive-card mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Data-flow visualization</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {flow.map((node, index) => (
              <div key={node} className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-sm font-semibold">
                <p>{node}</p>
                {index < flow.length - 1 && <p className="mt-2 text-xs text-swoop-muted">→</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="responsive-card mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Implementation timeline</h2>
          <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
            {timeline.map((item) => (
              <li key={item} className="rounded-lg border border-swoop-border bg-swoop-bg px-3 py-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <ProofStack
        statLabel="CSV import hub"
        statValue="≈48-hour activation target"
        demoLabel="Outcome preview"
        ctaLabel="Book a Demo"
        ctaHref="/book-demo"
      >
        <BoardReportPreview />
      </ProofStack>

      <CTASection headline="Map your integration path with us." />
    </div>
  )
}
