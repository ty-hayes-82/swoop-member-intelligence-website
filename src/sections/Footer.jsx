export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="container footer-grid" aria-label="Footer navigation">
        <div>
          <h4>Platform</h4>
          <a href="#platform">Five Lenses</a>
          <a href="#">Daily Briefing</a>
          <a href="#">AI Agents</a>
        </div>
        <div>
          <h4>Features</h4>
          <a href="#">Operations</a>
          <a href="#">Revenue &amp; F&amp;B</a>
          <a href="#">Retention</a>
        </div>
        <div id="who-we-serve">
          <h4>Who We Serve</h4>
          <a href="#">Private Clubs</a>
          <a href="#">Semi-Private</a>
          <a href="#">Resort Destinations</a>
        </div>
        <div id="resources">
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Case Studies</a>
        </div>
        <div id="about">
          <h4>Company</h4>
          <a href="#">About</a>
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
