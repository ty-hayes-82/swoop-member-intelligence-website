"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  {
    src: '/screenshots/daily-briefing.png',
    alt: 'Daily Briefing overview',
    caption: 'Daily Briefing highlights Quick Wins, risk factors, and AI agent actions in one view.',
  },
  {
    src: '/screenshots/member-intelligence.png',
    alt: 'Member intelligence roster',
    caption: 'At-risk roster surfaces dues impact, signal stack, and next steps for every member.',
  },
  {
    src: '/screenshots/agent-command.png',
    alt: 'Agent Command approvals',
    caption: 'Approve or dismiss AI agent recommendations with full context and confidence scoring.',
  },
]

export default function ProductWalkthroughHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <div className="rounded-3xl border border-swoop-border bg-white/80 p-5 shadow-xl backdrop-blur">
      <div className="relative overflow-hidden rounded-2xl border border-swoop-border bg-swoop-bg">
        <Image
          src={slide.src}
          alt={slide.alt}
          width={1280}
          height={720}
          priority
          className="h-full w-full max-h-[360px] object-cover"
        />
        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-swoop-dark">
          Demo data — Oakmont Hills CC (Jan 2026)
        </div>
      </div>
      <p className="mt-4 text-sm text-swoop-muted">{slide.caption}</p>
      <div className="mt-3 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            className={`h-2.5 flex-1 rounded-full transition ${i === index ? 'bg-swoop-dark' : 'bg-swoop-border'}`}
          />
        ))}
      </div>
    </div>
  )
}
