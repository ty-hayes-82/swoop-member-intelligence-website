import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import { BoardSnapshotCard, GmScriptCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'AI Agents',
  description: 'AI assistants watch every member, slot, and outlet signal and tee up the next best move with impact math.',
  path: '/ai-agents',
})

const recipes = [
  'At-risk member score drop > 12 points → GM script + call task',
  'Cancellation risk > 70% at 24h → hold the slot for a priority member and alert the starter',
  'Staffing gap during post-round peak → suggest which position to backfill and when',
  'Unresolved complaint > 72h → comp offer draft + escalation',
]

const agentFaqs = [
  {
    question: 'Can AI agents take actions without my approval?',
    answer: 'No. Every action requires human approval unless you explicitly enable auto-approve for low-risk items.',
  },
  {
    question: 'What if an agent recommends something wrong?',
    answer: 'You reject it. Agents learn from your feedback pattern over time.',
  },
  {
    question: 'Who can approve agent recommendations?',
    answer: 'Configurable by role — GM, department heads, or designated staff.',
  },
  {
    question: 'Can I turn off specific agents?',
    answer: 'Yes. Each of the 6 agents can be enabled or disabled independently.',
  },
  {
    question: 'How do agents access our data?',
    answer: 'Agents read from your connected systems through secure API integrations. They never modify source data.',
  },
]

function AgentActionDrawer() {
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Agent action drawer</p>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <BoardSnapshotCard />
        <GmScriptCard />
      </div>
    </div>
  )
}

export default function AIAgentsPage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">AI Agents</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">24/7 assistants that spot the problem, draft the fix, and let you stay in control.</h1>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <AgentActionDrawer />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Automation recipes</h2>
          <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
            {recipes.map((recipe) => (
              <li key={recipe} className="rounded-lg border border-swoop-border bg-swoop-bg px-3 py-2">{recipe}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — how approvals work</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Each agent surfaces a recommendation with context and expected impact</li>
              <li>• You approve, reject, or modify before any action is taken</li>
              <li>• Approved actions execute automatically and log results</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — audit trail and proof of impact</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Every recommendation and outcome is logged</li>
              <li>• Weekly impact summary shows saves and revenue recovered</li>
              <li>• Board-ready report of AI-assisted decisions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Agent flow</p>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: 'Step 1 · Agent Flags', detail: 'Member 247 engagement dropped 40% in 3 weeks' },
              { title: 'Step 2 · GM Approves', detail: 'Schedule personal call from Membership Director' },
              { title: 'Step 3 · Outcome', detail: 'Member renewed — saved $18K in annual dues' },
            ].map((step, index) => (
              <div key={step.title} className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-sm text-swoop-muted">
                <p className="font-semibold text-swoop-dark">{step.title}</p>
                <p className="mt-2">{step.detail}</p>
                {index < 2 && <div className="mt-3 text-xs text-swoop-muted">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">AI agent FAQ</h2>
          <div className="mt-6 space-y-4">
            {agentFaqs.map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProofStack
        statLabel="Recommended actions approved"
        statValue="83.2%"
        demoLabel="Agent drawer"
        ctaLabel="Book a Demo"
        ctaHref="/book-demo"
      >
        <BoardSnapshotCard />
      </ProofStack>

      <CTASection headline="See your own agent inbox and approval flows." />
    </div>
  )
}
