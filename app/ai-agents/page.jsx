import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import { BoardSnapshotCard, GmScriptCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'AI Agents',
  description: 'Six canonical AI agents monitor your operation, draft recommendations, and route human approvals — no autopilot required.',
  path: '/ai-agents',
})

const agents = [
  {
    name: 'Member Pulse',
    monitors: 'Attendance, spend, satisfaction, and communication lag for every member household.',
    recommendation: 'Flags a 12-year golf member whose health score dropped 14 points and drafts a personal call script for the GM.',
    approval: 'You approve or reject the contact plan, and Pulse logs the outcome for retention reporting.',
  },
  {
    name: 'Demand Optimizer',
    monitors: 'Open tee inventory, cancellation risk, and F&B uplift per time block.',
    recommendation: 'Identifies tomorrow’s 2:10 PM gap, ranks high-value members likely to dine afterward, and generates a targeted invite list.',
    approval: 'Starter lead approves the auto-drafted texts/email and sends in two clicks.',
  },
  {
    name: 'Service Recovery',
    monitors: 'Service complaints, ticket stats, wait times, and tip sentiment across outlets.',
    recommendation: 'Detects a three-shift backlog in the Grill Room, drafts apology messaging, and schedules a comp credit if approved.',
    approval: 'Department head approves the escalation before anything is sent or credited.',
  },
  {
    name: 'Labor Optimizer',
    monitors: 'Actual vs. scheduled staffing, demand forecasts, and overtime exposure.',
    recommendation: 'Projects Friday lunch to miss coverage by two servers and suggests which roles to reassign plus expected covers saved.',
    approval: 'Ops lead approves the shift swap and the instructions flow to the staffing system.',
  },
  {
    name: 'Revenue Analyst',
    monitors: 'Dues at risk, ancillary revenue, cart fees, and pipeline momentum.',
    recommendation: 'Spots a $42K variance in cart fee capture versus rounds played and drafts a weekly revenue note for finance.',
    approval: 'GM reviews the note, adds context if needed, and routes it to the board list.',
  },
  {
    name: 'Engagement Autopilot',
    monitors: 'Event participation, lesson history, approvals, and channel preferences.',
    recommendation: 'Sees a multi-club family skipping tournaments and drafts an invite to a social mixer with curated talking points for staff.',
    approval: 'Membership director approves messaging and logs outcome with one tap.',
  },
]

const agentFaqs = [
  {
    question: 'Can AI agents take actions without my approval?',
    answer: 'No. Every action requires explicit approval unless you toggle auto-approve for low-risk categories.',
  },
  {
    question: 'What if an agent recommends something wrong?',
    answer: 'Reject it. Agents learn from your decisions and tighten future recommendations.',
  },
  {
    question: 'Who can approve agent recommendations?',
    answer: 'You control approval paths. GM, membership, golf, and dining leaders each get tailored queues.',
  },
  {
    question: 'Can I turn specific agents off?',
    answer: 'Yes. Enable only the agents you need, and switch them on as your team is ready.',
  },
  {
    question: 'How do agents access our data?',
    answer: 'Agents read from your connected systems via secure, read-only APIs. They never write back to your sources.',
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
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Six assistants that monitor every signal and keep humans in the loop.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-swoop-muted">
            Each agent owns a domain — member health, demand, service, labor, revenue, or engagement. They watch the data, draft the fix, and wait for your approval.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <AgentActionDrawer />
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          {agents.map((agent) => (
            <article key={agent.name} className="rounded-2xl border border-swoop-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-swoop-muted">{agent.name}</p>
              <h2 className="mt-2 text-xl font-semibold">{agent.monitors}</h2>
              <p className="mt-3 text-sm text-swoop-muted">
                <strong>Example recommendation:</strong> {agent.recommendation}
              </p>
              <p className="mt-2 text-sm text-swoop-muted">
                <strong>Approval flow:</strong> {agent.approval}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Approval rhythm</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Agents queue recommendations with impact math and context</li>
              <li>• You approve, reject, or edit before anything is sent or scheduled</li>
              <li>• Every decision updates retention math and audit logs</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Human oversight</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Role-based approval queues keep departments in control</li>
              <li>• Auto-approve only what you explicitly allow</li>
              <li>• Board-ready audit trail shows who approved what and when</li>
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
              { title: 'Step 2 · GM Approves', detail: 'Membership director reviews the scripted call + task' },
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

      <CTASection headline="Review the six agents in action on your own data." />
    </div>
  )
}
