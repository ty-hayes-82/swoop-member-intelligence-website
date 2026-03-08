import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'AI Agents',
  description: 'Six AI agents monitoring your club 24/7. They detect issues, recommend actions, estimate impact, and execute approved plans — your always-on operational staff.',
}

const agents = [
  {
    name: 'Member Pulse',
    icon: '◉',
    color: 'bg-lens-members',
    role: 'Detects at-risk members and triggers save sequences',
    capabilities: [
      'Daily health score monitoring for all members',
      'Alerts on 10+ point drops within 14 days',
      'Recommends intervention playbooks based on churn trigger',
      'Tracks intervention success rates and adjusts recommendations',
    ],
    exampleAlert: 'James Whitfield health score dropped from 78 → 64 in 7 days. Trigger: unresolved pace of play complaint + post-round dining ceased. Recommend: GM personal call + expedited resolution. Historical success rate: 74%.',
    avgImpact: '6.4 week early warning before resignation',
  },
  {
    name: 'Demand Optimizer',
    icon: '🔍',
    color: 'bg-lens-operations',
    role: 'Balances waitlist demand, cancellation prediction, and tee sheet fill optimization',
    capabilities: [
      'Ranks waitlist by: churn risk × lifetime value × acceptance probability',
      'Predicts cancellation likelihood 24-72 hours ahead',
      'Detects booking velocity changes vs. historical baseline',
      'Auto-fills canceled slots with retention-prioritized routing',
    ],
    exampleAlert: '7:40 AM Saturday slot canceled. Routing to Anne Jordan (health 52, LTV $14K, 92% accept rate) instead of FIFO member Tom Chen (health 94, LTV $8K).',
    avgImpact: '+$138K annual dues protected via retention-first routing',
  },

  {
    name: 'Service Recovery',
    icon: '◆',
    color: 'bg-lens-fb',
    role: 'Surfaces unresolved complaints and drafts recovery actions before resignation windows close',
    capabilities: [
      'Monitors complaint tickets across all systems (POS, CRM, email)',
      'Flags unresolved issues by member value and resignation risk',
      'Drafts apology messages and recovery offers for GM approval',
      'Tracks service recovery success rates and refines recommendations',
    ],
    exampleAlert: 'James Whitfield complaint (pace of play) unresolved for 6 days. Member health score declined 14 points. Resignation risk: high. Recommend: Personal GM call + expedited resolution + complimentary round. Success rate for this playbook: 81%.',
    avgImpact: '81% save rate on flagged service-risk members',
  },
  {
    name: 'Labor Optimizer',
    icon: '⊞',
    color: 'bg-lens-staffing',
    role: 'Forecasts staffing gaps and recommends coverage shifts to protect service quality and margin',
    capabilities: [
      'Predicts demand by outlet/shift based on tee sheet + events + weather',
      'Compares projected demand vs. scheduled labor coverage',
      'Flags coverage gaps 24-48 hours ahead',
      'Recommends shift additions with projected ROI',
    ],
    exampleAlert: 'Sunday brunch: 42 reservations + 31 predicted walk-ins (post-round diners) = 73 expected guests. Current FOH staffing: 4 servers. Coverage gap: need +2 servers. Projected revenue impact: +$2,800 vs. labor cost $240.',
    avgImpact: '$0.68 labor cost per revenue dollar (vs. $0.82 industry avg)',
  },
  {
    name: 'Revenue Analyst',
    icon: '◎',
    color: 'bg-lens-pipeline',
    role: 'Flags preventable revenue leakage and recommends high-confidence margin actions',
    capabilities: [
      'Tracks revenue per tee time slot by member tier',
      'Attributes revenue to specific GM interventions',
      'Calculates retention-driven revenue vs. acquisition-driven',
      'Generates board-ready ROI reports',
    ],
    exampleAlert: 'Q1 retention initiatives (47 interventions approved): $338K in annual dues protected, $89K in incremental F&B spend. Total cost: $12K (GM time + offers). Net ROI: 35.6x.',
    avgImpact: 'Board-ready attribution for every operational decision',
  },
  {
    name: 'Engagement Autopilot',
    icon: '⟳',
    color: 'bg-lens-members',
    role: 'Monitors declining participation and proposes targeted outreach for member reactivation',
    capabilities: [
      'Tracks engagement decay across all touchpoints (golf, dining, events)',
      'Identifies members shifting from active to passive participation',
      'Recommends personalized re-engagement campaigns',
      'Measures campaign effectiveness and adjusts messaging',
    ],
    exampleAlert: 'Sarah Mitchell: 6 weeks since last visit, declined 3 event invitations, email engagement dropped 80%. Recommend: Personal invitation to member-guest tournament + complimentary F&B voucher. Acceptance probability: 67%.',
    avgImpact: '42% reactivation rate on declining members',
  },
]

