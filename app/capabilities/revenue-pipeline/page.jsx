import CTASection from '@/components/CTASection'
import MetricCalloutStrip from '@/components/MetricCalloutStrip'
import { BoardReportPreviewMini, RevenueAttributionStrip, PipelineMemberDeepDive } from '@/components/ProductMockups'

export const metadata = {
  title: 'Revenue & Pipeline',
  description: 'Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.',
}

const revenueMetrics = [
  { value: '$251K', label: 'Annualized impact tracked', detail: 'Attribution from demo scenario' },
  { value: '42x', label: 'ROI on Swoop Pro', detail: 'Attributed revenue vs. platform cost' },
  { value: '$88K', label: 'Dues protected monthly', detail: 'From four retained members' },
  { value: '8.6 days', label: 'Payback period', detail: 'Time to recoup annual cost' },
]

const metrics = [
  { title: 'Per-Slot Revenue Optimization', desc: 'Not all tee times are equal. Saturday 8am generates $340/slot. Tuesday 2pm generates $95. Swoop helps you allocate inventory to maximize yield without alienating members.' },
  { title: 'Retention-Driven Yield', desc: 'Revenue isn\'t just about filling slots — it\'s about filling them with members who renew. A $312/slot with retained members beats $340/slot if the high-payer resigns next quarter.' },
  { title: 'Guest-to-Member Pipeline', desc: 'Track which guest rounds convert to membership inquiries, applications, and joins. $36K in membership revenue is hiding in your guest data — Swoop surfaces it.' },
  { title: 'Revenue Attribution', desc: 'Which playbook actions actually recovered revenue? Swoop tracks from intervention to outcome: "Member Pulse sequence → James Whitfield retained → $22K/yr protected."' },
  { title: 'Dues Yield Analysis', desc: 'Revenue per member varies 4x across your roster. Know which segments are over-indexed, under-served, or declining — and what it means for next year\'s budget.' },
  { title: 'Board-Ready Reporting', desc: 'Auto-generated monthly summaries: revenue trends, retention impact, pipeline health, and ROI on every AI-recommended action. No more manual board report assembly.' },
]

const attributionExample = {
  title: 'January 2026: What the board sees vs. what actually happened',
  boardView: [
    { metric: 'Resignations', value: '3 members' },
    { metric: 'New joins', value: '2 members' },
    { metric: 'Net change', value: '-1 member' },
    { metric: 'Board conclusion', value: '"Normal attrition. No action needed."' },
  ],
  swoopView: [
    { metric: 'Members flagged at-risk', value: '8' },
    { metric: 'Interventions recommended', value: '8' },
    { metric: 'GM actions taken', value: '5' },
    { metric: 'Members retained', value: '4 of 5 (80% success rate)' },
    { metric: 'Resignations prevented', value: '4 ($88K annual dues protected)' },
    { metric: 'Actual resignations', value: '3 (from the 3 not actioned + 1 failed save)' },
    { metric: 'True story', value: 'GM saved 4 members. Board never knew they were at risk.' },
  ],
}

const boardReport = {
  month: 'January 2026',
  sections: [
    {
      title: 'Retention Performance',
      metrics: [
        { label: 'Members at-risk (flagged by Member Pulse)', value: '8' },
        { label: 'Intervention success rate', value: '80% (4 of 5 actioned)' },
        { label: 'Annual dues protected', value: '$88,000' },
        { label: 'Estimated replacement cost avoided', value: '$220,000' },
      ],
    },
    {
      title: 'Revenue Attribution',
      metrics: [
        { label: 'F&B conversion improvement (pace optimization)', value: '+$5,700/month' },
        { label: 'Waitlist retention-routing impact', value: '+$12,400/month (at-risk members prioritized)' },
        { label: 'Staffing optimization savings', value: '$2,840/month (reduced overtime, improved coverage)' },
        { label: 'Total attributed revenue impact', value: '+$20,940/month = $251,280 annualized' },
      ],
    },
    {
      title: 'AI Agent ROI',
      metrics: [
        { label: 'Swoop Pro annual cost', value: '$5,988' },
        { label: 'Attributed revenue + savings', value: '$251,280' },
        { label: 'ROI', value: '42x' },
        { label: 'Payback period', value: '8.6 days' },
      ],
    },
  ],
}

