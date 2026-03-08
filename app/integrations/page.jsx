import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Integrations',
  description: 'Swoop connects your tee sheet, POS, CRM, and staffing systems — then adds the location intelligence and cross-system insights they cannot provide alone.',
}

const categories = [
  { label: 'Tee Sheet & Booking', color: 'bg-lens-operations', vendors: [
    { name: 'ForeTees', status: 'partner' },
    { name: 'Chelsea', status: 'available' },
    { name: 'EZLinks', status: 'available' },
    { name: 'GolfNow', status: 'available' },
  ]},
  { label: 'Member CRM', color: 'bg-lens-members', vendors: [
    { name: 'Northstar', status: 'partner' },
    { name: 'Jonas Club Software', status: 'partner' },
    { name: 'Club Essential', status: 'available' },
  ]},
  { label: 'POS & F&B', color: 'bg-lens-fb', vendors: [
    { name: 'Jonas POS', status: 'partner' },
    { name: 'Clubessential POS', status: 'available' },
    { name: 'Square', status: 'available' },
    { name: 'Toast', status: 'available' },
    { name: 'Lightspeed', status: 'available' },
  ]},
  { label: 'Communications', color: 'bg-lens-briefing', vendors: [
    { name: 'Twilio', status: 'available' },
    { name: 'SendGrid', status: 'available' },
    { name: 'Mailchimp', status: 'available' },
    { name: 'Intercom', status: 'available' },
  ]},
  { label: 'Staffing & Payroll', color: 'bg-lens-staffing', vendors: [
    { name: 'ADP', status: 'available' },
    { name: 'Paychex', status: 'available' },
    { name: 'When I Work', status: 'available' },
  ]},
  { label: 'Finance & BI', color: 'bg-lens-pipeline', vendors: [
    { name: 'QuickBooks', status: 'available' },
    { name: 'Sage', status: 'available' },
    { name: 'NetSuite', status: 'available' },
    { name: 'Power BI', status: 'available' },
  ]},
  { label: 'Web & Lead Capture', color: 'bg-lens-agents', vendors: [
    { name: 'HubSpot', status: 'available' },
    { name: 'Typeform', status: 'available' },
  ]},
  { label: 'Access & Activity', color: 'bg-lens-members', vendors: [
    { name: 'Gatekeeper', status: 'available' },
    { name: 'BrivoAccess', status: 'available' },
    { name: 'Club Automation', status: 'available' },
  ]},
]

const swoopUnique = [
  { title: 'Real-Time Location Intelligence', desc: 'GPS and behavioral data from the Swoop member app. On-property movement patterns, arrival times, service touchpoint flows. No other integration provides this.' },
  { title: 'Cross-System Behavioral Correlation', desc: 'Swoop connects the dots your existing tools cannot see: how a member\'s dining patterns predict their tee sheet behavior, how staffing gaps correlate with revenue drops.' },
  { title: 'AI-Powered Predictive Recommendations', desc: 'Your systems collect data. Swoop interprets it and recommends specific actions with measurable outcomes — before problems become resignations.' },
  { title: 'Closed-Loop Engagement Tracking', desc: 'From signal detection to GM action to member response to outcome measurement. Your existing tools stop at the data layer. Swoop closes the loop.' },
]

function StatusBadge({ status }) {
  if (status === 'partner') return <span className="text-xs font-semibold text-swoop-green bg-swoop-green/10 px-2 py-0.5 rounded-full">Partner</span>
  return <span className="text-xs font-semibold text-swoop-muted bg-swoop-bg px-2 py-0.5 rounded-full">Available</span>
}

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero — Position Swoop as Intelligence Layer */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Integrations</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Your tools manage operations.<br />Swoop connects them and tells you what they mean together.
          </h1>
          <p className="text-lg text-swoop-muted max-w-3xl mx-auto mb-8">
            These systems collect data. Swoop is the intelligence layer that connects them, adds location-aware behavioral signals, and turns cross-system patterns into actionable recommendations.
          </p>
          <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-base font-semibold mb-2">No rip-and-replace required.</p>
            <p className="text-sm text-swoop-muted">
              Swoop connects to your existing club management system (Jonas, Northstar, Club Essential), tee sheet platform (ForeTees, Chelsea, EZLinks), POS, and payroll. 
              We sit on top — adding intelligence without replacing the operational tools your staff already knows.
            </p>
          </div>
        </div>
      </section>

      {/* What Swoop Adds (Unique Differentiators) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Swoop adds that no integration can provide</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Your current stack collects transactional data. Swoop layers on behavioral intelligence and cross-system insight.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {swoopUnique.map((item) => (
              <div key={item.title} className="bg-swoop-card border-2 border-swoop-green rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual: Data Flow FROM Systems INTO Intelligence Layer */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">From disconnected systems to unified intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Systems */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-swoop-muted uppercase mb-4">Your Systems Collect</h3>
              {['Tee times', 'POS transactions', 'CRM records', 'Payroll hours', 'Email opens'].map((item) => (
                <div key={item} className="bg-swoop-card border border-swoop-border rounded-lg p-3 text-sm">
                  {item}
                </div>
              ))}
            </div>

            {/* Middle: Arrow + Swoop Layer */}
            <div className="text-center">
              <div className="bg-swoop-dark text-white rounded-xl p-6">
                <p className="text-xs font-bold text-swoop-green uppercase mb-2">Swoop Intelligence Layer</p>
                <div className="space-y-1 text-sm">
                  <p>Location data</p>
                  <p>Behavioral patterns</p>
                  <p>Cross-system correlation</p>
                  <p>AI prediction</p>
                </div>
              </div>
              <div className="my-4 text-4xl text-swoop-green">→</div>
            </div>

            {/* Right: Swoop Delivers */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-swoop-muted uppercase mb-4">Swoop Delivers</h3>
              {[
                { label: 'Member churn risk', color: 'border-lens-members' },
                { label: 'Retention-prioritized waitlist', color: 'border-lens-operations' },
                { label: 'F&B demand prediction', color: 'border-lens-fb' },
                { label: 'Staffing gap alerts', color: 'border-lens-staffing' },
                { label: 'Revenue attribution', color: 'border-lens-pipeline' },
              ].map((item) => (
                <div key={item.label} className={`bg-swoop-card border-l-4 ${item.color} rounded-lg p-3 text-sm font-medium`}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 28 Integrations Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">28 integrations across 8 categories</h2>
          <p className="text-swoop-muted text-center mb-12">Connect the systems you already run. No rip-and-replace. Live in under 2 weeks.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.label} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-2 h-8 rounded-full ${cat.color}`} />
                  <h3 className="font-semibold">{cat.label}</h3>
                  <span className="text-xs text-swoop-muted ml-auto">{cat.vendors.length} systems</span>
                </div>
                <div className="space-y-2">
                  {cat.vendors.map((v) => (
                    <div key={v.name} className="flex items-center justify-between py-1.5 border-b border-swoop-border last:border-0">
                      <span className="text-sm">{v.name}</span>
                      <StatusBadge status={v.status} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your System */}
      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t see your system?</h2>
          <p className="text-white/70 max-w-xl mx-auto">We add new integrations based on founding partner needs. If your club runs a system not listed here, tell us — it may already be on the roadmap.</p>
        </div>
      </section>

      <CTASection headline="See how your systems connect." subtext="We'll map your tech stack to the complete platform during the demo." />
    </>
  )
}
