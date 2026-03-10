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

const gmFaqs = [
  { q: 'How long does the Monday review take?', a: '25 minutes. Five to scan signals, fifteen to assign outreach, five to log make-good offers.' },
  { q: 'Can I customize which alerts show up?', a: 'Yes. Tag members, outlets, or KPIs you care about most. The Daily Briefing reorders itself around your priorities.' },
  { q: 'Does Swoop replace my team?', a: 'No. It removes swivel-chair monitoring so your pros and managers focus on the conversations that matter.' },
  { q: 'When will I see retention impact?', a: 'Most clubs see their first save within two weeks because Member Intelligence exposes the silent churners immediately.' },
]

export default function GeneralManagersPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24">
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
      <section className="px-6 py-12 bg-white">
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
      <section className="px-6 py-12">
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
      <section className="px-6 py-12 bg-swoop-dark text-white">
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

      <section className="px-6 py-16">
        <div className="max-w-container mx-auto grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday cadence</p>
            <h3 className="mt-2 text-2xl font-bold">Operational clarity + retention focus</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• 6 AM Daily Briefing prioritizes members, outlets, staffing.</li>
              <li>• Assign outreach owners directly from the briefing.</li>
              <li>• Log promised fixes so the board can see progress Friday.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday recap</p>
            <h3 className="mt-2 text-2xl font-bold">Board talking points ready in minutes</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Saves by household with dues preserved.</li>
              <li>• Service gaps fixed vs. still open.</li>
              <li>• Labor + demand tradeoffs backed by data.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
          <h3 className="mt-3 text-2xl font-bold">GM ops board</h3>
          <p className="mt-3 text-swoop-muted">Side-by-side snapshot of member health, outlet performance, and staffing coverage. Use it to run Monday standups and Friday board preps.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold">Column A</p>
              <p className="text-sm text-swoop-muted">Members with risk + recommended action.</p>
            </div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold">Column B</p>
              <p className="text-sm text-swoop-muted">Outlet alerts and labor fixes.</p>
            </div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold">Column C</p>
              <p className="text-sm text-swoop-muted">Board-ready math: dues protected, covers recovered.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">GM FAQs</h2>
          <div className="mt-6 space-y-4">
            {gmFaqs.map((faq) => (
              <article key={faq.q} className="border-b border-swoop-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Book a Demo for the GM workflow"
        subtext="We&apos;ll walk your team through a live Monday briefing, assign outreach, and export the Friday board recap together."
      />
    </div>
  )
}
