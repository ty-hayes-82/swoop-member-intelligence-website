import { useState } from "react"

export default function FinalCta() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const firstName = form.firstName.value.trim()
    const clubName = form.clubName.value.trim()
    const email = form.email.value.trim()

    const subject = encodeURIComponent(`Demo Request from ${firstName} at ${clubName}`)
    const body = encodeURIComponent(
      `Name: ${firstName}\nClub: ${clubName}\nEmail: ${email}\n\nRequesting a demo of the Swoop platform.`
    )

    window.open(`mailto:demo@swoopgolf.com?subject=${subject}&body=${body}`, "_self")
    setSubmitted(true)
  }

  return (
    <section id="demo" className="final-cta">
      <div className="container final-cta-inner">
        <h2>Every week you wait, another member quietly walks away.</h2>
        <p>Book a 15-minute demo. We&apos;ll show you insights from your own club data within 48 hours.</p>

        {submitted ? (
          <div className="demo-success">
            <span className="demo-success-icon" aria-hidden="true">✓</span>
            <h3>Your email client should open now.</h3>
            <p>If it didn&apos;t, email us directly at <a href="mailto:demo@swoopgolf.com" className="email-link">demo@swoopgolf.com</a></p>
          </div>
        ) : (
          <form className="demo-form" onSubmit={handleSubmit}>
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
            <button type="submit" className="btn-primary">
              Request a Demo
            </button>
          </form>
        )}

        <p className="email-fallback">
          Or email us directly: <a href="mailto:demo@swoopgolf.com" className="email-link">demo@swoopgolf.com</a>
        </p>
      </div>
    </section>
  )
}
