const DEFAULT_SCHEDULER_URL = 'https://calendly.com/swoopgolf/club-intelligence-walkthrough'

export default function SchedulerEmbed({
  url,
  title = 'Pick a 30-minute slot',
  description = 'Live availability updates automatically. Choose a time that works and we will confirm instantly.',
  className = '',
}) {
  const schedulerUrl = (url || process.env.NEXT_PUBLIC_SCHEDULER_URL || DEFAULT_SCHEDULER_URL).trim()
  const normalizedUrl = schedulerUrl.startsWith('http') ? schedulerUrl : `https://${schedulerUrl}`
  const iframeSrc = `${normalizedUrl}${normalizedUrl.includes('?') ? '&' : '?'}hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1F2F24`
  const wrapperClasses = ['rounded-2xl border border-swoop-border bg-white p-6', className].filter(Boolean).join(' ')

  return (
    <div className={wrapperClasses}>
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Scheduler</p>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-swoop-muted">{description}</p>
      </div>
      <div className="mt-4 rounded-xl border border-swoop-border bg-swoop-bg/60 p-1">
        <iframe
          title="Swoop demo scheduler"
          src={iframeSrc}
          className="h-[520px] w-full rounded-[18px] border-0"
          allowFullScreen
        />
      </div>
      <p className="mt-2 text-center text-[11px] uppercase tracking-widest text-swoop-muted">Powered by Calendly</p>
    </div>
  )
}
