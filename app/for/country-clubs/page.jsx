import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { PostRoundConversionMock, ServiceFailureBlock } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'For Country Clubs',
  description: 'Cross-domain intelligence for golf, dining, events, and member retention.',
  path: '/for/country-clubs',
})

const countryClubFaqs = [
  { q: 'What do we monitor on Mondays?', a: 'Golf demand, dining reservations, event RSVPs, and service gaps so every amenity is staffed correctly.' },
  { q: 'How do departments collaborate?', a: 'Swoop routes cross-team tasks — golf triggers a dining prep alert, dining flags service issues back to the GM, etc.' },
  { q: 'Can we prove ROI across amenities?', a: 'Yes. The platform tracks dues protected, incremental dining covers, and labor savings per intervention.' },
  { q: 'Does this work with our existing POS + tee sheet?', a: 'Yes. We integrate the data feeds and layer intelligence on top.' },
]

export default function CountryClubsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <h1 className="text-4xl font-bold md:text-5xl">Country clubs: coordinate golf, dining, and service in one board view.</h1>
          <p className="mt-4 text-lg text-swoop-muted">Vertical proof: +12 point post-round conversion and 14-point service-level gain across peak windows.</p>
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-container space-y-6">
          <PostRoundConversionMock />
          <ServiceFailureBlock />
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday coordination</p>
            <h3 className="mt-2 text-2xl font-bold">Multi-amenity standup</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Review golf demand + cancellation exposure.</li>
              <li>• See dining reservations and predicted no-shows.</li>
              <li>• Lock staffing adjustments before noon.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday recap</p>
            <h3 className="mt-2 text-2xl font-bold">Member experience proof</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Conversion gains across golf → dining funnels.</li>
              <li>• Service incidents resolved vs. outstanding.</li>
              <li>• Labor efficiency and cost per outlet.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
          <h3 className="mt-3 text-2xl font-bold">Multi-amenity command board</h3>
          <p className="mt-3 text-swoop-muted">Combines tee sheet, dining, locker room, event, and spa signals so you can orchestrate the entire property.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Golf demand</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Dining &amp; bar</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Events</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">Service tickets</div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Country club FAQs</h2>
          <div className="mt-6 space-y-4">
            {countryClubFaqs.map((faq) => (
              <article key={faq.q} className="border-b border-swoop-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Book a Demo for your country club" subtext="We&apos;ll connect golf, dining, and service data to show the full coordination stack." />
    </div>
  )
}
