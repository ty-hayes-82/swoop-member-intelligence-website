'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import DemoDisclosure from '@/components/DemoDisclosure'
import { DailyBriefingDemo, TeeSheetRoutingPreview } from '@/components/portal-previews'

const tabs = [
  {
    id: 'briefing',
    label: 'Daily Briefing',
    description: 'Start every morning knowing exactly what needs attention — AI-prioritized actions, not a wall of reports.',
    link: '/platform#daily-briefing',
    highlights: ['Risk alerts before the first tee time', 'AI agent recommendations with impact math', 'Weather, staffing, and member signals in one view'],
    screenshot: {
      src: '/images/screenshot-member-intelligence.png',
      alt: 'Daily Briefing with prioritized actions',
      caption: 'Demo data — Oakmont Hills CC morning briefing',
      objectPosition: 'top',
    },
  },
  {
    id: 'member',
    label: 'Member Health',
    description: 'Catch resignation risk 6–8 weeks early with health scores, decay reasons, and save playbooks.',
    link: '/capabilities/member-intelligence',
    highlights: ['Live health scores by member', 'Save queue arrives every Monday', 'Board-ready attribution for every intervention'],
    screenshot: {
      src: '/images/screenshot-member-intelligence.png',
      alt: 'Member Intelligence roster with at-risk members highlighted',
      caption: 'Demo data — Oakmont Hills CC · January 2026',
      objectPosition: 'top',
    },
  },
  {
    id: 'tee-sheet',
    label: 'Tee Sheet & Demand',
    description: 'Fill openings with the right members, not just whoever signed up first.',
    link: '/capabilities/tee-sheet-demand',
    highlights: ['Cancellation prediction 24–72h ahead', 'Retention-prioritized waitlist routing', 'Pace-of-play and demand forecasting'],
    screenshot: {
      src: '/screenshots/waitlist-demand.jpg',
      alt: 'Waitlist and demand intelligence screenshot',
      caption: 'Retention-prioritized queue vs FIFO · Demo data',
      objectPosition: 'top',
    },
  },
  {
    id: 'fb',
    label: 'F&B Experience',
    description: 'Align tee sheet finish windows with staffing and post-round conversion prompts.',
    link: '/capabilities/fb-operations',
    highlights: ['Live outlet pacing', 'Service recovery queue', 'Offer prompts tied to finish clusters'],
    screenshot: {
      src: '/screenshots/fb-operations.png',
      alt: 'F&B operations dashboard screenshot',
      caption: 'Outlet revenue and post-round conversion — Demo data',
    },
  },
  {
    id: 'staffing',
    label: 'Staffing & Service',
    description: 'See coverage gaps 48 hours ahead so service never slips.',
    link: '/capabilities/staffing-labor',
    highlights: ['Shift recommendations with ROI math', 'Labor-cost-per-revenue tracking', 'Married to tee sheet and weather signals'],
    screenshot: {
      src: '/screenshots/staffing-labor.png',
      alt: 'Staffing and service recovery dashboard screenshot',
      caption: 'Service recovery + staffing gaps — Demo data',
    },
  },
  {
    id: 'revenue',
    label: 'Revenue & Pipeline',
    description: 'Prove what was saved, not just what was lost, with action-level attribution.',
    link: '/capabilities/revenue-pipeline',
    highlights: ['Board-ready story of saves and growth', 'Action vs. outcome tracking', 'Pipeline health snapshot every Friday'],
    screenshot: {
      src: '/screenshots/revenue-pipeline.jpg',
      alt: 'Revenue & pipeline dashboard screenshot',
      caption: 'Prospect conversion queue with dues impact — Demo data',
      objectPosition: 'top',
    },
  },
]

export default function HomeCapabilityTabs() {
  const [active, setActive] = useState(tabs[0].id)
  const [fade, setFade] = useState(true)
  const tab = tabs.find((item) => item.id === active) ?? tabs[0]
  const showDailyBriefingLivePreview = tab.id === 'briefing'
  const showTeeSheetLivePreview = tab.id === 'tee-sheet'

  const switchTab = (newId) => {
    if (newId === active) return
    setFade(false)
    setTimeout(() => {
      setActive(newId)
      setFade(true)
    }, 150)
  }

  return (
    <section className="px-6">
      <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-swoop-muted">Capabilities</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => switchTab(item.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 ${
                active === item.id 
                  ? 'bg-swoop-dark text-white border-swoop-dark shadow-md scale-105' 
                  : 'border-swoop-border text-swoop-muted hover:border-swoop-dark hover:bg-swoop-bg'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div 
          className="mt-6 grid gap-6 lg:grid-cols-[1fr,420px] transition-opacity duration-200"
          style={{ opacity: fade ? 1 : 0 }}
        >
          <div>
            <p className="text-lg font-semibold text-swoop-dark">{tab.label}</p>
            <p className="mt-2 text-sm text-swoop-muted">{tab.description}</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              {tab.highlights.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <Link href={tab.link} className="mt-4 inline-flex items-center text-sm font-semibold text-swoop-accent">
              Explore capability →
            </Link>
          </div>

          <div className="rounded-2xl border border-swoop-border bg-swoop-bg/60 p-4">
            {(showDailyBriefingLivePreview || showTeeSheetLivePreview) ? (
              <>
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                    Live Component
                  </span>
                  <span className="text-[11px] text-swoop-muted">Not a screenshot</span>
                </div>
                {showDailyBriefingLivePreview ? (
                  <div className="max-h-[320px] overflow-y-auto pr-1">
                    <DailyBriefingDemo />
                  </div>
                ) : (
                  <TeeSheetRoutingPreview />
                )}
              </>
            ) : (
              <>
                <ScreenshotLightbox
                  src={tab.screenshot.src}
                  alt={tab.screenshot.alt}
                  maxHeight={260}
                  objectPosition={tab.screenshot.objectPosition ?? 'top'}
                />
                <p className="mt-3 text-xs text-swoop-muted">{tab.screenshot.caption}</p>
              </>
            )}

            <DemoDisclosure className="mt-1 text-[11px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
