import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Demo walkthroughs showing retention, demand, staffing, and board impact outcomes.',
  path: '/case-studies',
})

const cards = [
  {
    name: 'Oakmont Hills',
    stat: '6-day early warning · $22K ARR protected',
    note: 'Member save playbook from complaint aging + spend decay signals.',
    href: '/case-studies/oakmont-hills',
  },
  {
    name: 'Foothills Club',
    stat: '90% retention-linked fill rate',
    note: 'Routing replaced FIFO and improved high-risk slot recovery.',
    href: '/book-demo',
  },
  {
    name: 'Coastal Links',
    stat: '59% member wait reduction',
    note: 'Forecast-led staffing edits stabilized lunch service windows.',
    href: '/book-demo',
  },
  {
    name: 'Ironwood Reserve',
    stat: '$214K annualized attributed value',
    note: 'Board reporting tied interventions to pipeline and retention outcomes.',
    href: '/book-demo',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Case studies</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Demo Walkthroughs</h1>
          <p className="mt-4 text-lg text-swoop-muted">Practical examples of how Monday workflows create measurable outcomes by Friday.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <article key={card.name} className="rounded-2xl border border-swoop-border bg-white p-6">
              <h2 className="text-2xl font-bold">{card.name}</h2>
              <p className="mt-2 text-sm font-semibold">{card.stat}</p>
              <p className="mt-3 text-sm text-swoop-muted">{card.note}</p>
              <Link href={card.href} className="mt-5 inline-flex text-sm font-semibold text-swoop-accent">Open walkthrough →</Link>
            </article>
          ))}
        </div>
      </section>

      <CTASection headline="Want your own walkthrough?" subtext="We can run the same format with your operating assumptions." />
    </div>
  )
}
