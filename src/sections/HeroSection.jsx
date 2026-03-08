import { motion } from "framer-motion"

const stats = [
  "$1.4M avg dues at risk identified",
  "6-8 wk early warning",
  "28 integrations, live in 2 weeks"
]

const dashboardStats = [
  { label: "Members at Risk", value: "5", accent: "var(--color-members)" },
  { label: "Revenue Protected", value: "$1.4M", accent: "var(--color-operations)" },
  { label: "Actions Pending", value: "3", accent: "var(--color-agents)" }
]

export default function HeroSection() {
  return (
    <section id="top" className="hero-section" aria-label="Hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">Member Intelligence Platform</p>
          <h1>Every resignation has a 90-day warning. Are you seeing it?</h1>
          <p className="hero-subhead">
            Swoop helps private club GMs predict member churn, optimize tee sheets, and prove revenue impact with one
            operating layer across golf, F&amp;B, and member engagement.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-primary">Book a Demo</a>
            <a href="#platform" className="btn-secondary">See the Platform</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="hero-dashboard-card"
          role="img"
          aria-label="Five Lenses Dashboard preview"
        >
          <div className="dashboard-header">
            <span className="dashboard-dot" aria-hidden="true" />
            <span className="dashboard-dot" aria-hidden="true" />
            <span className="dashboard-dot" aria-hidden="true" />
            <span className="dashboard-title">Five Lenses — Today</span>
          </div>
          <div className="dashboard-stats-row">
            {dashboardStats.map((s) => (
              <div key={s.label} className="dashboard-stat-card" style={{ borderTopColor: s.accent }}>
                <span className="dashboard-stat-label">{s.label}</span>
                <span className="dashboard-stat-value data-number">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="dashboard-bar-row">
            <div className="dashboard-bar" style={{ width: "82%", background: "var(--color-operations)" }} />
            <div className="dashboard-bar" style={{ width: "54%", background: "var(--color-briefing)" }} />
            <div className="dashboard-bar" style={{ width: "91%", background: "var(--color-pipeline)" }} />
          </div>
        </motion.div>
      </div>

      <div className="container hero-stats" aria-label="Platform outcomes">
        {stats.map((stat) => (
          <p key={stat} className="hero-stat data-number">{stat}</p>
        ))}
      </div>
    </section>
  )
}
