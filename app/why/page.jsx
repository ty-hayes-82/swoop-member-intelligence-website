import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Why Swoop',
  description: 'Compare Swoop with legacy BI and point tools on deployment speed, live metrics, and actionability.',
  path: '/why',
})

const rows = [
  { metric: 'Deployment time', legacy: '8-16 weeks', swoop: '2-3 weeks' },
  { metric: 'Real-time data', legacy: 'Nightly batch', swoop: 'Live metrics with hourly refresh' },
  { metric: 'Action workflows', legacy: 'Manual follow-up', swoop: 'Step-by-step routing with clear owners' },
  { metric: 'Attribution depth', legacy: 'Lagging summaries', swoop: 'Action-level proof' },
]

const whyFaqs = [
  { question: 'Why not just use our CRM?', answer: 'CRMs log interactions. Swoop watches behavior across systems and tells you who is at risk before you interact.' },
  { question: 'Why not spreadsheets?', answer: 'Spreadsheets show historical data. Swoop combines live signals so you act before a resignation email appears.' },
  { question: 'What is the switching cost?', answer: 'None. Swoop overlays your stack. No need to rip out tee sheet, POS, or CRM tools.' },
  { question: 'How is Swoop different from waitlist-only tools?', answer: 'Most waitlist apps fill slots. Swoop prioritizes members based on health, spend, and retention impact so every slot protects revenue.' },
]



export default function WhyPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Why Swoop</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Purpose-built for the operators who run the club every day.</h1>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container overflow-x-auto rounded-2xl border border-swoop-border bg-white">
          <table className="w-full min-w-[620px]">
            <thead className="bg-swoop-bg text-left text-sm">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Legacy BI vendors</th>
                <th className="px-4 py-3">Swoop</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.metric} className="border-t border-swoop-border text-sm">
                  <td className="px-4 py-3 font-semibold">{row.metric}</td>
                  <td className="px-4 py-3 text-swoop-muted">{row.legacy}</td>
                  <td className="px-4 py-3">{row.swoop}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — how Swoop changes your week</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• See risks before they escalate</li>
              <li>• Act on data, not gut feel</li>
              <li>• Report outcomes, not activities</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — what you prove</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Retention rate improvement</li>
              <li>• Revenue recovered</li>
              <li>• Churn prevented</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Comparison artifact</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold text-swoop-dark">What a waitlist tool sees</p>
              <p className="mt-2 text-sm text-swoop-muted">12 people waiting for Saturday 8am.</p>
            </div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold text-swoop-dark">What Swoop sees</p>
              <p className="mt-2 text-sm text-swoop-muted">3 of those 12 are at-risk members whose engagement dropped 30% — prioritize their experience.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Why Swoop FAQ</h2>
          <div className="mt-6 space-y-4">
            {whyFaqs.map((item) => (
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
          <h2 className="text-2xl font-bold mb-4">Ready to compare your stack?</h2>
          <p className="text-swoop-muted mb-6">Book a demo and we’ll benchmark your current tools against Swoop.</p>
          <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
            Book a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
