import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import MetricCalloutStrip from '@/components/MetricCalloutStrip'

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'See how Swoop surfaces retention risks, optimizes tee sheet yield, and connects operations to revenue. Demo scenario walkthroughs.',
  path: '/case-studies',
})

const proofMetrics = [
  { value: '6-day', label: 'Average early warning lead time', detail: 'Across Oakmont Hills demo scenario' },
  { value: '$22K', label: 'Dues protected per save', detail: 'Median for high-risk members' },
  { value: '3 systems', label: 'Signals combined', detail: 'Tee sheet + POS + CRM per case' },
  { value: '91%', label: 'Prediction confidence', detail: 'Member Pulse accuracy in demo' },
]

const scenarios = [
  {
    name: 'Oakmont Hills churn reduction',
    timeline: '6-week intervention timeline',
    before: ['17 members in active decline', '$384K annual dues at risk', 'Average follow-up lag: 5.8 days'],
    after: ['11 members stabilized', '$246K dues protected', 'Average follow-up lag: 23 hours'],
    roi: ['ROI: 19.4x', 'Payback: 12 days', 'Retention lift: +8.2 pts'],
  },
  {
    name: 'Desert Ridge multi-club onboarding',
    timeline: '30-day multi-property rollout',
    before: ['5 clubs, 5 incompatible reports', 'Quarterly board prep: 2.5 days', 'No shared intervention playbooks'],
    after: ['Unified rollup by week 2', 'Board package in 22 minutes', 'Portfolio playbooks deployed across all clubs'],
    roi: ['Ops time saved: 74 hours/quarter', 'Estimated value recaptured: $131K/yr', 'Implementation ROI: 11.2x'],
  },
  {
    name: 'Silver Mesa F&B rescue',
    timeline: '21-day service recovery sprint',
    before: ['Post-round conversion: 29%', 'Peak ticket time: 41 minutes', 'Complaint backlog: 14 open tickets'],
    after: ['Post-round conversion: 41%', 'Peak ticket time: 24 minutes', 'Complaint backlog: 3 open tickets'],
    roi: ['New monthly F&B lift: $6.2K', 'Annualized contribution: $74.4K', 'Labor-adjusted ROI: 8.7x'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Three scenarios, concrete outcomes.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            These scenarios mirror private-club operating patterns and show exactly how teams used Swoop to reduce churn risk, speed response, and recover revenue.
          </p>
        </div>
      </section>

      <section className="py-6 px-6">
        <div className="max-w-container mx-auto">
          <MetricCalloutStrip metrics={proofMetrics} />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto space-y-8">
          {scenarios.map((scenario) => (
            <article key={scenario.name} className="rounded-2xl border border-swoop-border bg-white p-8 shadow-sm">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-bold">{scenario.name}</h2>
                <span className="rounded-full bg-swoop-dark px-3 py-1 text-xs font-semibold text-white">{scenario.timeline}</span>
              </div>
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="rounded-xl border border-swoop-border bg-swoop-bg p-5">
                  <p className="text-xs uppercase tracking-wider text-swoop-muted mb-2">Before</p>
                  <ul className="space-y-2 text-sm text-swoop-muted">
                    {scenario.before.map((item) => (
                      <li key={item} className="flex gap-2"><span className="text-swoop-accent">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-[#4ADE80]/40 bg-[#4ADE80]/10 p-5">
                  <p className="text-xs uppercase tracking-wider text-[#1F2F24] mb-2">After</p>
                  <ul className="space-y-2 text-sm text-[#1F2F24]">
                    {scenario.after.map((item) => (
                      <li key={item} className="flex gap-2"><span className="text-[#1F2F24]">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-swoop-accent/40 bg-swoop-accent/10 p-5">
                  <p className="text-xs uppercase tracking-wider text-swoop-dark mb-2">ROI Summary</p>
                  <ul className="space-y-2 text-sm text-swoop-dark">
                    {scenario.roi.map((item) => (
                      <li key={item} className="flex gap-2"><span className="text-swoop-accent">•</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
