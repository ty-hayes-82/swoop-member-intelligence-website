const rows = [
  ["First-party member behavior data", "Yes", "No", "No", "No"],
  ["Cross-system intelligence", "Yes", "No", "No", "No"],
  ["Member churn prediction", "Yes", "No", "Partial", "No"],
  ["Retention-prioritized waitlist", "Yes", "No", "No", "No"],
  ["AI-powered recommendations", "Yes", "No", "No", "No"],
  ["Closed-loop member outreach", "Yes", "No", "No", "No"],
  ["Revenue attribution per slot", "Yes", "No", "No", "Manual"],
]

export default function CompetitiveWedge() {
  return (
    <section style={{ background: "var(--color-bg-dark)", color: "var(--color-text-light)", borderRadius: "16px", margin: "2rem auto", maxWidth: "1200px" }}>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.75rem" }}>Not Another Tee Sheet.</h2>
      <p style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto 2.5rem", opacity: 0.7 }}>Competitors analyze what club systems record. Swoop analyzes what members actually do.</p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
              {["Feature", "Swoop", "Noteefy", "Your CRM", "Spreadsheets"].map(h => (
                <th key={h} style={{ padding: "1rem", textAlign: "left", fontWeight: 600 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                {row.map((cell, j) => (
                  <td key={j} style={{ padding: "0.875rem 1rem", color: j > 0 && cell === "Yes" ? "var(--color-cta-primary)" : j > 0 && cell === "No" ? "rgba(255,255,255,0.4)" : "inherit", fontWeight: j > 0 && cell === "Yes" ? 600 : 400 }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
