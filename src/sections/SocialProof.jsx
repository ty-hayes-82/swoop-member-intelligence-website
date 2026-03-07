const stats = [
  { value: "91%", label: "Waitlist fill rate", note: "vs 67% reactive" },
  { value: "$312", label: "Revenue per slot", note: "vs $187 reactive" },
  { value: "6 days", label: "Early warning on churn", note: "before resignation" },
]

export default function SocialProof() {
  return (
    <section>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>The Numbers Speak.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
        {stats.map((s, i) => (
          <div key={i}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "2.5rem", fontWeight: 700, color: "var(--color-cta-primary)" }}>{s.value}</div>
            <div style={{ fontWeight: 600, marginTop: "0.5rem" }}>{s.label}</div>
            <div style={{ fontSize: "0.85rem", opacity: 0.5, marginTop: "0.25rem" }}>{s.note}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
