const groups = [
  { title: "Tee Sheet & Golf", tools: ["ForeTees", "EZLinks", "ForeUp", "GolfNow"] },
  { title: "POS & Club Management", tools: ["Jonas", "Northstar", "Club Essential", "Clubessential", "Club Prophet"] },
  { title: "Member & CRM", tools: ["ClubReady", "Mailchimp", "Twilio"] },
  { title: "F&B & Staffing", tools: ["7shifts", "Toast", "Square"] },
  { title: "Data & Analytics", tools: ["Weather API", "QuickBooks", "Stripe"] }
]

export default function IntegrationsGrid() {
  return (
    <section className="section" aria-label="Integrations">
      <div className="container">
        <h2>Works With Your Existing Systems</h2>
        <p className="section-subhead">Live in under 2 weeks. No rip-and-replace.</p>

        <div className="integration-count data-number">28+ integrations across 10 systems</div>

        <div className="integrations-grid integration-categories">
          {groups.map((group) => (
            <article key={group.title} className="integration-group">
              <h3>{group.title}</h3>
              <div className="integration-tags">
                {group.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
