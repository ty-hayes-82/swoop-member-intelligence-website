import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import MetricCalloutStrip from '@/components/MetricCalloutStrip'
import LocationHeatmapDemo from '@/components/LocationHeatmapDemo'
import StickyCTA from '@/components/StickyCTA'

export const metadata = buildMetadata({
  title: 'Location Intelligence',
  description: 'Track member movement across golf, dining, and amenities with live heatmaps and service alerts for faster operational response.',
  path: '/capabilities/location-intelligence',
})

const metrics = [
  { value: '2.3 min', label: 'Avg alert lead time', detail: 'Service bottlenecks flagged before escalation' },
  { value: '34%', label: 'Faster response', detail: 'Compared with manual floor checks' },
  { value: '18%', label: 'Higher conversion', detail: 'When post-round congestion is managed early' },
  { value: '4 zones', label: 'Live zone tracking', detail: 'Golf, grill, pool, and fitness movement' },
]

export default function LocationIntelligencePage() {
  return (
    <div className="space-y-16">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-[#4ADE80]" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Location Intelligence</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">See where members are, and where service is about to break.</h1>
          <p className="text-lg text-swoop-muted max-w-3xl">
            Member heatmaps and service alerts show movement between golf, dining, and amenities in one live view so teams can respond before congestion or friction costs retention.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8">
        <div className="max-w-container mx-auto">
          <MetricCalloutStrip metrics={metrics} />
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-accent mb-2">Monday 7:15 AM</p>
          <h2 className="text-2xl font-bold mb-3">The GM sees a projected noon bottleneck at Grill + Pool overlap.</h2>
          <p className="text-swoop-muted">Agent Command recommends a 2-person shift swap and concierge push for staggered dining windows. The GM approves in one click and monitors live zone flow.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto">
          <LocationHeatmapDemo />
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-swoop-border p-6">
            <h3 className="font-semibold mb-2">Live member heatmap</h3>
            <p className="text-sm text-swoop-muted">Watch real-time movement by zone with high-value member overlays and household usage context.</p>
          </div>
          <div className="rounded-xl border border-swoop-border p-6">
            <h3 className="font-semibold mb-2">Service alert badges</h3>
            <p className="text-sm text-swoop-muted">Auto-alerts for queue growth, undercoverage risk, and unusual crowd concentration at key outlets.</p>
          </div>
          <div className="rounded-xl border border-swoop-border p-6">
            <h3 className="font-semibold mb-2">Replay mode</h3>
            <p className="text-sm text-swoop-muted">Replay yesterday&apos;s member flow to diagnose when and where service breakdowns started.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto rounded-2xl border border-[#4ADE80]/40 bg-[#4ADE80]/10 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1F2F24] mb-2">Micro case study</p>
          <h3 className="text-2xl font-bold mb-3 text-[#1F2F24]">Vista Canyon midday congestion fix</h3>
          <p className="text-[#1F2F24] text-sm">After deploying location alerts, the club reduced peak wait complaints by 42% and increased post-round dining capture by 16% over 28 days.</p>
        </div>
      </section>

      <CTASection headline="See live location intelligence in your workflow." subtext="We&apos;ll walk through heatmaps, service alerts, and response playbooks in a guided demo." />
      <StickyCTA title="Add location intelligence to your stack" description="Watch member-flow and service alerts in real time with your operational scenarios." />
    </div>
  )
}
