import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'For Multi-Club Operators',
  description: 'Manage 3-10 clubs from one intelligence platform. Benchmarks, rollup reporting, and cross-property member insights.',
}

export default function MultiClubPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">For Multi-Club Operators</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">One platform. Every property. Full visibility.</h1>
          <p className="text-lg text-swoop-muted max-w-2xl">
            Managing 3–10 clubs means 3–10 sets of disconnected systems. Swoop gives you a single intelligence layer across all properties with rollup reporting, cross-club benchmarks, and portfolio-level risk visibility.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Portfolio intelligence.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Cross-Club Benchmarks</h3>
              <p className="text-sm text-swoop-muted">Compare fill rates, retention, F&B conversion, and labor efficiency across properties. Know which club is outperforming and why.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Rollup Reporting</h3>
              <p className="text-sm text-swoop-muted">Portfolio-level dashboards for board meetings and investor updates. Revenue, retention, and operational health across all clubs in one view.</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Shared Playbooks</h3>
              <p className="text-sm text-swoop-muted">Build a playbook that works at Club A, deploy it to Clubs B–E. Standardize best practices across your portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection headline="See portfolio-level intelligence." subtext="We'll show you multi-club rollup with cross-property benchmarks." />
    </>
  )
}
