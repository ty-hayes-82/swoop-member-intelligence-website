import Link from 'next/link'

export default function PrimaryCTA({
  href = '/book-demo',
  label = 'Book a Demo',
  tone = 'light',
  className = '',
  fullWidth = false,
}) {
  const baseClasses = 'inline-flex min-h-[46px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition'
  const palette = tone === 'dark'
    ? 'bg-swoop-green text-swoop-dark hover:bg-swoop-green-hover focus-visible:ring-swoop-green'
    : 'bg-swoop-dark text-white hover:bg-swoop-dark/90 focus-visible:ring-swoop-dark'
  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <Link href={href} className={`${baseClasses} ${palette} ${widthClass} ${className}`.trim()}>
      {label}
    </Link>
  )
}
