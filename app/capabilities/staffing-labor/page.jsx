import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Staffing & Labor',
  description: 'Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.',
}

const capabilities = [
  { title: 'Demand-Driven Scheduling', desc: 'Swoop connects tee sheet bookings, event calendars, and weather forecasts to staffing requirements. Know exactly how many people you need before the schedule is posted.' },
  { title: 'Coverage Gap Detection', desc: 'Flag understaffed windows before they happen — not after a member complains. The Grill Room short-staffing on Jan 16 that caused James Whitfield\'s complaint? Swoop would have caught it 48 hours earlier.' },
  { title: 'Labor Cost per Revenue Dollar', desc: 'Track labor efficiency across outlets and time slots. Some $200/hour staffing windows generate $150 in revenue. Find the mismatch.' },
  { title: 'Overtime Risk Alerts', desc: 'Approaching overtime thresholds? Swoop flags it with enough lead time to redistribute shifts rather than eat the premium.' },
]

export default function StaffingLaborPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-lens-staffing" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Staffing & Service</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Staffing & Labor</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Tie labor coverage to predicted demand across golf and clubhouse touchpoints. Catch understaffed windows early enough to avoid member friction.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Understaffing on 3 Fridays cost $3,400 — and one member.</h2>
          <p className="text-white/70">January 3, 9, and 16: Grill Room ran 2 servers short during peak post-round dining. Service times exceeded 35 minutes. F&B revenue dropped 22% on those days. James Whitfield filed his complaint on the 16th. He resigned on the 22nd.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Staff to demand, not to habit.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-swoop-muted">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="See where staffing gaps cost you members." subtext="We'll show you the connection between coverage and complaints." />
    </>
  )
}
