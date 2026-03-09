'use client'

const chips = [
  { label: 'At-risk members', value: '23' },
  { label: 'Tee sheet fill', value: '87%' },
  { label: 'F&B covers', value: '340' },
  { label: 'Labor call-outs', value: '2' },
  { label: 'Service recoveries', value: '3' },
]

export default function MorningBriefingPreview() {
  return (
    <div className="responsive-card bg-swoop-dark text-white rounded-2xl p-6 border border-white/10 shadow-lg">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">Morning Briefing</p>
      <h3 className="text-2xl font-semibold mt-2">Monday 7:15 AM performance pulse</h3>
      <p className="text-white/70 text-sm mb-4">Live operating metrics for first-huddle decisions.</p>
      <div className="stat-chip-row mb-5">
        {chips.map((chip) => (
          <div key={chip.label} className="stat-chip stat-chip--dark">
            <span className="stat-chip__label">{chip.label}</span>
            <span className="stat-chip__value">{chip.value}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white/5 p-4 text-sm text-white/85">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">GM action queue</p>
        <ul className="mt-3 space-y-2">
          <li>• 23 at-risk members routed to outreach by 9:30 AM.</li>
          <li>• Tee sheet is 87% filled with 14 premium slots still open.</li>
          <li>• F&B pacing projects 340 covers if floor staffing holds.</li>
          <li>• Labor optimizer recommends backfill for 2 call-outs.</li>
          <li>• 3 service recoveries pending owner follow-up today.</li>
        </ul>
      </div>
    </div>
  )
}
