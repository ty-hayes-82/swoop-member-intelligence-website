import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import TrustedBetaStrip from '@/components/TrustedBetaStrip'
import MorningBriefingPreview from '@/components/MorningBriefingPreview'
import {
  BoardReportPreview,
  AtRiskRosterMock,
  RoutingComparisonMock,
  DailyBriefingScreenshot,
  AgentCommandScreenshot,
  TeeSheetScreenshot,
  MemberRosterScreenshot,
  BoardReportScreenshot,
} from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Platform Overview',
  description: 'Give your GM team one page to see problems, fix them, and show the board proof — without rebuilding your stack.',
  path: '/platform',
})

const weeks = [
  {
    title: 'Week 1 Intake',
    detail: 'Connect feeds, line up member records, and verify baseline risk coverage.',
    mock: <AtRiskRosterMock />,
  },
  {
    title: 'Week 2 Activation',
    detail: 'Route first workflows for demand, staffing, and member saves.',
    mock: <RoutingComparisonMock />,
  },
  {
    title: 'Week 3 Automations',
    detail: 'Enable automated board snapshots and ready-to-send workflows.',
    mock: <BoardReportPreview />,
  },
]

const screenshotDeck = [

const platformFaqs = [
  {
    question: 'What are lenses?',
    answer: 'Lenses are operational views: member health, demand, F&B, staffing, revenue, and location.',
  },
  {
    question: 'What data sources are required?',
    answer: 'Tee sheet and POS at minimum. Email and CRM unlock deeper insights.',
  },
  {
    question: 'How is data governed?',
    answer: 'All data stays in your Vercel Postgres instance. No cross-club sharing.',
  },
  {
    question: 'How long does adoption take?',
    answer: 'Most teams are using the Daily Briefing within 48 hours of setup.',
  },
  {
    question: 'Can I customize what appears in my briefing?',
    answer: 'Yes. Each lens and alert threshold is configurable.',
  },
]

  { title: 'Daily Briefing', component: <DailyBriefingScreenshot /> },
  { title: 'Agent Command', component: <AgentCommandScreenshot /> },
  { title: 'Tee Sheet routing', component: <TeeSheetScreenshot /> },
  { title: 'Member roster', component: <MemberRosterScreenshot /> },
  { title: 'Board report', component: <BoardReportScreenshot /> },
]

export default function PlatformPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Platform</p>
          <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">From Monday briefing to Friday board proof in one view.</h1>
        </div>
      </section>

      <TrustedBetaStrip />

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          {weeks.map((week) => (
            <article key={week.title} className="responsive-card rounded-2xl border border-swoop-border bg-white p-6">
              <h2 className="text-xl font-semibold">{week.title}</h2>
              <p className="mt-2 text-sm text-swoop-muted">{week.detail}</p>
              <div className="mt-4">{week.mock}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <MorningBriefingPreview />
        </div>
      </section>

      <section className="px-6">
        <div className="responsive-card mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Annotated product screenshots</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {screenshotDeck.map((shot) => (
              <div key={shot.title}>{shot.component}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — your workflow across lenses</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Check member health scores for overnight changes</li>
              <li>• Review tee sheet demand and cancellation risks</li>
              <li>• Approve AI-recommended outreach and staffing adjustments</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board packet outputs</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Member retention rate and trend</li>
              <li>• Revenue per available tee time</li>
              <li>• F&B covers forecast accuracy</li>
              <li>• Cumulative agent impact report</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Sample board packet</p>
          <div className="overflow-x-auto">
            <div className="rounded-2xl border border-dashed border-swoop-border bg-[#F5F5F5] p-6 text-left">
              <h3 className="text-xl font-semibold text-swoop-dark">Monthly Board Report — Oakmont Hills CC · January 2026</h3>
              <table className="mt-4 w-full text-sm">
                <thead className="text-left text-xs uppercase tracking-wide text-swoop-muted">
                  <tr><th className="py-2">Metric</th><th>This Month</th><th>Prior Month</th><th>Trend</th></tr>
                </thead>
                <tbody>
                  {[
                    { metric: 'Member Health Index', current: '73.5', prior: '68.2', trend: 'Up' },
                    { metric: 'Dues at Risk', current: '$633K', prior: '$891K', trend: 'Down' },
                    { metric: 'Tee Time Yield', current: '94%', prior: '87%', trend: 'Up' },
                    { metric: 'Active Saves', current: '12', prior: '8', trend: 'Up' },
                  ].map((row) => (
                    <tr key={row.metric} className="border-t border-swoop-border/60">
                      <td className="py-2 font-semibold">{row.metric}</td>
                      <td>{row.current}</td>
                      <td>{row.prior}</td>
                      <td>{row.trend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Platform FAQ</h2>
          <div className="mt-6 space-y-4">
            {platformFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProofStack
        statLabel="Time to first measurable outcome"
        statValue="21.3 days"
        demoLabel="Platform snapshot"
        ctaLabel="Book a Demo"
        ctaHref="/book-demo"
      >
        <BoardReportPreview />
      </ProofStack>

      <CTASection headline="See the week-by-week rollout on your stack." subtext="No rip-and-replace required." />
    </div>
  )
}
