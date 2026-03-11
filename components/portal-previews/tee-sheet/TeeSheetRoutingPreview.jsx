'use client'

const queueRows = [
  { name: 'James Whitfield', score: 42, fifo: 4, routed: 1, impact: '$4.3K' },
  { name: 'Carter Singh', score: 55, fifo: 2, routed: 2, impact: '$2.1K' },
  { name: 'Lisa Chen', score: 71, fifo: 1, routed: 3, impact: '$0.9K' },
]

export default function TeeSheetRoutingPreview() {
  return (
    <section className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-3">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-700">Fill Rate</p>
          <p className="text-lg font-bold text-emerald-800">94%</p>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-700">Risk Holds</p>
          <p className="text-lg font-bold text-amber-800">3 members</p>
        </div>
        <div className="rounded-lg border border-swoop-border bg-swoop-bg px-3 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-swoop-muted">Dues Protected</p>
          <p className="text-lg font-bold text-swoop-dark">$7.3K</p>
        </div>
      </div>
      <div className="rounded-xl border border-swoop-border bg-white p-3">
        <div className="grid grid-cols-[1.8fr_0.7fr_0.8fr_0.8fr_0.8fr] gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-swoop-muted">
          <span>Member</span>
          <span>Score</span>
          <span>FIFO</span>
          <span>Routed</span>
          <span>Impact</span>
        </div>
        <div className="mt-2 space-y-2">
          {queueRows.map((row) => (
            <div key={row.name} className="grid grid-cols-[1.8fr_0.7fr_0.8fr_0.8fr_0.8fr] gap-2 rounded-lg border border-swoop-border px-2 py-2 text-xs">
              <span className="truncate font-semibold text-swoop-dark">{row.name}</span>
              <span className="font-semibold text-swoop-dark">{row.score}</span>
              <span className="text-swoop-muted">#{row.fifo}</span>
              <span className="font-semibold text-emerald-700">#{row.routed}</span>
              <span className="font-semibold text-swoop-dark">{row.impact}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
