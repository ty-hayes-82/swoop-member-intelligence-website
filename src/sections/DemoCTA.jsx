export default function DemoCTA() {
  return (
    <section id="demo" style={{ background: "var(--color-bg-dark)", color: "var(--color-text-light)", borderRadius: "16px", textAlign: "center", margin: "2rem auto", maxWidth: "1200px" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>See Your Club in Swoop.</h2>
      <p style={{ maxWidth: "500px", margin: "0 auto 2.5rem", opacity: 0.7 }}>Book a 30-minute demo. We will show you what your data looks like through five lenses.</p>
      <form style={{ maxWidth: "400px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}
        onSubmit={e => { e.preventDefault(); alert("Demo request submitted!") }}>
        <input type="text" placeholder="Your name" required style={{ padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem" }} />
        <input type="text" placeholder="Club name" required style={{ padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem" }} />
        <input type="email" placeholder="Email" required style={{ padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: "1rem" }} />
        <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem" }}>Request a Demo</button>
      </form>
    </section>
  )
}
