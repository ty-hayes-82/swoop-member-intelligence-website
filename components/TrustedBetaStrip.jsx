export default function TrustedBetaStrip() {
  const proofPoints = [
    { label: 'Demo environment', value: 'Oakmont Hills scenario (Jan 2026)' },
    { label: 'Founding Partner Program', value: 'Now enrolling 3 private clubs' },
    { label: 'Advisory councils', value: 'Scottsdale · Hilton Head · Phoenix' },
  ]

  return (
    <section className="trusted-beta-strip px-6" aria-label="Founding Partner disclosure">
      <div className="trusted-beta-strip__inner mx-auto max-w-container rounded-2xl border border-swoop-border bg-white">
        <p className="trusted-beta-strip__headline">Founding Partner Program</p>
        <p className="text-sm text-swoop-muted text-center px-6">
          Everything shown here runs on our live demo environment so GMs can see the playbooks before sharing their own data.
        </p>
        <div className="trusted-beta-strip__logos" role="list" aria-label="Founding partner proof points">
          {proofPoints.map((point) => (
            <span key={point.label} role="listitem" className="trusted-beta-strip__logo">
              <span className="block text-[11px] uppercase tracking-widest text-swoop-muted/80">{point.label}</span>
              <span className="font-semibold text-swoop-dark">{point.value}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
