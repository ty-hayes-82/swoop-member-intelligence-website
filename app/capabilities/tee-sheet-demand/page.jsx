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

const waitlistScenario = {
  setup: 'Saturday, 7:40 AM tee time opens due to cancellation. 5 members on the waitlist.',
  members: [
    { 
      name: 'Tom Chen', 
      fifo: 1, 
      healthScore: 94, 
      ltv: '$8,200', 
      acceptRate: '76%', 
      archetype: 'Healthy Active',
      risk: 'None',
    },
    { 
      name: 'Anne Jordan', 
      fifo: 2, 
      healthScore: 52, 
      ltv: '$14,200', 
      acceptRate: '92%', 
      archetype: 'Weekend Warrior (declining)',
      risk: 'High — rounds dropped Oct 4 → Nov 2 → Dec 1. Missed last 3 weekend events.',
    },
    { 
      name: 'David Miller', 
      fifo: 3, 
      healthScore: 88, 
      ltv: '$11,400', 
      acceptRate: '68%', 
      archetype: 'Die-Hard Golfer',
      risk: 'Low',
    },
    { 
      name: 'Sarah Collins', 
      fifo: 4, 
      healthScore: 76, 
      ltv: '$9,800', 
      acceptRate: '81%', 
      archetype: 'Social Butterfly',
      risk: 'Low',
    },
    { 
      name: 'James Park', 
      fifo: 5, 
      healthScore: 62, 
      ltv: '$7,600', 
      acceptRate: '72%', 
      archetype: 'Declining',
      risk: 'Medium',
    },
  ],
  fifoChoice: {
    member: 'Tom Chen',
    reason: 'First on the waitlist',
    outcome: 'Tom accepts (76% likely). He books 12 rounds/month already. Adding this slot doesn\'t change his retention outlook. Missed opportunity to re-engage Anne.',
  },
  swoopChoice: {
    member: 'Anne Jordan',
    reason: 'Highest retention risk (health score 52) × highest lifetime value ($14,200) × highest acceptance rate (92%)',
    outcome: 'Anne accepts. First weekend round in 6 weeks. GM follows up with personal call. Anne mentions she "almost resigned last month" but this outreach showed the club still values her. Retention save: $14,200/yr.',
    impact: 'Tom Chen books anyway (rebooks for Sunday). Anne stays a member. Net gain: retention save + member re-engagement.',
  },
}

const predictionExample = {
  title: 'How Swoop predicts cancellations 24-72 hours ahead',
  signals: [
    { source: 'Weather forecast', data: '40% rain Saturday morning', impact: '+22% cancellation likelihood' },
    { source: 'Member behavior', data: 'John Smith has canceled 4 of last 6 rainy-day bookings', impact: '+35% cancellation likelihood' },
    { source: 'Booking recency', data: 'Booking made 3 days ago (vs. 2 weeks typical)', impact: '+8% cancellation likelihood' },
    { source: 'Communication signals', data: 'Email opened but didn\'t click reminder', impact: '+12% cancellation likelihood' },
  ],
  prediction: '77% cancellation likelihood → Swoop flags slot as "high risk" and pre-alerts waitlist 48 hours ahead instead of waiting for actual cancellation.',
  result: 'Cancellation confirmed Friday 6 PM. Slot filled by Saturday 8 AM (vs. traditional approach: cancellation noticed Saturday morning, slot goes unfilled).',
}

