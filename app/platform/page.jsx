import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import TrustedBetaStrip from '@/components/TrustedBetaStrip'
import MorningBriefingPreview from '@/components/MorningBriefingPreview'
import {
  BoardReportPreview,
  RoutingComparisonMock,
  AgentCommandScreenshot,
} from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Platform Overview',
  description: 'See It. Fix It. Prove It. — one workflow for private club operators who need action, not dashboards.',
  path: '/platform',
})

const frameworkSections = [
  {
    id: 'see-it',
    label: 'See It',
    headline: 'One daily briefing shows every risk before noon.',
    description:
      'Member health, tee-sheet demand, staffing coverage, and service issues in a single rolling view so you know where to act before complaints land on your desk.',
    bullets: [
      'Member health scores update hourly with live engagement and spend shifts',
      'Demand intelligence ties cancellations to downstream revenue loss',
      'Staffing and service KPIs highlight the next shift likely to miss standards',
    ],
    component: <MorningBriefingPreview />,
  },
  {
    id: 'fix-it',
    label: 'Fix It',
    headline: 'AI agents route the next best move with context.',
    description:
      'Approve ready-to-send outreach, staffing adjustments, and demand fills. Every suggestion includes the why, the financial impact, and the playbook.',
    bullets: [
      'Member save tasks include call scripts, health history, and value at risk',
      'Demand optimizer fills gaps with members who drive ancillary revenue',
      'Service recovery auto-drafts apologies and escalations when thresholds break',
    ],
    component: <AgentCommandScreenshot />,
  },
  {
    id: 'prove-it',
    label: 'Prove It',
    headline: 'Board-ready proof without rebuilding a spreadsheet Friday night.',
    description:
      'Retention impact, dollars recovered, and AI agent performance roll up into a monthly executive view — ready to paste into your packet.',
    bullets: [
      'Board snapshot auto-builds with member saves, revenue impact, and staffing intel',
      'Every approved action is attributed back to dollars and satisfaction gain',
      'Exportable packets keep finance, ownership, and committees aligned',
    ],
    component: <BoardReportPreview />,
  },
]

const platformFaqs = [
  {
    question: 'How does the See It → Fix It → Prove It flow work?',
    answer: 'Briefing surfaces risks, agents draft actions, and reporting packages the outcomes — using the same underlying data model.',
  },
  {
    question: 'What data sources are required?',
    answer: 'Tee sheet and POS are the foundations. CRM, email, and staffing systems deepen the intelligence.',
  },
  {
    question: 'Where does our data live?',
    answer: 'In your Vercel Postgres instance. Swoop is the intelligence layer, not the system of record.',
  },
  {
    question: 'How long does it take to deploy?',
    answer: 'Live in under 2 weeks. Week 1: Connect your tee sheet, POS, and CRM integrations (3-5 business days for API access). Week 2: Intelligence models calibrate to your member base and Daily Briefing goes live. By day 10-14, GMs are approving AI-recommended actions from the platform. Founding Partner clubs averaged 13.2 days from kickoff to first approved member save action.',
  },
  {
    question: 'Can we customize the views and alerts?',
    answer: 'Yes. Each view, metric, and threshold is configurable per club.',
  },
]

const boardSnapshot = [
  { metric: 'Member Health Index', current: '73.5', prior: '68.2', trend: 'Up' },
  { metric: 'Dues at Risk', current: '$633K', prior: '$891K', trend: 'Down' },
  { metric: 'Tee Time Yield', current: '94%', prior: '87%', trend: 'Up' },
  { metric: 'Active Saves', current: '12', prior: '8', trend: 'Up' },
]

export default function PlatformPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Platform</p>
          <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">See it. Fix it. Prove it — in the same workflow.</h1>
        </div>
      </section>

      <TrustedBetaStrip />

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <p className="text-center text-sm uppercase tracking-[0.3em] text-swoop-muted mb-8">Three questions every GM needs answered by Monday morning</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-swoop-border bg-white p-6 text-center">
              <p className="text-3xl mb-3">🔍</p>
              <h3 className="text-lg font-bold text-swoop-dark mb-2">Which members are drifting away?</h3>
              <p className="text-sm text-swoop-muted">Health scores flag disengagement 6 weeks before a resignation letter lands.</p>
            </div>
            <div className="rounded-2xl border border-swoop-border bg-white p-6 text-center">
              <p className="text-3xl mb-3">💸</p>
              <h3 className="text-lg font-bold text-swoop-dark mb-2">Where is revenue leaking?</h3>
              <p className="text-sm text-swoop-muted">Pace delays, staffing gaps, and no-shows cost the average club $9,500/month in F&amp;B alone.</p>
            </div>
            <div className="rounded-2xl border border-swoop-border bg-white p-6 text-center">
              <p className="text-3xl mb-3">⚠️</p>
              <h3 className="text-lg font-bold text-swoop-dark mb-2">What is about to break?</h3>
              <p className="text-sm text-swoop-muted">Staffing shortfalls, service lapses, and operational failures — flagged before they hit your phone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-swoop-muted">Framework</p>
          <h2 className="mt-3 text-2xl font-bold">Every private club workflow follows the same pattern.</h2>
          <p className="mt-2 text-swoop-muted">
            <strong>See the risk</strong>, <strong>fix it with approval-grade actions</strong>, and <strong>prove the outcome</strong>. Swoop stitches those steps together without ripping out your tee sheet, POS, or CRM.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container space-y-12">
          {frameworkSections.map((section, index) => (
            <article
              key={section.id}
              id={section.id}
              className="responsive-card grid gap-8 rounded-2xl border border-swoop-border bg-white p-6 lg:grid-cols-[1.1fr_1fr]"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-swoop-muted">{section.label}</p>
                <h2 className="mt-2 text-2xl font-bold">{section.headline}</h2>
                <p className="mt-3 text-sm text-swoop-muted">{section.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-swoop-border bg-swoop-bg/40 p-4">{section.component}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Daily briefing checklist</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Member saves ranked by risk, spend, and loyalty impact</li>
              <li>• Demand and cancellation intel tied to downstream revenue</li>
              <li>• Staffing gaps flagged with expected covers at risk</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Board packet outputs</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Retention impact and dues saved</li>
              <li>• Agent action log with financial attribution</li>
              <li>• Operational risks carried into next week</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-xl font-semibold">Sample board-ready snapshot</h2>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-swoop-border/60 bg-[#F8F8F8] p-6">
            <table className="w-full text-sm">
              <thead className="text-left text-xs uppercase tracking-wide text-swoop-muted">
                <tr>
                  <th className="py-2">Metric</th>
                  <th>This Month</th>
                  <th>Prior Month</th>
                  <th>Trend</th>
                </tr>
              </thead>
              <tbody>
                {boardSnapshot.map((row) => (
                  <tr key={row.metric} className="border-t border-swoop-border/50">
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
        <RoutingComparisonMock />
      </ProofStack>

      <CTASection headline="See the See It → Fix It → Prove It flow on your stack." subtext="No rip-and-replace required." />
    </div>
  )
}
