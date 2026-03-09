export default function VideoPlaceholder({ className = '' }) {
  return (
    <section className={`video-placeholder ${className}`.trim()} aria-label="Swoop demo video placeholder">
      <div className="video-placeholder__frame">
        <div className="video-placeholder__overlay">
          <div className="video-placeholder__play" aria-hidden="true">
            <span className="video-placeholder__triangle" />
          </div>
          <p className="video-placeholder__title">See Swoop in Action — 30s Demo</p>
          <span className="video-placeholder__badge">Coming soon</span>
        </div>
      </div>
    </section>
  )
}
