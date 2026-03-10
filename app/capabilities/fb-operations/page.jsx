import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import DemoDisclosure from '@/components/DemoDisclosure'
import { SourceBadgeRow } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'F&B Operations',
  description: 'Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.',
  path: '/capabilities/fb-operations',
})

const fbFaqs = [
  { question: 'What POS systems are supported?', answer: 'Swoop works with leading club POS and dining platforms via secure API or CSV connections.' },
  { question: 'How far ahead are covers predicted?', answer: 'Rolling 7-day forecasts with intra-day refresh based on pace and weather.' },
  { question: 'Can it handle multiple outlets?', answer: 'Yes. Each outlet gets its own forecast, staffing view, and upsell prompts.' },
  { question: 'Does it account for events?', answer: 'Event RSVPs and banquet sheets feed the forecast and staffing view automatically.' },
  { question: 'How does weather affect predictions?', answer: 'Weather deltas adjust predicted covers and staffing lead times as soon as the forecast shifts.' },
]

const fbHighlights = [
  {
    title: 'Outlet pacing with dollars attached',
    detail: 'Every outlet tile shows revenue, covers, avg check, and 6-month trend so you know which rooms are slipping.',
  },
  {
    title: 'Post-round conversion insight',
    detail: 'Slow pace alerts tie directly to Grill Room revenue drops, reminding operations that pace is also an F&B lever.',
  },
  {
    title: 'Staffing risk surfaced early',
    detail: 'Understaffing losses are quantified per outlet so coverage corrections have a dollar-backed narrative.',
  },
]

export default function FBOperationsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28" data-hero-section>
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">F&B / Guest Experience</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Turn post-round moments into revenue and loyalty.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday workflow aligns tee finish windows, staffing readiness, and upsell offers before lunch service begins.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-swoop-border bg-white p-5">
            <ScreenshotLightbox
              src="/screenshots/fb-operations.png"
              alt="F&B operations dashboard screenshot"
              maxHeight={420}
            />
            <p className="mt-3 text-sm text-swoop-muted">Outlet performance view tying tee-sheet pace, weather, and POS data into one prep-ready dashboard. Demo data — Oakmont Hills CC.</p>
            <DemoDisclosure className="mt-1 text-xs" />
          </div>
          <div className="space-y-4">
            {fbHighlights.map((card) => (
              <article key={card.title} className="rounded-2xl border border-swoop-border bg-swoop-bg p-4">
                <p className="text-sm font-semibold text-swoop-dark">{card.title}</p>
                <p className="mt-2 text-sm text-swoop-muted">{card.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Connected inputs</p>
          <div className="mt-3"><SourceBadgeRow /></div>
          <p className="mt-4 text-sm text-swoop-muted">Signal (slow pace + warm weather surge) → Insight (grill queue and shop drop-off risk) → Action (post-round upsell plus staffing shift).</p>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Oak Grove</p>
          <h2 className="mt-2 text-2xl font-bold">Post-round conversion climbed from 31% to 43%.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Oak Grove shifted from static promotions to interval-based upsell prompts tied to finish times, adding $6.8K monthly contribution margin.</p>
        </article>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — service readiness</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Align prep and staffing with tee finish windows.</li>
              <li>• Trigger upsell prompts for targeted segments.</li>
              <li>• Surface likely service failures before lunch rush.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — proof for leadership</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Covers vs plan with variance callouts.</li>
              <li>• Post-round conversion uplift tied to annual dues impact.</li>
              <li>• Service recovery log with follow-up status.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Covers vs prep — artifact</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-6 text-center">
            <p className="text-sm text-swoop-muted">Predicted vs actual covers for the Grill Room with variance guidance for F&B leads.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">F&B operations FAQ</h2>
          <div className="mt-6 space-y-4">
            {fbFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See your covers forecast with staffing and upsell actions.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to align F&B service around real demand.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
