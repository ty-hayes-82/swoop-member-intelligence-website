"use client"

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import DemoDisclosure from '@/components/DemoDisclosure'

const slides = [
  {
    id: 'briefing',
    label: 'Daily Briefing',
    heading: 'Start the day with the save list',
    caption: 'Health scores, dues at risk, weather, and on-property members in one 10-minute briefing.',
    image: '/screenshots/daily-briefing.png',
    alt: 'Daily Briefing dashboard screenshot showing prioritized save list',
    highlights: [
      {
        title: 'Prioritized saves',
        detail: 'Know which members slipped over the weekend and how much annual dues is attached to each.',
      },
      {
        title: 'On-property intel',
        detail: 'See which at-risk members are on site right now so staff can intercept before they leave.',
      },
      {
        title: 'Weather + tee sheet risk',
        detail: 'Wind, pace, and understaffing alerts tied directly to today\u2019s tee times.',
      },
    ],
  },
  {
    id: 'member-intel',
    label: 'Member Intelligence',
    heading: 'Zoom into any archetype',
    caption: 'Behavioral decay patterns, spend shifts, and email engagement in one roster.',
    image: '/screenshots/member-intelligence.png',
    alt: 'Member Intelligence roster screenshot with health scores and risk reasons',
    highlights: [
      {
        title: 'Archetype decay',
        detail: 'Weekend Warriors vs. Social Members show different warning signs and dues impact.',
      },
      {
        title: 'Risk reasons surfaced',
        detail: 'Email drops, dining gaps, skipped events, and complaint streaks drive every score.',
      },
      {
        title: 'Action drawer',
        detail: 'Open a member to see family notes, preferred outreach, and the next approved play.',
      },
    ],
  },
  {
    id: 'action-queue',
    label: 'Action Queue',
    heading: 'Approve AI recommendations',
    caption: 'Every recommendation shows impact math, owner, and due date before you approve.',
    image: '/screenshots/agent-command.png',
    alt: 'Action queue screenshot with AI recommendations awaiting approval',
    highlights: [
      {
        title: 'Retention outreach',
        detail: 'Pre-written GM notes with comp suggestions tied to dues value at risk.',
      },
      {
        title: 'Staffing surges',
        detail: 'Labor optimizations map coverage gaps to exact shifts before the rush hits.',
      },
      {
        title: 'Audit friendly',
        detail: 'One click assigns an owner, due date, and proof so you can show what was saved.',
      },
    ],
  },
]

const CYCLE_INTERVAL = 6000 // 6 seconds per tab

export default function ProductWalkthroughHero() {
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const progressRef = useRef(null)
  const tabContainerRef = useRef(null)
  const slide = slides[index]

  // Switch tab with crossfade
  const switchTab = useCallback((newIndex) => {
    setFade(false)
    setTimeout(() => {
      setIndex(newIndex)
      setFade(true)
      setProgress(0)
    }, 150)
  }, [])

  // Auto-cycle with progress
  useEffect(() => {
    if (paused) return

    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const pct = Math.min((elapsed / CYCLE_INTERVAL) * 100, 100)
      setProgress(pct)

      if (elapsed >= CYCLE_INTERVAL) {
        switchTab((index + 1) % slides.length)
        return
      }
      progressRef.current = requestAnimationFrame(tick)
    }
    progressRef.current = requestAnimationFrame(tick)

    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current)
    }
  }, [index, paused, switchTab])

  // Manual tab click
  const handleTabClick = (i) => {
    if (progressRef.current) cancelAnimationFrame(progressRef.current)
    switchTab(i)
  }

  return (
    <div
      className="hero-mockup-container rounded-3xl border border-swoop-border bg-white p-5 shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Tab pills with sliding indicator */}
        <div className="relative flex flex-wrap gap-2" role="tablist" ref={tabContainerRef}>
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleTabClick(i)}
              className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
                i === index ? 'text-white' : 'bg-swoop-bg text-swoop-dark hover:bg-swoop-border'
              }`}
              aria-pressed={i === index}
            >
              {i === index && (
                <span
                  className="absolute inset-0 rounded-full bg-swoop-dark"
                  style={{
                    zIndex: -1,
                    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              )}
              {item.label}
              {/* Progress bar under active tab */}
              {i === index && (
                <span
                  className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full overflow-hidden"
                  style={{ zIndex: 1 }}
                >
                  <span
                    className="block h-full rounded-full bg-swoop-green"
                    style={{
                      width: `${progress}%`,
                      transition: 'width 50ms linear',
                    }}
                  />
                </span>
              )}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-swoop-muted">
          Demo data — Oakmont Hills CC (Jan 2026)
        </span>
      </div>

      {/* Content area with crossfade */}
      <div
        className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr),280px]"
        style={{
          opacity: fade ? 1 : 0,
          transition: 'opacity 200ms ease-in-out',
        }}
      >
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-swoop-border bg-swoop-dark/95 p-3">
            <div className="relative mx-auto aspect-[16/9] w-full max-w-[720px]">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                className="rounded-xl object-cover"
                priority
              />
            </div>
          </div>
          <p className="mt-3 text-sm text-swoop-muted">{slide.caption}</p>
          <DemoDisclosure className="mt-2 text-xs text-swoop-muted" />
        </div>

        <div className="rounded-2xl border border-swoop-border bg-swoop-bg p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-swoop-muted">{slide.label}</p>
          <h3 className="mt-3 text-xl font-semibold text-swoop-dark">{slide.heading}</h3>
          <div className="mt-4 space-y-4">
            {slide.highlights.map((item) => (
              <article key={item.title} className="rounded-xl border border-swoop-border bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-swoop-dark">{item.title}</p>
                <p className="mt-2 text-sm text-swoop-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
