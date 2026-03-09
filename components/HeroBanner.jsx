import Link from 'next/link'
import Image from 'next/image'

export default function HeroBanner({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  backgroundImage,
  backgroundPriority = false,
  children,
}) {
  return (
    <section className="py-16 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            sizes="100vw"
            priority={backgroundPriority}
            className="object-cover blur-sm"
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
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-base sm:text-lg text-swoop-muted mb-8 max-w-xl">
              {description}
            </p>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            {primaryAction && (
              <Link
                href={primaryAction.href}
                className="px-7 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition w-full sm:w-auto text-center flex items-center justify-center min-h-[48px]"
              >
                {primaryAction.label}
              </Link>
            )}
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="px-7 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition w-full sm:w-auto text-center flex items-center justify-center min-h-[48px]"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
        {children && (
          <div className="max-w-4xl mx-auto w-full">
            {children}
          </div>
        )}
      </div>
      {stats.length > 0 && (
        <div className="max-w-container mx-auto mt-12 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-mono text-swoop-muted">
            {stats.map((stat) => (
              <span key={stat}>{stat}</span>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
