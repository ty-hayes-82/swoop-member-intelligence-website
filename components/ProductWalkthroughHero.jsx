"use client"

import { useState } from 'react'
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
        detail: 'Wind, pace, and understaffing alerts tied directly to today’s tee times.',
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

export default function ProductWalkthroughHero() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  return (
    <div className="rounded-3xl border border-swoop-border bg-white p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2" role="tablist">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                i === index ? 'bg-swoop-dark text-white' : 'bg-swoop-bg text-swoop-dark'
              }`}
              aria-pressed={i === index}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-swoop-muted">
          Demo data — Oakmont Hills CC (Jan 2026)
        </span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr),280px]">
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
