'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AtRiskRosterMock,
  RoutingComparisonMock,
  PostRoundConversionMock,
  StaffingForecastGrid,
  BoardReportPreview,
} from '@/components/CapabilityMocks'

const tabs = [
  {
    id: 'member',
    label: 'Member Intelligence',
    description: 'Catch resignation risk 6–8 weeks early with health scores, decay reasons, and save playbooks.',
    link: '/capabilities/member-intelligence',
    highlights: ['Live health scores by member', 'Save queue arrives every Monday', 'Board-ready attribution for every intervention'],
    mock: <AtRiskRosterMock />,
  },
  {
    id: 'tee-sheet',
    label: 'Tee Sheet & Demand',
    description: 'Fill openings with the right members, not just whoever signed up first.',
    link: '/capabilities/tee-sheet-demand',
    highlights: ['Cancellation prediction 24–72h ahead', 'Retention-prioritized waitlist routing', 'Pace-of-play and demand forecasting'],
    mock: <RoutingComparisonMock />,
  },
  {
    id: 'fb',
    label: 'F&B Experience',
    description: 'Align tee sheet finish windows with staffing and post-round conversion prompts.',
    link: '/capabilities/fb-operations',
    highlights: ['Live outlet pacing', 'Service recovery queue', 'Offer prompts tied to finish clusters'],
    mock: <PostRoundConversionMock />,
  },
  {
    id: 'staffing',
    label: 'Staffing & Service',
    description: 'See coverage gaps 48 hours ahead so service never slips.',
    link: '/capabilities/staffing-labor',
    highlights: ['Shift recommendations with ROI math', 'Labor-cost-per-revenue tracking', 'Married to tee sheet and weather signals'],
    mock: <StaffingForecastGrid />,
  },
  {
    id: 'revenue',
    label: 'Revenue & Pipeline',
    description: 'Prove what was saved, not just what was lost, with action-level attribution.',
    link: '/capabilities/revenue-pipeline',
    highlights: ['Board-ready story of saves and growth', 'Action vs. outcome tracking', 'Pipeline health snapshot every Friday'],
    mock: <BoardReportPreview />,
  },
]

export default function HomeCapabilityTabs() {
  const [active, setActive] = useState(tabs[0].id)
  const tab = tabs.find((item) => item.id === active) ?? tabs[0]

  return (
    <section className="px-6">
      <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-swoop-muted">Capabilities</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border ${active === item.id ? 'bg-swoop-dark text-white border-swoop-dark' : 'border-swoop-border text-swoop-muted hover:border-swoop-dark'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr,420px]">
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
          <div className="rounded-2xl border border-swoop-border bg-swoop-bg p-4">{tab.mock}</div>
        </div>
      </div>
    </section>
  )
}
