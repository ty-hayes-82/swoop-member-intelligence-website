import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import LocationHeatmapDemo from '@/components/LocationHeatmapDemo'
import { SourceBadgeRow } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Location Intelligence',
  description: 'Track member movement across golf, dining, and amenities with live heatmaps and service alerts for faster operational response.',
  path: '/capabilities/location-intelligence',
})

const locationFaqs = [
  { question: 'How does location tracking work?', answer: 'We use Wi-Fi/Bluetooth pings plus check-in data to infer zone movement.' },
  { question: 'Is it opt-in?', answer: 'Yes. Members opt in via app or loyalty credentials; anonymous data stays aggregated.' },
  { question: 'What about member privacy?', answer: 'Data is anonymized for reporting and never shared externally; operators only see required context.' },
  { question: 'How accurate is the positioning?', answer: 'Zones resolve to 10–15 feet indoors, slightly wider outdoors depending on access points.' },
  { question: 'Does it work outdoors?', answer: 'Yes. Range, cart paths, and pool decks are covered via outdoor beacons and tee-sheet timestamps.' },
]

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

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — live monitoring</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Watch real-time heatmaps for congestion.</li>
              <li>• Trigger staffing shifts or pop-up service.</li>
              <li>• Alert outlet leads when zones spike.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board insight</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Peak wait changes tied to staffing actions.</li>
              <li>• Zone engagement vs service recovery.</li>
              <li>• Export-ready summary for GM + board.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">On-property movement heatmap — artifact</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-6 text-sm text-swoop-muted">
            <p>Morning: Pro shop and driving range peak.</p>
            <p>Midday: Grill room and pool peak.</p>
            <p>Afternoon: Bar and event spaces peak.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Location intelligence FAQ</h2>
          <div className="mt-6 space-y-4">
            {locationFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 text-center">
        <div className="mx-auto max-w-container">
          <h2 className="text-2xl font-bold mb-4">See live movement before the next service crunch.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to plug location intelligence into your stack.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
