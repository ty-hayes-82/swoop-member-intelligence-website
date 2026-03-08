import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: "AI Agents for Private Clubs: A GM's Primer",
  description: 'What AI agents do, how they work, and why human-in-the-loop matters for private club operations.',
}

const whatAreAgents = [
  { q: 'What is an AI agent?', a: 'An AI agent is software that monitors data sources continuously, identifies patterns or anomalies, and recommends specific actions. Unlike traditional dashboards that just display data, agents actively watch for problems and opportunities.' },
  { q: 'How is this different from a dashboard?', a: "A dashboard shows you what happened. An agent tells you what's about to happen and what to do about it. Dashboards are reactive. Agents are predictive." },
  { q: 'Do agents replace my staff?', a: "No. Agents recommend. Your GM approves. Think of them as tireless assistants who monitor 300+ members 24/7 and surface the 2-3 things that need your attention today." },
]

const howTheyWork = [
  {
    agent: 'Member Save Agent',
    monitors: 'Tee sheet booking patterns, F&B spend, email engagement, complaint history',
    triggers: 'Member health score drops 15+ points in 30 days',
    recommends: 'Personal GM call within 48 hours',
    outcome: '68% of flagged members saved when contacted within 2 days',
  },
  {
    agent: 'Waitlist Optimizer',
    monitors: 'Cancellation patterns, member health scores, lifetime value, acceptance rates',
    triggers: 'Tee time opens due to cancellation',
    recommends: 'Notify specific member (highest retention-value match)',
    outcome: '87% fill rate vs. 67% with FIFO waitlists',
  },
  {
    agent: 'F&B Flow Agent',
    monitors: 'Tee sheet pace, weather forecast, historical dining patterns',
    triggers: 'Predicted post-round dining rush 40% above typical',
    recommends: 'Add 1 server to Grill Room shift, increase appetizer prep',
    outcome: 'Reduce wait times from 22min to 8min during rushes',
  },
]

const principles = [
  {
    title: 'Human-in-the-Loop',
    desc: "Agents never take action without GM approval. Every recommendation shows expected impact and reasoning. You're still the decision-maker.",
    icon: '👤',
  },
  {
    title: 'Explainable Recommendations',
    desc: 'Every agent explains WHY it flagged something and WHAT data led to the recommendation. No black-box decisions.',
    icon: '💡',
  },
  {
    title: 'Outcome Tracking',
    desc: "When you act on a recommendation, the agent tracks the outcome. Did the member stay? Did F&B improve? You get attribution, not guesses.",
    icon: '📊',
  },
  {
    title: 'Continuous Learning',
    desc: "Agents calibrate to YOUR club's patterns. What works at one property may not work at another. Your agents learn from your decisions.",
    icon: '🎯',
  },
]

const misconceptions = [
  {
    myth: 'AI agents will automate my job away',
    reality: "Agents automate the monitoring and pattern detection. The relationship work — the personal call, the member conversation, the service recovery — that's still 100% human. Agents give you more time for what matters.",
  },
  {
    myth: 'This is too complex for our team',
    reality: 'Agents appear in your Daily Briefing as plain-English recommendations with one-click approval. No technical knowledge required. If you can read an email, you can use AI agents.',
  },
  {
    myth: 'We need perfect data for this to work',
    reality: "Agents work with the data you have. Missing a few records? They'll still surface the patterns that matter. Perfect is the enemy of good — and even imperfect intelligence beats gut feeling.",
  },
]

export default function AiAgentsPrimerPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <Link href="/resources" className="text-swoop-accent text-sm font-medium mb-4 inline-block hover:underline">
            ← Back to Resources
          </Link>
          <span className="inline-block text-xs font-semibold text-swoop-accent bg-swoop-accent/10 px-3 py-1 rounded-full mb-4">Guide</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Agents for Private Clubs: A GM&apos;s Primer</h1>
          <p className="text-lg text-swoop-muted">
            What AI agents do, how they work, and why human-in-the-loop matters for private club operations.
          </p>
        </div>
      </section>

      {/* What Are AI Agents */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">What are AI agents?</h2>
          <div className="space-y-6">
            {whatAreAgents.map((item) => (
              <div key={item.q} className="border-l-4 border-swoop-green pl-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-swoop-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work (Real Examples) */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-4 text-center">How they work: Real examples</h2>
          <p className="text-swoop-muted text-center mb-12 max-w-2xl mx-auto">
            Here&apos;s what three of Swoop&apos;s six agents actually monitor and recommend.
          </p>
          <div className="space-y-8">
            {howTheyWork.map((example) => (
              <div key={example.agent} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{example.agent}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-swoop-muted uppercase mb-1">Monitors</p>
                    <p className="text-sm">{example.monitors}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-swoop-muted uppercase mb-1">Triggers When</p>
                    <p className="text-sm">{example.triggers}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-swoop-muted uppercase mb-1">Recommends</p>
                    <p className="text-sm font-medium text-swoop-green">{example.recommends}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-swoop-muted uppercase mb-1">Measured Outcome</p>
                    <p className="text-sm">{example.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Four principles that guide how we build agents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="bg-swoop-card border-2 border-swoop-border rounded-xl p-6">
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-swoop-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Common misconceptions</h2>
          <div className="space-y-6">
            {misconceptions.map((item) => (
              <div key={item.myth} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">MYTH</span>
                  <p className="text-lg font-semibold mt-2">{item.myth}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">REALITY</span>
                  <p className="text-swoop-muted mt-2 leading-relaxed">{item.reality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Implementation */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">What it looks like in practice</h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              <strong className="text-white">7:00 AM:</strong> Your Daily Briefing arrives. Three agent recommendations:
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-2">
                <span className="text-swoop-green mt-1">→</span>
                <span><strong className="text-white">Member Save Agent:</strong> &quot;James Whitfield health score dropped to 42. Recommend personal GM call within 48 hours. Success rate: 68%.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-swoop-green mt-1">→</span>
                <span><strong className="text-white">Waitlist Optimizer:</strong> &quot;3 cancellations predicted for Saturday. Notify Anne Jordan (at-risk member, $14K value) first.&quot;</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-swoop-green mt-1">→</span>
                <span><strong className="text-white">F&B Flow Agent:</strong> &quot;Post-round rush predicted Sunday 1-3 PM (40% above normal). Add 1 server, increase appetizer prep.&quot;</span>
              </li>
            </ul>
            <p className="pt-4">
              <strong className="text-white">7:15 AM:</strong> You review, approve all three. The system executes.
            </p>
            <p>
              <strong className="text-white">Next week:</strong> James stayed. Anne filled the slot. Sunday service was seamless. Every outcome tracked and attributed to your decisions.
            </p>
            <p className="text-swoop-green font-semibold text-lg pt-4">
              That&apos;s the promise: superhuman monitoring, human decision-making, measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      <CTASection 
        headline="See AI agents in action." 
        subtext="Book a demo and we'll walk you through live agent recommendations with your club's operational scenarios." 
      />
    </>
  )
}
