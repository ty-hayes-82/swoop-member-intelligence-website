import Link from 'next/link'

export default function ProofStack({
  statLabel,
  statValue,
  demoLabel,
  quote,
  ctaLabel,
  ctaHref,
  children,
}) {
  return (
    <section className="px-6 py-16" aria-label="Proof stack">
      <div className="mx-auto grid max-w-container gap-4 md:grid-cols-4">
        <article className="rounded-2xl border border-swoop-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">{statLabel}</p>
          <p className="mt-3 text-3xl font-bold">{statValue}</p>
          <span className="mt-4 inline-flex rounded-full border border-swoop-border bg-swoop-bg px-2.5 py-1 text-[11px] font-semibold text-swoop-muted">
            Demo data
          </span>
        </article>

        <article className="rounded-2xl border border-swoop-border bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-swoop-muted">{demoLabel}</p>
          <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">{children}</div>
        </article>

        <blockquote className="rounded-2xl border border-swoop-border bg-white p-6 text-sm leading-relaxed text-swoop-muted">
          “{quote}”
        </blockquote>

        <article className="flex rounded-2xl border border-swoop-border bg-swoop-dark p-6 text-white">
          <div className="mt-auto space-y-3">
            <p className="text-sm text-white/75">Want this view for your club data?</p>
            <Link
              href={ctaHref}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-swoop-accent px-4 py-2 text-sm font-semibold text-swoop-dark transition hover:opacity-90"
            >
              {ctaLabel}
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
