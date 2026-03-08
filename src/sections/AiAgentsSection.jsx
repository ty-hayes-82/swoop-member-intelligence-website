const agents = [
  {
    name: "Retention Sentinel",
    description: "Flags members showing churn signals from attendance, spend, and engagement shifts.",
    action: "Drafts a save-plan for the GM before Monday briefing."
  },
  {
    name: "Demand Optimizer",
    description: "Ranks members for open inventory based on value, fit, and retention impact.",
    action: "Pushes top-fill recommendations to staff each morning."
  },
  {
    name: "Service Recovery",
    description: "Detects service friction before complaints reach leadership.",
    action: "Creates service follow-up tasks and escalation paths."
  },
  {
    name: "Revenue Analyst",
    description: "Monitors leakage across dues, F&B, and utilization patterns.",
    action: "Surfaces preventable loss opportunities with dollar impact."
  },
  {
    name: "Engagement Coach",
    description: "Tracks individual member habits and recommends high-fit experiences.",
    action: "Prompts outreach with personalized engagement suggestions."
  },
  {
    name: "Draft Communicator",
    description: "Turns intelligence into board-ready summaries and member comm drafts.",
    action: "Builds ready-to-send emails and weekly executive updates."
  }
]

export default function AiAgentsSection() {
  return (
    <section className="section agents-section">
      <div className="container">
        <h2>Six AI Agents That Work While You Sleep</h2>
        <p className="section-subhead">Swoop&apos;s agents do not just report. They draft, recommend, and act.</p>

        <div className="agents-grid">
          {agents.map((agent) => (
            <article key={agent.name} className="agent-card">
              <h3>{agent.name}</h3>
              <p>{agent.description}</p>
              <p className="agent-action">Example action: {agent.action}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
