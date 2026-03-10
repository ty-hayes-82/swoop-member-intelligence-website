import Link from 'next/link'

export default function CTASection({
  headline = 'See what your club misses today.',
  subtext = 'Book a live walkthrough with your own operating scenarios.',
  note = null,
}) {
  return (
    <section className="bg-swoop-dark py-16 px-6" data-animate="fade-up">
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{headline}</h2>
        <p className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">{subtext}</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/book-demo"
            className="inline-flex px-8 py-3.5 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition text-base touch-target"
          >
            Book a Demo
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-white/80 underline underline-offset-4">
            See Pricing
          </Link>
        </div>
        {note && <p className="mt-4 text-sm text-white/70">{note}</p>}
      </div>
    </section>
  )
}
