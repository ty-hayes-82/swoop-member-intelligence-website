export default function MetricCalloutStrip({ metrics = [], className = '' }) {
  if (!metrics.length) return null

  const baseClasses = 'grid gap-4 sm:grid-cols-2 lg:grid-cols-4'
  const classes = [baseClasses, className].filter(Boolean).join(' ')

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
        </div>
      ))}
    </div>
  )
}
