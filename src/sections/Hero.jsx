export default function Hero() {
  return (
    <section style={{ textAlign: "center", padding: "6rem 1.5rem 4rem" }}>
      <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "800px", margin: "0 auto 1.5rem" }}>
        Your club runs on gut feeling. Swoop changes that.
      </h1>
      <p style={{ fontSize: "1.25rem", maxWidth: "640px", margin: "0 auto 2.5rem", opacity: 0.8 }}>
        The AI-powered Club Intelligence Platform that sees what members actually do — in real time — and helps you act on it immediately.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#demo" className="btn-primary">Request a Demo</a>
        <a href="#lenses" className="btn-secondary">See How It Works</a>
      </div>
    </section>
  )
}
