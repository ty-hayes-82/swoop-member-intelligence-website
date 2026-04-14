import { theme } from '@/config/theme';
import { SectionShell, Card } from '@/landing/ui';

const narrativeBlocks = [
  {
    time: 'The Morning',
    agents: 'Member Pulse · Chief of Staff',
    headline: 'Before you open your laptop, your morning briefing is ready.',
    points: [
      { label: 'Pattern Identified', text: 'Overnight review of all systems and signals.' },
      { label: 'Action Taken', text: 'Assembled prioritized action plan ranked by dollars at risk.' },
      { label: 'Outcome', text: 'Entire morning triaged in 90 seconds. Three decisions.' }
    ],
    callout: '> $18K dues at risk. Call James Whitfield before 10:15 AM.',
  },
  {
    time: 'The Watch',
    agents: 'Member Pulse · Service Recovery',
    headline: 'The complaint was filed Tuesday. By Thursday, the agent escalated it.',
    points: [
      { label: 'Pattern Identified', text: 'Service recovery window breached on dining complaint.' },
      { label: 'Action Taken', text: 'Cross-referenced with upcoming 9:20 AM tee time.' },
      { label: 'Outcome', text: 'Coordinated recovery action surfaced before staff noticed.' }
    ],
    callout: '> Complaint aging 6 days · dining visits ↓40% · tee time 9:20 AM today.',
  },
  {
    time: 'The Revenue',
    agents: 'Revenue Analyst · Demand Optimizer',
    headline: 'Tuesday twilight slots were 42% empty. Now they\'re 68% full.',
    points: [
      { label: 'Pattern Identified', text: 'Tuesday PM fill rates lagging.' },
      { label: 'Action Taken', text: 'Drafted & targeted F&B offer to waitlist members.' },
      { label: 'Outcome', text: '+$780 incremental revenue booked.' }
    ],
    callout: '> +$780 this week · 4 at-risk members converted · F&B prep adjusted.',
  },
  {
    time: 'The Floor',
    agents: 'Labor Optimizer · Engagement Autopilot',
    headline: 'Two servers called out. The agent redeployed before the lunch rush.',
    points: [
      { label: 'Pattern Identified', text: 'Grill Room understaffed during high-value member bookings.' },
      { label: 'Action Taken', text: 'Recommended floater redeployment and outlet prioritization.' },
      { label: 'Outcome', text: '3 VIP tables covered without service drop-off.' }
    ],
    callout: '> Grill Room short 2 servers · banquet floater redeployed · 3 VIP tables covered.',
  },
];

export default function AgentRevealSection() {
  return (
    <SectionShell
      band="dark"
      eyebrow="YOU HAVE A 300-MEMBER CLUB AND A 12-PERSON STAFF."
      title="Now you have a team that never sleeps."
      subtitle="Four specialized agents monitor your operations continuously. They surface what matters, recommend what to do, and learn what works. You approve. They execute."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: 24,
          marginBottom: 56,
        }}
      >
        {narrativeBlocks.map((block) => (
          <div
            key={block.time}
            className="bg-[#1e1e1e] border border-gray-700 p-6 rounded-lg flex flex-col gap-4"
          >
            <div>
              <h4 className="text-amber-500 text-xs font-mono mb-2 uppercase tracking-wide">
                {block.time}
              </h4>
              <p className="text-xs text-white/40 m-0 tracking-wide">
                {block.agents}
              </p>
            </div>
            <h5 className="text-white text-lg font-semibold m-0">
              {block.headline}
            </h5>
            <ul className="space-y-3 text-gray-300 text-sm m-0 p-0" style={{ listStyle: 'none' }}>
              {block.points.map((pt, i) => (
                <li key={i}><strong className="text-white">{pt.label}:</strong> {pt.text}</li>
              ))}
            </ul>
            <div className="mt-auto bg-black p-3 rounded font-mono text-xs text-green-400">
              {block.callout}
            </div>
          </div>
        ))}
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.70)',
          margin: 0,
          lineHeight: 1.5,
        }}
      >
        "Every agent proposes. You decide. The outcome is tracked.{' '}
        <strong style={{ color: '#FFFFFF', fontStyle: 'normal' }}>The model gets smarter.</strong>"
      </p>
    </SectionShell>
  );
}