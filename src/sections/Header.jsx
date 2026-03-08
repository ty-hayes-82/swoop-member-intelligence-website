import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo">Swoop Golf</a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className={`primary-nav ${open ? "open" : ""}`}>
          <a href="#platform">Platform</a>
          <a href="#who-we-serve">Who We Serve</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </nav>

        <div className="header-actions">
          <a href="mailto:demo@swoopgolf.com?subject=Book%20a%20Swoop%20Demo" className="btn-primary">Book a Demo</a>
          <a href="#" className="login-link">Login</a>
        </div>
      </div>
    </header>
  )
}
