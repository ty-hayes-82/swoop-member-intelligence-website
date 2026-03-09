import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import { BoardSnapshotCard, GmScriptCard } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'AI Agents',
  description: 'AI agents surface risks and route the next action with measurable outcomes.',
  path: '/ai-agents',
})

const recipes = [
  'At-risk member score drop > 12 points → GM script + call task',
  'Cancellation risk > 70% at 24h → hold the slot for a priority member and alert the starter',
  'Staffing gap during post-round peak → suggest which position to backfill and when',
  'Unresolved complaint > 72h → comp offer draft + escalation',
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
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Automations your GM team can approve in context.</h1>
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

      <ProofStack
        statLabel="Recommended actions approved"
        statValue="83.2%"
        demoLabel="Agent drawer"
        quote="The team stopped debating spreadsheets and started approving clear next actions."
        ctaLabel="Book agent demo"
        ctaHref="/book-demo"
      >
        <BoardSnapshotCard />
      </ProofStack>

      <CTASection headline="See your own agent inbox and approval flows." />
    </div>
  )
}
