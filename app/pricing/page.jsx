import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Pricing',
  description: 'Simple pricing. No long-term contracts. Start free with health scores, upgrade to Pro for full analytics, or go all-in with Club.',
}

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Connect your existing systems. See member health scores and basic risk alerts.',
    features: ['Health score dashboard', 'Basic risk alerts', 'Up to 3 integrations', 'Email support'],
    cta: 'Start Free',
    href: '/book-demo',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    desc: 'Full Five Lenses analytics with cross-system intelligence and AI agent recommendations.',
    features: ['All 5 Lenses', 'Cross-lens analytics', 'AI agent recommendations', 'Up to 10 integrations', 'Priority support', '14-day free trial'],
    cta: 'Start 14-Day Trial',
    href: '/book-demo',
    popular: true,
  },
  {
    name: 'Club',
    price: '$1,499',
    period: '/month',
    desc: 'Everything in Pro plus the Swoop member app, GPS behavioral data, and closed-loop engagement.',
    features: ['Everything in Pro', 'Swoop member app included', 'GPS + real-time behavioral data', 'Push notification channel', 'Closed-loop engagement tracking', 'Dedicated success manager'],
    cta: 'Book a Demo',
    href: '/book-demo',
    popular: false,
  },
]

const faqs = [
  { q: 'How long does setup take?', a: 'Most clubs are live in under 2 weeks. We connect to your existing tee sheet, POS, and CRM — no rip-and-replace required.' },
  { q: 'Do I need to replace my current software?', a: 'No. Swoop sits on top of your existing systems and connects via API. We support 28 integrations across 10 categories.' },
  { q: 'Can I try it before committing?', a: 'Absolutely. Our Free tier gives you health scores with no credit card required. Pro includes a 14-day trial.' },
  { q: 'Is my members\' data secure?', a: 'Yes. All data is encrypted in transit and at rest. We never share member data with third parties. SOC 2 compliance is on our roadmap.' },
  { q: 'What makes Swoop different from Noteefy?', a: 'Noteefy fills cancelled tee times — one function, one system. Swoop is a full intelligence platform across five operational lenses with AI agents, member behavioral data, and closed-loop engagement.' },
]

export default function PricingPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple pricing. No long-term contracts.</h1>
          <p className="text-lg text-swoop-muted">Start free with your existing systems. Upgrade when you see the value.</p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-container mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`bg-swoop-card border rounded-xl p-8 flex flex-col ${t.popular ? 'border-swoop-green ring-2 ring-swoop-green/20 scale-105' : 'border-swoop-border'}`}>
              {t.popular && (
                <span className="inline-block self-start text-xs font-bold text-swoop-dark bg-swoop-green px-3 py-1 rounded-full mb-4">Most Popular</span>
              )}
              <h3 className="text-2xl font-bold">{t.name}</h3>
              <div className="mt-2 mb-4">
                <span className="text-4xl font-bold font-mono">{t.price}</span>
                <span className="text-swoop-muted text-sm ml-1">{t.period}</span>
              </div>
              <p className="text-swoop-muted text-sm mb-6">{t.desc}</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-swoop-green mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={t.href}
                className={`block text-center py-3 rounded-lg font-semibold transition ${t.popular ? 'bg-swoop-green text-swoop-dark hover:bg-swoop-green-hover' : 'border-2 border-swoop-green text-swoop-green hover:bg-swoop-green hover:text-swoop-dark'}`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CTASection headline="Ready to see your club's data in Swoop?" subtext="Book a 30-minute demo. No commitment required." />
    </>
  )
}