export default function TeeSheetDemandPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-operations" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Demand Intelligence</p>
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

      {/* Waitlist Scenario */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">FIFO vs. Retention-Prioritized: The same slot, two different outcomes</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-3xl mx-auto">{waitlistScenario.setup}</p>
          
          {/* Waitlist Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border border-swoop-border rounded-xl overflow-hidden">
              <thead className="bg-swoop-dark text-white">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold">FIFO #</th>
                  <th className="text-left p-4 text-sm font-semibold">Member</th>
                  <th className="text-left p-4 text-sm font-semibold">Health Score</th>
                  <th className="text-left p-4 text-sm font-semibold">LTV</th>
                  <th className="text-left p-4 text-sm font-semibold">Accept Rate</th>
                  <th className="text-left p-4 text-sm font-semibold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {waitlistScenario.members.map((m, idx) => (
                  <tr key={m.name} className={`border-t border-swoop-border ${idx % 2 === 0 ? 'bg-white' : 'bg-swoop-bg'}`}>
                    <td className="p-4 font-mono font-bold">{m.fifo}</td>
                    <td className="p-4">
                      <p className="font-semibold">{m.name}</p>
                      <p className="text-xs text-swoop-muted">{m.archetype}</p>
                    </td>
                    <td className="p-4">
                      <span className={`font-mono font-bold ${m.healthScore < 60 ? 'text-red-600' : m.healthScore < 70 ? 'text-orange-600' : 'text-green-600'}`}>
                        {m.healthScore}
                      </span>
                    </td>
                    <td className="p-4 font-mono">{m.ltv}</td>
                    <td className="p-4 font-mono">{m.acceptRate}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${m.risk.includes('High') ? 'bg-red-100 text-red-700' : m.risk.includes('Medium') ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                        {m.risk.split(' — ')[0]}
                      </span>
                      {m.risk.includes('—') && (
                        <p className="text-xs text-swoop-muted mt-1">{m.risk.split(' — ')[1]}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Decision Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">FIFO Decision (Traditional Waitlist)</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-swoop-dark">Member notified:</p>
                  <p className="text-swoop-muted">{waitlistScenario.fifoChoice.member}</p>
                </div>
                <div>
                  <p className="font-semibold text-swoop-dark">Reason:</p>
                  <p className="text-swoop-muted">{waitlistScenario.fifoChoice.reason}</p>
                </div>
                <div>
                  <p className="font-semibold text-swoop-dark">Outcome:</p>
                  <p className="text-swoop-muted">{waitlistScenario.fifoChoice.outcome}</p>
                </div>
              </div>
            </div>

            <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6">
              <h3 className="text-xl font-bold text-swoop-green mb-4">Swoop Decision (Retention-Prioritized)</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-swoop-dark">Member notified:</p>
                  <p className="text-swoop-muted">{waitlistScenario.swoopChoice.member}</p>
                </div>
                <div>
                  <p className="font-semibold text-swoop-dark">Reason:</p>
                  <p className="text-swoop-muted">{waitlistScenario.swoopChoice.reason}</p>
                </div>
                <div>
                  <p className="font-semibold text-swoop-dark">Outcome:</p>
                  <p className="text-swoop-muted">{waitlistScenario.swoopChoice.outcome}</p>
                </div>
                <div className="pt-3 border-t border-swoop-green/30">
                  <p className="font-semibold text-swoop-green">Net Impact:</p>
                  <p className="text-swoop-dark">{waitlistScenario.swoopChoice.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Prediction */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{predictionExample.title}</h2>
          <div className="space-y-4 mb-8">
            {predictionExample.signals.map((signal, idx) => (
              <div key={signal.source} className="bg-swoop-card border border-swoop-border rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lens-operations/20 rounded-full flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{signal.source}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-mono">{signal.impact}</span>
                  </div>
                  <p className="text-sm text-swoop-muted">{signal.data}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-swoop-dark text-white rounded-xl p-6 mb-6">
            <p className="font-semibold mb-2">Swoop's Prediction:</p>
            <p className="text-white/80 leading-relaxed">{predictionExample.prediction}</p>
          </div>

          <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6">
            <p className="font-semibold text-swoop-green mb-2">Result:</p>
            <p className="text-swoop-dark">{predictionExample.result}</p>
          </div>
        </div>
      </section>

      {/* Revenue Impact */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What retention-prioritized routing is worth annually</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-3xl font-bold text-swoop-green mb-2">52</p>
              <p className="text-sm text-white/70">Saturday slots per year</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-3xl font-bold text-swoop-green mb-2">15%</p>
              <p className="text-sm text-white/70">Improvement in retention saves</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-3xl font-bold text-swoop-green mb-2">$14K</p>
              <p className="text-sm text-white/70">Avg LTV of at-risk members</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-3xl font-bold text-swoop-green mb-2">$109K</p>
              <p className="text-sm text-white/70">Annual dues protected</p>
            </div>
          </div>
          <div className="bg-swoop-green/20 border-2 border-swoop-green rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-bold text-swoop-green mb-2">Annual impact calculation</p>
            <p className="text-white/80 text-sm">52 Saturday slots × 15% retention improvement × $14K avg LTV = $109,200 annual dues protected. All from smarter waitlist routing. No additional marketing spend. No new member acquisition required.</p>
          </div>
        </div>
      </section>

      <CTASection headline="See retention-prioritized routing in action." subtext="We'll walk you through a live waitlist scenario with real member trade-offs." />
    </>
  )
}
