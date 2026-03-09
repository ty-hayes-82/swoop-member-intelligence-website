import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { PostRoundConversionMock, StaffingForecastGrid, SourceBadgeRow } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Oakmont Hills CC — The James Whitfield Story',
  description: 'How Swoop detected a $22K/yr resignation risk before it happened by connecting operational signals.',
  path: '/case-studies/oakmont-hills',
})

const timeline = [
  { date: 'Monday', event: 'Signal', detail: 'Health score drop + unresolved complaint + post-round spend decay.' },
  { date: 'Tuesday', event: 'Action', detail: 'GM outreach completed with make-good offer and priority booking.' },
  { date: 'Wednesday', event: 'Service fix', detail: 'Lunch shift coverage updated from forecast dashboard.' },
  { date: 'Friday', event: 'Outcome', detail: 'Member retained and family usage recovered.' },
]

function LocationIntelligenceCard() {
  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Location intelligence</p>
      <div className="mt-3 grid grid-cols-6 gap-1">
        {Array.from({ length: 24 }).map((_, idx) => (
          <span key={idx} className="h-6 rounded" style={{ backgroundColor: `rgba(31,47,36,${((idx % 6) + 2) / 10})` }} />
        ))}
      </div>
      <div className="mt-3"><SourceBadgeRow /></div>
    </div>
  )
}

export default function OakmontHillsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container max-w-4xl">
          <Link href="/case-studies" className="text-sm text-swoop-muted">← Back to Case Studies</Link>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Oakmont Hills: from silent churn risk to measurable recovery.</h1>
          <p className="mt-4 text-lg text-swoop-muted">This walkthrough replaces static imagery with the exact product mocks used in the weekly GM workflow.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-2">
          <LocationIntelligenceCard />
          <PostRoundConversionMock />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <StaffingForecastGrid />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Timeline of outcomes</h2>
          <div className="mt-4 space-y-3">
            {timeline.map((item) => (
              <article key={`${item.date}-${item.event}`} className="rounded-lg border border-swoop-border bg-swoop-bg p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">{item.date} · {item.event}</p>
                <p className="mt-1 text-sm text-swoop-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Run the Oakmont workflow on your own data assumptions." />
    </div>
  )
}
