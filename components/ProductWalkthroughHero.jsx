"use client"

import { useEffect, useState } from 'react'

const scenes = [
  {
    id: 'briefing',
    label: 'Daily Briefing',
    caption:
      'Start every morning with a prioritized save list. Health scores, dues at risk, and who is on property right now in one glance.',
    metric: { label: 'Members at risk this week', value: '14', delta: '+2 flagged overnight' },
    quickWins: [
      { title: 'Call James Whitfield before 11:00 AM', meta: 'Health 42 · Grill Room complaint unresolved' },
      { title: 'Walk the tee sheet w/ Marcus Webb', meta: 'High-value guest arriving 7:40 AM' },
    ],
    roster: [
      { name: 'James Whitfield', score: 42, signal: 'Complaint unresolved · 6 days', action: 'Escalate to F&B lead' },
      { name: 'Sandra Chen', score: 38, signal: 'Dining spend down 62%', action: 'Invite to Chef tasting' },
      { name: 'Robert Mills', score: 33, signal: 'Skipped dues autopay', action: 'Finance follow-up today' },
    ],
    actionFeed: [
      { label: 'F&B', text: 'Have Grill Room GM greet James with preferred table' },
      { label: 'Member Experience', text: 'Sandra visiting tonight — comp dessert + GM visit' },
    ],
  },
  {
    id: 'member-intel',
    label: 'Member Intelligence',
    caption:
      'Zoom into any archetype to see decay patterns, dues impact, and the exact play that keeps them engaged.',
    metric: { label: 'Saves this month', value: '$178K', delta: 'recovered dues value' },
    quickWins: [
      { title: 'Balanced Active — 4 slipping members', meta: 'Email engagement ↓ 48% · dining flat' },
      { title: 'Weekend Warriors — waitlist friction', meta: '6 members stuck behind FIFO queue' },
    ],
    roster: [
      { name: 'Anne Jordan', score: 58, signal: 'Plays only weekends · waitlist blocked twice', action: 'Offer Fri twilight slot' },
      { name: 'Kevin Hurst', score: 31, signal: 'Critical · no rounds since Dec 14', action: 'GM call w/ comped foursome' },
      { name: 'Linda Leonard', score: 24, signal: 'Ghosted F&B · dues autopay only', action: 'Board sponsor outreach' },
    ],
    actionFeed: [
      { label: 'Waitlist', text: 'Route Anne + Kevin ahead of FIFO for Sat 7:00 AM' },
      { label: 'Member Care', text: 'Send family dining invite to Linda — highlight new chef' },
    ],
  },
  {
    id: 'action-queue',
    label: 'Action Queue',
    caption:
      'Approve AI recommendations with full context. Every action logs an owner, due date, and proof of impact.',
    metric: { label: 'Approvals waiting', value: '3', delta: 'avg confidence 88%' },
    quickWins: [
      { title: 'Retention outreach — James Whitfield', meta: 'Send GM text + comp dessert' },
      { title: 'Staffing surge — Saturday Grill Room', meta: 'Add 2 servers · 5:30-8:30 PM' },
    ],
    roster: [
      { name: 'Demand Optimizer', score: 86, signal: '72% cancellation risk Saturday 7:08', action: 'Approve retention routing' },
      { name: 'Service Recovery', score: 74, signal: 'Complaint idle 48h — Grill Room', action: 'Assign to Alexis Chen' },
      { name: 'Labor Optimizer', score: 69, signal: 'Coverage gap 2.5 hrs tonight', action: 'Offer OT to dining captains' },
    ],
    actionFeed: [
      { label: 'Ops', text: 'Add 2 floaters to Saturday PM shift — demand spike' },
      { label: 'GM Note', text: 'Text James post-round w/ comp dessert + apology' },
    ],
  },
]

const scoreBadgeClasses = (score) => {
  if (score >= 70) return 'bg-emerald-500/10 text-emerald-200 border border-emerald-400/30'
  if (score >= 50) return 'bg-amber-500/10 text-amber-100 border border-amber-400/30'
  if (score >= 30) return 'bg-orange-500/10 text-orange-100 border border-orange-400/30'
  return 'bg-red-500/15 text-red-200 border border-red-400/30'
}

const healthColor = (score) => {
  if (score >= 70) return 'text-emerald-300'
  if (score >= 50) return 'text-amber-200'
  if (score >= 30) return 'text-orange-200'
  return 'text-red-200'
}

export default function ProductWalkthroughHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % scenes.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  const scene = scenes[index]

  return (
    <div className="rounded-3xl border border-swoop-border bg-white/80 p-5 shadow-xl backdrop-blur">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0F1312] via-[#111b17] to-[#1F2F24] p-6 text-white shadow-[0_20px_80px_rgba(15,19,18,0.6)]">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {scenes.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  i === index ? 'bg-white/15 text-white shadow-inner' : 'bg-white/5 text-white/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
            Demo data — Oakmont Hills CC (Jan 2026)
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px,1fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{scene.metric.label}</p>
              <div className="mt-3 flex items-baseline gap-3">
                <span className="text-4xl font-semibold text-white">{scene.metric.value}</span>
                <span className="text-sm text-emerald-200">{scene.metric.delta}</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Quick wins</p>
              <div className="mt-3 space-y-3">
                {scene.quickWins.map((win) => (
                  <div key={win.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-sm font-semibold text-white">{win.title}</p>
                    <p className="text-xs text-white/70">{win.meta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-amber-100">
              <p className="text-xs uppercase tracking-[0.2em]">Action feed</p>
              <div className="mt-2 space-y-2">
                {scene.actionFeed.map((item) => (
                  <p key={item.text} className="text-sm">
                    <span className="font-semibold text-white">[{item.label}]</span> {item.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-inner">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Live roster</p>
                <p className="text-sm text-white/80">Signal → suggested action</p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                Board-ready output
              </div>
            </div>
            <div className="space-y-3">
              {scene.roster.map((row) => (
                <div
                  key={`${scene.id}-${row.name}`}
                  className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className={`font-mono text-xs px-3 py-1 rounded-full ${scoreBadgeClasses(row.score)}`}>
                    {row.score}
                  </div>
                  <div className="min-w-[180px] flex-1">
                    <p className="text-sm font-semibold text-white">{row.name}</p>
                    <p className={`text-xs ${healthColor(row.score)}`}>{row.signal}</p>
                  </div>
                  <div className="text-sm text-white/80">
                    {row.action}
                  </div>
                  <button
                    type="button"
                    className="ml-auto inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    Open drawer →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-swoop-muted">{scene.caption}</p>
      <div className="mt-3 flex gap-2">
        {scenes.map((_, i) => (
          <span
            key={_.id}
            className={`h-2.5 flex-1 rounded-full transition ${i === index ? 'bg-swoop-dark' : 'bg-swoop-border'}`}
          />
        ))}
      </div>
    </div>
  )
}
