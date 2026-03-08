'use client'
import { useState } from 'react'

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-swoop-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-swoop-bg transition"
          >
            {item.q}
            <span className="text-swoop-muted ml-4 flex-shrink-0">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-swoop-muted leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
