import Link from 'next/link'

export const metadata = {
  title: 'Resources',
  description: 'Guides, calculators, and insights for private club General Managers.',
}

const resources = [
  {
    category: 'Guides',
    items: [
      { title: "The GM's Guide to Member Churn Prevention", desc: 'Early warning signals, intervention playbooks, and attribution methods.', type: 'Guide', href: '/resources/churn-prevention-guide' },
      { title: 'How to Calculate True Cost of Member Churn', desc: 'Beyond dues: replacement cost, lost referrals, and operational drag.', type: 'Guide', href: '/resources/cost-of-churn' },
      { title: "AI Agents for Private Clubs: A GM's Primer", desc: 'What AI agents do, how they work, and why human-in-the-loop matters.', type: 'Guide', href: '#' },
    ],
  },
  {
    category: 'Case Studies',
    items: [
      { title: 'The James Whitfield Story', desc: 'How Swoop detected a $22K/yr resignation 6 days before it happened.', type: 'Case Study', href: '/case-studies/oakmont-hills' },
      { title: 'More case studies coming soon', desc: 'Real clubs. Real results. Real attribution.', type: 'Coming Soon', href: '#' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { title: 'Member Churn ROI Calculator', desc: 'Calculate what churn is costing your club — and what Swoop can recover.', type: 'Calculator', href: '/roi-calculator' },
      { title: 'Waitlist Prioritization Simulator', desc: 'Coming soon: Model retention-driven waitlist strategies.', type: 'Coming Soon', href: '#' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights for private club GMs.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            Guides, calculators, and real-world scenarios to help you protect member relationships and prove operational ROI.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto space-y-16">
          {resources.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`block bg-swoop-card border border-swoop-border rounded-xl p-6 hover:shadow-lg transition ${item.type === 'Coming Soon' ? 'opacity-60 cursor-not-allowed pointer-events-none' : ''}`}
                  >
                    <span className="inline-block text-xs font-semibold text-swoop-accent bg-swoop-accent/10 px-2 py-1 rounded-full mb-3">{item.type}</span>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-swoop-muted">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for something specific?</h2>
          <p className="text-swoop-muted mb-8 max-w-xl mx-auto">
            We're building this resource library based on what GMs actually need. If you have questions or topic requests, let us know.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition"
          >
            Request a topic
          </Link>
        </div>
      </section>
    </>
  )
}
