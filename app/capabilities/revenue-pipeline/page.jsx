import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import DemoDisclosure from '@/components/DemoDisclosure'

export const metadata = buildMetadata({
  title: 'Revenue & Pipeline',
  description: 'Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.',
  path: '/capabilities/revenue-pipeline',
})

const pipelineFaqs = [
  { question: 'How is revenue per slot calculated?', answer: 'We combine dues, guest fees, and ancillary spend tied to each slot or member action.' },
  { question: 'Can I see trends over time?', answer: 'Yes. Revenue per slot, saves, and conversions trend in the board snapshot.' },
  { question: 'Does it include F&B ancillary revenue?', answer: 'Optional, but recommended — outlets can be tied to the same member or slot attribution.' },
  { question: 'How does this help with pricing?', answer: 'You see what each slot type yields, so pricing and dues changes reference actual impact.' },
  { question: 'Can I export for board reporting?', answer: 'One-click exports create PDF/CSV packets mapped to your narrative.' },
]

const pipelineHighlights = [
  {
    title: 'Prospect conversion queue',
    detail: 'Hot, warm, and cold tiers show sponsor, visit count, total spend, and estimated dues so you know which invitations matter.',
  },
  {
    title: 'Revenue attribution math',
    detail: 'Each save/action records estimated annual dues impact and links to supporting actions for board-ready storytelling.',
  },
  {
    title: 'Board snapshot ready in one click',
    detail: 'Top cards roll up hot pipeline value, average days since last visit, and invite-ready counts.',
  },
]

export default function RevenuePipelinePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28" data-hero-section>
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Revenue & Pipeline</p>
          <p className="mt-6 text-xl md:text-2xl font-semibold text-swoop-accent/90 italic max-w-3xl">“Where are we losing revenue moments — and what is the dollar value?”</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Prove what was saved, not only what was lost.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday flow: AE validates pipeline movement, GM reviews save outcomes, and board snapshots update with attributable impact.</p>
          <p className="mt-4 max-w-2xl text-sm text-swoop-muted/70 italic border-l-2 border-swoop-accent/30 pl-4">“I know my F&B numbers, but I can’t connect a bad hole-9 experience to a lost dinner.”</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-swoop-border bg-white p-5">
            <ScreenshotLightbox
              src="/screenshots/revenue-pipeline.jpg"
              alt="Revenue and pipeline dashboard screenshot"
              maxHeight={420}
              objectPosition="top"
            />
            <p className="mt-3 text-sm text-swoop-muted">Prospect conversion queue with dues tiers, sponsor context, and conversion scores. Demo data — Oakmont Hills CC.</p>
            <DemoDisclosure className="mt-1 text-xs" />
          </div>
          <div className="space-y-4">
            {pipelineHighlights.map((card) => (
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
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday workflow</p>
          <p className="mt-3 text-swoop-muted">Signal: weighted opportunities shift after intervention approvals. Insight: AE and GM confirm which actions moved conversion and retention probability. Action: board report auto-tags revenue callouts for weekly leadership review.</p>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Ironwood Reserve</p>
          <h2 className="mt-2 text-2xl font-bold">Attribution cut board prep from 6 hours to 40 minutes.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Ironwood connected intervention logs to dues outcomes and surfaced $214K annualized protected value in its first quarter of weekly reviews.</p>
        </article>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — operational use</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Review slots with slipping revenue expectations.</li>
              <li>• Approve AI recommendations tied to annual dues impact.</li>
              <li>• Update pipeline stages with single-click notes.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board proof</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Revenue per slot and per intervention.</li>
              <li>• Conversions and saves attributed to actions.</li>
              <li>• Export-ready board packet with narrative.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Per-slot revenue report — artifact</p>
          <div className="space-y-2 text-sm text-swoop-muted">
            {[{ slot: 'Saturday 8:00 AM', value: '$27 / slot' }, { slot: 'Saturday 9:00 AM', value: '$18 / slot' }, { slot: 'Weekday average', value: '$4 / slot' }].map((row) => (
              <div key={row.slot} className="rounded-xl border border-swoop-border bg-swoop-bg px-4 py-3 flex items-center justify-between">
                <span className="font-semibold text-swoop-dark">{row.slot}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Revenue & pipeline FAQ</h2>
          <div className="mt-6 space-y-4">
            {pipelineFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See the per-slot revenue view your board wants.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to tie every action to annual dues impact.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
