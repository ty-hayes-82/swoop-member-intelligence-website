import { motion } from "framer-motion"

const lenses = [
  {
    title: "Member Intelligence",
    icon: "👥",
    colorClass: "lens-members",
    description:
      "Detect churn signals 6–8 weeks early using attendance, spend, and participation changes rolled into one risk score. GMs get a prioritized save list with recommended next-best actions for each at-risk household, so no high-value member slips away unnoticed.",
    link: "#demo"
  },
  {
    title: "Tee Sheet & Demand",
    icon: "⛳",
    colorClass: "lens-briefing",
    description:
      "Spot tee-sheet compression, pace-of-play risk, and under-utilized inventory before they become member complaints. Daily rollups show where demand is shifting by daypart so your team can rebalance starter coverage and fill gaps with the right members.",
    link: "#demo"
  },
  {
    title: "F&B Operations",
    icon: "🍽️",
    colorClass: "lens-fb",
    description:
      "Track spend by member cohort, time block, and outlet to identify avoidable revenue leakage. Swoop highlights which dining experiences increase on-property spend without discounting the premium moments that drive margin.",
    link: "#demo"
  },
  {
    title: "Staffing & Labor",
    icon: "👔",
    colorClass: "lens-staffing",
    description:
      "Forecast coverage gaps before weekends and tournament days based on booking velocity and historical service load. Managers can proactively shift schedules to protect service-level targets across golf ops and dining.",
    link: "#demo"
  },
  {
    title: "Revenue & Pipeline",
    icon: "📊",
    colorClass: "lens-pipeline",
    description:
      "Rank open inventory opportunities by retention impact, member fit, and downstream revenue potential. Instead of broad blasts, your team gets targeted fill recommendations that keep members engaged and coming back.",
    link: "#demo"
  }
]

export default function FiveLensesCards() {
  return (
    <section id="platform" className="section" aria-label="Five intelligence lenses">
      <div className="container">
        <h2>Five Intelligence Lenses, One Operating Layer</h2>
        <p className="section-subhead">Cross-system insight for members, tee sheet, F&amp;B, staffing, and revenue.</p>

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
