const agents = [
  {
    name: "Retention Sentinel",
    icon: "🛡️",
    accentClass: "agent-accent-retention",
    description:
      "Watches attendance, spend, and engagement shifts to flag members with rising churn probability.",
    action:
      "When a high-value family misses two peak-time patterns in a row, it drafts a personalized outreach plan and queues a call task for the GM."
  },
  {
    name: "Demand Optimizer",
    icon: "📈",
    accentClass: "agent-accent-ops",
    description:
      "Scores open tee inventory against member fit, expected spend, and retention impact.",
    action:
      "For tomorrow's late-afternoon gap, it recommends a targeted invite list and suggests time-slot bundles that improve utilization without over-discounting."
  },
  {
    name: "Service Recovery",
    icon: "🫡",
    accentClass: "agent-accent-agents",
    description:
      "Detects service friction across dining and golf operations before issues escalate to leadership.",
    action:
      "If wait-time and satisfaction indicators slip during weekend brunch, it triggers follow-up tasks and generates apology messaging for impacted members."
  },
  {
    name: "Revenue Analyst",
    icon: "💰",
    accentClass: "agent-accent-fb",
    description:
      "Monitors leakage patterns across dues, F&B, and amenity utilization in one financial view.",
    action:
      "When cart-fee capture drops versus rounds played, it flags the variance and produces a weekly dollar-impact summary for your operating review."
  },
  {
    name: "Engagement Coach",
    icon: "🤝",
    accentClass: "agent-accent-members",
    description:
      "Builds member-level habit profiles to recommend next-best experiences that increase stickiness.",
    action:
      "For a member reducing tournament participation, it suggests matching social events and prompts staff outreach with tailored talking points."
  },
  {
    name: "Draft Communicator",
    icon: "✍️",
    accentClass: "agent-accent-pipeline",
    description:
      "Turns operational signals into board-ready narratives and member-facing communications.",
    action:
      "It compiles your Monday intelligence digest, then drafts an executive note with highlights, risks, and the expected revenue impact of planned actions."
  }
]

export default function AiAgentsSection() {
  return (
    <section className="section agents-section" aria-label="AI agents">
      <div className="container">
        <h2>Six AI Agents That Work While You Sleep</h2>
        <p className="section-subhead">Swoop&apos;s agents do not just report. They draft, recommend, and act.</p>

        <div className="agents-grid">
          {agents.map((agent) => (
            <article key={agent.name} className="agent-card">
              <div className={`agent-icon ${agent.accentClass}`} aria-hidden="true">{agent.icon}</div>
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
