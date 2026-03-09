'use client'

import { useEffect, useState } from 'react'

export default function HealthScoreMeter() {
  const [score, setScore] = useState(78)

  useEffect(() => {
    let current = 78
    const target = 42
    const timer = setInterval(() => {
      current = Math.max(target, current - 2)
      setScore(current)
      if (current === target) {
        clearInterval(timer)
      }
    }, 80)
    return () => clearInterval(timer)
  }, [])

  const percentage = (score / 100) * 100

  return (
    <div className="bg-swoop-card border border-swoop-border rounded-2xl p-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between shadow-sm">
      <div>
        <p className="text-xs font-bold text-swoop-accent uppercase tracking-[0.2em] mb-2">Health Score</p>
        <h3 className="text-2xl font-semibold text-swoop-dark">James Whitfield</h3>
        <p className="text-sm text-swoop-muted max-w-xl">
          Live signal from Member Pulse — health score dropped from 78 → 42 over 6 days. Complaint unresolved. GM
          intervention required within <span className="font-semibold text-swoop-dark">24 hours</span> to prevent a $22K resignation.
        </p>
      </div>
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 120 120" className="w-32 h-32">
            <circle cx="60" cy="60" r="50" stroke="#E4E4E7" strokeWidth="10" fill="none" />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#C0392B"
              strokeWidth="10"
              fill="none"
              strokeDasharray="314"
              strokeDashoffset={314 - (percentage / 100) * 314}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-3xl font-bold text-swoop-dark">{score}</span>
            <span className="text-xs text-swoop-muted">/100</span>
          </div>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-red-500 font-semibold animate-pulse">
            Declining
          </span>
        </div>
        <div className="flex-1 min-w-[160px]">
          <div className="flex items-center justify-between text-xs font-semibold text-swoop-muted mb-1">
            <span>78</span>
            <span>42</span>
          </div>
          <div className="h-2 bg-swoop-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-swoop-green to-red-500 transition-all duration-300"
              style={{ width: `${(score / 78) * 100}%` }}
            />
          </div>
          <p className="text-xs text-swoop-muted mt-2">Drop over last 6 days · Service recovery required</p>
        </div>
      </div>
    </div>
  )
}
