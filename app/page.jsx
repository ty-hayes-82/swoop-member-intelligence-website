import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import CTASection from '@/components/CTASection'
import RoiCalculator from '@/components/RoiCalculator'
import ScreenshotLightbox from '@/components/ScreenshotLightbox'
import HeroBanner from '@/components/HeroBanner'
import LensCard from '@/components/LensCard'

const lenses = [
  { slug: 'member-intelligence', title: 'Member Intelligence', icon: '👥', color: 'border-lens-members', bgColor: 'bg-purple-50', description: 'Surface changing engagement behavior before it turns into churn risk. Prioritize interventions by member value and relationship sensitivity.' },
  { slug: 'tee-sheet-demand', title: 'Tee Sheet & Demand', icon: '⛳', color: 'border-lens-operations', bgColor: 'bg-green-50', description: 'Predict cancellations and backfill each open slot with the right member. Optimize pace and demand signals without overbooking guesswork.' },
  { slug: 'fb-operations', title: 'F&B Operations', icon: '🍽️', color: 'border-lens-fb', bgColor: 'bg-amber-50', description: 'Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.' },
  { slug: 'staffing-labor', title: 'Staffing & Labor', icon: '👔', color: 'border-lens-staffing', bgColor: 'bg-orange-50', description: 'Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.' },
  { slug: 'revenue-pipeline', title: 'Revenue & Pipeline', icon: '💰', color: 'border-lens-pipeline', bgColor: 'bg-rose-50', description: 'Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.' },
]

const agents = [
  { name: 'Member Pulse', icon: '🛟', description: 'Detects early churn signals and proposes interventions before members disengage.' },
  { name: 'Demand Optimizer', icon: '🎯', description: 'Balances waitlist demand, cancellation prediction, and tee sheet fill optimization.' },
  { name: 'Service Recovery', icon: '🍴', description: 'Surfaces unresolved complaints and drafts recovery actions before resignation windows close.' },
  { name: 'Labor Optimizer', icon: '📊', description: 'Forecasts staffing gaps and recommends coverage shifts to protect service quality and margin.' },
  { name: 'Revenue Analyst', icon: '💎', description: 'Flags preventable revenue leakage and recommends high-confidence margin actions.' },
  { name: 'Engagement Autopilot', icon: '📋', description: 'Monitors declining participation and proposes targeted outreach for member reactivation.' },
]

const comparison = [
  { feature: 'Member churn prediction', swoop: 'full', waitlistTools: 'none', crm: 'partial', sheets: 'none' },
  { feature: 'Retention-prioritized waitlist', swoop: 'full', waitlistTools: 'partial', crm: 'none', sheets: 'none' },
  { feature: 'Cross-system analytics', swoop: 'full', waitlistTools: 'none', crm: 'partial', sheets: 'partial' },
  { feature: 'AI agent automation', swoop: 'full', waitlistTools: 'none', crm: 'none', sheets: 'none' },
  { feature: 'Real-time behavioral data', swoop: 'full', waitlistTools: 'partial', crm: 'partial', sheets: 'none' },
  { feature: 'Closed-loop engagement', swoop: 'full', waitlistTools: 'full', crm: 'partial', sheets: 'none' },
]

const integrationCategories = [
  { label: 'Tee Sheet & Booking', description: 'Leading tee sheet platforms and booking systems' },
  { label: 'Member CRM', description: 'Club management and member relationship systems' },
  { label: 'POS & F&B', description: 'Point-of-sale and restaurant management platforms' },
  { label: 'Communications', description: 'Email, SMS, and member communication tools' },
  { label: 'Staffing & Payroll', description: 'Workforce management and payroll systems' },
  { label: 'Finance & BI', description: 'Accounting, ERP, and business intelligence platforms' },
  { label: 'Web & Lead Capture', description: 'Website forms and lead capture tools' },
  { label: 'Access & Activity', description: 'Access control and activity tracking systems' },
]

