import Link from 'next/link'

export default function LensCard({ href, icon, title, description, colorClass = '', bgClass = '' }) {
  return (
    <Link
      href={href}
      className={`block bg-swoop-card border border-swoop-border rounded-xl p-6 border-l-4 ${colorClass} hover:shadow-lg transition group`}
    >
      <div className={`w-12 h-12 ${bgClass} rounded-lg flex items-center justify-center text-2xl mb-3`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-swoop-accent transition">{title}</h3>
      <p className="text-sm text-swoop-muted leading-relaxed">{description}</p>
      <span className="inline-block mt-3 text-sm text-swoop-accent font-medium">Learn more →</span>
    </Link>
  )
}
