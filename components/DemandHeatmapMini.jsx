'use client'

import { useMemo, useState } from 'react'

const windows = ['6-8 AM', '8-10 AM', '10-12 PM', '12-2 PM']

const heatmap = [
  {
    day: 'Mon',
    slots: [
      { window: '6-8 AM', fill: 0.78, cancellations: 2, waitlist: 11, recommendation: 'Open to walk-ups after 7:30 AM.' },
      { window: '8-10 AM', fill: 0.93, cancellations: 1, waitlist: 19, recommendation: 'Hold 2 retention-priority members.' },
      { window: '10-12 PM', fill: 0.64, cancellations: 5, waitlist: 6, recommendation: 'Push dining + F&B offers to midday members.' },
      { window: '12-2 PM', fill: 0.58, cancellations: 7, waitlist: 4, recommendation: 'Move Service Recovery follow-ups here.' },
    ]
  },
  {
    day: 'Tue',
    slots: [
      { window: '6-8 AM', fill: 0.85, cancellations: 3, waitlist: 13, recommendation: 'Increase starter coverage by 1 associate.' },
      { window: '8-10 AM', fill: 0.97, cancellations: 0, waitlist: 24, recommendation: 'Peak demand. Protect top 3 members first.' },
      { window: '10-12 PM', fill: 0.72, cancellations: 4, waitlist: 8, recommendation: 'Send text nudges to Member Pulse list.' },
      { window: '12-2 PM', fill: 0.61, cancellations: 6, waitlist: 5, recommendation: 'Pair with F&B patio specials.' },
    ]
  },
  {
    day: 'Wed',
    slots: [
      { window: '6-8 AM', fill: 0.69, cancellations: 6, waitlist: 5, recommendation: 'Dial up women’s league invites.' },
      { window: '8-10 AM', fill: 0.91, cancellations: 1, waitlist: 17, recommendation: 'Lock in high-value members, backfill cancellations.' },
      { window: '10-12 PM', fill: 0.77, cancellations: 3, waitlist: 9, recommendation: 'Balance with F&B tasting lunch.' },
      { window: '12-2 PM', fill: 0.55, cancellations: 8, waitlist: 2, recommendation: 'Offer twilight upgrade credits.' },
    ]
  },
  {
    day: 'Thu',
    slots: [
      { window: '6-8 AM', fill: 0.82, cancellations: 4, waitlist: 12, recommendation: 'Service Recovery follow-ups needed at 7:10 AM slot.' },
      { window: '8-10 AM', fill: 0.95, cancellations: 1, waitlist: 21, recommendation: 'Demand Optimizer suggests retention queue.' },
      { window: '10-12 PM', fill: 0.88, cancellations: 2, waitlist: 15, recommendation: 'Shift two tee times to junior clinic overflow.' },
      { window: '12-2 PM', fill: 0.63, cancellations: 5, waitlist: 4, recommendation: 'Bundle lunch + range sessions.' },
    ]
  },
  {
    day: 'Fri',
    slots: [
      { window: '6-8 AM', fill: 0.87, cancellations: 2, waitlist: 18, recommendation: 'Hold 1 slot for resigning-risk member.' },
      { window: '8-10 AM', fill: 0.99, cancellations: 0, waitlist: 26, recommendation: 'Peak day. Trigger auto-fill + SMS confirmations.' },
      { window: '10-12 PM', fill: 0.92, cancellations: 1, waitlist: 14, recommendation: 'Add cart staging + beverage cart coverage.' },
      { window: '12-2 PM', fill: 0.74, cancellations: 3, waitlist: 6, recommendation: 'Direct groups to F&B patio for upsell.' },
    ]
  },
  {
    day: 'Sat',
    slots: [
      { window: '6-8 AM', fill: 0.94, cancellations: 1, waitlist: 23, recommendation: 'Lock Member Pulse top 5 into tee times.' },
      { window: '8-10 AM', fill: 1.0, cancellations: 0, waitlist: 30, recommendation: 'Add starter + marshal coverage, zero slack.' },
      { window: '10-12 PM', fill: 0.96, cancellations: 0, waitlist: 20, recommendation: 'Offer dining follow-up for foursomes.' },
      { window: '12-2 PM', fill: 0.83, cancellations: 2, waitlist: 11, recommendation: 'Extend beverage cart run, push twilight packages.' },
    ]
  },
  {
    day: 'Sun',
    slots: [
      { window: '6-8 AM', fill: 0.73, cancellations: 5, waitlist: 9, recommendation: 'Promote family tee program.' },
      { window: '8-10 AM', fill: 0.9, cancellations: 2, waitlist: 16, recommendation: 'Balance between tee sheet + dining brunch demand.' },
      { window: '10-12 PM', fill: 0.86, cancellations: 2, waitlist: 12, recommendation: 'Target resigning-risk list with concierge outreach.' },
      { window: '12-2 PM', fill: 0.68, cancellations: 4, waitlist: 5, recommendation: 'Bundle junior academy invites.' },
    ]
  }
]