export default function AIAgentsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Feature Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI Agents: Your always-on operational staff
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            Six AI agents monitor your club 24/7. They surface issues, recommend actions with impact estimates, and execute approved plans. You stay in control — they do the hunting.
          </p>
        </div>
      </section>

      {/* The Six Agents */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet your AI staff</h2>
          <div className="space-y-12">
            {agents.map((agent) => (
              <div key={agent.name} className="bg-swoop-card border-2 border-swoop-border rounded-xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 ${agent.color} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}>
                    {agent.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                    <p className="text-swoop-muted">{agent.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-swoop-muted uppercase mb-1">Avg Impact</p>
                    <p className="text-sm font-semibold text-swoop-green">{agent.avgImpact}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xs text-swoop-muted uppercase mb-3">Core Capabilities</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {agent.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-swoop-green mt-0.5">✓</span>
                        <span className="text-swoop-muted">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-swoop-dark text-white rounded-lg p-4">
                  <p className="text-xs text-white/50 uppercase mb-2">Example Alert</p>
                  <p className="text-sm leading-relaxed">{agent.exampleAlert}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Agent Command Works */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How Agent Command works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">1</div>
              <h3 className="font-semibold mb-2">Agents Monitor 24/7</h3>
              <p className="text-sm text-white/70">Cross-system behavioral signals analyzed continuously for anomalies and opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">2</div>
              <h3 className="font-semibold mb-2">Agents Recommend Actions</h3>
              <p className="text-sm text-white/70">When a signal triggers, agents surface the issue + specific action + predicted impact.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">3</div>
              <h3 className="font-semibold mb-2">GM Approves or Dismisses</h3>
              <p className="text-sm text-white/70">You see every recommendation in Agent Command. One-click approve, dismiss, or modify.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">4</div>
              <h3 className="font-semibold mb-2">System Executes & Tracks</h3>
              <p className="text-sm text-white/70">Approved actions execute automatically. Outcomes tracked. Attribution reports generated.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Morning: Agent Command */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">A real Monday morning in Agent Command</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            8:00 AM Monday. GM logs in. Six agents have been working overnight. Here's what they found:
          </p>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-swoop-card border-l-4 border-lens-members rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-swoop-muted mb-1">MEMBER SAVE AGENT</p>
                  <p className="font-semibold">3 at-risk members detected (health scores dropped 10+ points)</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-red-100 text-red-700">High Priority</span>
              </div>
              <p className="text-sm text-swoop-muted mb-3">Recommend: Personal GM calls today. Predicted success rate: 72%. Est. annual value at risk: $41K.</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg">Approve All</button>
                <button className="px-4 py-2 border border-swoop-border text-sm font-semibold rounded-lg">Review Individually</button>
              </div>
            </div>

            <div className="bg-swoop-card border-l-4 border-lens-fb rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-swoop-muted mb-1">F&B FLOW AGENT</p>
                  <p className="font-semibold">Saturday lunch rush predicted (26 post-round diners expected)</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">Medium Priority</span>
              </div>
              <p className="text-sm text-swoop-muted mb-3">Recommend: Add 1 line cook for Saturday 11 AM-2 PM shift. Cost: $80. Projected revenue uplift: $940.</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg">Approve</button>
                <button className="px-4 py-2 border border-swoop-border text-sm font-semibold rounded-lg">Dismiss</button>
              </div>
            </div>

            <div className="bg-swoop-card border-l-4 border-lens-operations rounded-xl p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-xs text-swoop-muted mb-1">DEMAND SENTINEL</p>
                  <p className="font-semibold">Tuesday morning slots 40% under capacity (8 open slots)</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-700">Low Priority</span>
              </div>
              <p className="text-sm text-swoop-muted mb-3">Recommend: Targeted push notification to 34 members who historically book Tuesdays. Estimated fill rate: 62% (5 additional bookings).</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg">Approve</button>
                <button className="px-4 py-2 border border-swoop-border text-sm font-semibold rounded-lg">Modify</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Control */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">You stay in control. Always.</h2>
          <p className="text-swoop-muted max-w-2xl mx-auto mb-8">
            Agents recommend. You decide. Every action requires GM approval. Dismiss any recommendation with one click. Modify playbooks to match your club's culture and preferences.
          </p>
          <Link href="/ai-agents" className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            Explore All Six Agents
          </Link>
        </div>
      </section>

      <CTASection 
        headline="See AI agents in action." 
        subtext="We'll walk you through a live Agent Command session with real recommendations and approval workflows." 
      />
    </>
  )
}
