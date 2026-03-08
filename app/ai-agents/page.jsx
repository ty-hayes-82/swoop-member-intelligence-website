import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'AI Agents',
  description: 'Six AI agents monitor your club 24/7, surface risks, and recommend actions. You approve — they execute.',
}

const agents = [
  {
    name: 'Demand Sentinel',
    color: 'border-lens-operations',
    role: 'Monitors tee sheet demand and flags anomalies',
    actions: [
      'Flags demand swings by segment (weekday seniors dropping, weekend juniors spiking)',
      'Recommends inventory moves before losses compound',
      'Alerts on cancellation clusters that signal weather or event conflicts',
    ],
    example: '"Saturday morning demand is 23% below 4-week avg. Recommend opening 2 slots to waitlist priority members."',
  },
  {
    name: 'Waitlist Optimizer',
    color: 'border-lens-operations',
    role: 'Reorders waitlists by retention value and match-fit',
    actions: [
      'Sorts waitlist by retention risk × lifetime value × schedule fit',
      'Auto-notifies best-fit members when slots open',
      'Tracks acceptance rates by member segment to improve future routing',
    ],
    example: '"Slot opened: Sat 7:40am. Routing to Anne Jordan (at-risk, $14K/yr, 92% acceptance rate) over 3 FIFO-earlier members."',
  },
  {
    name: 'Member Save Agent',
    color: 'border-lens-members',
    role: 'Detects service-risk members and triggers save sequences',
    actions: [
      'Monitors health score declines across all connected systems',
      'Triggers personalized save sequences (email → call → GM outreach)',
      'Tracks intervention outcomes for attribution reporting',
    ],
    example: '"James Whitfield health score dropped 36 pts in 6 weeks. Unresolved complaint from Jan 16. Recommend GM personal call within 24h. $22K/yr at stake."',
  },
  {
    name: 'F&B Flow Agent',
    color: 'border-lens-fb',
    role: 'Predicts F&B rushes from tee sheet and weather signals',
    actions: [
      'Forecasts outlet demand 24-48h ahead using tee time volume + weather + events',
      'Recommends prep adjustments and staffing shifts',
      'Flags post-round conversion opportunities for targeted nudges',
    ],
    example: '"Tomorrow: 68 rounds booked, sunny 72°F, no events. Expect Grill Room peak 12:30-2pm. Current staffing: 2 servers. Recommend: 3 servers."',
  },
  {
    name: 'Labor Planner',
    color: 'border-lens-staffing',
    role: 'Forecasts coverage gaps and recommends shifts',
    actions: [
      'Maps predicted demand to staffing requirements per outlet and time slot',
      'Flags overtime risk with enough lead time to redistribute',
      'Tracks labor cost per revenue dollar across all touchpoints',
    ],
    example: '"Friday Jan 17: Grill Room shows 2-server coverage for predicted 45-cover peak. Gap = 1 server. Recommend shift extension for Maria (no OT risk)."',
  },
  {
    name: 'Revenue Analyst',
    color: 'border-lens-pipeline',
    role: 'Connects actions to recovered revenue and retained value',
    actions: [
      'Attribution-ready insights on every intervention',
      'Tracks per-slot revenue optimization over time',
      'Generates board-ready ROI summaries monthly',
    ],
    example: '"Q4 Member Save playbook: 4 runs, 3 of 4 at-risk members retained. $54K in annual dues protected. Cost: 6 hours of GM time."',
  },
]

export default function AIAgentsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">AI Agents</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your GM platform now has a staff.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            Six AI agents monitor your club 24/7, surface risks, and recommend actions — so you approve decisions instead of hunting for data.
          </p>
        </div>
      </section>

      <section className="py-4 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Human-in-the-loop. Always.</h2>
          <p className="text-white/70 max-w-xl mx-auto">Swoop agents recommend. You decide. Every action shows the expected impact, the confidence level, and the reasoning. Approve, dismiss, or modify — the system learns from every decision.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto space-y-8">
          {agents.map((a) => (
            <div key={a.name} className={`bg-swoop-card border border-swoop-border rounded-xl p-8 border-l-4 ${a.color}`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{a.name}</h3>
                  <p className="text-swoop-muted">{a.role}</p>
                </div>
                <span className="text-xs font-mono text-lens-agents bg-lens-agents/10 px-3 py-1 rounded-full self-start">AI AGENT</span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-2">What it does:</p>
                  <ul className="space-y-1">
                    {a.actions.map((act) => (
                      <li key={act} className="flex items-start gap-2 text-sm text-swoop-muted">
                        <span className="text-swoop-green mt-0.5 flex-shrink-0">→</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-swoop-bg rounded-lg p-4">
                  <p className="text-xs font-semibold text-swoop-muted mb-2 uppercase tracking-wider">Example recommendation:</p>
                  <p className="text-sm italic text-swoop-text">{a.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection headline="See your agents in action." subtext="We'll show you Agent Command — the inbox where AI recommendations become GM decisions." />
    </>
  )
}
