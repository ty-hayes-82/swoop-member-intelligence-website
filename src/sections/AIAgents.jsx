const agents = [
  { name: "Retention Sentinel", desc: "Monitors member behavior — including real-time app signals — and flags churn risk before it becomes a resignation." },
  { name: "Demand Optimizer", desc: "Rebalances the waitlist to maximize both fill rate and member satisfaction." },
  { name: "F&B Recommender", desc: "Suggests post-round dining offers based on member dining history, GPS location, and weather." },
  { name: "Staff Planner", desc: "Predicts coverage gaps and recommends schedule adjustments." },
  { name: "Outreach Drafter", desc: "Generates personalized member communications delivered directly through the Swoop app." },
  { name: "Revenue Analyst", desc: "Attributes revenue impact to operational decisions in real time." },
]

export default function AIAgents() {
  return (
    <section>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "0.75rem" }}>Your GM Platform Now Has a Staff.</h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3rem", opacity: 0.7 }}>Six AI agents work behind the scenes. See the risk. Fix it through the app. Prove the impact.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
        {agents.map((a, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "1.5rem", borderLeft: "4px solid var(--color-agents)", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>{a.name}</h3>
            <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
