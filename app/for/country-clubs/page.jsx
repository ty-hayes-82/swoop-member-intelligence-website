import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'

export const metadata = buildMetadata({
  title: 'For Country Clubs',
  description: 'Country clubs with golf, dining, and events need cross-domain intelligence. Swoop connects every touchpoint into one operational view.',
  path: '/for/country-clubs',
})

export default function CountryClubsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Country Clubs</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Golf + dining + events + fitness. One intelligence layer.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Country clubs are more complex than golf-only clubs. More outlets, more touchpoints, more systems, more ways to miss a signal. Swoop was built for this complexity.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">The cross-domain advantage.</h2>
          
          {/* Product Screenshot */}
          <ScreenshotLightbox
            src="/screenshots/daily-briefing.png"
            alt="Daily Briefing showing cross-system intelligence"
            frameClassName="mb-12 rounded-xl overflow-hidden shadow-xl border border-swoop-border"
            imageClassName="w-full"
            caption="Cross-domain Daily Briefing: golf, dining, events, and fitness signals in one view."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Golf → Dining Connection</h3>
              <p className="text-sm text-swoop-muted">35% of golfers dine post-round. Swoop tracks the conversion by tee time, pace of play, and weather — and recommends nudges to move the other 65%.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Events → Retention Signal</h3>
              <p className="text-sm text-swoop-muted">Members who stop attending social events are withdrawing from the community. Swoop detects this pattern months before it shows up in visit frequency.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Fitness → Family Usage</h3>
              <p className="text-sm text-swoop-muted">When spouses and children stop using the pool or fitness center, the primary member is 3x more likely to resign. Swoop tracks family engagement as a churn signal.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Staffing Across All Outlets</h3>
              <p className="text-sm text-swoop-muted">Tournament day means 3x F&B demand AND extra course marshals AND valet surge. Swoop coordinates staffing across every touchpoint from one view.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Reality Cards</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-swoop-border bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-2">Events reality</p>
              <h3 className="font-semibold mb-2">Tournament weekends don&apos;t stay in golf.</h3>
              <p className="text-sm text-swoop-muted mb-4">Event load shifts dining cadence, valet queues, and staffing mix across multiple outlets.</p>
              <div className="rounded-lg bg-swoop-bg border border-swoop-border p-3 text-xs text-swoop-muted">UI proof: Event-to-outlet demand graph with 3x lunch spike windows.</div>
            </div>
            <div className="rounded-xl border border-swoop-border bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-2">Dining cadence reality</p>
              <h3 className="font-semibold mb-2">Pace delays become table-turn losses.</h3>
              <p className="text-sm text-swoop-muted mb-4">Slow rounds move diners later, causing missed covers and overflow complaints during peak windows.</p>
              <div className="rounded-lg bg-swoop-bg border border-swoop-border p-3 text-xs text-swoop-muted">UI proof: Tee-time to dining conversion timeline with pacing overlay.</div>
            </div>
            <div className="rounded-xl border border-swoop-border bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-2">Family usage reality</p>
              <h3 className="font-semibold mb-2">Household pullback starts before resignations.</h3>
              <p className="text-sm text-swoop-muted mb-4">Pool, fitness, and junior activity declines can expose household churn risk long before formal notice.</p>
              <div className="rounded-lg bg-swoop-bg border border-swoop-border p-3 text-xs text-swoop-muted">UI proof: Household engagement heatmap by amenity and segment.</div>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="See how Swoop handles multi-outlet complexity." subtext="We'll demo cross-domain intelligence with a country club scenario." />
    </>
  )
}
