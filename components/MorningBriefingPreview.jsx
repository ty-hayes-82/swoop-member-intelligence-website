'use client'

import { useState } from 'react'

const sections = [
  {
    title: 'Quick Wins (3)',
    items: [
      'Call James Whitfield before 10 AM — unresolved service complaint.',
      'Approve Labor Optimizer shift for Grill Room Saturday brunch.',
      'Ping Lisa Chen about Tuesday cancellation slot.'
    ]
  },
  {
    title: 'Today\'s Risks',
    items: [
      'F&B conversion down 18% after 3 PM — pace flagged.',
      'Two open complaints past SLA.',
      'Waitlist churn probability 62% on weekend slots.'
    ]
  },
  {
    title: 'System Notes',
    items: [
      'Northstar sync complete at 6:12 AM.',
      'ForeTees webhooks delayed 4 minutes — auto-retried.',
      'New AI agent recommendation queue ready for review.'
    ]
  }
]

export default function MorningBriefingPreview() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="bg-swoop-dark text-white rounded-2xl p-6 border border-white/10 shadow-lg">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">Morning Briefing</p>
      <h3 className="text-2xl font-semibold mt-2">6:00 AM digest</h3>
      <p className="text-white/70 text-sm mb-4">Tap a panel to preview what the GM sees with their coffee.</p>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div key={section.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold transition ${
                openIndex === index ? 'bg-white/10' : 'bg-white/5 text-white/80'
              }`}
            >
              {section.title}
              <span className={`text-lg transition-transform ${openIndex === index ? 'rotate-90' : ''}`}>›</span>
            </button>
            {openIndex === index && (
              <ul className="bg-white/5 rounded-xl px-5 py-3 text-sm text-white/80 space-y-2 mt-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-swoop-green mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
