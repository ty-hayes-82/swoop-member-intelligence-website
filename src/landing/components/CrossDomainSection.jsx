import { theme } from '@/config/theme';

const leakageCards = [
  {
    label: 'Pace of play → Dining',
    amount: '$5,760',
    period: '/mo',
    body: 'When rounds slow past 4:20, post-round dining conversion drops from 41% to 22%. That\'s $31 in lost F&B per slow round. Swoop spots the Hole 12 bottleneck and alerts your pro shop.',
    source: 'Tee Sheet + POS correlation · 7-club cohort',
  },
  {
    label: 'Understaffed Peak Shifts',
    amount: '$3,400',
    period: '/mo',
    body: 'Fridays with 15%+ more covers than servers cost $3,400/month in slower turns and abandoned tabs. Swoop correlates weather, tee-sheet demand, and historical covers to recommend staffing 48 hours ahead.',
    source: 'POS + Tee Sheet + weather correlation · 7-club cohort',
  },
  {
    label: 'Weather No-Shows',
    amount: '$420',
    period: '/mo',
    body: 'Over-prepped kitchens on rain days waste $420/month in spoilage and labor. Swoop adjusts prep guidance based on weather-adjusted booking patterns — not just the forecast, but how your members respond to weather.',
    source: 'POS + weather + booking correlation · 7-club cohort',
  },
];

const decaySteps = [
  { label: 'Email opens drop', detail: 'CRM signal', week: 'Week 1', atRisk: false },
  { label: 'Golf frequency falls', detail: 'Tee Sheet signal', week: 'Week 4', atRisk: false },
  { label: 'Dining visits stop', detail: 'POS signal', week: 'Week 8', atRisk: false },
  { label: 'Resignation letter', detail: 'Too late', week: 'Week 16', atRisk: true },
];

export default function CrossDomainSection() {
  return (
    <section style={{ background: '#F7F5F2', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)', borderTop: '1px solid rgba(17,17,17,0.07)', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
      <div className="landing-container" style={{ maxWidth: 920 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', marginBottom: 8 }}>
          Why Your Current Systems Can't See This
        </p>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 12px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Four systems. Four blind spots.<br />One layer that connects them.
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 16, maxWidth: '60ch', marginInline: 'auto', marginBottom: 40, lineHeight: 1.6 }}>
          Your tee sheet knows rounds. Your POS knows covers. Your CRM knows email opens. None of them talk to each other. Swoop sits on top of all four — Jonas, ForeTees, Northstar, Club Prophet, and 35+ more — to surface patterns no single system can see.
        </p>

        {/* $9,580 decomposition */}
        <div style={{ background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 32px)', marginBottom: 24 }}>
          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: '#1B1814', margin: '0 0 8px' }}>
            Where $9,580/month in F&B revenue disappears
          </h3>
          <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 24px', lineHeight: 1.55 }}>
            The average monthly leakage found across our 7-club founding cohort. No single system could see it — it lives in the gaps between systems.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 16, marginBottom: 20 }}>
            {leakageCards.map((card) => (
              <div key={card.label} style={{ background: 'rgba(243,146,45,0.06)', border: '1px solid rgba(184,96,14,0.15)', borderRadius: 12, padding: '18px 20px' }}>
                <p style={{ margin: '0 0 6px', fontSize: 11, fontWeight: 700, color: '#B8600E', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{card.label}</p>
                <p style={{ margin: '0 0 8px', fontFamily: "'JetBrains Mono', monospace", fontSize: 26, fontWeight: 800, color: '#1B1814', lineHeight: 1 }}>
                  {card.amount}<span style={{ fontSize: 14 }}>{card.period}</span>
                </p>
                <p style={{ margin: '0 0 10px', fontSize: 13, color: '#6b7280', lineHeight: 1.55 }}>{card.body}</p>
                <p style={{ margin: 0, fontSize: 10, color: '#9CA3AF', fontStyle: 'italic' }}>Source: {card.source}</p>
              </div>
            ))}
          </div>
          {/* Total bar */}
          <div style={{ background: '#1B1814', borderRadius: 10, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>Total monthly F&B leakage your POS can't see:</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 800, color: '#F3922D' }}>$9,580/mo</span>
          </div>
        </div>

        {/* Member decay sequence */}
        <div style={{ background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 16, padding: 'clamp(20px, 3vw, 32px)' }}>
          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: '#1B1814', margin: '0 0 8px' }}>
            How Swoop catches a $32K resignation 90 days early
          </h3>
          <p style={{ fontSize: 15, color: '#6b7280', margin: '0 0 24px', lineHeight: 1.55 }}>
            By the time a member tells you they're leaving, the decision was made months ago. Swoop's Member Health Score catches the first domino — not the last.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: 8, marginBottom: 16 }}>
            {decaySteps.map((step, i) => (
              <div key={i} style={{
                background: step.atRisk ? 'rgba(200,40,40,0.08)' : 'rgba(243,146,45,0.07)',
                border: `1px solid ${step.atRisk ? 'rgba(200,40,40,0.2)' : 'rgba(184,96,14,0.18)'}`,
                borderRadius: 10, padding: '12px 14px',
              }}>
                <p style={{ margin: '0 0 4px', fontSize: 10, fontWeight: 700, color: step.atRisk ? '#CC4444' : '#B8600E', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{step.week}</p>
                <p style={{ margin: '0 0 4px', fontSize: 13, fontWeight: 600, color: '#1B1814', lineHeight: 1.3 }}>{step.label}</p>
                <p style={{ margin: 0, fontSize: 11, color: '#9CA3AF' }}>{step.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(243,146,45,0.07)', border: '1px solid rgba(184,96,14,0.18)', borderRadius: 10, padding: '14px 18px' }}>
            <p style={{ margin: 0, fontSize: 14, color: '#1B1814', lineHeight: 1.6 }}>
              <strong style={{ color: '#B8600E' }}>Swoop alerts you at Week 1.</strong> Your tee sheet alone wouldn't flag this member until Week 4. Your POS wouldn't notice until Week 8. The resignation letter arrives at Week 16. That member is worth <strong>$32,000 a year in dues</strong> — and by the time you get the letter, they've already told three friends.
            </p>
            <p style={{ margin: '8px 0 0', fontSize: 11, color: '#9CA3AF', fontStyle: 'italic' }}>
              $32K = 7-year avg. tenure × avg. annual dues. Source: Swoop 7-club founding cohort, Q4 2024–Q1 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
