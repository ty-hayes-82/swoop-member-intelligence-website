import Link from 'next/link'
import CTASection from '@/components/CTASection'

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
          <Link href="/case-studies/oakmont-hills" className="block bg-swoop-card border border-swoop-border rounded-xl p-8 hover:shadow-lg transition group">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-bold text-swoop-accent uppercase tracking-wider mb-1">Featured Case Study</p>
                <h2 className="text-2xl font-bold group-hover:text-swoop-accent transition">The James Whitfield Story</h2>
                <p className="text-swoop-muted">Oakmont Hills CC · 300 members · Scottsdale, AZ</p>
              </div>
              <span className="text-sm text-swoop-accent font-medium">Read the full story →</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-swoop-bg rounded-lg p-4 text-center">
                <p className="font-mono text-2xl font-bold text-red-500">$22K</p>
                <p className="text-xs text-swoop-muted mt-1">Annual dues lost</p>
              </div>
              <div className="bg-swoop-bg rounded-lg p-4 text-center">
                <p className="font-mono text-2xl font-bold text-swoop-green">6 days</p>
                <p className="text-xs text-swoop-muted mt-1">Early warning from Swoop</p>
              </div>
              <div className="bg-swoop-bg rounded-lg p-4 text-center">
                <p className="font-mono text-2xl font-bold text-swoop-accent">3 systems</p>
                <p className="text-xs text-swoop-muted mt-1">Connected to catch the signal</p>
              </div>
            </div>
          </Link>
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
