import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="top" className="hero-section">
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Member Intelligence Platform</p>
          <h1>Every resignation has a 90-day warning. Are you seeing it?</h1>
          <p className="hero-subhead">
            Swoop connects your tee sheet, POS, and member data into a single intelligence layer so you know who&apos;s at risk,
            what&apos;s leaking revenue, and what to do about it before Monday morning.
          </p>
          <div className="hero-ctas">
            <a href="mailto:demo@swoopgolf.com?subject=Book%20a%20Swoop%20Demo" className="btn-primary">Book a Demo</a>
            <a href="#platform" className="btn-secondary">See the Platform</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hero-panel"
        >
          <h3>Monday GM Briefing</h3>
          <ul>
            <li><span>Retention Risk</span><strong>5 Members Flagged</strong></li>
            <li><span>Revenue Leak</span><strong>$14,200 This Month</strong></li>
            <li><span>Service Alert</span><strong>Dining SLA Trending Down</strong></li>
            <li><span>Demand Shift</span><strong>Weekend PM Slots +18%</strong></li>
          </ul>
          <a href="#" className="hero-video-link">Watch 2-minute product tour</a>
        </motion.div>
      </div>
    </section>
  )
}
