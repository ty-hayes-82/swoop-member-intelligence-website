export default function TestimonialHighlight() {
  const testimonials = [
    {
      quote: 'We used this exact scenario in Monday committee prep and caught two resignations before they landed.',
      person: 'A. Torres',
      role: 'GM, Desert Ridge Club',
      metric: '2 resignations prevented in 5 days',
    },
    {
      quote: 'The service recovery list gave us cleaner ownership handoffs than our old spreadsheet board packet.',
      person: 'M. Reece',
      role: 'COO, Harbour Town CC',
      metric: '3 recoveries closed same week',
    },
    {
      quote: 'Routing based on member health changed who got prime slots and improved repeat booking confidence.',
      person: 'L. Bennett',
      role: 'Head of Golf, Oakmont Hills GC',
      metric: '87% tee sheet fill by Monday noon',
    },
  ]

  return (
    <section className="px-6">
      <div className="mx-auto max-w-container rounded-3xl border border-swoop-border bg-swoop-dark p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Founder testimony</p>
        <blockquote className="mt-3 text-xl leading-relaxed font-semibold">
          “Every Monday we run the Oakmont Hills demo live for GMs and boards. The retention lifts, waitlist recovery, and staffing saves on this site come directly from that environment.”
        </blockquote>
        <p className="mt-2 text-sm text-white/80">Ty Hayes — Founder, Swoop Golf</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((entry) => (
            <article key={entry.person} className="responsive-card rounded-2xl border border-white/20 bg-white/5 p-5">
              <span className="inline-flex rounded-full border border-white/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">
                Demo scenario
              </span>
              <p className="mt-3 text-sm leading-relaxed text-white/90">“{entry.quote}”</p>
              <p className="mt-3 text-xs text-white/70">{entry.person} — {entry.role}</p>
              <p className="mt-3 text-base font-semibold text-white">{entry.metric}</p>
              <p className="text-[11px] uppercase tracking-widest text-white/60">Demo data</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
