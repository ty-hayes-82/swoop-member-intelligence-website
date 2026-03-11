import Link from 'next/link'

export default function CapabilityCard({ href, icon, title, description, colorClass = '', bgClass = '' }) {
  return (
    <Link
      href={href}
      className={`flex flex-col h-full bg-swoop-card border border-swoop-border rounded-xl p-6 border-l-4 ${colorClass} hover:shadow-lg transition group`}
    >
      <div className={`w-12 h-12 ${bgClass} rounded-lg flex items-center justify-center text-2xl mb-3 flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold group-hover:text-swoop-accent transition">{title}</h3>
        <p className="text-sm text-swoop-muted leading-relaxed">{description}</p>
      </div>
      <span className="inline-flex items-center gap-2 mt-4 text-sm text-swoop-accent font-medium">Learn more →</span>
    </Link>
  )
}
