import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import PrimaryCTA from '@/components/PrimaryCTA'
import { PLAN_PRICING } from '@/lib/pricing'

export const metadata = buildMetadata({
  title: 'Pricing',
  description: 'Simple pricing with clear operational math for private clubs.',
  path: '/pricing',
})

const tiers = [
  {
    name: PLAN_PRICING.free.label,
    price: PLAN_PRICING.free.display,
    desc: 'Answer one question: which members are drifting away? Health scores from integrations only.',
    features: ['Member health baseline', '3 integrations', 'Weekly summary'],
    href: '/book-demo',
  },
  {
    name: PLAN_PRICING.pro.label,
    price: PLAN_PRICING.pro.display,
    desc: 'Answer all three questions. See operations breaking, revenue leaking, and members disengaging — then fix it.',
    features: ['Full workflow playbooks', '10 integrations', 'Agent recommendations'],
    href: '/book-demo',
    boardMath: ['Annual dues protected: $192K', 'Agent hours saved: 28/mo'],
  },
  {
    name: PLAN_PRICING.club.label,
    price: PLAN_PRICING.club.display,
    desc: 'All three questions across every property. Portfolio-level intelligence with dedicated success.',
    features: ['Multi-club rollups', 'Custom ingestion', 'Dedicated success team'],
    href: '/book-demo',
    boardMath: ['Annual dues protected: $740K', 'Agent hours saved: 96/mo'],
  },
]

const inclusions = [
  { tier: 'Free', items: ['Member Health (Q3)', 'Daily Briefing', 'Weekly Summary'] },
  { tier: 'Pro', items: ['+ Operational Command (Q1)', '+ Revenue Optimization (Q2)', '+ 6 AI Agents'] },
  { tier: 'Club', items: ['+ All 3 Questions at Portfolio Scale', '+ Board Reporting', '+ Dedicated Success Manager'] },
]

const featureComparison = [
  {
    category: 'Core Features',
    features: [
      { name: 'Member Health Scores', free: true, pro: true, club: true },
      { name: 'Daily Briefing', free: true, pro: true, club: true },
      { name: 'Full Dashboard (5 Lenses)', free: false, pro: true, club: true },
      { name: 'AI Agent Recommendations', free: false, pro: true, club: true },
      { name: 'Board-Ready Reports', free: false, pro: true, club: true },
      { name: 'Member App (optional)', free: false, pro: 'Add-on', club: 'Included' },
    ]
  },
  {
    category: 'Integrations & Data',
    features: [
      { name: 'System Integrations', free: '3', pro: '10', club: 'Unlimited' },
      { name: 'Data History', free: '30 days', pro: '12 months', club: '36 months' },
      { name: 'Custom Data Ingestion', free: false, pro: false, club: true },
      { name: 'API Access', free: false, pro: false, club: true },
    ]
  },
  {
    category: 'Team & Support',
    features: [
      { name: 'User Seats', free: '1', pro: '5', club: 'Unlimited' },
      { name: 'Support Level', free: 'Email', pro: 'Priority email', club: 'Dedicated success manager' },
      { name: 'Onboarding', free: 'Self-serve', pro: 'Guided setup', club: 'White-glove + training' },
      { name: 'Multi-Club Management', free: false, pro: false, club: true },
    ]
  },
]

const faqs = [
  { question: 'What is the contract term?', answer: 'Month-to-month. No long-term commitment required.' },
  { question: 'Is there an implementation fee?', answer: 'No. Setup and onboarding are included in all paid tiers.' },
  { question: 'Does my club need an app?', answer: 'No. Swoop is a web-based dashboard for your operations team.' },
  { question: 'Who owns the data?', answer: 'You do. Your data is never shared and can be exported at any time.' },
  { question: 'Can I cancel anytime?', answer: 'Yes. Cancel from your account settings with no penalties.' },
]

