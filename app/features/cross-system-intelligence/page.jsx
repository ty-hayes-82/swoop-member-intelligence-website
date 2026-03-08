import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Cross-System Intelligence',
  description: 'How Swoop connects your tee sheet, POS, CRM, payroll, and communication systems to surface insights no single platform can provide.',
}

const systemConnections = [
  {
    system: 'Tee Sheet Software',
    vendors: 'ForeTees, Chelsea, EZLinks',
    dataIn: ['Booking timestamps', 'Cancellation patterns', 'Playing partner groupings', 'Tee time preferences', 'No-show history'],
    intelligenceOut: 'Demand forecasting, retention-prioritized waitlist routing, pace of play prediction',
  },
  {
    system: 'Member CRM',
    vendors: 'Northstar, Jonas Club Software, Club Essential',
    dataIn: ['Member demographics', 'Tenure & join date', 'Membership tier', 'Communication preferences', 'Historical complaints'],
    intelligenceOut: 'Health score baselines, lifetime value calculations, churn risk segmentation',
  },
  {
    system: 'POS & F&B',
    vendors: 'Jonas POS, Square, Toast, Lightspeed',
    dataIn: ['Transaction timestamps', 'Spend per visit', 'Outlet preferences', 'Post-round conversion', 'Guest bring-along spend'],
    intelligenceOut: 'F&B rush prediction, low-converter targeting, ancillary revenue attribution',
  },
  {
    system: 'Payroll & Staffing',
    vendors: 'ADP, Paychex, When I Work',
    dataIn: ['Scheduled shifts', 'Labor hours by outlet', 'Hourly wage rates', 'Coverage gaps', 'Overtime patterns'],
    intelligenceOut: 'Labor cost per revenue dollar, shift optimization, coverage gap alerts',
  },
  {
    system: 'Email & Communication',
    vendors: 'Mailchimp, SendGrid, Intercom',
    dataIn: ['Email open rates', 'Event RSVP rates', 'Unsubscribe events', 'App push notification engagement'],
    intelligenceOut: 'Communication decay signals, engagement trend analysis, preferred channel detection',
  },
]

const crossSystemInsights = [
  {
    insight: 'Member dining behavior predicts tee time booking patterns',
    systems: 'POS + Tee Sheet',
    example: 'Members who stop dining post-round are 3.2x more likely to reduce tee time bookings within 60 days. Early intervention = higher retention rate.',
  },
  {
    insight: 'Staffing gaps correlate with F&B revenue drops',
    systems: 'Payroll + POS',
    example: 'When Grill Room is understaffed by 1 server on Saturday lunch, average revenue per diner drops $8.40. Swoop flags gaps 48 hours ahead.',
  },
  {
    insight: 'Communication decay precedes engagement decay',
    systems: 'Email + Tee Sheet',
    example: 'Members who stop opening club emails reduce tee time bookings by 28% within 45 days. Email engagement is an early churn signal.',
  },
  {
    insight: 'Social disconnect (solo play) predicts resignation',
    systems: 'Tee Sheet + CRM',
    example: 'Members who shift from group play to solo play are 4.1x more likely to resign within 90 days. Playing partner matching interventions show 67% success rate.',
  },
  {
    insight: 'Weather + tee sheet booking velocity = cancellation prediction',
    systems: 'Weather API + Tee Sheet',
    example: 'Rain forecast >60% within 4 hours of tee time = 42% cancellation rate. Swoop notifies waitlist 48 hours early to fill backfill slots.',
  },
]

