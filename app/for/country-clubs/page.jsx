import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'For Country Clubs',
  description: 'Country clubs with golf, dining, and events need cross-domain intelligence. Swoop connects every touchpoint into one operational view.',
}

export default function CountryClubsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Country Clubs</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Golf + dining + events + fitness. One intelligence layer.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Country clubs are more complex than golf-only clubs. More outlets, more touchpoints, more systems, more ways to miss a signal. Swoop was built for this complexity.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">The cross-domain advantage.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Golf → Dining Connection</h3>
              <p className="text-sm text-swoop-muted">35% of golfers dine post-round. Swoop tracks the conversion by tee time, pace of play, and weather — and recommends nudges to move the other 65%.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Events → Retention Signal</h3>
              <p className="text-sm text-swoop-muted">Members who stop attending social events are withdrawing from the community. Swoop detects this pattern months before it shows up in visit frequency.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Fitness → Family Usage</h3>
              <p className="text-sm text-swoop-muted">When spouses and children stop using the pool or fitness center, the primary member is 3x more likely to resign. Swoop tracks family engagement as a churn signal.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Staffing Across All Outlets</h3>
              <p className="text-sm text-swoop-muted">Tournament day means 3x F&B demand AND extra course marshals AND valet surge. Swoop coordinates staffing across every touchpoint from one view.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="See how Swoop handles multi-outlet complexity." subtext="We'll demo cross-domain intelligence with a country club scenario." />
    </>
  )
}
