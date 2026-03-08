export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="container footer-grid" aria-label="Footer navigation">
        <div>
          <h4>Platform</h4>
          <a href="#platform">Five Lenses</a>
          <a href="#agents">AI Agents</a>
          <a href="#demo">Book a Demo</a>
        </div>
        <div>
          <h4>Features</h4>
          <a href="#platform">Operations</a>
          <a href="#platform">Revenue &amp; F&amp;B</a>
          <a href="#platform">Retention</a>
        </div>
        <div>
          <h4>Who We Serve</h4>
          <a href="#platform">Private Clubs</a>
          <a href="#platform">Semi-Private</a>
          <a href="#platform">Resort Destinations</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#case-studies">Case Studies</a>
          <a href="#comparison">Competitive Comparison</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#demo">Contact</a>
          <a href="mailto:demo@swoopgolf.com">demo@swoopgolf.com</a>
        </div>
      </nav>

      <div className="container footer-bottom">
        <p>Copyright {new Date().getFullYear()} Swoop Golf Member Intelligence. All rights reserved.</p>
        <nav aria-label="Legal and social links">
          <a href="#">LinkedIn</a>
          <a href="#">Twitter/X</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
