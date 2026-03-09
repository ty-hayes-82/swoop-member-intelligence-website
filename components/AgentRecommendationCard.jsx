'use client'

import { useState } from 'react'

const recommendation = {
  agent: 'Demand Optimizer',
  headline: 'Fill 9:10 AM tee time with at-risk board member',
  detail:
    'James Whitfield has not played in 12 days after a complaint. Offering this slot with concierge follow-up protects $22K in dues and referral pipeline.',
  impact: '+$312 immediate revenue | -72% churn risk',
  proofPoints: [
    { label: 'Value at risk', value: '$22,000' },
    { label: 'Waitlist rank', value: '#4 retention queue' },
    { label: 'Confidence', value: '92%' },
  ],
}

const decisionCopy = {
  approve: {
    label: 'Approve + send',
    tone: 'bg-swoop-green text-swoop-dark',
    message: 'Slot assigned to James. SMS confirmation and concierge note scheduled.',
  },
  snooze: {
    label: 'Snooze 30 min',
    tone: 'bg-amber-100 text-amber-700',
    message: 'We will re-run predictions and remind you at 8:40 AM.',
  },
  dismiss: {
    label: 'Dismiss',
    tone: 'bg-rose-100 text-rose-600',
    message: 'Thanks for the signal. Agent Command won’t re-open this recommendation.',
  },
}

const progressColors = {
  approve: 'bg-swoop-green',
  snooze: 'bg-amber-400',
  dismiss: 'bg-rose-500',
}

export default function AgentRecommendationCard() {
  const [decision, setDecision] = useState(null)
  const [progress, setProgress] = useState(0)

  const handleDecision = (value) => {
    setDecision(value)
    setProgress(0)
    setTimeout(() => setProgress(100), 20)
  }

  return (
    <div className="bg-swoop-card border border-swoop-border rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-swoop-dark text-white text-xs font-semibold">
          {recommendation.agent}
        </span>
        <p className="text-xs text-swoop-muted">Recommendation · Live feed</p>
      </div>
      <h3 className="text-xl font-semibold leading-snug">{recommendation.headline}</h3>
      <p className="text-sm text-swoop-muted mt-2">{recommendation.detail}</p>
      <p className="text-sm font-mono text-swoop-accent mt-3">{recommendation.impact}</p>

      <div className="grid grid-cols-3 gap-4 mt-6 text-sm">
        {recommendation.proofPoints.map((point) => (
          <div key={point.label} className="bg-white border border-swoop-border rounded-xl p-3 text-center">
            <p className="text-xs uppercase tracking-wide text-swoop-muted">{point.label}</p>
            <p className="text-lg font-semibold mt-1">{point.value}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {Object.entries(decisionCopy).map(([key, value]) => (
          <button
            key={key}
            type="button"
            onClick={() => handleDecision(key)}
            className={`px-5 py-3 rounded-xl border border-swoop-border text-sm font-semibold transition hover:-translate-y-0.5 ${
              decision === key ? 'bg-swoop-dark text-white border-swoop-dark' : 'bg-white'
            }`}
          >
            {value.label}
          </button>
        ))}
      </div>

      <div className="h-1 bg-swoop-border rounded-full overflow-hidden mt-6">
        <div
          className={`h-full transition-all duration-500 ${progressColors[decision] || 'bg-swoop-green'}`}
          style={{ width: `${decision ? progress : 0}%` }}
        ></div>
      </div>

      {decision && (
        <div className={`mt-4 px-4 py-3 rounded-xl text-sm font-medium ${decisionCopy[decision].tone}`}>
          {decisionCopy[decision].message}
        </div>
      )}
    </div>
  )
}
