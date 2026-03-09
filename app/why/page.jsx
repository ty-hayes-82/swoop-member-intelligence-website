import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import { BoardReportPreview } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Why Swoop',
  description: 'Compare Swoop with legacy BI and point tools on deployment speed, live metrics, and actionability.',
  path: '/why',
})

const rows = [
  { metric: 'Deployment time', legacy: '8-16 weeks', swoop: '2-3 weeks' },
  { metric: 'Real-time data', legacy: 'Nightly batch', swoop: 'Live metrics with hourly refresh' },
  { metric: 'Action workflows', legacy: 'Manual follow-up', swoop: 'Step-by-step routing with clear owners' },
  { metric: 'Attribution depth', legacy: 'Lagging summaries', swoop: 'Action-level proof' },
]

export default function WhyPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Why Swoop</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Purpose-built for operators, not dashboard tourists.</h1>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container overflow-x-auto rounded-2xl border border-swoop-border bg-white">
          <table className="w-full min-w-[620px]">
            <thead className="bg-swoop-bg text-left text-sm">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Legacy BI vendors</th>
                <th className="px-4 py-3">Swoop</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.metric} className="border-t border-swoop-border text-sm">
                  <td className="px-4 py-3 font-semibold">{row.metric}</td>
                  <td className="px-4 py-3 text-swoop-muted">{row.legacy}</td>
                  <td className="px-4 py-3">{row.swoop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <ProofStack
        statLabel="Operational ramp"
        statValue="2.4x faster"
        demoLabel="Leadership snapshot"
        ctaLabel="Book a Demo"
        ctaHref="/book-demo"
      >
        <BoardReportPreview />
      </ProofStack>

      <CTASection headline="Compare your current stack to Swoop." subtext="We’ll run the benchmark with your operating model." />
    </div>
  )
}