export default function PricingPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <h1 className="text-4xl font-bold md:text-5xl">Pricing aligned to board outcomes.</h1>
          <p className="mt-4 text-lg text-swoop-muted">Pick the tier that matches your retention focus — upgrade as your team expands.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <article key={tier.name} className="flex flex-col rounded-2xl border border-swoop-border bg-white p-6">
              <h2 className="text-2xl font-bold">{tier.name}</h2>
              <p className="mt-1 text-3xl font-bold">{tier.price}</p>
              <p className="mt-2 text-sm text-swoop-muted">{tier.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              {tier.boardMath && (
                <div className="mt-4 rounded-xl border border-swoop-border bg-swoop-bg p-3 text-xs">
                  <p className="font-semibold">Board math</p>
                  {tier.boardMath.map((line) => (
                    <p key={line} className="mt-1 text-swoop-muted">{line}</p>
                  ))}
                </div>
              )}
              <Link href={tier.href} className="mt-4 text-sm font-semibold text-swoop-accent underline underline-offset-4">
                See plan details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <div className="px-6 pb-10">
        <div className="mx-auto max-w-container text-center">
          <PrimaryCTA />
        </div>
      </div>

      {/* Feature Comparison Table */}
      <section className="px-6 py-16 bg-swoop-bg">
        <div className="mx-auto max-w-container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Compare plans in detail</h2>
            <p className="mt-3 text-swoop-muted">See exactly what's included at each tier</p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-2xl border border-swoop-border bg-white">
                <table className="min-w-full divide-y divide-swoop-border">
                  <thead>
                    <tr className="bg-white">
                      <th scope="col" className="py-4 px-6 text-left text-sm font-semibold text-swoop-dark">Features</th>
                      <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-swoop-dark">Free</th>
                      <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-swoop-dark border-l-2 border-[#4ADE80]">Pro</th>
                      <th scope="col" className="py-4 px-6 text-center text-sm font-semibold text-swoop-dark">Club</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-swoop-border bg-white">
                    {featureComparison.map((category) => (
                      <>
                        <tr key={category.category} className="bg-swoop-bg">
                          <td colSpan={4} className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-swoop-muted">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature) => (
                          <tr key={feature.name} className="hover:bg-swoop-bg transition-colors">
                            <td className="py-4 px-6 text-sm text-swoop-dark">{feature.name}</td>
                            <td className="py-4 px-6 text-center">
                              {typeof feature.free === 'boolean' ? (
                                feature.free ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">✓</span>
                                ) : (
                                  <span className="text-swoop-muted text-xs">—</span>
                                )
                              ) : (
                                <span className="text-sm text-swoop-dark">{feature.free}</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-center border-l-2 border-[#4ADE80]">
                              {typeof feature.pro === 'boolean' ? (
                                feature.pro ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">✓</span>
                                ) : (
                                  <span className="text-swoop-muted text-xs">—</span>
                                )
                              ) : (
                                <span className="text-sm text-swoop-dark font-medium">{feature.pro}</span>
                              )}
                            </td>
                            <td className="py-4 px-6 text-center">
                              {typeof feature.club === 'boolean' ? (
                                feature.club ? (
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600">✓</span>
                                ) : (
                                  <span className="text-swoop-muted text-xs">—</span>
                                )
                              ) : (
                                <span className="text-sm text-swoop-dark font-medium">{feature.club}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — how clubs choose their tier</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Start with Free to explore the briefing experience</li>
              <li>• Move to Pro when you want AI agent recommendations</li>
              <li>• Upgrade to Club for multi-department coverage and board reporting</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — how ROI is proven</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Track cumulative saves and recovered revenue monthly</li>
              <li>• Compare churn rate before and after Swoop</li>
              <li>• Generate board-ready retention reports with one click</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">What's included</p>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            {inclusions.map((tier) => (
              <article key={tier.tier} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <h3 className="text-lg font-semibold text-swoop-dark">{tier.tier}</h3>
                <ul className="mt-3 space-y-2 text-sm text-swoop-muted">
                  {tier.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Pricing FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 text-center">
        <div className="mx-auto max-w-container">
          <h2 className="text-2xl font-bold mb-4">Ready to run the math on your club?</h2>
          <p className="text-swoop-muted mb-6">Book a demo and see exactly how Swoop automates these frameworks.</p>
          <PrimaryCTA />
        </div>
      </section>
    </div>
  )
}
