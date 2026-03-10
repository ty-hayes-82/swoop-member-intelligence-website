import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import { AtRiskRosterMock, GmScriptCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'For Private Clubs',
  description: 'Operational intelligence for private clubs with retention and service pressure.',
  path: '/for/private-clubs',
})

const privateClubFaqs = [
  { q: 'What do we review on Mondays?', a: 'Member health deltas, complaint backlog, and outreach owners so every at-risk household has a next step.' },
  { q: 'How do we keep exclusivity while scaling outreach?', a: 'Swoop flags the right members and proposes GM-voice scripts so every touch feels personal.' },
  { q: 'Can we see household-level storylines?', a: 'Yes. Every profile shows tenure, family participation, service issues, and upcoming events to invite them back.' },
  { q: 'How fast can we stand this up?', a: 'Most private clubs are live within 10 business days once tee sheet + POS access is granted.' },
]

export default function PrivateClubsPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-container">
          <h1 className="text-4xl font-bold md:text-5xl">Private clubs: protect relationships before they go dark.</h1>
          <p className="mt-4 text-lg text-swoop-muted">Vertical proof: 21% retention lift and 18-hour average follow-up on high-risk members.</p>
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto grid max-w-container gap-6 lg:grid-cols-2">
          <AtRiskRosterMock />
          <GmScriptCard />
        </div>
      </section>
      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday ritual</p>
            <h3 className="mt-2 text-2xl font-bold">Member intimacy checklist</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Review top 15 at-risk households.</li>
              <li>• Pair each with a GM or membership owner.</li>
              <li>• Load scripts + offers so outreach feels curated.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday recap</p>
            <h3 className="mt-2 text-2xl font-bold">Exclusivity proof</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Outreach completed + next touches queued.</li>
              <li>• Members returning for curated events.</li>
              <li>• Dues protected with service fixes in flight.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
          <h3 className="mt-3 text-2xl font-bold">Member intimacy workbook</h3>
          <p className="mt-3 text-swoop-muted">Combines household context, recent experiences, and recommended gestures so every outreach feels bespoke.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">Storyline timeline</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">Complaints + service notes</div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">Upcoming invites</div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Private club FAQs</h2>
          <div className="mt-6 space-y-4">
            {privateClubFaqs.map((faq) => (
              <article key={faq.q} className="border-b border-swoop-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Book a Demo for your private club" subtext="We&apos;ll show the intimacy workflow with your real member archetypes and outreach cadences." />
    </div>
  )
}
