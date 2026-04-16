import { theme } from '@/config/theme';
import { SectionShell, Card } from '@/landing/ui';

const narrativeBlocks = [
  {
    time: 'The Morning',
    agents: 'For the General Manager',
    headline: 'Before you open your laptop, your brief is ready.',
    outcome: '6 hrs of spreadsheet work → three decisions before 7 AM.',
    callout: '> $18K dues at risk. Call James Whitfield before 10:15 AM.',
  },
  {
    time: 'The Member',
    agents: 'For the Membership Director',
    headline: 'Health score dropped Tuesday. Caught before the Thursday tee time.',
    outcome: 'Email opens dropped. Golf frequency dipped. Dining went silent — caught before any single system noticed the full sequence.',
    callout: '> CRM active. POS 18 days silent. Golf ↓42%. Intervention triggered.',
  },
  {
    time: 'The Pace',
    agents: 'For the F&B Director',
    headline: 'Hole 12 backup is reducing post-round dining conversion from 41% to 22%.',
    outcome: '$31/round recovered* — ranger + F&B alerted in one message. ($31 = 19% drop × $163 avg group F&B check)',
    callout: '> $31/round recovered* · dining conversion restored · F&B notified.',
    sources: ['ForeTees Pace', 'Jonas F&B'],
    showApprove: true,
  },
  {
    time: 'The Floor',
    agents: 'For the GM & F&B Director',
    headline: 'Two servers called out. Shift covered before the lunch rush.',
    outcome: '3 Board members seated without service drop-off.',
    callout: '> Grill Room short 2 servers · banquet floater redeployed · 3 Board members seated.',
  },
];

export default function AgentRevealSection() {
  return (
    <SectionShell
      band="dark"
      eyebrow="YOU HAVE A 300-MEMBER CLUB AND A 12-PERSON STAFF."
      title="Now you have a team that never sleeps."
      subtitle="Swoop monitors your operations 24/7. It proposes. You approve. Outcomes tracked."
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
            {block.sources && (
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {block.sources.map(src => (
                  <span key={src} style={{ fontSize: 11, padding: '3px 8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, color: 'rgba(255,255,255,0.55)' }}>
                    Source: {src}
                  </span>
                ))}
              </div>
            )}
            <h5 style={{ fontFamily: theme.fonts.serif, fontSize: 18, fontWeight: 700, color: '#FFFFFF', margin: 0, lineHeight: 1.35 }}>
              {block.headline}
            </h5>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, margin: 0 }}>
              {block.outcome}
            </p>
            <div style={{ marginTop: 'auto', background: 'rgba(0,0,0,0.50)', padding: '10px 14px', borderRadius: 8, fontFamily: theme.fonts.mono, fontSize: 12, color: '#F3922D', lineHeight: 1.5 }}>
              {block.callout}
            </div>
            {block.showApprove && (
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button style={{ background: '#F3922D', color: '#1B1814', fontWeight: 700, fontSize: 12, padding: '6px 14px', borderRadius: 6, border: 'none', cursor: 'pointer' }}>
                  Approve &amp; Dispatch ✓
                </button>
                <button style={{ background: 'transparent', color: 'rgba(255,255,255,0.45)', fontSize: 12, border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                  Dismiss
                </button>
                <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(255,255,255,0.35)', fontFamily: theme.fonts.mono }}>Impact: +$31/round</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <button
          onClick={() => { window.location.hash = '#/contact'; }}
          style={{
            background: 'transparent',
            border: '1px solid #F3922D',
            color: '#F3922D',
            padding: '13px 32px',
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 15,
            cursor: 'pointer',
            fontFamily: 'inherit',
            transition: 'background 150ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,146,45,0.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
        >
          Book a Walkthrough →
        </button>
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: 18,
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.70)',
          margin: '32px 0 8px',
          lineHeight: 1.5,
        }}
      >
        "The system proposes. You decide. The outcome is tracked.{' '}
        <strong style={{ color: '#FFFFFF', fontStyle: 'normal' }}>Your F&amp;B Director gets kitchen alerts. Your Head Pro gets pace-of-play alerts. Everyone gets what they need — nothing they don't. Full audit trail, 15-minute undo on every action.</strong>"
      </p>
      <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>
        * $31/round: Q1 2024 Pinetree CC founding-partner deployment (300 members, ForeUP + Jonas + Toast). Math: post-round dining conversion drops 19 percentage points when rounds exceed 4h15m — from 41% to 22% — across an average group F&B check of $163. ($163 × 19% = $30.97/round, rounded to $31).
      </p>
    </SectionShell>
  );
}