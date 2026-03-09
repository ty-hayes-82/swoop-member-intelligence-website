'use client'

import { useMemo, useState } from 'react'

const waitlistEntries = [
  {
    id: 1,
    name: 'James Whitfield',
    archetype: 'Board steward',
    health: 42,
    trend: '-18 pts in 10 days',
    annualValue: 22000,
    fifoPosition: 4,
    retentionPosition: 1,
    retentionImpact: 4300,
    reason: 'Complaint unresolved 6 days, dues renewal in 3 weeks',
    queueTime: '7:42 AM',
    label: 'Critical risk'
  },
  {
    id: 2,
    name: 'Lisa Chen',
    archetype: 'Weekday power user',
    health: 71,
    trend: '-4 pts in 30 days',
    annualValue: 9800,
    fifoPosition: 1,
    retentionPosition: 3,
    retentionImpact: 900,
    reason: 'High spend member, friction low',
    queueTime: '6:58 AM',
    label: 'Healthy'
  },
  {
    id: 3,
    name: 'Carter Singh',
    archetype: 'Emerging family',
    health: 55,
    trend: '-9 pts in 14 days',
    annualValue: 13600,
    fifoPosition: 2,
    retentionPosition: 2,
    retentionImpact: 2100,
    reason: 'Dropped junior clinic attendance, board referral',
    queueTime: '7:05 AM',
    label: 'At risk'
  },
  {
    id: 4,
    name: 'Maya Torres',
    archetype: 'Weekend warrior',
    health: 84,
    trend: '+2 pts in 30 days',
    annualValue: 7600,
    fifoPosition: 3,
    retentionPosition: 4,
    retentionImpact: 400,
    reason: 'Low churn probability, consistent play',
    queueTime: '7:15 AM',
    label: 'Stable'
  },
  {
    id: 5,
    name: 'Evan Patel',
    archetype: 'Dining focused',
    health: 63,
    trend: '-3 pts in 21 days',
    annualValue: 8900,
    fifoPosition: 5,
    retentionPosition: 5,
    retentionImpact: 700,
    reason: 'Dining-only impact, low tee sheet demand',
    queueTime: '7:55 AM',
    label: 'Watch list'
  },
]

const modes = {
  fifo: {
    label: 'Traditional FIFO waitlist',
    description: 'Order slots by who clicked first, regardless of member value or churn risk.'
  },
  retention: {
    label: 'Swoop retention-prioritized',
    description: 'Reorders the queue by predicted churn risk, dues impact, and service recovery deadlines.'
  }
}

const labelStyles = {
  'Critical risk': 'bg-rose-100 text-rose-600',
  'At risk': 'bg-amber-100 text-amber-700',
  Healthy: 'bg-emerald-100 text-emerald-700',
  Stable: 'bg-slate-100 text-slate-600',
  'Watch list': 'bg-indigo-100 text-indigo-700'
}

function currency(value) {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

export default function WaitlistSorterDemo() {
  const [mode, setMode] = useState('fifo')

  const orderedEntries = useMemo(() => {
    const key = mode === 'fifo' ? 'fifoPosition' : 'retentionPosition'
    return [...waitlistEntries].sort((a, b) => a[key] - b[key])
  }, [mode])

  const fifoValue = useMemo(() => {
    return waitlistEntries
      .filter((entry) => entry.fifoPosition <= 3)
      .reduce((sum, entry) => sum + entry.retentionImpact, 0)
  }, [])

  const retentionValue = useMemo(() => {
    return waitlistEntries
      .filter((entry) => entry.retentionPosition <= 3)
      .reduce((sum, entry) => sum + entry.retentionImpact, 0)
  }, [])

  const visibleValue = mode === 'fifo' ? fifoValue : retentionValue
  const delta = retentionValue - fifoValue

  return (
    <div className="bg-swoop-card border border-swoop-border rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-swoop-muted">Queue logic</p>
          <h3 className="text-xl font-semibold mt-1">{modes[mode].label}</h3>
          <p className="text-sm text-swoop-muted mt-1">{modes[mode].description}</p>
        </div>
        <div className="flex rounded-full border border-swoop-border overflow-hidden text-sm">
          {['fifo', 'retention'].map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setMode(key)}
              className={`px-4 py-2 font-medium transition ${
                mode === key
                  ? 'bg-swoop-dark text-white'
                  : 'text-swoop-muted hover:bg-swoop-border'
              }`}
            >
              {key === 'fifo' ? 'FIFO' : 'Retention'}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-swoop-dark text-white p-5">
        <p className="text-xs uppercase tracking-wide text-white/70">Annual dues protected in first 3 fills</p>
        <p className="text-3xl font-semibold mt-1">{currency(visibleValue)}</p>
        <p className="text-white/70 text-sm">Added impact: playtime + F&B commitments.</p>
        {delta > 0 && (
          <p className={`text-sm font-semibold mt-2 ${mode === 'retention' ? 'text-swoop-green' : 'text-white/60'}`}>
            {mode === 'retention' ? `+${currency(delta)} saved vs FIFO` : `${currency(delta)} left on the table`}
          </p>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {orderedEntries.map((entry, index) => (
          <div
            key={entry.id}
            className="border border-swoop-border rounded-2xl p-4 flex flex-col gap-3 md:flex-row md:items-center md:gap-6"
          >
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="h-10 w-10 rounded-full bg-swoop-dark text-white flex items-center justify-center font-semibold">
                {index + 1}
              </span>
              <div>
                <p className="font-semibold">{entry.name}</p>
                <p className="text-xs text-swoop-muted">{entry.archetype}</p>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-swoop-muted">Health score</p>
                <p className="font-semibold">{entry.health} <span className="text-xs text-swoop-muted">({entry.trend})</span></p>
              </div>
              <div>
                <p className="text-swoop-muted">Annual dues</p>
                <p className="font-semibold">{currency(entry.annualValue)}</p>
              </div>
              <div>
                <p className="text-swoop-muted">Queue time</p>
                <p className="font-semibold">{entry.queueTime}</p>
              </div>
              <div>
                <p className="text-swoop-muted">Retention impact</p>
                <p className="font-semibold">{currency(entry.retentionImpact)}</p>
              </div>
            </div>
            <div className="w-full md:w-48">
              <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ${labelStyles[entry.label]}`}>
                {entry.label}
              </span>
              <p className="text-xs text-swoop-muted mt-2">{entry.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
