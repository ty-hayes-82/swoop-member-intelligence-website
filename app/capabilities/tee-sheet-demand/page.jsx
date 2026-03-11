import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import DemoDisclosure from '@/components/DemoDisclosure'

export const metadata = buildMetadata({
  title: 'Tee Sheet & Demand',
  description: 'Predict cancellations and backfill each open slot with the right member. Optimize pace and demand signals without overbooking guesswork.',
  path: '/capabilities/tee-sheet-demand',
})

const teeFaqs = [
  { question: 'How does Swoop predict cancellations?', answer: 'We combine historical no-show patterns, weather, member sentiment, and waitlist behavior.' },
  { question: 'Can members see their priority score?', answer: 'No. Routing logic stays internal while maintaining fairness narratives.' },
  { question: 'Does this replace our tee sheet system?', answer: 'No. Swoop layers intelligence on top of your existing tee sheet via APIs.' },
  { question: 'How far ahead can it forecast?', answer: 'We model risk windows up to two weeks out with daily refresh on probability.' },
  { question: 'What about walk-ins?', answer: 'Walk-ins remain, but Swoop proactively offers open slots to members before they reach the walk-in queue.' },
]

const teeHighlights = [
  {
    title: 'Retention routing vs FIFO',
    detail: 'Queue shows who would get the slot under FIFO vs Swoop. High-value members leapfrog when health scores slide.',
  },
  {
    title: 'Cancellation probability window',
    detail: '24–72h indicators combine weather, pace, and sentiment so staff pre-alert the right members before a slot goes dark.',
  },
  {
    title: 'Acceptance math surfaced',
    detail: 'Each recommendation cites dues at stake, acceptance likelihood, and routing reason so approvals take seconds.',
  },
]

export default function TeeSheetDemandPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28" data-hero-section>
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Tee Sheet & Demand</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Fill slots with retention logic, not queue luck.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday demand workflow routes openings by churn risk and value, then shows the GM exactly what FIFO would have missed.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-swoop-border bg-white p-5">
            <ScreenshotLightbox
              src="/screenshots/waitlist-demand.jpg"
              alt="Waitlist and demand intelligence screenshot"
              maxHeight={420}
              objectPosition="top"
            />
            <p className="mt-3 text-sm text-swoop-muted">Retention-prioritized queue with cancellation forecasts, dues impact, and routing rationale. Demo data — Oakmont Hills CC.</p>
            <DemoDisclosure className="mt-1 text-xs" />
          </div>
          <div className="space-y-4">
            {teeHighlights.map((card) => (
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
          <h2 className="text-2xl font-bold">FIFO vs retention routing</h2>
          <p className="mt-3 text-swoop-muted">FIFO fills the next open slot. Retention routing fills with the member whose relationship is most at risk and most recoverable. That changes both fill rate quality and long-term dues outcomes.</p>
          <p className="mt-4 text-sm text-swoop-muted">Workflow narrative: Signal (high-risk cancellation window) → Action (targeted pre-alert + call path) → Proof (slot recovered + retention delta attributed).</p>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Foothills Club</p>
          <h2 className="mt-2 text-2xl font-bold">Waitlist routing lifted retention-linked fill from 74% to 90%.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Foothills replaced FIFO escalation with member-value routing and recovered $96K in protected dues while improving weekend slot utilization.</p>
        </article>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — live routing</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Flag high-risk cancellations before they become no-shows.</li>
              <li>• Route openings to members with decaying engagement.</li>
              <li>• Hold premium slots for priority members automatically.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board proof</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Fill-rate improvement tied to retention value.</li>
              <li>• Revenue per slot vs FIFO baseline.</li>
              <li>• Saves attributable to routing decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Demand heatmap — artifact</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-6 text-center">
            <p className="text-sm text-swoop-muted">Predicted demand spikes flagged by daypart for member-facing communications.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Tee sheet & demand FAQ</h2>
          <div className="mt-6 space-y-4">
            {teeFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See your demand heatmap ranked by retention impact.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to compare FIFO and Swoop routing on your data model.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
