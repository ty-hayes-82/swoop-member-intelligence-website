import Image from 'next/image'

const demoScreenshot = {
  src: '/screenshots/agent-command.png',
  alt: 'Agent Command approvals view',
}

export default function VideoPlaceholder({ className = '' }) {
  return (
    <section className={`video-placeholder ${className}`.trim()} aria-label="Swoop demo walkthrough">
      <div className="video-placeholder__frame">
        <Image
          src={demoScreenshot.src}
          alt={demoScreenshot.alt}
          fill
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
          className="video-placeholder__image"
        />
        <div className="video-placeholder__overlay">
          <div className="video-placeholder__play" aria-hidden="true">
            <span className="video-placeholder__triangle" />
          </div>
          <p className="video-placeholder__title">See Swoop in Action — 30s Demo</p>
          <span className="video-placeholder__badge">Live walkthrough capture</span>
        </div>
      </div>
    </section>
  )
}
