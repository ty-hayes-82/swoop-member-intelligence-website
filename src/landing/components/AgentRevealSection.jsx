import { theme } from '@/config/theme';

const queueItems = [
  {
    type: 'member-risk',
    badge: 'MEMBER RISK',
    badgeColor: '#ef4444',
    badgeBg: 'rgba(239,68,68,0.12)',
    title: 'Henderson family — Health Score dropped from 84 to 41',
    subtitle: 'Email engagement down 44% · Golf rounds: 1 this month (was 4) · Dining: 22 days silent · Household value: $8,400/yr',
    recommendation: 'Recommended: personal call from Membership Director + guest pass for their daughter',
    dollarImpact: '$42K lifetime value at risk',
    impactColor: '#ef4444',
    sources: ['CRM', 'Tee Sheet', 'POS'],
    showApprove: true,
  },
  {
    type: 'staffing',
    badge: 'STAFFING GAP',
    badgeColor: '#F3922D',
    badgeBg: 'rgba(243,146,45,0.12)',
    title: 'Saturday lunch: 142 covers forecast — staffed for 6, need 8',
    subtitle: 'Forecast: 78°F · tournament finish 11:45 AM · historical Saturday avg: 95 covers. Today\'s demand 49% above baseline.',
    recommendation: 'Recommended: notify F&B Manager to approve 2 extra shifts before 3 PM today',
    dollarImpact: '+$2,100 projected cover revenue protected',
    impactColor: '#22c55e',
    sources: ['Tee Sheet', 'Weather', 'POS'],
    showApprove: true,
  },
  {
    type: 'pace',
    badge: 'PACE ALERT',
    badgeColor: '#F3922D',
    badgeBg: 'rgba(243,146,45,0.12)',
    title: 'Hole 12 pace at 4:38 avg — dining conversion dropping to 22%',
    subtitle: 'Baseline: 41% of members dine post-round. Today\'s projection: 22% for 2:00+ tee times. $31 at risk per slow round.',
    recommendation: 'Recommended: alert starter to enforce pace protocol after 1:30 PM',
    dollarImpact: '$31/round dining revenue at risk',
    impactColor: '#F3922D',
    sources: ['ForeTees', 'Jonas F&B'],
    showApprove: true,
  },
];

const trustPillars = [
  {
    icon: '🛡',
    title: 'Human-in-the-loop. Always.',
    body: 'Swoop suggests. You decide. Auto-execution is off by default. Nothing reaches a member without your explicit approval.',
  },
  {
    icon: '↩',
    title: 'Every action is reversible.',
    body: 'Every approval is logged, timestamped, and undoable. Full audit trail for your board and your peace of mind.',
  },
  {
    icon: '🎯',
    title: 'Signal, not noise.',
    body: 'Actions are ranked by dollar impact. Your 6 AM briefing shows only what needs attention today — 3 items, not 30 dashboards.',
  },
];

export default function AgentRevealSection() {
  return (
    <section
      style={{ background: '#141210', padding: 'clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px)' }}
    >
      <div className="landing-container" style={{ maxWidth: 960 }}>
        {/* Eyebrow + Headline */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', textAlign: 'center', margin: '0 0 12px' }}>
          YOUR MORNING QUEUE
        </p>
        <h2
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 700,
            color: '#FFFFFF',
            textAlign: 'center',
            margin: '0 0 12px',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          The briefing is ready before you are.
        </h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', fontSize: 17, maxWidth: 560, margin: '0 auto 8px', lineHeight: 1.55 }}>
          Every morning, Swoop surfaces 3 prioritized actions ranked by dollar impact. Two taps: approve or skip. Nothing happens without your say-so.
        </p>
        <p style={{ textAlign: 'center', margin: '0 0 40px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#F3922D', fontWeight: 600 }}>
            <span>⏱</span> Most mornings: a 90-second scan and a few taps.
          </span>
        </p>

        {/* Queue Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 48 }}>
          {queueItems.map((item) => (
            <div
              key={item.type}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: 14,
                padding: '20px 24px',
              }}
            >
              {/* Source tags */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 4, background: item.badgeBg, color: item.badgeColor, letterSpacing: '0.08em' }}>
                  {item.badge}
                </span>
                {item.sources.map(src => (
                  <span key={src} style={{ fontSize: 10, padding: '2px 7px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 4, color: 'rgba(255,255,255,0.45)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {src}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,1fr) auto',
                  gap: 20,
                  alignItems: 'flex-start',
                }}
                className="landing-queue-item"
              >
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.60)', margin: '0 0 8px', lineHeight: 1.5 }}>
                    {item.subtitle}
                  </p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.5 }}>
                    <span style={{ color: '#F3922D', marginRight: 4 }}>›</span>
                    {item.recommendation}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700, color: item.impactColor, whiteSpace: 'nowrap' }}>
                    {item.dollarImpact}
                  </span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: 'rgba(34,197,94,0.12)', color: '#4ade80',
                      border: '1px solid rgba(34,197,94,0.25)', borderRadius: 6,
                      padding: '6px 14px', fontSize: 12, fontWeight: 700, cursor: 'default',
                      fontFamily: 'inherit',
                    }}>
                      ✓ Approve
                    </button>
                    <button style={{
                      display: 'flex', alignItems: 'center', gap: 5,
                      background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.40)',
                      border: '1px solid rgba(255,255,255,0.10)', borderRadius: 6,
                      padding: '6px 14px', fontSize: 12, fontWeight: 600, cursor: 'default',
                      fontFamily: 'inherit',
                    }}>
                      Skip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 24,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 36,
            marginBottom: 36,
          }}
        >
          {trustPillars.map((pillar) => (
            <div key={pillar.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{ fontSize: 20, flexShrink: 0, marginTop: 1 }}>{pillar.icon}</span>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF', margin: '0 0 4px' }}>
                  {pillar.title}
                </p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.55 }}>
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center' }}>
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
            See Your Club's Morning Queue →
          </button>
          <p style={{ marginTop: 12, color: 'rgba(255,255,255,0.35)', fontSize: 11, fontStyle: 'italic' }}>
            * $31/round: Q1 2024 Pinetree CC founding-partner deployment (300 members, ForeTees + Jonas + Toast). Math: post-round dining conversion drops 19 percentage points when rounds exceed 4h15m — from 41% to 22% — across an avg group F&B check of $163. ($163 × 19% = $30.97/round, rounded to $31).
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .landing-queue-item {
            grid-template-columns: 1fr !important;
          }
          .landing-queue-item > div:last-child {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
