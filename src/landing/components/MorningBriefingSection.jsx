import { theme } from '@/config/theme';

const timelineSteps = [
  {
    time: '7:00',
    headline: 'Open your Today Briefing',
    body: 'Three priorities, not thirty dashboards. One screen, not four logins.',
    items: [
      { icon: '⚠', text: '2 at-risk members on today\'s tee sheet. Jim Harrison hasn\'t visited in 47 days — Member Health Score dropped from 82 to 61 this month.', strong: '2 at-risk members' },
      { icon: '👨‍🍳', text: 'Saturday lunch projected 22% above average. Weather + tee sheet density suggest adding one server to the patio at 11:30.', strong: 'Saturday lunch projected 22% above average.' },
      { icon: '⛳', text: 'Hole 12 pace alert hit 3× this week. Post-round dining conversion dropped from 41% to 22% on slow days — that\'s $31 per slow round in lost F&B revenue.', strong: 'Hole 12 pace alert' },
    ],
  },
  {
    time: '7:02',
    headline: 'Review recommended actions',
    body: 'Swoop recommends. You decide. Every action sits in your approval queue.',
    actions: [
      'Text Jim Harrison a welcome-back message',
      'Add 1 server to patio, Saturday 11:30–1:30',
      'Move Hole 12 marshal window to 10:00–12:00',
    ],
  },
  {
    time: '7:03',
    headline: 'Done. Full audit trail logged.',
    body: 'Two taps to approve, one to dismiss. Every action is logged with timestamp, rationale, and your approval — ready for your board report at month-end.',
  },
];

export default function MorningBriefingSection() {
  return (
    <section style={{ background: '#FFFFFF', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
      <div className="landing-container" style={{ maxWidth: 820 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', marginBottom: 8 }}>
          What Changes on Day 1
        </p>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 10px', lineHeight: 1.2 }}>
          Your Saturday morning, simplified.
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 15, maxWidth: '52ch', marginInline: 'auto', marginBottom: 40, lineHeight: 1.6 }}>
          Four logins become one screen. Thirty dashboards become three priorities. Here's what 7:00 AM looks like with Swoop.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {timelineSteps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 20 }}>
              {/* Time circle + connector */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#F3922D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, textAlign: 'center' }}>{step.time}<br />AM</span>
                </div>
                {i < timelineSteps.length - 1 && (
                  <div style={{ width: 1, flex: 1, minHeight: 24, background: 'rgba(243,146,45,0.25)', margin: '4px 0' }} />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < timelineSteps.length - 1 ? 28 : 0, flex: 1 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1B1814', margin: '12px 0 4px' }}>{step.headline}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', margin: '0 0 12px', lineHeight: 1.55 }}>{step.body}</p>

                {step.items && (
                  <div style={{ background: '#F7F5F2', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {step.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 14, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
                        <p style={{ margin: 0, fontSize: 13, color: '#4B5563', lineHeight: 1.55 }}>
                          <strong style={{ color: '#1B1814' }}>{item.strong}</strong>{' '}{item.text.replace(item.strong, '')}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {step.actions && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {step.actions.map((action, j) => (
                      <div key={j} style={{ background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.10)', borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                        <span style={{ fontSize: 13, color: '#1B1814' }}>{action}</span>
                        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                          <span style={{ background: '#F3922D', color: '#FFFFFF', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 6, cursor: 'default', whiteSpace: 'nowrap' }}>✓ Approve</span>
                          <span style={{ background: '#F3F4F6', color: '#6b7280', fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 6, cursor: 'default' }}>Skip</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {i === 2 && (
                  <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: '#F3922D', fontSize: 16 }}>🛡</span>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: '#1B1814' }}>
                      One rule we'll never break: Swoop recommends. You decide. Always.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Source badges */}
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(17,17,17,0.08)', textAlign: 'center' }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.10em', marginBottom: 12 }}>
            Pulling live from your existing systems
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
            {['Tee Sheet', 'POS / Dining', 'Email & CRM', 'Events & Billing'].map((source) => (
              <span key={source} style={{ fontSize: 12, color: '#6b7280', background: '#F7F5F2', border: '1px solid rgba(17,17,17,0.10)', borderRadius: 999, padding: '5px 14px', fontFamily: "'JetBrains Mono', monospace" }}>
                {source}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
