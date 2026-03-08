import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'For Directors of Golf',
  description: 'Tee sheet optimization, pace of play intelligence, and retention-driven waitlist management for Directors of Golf at private clubs.',
}

const dogChallenges = [
  { challenge: 'You fill tee times, but lose your best members in the process', detail: 'FIFO waitlists fill canceled slots — but not with the right members. Swoop prioritizes at-risk, high-value members first so every filled slot protects retention, not just occupancy.' },
  { challenge: 'Pace of play complaints spike, but you can\'t predict which days', detail: 'You fix slow play after members complain. Swoop predicts bottleneck days 48 hours ahead based on booking patterns, player archetypes, and weather — so you staff marshals proactively.' },
  { challenge: 'Your waitlist software is just a phone tree with extra steps', detail: 'Current tools notify everyone on the waitlist. Swoop ranks by retention risk × lifetime value × acceptance rate and sends targeted notifications to the right members.' },
]

const dogTools = [
  { tool: 'Retention-Prioritized Waitlist', desc: 'When a slot opens, Swoop routes it to at-risk members or high-value players first — not whoever signed up earliest. Fill the sheet AND protect your member base.' },
  { tool: 'Pace of Play Prediction', desc: 'Forecast slow round risk 48 hours ahead. Swoop analyzes booking patterns, player mix, and weather to flag days that need marshal coverage or interval adjustments.' },
  { tool: 'Demand Forecasting', desc: 'See which days are trending under-capacity and which are at risk of overbooking. Adjust inventory, messaging, or member outreach before losses compound.' },
  { tool: 'Member Engagement Tracking', desc: "Which members haven't booked in 30+ days? Which weekend warriors are slipping to once-a-month play? Swoop surfaces engagement decay before it becomes churn." },
  { tool: 'Post-Round F&B Conversion', desc: 'Track which members skip the Grill Room after their round. Swoop flags low-converting golfers so you can test targeted post-round nudges or member ambassador outreach.' },
  { tool: 'Operations Dashboard', desc: "Real-time view of today's tee sheet flow, pace of play alerts, staffing coverage, and cancellation clusters. Your command center for daily golf operations." },
]

export default function DirectorsOfGolfPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Directors of Golf</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tee sheet intelligence that protects members, not just occupancy.
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            Swoop is built for Directors of Golf who know that filling every tee time means nothing if you're losing your best members in the process.
          </p>
          <div className="flex gap-4">
            <Link href="/book-demo" className="px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
              Book a Demo
            </Link>
            <Link href="/capabilities/tee-sheet-demand" className="px-6 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition">
              See Demand Intelligence
            </Link>
          </div>
        </div>
      </section>

      {/* DOG Challenges */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The waitlist problem</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {dogChallenges.map((item) => (
              <div key={item.challenge} className="bg-swoop-card border-l-4 border-lens-operations rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                <p className="text-swoop-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Swoop Gives DOGs */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Your golf operations command center</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            From tee sheet optimization to pace of play prediction to post-round engagement — Swoop connects the operational dots.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogTools.map((t) => (
              <div key={t.tool} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{t.tool}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario: Retention-Driven Waitlist */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How retention-prioritized waitlists work</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            A real scenario: Saturday 7:40 AM tee time cancels at 5:30 AM. 14 members on the waitlist.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border-2 border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4">Traditional FIFO Waitlist</h3>
              <p className="text-white/70 text-sm mb-4">
                Notifies whoever signed up first. Slot goes to Tom Chen — engaged member, plays 3x/week, zero churn risk.
              </p>
              <p className="text-red-300 font-semibold text-sm">
                Result: Tee time filled. At-risk member Anne Jordan (12-year member, $14K/yr value, hasn't played in 6 weeks) still waiting. She resigns 3 weeks later.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border-2 border-swoop-green/50">
              <h3 className="text-lg font-semibold text-swoop-green mb-4">Swoop Retention-First Routing</h3>
              <p className="text-white/70 text-sm mb-4">
                Swoop ranks waitlist by: retention risk × lifetime value × acceptance rate. Routes to Anne Jordan — at-risk, $14K/yr, 92% acceptance rate.
              </p>
              <p className="text-swoop-green font-semibold text-sm">
                Result: Tee time filled. At-risk member gets priority slot. Anne plays, reconnects, stays engaged. Member retained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Existing Tee Sheets */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Works with your current tee sheet software</h2>
          <p className="text-swoop-muted max-w-2xl mx-auto mb-8">
            Swoop integrates with leading tee sheet and booking platforms. We don't replace your tee sheet — we add the intelligence layer on top.
          </p>
          <Link href="/integrations" className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            See All Integrations
          </Link>
        </div>
      </section>

      <CTASection 
        headline="See retention-driven waitlists in action." 
        subtext="We'll walk you through a typical cancellation scenario and show how Swoop prioritizes the right members." 
      />
    </>
  )
}
