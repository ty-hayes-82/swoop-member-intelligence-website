import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
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
    desc: 'Health scores and basic risk watchlists.',
    features: ['Member health baseline', '3 integrations', 'Weekly summary'],
    href: '/book-demo',
  },
  {
    name: PLAN_PRICING.pro.label,
    price: PLAN_PRICING.pro.display,
    desc: 'Member-saving workflows for one club team.',
    features: ['Full workflow playbooks', '10 integrations', 'Agent recommendations'],
    href: '/book-demo',
    boardMath: ['Annual dues protected: $192K', 'Agent hours saved: 28/mo'],
  },
  {
    name: PLAN_PRICING.club.label,
    price: PLAN_PRICING.club.display,
    desc: 'Portfolio reporting and multi-club orchestration.',
    features: ['Multi-club rollups', 'Custom ingestion', 'Dedicated success team'],
    href: '/book-demo',
    boardMath: ['Annual dues protected: $740K', 'Agent hours saved: 96/mo'],
  },
]

const inclusions = [
  { tier: 'Free', items: ['Daily Briefing', 'Member Health Scores'] },
  { tier: 'Pro', items: ['+ 6 AI Agents', '+ Demand Optimization', '+ Pipeline Intelligence'] },
  { tier: 'Club', items: ['+ Multi-department Coverage', '+ Board Reporting', '+ Dedicated Success Manager'] },
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
              <Link href={tier.href} className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-swoop-dark px-4 py-2 text-sm font-semibold text-white">
                Book a Demo
              </Link>
            </article>
          ))}
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
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
