export default function DemoDisclosure({ label = 'Demo data scenario — Oakmont Hills CC (Jan 2026)', tone = 'light', className = '' }) {
  const toneClasses = tone === 'dark' ? 'text-white/70' : 'text-swoop-muted/75'
  const spacing = className || 'mt-3'

  return (
    <p className={`${spacing} text-[11px] font-semibold uppercase tracking-widest ${toneClasses}`}>
      {label}
    </p>
  )
}
