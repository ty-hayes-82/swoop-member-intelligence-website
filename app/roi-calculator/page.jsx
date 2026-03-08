import RoiCalculator from '@/components/RoiCalculator'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'ROI Calculator',
  description: 'Calculate what member churn is costing your club — and what Swoop can recover.',
}

export default function RoiCalculatorPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">ROI Calculator</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What is churn costing your club?</h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            Adjust the sliders below to match your club. See your annual exposure — and what Swoop&apos;s retention intelligence can recover.
          </p>
        </div>
      </section>

      <RoiCalculator />

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-center">How we calculate this</h2>
          <div className="space-y-4 text-swoop-muted">
            <p><strong className="text-swoop-text">At-risk members:</strong> Industry average churn for private clubs is 4-7% annually. Your at-risk count = total members × churn rate.</p>
            <p><strong className="text-swoop-text">Revenue at risk:</strong> Each at-risk member represents their full annual dues value. The real cost is higher when you include F&B, guest fees, and replacement cost (2.5x annual dues to acquire a new member).</p>
            <p><strong className="text-swoop-text">Swoop retention rate:</strong> We model a 65% save rate on flagged at-risk members through early intervention. This is conservative — clubs with strong GM follow-through on AI recommendations often exceed 70%.</p>
            <p><strong className="text-swoop-text">What this doesn&apos;t include:</strong> Lost referrals from resigned members, board perception impact, and the operational drag of running a club with declining membership. The true cost of churn is 2-3x the dues number.</p>
          </div>
        </div>
      </section>

      <CTASection headline="See the math with your real data." subtext="Book a demo and we'll run your club's numbers through the complete intelligence platform." />
    </>
  )
}