export default function RevenuePipelinePage() {
  return (
    <div className="space-y-16">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-pipeline" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Revenue Intelligence</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Revenue & Pipeline</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8">
        <div className="max-w-container mx-auto">
          <MetricCalloutStrip metrics={revenueMetrics} />
        </div>
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 text-center">
          <div>
            <p className="font-mono text-4xl font-bold text-red-400">$187</p>
            <p className="text-white/60 text-sm mt-2">Revenue per slot with reactive management</p>
          </div>
          <div>
            <p className="font-mono text-4xl font-bold text-swoop-green">$312</p>
            <p className="text-white/60 text-sm mt-2">Revenue per slot with retention-prioritized allocation</p>
          </div>
        </div>
        <p className="text-center text-white/40 text-xs mt-6">Demo scenario comparison from Oakmont Hills CC simulation.</p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Prove the revenue impact of every decision.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div key={m.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{m.title}</h3>
                <p className="text-sm text-swoop-muted">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto grid gap-6 lg:grid-cols-3">
          <BoardReportPreviewMini />
          <RevenueAttributionStrip />
          <PipelineMemberDeepDive />
        </div>
      </section>

      {/* Attribution Example */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{attributionExample.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* What the Board Sees */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-600 mb-6">What the Board Sees (Traditional Reporting)</h3>
              <div className="space-y-4">
                {attributionExample.boardView.map((item) => (
                  <div key={item.metric} className="flex justify-between items-center pb-3 border-b border-red-200 last:border-0">
                    <span className="text-sm font-medium text-swoop-dark">{item.metric}</span>
                    <span className="text-sm font-mono font-bold text-swoop-dark">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-swoop-muted italic">Traditional club reporting shows outcomes, not interventions. The board never knows what the GM prevented.</p>
            </div>

            {/* What Swoop Shows */}
            <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6">
              <h3 className="text-xl font-bold text-swoop-green mb-6">What Swoop Shows (Attribution Model)</h3>
              <div className="space-y-4">
                {attributionExample.swoopView.map((item) => (
                  <div key={item.metric} className="flex justify-between items-center pb-3 border-b border-swoop-green/30 last:border-0">
                    <span className="text-sm font-medium text-swoop-dark">{item.metric}</span>
                    <span className="text-sm font-mono font-bold text-swoop-dark">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold text-swoop-dark">With attribution, the GM gets credit for what they saved — not just blame for what was lost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board Report Template */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Board-Ready Monthly Report Template</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Auto-generated every month. No manual assembly. Every number tied to a specific action or outcome.
          </p>

          <div className="bg-swoop-card border-2 border-swoop-border rounded-xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold">Swoop Intelligence Report</h3>
                <p className="text-sm text-swoop-muted">{boardReport.month} • Oakmont Hills CC</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-swoop-muted uppercase tracking-wider">Generated</p>
                <p className="text-sm font-mono">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>

            <div className="space-y-8">
              {boardReport.sections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-lg font-bold mb-4 pb-2 border-b-2 border-swoop-accent">{section.title}</h4>
                  <div className="space-y-3">
                    {section.metrics.map((metric) => (
                      <div key={metric.label} className="flex justify-between items-center">
                        <span className="text-sm text-swoop-muted">{metric.label}</span>
                        <span className="text-sm font-mono font-bold text-swoop-dark">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t-2 border-swoop-accent">
              <p className="text-xs text-swoop-muted">All metrics sourced from connected systems (tee sheet, POS, CRM, payroll) and validated by AI agent recommendations + GM-approved actions. Full audit trail available in Swoop dashboard.</p>
            </div>
          </div>

          <div className="mt-8 bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6 text-center">
            <p className="font-semibold text-swoop-dark mb-2">This is what "prove it" looks like.</p>
            <p className="text-sm text-swoop-muted">
              Every dollar attributed. Every intervention tracked. Every outcome measured. No more "I think we saved that member" — you know you did, and you can prove it to the board.
            </p>
          </div>
        </div>
      </section>

      <CTASection headline="See the revenue your club is leaving on the table." subtext="We'll walk through your tee sheet yield, pipeline health, and attribution model." />
    </div>
  )
}
