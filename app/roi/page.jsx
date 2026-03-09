import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import RoiModePanel from '@/components/RoiModePanel'
import { RetentionValueCalculator } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'ROI',
  description: 'Model save-vs-grow outcomes across retention and upsell workflows.',
  path: '/roi',
})

export default function RoiPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">ROI</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Save vs Grow</h1>
          <p className="mt-4 text-lg text-swoop-muted">Toggle between retention protection and upsell expansion models.</p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <RoiModePanel />
        </div>
      </section>

      <ProofStack
        statLabel="Average modeled impact"
        statValue="$168.4K"
        demoLabel="ROI preview"
        quote="The toggle made downside protection and upside growth clear for ownership in one slide."
        ctaLabel="Book ROI review"
        ctaHref="/book-demo"
      >
        <RetentionValueCalculator />
      </ProofStack>

      <CTASection headline="Want this model with your assumptions?" subtext="We calculate Save and Grow scenarios side-by-side." />
    </div>
  )
}
