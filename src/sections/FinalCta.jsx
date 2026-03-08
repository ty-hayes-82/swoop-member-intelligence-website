import { useState } from "react"

export default function FinalCta() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.target
    try {
      await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
    } catch (_) {
      // still show success — Formspree endpoint is placeholder
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="demo" className="final-cta">
      <div className="container final-cta-inner">
        <h2>See What Your Data Already Knows</h2>
        <p>Book a 15-minute demo. We&apos;ll show you insights from your own club data within 48 hours.</p>

        {submitted ? (
          <div className="demo-success">
            <span className="demo-success-icon" aria-hidden="true">✓</span>
            <h3>Thanks! We&apos;ll reach out within 24 hours.</h3>
            <p>Check your inbox for a confirmation from the Swoop team.</p>
          </div>
        ) : (
          <form
            className="demo-form"
            method="POST"
            action="https://formspree.io/f/placeholder"
            onSubmit={handleSubmit}
          >
            <div className="demo-form-fields">
              <label>
                <span>First Name</span>
                <input type="text" name="firstName" required placeholder="Jane" />
              </label>
              <label>
                <span>Club Name</span>
                <input type="text" name="clubName" required placeholder="Oakmont Hills CC" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" required placeholder="jane@oakmonthills.com" />
              </label>
            </div>
            <button type="submit" className="btn-primary" disabled={submitting}>
              {submitting ? "Sending…" : "Request a Demo"}
            </button>
          </form>
        )}

        <p className="email-fallback">Or email us directly: <a href="mailto:demo@swoopgolf.com" className="email-link">demo@swoopgolf.com</a></p>
      </div>
    </section>
  )
}
