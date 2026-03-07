const cards = [
  { headline: "5 Systems. Zero Intelligence.", body: "Your tee sheet, POS, CRM, staffing tool, and spreadsheets don't talk to each other. You're flying blind." },
  { headline: "You See It Too Late.", body: "By the time a pattern shows up in a monthly report, the damage is done. Reactive management costs real money." },
  { headline: "$22K Gone in 6 Days.", body: "James Whitfield complained on January 16th. No one followed up. He resigned on the 22nd. Your tee sheet never told you." },
]

export default function Problem() {
  return (
    <section>
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "3rem" }}>The Problem No One Talks About</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
        {cards.map((c, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: "12px", padding: "2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>{c.headline}</h3>
            <p style={{ opacity: 0.7 }}>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
