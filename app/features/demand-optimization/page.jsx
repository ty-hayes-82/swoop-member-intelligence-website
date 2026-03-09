import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Demand Optimization',
  description: 'How Swoop predicts tee sheet demand, optimizes waitlist routing by retention value, and forecasts cancellation clusters 48 hours ahead.',
  path: '/features/demand-optimization',
})

const demandFeatureFaqs = [
  { question: 'Does this affect member fairness?', answer: 'Yes—in a positive way. Priorities are disclosed and focus on at-risk and high-value members.' },
  { question: 'Can members see their priority?', answer: 'No. Routing logic stays internal while maintaining equitable narratives.' },
  { question: 'Can I override rules?', answer: 'Absolutely. Ops leaders can override any slot with one click.' },
  { question: 'How does seasonality factor in?', answer: 'Forecasts adjust weights based on historical seasonal demand.' },
  { question: 'What about guest play?', answer: 'Guests stay in the mix, but member retention logic takes precedence.' },
]

const demandSignals = [
  { signal: 'Historical booking patterns by day/time/season', impact: 'Baseline demand modeling' },
  { signal: 'Weather forecast (48-72 hours ahead)', impact: 'Cancellation cluster prediction' },
  { signal: 'Member engagement trends', impact: 'Who is likely to book vs. likely to cancel' },
  { signal: 'Event calendar conflicts', impact: 'Competing member priorities' },
  { signal: 'Course condition reports', impact: 'Quality perception impact on demand' },
  { signal: 'Pace of play history by tee time', impact: 'Member preference signals' },
]

const waitlistLogic = [
  { rank: '1st Priority', criteria: 'At-risk members (health score <70) + high lifetime value (>$15K/yr)', rationale: 'Retention urgency + financial impact' },
  { rank: '2nd Priority', criteria: 'High-value stable members (health score 70-84, LTV >$12K/yr)', rationale: 'Maintain engagement with key revenue drivers' },
  { rank: '3rd Priority', criteria: 'Engagement recovery targets (recently returned from hiatus)', rationale: 'Reinforce re-engagement behavior' },
  { rank: '4th Priority', criteria: 'Standard members (health score 85+, moderate LTV)', rationale: 'Already engaged, lower risk of churn' },
]

const cancellationPrediction = [
  { scenario: 'Rain forecast 60%+ within 4 hours of tee time', cancelRate: '42%', action: 'Notify waitlist 48 hours early, hold 2-3 backup slots' },
  { scenario: 'Member has canceled last 3 bookings within 24 hours', cancelRate: '68%', action: 'Flag as high-risk booking, prioritize stable backups on waitlist' },
  { scenario: 'Weekend tee time booked >14 days out (historically unstable)', cancelRate: '31%', action: 'Overbook by 1 slot with waitlist coverage' },
  { scenario: 'Member health score dropped 10+ points since booking', cancelRate: '54%', action: 'Proactive GM outreach to confirm attendance + re-engage' },
]

