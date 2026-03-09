export default function MetricCalloutStrip({ metrics = [], className = '' }) {
  if (!metrics.length) return null

  const baseClasses = 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
  const classes = [baseClasses, className].filter(Boolean).join(' ')
  const defaultContext = 'Demo data — Oakmont Hills CC (Jan 2026)'

  return (
    <div className={classes}>
      {metrics.map((metric) => (
        <div
          key={`${metric.label}-${metric.value}`}
          className="bg-swoop-card border border-swoop-border rounded-xl p-5 flex flex-col gap-1"
        >
          <p className="text-3xl font-mono font-bold text-swoop-dark">{metric.value}</p>
          <p className="text-sm font-semibold text-swoop-muted">{metric.label}</p>
          {metric.detail && <p className="text-xs text-swoop-muted/80">{metric.detail}</p>}
          <span className="mt-2 inline-flex w-fit rounded-full border border-swoop-border bg-white px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-swoop-muted/80">
            {metric.context || defaultContext}
          </span>
        </div>
      ))}
    </div>
  )
}
