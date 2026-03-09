import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import StickyCTA from '@/components/StickyCTA'
import ProofStack from '@/components/ProofStack'
import { PostRoundConversionMock, ServiceFailureBlock, SourceBadgeRow } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'F&B Operations',
  description: 'Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.',
  path: '/capabilities/fb-operations',
})

export default function FBOperationsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">F&B / Guest Experience</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Turn post-round moments into revenue and loyalty.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday workflow aligns tee finish windows, staffing readiness, and upsell offers before lunch service begins.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container space-y-6">
          <PostRoundConversionMock />
          <div className="grid gap-6 lg:grid-cols-2">
            <ServiceFailureBlock />
            <div className="rounded-xl border border-swoop-border bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Connected inputs</p>
              <div className="mt-3"><SourceBadgeRow /></div>
              <p className="mt-4 text-sm text-swoop-muted">Signal (slow pace + warm weather surge) → Insight (grill queue and shop drop-off risk) → Action (post-round upsell plus staffing shift).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Oak Grove</p>
          <h2 className="mt-2 text-2xl font-bold">Post-round conversion climbed from 31% to 43%.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Oak Grove shifted from static promotions to interval-based upsell prompts tied to finish times, adding $6.8K monthly contribution margin.</p>
        </article>
      </section>

      <CTASection headline="Map your post-round upsell windows." subtext="See where service and conversion move together." />

      <ProofStack
        statLabel="Post-round conversion lift"
        statValue="+12 pts"
        demoLabel="Upsell board"
        quote="When we timed offers to finish clusters, grill and shop both moved."
        ctaLabel="Book guest experience demo"
        ctaHref="/book-demo"
      >
        <PostRoundConversionMock />
      </ProofStack>

      <StickyCTA title="Improve post-round conversion with one workflow" description="See how Swoop links pacing to outlet outcomes." />
    </div>
  )
}
