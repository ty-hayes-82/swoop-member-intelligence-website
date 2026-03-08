import { motion } from "framer-motion"

const cards = [
  {
    icon: "🔒",
    title: "SOC 2 Compliant",
    desc: "Enterprise-grade security with SOC 2 Type II compliance. Your member data never leaves your control."
  },
  {
    icon: "🏠",
    title: "Your Infrastructure",
    desc: "Swoop connects to your existing systems via read-only APIs. We don't replace anything — we illuminate everything."
  },
  {
    icon: "📋",
    title: "Club-Owned Data",
    desc: "Every insight, report, and prediction belongs to your club. Export anything, anytime. No lock-in."
  }
]

export default function SecuritySection() {
  return (
    <section className="section" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #edf6f0 100%)' }}>
      <div className="container">
        <h2>Your Data. Your Control.</h2>
        <p className="section-subhead">
          Private clubs trust us with their most sensitive member data. We take that responsibility seriously.
        </p>
        <div className="cards-grid" style={{ maxWidth: 960 }}>
          {cards.map((card, i) => (
            <motion.article
              key={card.title}
              className="lens-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="card-icon" style={{ background: 'rgba(74, 222, 128, 0.15)' }}>
                {card.icon}
              </div>
              <h3 style={{ marginTop: '0.75rem' }}>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
