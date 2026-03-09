import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import StickyCTA from '@/components/StickyCTA'
import ProofStack from '@/components/ProofStack'
import { BoardReportPreview, PipelineExampleCard, AttributionChordMock } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Revenue & Pipeline',
  description: 'Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.',
  path: '/capabilities/revenue-pipeline',
})

export default function RevenuePipelinePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Revenue & Pipeline</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Prove what was saved, not only what was lost.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday flow: AE validates pipeline movement, GM reviews save outcomes, and board snapshots update with attributable impact.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <BoardReportPreview />
          <PipelineExampleCard />
          <AttributionChordMock />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday workflow</p>
          <p className="mt-3 text-swoop-muted">Signal: weighted opportunities shift after intervention approvals. Insight: AE and GM confirm which actions moved conversion and retention probability. Action: board report auto-tags revenue callouts for weekly leadership review.</p>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Ironwood Reserve</p>
          <h2 className="mt-2 text-2xl font-bold">Attribution cut board prep from 6 hours to 40 minutes.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Ironwood connected intervention logs to dues outcomes and surfaced $214K annualized protected value in its first quarter of weekly reviews.</p>
        </article>
      </section>

      <CTASection headline="Move from backward-looking reports to action-level attribution." subtext="We will map your board narrative in one call." />

      <ProofStack
        statLabel="Attributed value"
        statValue="$214.3K"
        demoLabel="Board report"
        quote="Our board finally saw what the team prevented, not just month-end variance."
        ctaLabel="Book revenue demo"
        ctaHref="/book-demo"
      >
        <BoardReportPreview />
      </ProofStack>

      <StickyCTA title="Build your board-ready attribution model" description="Tie actions to revenue and retention in one workflow." />
    </div>
  )
}
