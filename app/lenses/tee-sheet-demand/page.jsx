import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Tee Sheet & Demand',
  description: 'Predict cancellations and backfill each open slot with the right member. Optimize pace and demand signals without overbooking guesswork.',
}

const features = [
  { title: 'Cancellation Prediction', desc: 'AI forecasts which bookings are likely to cancel based on weather, member behavior patterns, and historical no-show rates. You know before the member does.' },
  { title: 'Retention-Prioritized Waitlist', desc: 'When a slot opens, Swoop doesn\'t notify all 10 people equally. It routes the slot to the member whose retention is most at risk — or whose lifetime value justifies priority access.' },
  { title: 'Demand Heatmap', desc: 'Visualize demand by day, time, and member segment. See where you\'re undersold, oversold, or leaving revenue on the table.' },
  { title: 'Fill Rate Analytics', desc: 'Track fill rates by slot, day, and season. Compare reactive (FIFO) vs. retention-prioritized allocation to prove the revenue difference.' },
]

export default function TeeSheetDemandPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-operations" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Lens 2</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tee Sheet & Demand</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Predict cancellations and backfill each open slot with the right member. Optimize pace and demand signals without overbooking guesswork.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-mono text-4xl font-bold text-swoop-green">91%</p>
            <p className="text-white/60 text-sm mt-2">Fill rate with retention-prioritized routing</p>
          </div>
          <div>
            <p className="font-mono text-4xl font-bold text-swoop-green">$312</p>
            <p className="text-white/60 text-sm mt-2">Revenue per tee slot (vs $187 reactive)</p>
          </div>
          <div>
            <p className="font-mono text-4xl font-bold text-swoop-green">67%</p>
            <p className="text-white/60 text-sm mt-2">Cancellations predicted 24+ hours ahead</p>
          </div>
        </div>
        <p className="text-center text-white/40 text-xs mt-6">Demo scenario metrics from Oakmont Hills CC simulation.</p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Standalone waitlist tools fill tee times. Swoop fills them with the right members.</h2>
          <p className="text-swoop-muted mb-12">Traditional waitlists are FIFO — first come, first served. Swoop sorts by retention risk, member value, and match-fit. The slot goes to the member who needs it most.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-swoop-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="See retention-prioritized routing in action." subtext="We'll walk you through a live waitlist scenario with real member trade-offs." />
    </>
  )
}
