'use client'

import { useMemo, useState } from 'react'

const cardBase = 'rounded-2xl border border-swoop-border bg-white shadow-sm'
const labelBase = 'text-[11px] uppercase tracking-[0.18em] font-semibold text-swoop-muted'

export function MemberRiskRoster() {
  const roster = [
    { name: 'James Whitfield', value: '$22k', health: 42, archetype: 'Balanced Active', reason: 'Complaint unresolved · F&B spend -40%' },
    { name: 'Anne Jordan', value: '$14k', health: 52, archetype: 'Weekend Warrior', reason: 'Rounds skipped 5 weeks · Waitlist ignored' },
    { name: 'Tom Becker', value: '$9k', health: 65, archetype: 'Die-Hard', reason: 'Email engagement -60%' },
    { name: 'Sonia Patel', value: '$18k', health: 58, archetype: 'Social Butterfly', reason: 'Event RSVP streak broken' },
  ]
  const [selected, setSelected] = useState(roster[0])

  return (
    <div className={`${cardBase} p-5 flex flex-col gap-4`}> 
      <div className="flex items-center justify-between">
        <div>
          <p className={labelBase}>Member Pulse · Priority queue</p>
          <h3 className="text-xl font-semibold mt-1">At-risk roster</h3>
        </div>
        <span className="font-mono text-sm text-swoop-muted">4 critical</span>
      </div>
      <div className="space-y-2">
        {roster.map((member) => {
          const isActive = selected.name === member.name
          return (
            <button
              key={member.name}
              className={`w-full flex items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                isActive ? 'bg-swoop-green/10 border border-swoop-green text-swoop-dark' : 'bg-swoop-bg border border-transparent hover:border-swoop-border'
              }`}
              onClick={() => setSelected(member)}
            >
              <div>
                <p className="text-sm font-semibold">{member.name}</p>
                <p className="text-xs text-swoop-muted">{member.archetype}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-sm">{member.health}</p>
                <p className="text-xs text-swoop-muted">{member.value}</p>
              </div>
            </button>
          )
        })}
      </div>
      <div className="bg-swoop-dark text-white rounded-xl p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/60">Why this member</p>
        <p className="text-lg font-semibold mt-2">{selected.name}</p>
        <p className="text-sm text-white/80">{selected.reason}</p>
      </div>
    </div>
  )
}

export function DecayTimeline() {
  const timeline = [
    { label: 'Week -6', score: 78 },
    { label: 'Week -4', score: 70 },
    { label: 'Week -2', score: 58 },
    { label: 'Week -1', score: 49 },
    { label: 'This week', score: 42 },
  ]
  const [hoverIdx, setHoverIdx] = useState(timeline.length - 1)

  return (
    <div className={`${cardBase} p-5 flex flex-col gap-4`}>
      <div>
        <p className={labelBase}>Health trajectory</p>
        <h3 className="text-xl font-semibold mt-1">Decay timeline</h3>
      </div>
      <div className="relative h-32">
        <svg viewBox="0 0 280 120" className="w-full h-full">
          <polyline
            fill="none"
            stroke="#0F172A"
            strokeWidth="3"
            strokeLinecap="round"
            points={timeline
              .map((point, idx) => `${(idx / (timeline.length - 1)) * 280},${120 - (point.score / 100) * 120}`)
              .join(' ')}
          />
        </svg>
        {timeline.map((point, idx) => (
          <button
            key={point.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(idx / (timeline.length - 1)) * 100}%`,
              top: `${100 - (point.score / 100) * 100}%`,
            }}
            onMouseEnter={() => setHoverIdx(idx)}
            onFocus={() => setHoverIdx(idx)}
          >
            <span
              className={`block w-4 h-4 rounded-full border-2 ${idx === hoverIdx ? 'bg-swoop-green border-swoop-dark' : 'bg-white border-swoop-border'}`}
            />
          </button>
        ))}
      </div>
      <div className="rounded-xl bg-swoop-bg px-4 py-3">
        <p className="font-semibold text-sm">{timeline[hoverIdx].label}</p>
        <p className="text-sm text-swoop-muted">Health score {timeline[hoverIdx].score} · {hoverIdx === timeline.length - 1 ? 'Escalate to GM' : 'Monitor escalation window'}</p>
      </div>
    </div>
  )
}

export function GmActionScript() {
  const [mode, setMode] = useState('call')
  const script = mode === 'call'
    ? '“James, I saw the wait times last Friday and I wanted to call before this weekend. We added coverage and I reserved your usual table. Can we host your foursome Saturday?”'
    : `Subject: We noticed Friday lunch

James — we staffed up for this weekend and comped dessert for your table. Let me know if we can make Saturday work for you.`
  return (
    <div className={`${cardBase} p-5`}> 
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className={labelBase}>Playbook output</p>
          <h3 className="text-xl font-semibold">GM action script</h3>
        </div>
        <div className="flex gap-2">
          {['call', 'email'].map((type) => (
            <button
              key={type}
              onClick={() => setMode(type)}
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${mode === type ? 'bg-swoop-dark text-white border-swoop-dark' : 'border-swoop-border text-swoop-muted'}`}
            >
              {type === 'call' ? 'Call' : 'Email'}
            </button>
          ))}
        </div>
      </div>
      <pre className="text-sm leading-relaxed whitespace-pre-wrap font-sans bg-swoop-bg rounded-xl p-4">
        {script}
      </pre>
      <p className="text-xs text-swoop-muted mt-3">Includes member value, last visit, unresolved complaint, and recommended tone.</p>
    </div>
  )
}

