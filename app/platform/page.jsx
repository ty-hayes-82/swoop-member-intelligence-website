import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Platform Overview',
  description: 'Complete club intelligence platform connecting your tee sheet, POS, CRM, and staffing systems into one decision layer for private club GMs.',
}

const steps = [
  { num: '01', title: 'See It', desc: 'Surface behavioral signals across all five operational categories. Swoop connects your systems and shows you what no single tool can: the full picture of member engagement, demand patterns, and revenue risk.' },
  { num: '02', title: 'Fix It', desc: 'Act on AI-recommended interventions before problems become crises. Six agents monitor your club 24/7, flagging at-risk members, staffing gaps, and demand opportunities — then recommending specific actions.' },
  { num: '03', title: 'Prove It', desc: 'Close the loop with attribution. Every intervention is tracked from trigger to outcome, so you can prove to your board exactly which decisions recovered revenue and retained members.' },
]

const lenses = [
  { title: 'Member Intelligence', desc: 'Behavioral signals, churn risk, lifetime value predictions. Know which members are pulling away before they resign.', color: 'bg-lens-members' },
  { title: 'Tee Sheet & Demand', desc: 'Waitlist optimization, cancellation prediction, demand forecasting. Fill every slot with the right member.', color: 'bg-lens-operations' },
  { title: 'F&B Operations', desc: 'Outlet performance, dining patterns, weather correlation. Shift prep and staffing before service degrades.', color: 'bg-lens-fb' },
  { title: 'Staffing & Labor', desc: 'Coverage optimization, labor cost modeling. Catch understaffed windows before they create complaints.', color: 'bg-lens-staffing' },
  { title: 'Revenue & Pipeline', desc: 'Per-slot revenue, retention-driven yield, pipeline health. Prove which actions moved the numbers.', color: 'bg-lens-pipeline' },
]

export default function PlatformPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Platform</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Complete Command Center</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            One platform that connects every system your club runs on — and turns the gaps between them into actionable intelligence.
          </p>
        </div>
      </section>

      {/* See It, Fix It, Prove It */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">See It → Fix It → Prove It</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <span className="inline-block text-5xl font-bold text-swoop-green/30 mb-4">{s.num}</span>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-swoop-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Five core capabilities. Every GM decision covered.</h2>
          <div className="space-y-6">
            {lenses.map((l) => (
              <div key={l.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6 flex gap-4 items-start">
                <div className={`w-1.5 h-12 rounded-full ${l.color} flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-lg font-semibold mb-1">{l.title}</h3>
                  <p className="text-swoop-muted">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data moat */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">The data moat your competitors can&apos;t cross.</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            The Swoop member app captures GPS location, real-time ordering behavior, engagement signals, and gives you a direct push notification channel. Competitors only see what club systems record. Swoop sees what members actually do.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
