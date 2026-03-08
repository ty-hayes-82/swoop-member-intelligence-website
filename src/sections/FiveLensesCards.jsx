import { motion } from "framer-motion"

const lenses = [
  {
    title: "Operations Intelligence",
    description: "Know what is happening on your course before it becomes a problem.",
    link: "#"
  },
  {
    title: "Revenue & F&B Intelligence",
    description: "See where revenue leaks before they hit the P&L.",
    link: "#"
  },
  {
    title: "Member Retention Intelligence",
    description: "Spot the resignation 90 days before it happens.",
    link: "#"
  },
  {
    title: "Staffing & Service Intelligence",
    description: "The service failure on Jan 16 was predictable 48 hours earlier.",
    link: "#"
  },
  {
    title: "Growth Pipeline Intelligence",
    description: "Fill slots with the right members, not just any members.",
    link: "#"
  }
]

export default function FiveLensesCards() {
  return (
    <section id="platform" className="section">
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
              <div className="card-icon" aria-hidden="true">{index + 1}</div>
              <h3>{lens.title}</h3>
              <p>{lens.description}</p>
              <a href={lens.link}>Learn More</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
