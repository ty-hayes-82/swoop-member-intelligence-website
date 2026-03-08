import Link from 'next/link'

export default function HeroBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  backgroundImage,
  children,
}) {
  return (
    <section className="py-20 md:py-28 px-6 relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
      )}
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          {eyebrow && (
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">
              {eyebrow}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-swoop-muted mb-8 max-w-xl">
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="px-7 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition"
              >
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="px-7 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
        {children && (
          <div>
            {children}
          </div>
        )}
      </div>
      {stats.length > 0 && (
        <div className="max-w-container mx-auto mt-12 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-swoop-muted">
            {stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
