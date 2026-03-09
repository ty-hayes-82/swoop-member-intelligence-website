import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import {
  StaffingForecastGrid,
  StaffingBeforeAfterCard,
  BoardSnapshotCard,
  ServiceFailureBlock,
  SourceBadgeRow,
} from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Staffing & Labor',
  description: 'Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.',
  path: '/capabilities/staffing-labor',
})

const staffingFaqs = [
  { question: 'What scheduling systems are supported?', answer: 'We integrate with When I Work, 7shifts, HotSchedules, and CSV exports for others.' },
  { question: 'How far ahead are recommendations made?', answer: 'Rolling 48-hour view with a 7-day outlook for major events.' },
  { question: 'Does it account for staff preferences?', answer: 'Yes. We respect availability/role constraints so recommendations stay realistic.' },
  { question: 'How does it handle events?', answer: 'Event RSVPs load directly into the staffing model and create alerts when prep is light.' },
  { question: 'Can department heads see their own view?', answer: 'Each department gets a filtered briefing plus mobile notifications.' },
]

export default function StaffingLaborPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Staffing & Service</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Forecast coverage before member experience breaks.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday workflow starts with 48-hour coverage risk, routes shift recommendations, and pushes board snapshots by end of day.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <StaffingForecastGrid />
          <StaffingBeforeAfterCard />
          <BoardSnapshotCard />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-2">
          <ServiceFailureBlock />
          <div className="rounded-xl border border-swoop-border bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Signal sources</p>
            <div className="mt-3">
              <SourceBadgeRow />
            </div>
            <p className="mt-4 text-sm text-swoop-muted">Signal → Insight → Action: tee-sheet pace + weather + POS tickets show a lunch risk window; labor optimizer recommends exact role coverage before service waits spike.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Coastal Links</p>
          <h2 className="mt-2 text-2xl font-bold">Coverage corrections lowered waits by 59% in two weeks.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Coastal Links used Monday staffing forecasts to rebalance FOH and kitchen shifts, reducing complaint volume and protecting $43K in seasonal dues risk.</p>
        </article>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — coverage moves</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Forecast 48-hour demand across outlets.</li>
              <li>• Assign staffing adjustments by role.</li>
              <li>• Push alerts to department heads.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board accountability</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Wait-time reduction vs baseline.</li>
              <li>• Labor efficiency tied to member saves.</li>
              <li>• Exception log for leadership review.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Coverage gap recommendation — artifact</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-6 text-sm text-swoop-muted">
            <p className="font-semibold text-swoop-dark">Tuesday PM</p>
            <p>Predicted demand: 85 covers</p>
            <p>Current staff: 4 servers</p>
            <p>Recommended: 6 servers</p>
            <p className="mt-2 font-semibold text-[#AF4C0B]">Gap: +2 servers needed</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Staffing & labor FAQ</h2>
          <div className="mt-6 space-y-4">
            {staffingFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See staffing guidance before the rush hits.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to align labor with predicted demand.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
