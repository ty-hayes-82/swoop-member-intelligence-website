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
  { feature: 'Cross-lens analytics', swoop: 'full', waitlistTools: 'none', crm: 'partial', sheets: 'partial' },
  { feature: 'AI agent automation', swoop: 'full', waitlistTools: 'none', crm: 'none', sheets: 'none' },
  { feature: 'Real-time behavioral data', swoop: 'full', waitlistTools: 'partial', crm: 'partial', sheets: 'none' },
  { feature: 'Closed-loop engagement', swoop: 'full', waitlistTools: 'none', crm: 'partial', sheets: 'none' },
]

const integrationCategories = [
  { label: 'Tee Sheet & Booking', vendors: ['ForeTees', 'Chelsea', 'EZLinks', 'GolfNow'] },
  { label: 'Member CRM', vendors: ['Northstar', 'Jonas Club Software', 'Club Essential'] },
  { label: 'POS & F&B', vendors: ['Jonas POS', 'Clubessential POS', 'Square', 'Toast', 'Lightspeed'] },
  { label: 'Communications', vendors: ['Twilio', 'SendGrid', 'Mailchimp', 'Intercom'] },
  { label: 'Staffing & Payroll', vendors: ['ADP', 'Paychex', 'When I Work'] },
  { label: 'Finance & BI', vendors: ['QuickBooks', 'Sage', 'NetSuite', 'Power BI'] },
  { label: 'Web & Lead Capture', vendors: ['HubSpot', 'Typeform'] },
  { label: 'Access & Activity', vendors: ['Gatekeeper', 'BrivoAccess', 'Club Automation'] },
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
          {/* Dashboard preview card */}
          <div className="bg-swoop-dark rounded-xl p-6 shadow-xl">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-white/50 text-xs">Five Lenses — Today</span>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: 'Members at Risk', value: '5', color: 'border-lens-members' },
                { label: 'Dues at Risk', value: '$778K', color: 'border-lens-operations' },
                { label: 'Actions Pending', value: '3', color: 'border-lens-agents' },
              ].map((s) => (
                <div key={s.label} className={`bg-white/5 rounded-lg p-3 border-t-2 ${s.color}`}>
                  <p className="text-white/50 text-xs">{s.label}</p>
                  <p className="text-white font-mono text-xl font-bold">{s.value}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-lens-operations" style={{ width: '82%' }} />
              <div className="h-2 rounded-full bg-lens-briefing" style={{ width: '54%' }} />
              <div className="h-2 rounded-full bg-lens-pipeline" style={{ width: '91%' }} />
            </div>
          </div>
        </div>
        {/* Hero stats */}
        <div className="max-w-container mx-auto mt-12 flex flex-wrap justify-center gap-8 text-sm font-mono text-swoop-muted">
          <span>$1.4M avg dues at risk identified</span>
          <span>6–8 week early warning on churn</span>
          <span>91% tee sheet fill rate</span>
        </div>
      </section>

      <TrustStrip />

      {/* Problem cards */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The problem isn&apos;t your team. It&apos;s your visibility.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'You have 5 disconnected systems. Zero connected intelligence.',
              "You know something is wrong. You just can't see it until it's too late.",
              'James Whitfield complained. No one followed up. He resigned. $22K gone in 4 days.',
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

      {/* Five Lenses */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Five Lenses. One Platform.</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">Every GM decision category — member health, tee sheet demand, F&B, staffing, and revenue — connected and actionable in one place.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lenses.map((lens) => (
              <Link
                key={lens.slug}
                href={`/lenses/${lens.slug}`}
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

      {/* TODO: Platform Screenshots - Add real product screenshots here
          Main: Morning Briefing with Quick Wins
          Feature grid: Member Intelligence, Waitlist Demand, AI Agent Command
          Capture with browser tool in non-cron session */}

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
                <div className="flex flex-wrap gap-2">
                  {cat.vendors.map((v) => (
                    <span key={v} className="text-xs bg-swoop-bg text-swoop-muted px-2 py-1 rounded">{v}</span>
                  ))}
                </div>
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
