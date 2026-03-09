import Link from 'next/link'

export default function StickyCTA({
  href = '/book-demo',
  title = 'See Swoop on your club data',
  description = 'Book a 30-minute walkthrough.',
  ctaLabel = 'Book a Demo',
}) {
  return (
    <div className="sticky bottom-6 z-30 px-6">
      <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-swoop-dark/95 text-white shadow-2xl backdrop-blur">
        <div className="flex flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold">{title}</p>
            <p className="text-sm text-white/70">{description}</p>
          </div>
          <Link href={href} className="inline-flex items-center justify-center rounded-lg bg-swoop-accent px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#f5a44e]">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
