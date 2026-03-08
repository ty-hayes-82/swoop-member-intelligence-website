import Link from 'next/link'

export default function CTASection({
  headline = 'See what your club misses today.',
  subtext = 'Book a live walkthrough with your own operating scenarios.',
  buttonText = 'Book a Demo',
  buttonHref = '/book-demo',
}) {
  return (
    <section className="bg-swoop-dark py-20 px-6">
      <div className="max-w-container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{headline}</h2>
        <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">{subtext}</p>
        <Link
          href={buttonHref}
          className="inline-block px-8 py-3.5 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition text-base"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