function ComparisonCell({ value }) {
  if (value === 'full') return <td className="text-center text-swoop-green font-bold text-lg py-3">✓</td>
  if (value === 'partial') return <td className="text-center text-amber-500 font-bold text-lg py-3">~</td>
  return <td className="text-center text-red-400 font-bold text-lg py-3">✕</td>
}

export default function HomePage() {
  return (
    <>
      <HeroBanner
        eyebrow="For Private Club General Managers"
        title="Know a member is leaving before they do."
        description="Swoop connects your tee sheet, POS, CRM, and email into a single intelligence layer — surfacing decay signals weeks before resignation letters arrive."
        primaryAction={{ href: '/book-demo', label: 'Book a Demo' }}
        secondaryAction={{ href: '/platform', label: 'See the Platform' }}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
        stats={[
          '$1.38M annual value at risk identified',
          '6.4 week average early warning',
          '87% tee sheet fill rate',
        ]}
        backgroundPriority
      >
        <ScreenshotLightbox
          src="/screenshots/daily-briefing.png"
          alt="Swoop Daily Briefing - Morning priorities with Quick Wins and at-risk member alerts"
          frameClassName="rounded-xl overflow-hidden shadow-2xl border border-swoop-border max-w-2xl mx-auto"
          imageClassName="w-full"
          caption="Morning Briefing surfaces Quick Wins, at-risk members, and action items in one glance."
        />
      </HeroBanner>
      <p className="text-center text-xs text-swoop-muted mt-2">Demo scenario: Oakmont Hills CC</p>

      <TrustStrip />

      {/* Problem cards */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The problem isn&apos;t your team. It&apos;s your visibility.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Your tee sheet, POS, CRM, email platform, and payroll system each see part of the picture. None of them talk to each other.',
              "A member stops playing. Dining drops off. Email engagement goes silent. By the time you notice, they've already decided to leave.",
              'Average member replacement cost: 2.5x annual dues. Most GMs find out about churn problems when the resignation letter arrives.',
            ].map((text) => (
              <div key={text} className="bg-white border-2 border-slate-200 rounded-2xl p-10 hover:border-swoop-green transition">
                <p className="text-base leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA - After Problem */}
      <div className="py-8 px-6">
        <div className="max-w-container mx-auto text-center">
          <Link href="/book-demo" className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            See how it works →
          </Link>
        </div>
      </div>

      {/* Core Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Complete Command Center</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">Every GM decision category — member health, tee sheet demand, F&B, staffing, and revenue — connected and actionable in one place.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lenses.map((lens) => (
              <LensCard
                key={lens.slug}
                href={`/capabilities/${lens.slug}`}
                icon={lens.icon}
                title={lens.title}
                description={lens.description}
                colorClass={lens.color}
                bgClass={lens.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA - After Lenses */}
      <div className="py-8 px-6">
        <div className="max-w-container mx-auto text-center">
          <Link href="/book-demo" className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            Book a demo →
          </Link>
        </div>
      </div>

      {/* Product Screenshots */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">See it in action.</h2>
          <p className="text-white/70 text-center mb-16 max-w-2xl mx-auto">
            Real intelligence. Real recommendations. Real impact.
          </p>
          
          {/* Member Intelligence */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-4">Know who's leaving before they do.</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Member health scores aggregate engagement signals across golf, dining, email, and events. Decay shows up 6–8 weeks before resignation letters arrive.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>At-risk members ranked by annual value and intervention urgency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Archetype-based segmentation (Die-Hard, Weekend Warrior, Declining, Ghost)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Predicted resignations with timeline and confidence scores</span>
                </li>
              </ul>
            </div>
            <ScreenshotLightbox
              src="/screenshots/member-intelligence.png"
              alt="Member Intelligence dashboard showing health scores and at-risk members"
              frameClassName="rounded-xl overflow-hidden shadow-2xl border border-white/10"
              imageClassName="w-full"
              caption="Member Pulse ranks at-risk members by value, urgency, and recommended playbook."
            />
          </div>

          {/* AI Agent Command */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScreenshotLightbox
              src="/screenshots/agent-command.png"
              alt="AI Agent Command showing pending recommendations and actions"
              frameClassName="order-2 md:order-1 rounded-xl overflow-hidden shadow-2xl border border-white/10"
              imageClassName="w-full"
              caption="Agent Command tracks every recommendation, approval, and measured outcome."
            />
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Six agents monitoring 24/7.</h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                AI agents flag issues before they escalate — service complaints, staffing gaps, demand shifts, at-risk members. You approve decisions instead of hunting for problems.
              </p>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Recommended actions with impact estimates and approval paths</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Bulk decisions by agent type (demand, staffing, retention, revenue)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-swoop-green mt-0.5">✓</span>
                  <span>Closed-loop tracking from trigger → action → outcome</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Built to replace patchwork ops.</h2>
          <p className="text-swoop-muted text-center mb-12">Honest comparison. We give credit where it&apos;s earned.</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse bg-swoop-card rounded-xl overflow-hidden border border-swoop-border">
              <thead>
                <tr className="bg-swoop-bg">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Swoop</th>
                  <th className="text-center p-4 font-semibold">Waitlist Tools</th>
                  <th className="text-center p-4 font-semibold">Your CRM</th>
                  <th className="text-center p-4 font-semibold">Spreadsheets</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-t border-swoop-border">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <ComparisonCell value={row.swoop} />
                    <ComparisonCell value={row.waitlistTools} />
                    <ComparisonCell value={row.crm} />
                    <ComparisonCell value={row.sheets} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4 text-xs text-swoop-muted">
            Legend: ✓ Full support · ~ Partial/limited · ✕ Not available
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your GM platform now has a staff.</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">Six AI agents monitor your club 24/7, surface risks, and recommend actions — so you approve decisions instead of hunting for data.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div key={agent.name} className="bg-swoop-card border border-swoop-border rounded-xl p-6 border-l-4 border-lens-agents">
                <div className="text-3xl mb-3">{agent.icon}</div>
                <h3 className="font-semibold mb-2">{agent.name}</h3>
                <p className="text-sm text-swoop-muted">{agent.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ai-agents" className="text-swoop-accent font-medium hover:underline">See all agents in action →</Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">28 integrations. One intelligence layer.</h2>
          <p className="text-swoop-muted text-center mb-12">Live in under 2 weeks. No rip-and-replace.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((cat) => (
              <div key={cat.label} className="bg-white border-2 border-slate-200 rounded-2xl p-10 hover:border-swoop-green transition">
                <h3 className="font-semibold mb-3">{cat.label}</h3>
                <p className="text-sm text-swoop-muted">{cat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* Founding Partner */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Founding Partner Program</h2>
          <p className="text-swoop-muted mb-12 max-w-2xl mx-auto">
            We&apos;re onboarding our first 10 clubs with hands-on implementation, direct roadmap input, and locked-in pricing.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              { title: 'Hands-on Onboarding', desc: 'Our team configures your integrations, trains your staff, and validates your data in the first 2 weeks.' },
              { title: 'Shape the Roadmap', desc: 'Monthly calls with our product team. Your feature requests get priority. Your workflows drive development.' },
              { title: 'Locked-in Pricing', desc: 'Founding partners keep their launch rate for life, even as the platform grows and pricing increases.' },
            ].map((b) => (
              <div key={b.title} className="bg-white border-2 border-slate-200 rounded-2xl p-10 hover:border-swoop-green transition">
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-swoop-muted">{b.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/book-demo" className="inline-block px-8 py-3.5 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            Apply for Founding Partner
          </Link>
          <p className="text-sm text-swoop-muted mt-3">3 of 10 spots remaining</p>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="See what your club misses today and can recover tomorrow."
        subtext="Book a live walkthrough with your own operating scenarios: tee sheet leakage, at-risk members, F&B staffing pressure, and revenue blind spots."
      />
    </>
  )
}
