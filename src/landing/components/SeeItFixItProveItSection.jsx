import { theme } from '@/config/theme';
import { SectionShell, Card } from '@/landing/ui';

const agentRows = [
  { label: 'Member Pulse',         detail: 'Callback queued · Mark Henderson',      value: '$9.4K',  positive: true },
  { label: 'Service Recovery',     detail: 'Mid-comp drafted · Golf Room',           value: '$11K',   positive: true },
  { label: 'Demand Optimizer',     detail: 'Full-fare slots routed to 5 members',    value: '-$1.5K', positive: false },
  { label: 'Labor Optimizer',      detail: '2 FOH shifts added · Grill lunch',       value: '$3.2K',  positive: true },
  { label: 'Engagement Advisor',   detail: '18 member outreach sequences',           value: '$8.1K',  positive: true },
  { label: 'Revenue Analyst',      detail: 'Waitlist + pace-of-play leakage',        value: '$12K',   positive: true },
];

function MorningBriefingPanel() {
  return (
    <div
      style={{
        background: '#1B1814',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 24px 56px rgba(0,0,0,0.40), 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      <div
        style={{
          background: '#141210',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '10px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.colors.brass || '#B5956A' }}>
          BRIEF · 06:14 · DELIVERED
        </span>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em' }}>tonight's brief</span>
      </div>
      <div style={{ padding: '20px 20px 12px' }}>
        <div style={{ fontFamily: theme.fonts.mono, fontSize: 42, fontWeight: 800, color: '#FFFFFF', lineHeight: 1, letterSpacing: '-0.02em' }}>
          $42.2K
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 4 }}>
          protected across 6 agents · delivered 06:14 · <em style={{ color: 'rgba(255,255,255,0.35)' }}>illustrative</em>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '8px 0' }}>
        {agentRows.map((row) => (
          <div key={row.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 20px', gap: 8 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{row.label}</span>
              <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.62)', marginLeft: 8 }}>{row.detail}</span>
            </div>
            <span style={{ fontSize: 12, fontFamily: theme.fonts.mono, fontWeight: 700, color: row.positive ? theme.colors.brass || '#B5956A' : 'rgba(255,255,255,0.65)', flexShrink: 0 }}>
              {row.value}
            </span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.30)' }}>sent to gm@pinetree.com — ready before the first tee time</span>
        <div style={{ width: 24, height: 24, borderRadius: '50%', background: theme.colors.brass || '#B5956A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 900, color: '#1B1814' }}>
          S
        </div>
      </div>
    </div>
  );
}

function ActionCard() {
  return (
    <div style={{ background: '#1B1814', borderRadius: 16, padding: '20px 24px', fontFamily: theme.fonts.mono }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <span style={{ background: 'rgba(243,146,45,0.18)', color: '#F3922D', border: '1px solid rgba(243,146,45,0.35)', fontSize: 10, fontWeight: 800, padding: '3px 8px', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          ✓ APPROVED · 06:31
        </span>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>Mark Henderson · 14-yr family</span>
      </div>
      <div style={{ display: 'flex', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
        {['rounds ↓42%', 'complaint aging 4d', 'spend ↓31%'].map(s => (
          <span key={s} style={{ background: 'rgba(243,146,45,0.15)', color: theme.colors.accent, fontSize: 12, padding: '3px 10px', borderRadius: 6 }}>{s}</span>
        ))}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontFamily: theme.fonts.sans, fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 14px', borderLeft: `3px solid ${theme.colors.accent}`, paddingLeft: 14 }}>
        "Mark — it's been a rough month. I'd like to personally comp two guest passes for your son's group this Sunday. — GM"
      </p>
      <p style={{ color: 'rgba(255,255,255,0.60)', fontSize: 12, margin: 0 }}>
        ✓ GM approved · $8,400 dues protected · 1 tap · 0 spreadsheets
      </p>
      <p style={{ color: 'rgba(255,255,255,0.30)', fontSize: 10, margin: '6px 0 0', fontStyle: 'italic' }}>
        Illustrative example based on founding-partner club data
      </p>
    </div>
  );
}

function ProveStats() {
  const leakRows = [
    ['Pace of play → lost post-round dining', '$5,760'],
    ['Understaffed Fridays', '$3,400'],
    ['Weather no-shows, no outreach', '$420'],
  ];
  return (
    <div style={{ background: '#1a1208', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(243,146,45,0.2)' }}>
      <div style={{ background: 'rgba(243,146,45,0.12)', borderBottom: '1px solid rgba(243,146,45,0.2)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F3922D' }} />
          <span style={{ fontFamily: theme.fonts.mono, fontSize: 11, color: '#F3922D', letterSpacing: '0.1em' }}>BOARD REPORT · Q1 · GENERATED 07:02 AM</span>
        </div>
        <span style={{ fontFamily: theme.fonts.mono, fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Pinetree CC · 300 members</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: '1px solid rgba(243,146,45,0.1)' }}>
        {[
          { val: '$67K', sub: 'dues protected', sub2: '9 of 14 saves closed', highlight: true },
          { val: '$9.6K', sub: 'F&B leakage', sub2: 'identified per month' },
          { val: '$32K', sub: 'recovered', sub2: 'single intervention' },
        ].map(({ val, sub, sub2, highlight }, i) => (
          <div key={val} style={{ padding: '20px 16px', borderRight: i < 2 ? '1px solid rgba(243,146,45,0.1)' : 'none' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: highlight ? '#F3922D' : 'rgba(255,255,255,0.9)', lineHeight: 1, fontFamily: theme.fonts.mono }}>{val}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, lineHeight: 1.3 }}>{sub}<br />{sub2}</div>
            <div style={{ marginTop: 8, fontSize: 10, color: 'rgba(243,146,45,0.6)', fontFamily: theme.fonts.mono }}>✓ attributed</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(243,146,45,0.1)' }}>
        <div style={{ fontSize: 10, fontFamily: theme.fonts.mono, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em', marginBottom: 10 }}>F&amp;B LEAKAGE BREAKDOWN · $9,580/mo identified</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {leakRows.map(([label, val]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{label}</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#F3922D', fontFamily: theme.fonts.mono }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px 20px' }}>
        <div style={{ borderLeft: '3px solid #F3922D', paddingLeft: 14 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.5 }}>
            &ldquo;Swoop flagged a 9-year member. CRM said active. POS said 18 days silent. No one had noticed. She renewed in November.&rdquo;
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>GM, 450-member private club</div>
        </div>
      </div>
    </div>
  );
}

const blocks = [
  {
    eyebrow: 'SEE IT',
    headline: 'Every signal. One screen. Before the first tee time.',
    copy: 'Swoop reads your tee sheet, POS, and CRM overnight. By 6 AM, at-risk members are flagged with context — so you act before they churn, not after.',
    memberDisclaimer: true,
    visual: <MorningBriefingPanel />,
  },
  {
    eyebrow: 'FIX IT',
    headline: 'The right action. The right person. Right now.',
    copy: 'Callback script, comp offer, staffing shift — drafted. You approve. AI never contacts members directly. Full history logged with 1-click undo if you change your mind.',
    visual: <ActionCard />,
  },
  {
    eyebrow: 'PROVE IT',
    headline: 'Take a dollar number to the board. Not a feeling.',
    copy: 'Every save tracked. Every dollar attributed. One click generates a board-ready report — pre-structured into Member Saves, Operational Saves, and What We Learned. ROI uses your club\'s actual annual dues — no inflated metrics.',
    visual: <ProveStats />,
  },
];

export default function SeeItFixItProveItSection() {
  return (
    <div style={{ background: theme.neutrals.paper }}>
      {blocks.map((block, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <div
            key={block.eyebrow}
            style={{
              borderBottom: idx < blocks.length - 1 ? '1px solid rgba(17,17,17,0.06)' : 'none',
              padding: 'clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px)',
              maxWidth: 1200,
              margin: '0 auto',
            }}
          >
            <div
              className="landing-split"
              style={{
                gap: 'clamp(40px, 6vw, 80px)',
                alignItems: 'center',
                direction: isEven ? 'ltr' : 'rtl',
              }}
            >
              {/* Copy */}
              <div style={{ direction: 'ltr' }}>
                <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: theme.colors.accent, marginBottom: 12 }}>
                  {block.eyebrow}
                </span>
                <h2
                  style={{
                    fontFamily: theme.fonts.serif,
                    fontSize: 'clamp(26px, 2.8vw, 38px)',
                    fontWeight: 800,
                    color: theme.neutrals.ink,
                    margin: '0 0 16px',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                  }}
                >
                  {block.headline}
                </h2>
                <p style={{ color: theme.colors.textSecondary, fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                  {block.copy}
                </p>
                {block.memberDisclaimer && (
                  <p style={{ fontSize: 11, color: '#888', fontStyle: 'italic', marginTop: 8 }}>
                    Composite example based on real Swoop deployments. Member name changed.
                  </p>
                )}
              </div>
              {/* Visual */}
              <div style={{ direction: 'ltr' }}>
                {block.visual}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
