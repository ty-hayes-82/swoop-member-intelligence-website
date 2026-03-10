import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import DemoDisclosure from '@/components/DemoDisclosure'

export const metadata = buildMetadata({
  title: 'Member Intelligence',
  description: 'Surface changing engagement behavior before it turns into churn risk. Prioritize interventions by member value and relationship sensitivity.',
  path: '/capabilities/member-intelligence',
})

const workflow = [
  { title: 'Signal', detail: 'Health score drops, spend softens, and complaint aging passes 72 hours.' },
  { title: 'Action', detail: 'GM receives script + routing recommendation before the morning standup.' },
  { title: 'Proof', detail: 'Save probability and annual dues protected are written back to board reporting.' },
]

const memberFaqs = [
  { question: 'What data feeds the health score?', answer: 'Tee sheet history, POS spend, complaint logs, email engagement, and staffing context.' },
  { question: 'How often do scores update?', answer: 'Hourly for tee sheet and POS, daily for CRM and campaign signals.' },
  { question: 'Can I customize risk thresholds?', answer: 'Yes. You can set trigger levels by segment, value tier, or membership type.' },
  { question: 'What happens when a member is flagged?', answer: 'They enter the Daily Briefing queue with a recommended save playbook and owner assignment.' },
  { question: 'How accurate are the predictions?', answer: 'Clubs typically see 80%+ precision on resignations flagged at least two weeks early.' },
]

const insightCards = [
  {
    title: 'Health trajectory in context',
    detail: 'Weekly decay timeline shows email, golf, dining, and complaint streaks so outreach references real behavior.',
  },
  {
    title: 'Action drawer with script + comps',
    detail: 'Approving an action opens a full profile: family notes, preferred channel, and approved comp guidance.',
  },
  {
    title: 'Board math stays in sync',
    detail: 'Every outreach logs owner, due date, and protected dues so Friday packets export without extra spreadsheets.',
  },
]

export default function MemberIntelligencePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28" data-hero-section>
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Member Intelligence</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Know who is drifting before resignation language appears.</h1>
          <p className="mt-4 max-w-3xl text-lg text-swoop-muted">Monday workflow: Daily Briefing opens with the at-risk roster, the GM acts in minutes, and outcomes are attributed by Friday review.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl border border-swoop-border bg-white p-5">
            <ScreenshotLightbox
              src="/images/screenshot-member-intelligence.png"
              alt="Member Intelligence roster with at-risk members highlighted"
              maxHeight={420}
              objectPosition="top"
            />
            <p className="mt-3 text-sm text-swoop-muted">Live roster showing health distribution, dues at risk, and the complete save queue. Demo data — Oakmont Hills CC, January 2026.</p>
            <DemoDisclosure className="mt-1 text-xs" />
          </div>
          <div className="space-y-4">
            {insightCards.map((card) => (
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
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {workflow.map((step) => (
              <article key={step.title} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <h2 className="font-semibold">{step.title}</h2>
                <p className="mt-2 text-sm text-swoop-muted">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Micro case study · Desert Sky GC</p>
          <h2 className="mt-2 text-2xl font-bold">9 saves in 30 days with one-call playbooks.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Desert Sky moved from reactive outreach to a Monday-first save cadence: 9 members retained, $168K in annual dues protected, and average complaint follow-up time cut to 19 hours.</p>
        </article>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — live operations</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Daily Briefing prioritizes at-risk members.</li>
              <li>• Scripts + owners are assigned in minutes.</li>
              <li>• Engagement decay reasons drive the outreach.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board proof</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Retention trend and save probability deltas.</li>
              <li>• Annual dues protected and intervention attribution.</li>
              <li>• Next-week outlook for the board packet.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Risk reasons list — artifact</p>
          <div className="space-y-2 text-sm text-swoop-muted">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="font-semibold text-swoop-dark">Member 183</p>
              <p className="mt-1">Score dropped from 82 → 41</p>
              <ul className="mt-3 space-y-1">
                <li>• No rounds in 6 weeks</li>
                <li>• Dining spend down 60%</li>
                <li>• Missed 3 consecutive emails</li>
              </ul>
              <p className="mt-3 text-sm font-semibold text-[#147A3E]">Recommended: Personal call from Membership Director</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Member intelligence FAQ</h2>
          <div className="mt-6 space-y-4">
            {memberFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See your save queue before Monday hits.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to review your member intelligence assumptions live.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
