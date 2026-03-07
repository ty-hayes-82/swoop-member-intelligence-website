const lenses = [
  { name: "Member Intelligence", color: "var(--color-members)", desc: "Behavioral signals, churn risk, and lifetime value — powered by real-time app data competitors can't access." },
  { name: "Tee Sheet & Demand", color: "var(--color-agents)", desc: "Waitlist optimization, fill rates, and demand forecasting that prioritizes retention over first-come-first-served." },
  { name: "F&B Operations", color: "var(--color-fb)", desc: "Outlet performance, dining patterns, and post-round conversion — connected to who played, not just what sold." },
  { name: "Staffing & Labor", color: "var(--color-staffing)", desc: "Coverage gaps, complaint correlation, and labor cost modeling tied to actual member experience." },
  { name: "Revenue & Pipeline", color: "var(--color-pipeline)", desc: "Per-slot revenue attribution, retention-driven yield, and growth pipeline with archetype-tagged prospects." },
]

export default function FiveLenses() {
  return (
    <section id="lenses">
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "1rem" }}>Five Lenses. One Platform.</h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem", opacity: 0.7 }}>Every decision a GM makes falls into one of five categories. Swoop connects them all.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
        {lenses.map((l, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "1.75rem", borderTop: "4px solid " + l.color, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{l.name}</h3>
            <p style={{ fontSize: "0.95rem", opacity: 0.7 }}>{l.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
