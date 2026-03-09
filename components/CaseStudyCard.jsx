import Link from 'next/link'

export default function CaseStudyCard({ href, eyebrow, title, subtitle, stats = [] }) {
  return (
    <Link
      href={href}
      className="block bg-swoop-card border border-swoop-border rounded-xl p-8 hover:shadow-lg transition group"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>
          {eyebrow && (
            <p className="text-xs font-bold text-swoop-accent uppercase tracking-wider mb-1">{eyebrow}</p>
          )}
          <h2 className="text-2xl font-bold group-hover:text-swoop-accent transition">{title}</h2>
          {subtitle && <p className="text-swoop-muted">{subtitle}</p>}
        </div>
        <span className="text-sm text-swoop-accent font-medium">Read the full story →</span>
      </div>
      {stats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-swoop-bg rounded-lg p-4 text-center">
              <p className={`font-mono text-2xl font-bold ${stat.color || 'text-swoop-green'}`}>{stat.value}</p>
              <p className="text-xs text-swoop-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )}
    </Link>
  )
}