export function RoutingComparison() {
  const [mode, setMode] = useState('fifo')
  const stats = mode === 'fifo'
    ? { title: 'FIFO — Tom notified', fillRate: '78%', retention: '-$14K risk', blurb: 'First on list gets the slot. High-value, at-risk members wait another week.' }
    : { title: 'Swoop routing — Anne notified', fillRate: '91%', retention: '+$14K protected', blurb: 'AI prioritizes members by health + value + acceptance likelihood.' }

  return (
    <div className={`${cardBase} p-5 flex flex-col gap-4`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={labelBase}>Routing simulator</p>
          <h3 className="text-xl font-semibold">Waitlist decision</h3>
        </div>
        <div className="bg-swoop-bg rounded-full p-1 flex">
          {['fifo', 'swoop'].map((view) => (
            <button
              key={view}
              onClick={() => setMode(view)}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${mode === view ? 'bg-white shadow border border-swoop-border' : 'text-swoop-muted'}`}
            >
              {view === 'fifo' ? 'FIFO' : 'Retention'}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-dashed border-swoop-border p-4">
        <p className="text-sm font-semibold">{stats.title}</p>
        <div className="grid grid-cols-2 gap-4 text-sm mt-4">
          <div>
            <p className="text-xs text-swoop-muted">Fill rate</p>
            <p className="text-2xl font-semibold">{stats.fillRate}</p>
          </div>
          <div>
            <p className="text-xs text-swoop-muted">Retention impact</p>
            <p className="text-2xl font-semibold">{stats.retention}</p>
          </div>
        </div>
        <p className="text-sm text-swoop-muted mt-3">{stats.blurb}</p>
      </div>
    </div>
  )
}

export function CancellationPredictionPanel() {
  const [leadTime, setLeadTime] = useState(48)
  const probability = useMemo(() => Math.min(95, 42 + leadTime * 0.6), [leadTime])
  return (
    <div className={`${cardBase} p-5`}> 
      <p className={labelBase}>Signal fusion</p>
      <h3 className="text-xl font-semibold mt-1">Cancellation predictor</h3>
      <div className="mt-4">
        <label className="text-xs font-semibold text-swoop-muted">Alert members {leadTime}h ahead</label>
        <input
          type="range"
          min={12}
          max={72}
          value={leadTime}
          onChange={(e) => setLeadTime(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mt-4 rounded-xl bg-swoop-dark text-white p-4">
        <p className="text-sm text-white/60">Cancellation likelihood</p>
        <p className="text-3xl font-bold">{probability.toFixed(0)}%</p>
        <p className="text-xs text-white/60 mt-2">Weather + member behavior + booking recency</p>
      </div>
    </div>
  )
}

export function ConversionImpactGrid() {
  const [pace, setPace] = useState('fast')
  const conversions = pace === 'fast' ? 42 : 18
  return (
    <div className={`${cardBase} p-5 flex flex-col gap-4`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={labelBase}>F&B signal</p>
          <h3 className="text-xl font-semibold">Post-round conversion</h3>
        </div>
        <div className="flex gap-2">
          {['fast', 'slow'].map((state) => (
            <button
              key={state}
              onClick={() => setPace(state)}
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${pace === state ? 'bg-swoop-dark text-white border-swoop-dark' : 'border-swoop-border text-swoop-muted'}`}
            >
              {state === 'fast' ? '<4:15 pace' : '>4:30 pace'}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-swoop-bg p-4">
          <p className="text-xs text-swoop-muted">Conversion rate</p>
          <p className="text-3xl font-semibold">{conversions}%</p>
        </div>
        <div className="rounded-xl bg-swoop-bg p-4">
          <p className="text-xs text-swoop-muted">Monthly F&B impact</p>
          <p className="text-3xl font-semibold">{pace === 'fast' ? '+$5.7K' : '-$5.7K'}</p>
        </div>
      </div>
    </div>
  )
}

export function ServiceRecoveryGuardrails() {
  const [checks, setChecks] = useState({ comp: true, gmCall: true, survey: false })

  const toggle = (key) => setChecks((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div className={`${cardBase} p-5`}>
      <p className={labelBase}>Service prevention</p>
      <h3 className="text-xl font-semibold mt-1">Guardrails</h3>
      <div className="mt-4 space-y-3">
        {[
          { key: 'comp', label: 'Automatic dessert comp for rain/wind complaints' },
          { key: 'gmCall', label: 'GM call scheduled within 24h' },
          { key: 'survey', label: 'Follow-up micro survey after resolution' },
        ].map((item) => (
          <label key={item.key} className="flex items-start gap-3 text-sm">
            <input type="checkbox" checked={checks[item.key]} onChange={() => toggle(item.key)} className="mt-1" />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
      <p className="text-xs text-swoop-muted mt-4">{Object.values(checks).filter(Boolean).length} guardrails active for the Grill Room.</p>
    </div>
  )
}

export function StaffingForecastMatrix() {
  const windows = ['Thu', 'Fri', 'Sat', 'Sun']
  const [day, setDay] = useState('Sat')
  const coverage = {
    Thu: { predicted: 58, scheduled: 54 },
    Fri: { predicted: 74, scheduled: 60 },
    Sat: { predicted: 96, scheduled: 70 },
    Sun: { predicted: 68, scheduled: 68 },
  }
  const delta = coverage[day].predicted - coverage[day].scheduled
  return (
    <div className={`${cardBase} p-5`}>
      <p className={labelBase}>48-hour coverage</p>
      <h3 className="text-xl font-semibold mt-1">Staffing forecast</h3>
      <div className="flex gap-2 mt-4">
        {windows.map((w) => (
          <button
            key={w}
            onClick={() => setDay(w)}
            className={`flex-1 text-sm font-semibold px-3 py-2 rounded-xl border ${day === w ? 'bg-swoop-green/10 border-swoop-green' : 'border-swoop-border text-swoop-muted'}`}
          >
            {w}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div className="rounded-xl bg-swoop-bg p-4">
          <p className="text-xs text-swoop-muted">Predicted covers</p>
          <p className="text-2xl font-semibold">{coverage[day].predicted}</p>
        </div>
        <div className="rounded-xl bg-swoop-bg p-4">
          <p className="text-xs text-swoop-muted">Scheduled capacity</p>
          <p className="text-2xl font-semibold">{coverage[day].scheduled}</p>
        </div>
      </div>
      <div className="mt-4 rounded-xl p-4 border border-dashed border-swoop-border text-sm">
        <p className="font-semibold">Gap: {delta > 0 ? `-${delta} staff` : 'On plan'}</p>
        <p className="text-swoop-muted">Recommendation: {delta > 0 ? 'Add 2 FOH + 1 line cook' : 'Coverage sufficient'}</p>
      </div>
    </div>
  )
}

export function CoverageDeltaCard() {
  const [view, setView] = useState('before')
  const details = view === 'before'
    ? { label: 'Before Swoop', wait: '42 min', sentiment: '−18', note: '3 servers, 1 line cook' }
    : { label: 'After alert', wait: '18 min', sentiment: '+9', note: '5 servers, 2 line cooks' }
  return (
    <div className={`${cardBase} p-5`}> 
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className={labelBase}>Outcome simulation</p>
          <h3 className="text-xl font-semibold">Service window</h3>
        </div>
        <div className="flex gap-1 bg-swoop-bg rounded-full p-1">
          {['before', 'after'].map((state) => (
            <button
              key={state}
              onClick={() => setView(state)}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${view === state ? 'bg-white shadow' : 'text-swoop-muted'}`}
            >
              {state === 'before' ? 'Before' : 'After'}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-swoop-dark text-white p-4">
        <p className="text-sm text-white/60">{details.label}</p>
        <p className="text-3xl font-bold">Wait {details.wait}</p>
        <p className="text-sm text-white/70 mt-2">Sentiment score {details.sentiment}</p>
        <p className="text-xs text-white/60 mt-3">{details.note}</p>
      </div>
    </div>
  )
}

export function BoardReportPreviewMini() {
  const [section, setSection] = useState('retention')
  const data = {
    retention: { title: 'Retention impact', metrics: ['8 members flagged', '4 saved', '$88K protected'] },
    revenue: { title: 'Revenue attribution', metrics: ['+$5.7K F&B', '+$12.4K waitlist', '+$2.8K staffing'] },
    roi: { title: 'ROI summary', metrics: ['Cost $5,988', 'Impact $251K', '42x ROI'] },
  }
  return (
    <div className={`${cardBase} p-5`}> 
      <p className={labelBase}>Board packet</p>
      <h3 className="text-xl font-semibold mt-1">One-click summary</h3>
      <div className="flex gap-2 mt-4">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => setSection(key)}
            className={`flex-1 text-xs font-semibold px-3 py-2 rounded-xl border ${section === key ? 'bg-swoop-green/10 border-swoop-green' : 'border-swoop-border text-swoop-muted'}`}
          >
            {data[key].title.split(' ')[0]}
          </button>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {data[section].metrics.map((metric) => (
          <li key={metric} className="flex items-center gap-2">
            <span className="text-swoop-accent">•</span>
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function RevenueAttributionStrip() {
  const [window, setWindow] = useState('30d')
  const impacts = {
    '30d': ['$5.7K F&B', '$12.4K waitlist', '$2.8K staffing'],
    '90d': ['$18K F&B', '$38K waitlist', '$8.4K staffing'],
    'YTD': ['$41K F&B', '$96K waitlist', '$22K staffing'],
  }
  return (
    <div className={`${cardBase} p-5`}> 
      <div className="flex items-center justify-between">
        <div>
          <p className={labelBase}>Attribution</p>
          <h3 className="text-xl font-semibold">Revenue impact</h3>
        </div>
        <select value={window} onChange={(e) => setWindow(e.target.value)} className="text-xs border rounded-lg px-2 py-1">
          {Object.keys(impacts).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3">
        {impacts[window].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-xl bg-swoop-bg px-4 py-3 text-sm font-semibold">
            <span>{item.split(' ')[1]} intelligence</span>
            <span className="font-mono">{item.split(' ')[0]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PipelineMemberDeepDive() {
  const [stage, setStage] = useState('lead')
  const data = {
    lead: { name: 'David Chen', status: 'Warm lead · 8 visits', action: 'Invite to Member Pulse event' },
    trial: { name: 'Sarah Mitchell', status: 'Trial round this weekend', action: 'Pair with sponsor' },
    member: { name: 'Robert Torres', status: 'Converted · needs onboarding', action: 'Assign concierge' },
  }
  return (
    <div className={`${cardBase} p-5`}>
      <p className={labelBase}>Pipeline</p>
      <h3 className="text-xl font-semibold mt-1">Member journey</h3>
      <div className="flex gap-2 mt-4">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => setStage(key)}
            className={`flex-1 text-xs font-semibold px-3 py-2 rounded-xl border ${stage === key ? 'bg-swoop-dark text-white border-swoop-dark' : 'border-swoop-border text-swoop-muted'}`}
          >
            {key === 'lead' ? 'Lead' : key === 'trial' ? 'Trial' : 'Member'}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-swoop-bg p-4 text-sm">
        <p className="font-semibold">{data[stage].name}</p>
        <p className="text-swoop-muted">{data[stage].status}</p>
        <p className="text-xs mt-2">Next action: {data[stage].action}</p>
      </div>
    </div>
  )
}

export function LiveOpsPreviewGrid() {
  const tiles = [
    { label: 'Daily briefing', value: '7 quick wins', accent: 'bg-lens-briefing/20 text-lens-briefing' },
    { label: 'Member health', value: '240 healthy · 10 critical', accent: 'bg-lens-members/20 text-lens-members' },
    { label: 'Staffing alerts', value: '3 gaps in next 48h', accent: 'bg-lens-staffing/20 text-lens-staffing' },
    { label: 'Revenue impact', value: '+$20.9K/mo', accent: 'bg-lens-pipeline/20 text-lens-pipeline' },
  ]
  return (
    <div className={`${cardBase} p-5`}>
      <p className={labelBase}>Live product</p>
      <h3 className="text-xl font-semibold mt-1">Operating snapshot</h3>
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        {tiles.map((tile) => (
          <div key={tile.label} className="rounded-xl border border-swoop-border p-3">
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${tile.accent}`}>{tile.label}</span>
            <p className="font-semibold mt-2">{tile.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
