const items = [
  '28 System Integrations',
  'Live in Under 2 Weeks',
  'No Rip-and-Replace',
  'No Long-Term Contract',
]

export default function TrustStrip() {
  return (
    <div className="border-y border-swoop-border bg-swoop-bg/50 py-5">
      <div className="max-w-container mx-auto px-6 flex flex-wrap justify-center gap-x-5 gap-y-3">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-swoop-border bg-white px-4 py-1.5 text-sm font-medium text-swoop-dark"
          >
            <svg className="h-4 w-4 flex-shrink-0 text-swoop-green" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
