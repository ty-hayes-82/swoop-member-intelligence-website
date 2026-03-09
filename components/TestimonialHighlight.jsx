export default function TestimonialHighlight() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-container rounded-3xl border border-swoop-border bg-swoop-dark p-8 text-white md:flex md:items-center md:gap-10">
        <div className="flex-1 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Founder testimony</p>
          <blockquote className="text-xl leading-relaxed font-semibold">
            “Every Monday we run the Oakmont Hills demo live for GMs and boards. The retention lifts, waitlist recovery, and staffing saves you see on this site come directly from that environment — no stock photos, no make-believe.”
          </blockquote>
          <p className="text-sm text-white/80">Ty Hayes — Founder, Swoop Golf</p>
        </div>
        <div className="mt-6 flex-1 rounded-2xl border border-white/20 bg-white/5 p-6 text-sm text-white/80 md:mt-0">
          <p className="font-semibold uppercase tracking-widest text-[11px] text-white/70">What you can trust</p>
          <ul className="mt-3 space-y-2">
            <li>• Metrics marked “Demo data” are from the Oakmont Hills CC environment (January 2026).</li>
            <li>• Screenshots are real product UI captured from the current release.</li>
            <li>• Schedules, forms, and workflows route directly to the Swoop team.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
