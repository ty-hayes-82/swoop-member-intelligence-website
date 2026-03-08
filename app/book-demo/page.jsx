import DemoForm from '@/components/DemoForm'

export const metadata = {
  title: 'Book a Demo',
  description: 'See your club\'s data in Swoop. Schedule a personalized 30-minute walkthrough.',
}

const stats = [
  { value: '91%', label: 'Waitlist fill rate' },
  { value: '$312', label: 'Revenue per tee slot' },
  { value: '6 days', label: 'Early warning on resignations' },
]

export default function BookDemoPage() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Book a Demo</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">See your club&apos;s data in Swoop.</h1>
          <p className="text-lg text-swoop-muted mb-12">
            Schedule a personalized walkthrough. We&apos;ll show you tee sheet leakage, at-risk members, F&B staffing pressure, and revenue blind spots — using scenarios from a real 300-member club.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-mono text-2xl font-bold text-swoop-green">{s.value}</p>
                <p className="text-xs text-swoop-muted mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-swoop-muted mt-6">Demo scenario metrics from Oakmont Hills CC simulation.</p>
        </div>
        <div className="bg-swoop-card border border-swoop-border rounded-xl p-8">
          <DemoForm />
        </div>
      </div>
    </section>
  )
}
