import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import FaqAccordion from '@/components/FaqAccordion'
import ProofStack from '@/components/ProofStack'
import CTASection from '@/components/CTASection'
import RoiCalculator from '@/components/RoiCalculator'
import { BoardSnapshotCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Pricing',
  description: 'Simple pricing with clear operational math for private clubs.',
  path: '/pricing',
})

const tiers = [
  {
    name: 'Free',
    price: '$0/mo',
    desc: 'Health scores and basic risk watchlists.',
    features: ['Member health baseline', '3 integrations', 'Weekly summary'],
    href: '/book-demo',
    cta: 'Start',
  },
  {
    name: 'Pro',
    price: '$499/mo',
    desc: 'Member-saving workflows for one club team.',
    features: ['Full workflow playbooks', '10 integrations', 'Agent recommendations'],
    href: '/book-demo',
    cta: 'Book Pro Demo',
    boardMath: ['ARR protected: $192K', 'Agent hours saved: 28/mo'],
  },
  {
    name: 'Club',
    price: '$1,499/mo',
    desc: 'Portfolio reporting and multi-club orchestration.',
    features: ['Multi-club rollups', 'Custom ingestion', 'Dedicated success team'],
    href: '/book-demo',
    cta: 'Talk Sales',
    boardMath: ['ARR protected: $740K', 'Agent hours saved: 96/mo'],
  },
]

const faqs = [
  { q: 'How quickly can we launch?', a: 'Most clubs complete onboarding in 2-3 weeks.' },
  { q: 'Do we replace existing systems?', a: 'No. Swoop overlays current tee sheet, CRM, POS, and labor tools.' },
  { q: 'Can we start with one site?', a: 'Yes. Pro is designed for single-club rollout before scaling.' },
  { q: 'How is value measured?', a: 'We track protected ARR, saved labor time, and action-level outcomes.' },
]

export default function PricingPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <h1 className="text-4xl font-bold md:text-5xl">Pricing aligned to board outcomes.</h1>
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
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <RoiCalculator />

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="mt-6">
            <FaqAccordion items={faqs.map((item) => ({ q: item.q, a: item.a }))} />
          </div>
        </div>
      </section>

      <ProofStack
        statLabel="Average payback"
        statValue="≈28 days"
        demoLabel="Board math preview"
        quote="Finance and operations finally looked at the same outcome model."
        ctaLabel="Book pricing walkthrough"
        ctaHref="/book-demo"
      >
        <BoardSnapshotCard />
      </ProofStack>

      <CTASection
        headline="Validate the pricing model with your club data."
        subtext="Run the ROI math during the call and leave with a board-ready sheet."
        buttonText="Book pricing walkthrough"
        buttonHref="/book-demo"
        secondaryText="Email hello@swoopgolf.com"
        secondaryHref="mailto:hello@swoopgolf.com"
        note="We reserve five pricing walkthroughs per week for private clubs."
      />
    </div>
  )
}
