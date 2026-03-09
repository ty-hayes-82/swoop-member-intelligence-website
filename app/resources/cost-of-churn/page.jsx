import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'How to Calculate True Cost of Member Churn',
  description: 'Beyond dues: replacement cost, lost referrals, operational drag, and board perception impact.',
  path: '/resources/cost-of-churn',
})

export default function CostOfChurnPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <Link href="/resources" className="text-sm text-swoop-accent hover:underline mb-4 inline-block">← Back to Resources</Link>
          <span className="inline-block text-xs font-semibold text-swoop-accent bg-swoop-accent/10 px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Calculate True Cost of Member Churn</h1>
          <p className="text-xl text-swoop-muted">Beyond dues: replacement cost, lost referrals, and operational drag.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold text-red-600 mb-3">Most clubs measure churn wrong</h2>
            <p className="text-swoop-muted">
              When a $20K/year member resigns, the GM tells the board "we lost $20K in dues." That's not the full picture. The true cost is 3-5x higher—and most clubs never calculate it.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">The Five Hidden Costs of Member Churn</h2>

          <div className="space-y-8">
            <div className="bg-swoop-card border-l-4 border-swoop-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">1. Annual Dues (The Number Everyone Sees)</h3>
              <p className="text-swoop-muted mb-4">
                A member paying $20,000 in annual dues who resigns = $20,000 loss. Simple. Visible. What the board sees.
              </p>
              <div className="bg-swoop-bg rounded-lg p-4">
                <p className="font-mono text-2xl font-bold text-swoop-dark">$20,000</p>
                <p className="text-sm text-swoop-muted mt-1">Direct dues revenue lost</p>
              </div>
            </div>

            <div className="bg-swoop-card border-l-4 border-swoop-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">2. Ancillary Spend (The Revenue Nobody Tracks)</h3>
              <p className="text-swoop-muted mb-4">
                That same member also spends on F&B, guest fees, events, pro shop, lessons, locker rentals. Industry average: ancillary spend = 30-40% of dues.
              </p>
              <p className="text-swoop-muted mb-4">
                <strong>Example:</strong> $20K dues member likely spends $6K-8K annually on everything else.
              </p>
              <div className="bg-swoop-bg rounded-lg p-4">
                <p className="font-mono text-2xl font-bold text-swoop-dark">$7,000</p>
                <p className="text-sm text-swoop-muted mt-1">Average ancillary spend (F&B, events, pro shop, guest fees)</p>
              </div>
              <p className="text-sm text-swoop-muted mt-4"><strong>Running total:</strong> $20K dues + $7K ancillary = <strong className="text-swoop-accent">$27,000</strong></p>
            </div>

            <div className="bg-swoop-card border-l-4 border-swoop-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">3. Replacement Cost (The Expense You Can't Avoid)</h3>
              <p className="text-swoop-muted mb-4">
                An empty membership slot costs money. You still have the same overhead (course maintenance, clubhouse operations, staff). Now you need to recruit a replacement.
              </p>
              <p className="text-swoop-muted mb-4">
                <strong>Industry benchmark for replacement cost:</strong> 2.5x annual dues.
              </p>
              <p className="text-swoop-muted mb-4">Why 2.5x?</p>
              <ul className="text-sm text-swoop-muted space-y-2 ml-5 list-disc">
                <li><strong>Marketing & sales:</strong> Open houses, tours, member referral incentives, sales staff time</li>
                <li><strong>Discounting:</strong> First-year initiation fee reductions, prorated dues, "friends & family" rates to fill the slot</li>
                <li><strong>Time to fill:</strong> Average 6-9 months. That's 6-9 months of lost revenue while you recruit.</li>
                <li><strong>Integration cost:</strong> New member onboarding, app setup, locker assignment, introductions</li>
              </ul>
              <div className="bg-swoop-bg rounded-lg p-4 mt-4">
                <p className="font-mono text-2xl font-bold text-swoop-dark">$50,000</p>
                <p className="text-sm text-swoop-muted mt-1">Replacement cost (2.5x dues of $20K member)</p>
              </div>
              <p className="text-sm text-swoop-muted mt-4"><strong>Running total:</strong> $27K lost + $50K replacement cost = <strong className="text-swoop-accent">$77,000</strong></p>
            </div>

            <div className="bg-swoop-card border-l-4 border-swoop-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">4. Lost Referrals (The Ghost Revenue)</h3>
              <p className="text-swoop-muted mb-4">
                Engaged members refer new members. Industry average: 1 referral every 3-5 years per active, satisfied member.
              </p>
              <p className="text-swoop-muted mb-4">
                When a member resigns, you don't just lose them—you lose their future referrals.
              </p>
              <p className="text-swoop-muted mb-4">
                <strong>Conservative estimate:</strong> A 12-year member would have referred 3-4 new members over their lifetime. Each referral = $100K initiation + $20K/yr dues × 10 years = $300K lifetime value.
              </p>
              <div className="bg-swoop-bg rounded-lg p-4">
                <p className="font-mono text-2xl font-bold text-swoop-dark">$25,000</p>
                <p className="text-sm text-swoop-muted mt-1">Estimated lost referral value (conservative: 1/4 of a single referral's lifetime value)</p>
              </div>
              <p className="text-sm text-swoop-muted mt-4"><strong>Running total:</strong> $77K + $25K lost referrals = <strong className="text-swoop-accent">$102,000</strong></p>
            </div>

            <div className="bg-swoop-card border-l-4 border-swoop-accent rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">5. Operational Drag (The Hidden Productivity Tax)</h3>
              <p className="text-swoop-muted mb-4">
                Every resignation creates work:
              </p>
              <ul className="text-sm text-swoop-muted space-y-2 ml-5 list-disc mb-4">
                <li>GM time investigating why they left</li>
                <li>Board discussion about retention strategy</li>
                <li>Staff morale impact (resignations signal instability)</li>
                <li>Negative word-of-mouth in the member community</li>
                <li>Recruiting effort to backfill the slot</li>
              </ul>
              <p className="text-swoop-muted mb-4">
                <strong>Conservative estimate:</strong> 10-15 hours of GM + board + staff time per resignation. At $150/hr blended cost, that's $1,500-2,250 per resignation.
              </p>
              <div className="bg-swoop-bg rounded-lg p-4">
                <p className="font-mono text-2xl font-bold text-swoop-dark">$2,000</p>
                <p className="text-sm text-swoop-muted mt-1">Operational drag (time cost to investigate, discuss, recruit)</p>
              </div>
              <p className="text-sm text-swoop-muted mt-4"><strong>Running total:</strong> $102K + $2K operational drag = <strong className="text-swoop-accent font-bold text-2xl">$104,000</strong></p>
            </div>
          </div>

          <div className="bg-swoop-dark text-white rounded-xl p-8 my-12">
            <h2 className="text-2xl font-bold mb-6 text-center">The Real Cost of a $20K Member Resignation</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-swoop-green">$20K</p>
                <p className="text-xs text-white/70 mt-1">Dues</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-swoop-green">$7K</p>
                <p className="text-xs text-white/70 mt-1">Ancillary</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-swoop-green">$50K</p>
                <p className="text-xs text-white/70 mt-1">Replacement</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-swoop-green">$25K</p>
                <p className="text-xs text-white/70 mt-1">Lost Referrals</p>
              </div>
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-swoop-green">$2K</p>
                <p className="text-xs text-white/70 mt-1">Operational Drag</p>
              </div>
            </div>
            <div className="border-t border-white/20 pt-6 text-center">
              <p className="text-sm text-white/70 mb-2">Total True Cost</p>
              <p className="font-mono text-5xl font-bold text-swoop-green mb-2">$104,000</p>
              <p className="text-white/70">5.2x the annual dues value</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Why This Matters for Your Board</h2>
          <p className="text-swoop-muted mb-4">
            When you say "we lost 10 members last year," the board hears "$200K in dues." The reality? <strong>$1,040,000 in total cost.</strong>
          </p>
          <p className="text-swoop-muted mb-4">
            That's the difference between "normal attrition" and a strategic crisis.
          </p>
          <p className="text-swoop-muted mb-6">
            <strong>Reframe the conversation:</strong> "We lost 10 members last year. Total cost to the club: $1.04M. If we had intervened early on half of those, we would have protected $520K in value."
          </p>

          <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6">
            <h3 className="text-lg font-bold mb-3">Board Report Template: True Cost of Churn</h3>
            <div className="text-sm text-swoop-muted space-y-2">
              <p><strong>2025 Member Resignations:</strong> 10</p>
              <p><strong>Average annual dues per resigned member:</strong> $20,000</p>
              <p><strong>Dues revenue lost:</strong> $200,000</p>
              <p><strong>Ancillary spend lost:</strong> $70,000 (35% of dues)</p>
              <p><strong>Replacement cost:</strong> $500,000 (2.5x dues)</p>
              <p><strong>Lost referral value:</strong> $250,000 (est. 1 referral per 4 members × $100K lifetime value)</p>
              <p><strong>Operational drag:</strong> $20,000 (investigation, recruiting, board time)</p>
              <p className="border-t border-swoop-border pt-2 mt-2"><strong className="text-swoop-dark">Total True Cost:</strong> <span className="font-mono text-xl font-bold text-swoop-accent">$1,040,000</span></p>
              <p className="mt-4 pt-4 border-t border-swoop-border"><strong>If we had retained 5 of those 10 members through early intervention:</strong> $520,000 protected. Cost of intervention: ~$5,000 (GM time + comp F&B). <strong>ROI: 104x</strong></p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-12">The Action Step</h2>
          <p className="text-swoop-muted mb-4">
            Calculate this for your club. Take last year's resignations, run the math, and present it to your board. The conversation shifts from "churn is normal" to "we need a retention system."
          </p>
          <p className="text-swoop-muted">
            The clubs that win on retention aren't the ones with zero churn—that's impossible. They're the ones who measure it honestly, intervene early, and prove the ROI of every save.
          </p>
        </div>
      </section>

      <CTASection headline="Want to see your club's true cost of churn?" subtext="Use our ROI calculator. Takes 2 minutes." ctaText="Calculate ROI" ctaHref="/roi-calculator" />
    </>
  )
}
