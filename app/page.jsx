import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import CTASection from '@/components/CTASection'
import RoiCalculator from '@/components/RoiCalculator'

const lenses = [
  { slug: 'member-intelligence', title: 'Member Intelligence', color: 'border-lens-members', description: 'Surface changing engagement behavior before it turns into churn risk. Prioritize interventions by member value and relationship sensitivity.' },
  { slug: 'tee-sheet-demand', title: 'Tee Sheet & Demand', color: 'border-lens-operations', description: 'Predict cancellations and backfill each open slot with the right member. Optimize pace and demand signals without overbooking guesswork.' },
  { slug: 'fb-operations', title: 'F&B Operations', color: 'border-lens-fb', description: 'Connect golf flow, weather, and reservations to outlet demand in real time. Shift prep and staffing before service degrades.' },
  { slug: 'staffing-labor', title: 'Staffing & Labor', color: 'border-lens-staffing', description: 'Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.' },
  { slug: 'revenue-pipeline', title: 'Revenue & Pipeline', color: 'border-lens-pipeline', description: 'Track revenue opportunities and risks from lead to retained member. Prove which actions moved conversion, spend, and renewal outcomes.' },
]

const agents = [
  { name: 'Demand Sentinel', description: 'Flags demand swings by segment and recommends inventory moves before losses compound.' },
  { name: 'Waitlist Optimizer', description: 'Reorders waitlists by retention value and match-fit, then auto-notifies best-fit members.' },
  { name: 'Member Save Agent', description: 'Detects service-risk members and triggers personalized save sequences for GM follow-up.' },
  { name: 'F&B Flow Agent', description: 'Predicts rushes from tee sheet and weather signals to adjust outlet prep and staffing.' },
  { name: 'Labor Planner', description: 'Forecasts coverage gaps and recommends shifts to protect service level and margin.' },
  { name: 'Revenue Analyst', description: 'Attribution-ready insights connect actions to recovered revenue and retained annual value.' },
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
      {/* Hero */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80"
            alt="Golf course aerial"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Private Club General Managers</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Know a member is leaving before they do.
            </h1>
            <p className="text-lg text-swoop-muted mb-8 max-w-xl">
              Swoop connects your tee sheet, POS, CRM, and email into a single intelligence layer — surfacing decay signals weeks before resignation letters arrive.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book-demo" className="px-7 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
                Book a Demo
              </Link>
              <Link href="/platform" className="px-7 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition">
                See the Platform
              </Link>
            </div>
          </div>
          {/* Real Product Screenshot */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-swoop-border">
            <img
              src="/screenshots/daily-briefing.png"
              alt="Swoop Daily Briefing - Morning priorities with Quick Wins and at-risk member alerts"
              className="w-full"
            />
          </div>
        </div>
        {/* Hero stats */}
        <div className="max-w-container mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-8 text-sm font-mono text-swoop-muted">
            <span>$1.38M annual value at risk identified</span>
            <span>6.4 week average early warning</span>
            <span>87% tee sheet fill rate</span>
          </div>
          <p className="text-center text-xs text-swoop-muted mt-2">Demo scenario: Oakmont Hills CC</p>
        </div>
      </section>

      <TrustStrip />

      {/* Problem cards */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The problem isn&apos;t your team. It&apos;s your visibility.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Your tee sheet, POS, CRM, email platform, and payroll system each see part of the picture. None of them talk to each other.',
              "A member stops playing. Dining drops off. Email engagement goes silent. By the time you notice, they've already decided to leave.",
              'Average member replacement cost: 2.5x annual dues. Most GMs find out about churn problems when the resignation letter arrives.',
            ].map((text) => (
              <div key={text} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lenses.map((lens) => (
              <Link
                key={lens.slug}
                href={`/capabilities/${lens.slug}`}
                className={`block bg-swoop-card border border-swoop-border rounded-xl p-6 border-l-4 ${lens.color} hover:shadow-lg transition group`}
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-swoop-accent transition">{lens.title}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{lens.description}</p>
                <span className="inline-block mt-3 text-sm text-swoop-accent font-medium">Learn more →</span>
              </Link>
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
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/screenshots/member-intelligence.png"
                alt="Member Intelligence dashboard showing health scores and at-risk members"
                className="w-full"
              />
            </div>
          </div>

          {/* AI Agent Command */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="/screenshots/agent-command.png"
                alt="AI Agent Command showing pending recommendations and actions"
                className="w-full"
              />
            </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div key={agent.name} className="bg-swoop-card border border-swoop-border rounded-xl p-6 border-l-4 border-lens-agents">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationCategories.map((cat) => (
              <div key={cat.label} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
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
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: 'Hands-on Onboarding', desc: 'Our team configures your integrations, trains your staff, and validates your data in the first 2 weeks.' },
              { title: 'Shape the Roadmap', desc: 'Monthly calls with our product team. Your feature requests get priority. Your workflows drive development.' },
              { title: 'Locked-in Pricing', desc: 'Founding partners keep their launch rate for life, even as the platform grows and pricing increases.' },
            ].map((b) => (
              <div key={b.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
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
