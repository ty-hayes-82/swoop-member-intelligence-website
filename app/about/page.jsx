import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

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

const aboutFaqs = [
  { question: 'Who built Swoop?', answer: 'Club operators and data scientists who saw the retention gap firsthand.' },
  { question: 'Where does data come from?', answer: 'Your existing systems — tee sheet, POS, CRM, and email.' },
  { question: 'What support is included?', answer: 'Onboarding, training, and ongoing success management are built into paid tiers.' },
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

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — how Swoop helps ops</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Surface risks early.</li>
              <li>• Recommend actions with impact math.</li>
              <li>• Track outcomes and handoffs.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — how Swoop proves value</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Board-ready retention metrics.</li>
              <li>• Cumulative save count.</li>
              <li>• ROI tracking that ties to dues and spend.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Operating principles</p>
          <ol className="mt-4 space-y-3 text-sm text-swoop-muted">
            <li>1. Every recommendation needs context.</li>
            <li>2. GMs approve before agents act.</li>
            <li>3. Data stays in your environment.</li>
            <li>4. Impact is measured, not assumed.</li>
          </ol>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">About FAQ</h2>
          <div className="mt-6 space-y-4">
            {aboutFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 text-center">
        <div className="mx-auto max-w-container">
          <h2 className="text-2xl font-bold mb-4">Meet the team behind the briefings.</h2>
          <p className="text-swoop-muted mb-6">Book a demo to see how Swoop embeds into your operations.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  )
}
