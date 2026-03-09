import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Features',
  description: 'Explore Swoop feature modules for member health, demand optimization, AI agents, and cross-system intelligence.',
  path: '/features',
})

const featureFaqs = [
  { question: 'Which feature should I start with?', answer: 'Most clubs begin with Member Health for immediate retention gains.' },
  { question: 'Can I enable features incrementally?', answer: 'Yes. Turn on modules one at a time as integrations come online.' },
  { question: 'Do all features require all integrations?', answer: 'No. Each module lists its minimum data sources; CSV fallback is available.' },
  { question: 'How do features interact?', answer: 'Outputs (like member health) feed demand routing, AI agents, and reporting automatically.' },
  { question: 'Is training provided for each feature?', answer: 'Every feature includes guided onboarding and ops-specific playbooks.' },
]

const featureLinks = [
  { href: '/features/member-health', title: 'Member Health', desc: 'Early churn signals, risk scoring, and intervention workflows.' },
  { href: '/features/demand-optimization', title: 'Demand Optimization', desc: 'Waitlist routing, cancellation prediction, and fill-rate protection.' },
  { href: '/features/ai-agents', title: 'AI Agents', desc: 'Always-on operational agents with human approval controls.' },
  { href: '/features/cross-system-intelligence', title: 'Cross-System Intelligence', desc: 'Unified analysis across tee sheet, POS, CRM, staffing, and comms.' },
]

export default function FeaturesPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Features</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Feature modules built for club operators.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">Explore focused product modules and how they connect into one operational intelligence layer.</p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-6">
          {featureLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl border border-swoop-border bg-white p-6 transition hover:shadow-md">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-swoop-muted">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — how operators use features</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Enable the module tied to the week’s priority.</li>
              <li>• Review live data and assign owners.</li>
              <li>• Approve AI or workflow actions in context.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — what leadership sees</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Module-level impact in the board report.</li>
              <li>• Revenue + retention attribution per feature.</li>
              <li>• Next-step plan for expanding coverage.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Feature → outcome map</p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { feature: 'Member Health Scores', outcome: 'Catch resignations 90 days early' },
              { feature: 'Demand Optimization', outcome: 'Fill every tee time at max yield' },
              { feature: 'AI Agents', outcome: 'Six autonomous specialists working 24/7' },
              { feature: 'Cross-System Intelligence', outcome: 'One member timeline across every touchpoint' },
            ].map((row) => (
              <div key={row.feature} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <p className="text-sm font-semibold text-swoop-dark">{row.feature}</p>
                <p className="text-sm text-swoop-muted">→ {row.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Features FAQ</h2>
          <div className="mt-6 space-y-4">
            {featureFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">Pick the module your club needs first.</h2>
          <p className="text-swoop-muted mb-6">Book a demo and we’ll map features to your retention priorities.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
