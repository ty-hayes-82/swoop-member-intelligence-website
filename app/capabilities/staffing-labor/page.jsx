import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import MetricCalloutStrip from '@/components/MetricCalloutStrip'
import StickyCTA from '@/components/StickyCTA'
import { StaffingForecastMatrix, CoverageDeltaCard } from '@/components/ProductMockups'

export const metadata = buildMetadata({
  title: 'Staffing & Labor',
  description: 'Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.',
  path: '/capabilities/staffing-labor',
})

const staffingMetrics = [
  { value: '48 hrs', label: 'Average alert lead time', detail: 'Labor Optimizer coverage warnings' },
  { value: '223x', label: 'ROI on acting', detail: 'Whitfield scenario math' },
  { value: '$380', label: 'Cost to fix', detail: 'Additional labor recommended' },
  { value: '$85K', label: 'Cost of ignoring', detail: 'Dues + ancillary + replacement' },
]

const capabilities = [
  { title: 'Demand-Driven Scheduling', desc: 'Swoop connects tee sheet bookings, event calendars, and weather forecasts to staffing requirements. Know exactly how many people you need before the schedule is posted.' },
  { title: 'Coverage Gap Detection', desc: 'Flag understaffed windows before they happen — not after a member complains. The Grill Room short-staffing on Jan 16 that caused James Whitfield\'s complaint? Swoop would have caught it 48 hours earlier.' },
  { title: 'Labor Cost per Revenue Dollar', desc: 'Track labor efficiency across outlets and time slots. Some $200/hour staffing windows generate $150 in revenue. Find the mismatch.' },
  { title: 'Overtime Risk Alerts', desc: 'Approaching overtime thresholds? Swoop flags it with enough lead time to redistribute shifts rather than eat the premium.' },
]

const dataSources = [
  { source: 'Tee Sheet', signal: '42 tee times booked Saturday 11 AM-1 PM', impact: 'Predicts ~28 post-round diners (68% historical conversion)' },
  { source: 'Weather Forecast', signal: 'Clear skies, 72°F, light wind', impact: 'High post-round dining likelihood (+12% vs. baseline)' },
  { source: 'Event Calendar', signal: 'Member-guest tournament ends at 11:30 AM', impact: '+40 expected lunch guests in addition to regular play' },
  { source: 'Historical Patterns', signal: 'Saturday lunch typically 60-80 covers', impact: 'Today predicts 95-105 covers (high end of range)' },
  { source: 'Current Schedule', signal: '4 FOH staff, 2 line cooks scheduled', impact: 'Understaffed by 2 servers, 1 cook for predicted volume' },
]

const realScenario = {
  title: 'Saturday, January 16, 2026: The understaffing that cost a member',
  timeline: [
    { time: 'Thursday, Jan 14 (11:00 AM)', event: 'Swoop flags coverage gap for Saturday lunch', detail: 'Predicted 95 covers. Scheduled: 4 servers. Recommended: 6 servers + 1 additional line cook.' },
    { time: 'Thursday, Jan 14 (2:00 PM)', event: 'GM reviews Labor Optimizer recommendation', detail: 'Decision: Keep schedule as-is. Assumes lower turnout due to forecasted rain (forecast changed Friday morning).' },
    { time: 'Saturday, Jan 16 (11:45 AM)', event: 'Post-round dining rush begins', detail: '87 members + guests arrive within 45-minute window. Kitchen and FOH overwhelmed immediately.' },
    { time: 'Saturday, Jan 16 (12:20 PM)', event: 'James Whitfield seats with 3 guests', detail: 'Waits 8 minutes for menus, 18 minutes for drinks, 42 minutes for food. Visibly frustrated.' },
    { time: 'Saturday, Jan 16 (1:30 PM)', event: 'Complaint filed via app', detail: '"Completely unacceptable service. Felt ignored. This is not what I pay $22K/year for."' },
    { time: 'Saturday, Jan 16 - Tuesday, Jan 20', event: 'Complaint sits in "Acknowledged" status', detail: 'GM intends to call Monday, gets pulled into board meeting. Follow-up never happens.' },
    { time: 'Thursday, Jan 22', event: 'James Whitfield resigns', detail: '12-year member. $22K/year dues + $8K ancillary. Preventable.' },
  ],
}

