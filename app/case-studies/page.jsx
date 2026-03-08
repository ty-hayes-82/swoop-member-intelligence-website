import Link from 'next/link'
import CTASection from '@/components/CTASection'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies',
  description: 'See how Swoop surfaces retention risks, optimizes tee sheet yield, and connects operations to revenue. Demo scenario walkthroughs.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Case Studies</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">See what Swoop surfaces.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            These walkthroughs use simulated data from Oakmont Hills CC — a 300-member private club in Scottsdale. Real club results coming as founding partners onboard.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <CaseStudyCard
            href="/case-studies/oakmont-hills"
            eyebrow="Featured Case Study"
            title="The James Whitfield Story"
            subtitle="Oakmont Hills CC · 300 members · Scottsdale, AZ"
            stats={[
              { value: '$22K', label: 'Annual dues lost', color: 'text-red-500' },
              { value: '6 days', label: 'Early warning from Swoop', color: 'text-swoop-green' },
              { value: '3 systems', label: 'Connected to catch the signal', color: 'text-swoop-accent' },
            ]}
          />
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Founding Partner Case Studies — Coming Soon</h2>
          <p className="text-swoop-muted max-w-xl mx-auto mb-8">Our first 10 founding partner clubs will have full case studies published here with real metrics, real outcomes, and real GM quotes. Be one of them.</p>
          <Link href="/book-demo" className="inline-block px-8 py-3.5 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            Apply for Founding Partner
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
