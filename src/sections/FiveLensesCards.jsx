import { motion } from "framer-motion"

const lenses = [
  {
    title: "Operations Intelligence",
    icon: "📘",
    colorClass: "lens-briefing",
    description:
      "Spot tee-sheet compression, pace-of-play risk, and under-utilized inventory before they become member complaints. Daily rollups show where demand is shifting by daypart so your team can rebalance staffing and starter coverage ahead of busy windows.",
    link: "#"
  },
  {
    title: "Revenue & F&B Intelligence",
    icon: "🍽️",
    colorClass: "lens-fb",
    description:
      "Track spend by member cohort, time block, and channel to identify avoidable revenue leakage. Swoop highlights which offers increase on-property spend without discounting premium experiences that drive margin.",
    link: "#"
  },
  {
    title: "Member Retention Intelligence",
    icon: "👥",
    colorClass: "lens-members",
    description:
      "Detect churn signals 6-8 weeks early using attendance, spend, and participation changes in one risk score. GMs get a prioritized save list with recommended next-best actions for each at-risk household.",
    link: "#"
  },
  {
    title: "Staffing & Service Intelligence",
    icon: "🛠️",
    colorClass: "lens-staffing",
    description:
      "Forecast coverage gaps before weekends and tournament days based on booking velocity and historical service load. Managers can proactively shift schedules to protect service-level targets across golf ops and dining.",
    link: "#"
  },
  {
    title: "Growth Pipeline Intelligence",
    icon: "🎯",
    colorClass: "lens-pipeline",
    description:
      "Rank open inventory opportunities by retention impact, member fit, and downstream revenue potential. Instead of broad blasts, your team gets targeted fill recommendations that keep members engaged and coming back.",
    link: "#"
  }
]

export default function FiveLensesCards() {
  return (
    <section id="platform" className="section" aria-label="Five intelligence lenses">
      <div className="container">
        <h2>Five Intelligence Lenses, One Operating Layer</h2>
        <p className="section-subhead">Cross-system insight for operations, retention, staffing, revenue, and growth.</p>

        <div className="cards-grid">
          {lenses.map((lens, index) => (
            <motion.article
              key={lens.title}
              className="lens-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <div className={`card-icon ${lens.colorClass}`} aria-hidden="true">{lens.icon}</div>
              <h3>{lens.title}</h3>
              <p>{lens.description}</p>
              <a href={lens.link}>Learn More &rarr;</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
