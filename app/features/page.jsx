import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'Features',
  description: 'Explore Swoop feature modules for member health, demand optimization, AI agents, and cross-system intelligence.',
  path: '/features',
})

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

      <CTASection />
    </>
  )
}
