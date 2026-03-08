const items = [
  '28 System Integrations',
  'Live in Under 2 Weeks',
  'No Rip-and-Replace',
  'SOC 2 on Roadmap',
]

export default function TrustStrip() {
  return (
    <div className="py-6 border-y border-swoop-border">
      <div className="max-w-container mx-auto px-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-swoop-muted">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            {i > 0 && <span className="hidden sm:inline text-swoop-border">·</span>}
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
