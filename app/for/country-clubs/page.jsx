import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { PostRoundConversionMock, ServiceFailureBlock } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'For Country Clubs',
  description: 'Cross-domain intelligence for golf, dining, events, and member retention.',
  path: '/for/country-clubs',
})

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
      <CTASection headline="See a country-club workflow walkthrough." />
    </div>
  )
}
