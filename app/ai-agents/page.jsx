import CTASection from '@/components/CTASection'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import AgentRecommendationCard from '@/components/AgentRecommendationCard'

export const metadata = {
  title: 'AI Agents',
  description: 'Six AI agents monitor your club 24/7, surface risks, and recommend actions. You approve — they execute.',
}

const agents = [
  {
    name: 'Member Pulse',
    color: 'border-lens-members',
    role: 'Detects health score decay and prescribes save sequences',
    actions: [
      'Monitors 40+ behavioral signals across tee sheet, POS, CRM, and events',
      'Flags 10+ point drops with root-cause insights (complaints, pace, spend)',
      'Recommends GM outreach sequences with expected save probability',
    ],
    example: '"James Whitfield health score dropped 36 pts in 6 weeks. Complaint unresolved. Call within 24h. $22K/yr at stake."',
  },
  {
    name: 'Demand Optimizer',
    color: 'border-lens-operations',
    role: 'Predicts cancellations and fills every slot with the right member',
    actions: [
      'Forecasts cancellation likelihood 24-72 hours in advance',
      'Ranks waitlists by retention risk × lifetime value × acceptance probability',
      'Routes open slots to members most at risk of resigning',
    ],
    example: '"Sat 7:40am cancellation 77% likely. Pre-alert Anne Jordan (health 52, $14K LTV, 92% acceptance) before FIFO list."',
  },
  {
    name: 'Service Recovery',
    color: 'border-lens-fb',
    role: 'Surfaces unresolved complaints and drafts recovery plans',
    actions: [
      'Monitors ticket status across dining, golf, spa, and events',
      'Escalates any complaint open >72h with value/risk scoring',
      'Drafts apology messages + make-good offers for GM approval',
    ],
    example: '"Grill Room complaint unresolved 6 days. Member value $18K. Draft apology + comp dinner. Success rate: 81%."',
  },
  {
    name: 'Labor Optimizer',
    color: 'border-lens-staffing',
    role: 'Aligns staffing with forecasted demand, weather, and events',
    actions: [
      'Compares predicted covers vs. scheduled labor for every outlet',
      'Flags coverage gaps/overtime risk 24-48 hours ahead',
      'Recommends shift adjustments with projected revenue impact',
    ],
    example: '"Sunday brunch: add 2 servers + 1 line cook. Labor cost $380, revenue protected $2,800."',
  },
  {
    name: 'Revenue Analyst',
    color: 'border-lens-pipeline',
    role: 'Attributes revenue to interventions and proves ROI to the board',
    actions: [
      'Tracks dues, ancillary spend, and pipeline conversion by segment',
      'Measures revenue impact of every approved intervention',
      'Generates board-ready retention and yield reports automatically',
    ],
    example: '"January retention saves: 11 interventions approved, $88K dues protected, $12K cost. ROI 7.3x."',
  },
  {
    name: 'Engagement Autopilot',
    color: 'border-lens-briefing',
    role: 'Runs personalized re-engagement campaigns automatically',
    actions: [
      'Identifies declining members by channel (golf-only, F&B-only, social-only)',
      'Triggers multi-step outreach (push → email → concierge text) when decay detected',
      'Measures response and feeds results back into health scores',
    ],
    example: '"Sarah Mitchell skipped 3 events + no dining in 45 days. Send personal invite to member-guest dinner + comp dessert."',
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

      {/* Agent Command Screenshot */}
      <section className="py-12 px-6 bg-swoop-dark">
        <div className="max-w-container mx-auto">
          <ScreenshotLightbox
            src="/screenshots/agent-command.png"
            alt="Agent Command showing pending recommendations and approval workflow"
            frameClassName="rounded-xl overflow-hidden shadow-2xl border border-white/10 mb-8"
            imageClassName="w-full"
            caption="Agent Command keeps humans in the loop: approve, dismiss, or modify every recommendation."
          />
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Human-in-the-loop. Always.</h2>
            <p className="text-white/70 max-w-xl mx-auto">Swoop agents recommend. You decide. Every action shows the expected impact, the confidence level, and the reasoning. Approve, dismiss, or modify — the system learns from every decision.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-swoop-bg">
        <div className="max-w-container mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <AgentRecommendationCard />
          <div className="space-y-4">
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Agent inbox</p>
            <h2 className="text-3xl font-bold">Approve the action, not the spreadsheet hunt.</h2>
            <p className="text-swoop-muted">Each recommendation shows the impact estimate, confidence, and reasoning. Bulk-approve by agent type or drill into the drawer for granular context.</p>
            <ul className="text-sm text-swoop-muted space-y-2">
              <li className="flex items-start gap-2"><span className="text-swoop-green mt-0.5">→</span>Approve, dismiss, or modify with one click</li>
              <li className="flex items-start gap-2"><span className="text-swoop-green mt-0.5">→</span>Every decision tracked for ROI attribution</li>
              <li className="flex items-start gap-2"><span className="text-swoop-green mt-0.5">→</span>Drawer links to full member profile + context</li>
            </ul>
          </div>
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
