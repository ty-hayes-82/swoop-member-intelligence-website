import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import StickyCTA from '@/components/StickyCTA'
import ProofStack from '@/components/ProofStack'
import { RoutingComparisonMock, CancellationRiskCard, RetentionValueCalculator } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Tee Sheet & Demand',
  description: 'Predict cancellations and backfill each open slot with the right member. Optimize pace and demand signals without overbooking guesswork.',
  path: '/capabilities/tee-sheet-demand',
})

export default function TeeSheetDemandPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Tee Sheet & Demand</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Fill slots with retention logic, not queue luck.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday demand workflow routes openings by churn risk and value, then shows the GM exactly what FIFO would have missed.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <RoutingComparisonMock />
          <CancellationRiskCard />
          <RetentionValueCalculator />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">FIFO vs retention routing</h2>
          <p className="mt-3 text-swoop-muted">FIFO fills the next open slot. Retention routing fills with the member whose relationship is most at risk and most recoverable. That changes both fill rate quality and long-term dues outcomes.</p>
          <p className="mt-4 text-sm text-swoop-muted">Workflow narrative: Signal (high-risk cancellation window) → Action (targeted pre-alert + call path) → Proof (slot recovered + retention delta attributed).</p>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Foothills Club</p>
          <h2 className="mt-2 text-2xl font-bold">Waitlist routing lifted retention-linked fill from 74% to 90%.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Foothills replaced FIFO escalation with member-value routing and recovered $96K in protected dues while improving weekend slot utilization.</p>
        </article>
      </section>

      <CTASection headline="See your own demand windows ranked by save opportunity." subtext="We map cancellation risk and routing outcomes in one session." />

      <ProofStack
        statLabel="Fill quality improvement"
        statValue="+16 pts"
        demoLabel="Routing view"
        quote="The same opening now solves retention instead of just clearing the waitlist."
        ctaLabel="Book demand walkthrough"
        ctaHref="/book-demo"
      >
        <RoutingComparisonMock />
      </ProofStack>

      <StickyCTA title="Compare FIFO to retention routing live" description="See the impact by slot, member, and ARR." />
    </div>
  )
}
