export default function TrustedBetaStrip() {
  const clubs = ['Pinetree CC', 'Oakmont Hills GC', 'Desert Ridge Club', 'Harbour Town CC']

  return (
    <section className="trusted-beta-strip px-6" aria-label="Trusted beta clubs">
      <div className="trusted-beta-strip__inner mx-auto max-w-container rounded-2xl border border-swoop-border bg-white">
        <p className="trusted-beta-strip__headline">Trusted by 12+ beta clubs nationwide</p>
        <div className="trusted-beta-strip__logos" role="list" aria-label="Beta club logos">
          {clubs.map((club) => (
            <span key={club} role="listitem" className="trusted-beta-strip__logo">
              {club}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
