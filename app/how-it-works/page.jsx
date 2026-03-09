import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { AtRiskRosterMock, RoutingComparisonMock, StaffingForecastGrid } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'How It Works',
  description: 'Connect your existing systems, get intelligence in days, and start acting on AI recommendations. Live in under 2 weeks.',
  path: '/how-it-works',
})

const painPoints = [
  'Weekly spreadsheets delay action — you discover member risk after the resignation hits.',
  'Vendors keep data in silos, so tee sheet, dining, and labor signals never get reconciled.',
  'Board updates take a full Sunday night because proof and narrative live in different tools.',
]

const steps = [
  {
    phase: 'Step 1',
    title: 'See',
    description: 'Monday 6 AM: Swoop pulls tee sheet, POS, CRM, and labor data into one shared briefing.',
    mock: <AtRiskRosterMock />,
  },
  {
    phase: 'Step 2',
    title: 'Decide',
    description: 'Tuesday–Wednesday: risks are ranked with suggested owners, so you approve exactly what gets done.',
    mock: <RoutingComparisonMock />,
  },
  {
    phase: 'Step 3',
    title: 'Act',
    description: 'By Friday: outcomes roll into the board pack, showing what was saved and what still needs attention.',
    mock: <StaffingForecastGrid />,
  },
]

const faqs = [
  {
    question: 'How long does it take to connect my data?',
    answer: 'Week 1 covers IT intake. We connect tee sheet, POS, CRM, and staffing exports (API or CSV) in 3–5 business days without changing your current vendors.',
  },
  {
    question: 'Who owns implementation inside the club?',
    answer: 'We set clear owners: GM or AGM for approvals, Controller for data validation, and department leads for pilot actions. Each role gets a Monday email with their tasks.',
  },
  {
    question: 'Is member data secure and accurate?',
    answer: 'All demo data shown here is synthetic. In production we use Vercel-managed secrets, field-level audit logs, and reconciliation checks so mismatched members are flagged before launch.',
  },
  {
    question: 'What training is required?',
    answer: 'One 45-minute session per department. The UI mirrors the Daily Briefing your team already reads, so most staff are productive in the first week.',
  },
  {
    question: 'What support do we get after go-live?',
    answer: 'Weekly office hours plus a dedicated Slack channel for approvals, data questions, and new queue rules. We also ship a Friday board-ready recap automatically.',
  },
]

export default function HowItWorksPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">How it works</p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold md:text-5xl">From early warning to a board-ready proof loop in 10 working days.</h1>
              <p className="mt-4 text-lg text-swoop-muted">
                Connect the systems you already use, get ranked risks on Monday, approve actions mid-week, and ship proof on Friday without another spreadsheet.
              </p>
            </div>
            <div className="rounded-2xl border border-swoop-border bg-white p-6 lg:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Why clubs call us</p>
              <ul className="mt-4 space-y-3 text-sm text-swoop-muted">
                {painPoints.map((pain) => (
                  <li key={pain} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-swoop-accent" aria-hidden />
                    <span>{pain}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-8 lg:grid-cols-[1fr_280px]">
          <div className="space-y-8">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl border border-swoop-border bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">{step.phase}</p>
                <h2 className="mt-2 text-2xl font-bold">{step.title}</h2>
                <p className="mt-2 text-swoop-muted">{step.description}</p>
                <div className="mt-4">{step.mock}</div>
              </article>
            ))}
          </div>
          <aside className="h-fit rounded-2xl border border-swoop-border bg-white p-5 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Workflow</p>
            <ol className="mt-3 space-y-2 text-sm">
              <li className="rounded bg-swoop-bg px-3 py-2">Signal</li>
              <li className="rounded bg-swoop-bg px-3 py-2">Insight</li>
              <li className="rounded bg-swoop-bg px-3 py-2">Action</li>
            </ol>
          </aside>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday — Implementation game plan</p>
            <h2 className="mt-3 text-2xl font-bold">Week 1: Connect and verify</h2>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-swoop-ink" />IT lead: share API keys or CSV exports (tee sheet, POS, CRM, labor).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-swoop-ink" />Controller: validate member + revenue totals with our reconciler.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-swoop-ink" />GM/AGM: approve pilot queue rules for retention routing.
              </li>
            </ul>
            <p className="mt-4 text-sm font-semibold text-swoop-ink">Live signal ranking delivered by Day 10.</p>
          </article>

          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday — Proof for the board</p>
            <h2 className="mt-3 text-2xl font-bold">First 90-day outcomes</h2>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>+24 members saved before resignation notices.</li>
              <li>$312 per slot average when retention routing is approved.</li>
              <li>6-day advance warning on at-risk waitlist demand.</li>
            </ul>
            <p className="mt-5 text-xs uppercase tracking-wide text-swoop-muted">Demo data scenario — Oakmont Hills CC (Jan 2026)</p>
          </article>

          <article className="rounded-2xl border border-dashed border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
            <h2 className="mt-3 text-2xl font-bold">Implementation checklist preview</h2>
            <p className="mt-3 text-sm text-swoop-muted">Annotated PDF placeholder showing the exact checklist GMs share with their team. Replace with live screenshot once production doc is approved.</p>
            <div className="mt-6 rounded-xl bg-swoop-bg p-6 text-center text-sm text-swoop-muted">
              Screenshot placeholder · Implementation Checklist · Oakmont Hills demo
            </div>
          </article>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Questions GMs ask</p>
            <h2 className="mt-3 text-3xl font-bold">Operational details before you invite the board.</h2>
            <p className="mt-3 text-swoop-muted">Share this with IT, the controller, and department leads so everyone knows what happens on Monday and what proof arrives Friday.</p>
          </div>
          <dl className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-swoop-border bg-white p-6">
                <dt className="text-base font-semibold text-swoop-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm text-swoop-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection headline="Book a demo to see your Monday → Friday loop." subtext="30 minutes, no obligation — we’ll map your systems and show the first 90-day proof pack." />
    </div>
  )
}
