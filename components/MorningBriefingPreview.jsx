'use client'

import Image from 'next/image'
import DemoDisclosure from '@/components/DemoDisclosure'

export default function MorningBriefingPreview() {
  return (
    <div className="responsive-card rounded-2xl border border-swoop-border bg-white p-4 shadow-sm">
      <div className="relative overflow-hidden rounded-2xl border border-swoop-border/60 bg-swoop-bg">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/images/screenshot-daily-briefing.png"
            alt="Daily Briefing dashboard with weather, complaint, and member pulse cards"
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <p className="mt-3 text-xs uppercase tracking-[0.3em] text-swoop-muted">Demo data — Oakmont Hills CC · January 2026</p>
      <p className="mt-1 text-sm text-swoop-muted">Daily Briefing highlights weather risk, complaint aging, on-property members, and the prioritized Quick Wins queue.</p>
      <DemoDisclosure className="mt-3 text-[11px]" />
    </div>
  )
}
