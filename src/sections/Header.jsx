import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="logo" onClick={closeMenu}>Swoop Golf</a>

        <button
          className="menu-toggle"
          aria-label="Toggle main menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav id="primary-nav" className={`primary-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
          <a href="#platform" onClick={closeMenu}>Platform</a>
          <a href="#agents" onClick={closeMenu}>AI Agents</a>
          <a href="#case-studies" onClick={closeMenu}>Results</a>
          <a href="#comparison" onClick={closeMenu}>Why Swoop</a>
        </nav>

        <div className="header-actions">
          <a href="#demo" className="btn-primary">Book a Demo</a>
        </div>
      </div>
    </header>
  )
}
