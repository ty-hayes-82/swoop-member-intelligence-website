'use client'

import { useMemo, useState } from 'react'

const memberRows = [
  { name: 'James Whitfield', archetype: 'Balanced Active', score: 42, trend: '-18 pts', dues: 22000, actions: 'GM call + service recovery', status: 'Critical' },
  { name: 'Anne Jordan', archetype: 'Weekend Warrior', score: 58, trend: '-9 pts', dues: 13600, actions: 'Hold Saturday slot, concierge invite', status: 'At Risk' },
  { name: 'Lisa Chen', archetype: 'Weekday Power', score: 74, trend: '+3 pts', dues: 9800, actions: 'No action needed', status: 'Healthy' },
  { name: 'Robert Callahan', archetype: 'Declining', score: 33, trend: '-12 pts', dues: 18000, actions: 'Dining check-in + GM lunch', status: 'Critical' },
  { name: 'Sara Mitchell', archetype: 'Social Butterfly', score: 61, trend: '-6 pts', dues: 12500, actions: 'Personal event invite', status: 'At Risk' },
]

const filters = ['All', 'At Risk', 'Critical']

const statusColors = {
  Healthy: 'text-swoop-green',
  'At Risk': 'text-amber-600',
  Critical: 'text-red-600',
}

export default function MemberTableDemo() {
  const [filter, setFilter] = useState('All')

  const rows = useMemo(() => {
    if (filter === 'All') return memberRows
    return memberRows.filter((row) => row.status === filter)
  }, [filter])

  return (
    <div className="bg-swoop-card border border-swoop-border rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-swoop-muted">Member pulse</p>
          <h3 className="text-xl font-semibold text-swoop-dark">Interactive risk table</h3>
          <p className="text-sm text-swoop-muted">Filter the table to see who needs intervention now.</p>
        </div>
        <div className="flex rounded-full border border-swoop-border overflow-hidden text-sm">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`px-4 py-2 font-medium transition ${
                filter === option ? 'bg-swoop-dark text-white' : 'text-swoop-muted hover:bg-swoop-border'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-swoop-muted text-xs uppercase tracking-wide">
              <th className="text-left pb-2">Member</th>
              <th className="text-left pb-2">Score</th>
              <th className="text-left pb-2">Trend</th>
              <th className="text-left pb-2">Annual dues</th>
              <th className="text-left pb-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-swoop-border/70">
            {rows.map((row) => (
              <tr key={row.name}>
                <td className="py-3">
                  <div className="font-semibold text-swoop-dark">{row.name}</div>
                  <div className="text-xs text-swoop-muted">{row.archetype}</div>
                </td>
                <td className="py-3">
                  <span className={`font-semibold ${statusColors[row.status]}`}>{row.score}</span>
                  <span className="text-xs text-swoop-muted ml-2">{row.status}</span>
                </td>
                <td className="py-3 text-swoop-muted">{row.trend}</td>
                <td className="py-3 font-mono text-swoop-dark">${row.dues.toLocaleString()}</td>
                <td className="py-3 text-swoop-muted">{row.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
