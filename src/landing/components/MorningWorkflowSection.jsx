import { theme } from '@/config/theme';

const steps = [
  {
    time: '7:15 AM',
    eyebrow: 'SEE IT',
    headline: 'Open Swoop. See today\'s Member Health Scores.',
    body: 'Your Today View shows 3 priority signals: 2 at-risk members on the tee sheet whose dining visits dropped 40% and email opens went cold, plus a Saturday lunch staffing gap based on weather, bookings, and historical covers. One screen replaces four logins.',
    note: 'Powered by Jonas + ForeTees + your POS + weather, connected by Swoop.',
    color: '#F3922D',
  },
  {
    time: '7:16 AM',
    eyebrow: 'FIX IT',
    headline: 'Approve the staffing recommendation. Two taps.',
    body: 'Every recommendation sits in your approval queue until you say "go." Swoop recommends adding a server for Saturday lunch. You approve from your phone. Nothing fires automatically — you stay in control of every action.',
    note: 'Full audit trail. Changed your mind? Reverse any action from history with one tap.',
    color: '#E07020',
  },
  {
    time: '7:17 AM',
    eyebrow: 'PROVE IT',
    headline: 'Done. Your board report is already writing itself.',
    body: 'Every save, every staffing win, every dollar recovered — tracked automatically in a 4-tab board report. What used to take 6 hours of manual prep is one click away. Walk into your next board meeting with proof.',
    note: null,
    color: '#C85010',
  },
];

export default function MorningWorkflowSection() {
  return (
    <section style={{ background: '#FFFFFF', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)', borderTop: '1px solid rgba(17,17,17,0.07)', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>
      <div className="landing-container" style={{ maxWidth: 800 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', marginBottom: 8 }}>
          How It Works
        </p>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 10px', lineHeight: 1.2 }}>
          Your morning changes on Day 1.
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 16, maxWidth: '52ch', marginInline: 'auto', marginBottom: 40, lineHeight: 1.6 }}>
          Swoop replaces 4 morning logins — your tee sheet, POS, CRM, and email — with one screen. Here's what Saturday looks like:
        </p>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 20, marginBottom: i < steps.length - 1 ? 0 : 0 }}>
              {/* Left: time + connector */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 800, color: '#FFFFFF', lineHeight: 1.2, textAlign: 'center' }}>{step.time.split(' ')[0]}<br />{step.time.split(' ')[1]}</span>
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 1, flex: 1, minHeight: 32, background: 'rgba(243,146,45,0.25)', margin: '4px 0' }} />
                )}
              </div>

              {/* Right: content */}
              <div style={{ paddingBottom: i < steps.length - 1 ? 32 : 0, flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, color: step.color, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{step.eyebrow}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1B1814', margin: '0 0 8px', lineHeight: 1.25 }}>{step.headline}</h3>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                {step.note && (
                  <p style={{ fontSize: 13, color: '#9CA3AF', margin: '8px 0 0', fontStyle: 'italic' }}>{step.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Speed callout */}
        <div style={{ marginTop: 36, background: '#F7F5F2', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 12, padding: '18px 24px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: '#1B1814' }}>2 minutes replaces 45.</p>
          <p style={{ margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.55 }}>
            GMs in our founding cohort report replacing a 45-minute morning routine across 4 systems with a single 2-minute Swoop check. Every action you approve is tracked, auditable, and reversible.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px 20px', marginTop: 10 }}>
            {['Works on mobile', 'You approve every action', 'Every action is reversible'].map(t => (
              <span key={t} style={{ fontSize: 12, color: '#9CA3AF' }}>✓ {t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
