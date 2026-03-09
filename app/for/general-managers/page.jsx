import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'For General Managers',
  description: 'Built for private club GMs who need daily operational clarity, member retention intelligence, and board-ready proof of impact.',
  path: '/for/general-managers',
})

const dailyChallenges = [
  { challenge: 'You manage operations by gut feel, not proof', detail: 'You only learn something was off when a resignation letter or low cover count lands in your lap. Swoop raises the flag six weeks earlier so you can intervene while there is still time.' },
  { challenge: 'Five disconnected systems, zero shared story', detail: 'Tee sheet, POS, CRM, payroll, email — each shows a sliver. Swoop stitches them into one daily brief so you know exactly which lever to pull next.' },
  { challenge: 'Proving impact to the board is guesswork', detail: 'When the board asks "What\'s our ROI on retention efforts?" or "Why do we need more F&B staff?", you have anecdotes. Swoop gives you attribution-ready metrics.' },
]

const gmTools = [
  { tool: 'Daily Briefing', desc: 'Hit your desk at 6 AM with a ranked list of fires, saves, and revenue opportunities. No surfing dashboards. Just act.' },
  { tool: 'Member Intelligence', desc: 'Every member gets a live health score, decay reasons, and a recommended outreach plan. Save the household before the letter hits.' },
  { tool: 'Tee Sheet & Demand', desc: 'Demand Optimizer fills canceled slots with the right members — retention-first, not FIFO. Demand forecasting so you never overbook or underutilize.' },
  { tool: 'F&B Operations', desc: 'Real-time outlet performance. Prep signals based on tee times + weather. Post-round conversion tracking so you know which golfers skip the Grill Room.' },
  { tool: 'Staffing & Labor', desc: 'Coverage gap alerts 24-48 hours ahead. Labor cost per revenue dollar. Shift recommendations that protect service level without blowing budget.' },
  { tool: 'Agent Command', desc: 'Six AI agents monitoring 24/7. They surface issues, recommend actions, show impact estimates. You approve or dismiss — never hunt for problems.' },
]

export default function GeneralManagersPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For General Managers</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trade gut checks for a Monday plan you can trust.
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            You already know the stories. What you need is one place that calls out the problem, suggests the fix, and proves the result before the next board meeting. That is what Swoop delivers.
          </p>
          <div className="flex gap-4">
            <Link href="/book-demo" className="px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
              Book a Demo
            </Link>
            <Link href="/platform" className="px-6 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition">
              See platform tour
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Challenges */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sound familiar?</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {dailyChallenges.map((item) => (
              <div key={item.challenge} className="bg-swoop-card border-l-4 border-swoop-green rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                <p className="text-swoop-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Swoop Gives You */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Your complete command center</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Every GM decision category — member health, tee sheet demand, F&B, staffing, revenue — connected and actionable in one place.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gmTools.map((t) => (
              <div key={t.tool} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{t.tool}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">See It. Fix It. Prove It.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">See It</h3>
              <p className="text-white/70 text-sm">
                Cross-system intelligence surfaces behavioral signals weeks before problems escalate. Member churn risk, demand anomalies, staffing gaps — you see it first.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fix It</h3>
              <p className="text-white/70 text-sm">
                AI agents recommend specific actions with impact estimates. Approve, dismiss, or modify. The system executes and tracks outcomes — you stay in control.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Prove It</h3>
              <p className="text-white/70 text-sm">
                Attribution-ready reporting connects every intervention to revenue recovered, members retained, and costs avoided. Board-ready proof of operational ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        headline="See your club the way you have always wanted." 
        subtext="We'll walk you through a typical Monday morning in Swoop — from Daily Briefing to approved AI recommendations." 
      />
    </>
  )
}
