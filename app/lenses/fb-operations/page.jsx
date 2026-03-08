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

      <CTASection headline="See your F&B blind spots." subtext="We'll show you the connection between your tee sheet and your dining revenue." />
    </>
  )
}
