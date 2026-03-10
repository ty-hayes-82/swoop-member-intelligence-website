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

const oakmontFaqs = [
  { q: 'Is this a real club?', a: 'This is a guided demo built with Oakmont Hills CC data from January 2026. Every metric, screenshot, and agent recommendation is drawn from the same dataset you see in live demos.' },
  { q: 'Can my club replicate these results?', a: 'Yes. The workflow is the same: connect the tee sheet + POS + complaint logs, let agents surface the risk, and follow the intervention playbooks. The numbers will change, but the cadence is identical.' },
  { q: 'How long did implementation take?', a: 'Two weeks from signed agreement to daily briefings. Week 1: data intake and verification. Week 2: agent calibration, GM training, and board reporting setup.' },
  { q: 'What data sources were required?', a: 'Tee sheet bookings, POS checks, and complaint/service logs. Optional extras (email engagement, events, staffing) make the picture richer but are not required to start.' },
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

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday • What the GM saw</p>
            <h3 className="mt-3 text-2xl font-bold">3 at-risk members surfaced before the resignation meeting.</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Daily Briefing flagged health score drops + stalled spend.</li>
              <li>• Complaint correlation card highlighted the exact issues.</li>
              <li>• GM assigned outreach steps and logged make-good offers.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday • What the board saw</p>
            <h3 className="mt-3 text-2xl font-bold">12 saves in Q1, $216K in preserved dues.</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Board packet summarized every intervention with impact math.</li>
              <li>• Attribution table tied GM actions to retained revenue.</li>
              <li>• Confidence score showed which agents spotted the risk earliest.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-swoop-border bg-swoop-bg p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
              <h3 className="mt-3 text-xl font-bold text-swoop-dark">Before Swoop</h3>
              <p className="mt-2 text-sm text-swoop-muted">Spreadsheet with names, dates, and gut-feel notes passed between GM and controller.</p>
              <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
                <li>• Manually updated every Thursday night.</li>
                <li>• No link to tee sheet, POS, or complaint system.</li>
                <li>• Outcome tracking lived in a separate email thread.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-swoop-border bg-swoop-dark p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70">Artifact</p>
              <h3 className="mt-3 text-xl font-bold">After Swoop</h3>
              <p className="mt-2 text-sm text-white/80">Member health dashboard with live risk flags, outreach tasks, and dues-at-risk math.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>• Health score gauge + timeline for every member.</li>
                <li>• Agent recommendations show owner + approval flow.</li>
                <li>• Board export highlights saves, losses, and open risks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="mt-6 space-y-4">
            {oakmontFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-swoop-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Run the Oakmont workflow on your own data assumptions." />
    </div>
  )
}
