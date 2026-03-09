import DemoDisclosure from '@/components/DemoDisclosure'

export function AtRiskRosterMock() {
  const rows = [
    { initials: 'JW', name: 'James Whitfield', tier: 'Platinum', score: 42, route: 'GM call' },
    { initials: 'AJ', name: 'Anne Jordan', tier: 'Gold', score: 54, route: 'Concierge text' },
    { initials: 'TP', name: 'Tom Park', tier: 'Silver', score: 58, route: 'Tee priority' },
    { initials: 'SL', name: 'Sofia Lane', tier: 'Gold', score: 61, route: 'Dining comp' },
    { initials: 'MR', name: 'Marta Ruiz', tier: 'Platinum', score: 63, route: 'Family invite' },
  ]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-swoop-muted">At-Risk Roster</p>
      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 font-semibold text-swoop-muted">
          <span>Member</span><span>Tier</span><span>Score</span><span>Route</span>
        </div>
        {rows.map((row) => (
          <div key={row.name} className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 rounded-lg border border-swoop-border px-2 py-2">
            <span className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-swoop-bg text-[10px] font-bold">{row.initials}</span>
              {row.name}
            </span>
            <span>{row.tier}</span>
            <span className="font-semibold">{row.score}</span>
            <button className="rounded bg-swoop-dark px-2 py-1 text-[10px] font-semibold text-white">{row.route}</button>
          </div>
        ))}
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function DecayTimelineMock() {
  const bars = [
    { label: 'Email cadence', values: ['w-1/4', 'w-1/5', 'w-1/6', 'w-1/12'] },
    { label: 'Golf rounds', values: ['w-1/3', 'w-1/4', 'w-1/5', 'w-1/6'] },
    { label: 'Dining check', values: ['w-1/3', 'w-1/4', 'w-1/6', 'w-1/12'] },
  ]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-swoop-muted">Decay Timeline</p>
      <div className="space-y-3">
        {bars.map((bar) => (
          <div key={bar.label}>
            <p className="mb-1 text-xs text-swoop-muted">{bar.label}</p>
            <div className="flex gap-1">
              {bar.values.map((width, idx) => (
                <span key={idx} className={`h-2 rounded bg-swoop-dark/80 ${width}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function GmScriptCard() {
  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4 text-sm">
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-swoop-muted">GM Call Script</p>
      <p className="font-semibold">Drivers</p>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-swoop-muted">
        <li>Rounds down 37% in 6 weeks</li>
        <li>Grill spend dropped to minimum-only</li>
        <li>Complaint aged 5 days unresolved</li>
      </ul>
      <p className="mt-3 font-semibold">Comp offer</p>
      <p className="text-swoop-muted">Priority Saturday slot + hosted foursome lunch.</p>
      <p className="mt-3 rounded-md bg-swoop-bg p-2 font-semibold">Ask: “Can I earn one more month before you decide?”</p>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function RoutingComparisonMock() {
  const fifo = [
    'Tom C. - accepted, no behavior change',
    'Marta R. - declined, slot idle 35m',
    'Evan D. - accepted, low upsell',
  ]
  const retention = [
    'Anne J. - accepted, score +8',
    'James W. - accepted, call completed',
    'Sofia L. - accepted, dining follow-up',
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-swoop-border bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">FIFO</p>
        <ul className="mt-2 space-y-2 text-xs text-swoop-muted">{fifo.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="rounded-xl border border-swoop-border bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Retention</p>
        <ul className="mt-2 space-y-2 text-xs text-swoop-muted">{retention.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function CancellationRiskCard() {
  const bars = [
    { label: '24h', value: 72 },
    { label: '48h', value: 58 },
    { label: '72h', value: 41 },
  ]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Cancellation Risk</p>
      <div className="mt-3 space-y-2">
        {bars.map((bar) => (
          <div key={bar.label} className="flex items-center gap-3 text-xs">
            <span className="w-8 text-swoop-muted">{bar.label}</span>
            <div className="h-2 flex-1 rounded bg-swoop-bg">
              <div className="h-2 rounded bg-swoop-dark" style={{ width: `${bar.value}%` }} />
            </div>
            <span className="w-10 text-right font-semibold">{bar.value}%</span>
          </div>
        ))}
      </div>
      <p className="mt-3 rounded-md bg-swoop-bg p-2 text-xs">Suggested action: pre-alert 3 at-risk members by SMS.</p>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function RetentionValueCalculator() {
  const avgDues = 18000
  const saveRate = 0.21
  const atRisk = 28
  const protectedArr = Math.round(avgDues * saveRate * atRisk)

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4 text-xs">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Retention Value Calculator</p>
      <div className="mt-3 space-y-2">
        <div className="flex justify-between"><span>Avg dues</span><span className="font-semibold">${avgDues.toLocaleString()}</span></div>
        <div className="flex justify-between"><span>Save %</span><span className="font-semibold">{Math.round(saveRate * 100)}%</span></div>
        <div className="flex justify-between"><span>At-risk members</span><span className="font-semibold">{atRisk}</span></div>
      </div>
      <div className="mt-3 rounded-md bg-swoop-dark p-3 text-white">
        <p className="text-[11px] uppercase tracking-wider text-white/70">Protected ARR</p>
        <p className="text-lg font-bold">${protectedArr.toLocaleString()}</p>
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function PostRoundConversionMock() {
  const tiles = [
    { label: 'Grill', conversion: '44%', revenue: '$8.9K' },
    { label: 'Shop', conversion: '18%', revenue: '$3.2K' },
    { label: 'Lessons', conversion: '12%', revenue: '$6.1K' },
  ]

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {tiles.map((tile) => (
        <div key={tile.label} className="rounded-xl border border-swoop-border bg-white p-4 text-center">
          <p className="text-sm font-semibold">{tile.label}</p>
          <p className="mt-2 text-2xl font-bold">{tile.conversion}</p>
          <p className="text-xs text-swoop-muted">{tile.revenue}</p>
        </div>
      ))}
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function ServiceFailureBlock() {
  const issues = [
    { issue: 'Slow turn-time at grill', impact: '-$1.4K' },
    { issue: 'Pro shop line > 12 min', impact: '-$900' },
    { issue: 'Starter delayed pairings', impact: '-$650' },
  ]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Service Failures if Short-Staffed</p>
      <ul className="mt-3 space-y-2 text-xs">
        {issues.map((item) => (
          <li key={item.issue} className="flex items-center justify-between rounded-md border border-swoop-border px-2 py-2">
            <span>{item.issue}</span>
            <span className="font-semibold">{item.impact}</span>
          </li>
        ))}
      </ul>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function SourceBadgeRow() {
  const sources = ['Tee Sheet', 'POS', 'Weather', 'CRM', 'Notes']

  return (
    <div className="flex flex-wrap gap-2">
      {sources.map((source) => (
        <span key={source} className="rounded-full border border-swoop-border bg-white px-3 py-1 text-xs font-semibold text-swoop-muted">
          {source}
        </span>
      ))}
    </div>
  )
}

export function StaffingForecastGrid() {
  const blocks = [15, 25, 40, 55, 70, 85, 65, 45]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">48h Staffing Forecast</p>
      <div className="mt-3 space-y-2 text-xs">
        <div>
          <p className="mb-1 text-swoop-muted">On Duty</p>
          <div className="grid grid-cols-8 gap-1">
            {blocks.map((value, idx) => (
              <span key={idx} className="h-5 rounded" style={{ backgroundColor: `rgba(31,47,36,${Math.max(value / 100, 0.12)})` }} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-1 text-swoop-muted">Needed</p>
          <div className="grid grid-cols-8 gap-1">
            {[20, 35, 45, 65, 88, 95, 72, 50].map((value, idx) => (
              <span key={idx} className="h-5 rounded" style={{ backgroundColor: `rgba(243,146,45,${Math.max(value / 100, 0.15)})` }} />
            ))}
          </div>
        </div>
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function StaffingBeforeAfterCard() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-swoop-border bg-white p-4 text-xs">
        <p className="font-semibold">Before</p>
        <p className="mt-2 text-swoop-muted">Labor %: 34%</p>
        <p className="text-swoop-muted">Member wait: 22 min</p>
      </div>
      <div className="rounded-xl border border-swoop-border bg-white p-4 text-xs">
        <p className="font-semibold">After Swoop</p>
        <p className="mt-2 text-swoop-muted">Labor %: 29%</p>
        <p className="text-swoop-muted">Member wait: 9 min</p>
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function BoardSnapshotCard() {
  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Board Snapshot</p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <div className="rounded-md bg-swoop-bg p-2"><p>Labor %</p><p className="font-bold">29%</p></div>
        <div className="rounded-md bg-swoop-bg p-2"><p>Service</p><p className="font-bold">94%</p></div>
        <div className="rounded-md bg-swoop-bg p-2"><p>Saves</p><p className="font-bold">11</p></div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
        {['Retention', 'Staffing', 'F&B'].map((tag) => <span key={tag} className="rounded-full bg-swoop-dark px-2 py-1 text-white">{tag}</span>)}
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function BoardReportPreview() {
  return (
    <div className="space-y-3">
      <div className="rounded-xl border border-swoop-border bg-white p-4 text-xs">
        <p className="font-semibold">Revenue Callout</p>
        <p className="mt-1 text-swoop-muted">+$42K protected ARR this month</p>
      </div>
      <div className="rounded-xl border border-swoop-border bg-white p-4 text-xs">
        <p className="font-semibold">Risk & Staffing Callout</p>
        <p className="mt-1 text-swoop-muted">3 high-risk members routed, 2 coverage windows corrected</p>
      </div>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function AttributionChordMock() {
  const items = [
    { source: 'Tee Sheet', impact: '$12K' },
    { source: 'POS', impact: '$7K' },
    { source: 'CRM', impact: '$18K' },
  ]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Attribution Map</p>
      <ul className="mt-3 space-y-2 text-xs">
        {items.map((item) => (
          <li key={item.source} className="grid grid-cols-[80px_1fr_50px] items-center gap-2">
            <span>{item.source}</span>
            <span className="h-2 rounded bg-swoop-bg"><span className="block h-2 rounded bg-swoop-dark" style={{ width: `${Number.parseInt(item.impact.replace('$', ''), 10) * 4}%` }} /></span>
            <span className="text-right font-semibold">{item.impact}</span>
          </li>
        ))}
      </ul>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function PipelineExampleCard() {
  const opps = [
    { name: 'Family upgrade - Jordan', stage: 'Offer sent', value: '$14K' },
    { name: 'Corporate foursome - Mesa', stage: 'Negotiation', value: '$9K' },
    { name: 'Lesson package - Whitfield', stage: 'Qualified', value: '$4K' },
  ]

  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Pipeline Example</p>
      <ul className="mt-3 space-y-2 text-xs">
        {opps.map((opp) => (
          <li key={opp.name} className="rounded-md border border-swoop-border p-2">
            <p className="font-semibold">{opp.name}</p>
            <p className="text-swoop-muted">{opp.stage} · Weighted {opp.value}</p>
          </li>
        ))}
      </ul>
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function SchedulerMock() {
  const slots = ['Mon 9:00 AM', 'Mon 11:30 AM', 'Tue 1:00 PM', 'Wed 3:30 PM']
  return (
    <div className="rounded-xl border border-swoop-border bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Schedule a walkthrough</p>
      <div className="mt-3 grid gap-2">
        {slots.map((slot) => (
          <button key={slot} className="rounded-lg border border-swoop-border px-3 py-2 text-left text-sm hover:bg-swoop-bg">
            {slot}
          </button>
        ))}
      </div>
    </div>
  )
}

function AnnotationList({ items }) {
  return (
    <ul className="mt-3 space-y-1 text-xs text-swoop-muted">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="text-swoop-accent mt-0.5">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DailyBriefingScreenshot() {
  const annotations = [
    'Quick Wins stack ranks saves, staffing, and revenue actions',
    'Live member on-property count with alerts',
    'Board summary auto-builds from actions',
  ]
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 text-xs">
      <p className="font-semibold">Daily Briefing</p>
      <div className="mt-3 space-y-2 text-swoop-muted">
        <div className="rounded-lg border border-swoop-border px-3 py-2">
          <p className="font-semibold text-swoop-dark">Quick Wins</p>
          <p>Save queue · Staffing gap · Tee sheet recovery</p>
        </div>
        <div className="rounded-lg border border-swoop-border px-3 py-2">
          <p className="font-semibold text-swoop-dark">Members on property</p>
          <p>47 right now · 3 at-risk · 2 VIP clusters</p>
        </div>
      </div>
      <AnnotationList items={annotations} />
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function AgentCommandScreenshot() {
  const annotations = [
    'Approve/Dismiss buttons show predicted impact',
    'GM script + comp offer inside drawer',
    'Audit log stamps owner + due date',
  ]
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 text-xs">
      <p className="font-semibold">Agent Command</p>
      <div className="mt-3 rounded-lg border border-swoop-border px-3 py-2 text-swoop-muted">
        <p className="font-semibold text-swoop-dark">Retention outreach · James Whitfield</p>
        <p>Impact +$22K ARR · Confidence 84%</p>
      </div>
      <AnnotationList items={annotations} />
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function TeeSheetScreenshot() {
  const annotations = [
    'FIFO vs Retention view shows who gets the slot',
    'Cancellation risk heat bars update live',
    'Routing reason explains the save logic',
  ]
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 text-xs">
      <p className="font-semibold">Tee Sheet Routing</p>
      <div className="mt-3 grid gap-2 text-swoop-muted">
        <div className="rounded border border-swoop-border px-3 py-2">
          <p className="font-semibold text-swoop-dark">FIFO</p>
          <p>Slot goes to Tom C.</p>
        </div>
        <div className="rounded border border-swoop-border px-3 py-2">
          <p className="font-semibold text-swoop-dark">Retention</p>
          <p>Slot goes to Anne J. (score 58)</p>
        </div>
      </div>
      <AnnotationList items={annotations} />
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function MemberRosterScreenshot() {
  const annotations = [
    'Health score trend with decay timeline',
    'Tier and value badges for prioritization',
    'One-click to open profile drawer',
  ]
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 text-xs">
      <p className="font-semibold">Member Roster</p>
      <div className="mt-3 space-y-2">
        {['James Whitfield · Platinum · 42', 'Anne Jordan · Gold · 54', 'Tom Park · Silver · 58'].map((row) => (
          <div key={row} className="rounded border border-swoop-border px-3 py-2 text-swoop-muted">{row}</div>
        ))}
      </div>
      <AnnotationList items={annotations} />
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}

export function BoardReportScreenshot() {
  const annotations = [
    'Revenue, staffing, and retention callouts auto-filled',
    'Action-to-outcome links recorded for audit',
    'Exports ready for PDF/board packets',
  ]
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 text-xs">
      <p className="font-semibold">Board Report</p>
      <div className="mt-3 space-y-2 text-swoop-muted">
        <div className="rounded border border-swoop-border px-3 py-2">+$42K protected ARR</div>
        <div className="rounded border border-swoop-border px-3 py-2">Labor % 29 · Service 94%</div>
        <div className="rounded border border-swoop-border px-3 py-2">11 saves logged this month</div>
      </div>
      <AnnotationList items={annotations} />
      <DemoDisclosure className="mt-4 text-[11px]" />
    </div>
  )
}
