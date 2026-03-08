import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Integrations',
  description: '28 integrations across 10 system categories. Connect your tee sheet, POS, CRM, staffing, and more. Live in under 2 weeks.',
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

function StatusBadge({ status }) {
  if (status === 'partner') return <span className="text-xs font-semibold text-swoop-green bg-swoop-green/10 px-2 py-0.5 rounded-full">Partner</span>
  return <span className="text-xs font-semibold text-swoop-muted bg-swoop-bg px-2 py-0.5 rounded-full">Available</span>
}

export default function IntegrationsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Integrations</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">28 integrations. One intelligence layer.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            Connect the systems you already run. No rip-and-replace. Live in under 2 weeks.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto grid md:grid-cols-2 gap-6">
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
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Don&apos;t see your system?</h2>
          <p className="text-white/70 max-w-xl mx-auto">We add new integrations based on founding partner needs. If your club runs a system not listed here, tell us — it may already be on the roadmap.</p>
        </div>
      </section>

      <CTASection headline="See how your systems connect." subtext="We'll map your tech stack to the Five Lenses during the demo." />
    </>
  )
}
