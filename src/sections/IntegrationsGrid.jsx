const groups = [
  { title: "Tee Sheet", tools: ["ForeTees", "Northstar"] },
  { title: "POS", tools: ["Jonas", "Club Essential"] },
  { title: "CRM", tools: ["Club Essential CRM", "Custom Club CRM"] },
  { title: "Staffing", tools: ["7shifts", "Schedule Engine"] }
]

export default function IntegrationsGrid() {
  return (
    <section className="section">
      <div className="container">
        <h2>Works With Your Existing Systems</h2>
        <p className="section-subhead">Swoop connects to the tools your club already uses with no rip and replace.</p>

        <div className="integrations-grid">
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

        <p className="integration-note">Don&apos;t see your system? We&apos;re adding new integrations every month.</p>
      </div>
    </section>
  )
}
