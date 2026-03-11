import { buildMetadata } from '@/lib/metadata'
import DemoForm from '@/components/DemoForm'
import TrustedBetaStrip from '@/components/TrustedBetaStrip'

export const metadata = buildMetadata({
  title: 'Book a Demo - See Your Club in Swoop',
  description: 'Schedule a personalized 30-minute walkthrough. See tee sheet leakage, at-risk members, F&B pressure, and revenue blind spots using real club scenarios.',
  path: '/book-demo',
})

const stats = [
  { value: '91%', label: 'Waitlist fill rate', context: 'Demo data scenario - Oakmont Hills CC (Jan 2026)' },
  { value: '$312', label: 'Revenue per tee slot', context: 'Demo data scenario - Oakmont Hills CC (Jan 2026)' },
  { value: '6 days', label: 'Early warning on resignations', context: 'Demo data scenario - Oakmont Hills CC (Jan 2026)' },
]

const whatYouWillSee = [
  {
    question: "Which members are about to leave \u2014 and can I catch them in time?",
    outcome: "You\u2019ll see health scores for every member, the engagement signals that predict churn 6 weeks out, and the exact list of at-risk members you can save this month.",
  },
  {
    question: "How much revenue am I losing to empty tee times?",
    outcome: "You\u2019ll see your dollar-per-slot leakage from cancellations, no-shows, and unfilled waitlists \u2014 and the recovery opportunity mapped to your actual demand patterns.",
  },
  {
    question: "Why can\u2019t I connect a bad round to a lost dinner reservation?",
    outcome: "You\u2019ll see tee sheet, POS, CRM, and payroll data unified \u2014 behavior correlations that explain revenue drops and staffing pressure in one view.",
  },
  {
    question: "What should I be acting on right now?",
    outcome: "You\u2019ll walk through a live Daily Briefing \u2014 AI agents monitoring your club 24/7, flagging risks, and recommending actions with predicted outcomes.",
  },
]

const demoProcess = [
  { step: '01', title: 'Tell us about your club', description: '5 minutes - member count, systems, retention challenges.' },
  { step: '02', title: 'See the platform live', description: '20 minutes - guided walkthrough on Oakmont Hills demo data.' },
  { step: '03', title: 'Q&A and next steps', description: '5 minutes - pricing, implementation, board readiness.' },
]

const faqs = [
  { q: 'Who should attend?', a: 'GM plus one ops lead.' },
  { q: 'How long is the demo?', a: '30 minutes.' },
  { q: 'Do I need to prepare anything?', a: 'No. We bring the Oakmont Hills demo data. Bring exports later if you want to see your own club.' },
  { q: 'What happens after?', a: 'You receive a recorded summary, the sample briefing sheet, and next-step recommendations.' },
]

export default function BookDemoPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Book a Demo</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">See your club&apos;s blind spots in 30 minutes.</h1>
            <p className="text-lg text-swoop-muted mb-8">
              Book a personalized walkthrough. We&apos;ll show tee sheet leakage, at-risk members, F&amp;B staffing pressure, and revenue blind spots using the Oakmont Hills demo environment.
            </p>
            <div className="rounded-xl border border-swoop-border/50 bg-swoop-dark/5 p-5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-swoop-accent mb-4">Sound familiar?</p>
              <div className="space-y-4">
                <p className="text-sm text-swoop-muted italic border-l-2 border-swoop-accent/30 pl-3">&ldquo;I manage by anecdotes and lagging reports &mdash; I can&rsquo;t see what&rsquo;s about to break until it&rsquo;s too late.&rdquo;</p>
                <p className="text-sm text-swoop-muted italic border-l-2 border-swoop-accent/30 pl-3">&ldquo;I know my F&amp;B numbers, but I can&rsquo;t connect a bad hole-9 experience to a lost dinner.&rdquo;</p>
                <p className="text-sm text-swoop-muted italic border-l-2 border-swoop-accent/30 pl-3">&ldquo;I can see rounds and spend, but I can&rsquo;t see when a good member is quietly drifting away.&rdquo;</p>
              </div>
              <p className="text-xs text-swoop-muted/60 mt-3">These are the questions only Swoop can answer.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-swoop-border bg-white p-4 text-center">
                  <p className="font-mono text-2xl font-bold text-swoop-dark">{s.value}</p>
                  <p className="text-xs text-swoop-muted mt-1">{s.label}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-widest text-swoop-muted/80">{s.context}</p>
                </div>
              ))}
            </div>
            <ul className="space-y-2 text-sm text-swoop-muted">
              <li>&bull; Live platform walkthrough with real club scenarios</li>
              <li>&bull; AI agent recommendations + Daily Briefing flow</li>
              <li>&bull; Integration mapping for your tech stack</li>
              <li>&bull; Pricing, implementation timeline, and board math</li>
            </ul>
          </div>
          <div id="demo-form" className="bg-swoop-card border border-swoop-border rounded-xl p-8 shadow-lg md:sticky md:top-8">
            <DemoForm origin="book-demo" />
          </div>
        </div>
      </section>

      <TrustedBetaStrip />

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What you&apos;ll see in the demo</h2>
          <p className="text-center text-swoop-muted mb-12 max-w-2xl mx-auto">Every card is a question you&apos;re already asking. The demo shows you the answer.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {whatYouWillSee.map((item) => (
              <div key={item.question} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3 text-swoop-dark">&ldquo;{item.question}&rdquo;</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{item.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How the demo works</h2>
          <p className="text-center text-swoop-muted mb-12 max-w-2xl mx-auto">30 minutes. Zero commitment. Leave with a clear picture of recovered revenue and member saves.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {demoProcess.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-swoop-dark/10 border-2 border-swoop-dark text-2xl font-bold text-swoop-dark mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-swoop-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-container grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday - what you get on the call</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>&bull; 30-minute walkthrough of your club&apos;s risk profile using demo data</li>
              <li>&bull; Q&amp;A on integrations, agent approvals, and handoffs</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday - what you take to your board</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>&bull; Sample briefing sheet showcasing engagement decay + saves</li>
              <li>&bull; ROI estimate tied to your board&apos;s retention targets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Demo agenda</p>
          <div className="space-y-3 text-sm text-swoop-muted mt-4">
            {[
              "1. Your club\u2019s current blind spots",
              '2. Live walkthrough of member health scoring',
              '3. AI agent recommendation examples',
              '4. Custom ROI estimate for your club',
            ].map((item) => (
              <p key={item} className="rounded-xl border border-swoop-border bg-swoop-bg px-4 py-3">{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Common questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-swoop-border pb-6 last:border-0">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-swoop-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see what your club is missing?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Book a 30-minute demo. No pitch deck, no generic slides &mdash; just a live walkthrough of the platform with real club scenarios.
          </p>
          <a
            href="#demo-form"
            className="inline-block px-8 py-4 bg-white text-swoop-dark font-semibold rounded-lg hover:bg-white/90 transition text-lg"
          >
            Book a Demo
          </a>
          <p className="text-white/50 text-sm mt-4">Available Mon-Fri, 9am-5pm EST</p>
        </div>
      </section>
    </>
  )
}
