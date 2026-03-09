import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import StickyCTA from '@/components/StickyCTA'
import ProofStack from '@/components/ProofStack'
import LocationHeatmapDemo from '@/components/LocationHeatmapDemo'
import { SourceBadgeRow } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Location Intelligence',
  description: 'Track member movement across golf, dining, and amenities with live heatmaps and service alerts for faster operational response.',
  path: '/capabilities/location-intelligence',
})

export default function LocationIntelligencePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Location Intelligence</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">See where member flow creates service risk before it shows up in complaints.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday check-in combines live zone movement with staffing coverage and outlet readiness so managers can resolve bottlenecks before noon.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Monday workflow</h2>
          <p className="mt-3 text-swoop-muted">Signal: zone congestion and queue growth. Insight: forecasted overlap in grill and pool traffic. Action: shift changes and stagger prompts launched from one console.</p>
          <div className="mt-4">
            <SourceBadgeRow />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <LocationHeatmapDemo />
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Vista Canyon</p>
          <h2 className="mt-2 text-2xl font-bold">42% fewer peak wait complaints in 28 days.</h2>
          <p className="mt-3 text-sm text-swoop-muted">By pairing heatmap alerts with staffing adjustments, Vista Canyon improved post-round dining capture and reduced midday service friction.</p>
        </article>
      </section>

      <CTASection headline="See live location intelligence in your workflow." subtext="We’ll walk through heatmaps, service alerts, and response playbooks." />

      <ProofStack
        statLabel="Peak wait reduction"
        statValue="42%"
        demoLabel="Heatmap board"
        quote="We finally acted before the queue formed instead of after the complaint."
        ctaLabel="Book location demo"
        ctaHref="/book-demo"
      >
        <div className="rounded-lg border border-swoop-border bg-white p-3">
          <p className="text-xs text-swoop-muted">Zone alerts + staffing recommendations</p>
          <div className="mt-2 grid grid-cols-6 gap-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="h-5 rounded" style={{ backgroundColor: `rgba(31,47,36,${((i % 6) + 2) / 10})` }} />
            ))}
          </div>
        </div>
      </ProofStack>

      <StickyCTA title="Add location intelligence to your stack" description="Watch member-flow and service alerts in real time." />
    </div>
  )
}
