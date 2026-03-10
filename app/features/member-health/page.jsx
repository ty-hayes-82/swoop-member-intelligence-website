import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Member Health Scoring',
  description: 'How Swoop calculates member health scores, identifies churn risk 6-8 weeks early, and recommends retention interventions with predicted success rates.',
  path: '/features/member-health',
})

const memberFeatureFaqs = [
  { question: 'What causes false positives?', answer: 'Weights adjust automatically, but you can exclude certain signals or members from alerts.' },
  { question: 'Can I adjust score thresholds?', answer: 'Yes. Set per-segment thresholds for At Risk and Critical states.' },
  { question: 'How fresh is the data?', answer: 'Tee sheet/POS updates hourly, CRM/email daily, with overrides for priority events.' },
  { question: 'Is member data shared across clubs?', answer: 'No. Data stays scoped to your club or portfolio only.' },
  { question: 'How do I act on a low score?', answer: 'Each low score ships with a recommended playbook, owner, and expected outcome math.' },
]

const healthSignals = [
  { category: 'Engagement Decay', signals: ['Tee time frequency declining', 'Days since last visit trending up', 'Booking window shortening', 'Cancellation rate increasing'], weight: 'High' },
  { category: 'F&B Behavior', signals: ['Post-round dining drop-off', 'Average spend per visit declining', 'Outlet preference shift (from Grill Room to Grab & Go)', 'Guest bring-along rate down'], weight: 'Medium' },
  { category: 'Communication Signals', signals: ['Email open rate declining', 'Event RSVP rate down', 'App notifications ignored', 'Unsubscribe from club communications'], weight: 'Medium' },
  { category: 'Service Complaints', signals: ['Pace of play complaints', 'Course condition feedback (negative)', 'Staff interaction issues', 'Unresolved service tickets'], weight: 'High' },
  { category: 'Social Disconnect', signals: ['Playing alone more often', 'Regular playing partners no longer booking together', 'Stopped attending club events', 'Guest invite rate near zero'], weight: 'Medium' },
  { category: 'Financial Stress', signals: ['Late dues payments', 'Reduced ancillary spending', 'Billing disputes', 'Membership tier downgrade inquiries'], weight: 'High' },
]

const scoreBreakdown = [
  { range: '85-100', label: 'Thriving', color: 'bg-green-500', desc: 'Engaged, high-value, loyal. Monitor passively.' },
  { range: '70-84', label: 'Stable', color: 'bg-blue-500', desc: 'Healthy engagement. No immediate action needed.' },
  { range: '50-69', label: 'At Risk', color: 'bg-yellow-500', desc: 'Declining signals detected. Intervention recommended within 2-4 weeks.' },
  { range: '0-49', label: 'Critical', color: 'bg-red-500', desc: 'High churn probability. Immediate GM outreach required.' },
]

const interventions = [
  { trigger: 'Score drops 15+ points in 30 days', action: 'Personal GM check-in call', successRate: '68%', avgRecovery: '+12 points' },
  { trigger: 'Post-round dining ceased (4+ consecutive rounds)', action: 'Grill Room manager outreach + complimentary appetizer offer', successRate: '54%', avgRecovery: '+8 points' },
  { trigger: 'Tee time bookings down 40%+ vs. prior quarter', action: 'Preferred tee time block reservation + playing partner matching', successRate: '72%', avgRecovery: '+14 points' },
  { trigger: 'Unresolved service complaint 7+ days old', action: 'Expedited resolution + personalized apology from DOG', successRate: '81%', avgRecovery: '+19 points' },
]

