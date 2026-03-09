import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'For Ownership & Board',
  description: 'Strategic oversight tools for club ownership and boards. Real-time benchmarks, portfolio intelligence, and ROI-driven decision support.',
  path: '/for/ownership-board',
})

const boardChallenges = [
  { challenge: 'You govern by quarterly snapshots, not real-time intelligence', detail: 'Your GM presents retention stats once a quarter — by then, resignations have already happened. Swoop gives board members real-time visibility into member health, revenue trends, and operational efficiency.' },
  { challenge: 'Every club proposal asks for more budget without proving ROI', detail: 'When the GM requests more F&B staff, a retention initiative, or a new tee sheet feature, the board asks: "Will it pay for itself?" Swoop tracks outcomes and proves attribution so you fund what works.' },
  { challenge: 'Multi-property oversight is a manual nightmare', detail: 'If you oversee 3-10 clubs, you get 10 different spreadsheets in 10 different formats. Swoop normalizes metrics across properties and shows portfolio-level benchmarks in one dashboard.' },
]

const boardTools = [
  { tool: 'Portfolio-Level Benchmarks', desc: 'Cross-club comparisons on retention, revenue per member, churn rate, F&B margin, and labor efficiency. See which properties are leading and which need intervention.' },
  { tool: 'Real-Time Member Health Across Properties', desc: 'Total annual dues at risk across all clubs. Which properties have the highest concentration of at-risk members? Where should the ownership team focus?' },
  { tool: 'ROI Attribution Reporting', desc: 'Every GM initiative tracked from trigger → action → outcome → financial impact. Board-ready proof of what retention playbooks, staffing adjustments, and demand optimization actually delivered.' },
  { tool: 'Quarterly Board Packages', desc: 'Auto-generated reports with key metrics, trend analysis, and comparative benchmarks. No more manual assembly. Export in 30 seconds.' },
]

export default function OwnershipBoardPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Ownership & Board</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See exactly what the GM fixed — and what still needs funding.
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mb-8">
            Instead of quarterly surprises, you get a running scorecard: dues at risk, actions taken, dollars recovered, and staffing requests tied to payback.
          </p>
          <div className="flex gap-4">
            <Link href="/book-demo" className="px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
              Request a Board Demo
            </Link>
            <Link href="/roi-calculator" className="px-6 py-3 border-2 border-swoop-green text-swoop-green font-semibold rounded-lg hover:bg-swoop-green hover:text-swoop-dark transition">
              Calculate Your Club's ROI
            </Link>
          </div>
        </div>
      </section>

      {/* Board Challenges */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The board's visibility problem</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {boardChallenges.map((item) => (
              <div key={item.challenge} className="bg-swoop-card border-l-4 border-lens-pipeline rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.challenge}</h3>
                <p className="text-swoop-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Swoop Gives Boards */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Strategic oversight, not operational micromanagement</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Boards get the picture without chasing spreadsheets: live dues-at-risk, action timelines, and measurable ROI on every initiative.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {boardTools.map((t) => (
              <div key={t.tool} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="font-semibold mb-2 text-lg">{t.tool}</h3>
                <p className="text-sm text-swoop-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Board meetings: Before vs. After</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border-2 border-red-500/30">
              <h3 className="text-lg font-semibold text-red-400 mb-4">Before Swoop</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>• GM presents last quarter's retention rate from a manually assembled spreadsheet</li>
                <li>• Board asks: "How many members are currently at risk?" — GM doesn't know</li>
                <li>• Staffing increase proposal has no projected ROI or outcome tracking</li>
                <li>• Multi-property operators spend 2 days aggregating data for board reports</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border-2 border-swoop-green/50">
              <h3 className="text-lg font-semibold text-swoop-green mb-4">With Swoop</h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li>• Real-time retention dashboard: 14 at-risk members, $338K in annual dues at stake</li>
                <li>• Board asks: "What's the plan?" — GM shows AI-recommended interventions with success rates</li>
                <li>• Every staffing proposal includes predicted revenue impact and payback period</li>
                <li>• Portfolio-level report exports in 30 seconds with normalized benchmarks across all properties</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Property Operators */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Multi-property operators</h2>
          <p className="text-swoop-muted max-w-2xl mx-auto mb-8">
            Managing 3-10 clubs? Swoop gives you portfolio-level intelligence with cross-club benchmarks, rollup reporting, and shared playbooks that deploy once and run everywhere.
          </p>
          <Link href="/for/multi-club-operators" className="inline-block px-6 py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition">
            Learn About Portfolio Features
          </Link>
        </div>
      </section>

      <CTASection 
        headline="See portfolio intelligence in action." 
        subtext="We'll show you real-time benchmarks, cross-property rollups, and board-ready reporting." 
      />
    </>
  )
}
