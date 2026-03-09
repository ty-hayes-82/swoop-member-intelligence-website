import Link from 'next/link'

export default function ProofStack({
  statLabel,
  statValue,
  statContext = 'Demo data — Oakmont Hills CC (Jan 2026)',
  demoLabel,
  demoContext = 'Captured in current release',
  quote = null,
  quoteSource = 'Ty Hayes',
  quoteRole = 'Founder, Swoop Golf',
  ctaLabel,
  ctaHref,
  children,
  disclosure = 'Demo data scenario — Oakmont Hills CC (Jan 2026)',
}) {
  return (
    <section className="px-6 py-16" aria-label="Proof stack">
      <div className="mx-auto grid max-w-container gap-4 md:grid-cols-4">
        <article className="rounded-2xl border border-swoop-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">{statLabel}</p>
          <p className="mt-3 text-3xl font-bold">{statValue}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-swoop-muted/80">{statContext}</p>
        </article>

        <article className="rounded-2xl border border-swoop-border bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-swoop-muted">{demoLabel}</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">{children}</div>
          <p className="mt-3 text-[11px] uppercase tracking-widest text-swoop-muted/80">{demoContext}</p>
        </article>

        {quote && (
          <blockquote className="rounded-2xl border border-swoop-border bg-white p-6 text-sm leading-relaxed text-swoop-muted">
            “{quote}”
            <footer className="mt-4 text-[13px] font-semibold text-swoop-dark">
              {quoteSource}
              <span className="block text-xs font-normal text-swoop-muted">{quoteRole}</span>
            </footer>
          </blockquote>
        )}

        <article className="flex rounded-2xl border border-swoop-border bg-swoop-dark p-6 text-white">
          <div className="mt-auto space-y-3">
            <p className="text-sm text-white/75">Want this view for your club data?</p>
            <Link
              href={ctaHref}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-swoop-accent px-4 py-2 text-sm font-semibold text-swoop-dark transition hover:opacity-90"
            >
              {ctaLabel}
            </Link>
            <p className="text-[11px] uppercase tracking-widest text-white/50">{disclosure}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
