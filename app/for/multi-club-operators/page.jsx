import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'For Multi-Club Operators — Portfolio Intelligence Platform',
  description: 'Manage 3-10 clubs from one intelligence platform. Cross-club benchmarks, rollup reporting, shared playbooks, and portfolio-level risk visibility.',
}

const challenges = [
  {
    title: 'Disconnected Systems Across Properties',
    problem: 'Club A runs ForeTees, Club B uses Chelsea, Club C is on EZLinks. You\'re managing three different tee sheet platforms, three different POS systems, and no unified view.',
    solution: 'Swoop connects to all of them. One dashboard, one intelligence layer, full portfolio visibility regardless of underlying tech stack.',
  },
  {
    title: 'No Cross-Club Benchmarking',
    problem: 'Which club has the best tee sheet fill rate? Lowest member churn? Most efficient labor model? You don\'t know because every property reports differently.',
    solution: 'Swoop normalizes data across all properties. Compare retention rates, revenue per member, F&B conversion, and labor efficiency side-by-side.',
  },
  {
    title: 'Manual Rollup Reporting',
    problem: 'Board meetings and investor updates require spreadsheet gymnastics to aggregate performance across clubs. Takes 2+ days every quarter.',
    solution: 'Portfolio-level dashboards update in real time. Export board-ready reports with one click. Revenue, retention, and operational health across all clubs.',
  },
  {
    title: 'Best Practices Stuck in Silos',
    problem: 'Club A\'s GM figured out how to recover at-risk members. Club B-E have no idea. Every property reinvents the wheel.',
    solution: 'Build a playbook at one property, deploy it across your portfolio. AI agents execute the same retention workflows at every club.',
  },
]

const features = [
  {
    title: 'Cross-Club Benchmarks',
    description: 'Compare fill rates, retention, F&B conversion, labor efficiency, and member satisfaction across all properties. Know which club is outperforming and why.',
    metrics: ['Tee sheet fill rate by property', 'Member churn rate comparison', 'Revenue per member ranking', 'Labor cost efficiency'],
  },
  {
    title: 'Rollup Reporting & Dashboards',
    description: 'Portfolio-level intelligence for board meetings, investor updates, and ownership review. All clubs in one view.',
    metrics: ['Total portfolio revenue', 'Combined at-risk annual value', 'Cross-property member count', 'Average retention rate'],
  },
  {
    title: 'Shared Playbooks & AI Agents',
    description: 'Standardize best practices across your portfolio. What works at one club automatically deploys to others.',
    metrics: ['Centralized agent playbooks', 'Cross-club member save workflows', 'Standardized engagement sequences', 'Portfolio-wide AI recommendations'],
  },
  {
    title: 'Multi-Property Member Intelligence',
    description: 'See members who belong to multiple clubs in your portfolio. Understand cross-property behavior and high-value member patterns.',
    metrics: ['Multi-club member tracking', 'Cross-property engagement', 'Portfolio LTV per member', 'Shared member risk alerts'],
  },
]

const useCases = [
  {
    scenario: 'Quarterly Board Meeting',
    before: 'Spend 2 days aggregating spreadsheets from each club. Data is inconsistent, outdated by the time you present it.',
    after: 'Export a portfolio-level report in 30 seconds. Revenue, retention, and risk metrics normalized and current across all properties.',
  },
  {
    scenario: 'New GM Onboarding',
    before: 'New GM at Club C has to learn from scratch. Club A\'s successful retention playbook stays at Club A.',
    after: 'Deploy Club A\'s proven playbook to Club C on day one. AI agents run the same workflows, new GM inherits institutional knowledge.',
  },
  {
    scenario: 'Identifying Portfolio Risk',
    before: 'Don\'t know which clubs have the highest churn risk until annual reports arrive. Too late to intervene.',
    after: 'Daily portfolio briefing flags at-risk properties and members. See $2.1M in annual dues at risk across 5 clubs before resignations arrive.',
  },
]

const comparison = [
  { feature: 'Cross-club benchmarks', single: 'Manual spreadsheets', swoop: 'Real-time dashboards' },
  { feature: 'Rollup reporting', single: '2+ days per quarter', swoop: '30 seconds' },
  { feature: 'Shared playbooks', single: 'Siloed at each property', swoop: 'Deploy once, run everywhere' },
  { feature: 'Multi-property member tracking', single: 'Not possible', swoop: 'Full visibility' },
  { feature: 'Portfolio-level risk alerts', single: 'Not possible', swoop: 'Daily briefing' },
]

function ComparisonRow({ feature, single, swoop }) {
  return (
    <tr className="border-b border-swoop-border">
      <td className="py-4 pr-6 font-medium">{feature}</td>
      <td className="py-4 px-6 text-sm text-swoop-muted">{single}</td>
      <td className="py-4 pl-6 text-sm font-semibold text-swoop-green">{swoop}</td>
    </tr>
  )
}

export default function MultiClubPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Multi-Club Operators</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">One platform. Every property. Full portfolio visibility.</h1>
          <p className="text-lg text-swoop-muted max-w-3xl mb-8">
            Managing 3–10 clubs means 3–10 sets of disconnected systems. Swoop gives you a single intelligence layer across all properties with rollup reporting, cross-club benchmarks, shared playbooks, and portfolio-level risk visibility.
          </p>
          <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-xl p-6 max-w-3xl">
            <p className="font-semibold mb-2">Built for portfolio operators:</p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-swoop-green mt-0.5">✓</span>
                <span>Multi-club groups (3-10 properties)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-swoop-green mt-0.5">✓</span>
                <span>Cross-property benchmarking</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-swoop-green mt-0.5">✓</span>
                <span>Rollup reporting for boards/investors</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-swoop-green mt-0.5">✓</span>
                <span>Shared playbooks across portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">The multi-club challenge</h2>
          <p className="text-center text-swoop-muted mb-12 max-w-2xl mx-auto">
            Single-club tools don&apos;t scale to portfolios. Swoop was built for operators managing multiple properties.
          </p>
          <div className="space-y-8">
            {challenges.map((item) => (
              <div key={item.title} className="grid md:grid-cols-3 gap-6 bg-swoop-card border border-swoop-border rounded-xl p-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-600 mb-1">The Problem</p>
                  <p className="text-sm text-swoop-muted">{item.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-swoop-green mb-1">Swoop Solution</p>
                  <p className="text-sm text-swoop-muted">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio intelligence features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((item) => (
              <div key={item.title} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-swoop-muted mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2 text-sm">
                      <span className="text-swoop-green mt-0.5">✓</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real portfolio scenarios</h2>
          <div className="space-y-6">
            {useCases.map((item) => (
              <div key={item.scenario} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">{item.scenario}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-red-600 mb-2">Before Swoop</p>
                    <p className="text-sm text-swoop-muted">{item.before}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-swoop-green mb-2">With Swoop</p>
                    <p className="text-sm text-swoop-muted">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio operations: Before vs. After</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-swoop-border">
                  <th className="text-left py-4 pr-6 font-semibold">Capability</th>
                  <th className="text-left py-4 px-6 font-semibold">Single-Club Tools</th>
                  <th className="text-left py-4 pl-6 font-semibold text-swoop-green">Swoop Portfolio</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <ComparisonRow key={row.feature} {...row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Portfolio pricing</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Multi-club operators get volume pricing and dedicated portfolio success management. Contact us for a custom quote based on property count and total member base.
          </p>
        </div>
      </section>

      <CTASection headline="See your portfolio in one platform." subtext="We'll show you multi-club rollup with cross-property benchmarks and shared playbooks." />
    </>
  )
}