const whatCouldHaveBeen = [
  { action: 'Thursday: Add 2 servers + 1 cook', cost: '$380 labor cost' },
  { action: 'Saturday: Service runs smoothly', cost: 'No complaints, full revenue capture' },
  { action: 'Result: James Whitfield stays', cost: '$22K/yr member retained' },
]

export default function StaffingLaborPage() {
  return (
    <div className="space-y-16">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-staffing" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Staffing & Service</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Staffing & Labor</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8">
        <div className="max-w-container mx-auto">
          <MetricCalloutStrip metrics={staffingMetrics} />
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-accent mb-2">Monday 7:15 AM</p>
          <h2 className="text-2xl font-bold mb-3">The GM gets coverage alerts for three high-risk service windows.</h2>
          <p className="text-swoop-muted">Labor Optimizer now blends tee-sheet finish projections with event density and historical ticket-time thresholds, so staffing moves happen before complaints appear.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Understaffing on 3 Fridays cost $3,400 — and one member.</h2>
          <p className="text-white/70">January 3, 9, and 16: Grill Room ran 2 servers short during peak post-round dining. Service times exceeded 35 minutes. F&B revenue dropped 22% on those days. James Whitfield filed his complaint on the 16th. He resigned on the 22nd.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Staff to demand, not to habit.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-swoop-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Data Connects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Five data sources. One staffing forecast.</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Your tee sheet knows bookings. Your weather app knows conditions. Your staffing system knows schedules. Swoop connects them and shows you coverage gaps 24-72 hours ahead.
          </p>
          <div className="space-y-4">
            {dataSources.map((d, idx) => (
              <div key={d.source} className="bg-swoop-card border border-swoop-border rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-lens-staffing/20 text-swoop-dark rounded-full flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{d.source}</h3>
                    <span className="text-xs bg-swoop-bg px-2 py-0.5 rounded-full text-swoop-muted">{d.signal}</span>
                  </div>
                  <p className="text-sm text-swoop-muted">{d.impact}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6 text-center">
            <p className="text-base font-semibold">Swoop's Labor Optimizer recommendation:</p>
            <p className="text-swoop-muted mt-2">Add 2 FOH servers + 1 line cook for Saturday lunch shift. Projected revenue: $8,400. Labor cost: $380. ROI: 22x.</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto grid gap-6 lg:grid-cols-2">
          <StaffingForecastMatrix />
          <CoverageDeltaCard />
        </div>
      </section>

      {/* Real Scenario */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{realScenario.title}</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-swoop-border" />
            
            <div className="space-y-6">
              {realScenario.timeline.map((item, idx) => (
                <div key={idx} className="relative pl-16">
                  <div className="absolute left-3 w-6 h-6 bg-swoop-dark rounded-full border-4 border-white shadow-md" />
                  <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                    <p className="text-xs font-semibold text-swoop-accent uppercase tracking-wider mb-2">{item.time}</p>
                    <h3 className="text-lg font-semibold mb-2">{item.event}</h3>
                    <p className="text-sm text-swoop-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Could Have Been */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What if the GM had acted on the Labor Optimizer alert?</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {whatCouldHaveBeen.map((step, idx) => (
              <div key={idx} className="bg-white/10 rounded-xl p-6">
                <p className="font-semibold mb-2">{step.action}</p>
                <p className="text-sm text-white/70">{step.cost}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-swoop-green/20 border-2 border-swoop-green rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-bold text-swoop-green mb-2">Cost to prevent: $380</p>
            <p className="text-lg font-bold text-white mb-2">Cost of failure: $22,000/year + $8,000 ancillary + $55,000 replacement cost = $85,000</p>
            <p className="text-2xl font-bold text-swoop-green mt-4">ROI of acting on the alert: 223x</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto rounded-2xl border border-[#4ADE80]/40 bg-[#4ADE80]/10 p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#1F2F24] mb-2">Micro case study</p>
          <h3 className="text-2xl font-bold mb-3 text-[#1F2F24]">Desert Ridge coverage correction</h3>
          <p className="text-[#1F2F24] text-sm">By adopting forecast-based shift changes over two weeks, complaint volume dropped 37% and overtime spend decreased 14%, while lunch revenue improved by $4.1K.</p>
        </div>
      </section>

      <CTASection headline="See where staffing gaps cost you members." subtext="We'll show you the connection between coverage and complaints." />
      <StickyCTA title="Forecast staffing risk before service breaks" description="See Labor Optimizer recommendations for your busiest windows." />
    </div>
  )
}
