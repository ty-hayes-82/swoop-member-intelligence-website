import DemoForm from '@/components/DemoForm'

export const metadata = {
  title: 'Book a Demo — See Your Club in Swoop',
  description: 'Schedule a personalized 30-minute walkthrough. See tee sheet leakage, at-risk members, F&B pressure, and revenue blind spots using real club scenarios.',
}

const stats = [
  { value: '91%', label: 'Waitlist fill rate' },
  { value: '$312', label: 'Revenue per tee slot' },
  { value: '6 days', label: 'Early warning on resignations' },
]

const whatYouWillSee = [
  {
    title: 'Your Member Risk Profile',
    description: 'See which members are pulling away before they resign. We\'ll show you health scores, engagement decay patterns, and the specific signals that predict churn weeks in advance.',
  },
  {
    title: 'Tee Sheet Revenue Leakage',
    description: 'How much revenue are you leaving on the table from cancellations, no-shows, and suboptimal waitlist management? We\'ll map your demand patterns and show you the recovery opportunity.',
  },
  {
    title: 'Cross-System Intelligence You Can\'t See Today',
    description: 'Your tee sheet, POS, CRM, and payroll systems don\'t talk to each other. Swoop connects them. See how member dining behavior predicts tee sheet engagement, and how staffing gaps correlate with service complaints.',
  },
  {
    title: 'AI Agent Recommendations',
    description: 'Walk through a typical Daily Briefing. See how our six AI agents monitor your club 24/7, flag risks, and recommend specific actions with predicted outcomes.',
  },
]

const demoProcess = [
  { step: '01', title: 'Tell us about your club', description: '5 minutes — Member count, tee sheet system, current retention challenges' },
  { step: '02', title: 'We\'ll show you the platform', description: '20 minutes — Live walkthrough using a 300-member club scenario' },
  { step: '03', title: 'Q&A and next steps', description: '5 minutes — Your questions, pricing, implementation timeline' },
]

const faqs = [
  { q: 'Do I need to bring data to the demo?', a: 'No. We use a realistic demo scenario based on a 300-member club. If you want to see your specific data, we can schedule a follow-up call after you export basic reports from your current systems.' },
  { q: 'How long does implementation take?', a: 'Most clubs are live in under 2 weeks. We connect to your existing systems via API — no rip-and-replace, no IT project.' },
  { q: 'Will this replace my current club management software?', a: 'No. Swoop sits on top of your existing stack (tee sheet platforms, club management systems, POS, etc.) and adds intelligence they can\'t provide. Your staff keeps using the tools they already know.' },
  { q: 'Is this just for large clubs?', a: 'Swoop works for any private club with 200+ members. The ROI scales with member count and annual dues, but the intelligence layer is valuable at any size.' },
]

export default function BookDemoPage() {
  return (
    <>
      {/* Hero + Form */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Book a Demo</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">See your club&apos;s blind spots in 30 minutes.</h1>
            <p className="text-lg text-swoop-muted mb-8">
              Schedule a personalized walkthrough. We&apos;ll show you tee sheet leakage, at-risk members, F&B staffing pressure, and revenue blind spots — using scenarios from a real 300-member club.
            </p>
            <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6 mb-8">
              <p className="font-semibold mb-2">What you&apos;ll see in the demo:</p>
              <ul className="space-y-2 text-sm text-swoop-muted">
                <li className="flex items-start gap-2">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Live platform walkthrough with real club scenarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>AI agent recommendations and Daily Briefing flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Integration mapping for your tech stack</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Pricing, timeline, and implementation details</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-mono text-2xl font-bold text-swoop-green">{s.value}</p>
                  <p className="text-xs text-swoop-muted mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-swoop-muted">Demo scenario metrics from Oakmont Hills CC simulation.</p>
          </div>
          <div id="demo-form" className="bg-swoop-card border border-swoop-border rounded-xl p-8 shadow-lg md:sticky md:top-8">
            <DemoForm />
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What you&apos;ll see in the demo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whatYouWillSee.map((item) => (
              <div key={item.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Process */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How the demo works</h2>
          <p className="text-center text-swoop-muted mb-12 max-w-2xl mx-auto">30 minutes. Zero commitment. You&apos;ll leave with a clear picture of what Swoop can recover for your club.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {demoProcess.map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-swoop-green/10 border-2 border-swoop-green text-2xl font-bold text-swoop-green mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-swoop-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Final CTA */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to see what your club is missing?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Book a 30-minute demo. No pitch deck, no generic slides — just a live walkthrough of the platform with real club scenarios.
          </p>
          <a
            href="#demo-form"
            className="inline-block px-8 py-4 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition text-lg"
          >
            Schedule Your Demo
          </a>
          <p className="text-white/50 text-sm mt-4">Available Mon-Fri, 9am-5pm EST</p>
        </div>
      </section>
    </>
  )
}
