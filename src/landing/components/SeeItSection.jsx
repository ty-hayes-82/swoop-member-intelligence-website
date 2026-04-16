import { theme } from '@/config/theme';

const decaySteps = [
  { week: '8 wks ago', signal: 'Email open rate drops from 68% to 12%', source: 'Email / CRM', color: '#F3922D' },
  { week: '6 wks ago', signal: 'Rounds fall from 3/mo to 1/mo', source: 'Tee Sheet', color: '#E07020' },
  { week: '4 wks ago', signal: 'Dining visits stop entirely', source: 'POS', color: '#C85010' },
  { week: '2 wks ago', signal: 'Skipped two registered events', source: 'Events / CRM', color: '#A83000' },
];

const sources = [
  { name: 'Jonas / Club Prophet', type: 'Billing & POS', signal: 'Spend, payments, F&B' },
  { name: 'ForeTees / Chelsea', type: 'Tee Sheet', signal: 'Rounds, pace, no-shows' },
  { name: 'Northstar / ClubEssential', type: 'CRM & Events', signal: 'Engagement, events, RSVPs' },
  { name: 'Mailchimp / Email', type: 'Email & Comms', signal: 'Opens, clicks, engagement' },
];

export default function SeeItSection() {
  return (
    <section style={{ background: '#1B1814', padding: 'clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="landing-container" style={{ maxWidth: 1020 }}>
        {/* Header */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', textAlign: 'center', margin: '0 0 10px' }}>
          SEE IT · THE TODAY VIEW
        </p>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(26px, 3.5vw, 44px)', fontWeight: 800, color: '#FFFFFF', textAlign: 'center', margin: '0 0 14px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Four systems. One Member Health Score.<br />Every member, ranked by risk.
        </h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.65)', fontSize: 16, maxWidth: '58ch', marginInline: 'auto', marginBottom: 48, lineHeight: 1.6 }}>
          Jonas sees transactions. ForeTees sees tee times. Your email tool sees opens. No single vendor sees the connection — and that connection is where resignation hides.
        </p>

        {/* Architecture — 4 sources converging */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 8, marginBottom: 12 }}>
          {sources.map((src) => (
            <div key={src.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 10, padding: '14px 16px', textAlign: 'center' }}>
              <p style={{ margin: '0 0 4px', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{src.name}</p>
              <p style={{ margin: '0 0 4px', fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>{src.type}</p>
              <p style={{ margin: 0, fontSize: 10, color: 'rgba(255,255,255,0.30)', fontFamily: "'JetBrains Mono', monospace" }}>{src.signal}</p>
            </div>
          ))}
        </div>

        {/* Converge label */}
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <span style={{ display: 'inline-block', background: '#F3922D', color: '#1B1814', fontWeight: 800, fontSize: 11, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Swoop Cross-Domain Layer
          </span>
        </div>

        {/* Member Health Score output */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 16, padding: 'clamp(20px, 3vw, 32px)', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: '#F3922D', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Member Health Score — Today View</span>
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.30)', fontStyle: 'italic' }}>Illustrative · Based on a 400-member club</span>
          </div>

          {/* At-risk member card */}
          <div style={{ background: 'rgba(243,146,45,0.08)', border: '1px solid rgba(243,146,45,0.25)', borderRadius: 12, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, gap: 12, flexWrap: 'wrap' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Sarah Chen · Gold Member · 11 yrs</span>
                  <span style={{ background: 'rgba(200,40,40,0.25)', color: '#FF8080', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>Health: 34 · At Risk</span>
                </div>
                <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.50)' }}>Annual dues: $14,200 · Est. LTV: $32,000</p>
              </div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, fontWeight: 800, color: '#F3922D', flexShrink: 0 }}>$32K</span>
            </div>

            {/* Quiet resignation decay */}
            <p style={{ fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.10em', margin: '0 0 12px' }}>
              Quiet Resignation — Cross-Domain Decay Sequence
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: 8 }}>
              {decaySteps.map((step, i) => (
                <div key={i} style={{ background: 'rgba(0,0,0,0.3)', borderRadius: 8, padding: '10px 12px', borderLeft: `3px solid ${step.color}` }}>
                  <p style={{ margin: '0 0 2px', fontSize: 10, color: 'rgba(255,255,255,0.35)' }}>{step.week}</p>
                  <p style={{ margin: '0 0 4px', fontSize: 12, color: step.color, fontWeight: 600, lineHeight: 1.3 }}>{step.signal}</p>
                  <p style={{ margin: 0, fontSize: 10, color: 'rgba(255,255,255,0.30)', fontFamily: "'JetBrains Mono', monospace" }}>[{step.source}]</p>
                </div>
              ))}
            </div>

            <p style={{ margin: '14px 0 0', fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55, fontStyle: 'italic' }}>
              No single system saw this. Jonas saw normal billing. ForeTees saw fewer rounds. Only Swoop connected all four signals — before the resignation letter.
            </p>
          </div>
        </div>

        {/* Why no vendor can replicate */}
        <div style={{ background: 'rgba(243,146,45,0.08)', border: '1px solid rgba(243,146,45,0.20)', borderRadius: 12, padding: '18px 24px' }}>
          <p style={{ margin: '0 0 6px', fontSize: 13, fontWeight: 700, color: '#F3922D' }}>Why your existing vendors can't do this</p>
          <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.70)', lineHeight: 1.6 }}>
            Jonas doesn't have tee sheet data. ForeTees doesn't have POS data. Neither has email engagement. Swoop reads all four — without replacing any of them — and that cross-domain view is the only way to catch the decay pattern before it becomes a resignation letter.
          </p>
        </div>

        {/* Attribution */}
        <p style={{ textAlign: 'center', fontSize: 11, color: 'rgba(255,255,255,0.25)', marginTop: 20, lineHeight: 1.5, fontStyle: 'italic' }}>
          Member Health Score: weighted composite of visit frequency (tee sheet), spend velocity (POS), communication engagement (email), and event participation (CRM) over trailing 90 days. Illustrative example — your club's scores generated from your own system data during onboarding.
        </p>
      </div>
    </section>
  );
}
