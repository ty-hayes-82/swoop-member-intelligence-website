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

const crossSiloInsights = [
  {
    title: 'Tee Sheet + Member Health',
    insight: 'Members who stop booking are 4x more likely to resign within 90 days',
    systems: ['ForeTees', 'Jonas', 'Northstar'],
    why: 'Your tee sheet platform tracks bookings. Your CRM tracks member status. Neither connects declining play patterns to churn risk. Swoop does.',
  },
  {
    title: 'F&B + Tee Sheet',
    insight: 'Post-round dining conversion drops 40% when pace exceeds 4:20',
    systems: ['Square', 'Toast', 'ForeTees'],
    why: 'Your POS knows who dined. Your tee sheet knows pace of play. Swoop connects them and shows how slow rounds kill F&B revenue.',
  },
  {
    title: 'Staffing + F&B + Weather',
    insight: 'Understaffed Saturdays with good weather cost clubs $1,200/day in missed F&B revenue',
    systems: ['ADP', 'When I Work', 'Jonas POS'],
    why: 'Payroll systems track hours. POS tracks revenue. Weather data is external. Swoop correlates all three to predict staffing gaps before they cost you.',
  },
  {
    title: 'Member Health + Revenue',
    insight: 'At-risk members represent $1.38M in annual dues — recovering just 10% pays for the platform',
    systems: ['Northstar', 'Jonas', 'QuickBooks'],
    why: 'CRM systems flag complaints. Accounting tracks dues. Swoop calculates total risk exposure and ROI of retention campaigns in real time.',
  },
  {
    title: 'Waitlist + Demand + Weather',
    insight: 'AI predicts 23 cancellations on rainy Thursdays — auto-fill from waitlist before the slot goes empty',
    systems: ['ForeTees', 'Chelsea', 'Swoop App'],
    why: 'Tee sheet platforms manage waitlists. Weather APIs exist. Swoop combines behavioral history, weather patterns, and retention priority to optimize backfill.',
  },
]

const swoopAppBenefits = [
  { icon: '📍', title: 'Locational Awareness', desc: 'Know where members are on-property, when they visit, which amenities they use. GPS tracking + beacon detection.' },
  { icon: '🔗', title: 'System Connector', desc: 'Swoop is the only integration that ties tee sheet behavior to dining patterns to membership health to revenue attribution.' },
  { icon: '🧠', title: 'Intelligence Layer', desc: 'Without Swoop, your systems are blind silos. With Swoop, they become a connected intelligence network.' },
  { icon: '⚡', title: 'Real-Time Engagement', desc: 'Push notifications to members based on location, behavior, and predictive signals. Close the loop from insight to action to outcome.' },
  { icon: '📊', title: 'Behavioral Data No Other System Has', desc: 'Arrival times. Service touchpoint flow. On-property movement patterns. Post-round behavior. This is data your tee sheet and POS cannot capture.' },
  { icon: '🎯', title: 'Retention-First Routing', desc: 'When a tee time opens, Swoop routes it to at-risk members first. Your waitlist platform cannot do this because it does not know who is at risk.' },
]

function StatusBadge({ status }) {
  if (status === 'partner') return <span className="text-xs font-semibold text-swoop-green bg-swoop-green/10 px-2 py-0.5 rounded-full">Partner</span>
  return <span className="text-xs font-semibold text-swoop-muted bg-swoop-bg px-2 py-0.5 rounded-full">Available</span>
}

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
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

      {/* PREMIER INTEGRATION: Swoop App */}
      <section className="py-20 px-6 bg-gradient-to-br from-swoop-green/5 to-swoop-accent/5">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-swoop-green text-swoop-dark text-xs font-bold uppercase tracking-wider rounded-full mb-4">Premier Integration</span>
            <h2 className="text-4xl font-bold mb-4">The Swoop App</h2>
            <p className="text-xl text-swoop-muted max-w-2xl mx-auto">
              The intelligence layer that makes every other system smarter. Without Swoop, your club tech stack is a collection of blind silos. With Swoop, it becomes a connected intelligence network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {swoopAppBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white border-2 border-swoop-green rounded-xl p-6">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-swoop-dark text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Why Swoop is the premier integration</h3>
            <p className="text-white/80 max-w-3xl mx-auto text-base leading-relaxed">
              Your tee sheet platform knows bookings. Your POS knows transactions. Your CRM knows member records. 
              <strong className="text-swoop-green"> Only Swoop knows WHERE members are, WHEN they visit, and HOW their behavior across every touchpoint predicts churn, revenue, and retention outcomes.</strong> 
              Every other integration plugs into Swoop. Swoop is the connective tissue that makes them all useful together.
            </p>
          </div>
        </div>
      </section>

      {/* Cross-Silo Intelligence Examples */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Insights only possible when you combine systems</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-3xl mx-auto">
            Your ForeTees, Jonas, Square, and ADP systems each see part of the picture. Swoop connects them and surfaces patterns no single system can detect alone.
          </p>

          <div className="space-y-6">
            {crossSiloInsights.map((item, idx) => (
              <div key={item.title} className="bg-white border-2 border-swoop-border rounded-xl p-6 hover:border-swoop-green transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-swoop-green text-swoop-dark font-bold text-lg rounded-full flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-lg text-swoop-green font-semibold mb-3">"{item.insight}"</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.systems.map((sys) => (
                        <span key={sys} className="text-xs bg-swoop-bg text-swoop-muted px-3 py-1 rounded-full font-medium">
                          {sys}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-swoop-muted leading-relaxed">
                      <strong>Why this matters:</strong> {item.why}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6 text-center">
            <p className="text-base font-semibold mb-2">This is the intelligence gap your current stack cannot close.</p>
            <p className="text-sm text-swoop-muted">
              Without cross-system correlation, you're flying blind. With Swoop, you see the full picture — and act on it before problems compound.
            </p>
          </div>
        </div>
      </section>

      {/* Visual: Data Flow */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">From disconnected systems to unified intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Systems */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-swoop-muted uppercase mb-4">Your Systems Collect</h3>
              {['Tee times (ForeTees)', 'POS transactions (Square)', 'CRM records (Jonas)', 'Payroll hours (ADP)', 'Email opens (Mailchimp)'].map((item) => (
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
                  <p>📍 Location data</p>
                  <p>🧠 Behavioral patterns</p>
                  <p>🔗 Cross-system correlation</p>
                  <p>🤖 AI prediction</p>
                  <p>⚡ Real-time engagement</p>
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

          <div className="mt-12 text-center">
            <p className="text-swoop-muted text-sm">
              <strong>Before Swoop:</strong> 8 disconnected systems, zero connected intelligence.<br />
              <strong>After Swoop:</strong> One intelligence layer that makes all your existing tools smarter.
            </p>
          </div>
        </div>
      </section>

      {/* 28 Integrations Grid */}
      <section className="py-20 px-6">
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
