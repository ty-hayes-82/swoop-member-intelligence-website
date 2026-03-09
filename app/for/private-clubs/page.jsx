import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { AtRiskRosterMock, GmScriptCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'For Private Clubs',
  description: 'Operational intelligence for private clubs with retention and service pressure.',
  path: '/for/private-clubs',
})

export default function PrivateClubsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <h1 className="text-4xl font-bold md:text-5xl">Private clubs: protect relationships before they go dark.</h1>
          <p className="mt-4 text-lg text-swoop-muted">Vertical proof: 21% retention lift and 18-hour average follow-up on high-risk members.</p>
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-2">
          <AtRiskRosterMock />
          <GmScriptCard />
        </div>
      </section>
      <CTASection headline="Run the private-club playbook with your scenarios." />
    </div>
  )
}
