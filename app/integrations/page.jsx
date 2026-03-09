import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import IntegrationStatusGrid from '@/components/IntegrationStatusGrid'
import { SourceBadgeRow, BoardReportPreview } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Integrations',
  description: 'Connect tee sheet, POS, CRM, and staffing systems into one data flow with implementation milestones.',
  path: '/integrations',
})

const flow = ['Tee Sheet', 'Swoop ingestion', 'Playbooks', 'Outcomes']
const timeline = [
  'Week 1: Intake mapping and credential setup',
  'Week 2: Data validation and first workflow launch',
  'Week 3: Automation tuning and board report handoff',
]

const integrationFaqs = [
  { question: 'Is Swoop SOC 2 certified?', answer: 'SOC 2 Type II certification is on our roadmap for Q3 2026. We follow SOC 2 controls today.' },
  { question: 'How is PII handled?', answer: 'Member data is encrypted at rest and in transit. No PII leaves your environment.' },
  { question: 'Is access read-only or read-write?', answer: 'Read-only by default. Write access like sending emails requires explicit approval per action.' },
  { question: 'How often does data sync?', answer: 'Real-time for tee sheet and POS. Daily for CRM and email platforms.' },
  { question: 'Do you support SSO?', answer: 'Yes. We support SAML 2.0 and OAuth flows for enterprise deployments.' },
]

export default function IntegrationsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Integrations</p>
          <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">From source systems to measurable outcomes.</h1>
          <p className="mt-4 text-swoop-muted">Swoop connects to your existing club management system (Jonas, Northstar, Clubessential) — no rip-and-replace required. CSV fallback is available while API credentials are finalized.</p>
          <div className="mt-4 flex justify-center">
            <SourceBadgeRow />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <IntegrationStatusGrid />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">The problem with siloed data</h2>
          <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
            <li>• Tee sheet data never reaches your POS.</li>
            <li>• POS data never syncs with your CRM.</li>
            <li>• CRM data never informs your email platform.</li>
            <li>• Swoop connects them so risk and revenue signals stay in sync.</li>
          </ul>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — what IT does week 1</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Provide API credentials for tee sheet and POS.</li>
              <li>• Swoop configures read-only connections.</li>
              <li>• Data flows begin within 24 hours.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — what data is visible</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Member engagement scores across every touchpoint.</li>
              <li>• Cross-system identity matching.</li>
              <li>• Unified timeline per member.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Integration architecture</p>
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr]">
            <div className="space-y-2">
              {['Tee Sheet', 'POS', 'CRM', 'Email'].map((item) => (
                <div key={item} className="rounded-xl border border-swoop-border bg-swoop-bg p-3 text-center text-sm font-semibold">{item}</div>
              ))}
              <p className="text-center text-xs text-swoop-muted">Your systems</p>
            </div>
            <div className="flex flex-col items-center justify-center text-sm font-semibold text-swoop-muted">
              <div className="rounded-full border border-swoop-border bg-white px-4 py-2 text-swoop-dark">Swoop intelligence layer</div>
              <div className="my-2 text-lg">→</div>
            </div>
            <div className="space-y-2">
              {['Daily Briefing', 'AI Agents', 'Board Reports'].map((item) => (
                <div key={item} className="rounded-xl border border-swoop-border bg-swoop-bg p-3 text-center text-sm font-semibold">{item}</div>
              ))}
              <p className="text-center text-xs text-swoop-muted">Swoop outputs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Trust & security FAQ</h2>
          <div className="mt-6 space-y-4">
            {integrationFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="responsive-card mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Data-flow visualization</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {flow.map((node, index) => (
              <div key={node} className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-sm font-semibold">
                <p>{node}</p>
                {index < flow.length - 1 && <p className="mt-2 text-xs text-swoop-muted">→</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="responsive-card mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Implementation timeline</h2>
          <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
            {timeline.map((item) => (
              <li key={item} className="rounded-lg border border-swoop-border bg-swoop-bg px-3 py-2">{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <ProofStack
        statLabel="CSV import hub"
        statValue="≈48-hour activation target"
        demoLabel="Outcome preview"
        ctaLabel="Book a Demo"
        ctaHref="/book-demo"
      >
        <BoardReportPreview />
      </ProofStack>

      <CTASection headline="Map your integration path with us." />
    </div>
  )
}
