import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { BoardReportPreview, PipelineExampleCard, BoardSnapshotCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'For Multi-Club Operators',
  description: 'Portfolio-level visibility for retention, staffing, and revenue attribution.',
  path: '/for/multi-club-operators',
})

const multiClubFaqs = [
  { q: 'How fast can we see a full portfolio view?', a: 'Two weeks on average. Connect tee sheet + POS per property and the rollup dashboard populates automatically.' },
  { q: 'Can we compare clubs apples-to-apples?', a: 'Yes. Metrics normalize to dues mix, seasonality, and utilization so you can see which club is actually lagging.' },
  { q: 'Do we need new staff to maintain this?', a: 'No. Swoop automates ingestion, cleansing, and reporting. Operators focus on intervention decisions.' },
  { q: 'Does it cover staffing and capital planning?', a: 'Portfolio labor ratios, project ROI tracking, and dues-at-risk exposure are included in the same workspace.' },
]

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
      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday portfolio sync</p>
            <h3 className="mt-2 text-2xl font-bold">Which clubs need intervention?</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Dues-at-risk rollup with club-level drill downs.</li>
              <li>• Staffing variances vs. service targets.</li>
              <li>• Capital asks sorted by predicted payback.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday review</p>
            <h3 className="mt-2 text-2xl font-bold">Board + investor narrative</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Portfolio saves vs. churn with ARR impact.</li>
              <li>• Projects funded vs. delayed.</li>
              <li>• KPI heatmap that flags where to travel next.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
          <h3 className="mt-3 text-2xl font-bold">Portfolio command workbook</h3>
          <p className="mt-3 text-swoop-muted">Single Google Sheet-style view with tabs for member health, staffing, demand, and capital ROI per club.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Members</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Demand</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Staffing</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Capital</div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Multi-club operator FAQs</h2>
          <div className="mt-6 space-y-4">
            {multiClubFaqs.map((faq) => (
              <article key={faq.q} className="border-b border-swoop-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Book a portfolio demo" subtext="We&apos;ll load your club assumptions and walk property-by-property through dues-at-risk, staffing, and ROI tracking." />
    </div>
  )
}