export default function MemberHealthPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Feature Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Member Health Scoring: How it works
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            Swoop's health scoring engine analyzes 40+ behavioral signals across your tee sheet, POS, CRM, and communication platforms to calculate a 0-100 health score for every member — updated daily.
          </p>
        </div>
      </section>

      {/* The Signals We Track */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Six categories of behavioral signals</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Traditional CRMs track demographics and contact info. Swoop tracks behavior — what members actually do (or stop doing).
          </p>
          <div className="space-y-6">
            {healthSignals.map((cat) => (
              <div key={cat.category} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{cat.category}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${cat.weight === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                    {cat.weight} Weight
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {cat.signals.map((sig) => (
                    <div key={sig} className="flex items-start gap-2 text-sm text-swoop-muted">
                      <span className="text-swoop-green mt-0.5">→</span>
                      <span>{sig}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Score Breakdown */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What the score means</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {scoreBreakdown.map((s) => (
              <div key={s.range} className="bg-swoop-card border-2 border-swoop-border rounded-xl p-6 text-center">
                <div className={`w-16 h-16 ${s.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold`}>
                  {s.range.split('-')[0]}
                </div>
                <h3 className="font-semibold text-lg mb-2">{s.label}</h3>
                <p className="text-sm text-swoop-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Recommended Interventions */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">From signal to action: AI-recommended interventions</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Swoop doesn't just show you who's at risk — it tells you what to do about it, with historical success rates from similar member profiles.
          </p>
          <div className="space-y-4">
            {interventions.map((int, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <p className="text-xs text-white/50 uppercase mb-1">Trigger</p>
                    <p className="text-sm">{int.trigger}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase mb-1">Recommended Action</p>
                    <p className="text-sm font-medium text-swoop-green">{int.action}</p>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <p className="text-xs text-white/50 uppercase mb-1">Success Rate</p>
                      <p className="text-lg font-bold text-swoop-green">{int.successRate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase mb-1">Avg Recovery</p>
                      <p className="text-lg font-bold">{int.avgRecovery}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Scenario */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real scenario: James Whitfield</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-swoop-card border-l-4 border-red-500 rounded-xl p-6">
              <p className="text-sm text-swoop-muted mb-1">January 10, 2025</p>
              <p className="font-semibold mb-2">Health Score: 78 → 64 (14-point drop in 7 days)</p>
              <p className="text-sm text-swoop-muted">Signals: Pace of play complaint filed, post-round dining stopped (3 consecutive rounds), tee time bookings down 30% vs. prior month.</p>
            </div>
            <div className="bg-swoop-card border-l-4 border-yellow-500 rounded-xl p-6">
              <p className="text-sm text-swoop-muted mb-1">January 16, 2025 (6 days later)</p>
              <p className="font-semibold mb-2">Swoop Alert: "James Whitfield at critical churn risk"</p>
              <p className="text-sm text-swoop-muted mb-3">AI Recommendation: Personal GM call + pace of play resolution follow-up. Predicted success rate: 74%.</p>
              <p className="text-xs text-red-600 font-semibold">⚠️ In demo scenario: No action taken. GM missed the alert.</p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-xl p-6">
              <p className="text-sm text-swoop-muted mb-1">January 22, 2025 (6 days later)</p>
              <p className="font-semibold text-red-700 mb-2">James Whitfield resigns</p>
              <p className="text-sm text-swoop-muted">12-year member. $22K/year in dues + ancillary spend. Gone forever.</p>
              <p className="text-xs text-red-700 font-semibold mt-3">The GM had 6 days to intervene. The system never told them.</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 rounded-xl p-6">
              <p className="text-sm text-swoop-muted mb-1">With Swoop</p>
              <p className="font-semibold text-green-700 mb-2">Alert surfaces on January 16. GM calls James same day.</p>
              <p className="text-sm text-swoop-muted">Pace of play issue resolved. Playing partner match arranged. Complimentary Grill Room visit. Health score recovers to 81 within 14 days. Member retained.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Differs */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Swoop differs from traditional CRMs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-red-600">Traditional Club CRMs</h3>
              <ul className="space-y-3 text-sm text-swoop-muted">
                <li>• Store demographics and contact info</li>
                <li>• Track membership tier and dues status</li>
                <li>• Manual notes from GM interactions</li>
                <li>• No cross-system behavioral correlation</li>
                <li>• No predictive churn scoring</li>
                <li>• Reactive: You find out after they resign</li>
              </ul>
            </div>
            <div className="bg-swoop-card border-2 border-swoop-green rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-swoop-green">Swoop Member Intelligence</h3>
              <ul className="space-y-3 text-sm text-swoop-muted">
                <li>• Track 40+ behavioral signals across all systems</li>
                <li>• Daily health score updates (0-100 scale)</li>
                <li>• AI-detected engagement decay patterns</li>
                <li>• Cross-system correlation (tee sheet + POS + CRM)</li>
                <li>• Predictive churn alerts 6-8 weeks early</li>
                <li>• Proactive: You intervene before they resign</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — health review</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Scan at-risk roster and assign owners.</li>
              <li>• Approve AI interventions per member.</li>
              <li>• Log outreach outcomes in one click.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — board update</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Show saves and annual dues protected.</li>
              <li>• Highlight members still at risk.</li>
              <li>• Share next-week plan with leadership.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Member health scorecard — artifact</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-6 text-sm text-swoop-muted">
            <p>Score: <span className="font-semibold text-swoop-dark">73 / 100</span></p>
            <p>Trend: <span className="text-[#AF4C0B]">Declining</span></p>
            <p className="mt-4 font-semibold text-swoop-dark">Key signals</p>
            <ul className="mt-2 space-y-1">
              <li>• Rounds down 30%</li>
              <li>• Email opens flat</li>
              <li>• Dining spend stable</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Member health FAQ</h2>
          <div className="mt-6 space-y-4">
            {memberFeatureFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">See member health scoring in action.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to review your signals, thresholds, and playbooks.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
