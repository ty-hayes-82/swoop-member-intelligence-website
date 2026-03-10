'use client'

import { useMemo, useState } from 'react'

const connections = [
  { vendor: 'Leading tee sheet platforms', category: 'Tee sheet & booking', status: 'Connected', lastSync: '2m ago' },
  { vendor: 'Traditional club management suites', category: 'Club operations', status: 'Connected', lastSync: '9m ago' },
  { vendor: 'Dining POS + bar systems', category: 'Food & beverage', status: 'Syncing', lastSync: 'Live' },
  { vendor: 'Member CRM / communications', category: 'Engagement', status: 'Connected', lastSync: '12m ago' },
  { vendor: 'Payments & accounting stacks', category: 'Finance', status: 'Queued', lastSync: 'Waiting' },
  { vendor: 'Labor & payroll platforms', category: 'Staffing', status: 'Connected', lastSync: '35m ago' },
  { vendor: 'Custom CSV / API feeds', category: 'Data bridge', status: 'Syncing', lastSync: 'Live' },
]

const filters = ['All', 'Connected', 'Syncing', 'Queued']

const statusStyles = {
  Connected: 'bg-emerald-100 text-emerald-700',
  Syncing: 'bg-blue-100 text-blue-700',
  Queued: 'bg-amber-100 text-amber-700'
}

export default function IntegrationStatusGrid() {
  const [filter, setFilter] = useState('All')

  const rows = useMemo(() => {
    if (filter === 'All') return connections
    return connections.filter((row) => row.status === filter)
  }, [filter])

  return (
    <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-swoop-muted">Integrations</p>
          <h3 className="text-xl font-semibold">Live system status</h3>
          <p className="text-sm text-swoop-muted">Swoop connects to traditional club management, POS, staffing, and engagement platforms — no rip-and-replace required. Secure APIs and CSV fallback are both supported.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`px-4 py-2 text-sm rounded-full border font-medium transition ${
                filter === option
                  ? 'bg-swoop-dark text-white border-swoop-dark'
                  : 'border-swoop-border text-swoop-muted hover:border-swoop-dark'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {rows.map((row) => (
          <div key={row.vendor} className="border border-swoop-border rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-swoop-dark">{row.vendor}</p>
                <p className="text-xs text-swoop-muted">{row.category}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[row.status]}`}>
                {row.status}
              </span>
            </div>
            <p className="text-xs text-swoop-muted mt-3">Last sync: {row.lastSync}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
