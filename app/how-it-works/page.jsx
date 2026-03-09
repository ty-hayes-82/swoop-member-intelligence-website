import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'

export const metadata = buildMetadata({
  title: 'How It Works',
  description: 'Connect your existing systems, get intelligence in days, and start acting on AI recommendations. Live in under 2 weeks.',
  path: '/how-it-works',
})

const steps = [
  {
    phase: 'Week 1',
    title: 'Connect',
    desc: 'We integrate with your existing tee sheet, POS, CRM, and staffing systems. No rip-and-replace. No IT project. Our team handles the configuration — you just approve the connections.',
    details: ['28 supported integrations', 'API + CSV + FTP connectors', 'Your team does nothing technical', 'Data validation on day 3'],
  },
  {
    phase: 'Week 2',
    title: 'Analyze',
    desc: 'Swoop ingests your data and builds the complete intelligence view of your club. AI agents calibrate to your specific patterns — member behavior, demand cycles, staffing rhythms, F&B operations.',
    details: ['Historical data import (6-12 months)', 'AI model calibration', 'Risk scoring begins', 'Your first Daily Briefing arrives'],
  },
  {
    phase: 'Ongoing',
    title: 'Act',
    desc: 'Every morning, your Daily Briefing surfaces what needs attention. AI agents recommend specific actions. You approve, the system executes, and outcomes are tracked for attribution.',
    details: ['Daily Briefing every morning', '6 AI agents monitoring 24/7', 'Playbook-driven interventions', 'Revenue attribution on every action'],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">How It Works</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Live in under two weeks.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            No six-month implementation. No IT project. Connect your systems, calibrate the AI, and start getting actionable intelligence.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto space-y-16">
          {steps.map((s, i) => (
            <div key={s.title} className="grid md:grid-cols-2 gap-12 items-start">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <span className="text-sm font-bold text-swoop-green uppercase tracking-wider">{s.phase}</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{s.title}</h2>
                <p className="text-swoop-muted text-lg mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-swoop-muted">
                      <span className="text-swoop-green mt-0.5">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 1 ? 'md:order-1' : ''}`}>
                {i === 2 ? (
                  <ScreenshotLightbox
                    src="/screenshots/daily-briefing.png"
                    alt="Daily Briefing example showing morning priorities"
                    frameClassName="rounded-xl overflow-hidden shadow-xl border border-swoop-border"
                    imageClassName="w-full"
                    caption="Go-live Week 2: Daily Briefing delivers actionable intelligence with your member data."
                  />
                ) : (
                  <div className="bg-swoop-bg rounded-xl p-12 flex items-center justify-center">
                    <span className="text-8xl font-bold text-swoop-green/20">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection headline="Ready to see it in action?" subtext="Book a 30-minute walkthrough with your own club scenarios." />
    </>
  )
}
