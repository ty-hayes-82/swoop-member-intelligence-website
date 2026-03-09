import Link from 'next/link'
import CTASection from '@/components/CTASection'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import MetricCalloutStrip from '@/components/MetricCalloutStrip'
import MemberTableDemo from '@/components/MemberTableDemo'
import { MemberRiskRoster, DecayTimeline, GmActionScript } from '@/components/ProductMockups'

export const metadata = {
  title: 'Member Intelligence',
  description: 'Surface changing engagement behavior before it turns into churn risk. Prioritize interventions by member value and relationship sensitivity.',
}

const metrics = [
  { value: '6.4 wks', label: 'Average early warning', detail: 'Member Pulse lead time across demo data' },
  { value: '$1.38M', label: 'Value at risk monitored', detail: 'Annual dues + F&B tracked for Oakmont Hills' },
  { value: '92%', label: 'Prediction confidence', detail: 'Member Pulse accuracy vs. resignations' },
]

const signals = [
  { label: 'Visit Frequency', desc: 'Track rounds, dining visits, and facility usage trends per member over rolling 90-day windows.' },
  { label: 'F&B Spend Patterns', desc: 'Detect declining spend, minimum-only behavior, and outlet abandonment before it becomes a pattern.' },
  { label: 'Email Engagement', desc: 'Open rates, click-through, and unsubscribe signals that indicate emotional withdrawal.' },
  { label: 'Complaint History', desc: 'Unresolved complaints are the strongest churn predictor. Swoop tracks time-to-resolution and escalation status.' },
  { label: 'Event Participation', desc: 'Members who stop attending social events are withdrawing from the community — often months before resigning.' },
  { label: 'Family Usage', desc: 'When spouses and children stop using the club, the primary member is 3x more likely to resign within 6 months.' },
]

const archetypes = [
  { name: 'Die-Hard', desc: 'High engagement across all touchpoints. Low risk. Focus on recognition and referral programs.', color: 'bg-lens-operations' },
  { name: 'Weekend Warrior', desc: 'Plays every weekend but minimal weekday or social engagement. Stable but narrow.', color: 'bg-lens-briefing' },
  { name: 'Balanced Active', desc: 'Uses golf, dining, and events regularly. The ideal member profile. Protect at all costs.', color: 'bg-lens-pipeline' },
  { name: 'Declining', desc: 'Engagement dropping across 2+ domains over 2-3 months. High churn risk. Intervention window closing.', color: 'bg-lens-staffing' },
  { name: 'Ghost', desc: 'Paying dues but zero activity. Already mentally resigned. Last chance for re-engagement.', color: 'bg-lens-fb' },
  { name: 'Snowbird', desc: 'Seasonal usage pattern. Not declining — just away. Don\'t trigger false alarms.', color: 'bg-lens-members' },
]

export default function MemberIntelligencePage() {
  return (
    <div className="space-y-16">
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-members" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Member Health</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Member Intelligence</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Surface changing engagement behavior before it turns into churn risk. Prioritize interventions by member value and relationship sensitivity.
          </p>
        </div>
      </section>

      <section className="px-6 -mt-8">
        <div className="max-w-container mx-auto">
          <MetricCalloutStrip metrics={metrics} />
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto grid gap-6 lg:grid-cols-3">
          <MemberRiskRoster />
          <DecayTimeline />
          <GmActionScript />
        </div>
      </section>

      {/* The James Whitfield hook */}
      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto max-w-3xl text-center">
          <p className="text-swoop-green font-mono text-sm mb-4">REAL SCENARIO FROM DEMO DATA</p>
          <h2 className="text-3xl font-bold mb-6">James Whitfield&apos;s health score dropped from 78 to 42 in six weeks. Nobody noticed.</h2>
          <p className="text-white/70 text-lg">His visit frequency fell 40%. His F&B spend hit minimum-only. He filed a complaint that sat unresolved for 6 days. Swoop flagged him on day one. Your CRM never mentioned it.</p>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <ScreenshotLightbox
            src="/screenshots/member-intelligence.png"
            alt="Member Intelligence dashboard showing health scores and at-risk members"
            frameClassName="rounded-xl overflow-hidden shadow-2xl border border-swoop-border"
            imageClassName="w-full"
            caption="Member Intelligence ranks every member, shows decay signals, and surfaces the next action."
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-swoop-bg">
        <div className="max-w-container mx-auto">
          <MemberTableDemo />
        </div>
      </section>

      {/* Behavioral signals */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Six behavioral signals. One health score.</h2>
          <p className="text-swoop-muted mb-12">Swoop&apos;s health score (0–100) combines signals from every connected system into a single, actionable number updated daily.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signals.map((s) => (
              <div key={s.label} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{s.label}</h3>
                <p className="text-sm text-swoop-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member archetypes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Member archetypes — how GMs actually think.</h2>
          <p className="text-swoop-muted mb-12">Swoop classifies members into behavioral archetypes that match how you already talk about them. Not data science jargon — GM language.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archetypes.map((a) => (
              <div key={a.name} className={`bg-swoop-card border border-swoop-border rounded-xl p-6 border-l-4 ${a.color}`}>
                <h3 className="font-semibold mb-2">{a.name}</h3>
                <p className="text-sm text-swoop-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="See which members need attention today." subtext="Book a demo and we'll show you the health scores from our 300-member simulation." />
    </div>
  )
}
