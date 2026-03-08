import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Revenue & Pipeline',
  description: 'Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.',
}

const metrics = [
  { title: 'Per-Slot Revenue Optimization', desc: 'Not all tee times are equal. Saturday 8am generates $340/slot. Tuesday 2pm generates $95. Swoop helps you allocate inventory to maximize yield without alienating members.' },
  { title: 'Retention-Driven Yield', desc: 'Revenue isn\'t just about filling slots — it\'s about filling them with members who renew. A $312/slot with retained members beats $340/slot if the high-payer resigns next quarter.' },
  { title: 'Guest-to-Member Pipeline', desc: 'Track which guest rounds convert to membership inquiries, applications, and joins. $36K in membership revenue is hiding in your guest data — Swoop surfaces it.' },
  { title: 'Revenue Attribution', desc: 'Which playbook actions actually recovered revenue? Swoop tracks from intervention to outcome: "Member Save sequence → James Whitfield retained → $22K/yr protected."' },
  { title: 'Dues Yield Analysis', desc: 'Revenue per member varies 4x across your roster. Know which segments are over-indexed, under-served, or declining — and what it means for next year\'s budget.' },
  { title: 'Board-Ready Reporting', desc: 'Auto-generated monthly summaries: revenue trends, retention impact, pipeline health, and ROI on every AI-recommended action. No more manual board report assembly.' },
]

export default function RevenuePipelinePage() {
  return (
    <>
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

      <CTASection headline="See the revenue your club is leaving on the table." subtext="We'll walk through your tee sheet yield, pipeline health, and attribution model." />
    </>
  )
}
