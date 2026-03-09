import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import StickyCTA from '@/components/StickyCTA'
import ProofStack from '@/components/ProofStack'
import {
  StaffingForecastGrid,
  StaffingBeforeAfterCard,
  BoardSnapshotCard,
  ServiceFailureBlock,
  SourceBadgeRow,
} from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Staffing & Labor',
  description: 'Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.',
  path: '/capabilities/staffing-labor',
})

export default function StaffingLaborPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Staffing & Service</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Forecast coverage before member experience breaks.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday workflow starts with 48-hour coverage risk, routes shift recommendations, and pushes board snapshots by end of day.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <StaffingForecastGrid />
          <StaffingBeforeAfterCard />
          <BoardSnapshotCard />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-2">
          <ServiceFailureBlock />
          <div className="rounded-xl border border-swoop-border bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Signal sources</p>
            <div className="mt-3">
              <SourceBadgeRow />
            </div>
            <p className="mt-4 text-sm text-swoop-muted">Signal → Insight → Action: tee-sheet pace + weather + POS tickets show a lunch risk window; labor optimizer recommends exact role coverage before service waits spike.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Coastal Links</p>
          <h2 className="mt-2 text-2xl font-bold">Coverage corrections lowered waits by 59% in two weeks.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Coastal Links used Monday staffing forecasts to rebalance FOH and kitchen shifts, reducing complaint volume and protecting $43K in seasonal dues risk.</p>
        </article>
      </section>

      <CTASection headline="See your 48-hour staffing risk map." subtext="We show coverage changes tied to service and revenue outcomes." />

      <ProofStack
        statLabel="Service-level gain"
        statValue="+13.6 pts"
        demoLabel="Coverage board"
        quote="We shifted labor earlier and prevented the complaint cluster entirely."
        ctaLabel="Book staffing walkthrough"
        ctaHref="/book-demo"
      >
        <StaffingForecastGrid />
      </ProofStack>

      <StickyCTA title="Forecast staffing risk with your busiest windows" description="Get demand-led shift guidance before Monday lineup." />
    </div>
  )
}
