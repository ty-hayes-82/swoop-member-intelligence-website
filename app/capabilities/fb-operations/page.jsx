import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'F&B Operations',
  description: 'Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.',
}

const insights = [
  { title: 'Post-Round Dining Conversion', desc: 'Track which tee times convert to dining visits. A 35% baseline means 65% of golfers leave without spending at the grill room. Swoop identifies the gap and the intervention.' },
  { title: 'Weather-Adjusted Prep', desc: 'Rain forecast + 40 indoor reservations = prep the dining room, not the patio. Swoop connects weather data to F&B demand signals 24 hours ahead.' },
  { title: 'Outlet Performance', desc: 'Compare Grill Room vs. Halfway House vs. Banquet revenue per cover, labor cost per dollar, and member satisfaction signals across every outlet.' },
  { title: 'Menu Optimization Signals', desc: 'Which items drive repeat visits? Which correlate with complaints? Connect POS line items to member behavior patterns.' },
  { title: 'Event-Driven Demand', desc: 'Tournament days spike F&B demand 3x. Swoop auto-flags these windows so prep and staffing scale before the rush, not during it.' },
  { title: 'Member Dining Archetypes', desc: 'Some members dine after every round. Others never touch F&B. Segment-specific nudges can shift minimum-only members to active diners.' },
]

const crossSystemExample = {
  title: 'Sunday, January 12, 2026: How your tee sheet killed your F&B revenue',
  systems: [
    { name: 'Tee Sheet', data: '11:00 AM - 1:00 PM: 42 tee times booked', insight: 'High expected volume' },
    { name: 'Weather', data: '72°F, sunny, light wind', insight: 'Ideal post-round dining conditions (+12% conversion vs. baseline)' },
    { name: 'Historical POS', data: '68% of Sunday mid-morning rounds convert to Grill Room dining', insight: 'Expected ~29 post-round diners' },
    { name: 'Pace Data', data: 'Rounds running 4:45 avg (target: 4:15)', insight: 'Slow pace = late dining, impatient members' },
    { name: 'POS Reality', data: 'Only 11 post-round diners (38% of expected)', insight: '$1,680 lost vs. forecast' },
  ],
  theGap: 'Your tee sheet booked correctly. Your weather was perfect. Your kitchen was ready. But slow pace killed conversion. Members finished at 4:00 PM instead of 3:30 PM, skipped lunch entirely or left for home. Your POS shows the revenue loss. Your tee sheet shows the cause. Only Swoop connects them.',
}

const conversionDrivers = [
  { 
    factor: 'Pace of Play', 
    impact: 'Rounds over 4:30 → 18% conversion. Rounds under 4:15 → 42% conversion.', 
    fix: 'Monitor pace real-time, slow groups targeted for marshal intervention before 9-hole turn.' 
  },
  { 
    factor: 'Tee Time Clustering', 
    impact: 'When 12+ groups finish within 20 minutes, Grill Room overwhelms → long waits → members leave.', 
    fix: 'Space prime-time tee times by 9 minutes instead of 8. Smooths demand without reducing slots.' 
  },
  { 
    factor: 'Weather Prediction', 
    impact: 'Hot days (>85°F) drive beverage cart revenue +40%, Grill Room -15%. Cold/rain reverses it.', 
    fix: 'Shift staffing + inventory based on forecast 24 hours ahead.' 
  },
  { 
    factor: 'Member Archetypes', 
    impact: 'Die-Hard Golfers: 82% post-round dining. Weekend Warriors: 28%. Ghosts: 4%.', 
    fix: 'Target low-converters with post-round nudges (app notification: "Grill Room has your favorite burger today").' 
  },
]

export default function FBOperationsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-fb" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">F&B Intelligence</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">F&B Operations</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">$5,700/month in lost dining revenue from slow rounds.</h2>
          <p className="text-white/70">When pace of play exceeds 4:30, post-round dining conversion drops from 35% to 18%. That&apos;s 12 fewer covers per slow day × $28 avg check × 17 slow days per month. Your tee sheet caused it. Your POS felt it. Only Swoop connected the two.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">What your POS can&apos;t tell you on its own.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((i) => (
              <div key={i.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{i.title}</h3>
                <p className="text-sm text-swoop-muted">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-System Example */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">{crossSystemExample.title}</h2>
          <div className="space-y-4 mb-8">
            {crossSystemExample.systems.map((sys) => (
              <div key={sys.name} className="bg-swoop-card border border-swoop-border rounded-xl p-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-lens-fb/20 rounded-lg flex items-center justify-center font-bold">
                  {sys.name === 'Tee Sheet' ? '⛳' : sys.name === 'Weather' ? '☀️' : sys.name === 'Historical POS' ? '📊' : sys.name === 'Pace Data' ? '⏱️' : '💰'}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{sys.name}</h3>
                    <span className="text-xs bg-swoop-bg px-2 py-1 rounded-full text-swoop-muted">{sys.insight}</span>
                  </div>
                  <p className="text-sm text-swoop-muted">{sys.data}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-600 mb-3">The Gap</h3>
            <p className="text-swoop-muted leading-relaxed">{crossSystemExample.theGap}</p>
          </div>
        </div>
      </section>

      {/* Conversion Drivers */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Four factors that make or break post-round dining conversion</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Your POS shows what happened. Swoop shows why — and what to do about it.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {conversionDrivers.map((driver, idx) => (
              <div key={driver.factor} className="bg-swoop-card border-l-4 border-lens-fb rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-lens-fb text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold">{driver.factor}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-swoop-muted mb-1">Impact:</p>
                    <p className="text-swoop-dark">{driver.impact}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-swoop-muted mb-1">The Fix:</p>
                    <p className="text-swoop-dark">{driver.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Revenue Impact */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What a 10-point improvement in post-round conversion is worth</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-4xl font-bold text-swoop-green mb-2">180</p>
              <p className="text-sm text-white/70">Additional post-round diners per month</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-4xl font-bold text-swoop-green mb-2">$28</p>
              <p className="text-sm text-white/70">Average check per diner</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <p className="font-mono text-4xl font-bold text-swoop-green mb-2">$5,040</p>
              <p className="text-sm text-white/70">Additional monthly F&B revenue</p>
            </div>
          </div>
          <div className="bg-swoop-green/20 border-2 border-swoop-green rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-bold text-swoop-green mb-2">Annual impact: $60,480</p>
            <p className="text-white/80 text-sm">All from connecting the data you already have. No menu changes. No price increases. Just operational intelligence.</p>
          </div>
        </div>
      </section>

      <CTASection headline="See your F&B blind spots." subtext="We'll show you the connection between your tee sheet and your dining revenue." />
    </>
  )
}
