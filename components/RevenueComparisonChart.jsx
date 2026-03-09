'use client'

import { useMemo, useState } from 'react'

const scenarios = {
  weekday: {
    label: 'Tuesday mornings',
    reactive: 187,
    retention: 312,
    detail: 'Underfilled tee sheet with back-to-back member departures.'
  },
  weekend: {
    label: 'Saturday prime time',
    reactive: 420,
    retention: 508,
    detail: 'High-demand queue. Retention routing prioritizes members at risk.'
  },
  dining: {
    label: 'Post-round dining',
    reactive: 88,
    retention: 143,
    detail: 'Service recovery adds incremental F&B per visit.'
  }
}

export default function RevenueComparisonChart() {
  const [scenario, setScenario] = useState('weekday')
  const data = scenarios[scenario]

  const delta = useMemo(() => data.retention - data.reactive, [data])

  const barScale = (value) => `${Math.min(100, (value / 520) * 100)}%`

  return (
    <div className="bg-swoop-card border border-swoop-border rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-swoop-muted">Revenue impact</p>
          <h3 className="text-xl font-semibold">Reactive vs retention-first</h3>
          <p className="text-sm text-swoop-muted">Switch scenarios to see how routing drives per-slot yield.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {Object.keys(scenarios).map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setScenario(key)}
              className={`px-4 py-2 text-sm rounded-full border font-medium transition ${
                scenario === key
                  ? 'bg-swoop-dark text-white border-swoop-dark'
                  : 'border-swoop-border text-swoop-muted hover:border-swoop-dark'
              }`}
            >
              {scenarios[key].label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {[{ label: 'Reactive', value: data.reactive, color: 'bg-slate-300' }, { label: 'Retention-first', value: data.retention, color: 'bg-swoop-green' }]
          .map((bar) => (
            <div key={bar.label}>
              <div className="flex items-center justify-between text-sm font-semibold text-swoop-muted">
                <span>{bar.label}</span>
                <span className="font-mono text-swoop-dark">${bar.value}</span>
              </div>
              <div className="h-3 bg-swoop-bg rounded-full overflow-hidden mt-1">
                <div className={`h-full ${bar.color}`} style={{ width: barScale(bar.value) }} />
              </div>
            </div>
          ))}
      </div>

      <div className="mt-4 text-sm text-swoop-muted">
        {data.detail}
      </div>
      <div className="mt-2 font-semibold text-swoop-dark">
        +${delta.toLocaleString(undefined, { minimumFractionDigits: 0 })} per slot with retention-first orchestration.
      </div>
    </div>
  )
}
