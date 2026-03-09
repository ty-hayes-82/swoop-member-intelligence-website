'use client'

import { useEffect, useMemo, useState } from 'react'

const ZONES = [
  { id: 'golf', label: 'Golf Course', x: 15, y: 22 },
  { id: 'grill', label: 'Grill Room', x: 64, y: 28 },
  { id: 'fitness', label: 'Fitness', x: 24, y: 72 },
  { id: 'pool', label: 'Pool Deck', x: 73, y: 70 },
]

function buildDots(count) {
  return Array.from({ length: count }).map((_, idx) => {
    const zone = ZONES[idx % ZONES.length]
    return {
      id: idx,
      zoneId: zone.id,
      x: zone.x + (Math.random() * 12 - 6),
      y: zone.y + (Math.random() * 12 - 6),
      speed: 0.8 + Math.random() * 1.4,
    }
  })
}

export default function LocationHeatmapDemo({ compact = false }) {
  const [mode, setMode] = useState('live')
  const [dots, setDots] = useState(() => buildDots(compact ? 18 : 36))

  const alerts = useMemo(
    () => [
      { id: 'a1', label: 'Service alert: Grill wait > 21m', x: 66, y: 18 },
      { id: 'a2', label: 'High-value member near Pool Deck', x: 70, y: 83 },
      { id: 'a3', label: 'Starter bottleneck in 12 min', x: 16, y: 10 },
    ],
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) =>
        prev.map((dot) => {
          const nextZone = ZONES[(ZONES.findIndex((z) => z.id === dot.zoneId) + 1 + Math.floor(Math.random() * 2)) % ZONES.length]
          const variance = mode === 'replay' ? 4 : 10
          return {
            ...dot,
            zoneId: nextZone.id,
            x: nextZone.x + (Math.random() * variance - variance / 2),
            y: nextZone.y + (Math.random() * variance - variance / 2),
          }
        })
      )
    }, mode === 'live' ? 1400 : 2000)

    return () => clearInterval(interval)
  }, [mode])

  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 shadow-lg">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Location Intelligence Demo</p>
          <p className="text-sm text-swoop-muted">Member flow across golf, dining, and amenity zones.</p>
        </div>
        <div className="inline-flex rounded-lg border border-swoop-border bg-swoop-bg p-1 text-xs">
          <button
            type="button"
            onClick={() => setMode('live')}
            className={`rounded px-3 py-1.5 font-semibold ${mode === 'live' ? 'bg-[#4ADE80] text-black' : 'text-swoop-muted'}`}
          >
            Live
          </button>
          <button
            type="button"
            onClick={() => setMode('replay')}
            className={`rounded px-3 py-1.5 font-semibold ${mode === 'replay' ? 'bg-[#F3922D] text-black' : 'text-swoop-muted'}`}
          >
            Replay
          </button>
        </div>
      </div>

      <div className={`relative overflow-hidden rounded-xl border border-[#1F2F24]/30 bg-gradient-to-br from-[#1F2F24] via-[#223a2d] to-black ${compact ? 'h-[260px]' : 'h-[360px]'}`}>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(74,222,128,0.2), transparent 35%), radial-gradient(circle at 80% 70%, rgba(243,146,45,0.3), transparent 40%)' }} />

        {ZONES.map((zone) => (
          <div
            key={zone.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border border-white/30 bg-black/30 px-2 py-1 text-[11px] text-white"
            style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
          >
            {zone.label}
          </div>
        ))}

        {dots.map((dot) => (
          <span
            key={dot.id}
            className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4ADE80] shadow-[0_0_12px_rgba(74,222,128,0.9)] transition-all duration-1000"
            style={{ left: `${dot.x}%`, top: `${dot.y}%`, transitionDuration: `${Math.round(900 / dot.speed)}ms` }}
          />
        ))}

        {alerts.map((alert, idx) => (
          <div
            key={alert.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F3922D]/70 bg-[#F3922D]/20 px-3 py-1 text-[10px] font-semibold text-[#F3922D]"
            style={{ left: `${alert.x}%`, top: `${alert.y}%`, animation: `pulse 2.2s ${idx * 0.3}s infinite` }}
          >
            {alert.label}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
          50% { transform: translate(-50%, -50%) scale(1.06); opacity: 0.6; }
        }
      `}</style>
    </div>
  )
}