function colorForFill(fill) {
  if (fill >= 0.95) return 'bg-emerald-500 text-white'
  if (fill >= 0.85) return 'bg-emerald-300 text-swoop-dark'
  if (fill >= 0.7) return 'bg-amber-200 text-swoop-dark'
  return 'bg-rose-200 text-swoop-dark'
}

export default function DemandHeatmapMini() {
  const defaultSlot = useMemo(() => ({ ...heatmap[4].slots[1], day: 'Fri' }), [])
  const [selectedSlot, setSelectedSlot] = useState(defaultSlot)

  return (
    <div className="bg-swoop-card border border-swoop-border rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-wide text-swoop-muted">Demand heatmap</p>
        <h3 className="text-xl font-semibold">Where retention actions hit hardest</h3>
        <p className="text-sm text-swoop-muted">Hover or tap a block to preview fill rate, cancellations, and what Swoop recommends.</p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[520px]">
          <div className="grid grid-cols-[80px_repeat(4,minmax(0,1fr))] gap-2 text-xs font-medium text-swoop-muted mb-2">
            <div></div>
            {windows.map((window) => (
              <div key={window} className="text-center">{window}</div>
            ))}
          </div>
          <div className="space-y-2">
            {heatmap.map((day) => (
              <div key={day.day} className="grid grid-cols-[80px_repeat(4,minmax(0,1fr))] gap-2 items-center">
                <div className="text-sm font-semibold text-swoop-dark">{day.day}</div>
                {day.slots.map((slot) => {
                  const color = colorForFill(slot.fill)
                  const isActive = selectedSlot.day === day.day && selectedSlot.window === slot.window
                  return (
                    <button
                      key={slot.window}
                      type="button"
                      onMouseEnter={() => setSelectedSlot({ ...slot, day: day.day })}
                      onFocus={() => setSelectedSlot({ ...slot, day: day.day })}
                      onClick={() => setSelectedSlot({ ...slot, day: day.day })}
                      className={`rounded-xl px-2 py-3 text-center transition border ${isActive ? 'ring-2 ring-offset-2 ring-swoop-dark border-transparent' : 'border-transparent hover:border-swoop-dark/40' } ${color}`}
                    >
                      <p className="text-xs font-semibold">{Math.round(slot.fill * 100)}%</p>
                      <p className="text-[10px] text-black/70">{slot.waitlist} on list</p>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 border border-swoop-border rounded-2xl p-4 bg-white">
        <p className="text-xs uppercase tracking-wide text-swoop-muted">{selectedSlot.day} · {selectedSlot.window}</p>
        <p className="text-2xl font-semibold mt-1">{Math.round(selectedSlot.fill * 100)}% full</p>
        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <p className="text-swoop-muted">Cancellations expected</p>
            <p className="font-semibold">{selectedSlot.cancellations}</p>
          </div>
          <div>
            <p className="text-swoop-muted">Waitlist members</p>
            <p className="font-semibold">{selectedSlot.waitlist}</p>
          </div>
        </div>
        <p className="text-sm text-swoop-muted mt-4">{selectedSlot.recommendation}</p>
      </div>
    </div>
  )
}
