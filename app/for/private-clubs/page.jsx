import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'For Private Clubs',
  description: 'Swoop is built for private golf clubs with 150-500 members. Protect your most valuable asset: the member relationship.',
}

const pains = [
  { problem: 'You lost 14 members last year', detail: 'And you only found out when the resignation letters arrived. Every one of those members showed warning signs — declining visits, minimum F&B spend, unresolved complaints — across systems that don\'t talk to each other.' },
  { problem: 'Your board wants data, not anecdotes', detail: 'When you say "we\'re doing great on retention," the board asks for proof. When you say "we need more staff," they ask for ROI. Swoop gives you the numbers behind every operational decision.' },
  { problem: 'Your tech stack is 5 systems deep', detail: 'Tee sheet software, POS system, member CRM, payroll platform, and a spreadsheet holding it all together. Swoop doesn\'t replace any of them — it connects them.' },
]

export default function PrivateClubsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Private Clubs</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for GMs who refuse to lose another member they could have saved.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Swoop is purpose-built for private golf clubs with 150–500 members. Not daily fee. Not resort. Not municipal. Private clubs where the member relationship is everything.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto space-y-8">
          {pains.map((p) => (
            <div key={p.problem} className="bg-swoop-card border border-swoop-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">{p.problem}</h3>
              <p className="text-swoop-muted leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Swoop gives a private club GM:</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Monday Morning Clarity</h3>
              <p className="text-sm text-swoop-muted">Daily Briefing tells you exactly what needs attention — at-risk members, staffing gaps, demand anomalies — before your first meeting.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Board-Ready Intelligence</h3>
              <p className="text-sm text-swoop-muted">Auto-generated reports that prove retention ROI, revenue attribution, and operational efficiency. No more manual board report assembly.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Proactive, Not Reactive</h3>
              <p className="text-sm text-swoop-muted">Six AI agents watching your club 24/7. You approve actions instead of discovering problems after the damage is done.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="See Swoop with your club's scenarios." subtext="Private club demo. Real pain points. 30 minutes." />
    </>
  )
}
