import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Resources',
  description: 'Guides, primers, and playbooks for retention-focused club operators.',
  path: '/resources',
})

const resourceCards = [
  {
    title: 'The Hidden Cost of Member Churn',
    category: 'Guide',
    href: '/resources/cost-of-churn',
    who: 'GMs and Finance Directors',
    learn: 'How to calculate true churn cost including secondary revenue.',
    time: '8 minutes',
  },
  {
    title: 'Member Retention Playbook',
    category: 'Guide',
    href: '/resources/churn-prevention-guide',
    who: 'Membership Directors and ops teams',
    learn: 'A 90-day framework for identifying and recovering at-risk members.',
    time: '12 minutes',
  },
  {
    title: 'AI Agents in Club Operations',
    category: 'Primer',
    href: '/resources/ai-agents-primer',
    who: 'GMs evaluating AI tools',
    learn: 'What AI agents actually do, how approvals work, and where to start.',
    time: '6 minutes',
  },
]

const faqs = [
  { q: 'Are these resources free?', a: 'Yes, no signup required.' },
  { q: 'Can I share these with my board?', a: 'Absolutely — they are designed to be board-ready.' },
  { q: 'Do I need Swoop to use these frameworks?', a: 'No. The principles apply to any club. Swoop automates the execution.' },
  { q: 'How often do you publish new resources?', a: 'Monthly. Subscribe to our newsletter for updates.' },
  { q: 'Can I request a topic?', a: 'Yes — email us at hello@swoopgolf.com.' },
]

const tagStyles = {
  Guide: 'text-swoop-accent bg-swoop-accent/10',
  Primer: 'text-swoop-dark bg-swoop-dark/10',
}

export default function ResourcesPage() {
  return (
    <div className="page-stack">
      <section className="py-20 md:py-28 px-6 text-center">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources and Insights</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">Practical guides for retention-focused club operators.</p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resourceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className={`inline-flex text-xs font-semibold uppercase tracking-widest px-2 py-1 rounded-full ${tagStyles[card.category] ?? 'text-swoop-accent bg-swoop-accent/10'}`}>
                {card.category}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-swoop-dark">{card.title}</h2>
              <div className="mt-4 space-y-3 text-sm text-swoop-muted">
                <div>
                  <p className="font-semibold text-swoop-dark">Who it's for</p>
                  <p>{card.who}</p>
                </div>
                <div>
                  <p className="font-semibold text-swoop-dark">What you'll learn</p>
                  <p>{card.learn}</p>
                </div>
                <div>
                  <p className="font-semibold text-swoop-dark">Time to read</p>
                  <p>{card.time}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6 space-y-6">
            {faqs.map((item) => (
              <div key={item.q}>
                <p className="text-sm font-semibold text-swoop-dark">{item.q}</p>
                <p className="text-sm text-swoop-muted mt-1">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 text-center">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to see it in action?</h2>
          <p className="text-swoop-muted mb-6">Book a Demo — see how Swoop automates these frameworks.</p>
          <Link
            href="/book-demo"
            className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white"
          >
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
