import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { PostRoundConversionMock, ServiceFailureBlock, SourceBadgeRow } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'F&B Operations',
  description: 'Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.',
  path: '/capabilities/fb-operations',
})

const fbFaqs = [
  { question: 'What POS systems are supported?', answer: 'Jonas, Northstar, Clubessential, Lightspeed, and other API-friendly platforms.' },
  { question: 'How far ahead are covers predicted?', answer: 'Rolling 7-day forecasts with intra-day refresh based on pace and weather.' },
  { question: 'Can it handle multiple outlets?', answer: 'Yes. Each outlet gets its own forecast, staffing view, and upsell prompts.' },
  { question: 'Does it account for events?', answer: 'Event RSVPs and banquet sheets feed the forecast and staffing view automatically.' },
  { question: 'How does weather affect predictions?', answer: 'Weather deltas adjust predicted covers and staffing lead times as soon as the forecast shifts.' },
]

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
              <li>• Post-round conversion uplift tied to ARR.</li>
              <li>• Service recovery log with follow-up status.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Covers vs prep — artifact</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-6 text-center">
            <p className="text-sm text-swoop-muted">Predicted: <span className="font-semibold text-swoop-dark">145 covers</span></p>
            <p className="text-sm text-swoop-muted">Actual: <span className="font-semibold text-swoop-dark">138 covers</span></p>
            <p className="mt-2 text-sm font-semibold text-[#147A3E]">Variance: 5% (within tolerance)</p>
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
