import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'The GM\'s Guide to Member Churn Prevention',
  description: 'Early warning signals, intervention playbooks, and attribution methods for private club General Managers.',
  path: '/resources/churn-prevention-guide',
})

const retentionFaqs = [
  { q: 'How long should a weekly retention review take?', a: 'Block 30 minutes every Monday. Five minutes to scan dashboard deltas, fifteen minutes to triage the at-risk list, ten minutes to assign outreach and log owners.' },
  { q: 'Who needs to be in the room?', a: 'GM, membership/experience lead, and whoever owns service recovery. Ownership or board liaisons join monthly to review progress.' },
  { q: 'What data sources are required?', a: 'Tee sheet, POS, complaint tracking, and email engagement cover 90% of churn risk. Add event + locker usage later for nuance.' },
  { q: 'How do I prove ROI to the board?', a: 'Use Friday talking points: saves vs. at-risk members, dues preserved, outreach still in-flight, and obstacles that need board help.' },
  { q: 'Can smaller clubs run this cadence?', a: 'Yes. Even with 150 members you still benefit from a Monday signal review and a Friday recap. The list is shorter, the discipline matters more.' },
]

export default function ChurnPreventionGuidePage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <Link href="/resources" className="text-sm text-swoop-accent hover:underline mb-4 inline-block">← Back to Resources</Link>
          <span className="inline-block text-xs font-semibold text-swoop-accent bg-swoop-accent/10 px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The GM's Guide to Member Churn Prevention</h1>
          <p className="text-xl text-swoop-muted">Early warning signals, intervention playbooks, and attribution methods.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-3xl prose-swoop">
          <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 mb-12">
            <h2 className="text-xl font-bold mb-3">The hard truth about member churn</h2>
            <p className="text-swoop-muted">
              Most private club GMs discover resignations the day the letter arrives. By then, the member has been mentally checked out for weeks—sometimes months. The warning signs were there, scattered across your tee sheet, POS, and CRM. You just couldn't see them all at once.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Part 1: Early Warning Signals</h2>
          
          <h3 className="text-xl font-semibold mb-3">Signal 1: Declining Frequency Across Multiple Domains</h3>
          <p className="text-swoop-muted mb-4">
            A member who plays every Saturday suddenly drops to twice a month. Alone, that's not alarming—could be travel, work, family. But when their dining visits also drop and email opens decline, you're looking at withdrawal across the relationship.
          </p>
          <div className="bg-swoop-green/10 border border-swoop-green/30 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-swoop-green mb-2">What to watch:</p>
            <ul className="text-sm text-swoop-muted space-y-1">
              <li>• Golf frequency drops 30%+ over 2 months</li>
              <li>• F&B spend per visit declines (ordering less, skipping post-round drinks)</li>
              <li>• Event attendance drops (used to come to member-guest, now RSVPs "no")</li>
              <li>• Email engagement falls (opens newsletters, never clicks)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-3">Signal 2: Unresolved Service Complaints</h3>
          <p className="text-swoop-muted mb-4">
            A member files a complaint about pace of play, slow F&B service, or maintenance issues. Your team acknowledges it. Then... nothing. The member never hears back. That unresolved complaint festers.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-red-600 mb-2">Critical window:</p>
            <p className="text-sm text-swoop-muted">
              You have 72 hours to respond meaningfully after a complaint. After that, the member assumes you don't care. If their next interaction is also subpar, they're mentally done.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3">Signal 3: Silence (The Ghost Member)</h3>
          <p className="text-swoop-muted mb-6">
            The most dangerous signal: no activity at all. Member still pays dues but hasn't booked a tee time in 6 weeks, hasn't dined in 2 months, hasn't opened an email. They're paying to not use the club. This is the resignation letter already written—they just haven't sent it yet.
          </p>

          <h2 className="text-2xl font-bold mb-6 mt-12">Part 2: Intervention Playbooks</h2>

          <h3 className="text-xl font-semibold mb-3">Playbook 1: The "We Miss You" Outreach</h3>
          <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 mb-6">
            <p className="font-semibold mb-2">When to use:</p>
            <p className="text-sm text-swoop-muted mb-4">Member activity dropped 40%+ but no complaints filed. They're quietly disengaging.</p>
            
            <p className="font-semibold mb-2">The approach:</p>
            <ol className="text-sm text-swoop-muted space-y-2 list-decimal ml-5">
              <li><strong>Personal call from GM.</strong> Not email. Not text. Phone call. "Hey John, haven't seen you out here in a few weeks. Everything okay?"</li>
              <li><strong>Listen for the real reason.</strong> They'll say "busy with work" but probe gently: "How's the club treating you? Anything we could improve?"</li>
              <li><strong>Offer something specific.</strong> "I'd love to grab lunch with you at the grill room next week—my treat. Let's catch up."</li>
              <li><strong>Follow up in 10 days.</strong> If they don't respond or re-engage, escalate to ownership conversation.</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-3">Playbook 2: The Service Recovery Protocol</h3>
          <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 mb-6">
            <p className="font-semibold mb-2">When to use:</p>
            <p className="text-sm text-swoop-muted mb-4">Member filed a complaint and engagement is declining post-complaint.</p>
            
            <p className="font-semibold mb-2">The approach:</p>
            <ol className="text-sm text-swoop-muted space-y-2 list-decimal ml-5">
              <li><strong>GM calls within 24 hours of complaint.</strong> Not the department head. The GM. "Sarah, I saw your note about the grill room wait time last Friday. That's not acceptable. Here's what happened and here's what we're doing about it."</li>
              <li><strong>Specific remedy.</strong> "Your next meal is on us. And I want you to text me directly if you ever wait more than 20 minutes again."</li>
              <li><strong>Close the loop.</strong> Two weeks later: "Sarah, how was your last visit? Did you notice the improvement?"</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-3">Playbook 3: The High-Value Member Retention Plan</h3>
          <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 mb-6">
            <p className="font-semibold mb-2">When to use:</p>
            <p className="text-sm text-swoop-muted mb-4">High-value member ($20K+/yr) showing multiple decay signals.</p>
            
            <p className="font-semibold mb-2">The approach:</p>
            <ol className="text-sm text-swoop-muted space-y-2 list-decimal ml-5">
              <li><strong>GM + ownership involvement.</strong> High-value member resignations are board-level events. Loop in key board members.</li>
              <li><strong>Private conversation.</strong> "Bob, you're one of our most valued members. I've noticed you haven't been around as much lately. Can we talk about what's going on?"</li>
              <li><strong>Be ready to solve problems.</strong> High-value members often have specific frustrations (pace of play, condition issues, other member behavior). If you can fix it, commit to a timeline.</li>
              <li><strong>Exclusive perks.</strong> Offer something that shows investment: early tee time access, priority event reservations, dedicated locker.</li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-12">Part 3: Measuring Success (Attribution)</h2>

          <p className="text-swoop-muted mb-4">
            Your board will ask: "How do we know this works?" You need attribution.
          </p>

          <h3 className="text-xl font-semibold mb-3">Track These Metrics:</h3>
          <ul className="space-y-3 text-swoop-muted mb-6">
            <li className="flex items-start gap-3">
              <span className="text-swoop-green mt-1">→</span>
              <div>
                <strong className="text-swoop-text">At-risk members identified:</strong> How many showed decay signals? (Health score drop, complaint + decline, ghost status)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-swoop-green mt-1">→</span>
              <div>
                <strong className="text-swoop-text">Interventions attempted:</strong> How many did you reach out to?
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-swoop-green mt-1">→</span>
              <div>
                <strong className="text-swoop-text">Re-engagement rate:</strong> Of those you contacted, how many returned to normal activity within 30 days?
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-swoop-green mt-1">→</span>
              <div>
                <strong className="text-swoop-text">Retained annual value:</strong> Sum of annual dues for members who re-engaged post-intervention.
              </div>
            </li>
          </ul>

          <div className="bg-swoop-dark text-white rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold mb-4">Board Report Template</h3>
            <p className="text-white/70 text-sm mb-4">Q4 Member Retention Report</p>
            <ul className="space-y-2 text-white/90 text-sm">
              <li>• <strong>At-risk members identified:</strong> 18 (representing $387K in annual dues)</li>
              <li>• <strong>Interventions completed:</strong> 16 (2 unreachable)</li>
              <li>• <strong>Re-engagement success rate:</strong> 12 of 16 (75%)</li>
              <li>• <strong>Annual value protected:</strong> $264K in retained dues</li>
              <li>• <strong>Cost of intervention:</strong> ~8 hours GM time, $1,200 in comp F&B</li>
              <li>• <strong>ROI:</strong> $264K protected / $1.2K cost = <strong>220x return</strong></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-12">The Bottom Line</h2>
          <p className="text-swoop-muted mb-4">
            Churn prevention isn't reactive—it's proactive. The clubs that excel at retention don't wait for resignation letters. They monitor signals, intervene early, and prove the value of every intervention.
          </p>
          <p className="text-swoop-muted mb-4">
            The hard part? Connecting signals across systems that don't talk to each other. Your tee sheet doesn't know about POS behavior. Your CRM doesn't track email engagement drops. Manual monitoring doesn't scale.
          </p>
          <p className="text-swoop-muted">
            That's the problem Swoop solves: cross-system intelligence, automated flagging, and attribution-ready reporting. But the playbooks above work with or without Swoop. The key is: <strong>act before the resignation letter arrives.</strong>
          </p>
        </div>
      </section>


      <section className="px-6 py-16">
        <div className="max-w-container mx-auto grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Monday cadence</p>
            <h3 className="mt-2 text-2xl font-bold">Weekly retention review</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Check score deltas across every cohort.</li>
              <li>• Triage members who dropped 12+ points or filed complaints.</li>
              <li>• Assign outreach owners with due dates and make-good offers.</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-swoop-border bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Friday recap</p>
            <h3 className="mt-2 text-2xl font-bold">Board talking points</h3>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Saves this week and dues preserved.</li>
              <li>• Members still at risk and why.</li>
              <li>• Help needed (policy changes, staffing, comp authority).</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Artifact</p>
          <h3 className="mt-3 text-2xl font-bold">Retention review worksheet</h3>
          <p className="mt-3 text-swoop-muted">One page template we use with GMs every Monday: score deltas, complaint feed, outreach owners, and follow-up status.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold">Left column</p>
              <ul className="mt-2 text-sm text-swoop-muted space-y-1">
                <li>• Member</li>
                <li>• Health score drop</li>
                <li>• Triggering signal</li>
              </ul>
            </div>
            <div className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
              <p className="text-sm font-semibold">Right column</p>
              <ul className="mt-2 text-sm text-swoop-muted space-y-1">
                <li>• Owner + due date</li>
                <li>• Offer / remedy</li>
                <li>• Result + dues protected</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-container mx-auto rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Retention FAQs</h2>
          <div className="mt-6 space-y-4">
            {retentionFaqs.map((faq) => (
              <article key={faq.q} className="border-b border-swoop-border pb-4 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold">{faq.q}</h3>
                <p className="mt-2 text-sm text-swoop-muted">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Want Swoop to flag at-risk members automatically?" subtext="See the platform. 30 minutes. Your club scenarios." />
    </>
  )
}
