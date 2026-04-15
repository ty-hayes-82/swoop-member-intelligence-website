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
    execution: 'Automatically drafts an SMS to your F&B Director with the recommended shift swap to approve in one tap. AI never sends without your sign-off.',
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
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.10)',
              padding: 24,
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <div>
              <p style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: theme.colors.accent, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 4px' }}>
                {block.time}
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', margin: 0, letterSpacing: '0.04em' }}>
                {block.agents}
              </p>
            </div>
            <h5 style={{ fontFamily: theme.fonts.serif, fontSize: 18, fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>
              {block.headline}
            </h5>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {block.points.map((pt, i) => (
                <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
                  <strong style={{ color: '#FFFFFF', fontWeight: 600 }}>{pt.label}:</strong> {pt.text}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 'auto', background: 'rgba(0,0,0,0.50)', padding: '10px 14px', borderRadius: 8, fontFamily: theme.fonts.mono, fontSize: 12, color: '#F3922D', lineHeight: 1.5 }}>
              {block.callout}
            </div>
            {block.execution && (
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '10px 14px', fontSize: 12, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6 }}>
                <span style={{ color: 'rgba(255,255,255,0.80)', fontWeight: 600 }}>Execution: </span>{block.execution}
              </div>
            )}
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