export default function DemandOptimizationPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Feature Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Demand Optimization: Fill the sheet with the right members
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            Traditional tee sheet software fills slots. Swoop fills slots with retention-prioritized routing, cancellation prediction, and demand forecasting that protects your member base.
          </p>
        </div>
      </section>

      {/* Demand Signals */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Six demand signals analyzed in real time</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Your tee sheet software shows who booked. Swoop predicts who will cancel, who will no-show, and which slots are at risk of going unfilled.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {demandSignals.map((item) => (
              <div key={item.signal} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.signal}</h3>
                <p className="text-sm text-swoop-muted">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retention-Prioritized Waitlist */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Retention-prioritized waitlist routing</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            FIFO waitlists fill slots. Swoop fills slots with the members who need them most — at-risk, high-value members get first priority.
          </p>
          <div className="space-y-4 max-w-3xl mx-auto">
            {waitlistLogic.map((tier) => (
              <div key={tier.rank} className="bg-swoop-card border-l-4 border-swoop-green rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg">{tier.rank}</h3>
                  <span className="text-xs font-semibold text-swoop-green bg-swoop-green/10 px-3 py-1 rounded-full">Auto-Prioritized</span>
                </div>
                <p className="text-sm text-swoop-muted mb-2"><strong>Criteria:</strong> {tier.criteria}</p>
                <p className="text-xs text-swoop-muted"><strong>Rationale:</strong> {tier.rationale}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Prediction */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Cancellation prediction engine</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Swoop predicts which bookings are likely to cancel 48-72 hours ahead based on weather, member behavior patterns, and historical no-show rates.
          </p>
          <div className="space-y-4">
            {cancellationPrediction.map((pred, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <p className="text-xs text-white/50 uppercase mb-1">Scenario</p>
                    <p className="text-sm">{pred.scenario}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase mb-1">Predicted Cancel Rate</p>
                    <p className="text-2xl font-bold text-red-400">{pred.cancelRate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase mb-1">Recommended Action</p>
                    <p className="text-sm text-swoop-green">{pred.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenario: Saturday Morning Cancellation */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real scenario: Saturday 7:40 AM cancellation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Traditional FIFO Waitlist</h3>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b border-red-200">
                  <p className="font-semibold">5:30 AM: Tom Chen cancels Saturday 7:40 AM tee time</p>
                </div>
                <div className="pb-3 border-b border-red-200">
                  <p className="font-semibold mb-1">5:31 AM: System notifies first waitlist member</p>
                  <p className="text-swoop-muted">Recipient: Tom Chen (ironic — same person who canceled)</p>
                  <p className="text-swoop-muted">Health Score: 94 (engaged, zero churn risk)</p>
                  <p className="text-swoop-muted">LTV: $8K/yr</p>
                </div>
                <div className="pb-3 border-b border-red-200">
                  <p className="font-semibold mb-1">5:45 AM: Tom accepts slot</p>
                  <p className="text-swoop-muted">Slot filled. Mission accomplished.</p>
                </div>
                <div className="bg-red-100 rounded-lg p-3">
                  <p className="text-red-700 font-semibold text-xs">❌ PROBLEM:</p>
                  <p className="text-red-700 text-xs mt-1">Anne Jordan (health score 52, $14K/yr LTV, hasn't played in 6 weeks) was 4th on waitlist. She never got the notification. She resigns 3 weeks later.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Swoop Retention-First Routing</h3>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b border-green-200">
                  <p className="font-semibold">5:30 AM: Tom Chen cancels Saturday 7:40 AM tee time</p>
                </div>
                <div className="pb-3 border-b border-green-200">
                  <p className="font-semibold mb-1">5:31 AM: Swoop analyzes waitlist by retention priority</p>
                  <p className="text-swoop-muted">1st: Anne Jordan (health 52, $14K/yr, 92% accept rate)</p>
                  <p className="text-swoop-muted">2nd: David Liu (health 68, $11K/yr, 88% accept rate)</p>
                  <p className="text-swoop-muted">3rd: Sarah Kim (health 71, $9K/yr, 85% accept rate)</p>
                  <p className="text-swoop-muted">4th: Tom Chen (health 94, $8K/yr — already engaged)</p>
                </div>
                <div className="pb-3 border-b border-green-200">
                  <p className="font-semibold mb-1">5:31 AM: Anne Jordan notified first</p>
                  <p className="text-swoop-muted">Push notification: "Premium Saturday 7:40 slot available — reserved for you"</p>
                </div>
                <div className="pb-3 border-b border-green-200">
                  <p className="font-semibold mb-1">5:38 AM: Anne accepts</p>
                  <p className="text-swoop-muted">Plays round, reconnects with club, health score recovers to 67 within 10 days</p>
                </div>
                <div className="bg-green-100 rounded-lg p-3">
                  <p className="text-green-700 font-semibold text-xs">✅ OUTCOME:</p>
                  <p className="text-green-700 text-xs mt-1">Slot filled with at-risk member. Retention intervention successful. Member retained. $14K/yr in lifetime value protected.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Tee Sheet Software */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Works with your existing tee sheet software</h2>
          <p className="text-swoop-muted max-w-2xl mx-auto mb-8">
            Swoop integrates with the tee sheet and booking platforms you already run. No rip-and-replace — we add retention-prioritized waitlist logic on top of your existing system.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/integrations" className="px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
              See All Integrations
            </Link>
            <Link href="/capabilities/tee-sheet-demand" className="px-6 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition">
              Explore Demand Intelligence
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — demand moves</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Review predicted cancellations.</li>
              <li>• Approve retention-prioritized routing.</li>
              <li>• Notify members before they call in.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board proof</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Fill-rate vs FIFO baseline.</li>
              <li>• Revenue per slot and saves recorded.</li>
              <li>• Narrative for board-ready updates.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Waitlist prioritization rules — artifact</p>
          <div className="space-y-2 text-sm text-swoop-muted">
            {[
              'Rule 1: At-risk members get priority for peak times',
              'Rule 2: High-value members see availability first',
              'Rule 3: New members get onboarding slots',
            ].map((rule) => (
              <div key={rule} className="rounded-xl border border-swoop-border bg-swoop-bg px-4 py-3">{rule}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Demand optimization FAQ</h2>
          <div className="mt-6 space-y-4">
            {demandFeatureFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See retention-first waitlists in action.</h2>
          <p className="text-swoop-muted mb-6">Book a demo and watch Swoop route slots by member impact.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
