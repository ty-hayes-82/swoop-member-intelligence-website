import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'About Swoop Golf',
  description: 'Team, advisory context, and security posture behind Swoop Golf.',
  path: '/about',
})

const founding = [
  'Ty Hayes — Founder & CEO',
  'Maya Kline — VP, Club Success',
  'Graham Liu — Head of Engineering',
]

const advisory = [
  'Former private-club GM (Top 100 US private club)',
  'Hospitality labor analytics operator',
  'Multi-property COO advisor',
]

const security = [
  'Encryption in transit and at rest',
  'Role-based access controls for operator workflows',
  'Data segregation by property and portfolio',
  'Audit logs for action approvals and automations',
]

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">About</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Built by operators who have lived the Monday fire drill.</h1>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <h2 className="text-xl font-semibold">Founding team</h2>
            <ul className="mt-3 space-y-2 text-sm text-swoop-muted">{founding.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <h2 className="text-xl font-semibold">Advisory</h2>
            <ul className="mt-3 space-y-2 text-sm text-swoop-muted">{advisory.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <h2 className="text-xl font-semibold">Security & Privacy</h2>
            <ul className="mt-3 space-y-2 text-sm text-swoop-muted">{security.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-3 text-swoop-muted">hello@swoopgolf.com · +1-480-680-6234 · Scottsdale, AZ</p>
        </div>
      </section>

      <CTASection headline="Talk with the founding team about your club model." />
    </div>
  )
}
