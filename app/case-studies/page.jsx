import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'
import DemoDisclosure from '@/components/DemoDisclosure'

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Demo walkthroughs showing retention, demand, staffing, and board impact outcomes.',
  path: '/case-studies',
})

const problemBullets = [
  'Boards want proof, not promises — every stat needs a timeline and a dollar amount.',
  'Staff needs a play-by-play so they know what to do the moment a member slips.',
  'Founding partners want to see how demo data converts into their own club economics.',
]

const caseStudies = [
  {
    name: 'Oakmont Hills · Scottsdale, AZ',
    stat: '6-day early warning · $22K annual dues protected',
    summary: 'James Whitfield resignation risk surfaced Monday, outreach approved Wednesday, dues retained Friday.',
    href: '/case-studies/oakmont-hills',
  },
]

const foundingPartners = [
  {
    name: 'Foothills Club',
    focus: 'Retention-linked waitlist fill rate',
    note: 'Pilot underway — report publishes once board sign-off is complete.',
  },
  {
    name: 'Coastal Links',
    focus: 'Lunch service wait reduction',
    note: 'Staffing telemetry gathering — ETA late March.',
  },
  {
    name: 'Ironwood Reserve',
    focus: 'Board pipeline attribution',
    note: 'Board review scheduled — seeking 2nd founding partner to pair findings.',
  },
]

const faqs = [
  {
    question: 'Why is there only one full case study?',
    answer: 'Oakmont Hills is our flagship demo environment. Additional founding partner stories publish as soon as their board approvals are in place so we never fabricate proof.',
  },
  {
    question: 'Can you anonymize our club?',
    answer: 'Yes. We redact names, swap logos, and focus on the operational signals unless your board explicitly clears attribution.',
  },
  {
    question: 'How long does it take to produce a walkthrough?',
    answer: 'Roughly six weeks. Week 1 connects data, weeks 2–3 capture signals, weeks 4–5 approve actions, week 6 packages the Monday → Friday narrative for your board.',
  },
  {
    question: 'What access do you need from our team?',
    answer: 'One GM sponsor, a controller or finance lead to validate data, and a department lead willing to run the recommended actions for two cycles.',
  },
  {
    question: 'Do you share demo data publicly?',
    answer: 'Only clearly labeled demo metrics like the Oakmont Hills scenario you see below. Real club results stay under NDA until you approve publishing.',
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Case studies</p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="lg:w-2/3">
              <h1 className="text-4xl font-bold md:text-5xl">One published walk-through today, more founding partner stories in-flight.</h1>
              <p className="mt-4 text-lg text-swoop-muted">
                You get the full Monday → Friday narrative: the signals we saw, the actions your team approved, and the dues, covers, or pipeline dollars that moved as a result.
              </p>
              <div className="mt-6 rounded-2xl border border-swoop-border bg-white p-5 text-sm text-swoop-muted">
                <p><strong className="text-swoop-ink">Disclosure:</strong> We currently have 1 fully published case study (Oakmont Hills). Founding partner slots are open for clubs that want to co-create the next proof story.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-swoop-border bg-white p-6 lg:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Why clubs ask for proof</p>
              <ul className="mt-4 space-y-3 text-sm text-swoop-muted">
                {problemBullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-swoop-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-3">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday — What triggered the story</p>
            <h2 className="mt-3 text-2xl font-bold">Complaint aging + spend decay</h2>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>Daily Briefing flagged James Whitfield (health score 42) with 2 unresolved tickets.</li>
              <li>Controller confirmed dues at risk ($22K) + F&B drop (−38% trailing 8 weeks).</li>
              <li>GM assigned Member Experience lead to approve outreach script.</li>
            </ul>
            <DemoDisclosure className="mt-5" />
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday — What the board saw</p>
            <h2 className="mt-3 text-2xl font-bold">Documented save + pipeline proof</h2>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>$22K dues retained + $1.8K dining add-on after comp authorization.</li>
              <li>Retention queue rerouted 6 members, adding 91% fill rate coverage.</li>
              <li>Board packet screenshot shows action → owner → timestamp.</li>
            </ul>
            <DemoDisclosure className="mt-5" />
          </article>
          <article className="rounded-2xl border border-dashed border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
            <h2 className="mt-3 text-2xl font-bold">“Six Day Save” timeline preview</h2>
            <p className="mt-3 text-sm text-swoop-muted">Placeholder for the annotated PDF that walks the board through Day 1 signal → Day 6 proof. Replace with screenshot once legal clears the asset.</p>
            <div className="mt-6 rounded-xl bg-swoop-bg p-6 text-center text-sm text-swoop-muted">Screenshot placeholder · Oakmont Hills case timeline</div>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container space-y-6">
          <div className="rounded-2xl border border-swoop-border bg-white p-6">
            <h2 className="text-2xl font-bold">Published walkthroughs</h2>
            <p className="mt-2 text-sm text-swoop-muted">Full narrative + screenshots available today.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {caseStudies.map((study) => (
                <article key={study.name} className="rounded-2xl border border-swoop-border p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Live now</p>
                  <h3 className="mt-2 text-xl font-semibold">{study.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-swoop-ink">{study.stat}</p>
                  <p className="mt-2 text-sm text-swoop-muted">{study.summary}</p>
                  <DemoDisclosure className="mt-3 text-xs" />
                  <Link href={study.href} className="mt-4 inline-flex text-sm font-semibold text-swoop-accent">Read the full walkthrough →</Link>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-dashed border-swoop-border bg-white p-6">
            <h2 className="text-2xl font-bold">Founding partner queue</h2>
            <p className="mt-2 text-sm text-swoop-muted">Clubs currently co-authoring their proof stories. These publish once approvals are complete.</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {foundingPartners.map((partner) => (
                <article key={partner.name} className="rounded-xl border border-swoop-border p-4 text-sm text-swoop-muted">
                  <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">In progress</p>
                  <h3 className="mt-1 text-base font-semibold text-swoop-ink">{partner.name}</h3>
                  <p className="mt-1 font-semibold">Focus: {partner.focus}</p>
                  <p className="mt-2">{partner.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold">What to know before you request a walkthrough.</h2>
            <p className="mt-3 text-swoop-muted">Share this with your board chair or operating committee to set expectations.</p>
          </div>
          <dl className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-swoop-border bg-white p-6">
                <dt className="text-base font-semibold text-swoop-ink">{faq.question}</dt>
                <dd className="mt-2 text-sm text-swoop-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CTASection headline="Book a demo to plan your case study." subtext="One 30-minute session to scope the signals, owners, and proof your board needs." />
    </div>
  )
}
