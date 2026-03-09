import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { BoardReportPreview, PipelineExampleCard, BoardSnapshotCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'For Multi-Club Operators',
  description: 'Portfolio-level visibility for retention, staffing, and revenue attribution.',
  path: '/for/multi-club-operators',
})

export default function MultiClubPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <h1 className="text-4xl font-bold md:text-5xl">Multi-course operators: run portfolio intelligence from one workflow.</h1>
          <p className="mt-4 text-lg text-swoop-muted">Vertical proof: 74 staff-hours saved quarterly and $740K protected ARR across portfolio workflows.</p>
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <BoardReportPreview />
          <PipelineExampleCard />
          <BoardSnapshotCard />
        </div>
      </section>
      <CTASection headline="Review portfolio benchmarks in one demo." />
    </div>
  )
}