export default function CrossSystemIntelligencePage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Feature Deep Dive</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cross-System Intelligence: Connect the dots
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            Your club runs on 5+ disconnected systems. Each collects data. None of them talk to each other. Swoop connects them and surfaces insights no single platform can provide.
          </p>
        </div>
      </section>

      {/* System Connections */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What data flows in, what intelligence flows out</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Swoop integrates with your existing club systems — no rip-and-replace. Here's what each connection enables:
          </p>
          <div className="space-y-6">
            {systemConnections.map((conn) => (
              <div key={conn.system} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-1">{conn.system}</h3>
                    <p className="text-xs text-swoop-muted">{conn.vendors}</p>
                  </div>
                  <div>
                    <p className="text-xs text-swoop-muted uppercase mb-2">Data Swoop Ingests</p>
                    <ul className="space-y-1">
                      {conn.dataIn.slice(0, 3).map((d, idx) => (
                        <li key={idx} className="text-sm text-swoop-muted flex items-start gap-1">
                          <span className="text-swoop-green">→</span>
                          <span>{d}</span>
                        </li>
                      ))}
                      {conn.dataIn.length > 3 && (
                        <li className="text-xs text-swoop-muted italic">+ {conn.dataIn.length - 3} more signals</li>
                      )}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-swoop-muted uppercase mb-2">Intelligence Swoop Delivers</p>
                    <p className="text-sm font-medium text-swoop-green">{conn.intelligenceOut}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-System Insights */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Insights only possible with cross-system correlation</h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Your tee sheet software doesn't know what members spend at the Grill Room. Your POS doesn't know booking patterns. Swoop connects them.
          </p>
          <div className="space-y-6">
            {crossSystemInsights.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 bg-swoop-green rounded-full flex items-center justify-center text-swoop-dark font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{item.insight}</h3>
                    <p className="text-xs text-white/50 mb-3">Data Sources: {item.systems}</p>
                    <p className="text-sm text-white/70 bg-white/5 rounded-lg p-3 border-l-4 border-swoop-green">
                      <strong className="text-swoop-green">Real Example:</strong> {item.example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Spreadsheet Problem */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why spreadsheets fail at cross-system intelligence</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-700 mb-4">Manual Spreadsheet Approach</h3>
              <ul className="space-y-3 text-sm text-swoop-muted">
                <li>• Export CSV from tee sheet software (monthly)</li>
                <li>• Export POS transaction report (monthly)</li>
                <li>• Export CRM member list (quarterly)</li>
                <li>• Manually join by member ID (2-4 hours)</li>
                <li>• Build pivot tables and charts</li>
                <li>• Insights are 30-90 days stale by the time you see them</li>
                <li>• No predictive capability — only backward-looking</li>
                <li>• Breaks when any system updates export format</li>
              </ul>
              <div className="mt-4 bg-red-100 rounded-lg p-3">
                <p className="text-red-700 font-semibold text-xs">Problem: By the time you see the pattern, the member has already resigned.</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-4">Swoop Automated Approach</h3>
              <ul className="space-y-3 text-sm text-swoop-muted">
                <li>• Live API connections to all systems (real-time sync)</li>
                <li>• Automated data normalization and entity resolution</li>
                <li>• Continuous behavioral correlation (40+ signals)</li>
                <li>• Daily health score updates for all members</li>
                <li>• Predictive churn alerts 6-8 weeks early</li>
                <li>• AI-recommended interventions with success rates</li>
                <li>• Zero manual export/import workflows</li>
                <li>• System updates handled automatically by Swoop engineering</li>
              </ul>
              <div className="mt-4 bg-green-100 rounded-lg p-3">
                <p className="text-green-700 font-semibold text-xs">Outcome: You intervene before they resign. Member retained.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual: Data Flow Diagram */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How data flows through Swoop</h2>
          <div className="grid md:grid-cols-4 gap-6 items-center">
            {/* Step 1: Systems */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-swoop-muted uppercase mb-4">Your Systems</h3>
              {['Tee Sheet', 'POS', 'CRM', 'Payroll', 'Email'].map((sys) => (
                <div key={sys} className="bg-swoop-card border border-swoop-border rounded-lg p-3 text-sm text-center">
                  {sys}
                </div>
              ))}
            </div>

            {/* Step 2: API Layer */}
            <div className="text-center">
              <div className="bg-swoop-dark text-white rounded-xl p-6 mb-2">
                <p className="text-xs font-bold text-swoop-green uppercase mb-2">Swoop API Layer</p>
                <p className="text-xs">Live connections, auto-sync, entity resolution</p>
              </div>
              <div className="text-4xl text-swoop-green">→</div>
            </div>

            {/* Step 3: Intelligence Engine */}
            <div className="text-center">
              <div className="bg-swoop-dark text-white rounded-xl p-6 mb-2">
                <p className="text-xs font-bold text-swoop-green uppercase mb-2">Intelligence Engine</p>
                <p className="text-xs">40+ signal correlation, AI prediction, health scoring</p>
              </div>
              <div className="text-4xl text-swoop-green">→</div>
            </div>

            {/* Step 4: GM Dashboard */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-swoop-muted uppercase mb-4">GM Dashboard</h3>
              {[
                { label: 'Daily Briefing', color: 'border-lens-briefing' },
                { label: 'At-Risk Alerts', color: 'border-lens-members' },
                { label: 'Demand Forecast', color: 'border-lens-operations' },
                { label: 'F&B Predictions', color: 'border-lens-fb' },
                { label: 'Agent Recommendations', color: 'border-lens-agents' },
              ].map((item) => (
                <div key={item.label} className={`bg-swoop-card border-l-4 ${item.color} rounded-lg p-3 text-sm font-medium`}>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">28 integrations. Live in under 2 weeks.</h2>
          <p className="text-swoop-muted max-w-2xl mx-auto mb-8">
            Swoop connects to your existing tee sheet, POS, CRM, payroll, and communication platforms. No rip-and-replace. No data migration nightmares.
          </p>
          <Link href="/integrations" className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            See All Integrations
          </Link>
        </div>
      </section>

      <CTASection 
        headline="See cross-system intelligence in action." 
        subtext="We'll show you how Swoop connects your existing systems and surfaces insights you've never seen before." 
      />
    </>
  )
}
