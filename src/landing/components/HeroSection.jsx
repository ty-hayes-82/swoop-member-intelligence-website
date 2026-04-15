import { useState } from 'react';
import { theme } from '@/config/theme';

const BRIEF_ITEMS = [
  { time: '06:14', label: 'Member Pulse', detail: 'James Whitfield · rounds ↓42% · complaint aging 4d · tee time 9:20 AM today', value: '$18K at risk' },
  { time: '06:14', label: 'New Member Alert', detail: 'Kevin Harrington · Day 47 · 0 events attended · 1 round total · pattern matches early churn', value: '90-day window' },
  { time: '06:14', label: 'Service Recovery', detail: 'Dining complaint aging 6d · 30-day window breached · callback drafted', value: '$11K protected' },
  { time: '06:14', label: 'Staffing Gap', detail: 'Saturday lunch: 95 covers forecast · 6 staff scheduled · add 2 FOH shifts', value: 'Service risk' },
];

function SampleBriefModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.70)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FAF7F2', borderRadius: 16, padding: '32px',
          maxWidth: 520, width: '100%', position: 'relative',
          boxShadow: '0 24px 64px rgba(0,0,0,0.30)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: '#6b7280', lineHeight: 1, padding: 4 }}
          aria-label="Close"
        >×</button>

        {!submitted ? (
          <>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.colors.accent, margin: '0 0 8px' }}>
              SAMPLE BRIEF · 06:14 AM · PINETREE CC
            </p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 800, color: '#1B1814', margin: '0 0 16px', lineHeight: 1.2 }}>
              This is what lands in your inbox before your first tee time.
            </h2>

            {/* Brief preview */}
            <div style={{ background: '#1B1814', borderRadius: 10, overflow: 'hidden', marginBottom: 20 }}>
              <div style={{ background: '#141210', padding: '8px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 700, color: '#B5956A', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  SWOOP BRIEF · 06:14 · DELIVERED
                </span>
              </div>
              {BRIEF_ITEMS.map((item) => (
                <div key={item.label} style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                  <div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{item.label}</span>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', margin: '2px 0 0', lineHeight: 1.4 }}>{item.detail}</p>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, color: '#F3922D', flexShrink: 0 }}>{item.value}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, color: '#6b7280', margin: '0 0 16px' }}>
              Enter your email and we'll send you the full 2-page sample brief — the exact format we deliver to club GMs every morning.
            </p>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '11px 14px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.15)', fontSize: 15, fontFamily: theme.fonts.sans, background: '#fff' }}
              />
              <input
                type="email"
                placeholder="your@club.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '11px 14px', borderRadius: 8, border: '1px solid rgba(0,0,0,0.15)', fontSize: 15, fontFamily: theme.fonts.sans, background: '#fff' }}
              />
              <button
                type="submit"
                style={{
                  marginTop: 4, padding: '13px 20px', borderRadius: 8, border: 'none',
                  background: theme.colors.accent, color: '#1B1814', fontWeight: 700, fontSize: 15,
                  cursor: 'pointer', fontFamily: theme.fonts.sans,
                }}
              >
                Send Me the Sample Brief →
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <p style={{ fontSize: 32, marginBottom: 12 }}>✓</p>
            <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 800, color: '#1B1814', margin: '0 0 10px' }}>
              Brief on its way.
            </h3>
            <p style={{ fontSize: 16, color: '#6b7280', margin: '0 0 20px', lineHeight: 1.55 }}>
              Check your inbox — we'll send the full sample brief within a few minutes. If you'd like to see Swoop running on <em>your</em> data, book a 30-minute walkthrough.
            </p>
            <button
              onClick={() => { window.location.hash = '#/contact'; onClose(); }}
              style={{ padding: '13px 24px', borderRadius: 8, border: 'none', background: theme.colors.accent, color: '#1B1814', fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: theme.fonts.sans }}
            >
              Book a Walkthrough →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


export default function HeroSection({ onDemoClick }) {
  const [briefModalOpen, setBriefModalOpen] = useState(false);

  const goToDemoForm = onDemoClick ?? (() => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  return (
    <>
    <section
      style={{
        background: theme.colors.heroGreen || '#1B1814',
        paddingTop: 'clamp(72px, 9vw, 120px)',
        paddingBottom: 'clamp(72px, 9vw, 120px)',
      }}
    >
      <div className="landing-container">
        {/* Eyebrow */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: theme.colors.brass || '#B5956A',
            margin: '0 0 20px',
            textAlign: 'center',
          }}
        >
          The AI Chief of Staff for Golf &amp; Country Clubs
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: theme.fonts.serif,
            fontSize: 'clamp(36px, 5vw, 60px)',
            fontWeight: 700,
            color: '#FFFFFF',
            maxWidth: 860,
            margin: '0 auto 20px',
            lineHeight: 1.1,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          }}
        >
          Your tee sheet, POS, and CRM don't talk to each other. <br />
          <em style={{ color: theme.colors.accent, fontStyle: 'italic' }}>Swoop does — and briefs you every morning at 6 AM.</em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 17,
            lineHeight: 1.5,
            maxWidth: 540,
            margin: '0 auto 16px',
            textAlign: 'center',
          }}
        >
          Most tools show you what happened. Swoop tells you what to do next.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 32, marginBottom: 16 }}>
          <button
            onClick={goToDemoForm}
            style={{
              background: theme.colors.accent,
              color: '#1B1814',
              border: 'none',
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 16,
              cursor: 'pointer',
              fontFamily: theme.fonts.sans,
              minHeight: 48,
            }}
          >
            Book a Walkthrough
          </button>
          <button
            onClick={() => setBriefModalOpen(true)}
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              border: '1px solid rgba(255,255,255,0.30)',
              padding: '14px 32px',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              cursor: 'pointer',
              fontFamily: theme.fonts.sans,
              minHeight: 48,
            }}
          >
            See a sample brief
          </button>
        </div>

        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)', marginTop: 8, textAlign: 'center', marginBottom: 8 }}>
          No credit card · No IT lift · Live in 2 weeks · Zero member data sold or shared.
        </p>
        {/* Social proof quote */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div style={{ borderLeft: '3px solid #F3922D', paddingLeft: 16, maxWidth: 480 }}>
            <p style={{ fontFamily: theme.fonts.serif, fontStyle: 'italic', fontSize: 16, color: '#FFFFFF', margin: '0 0 6px' }}>
              "Recovered $74K in dues in our first 90 days."
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', margin: 0 }}>
              — Founding-partner GM · 450-member private club · 90-day window
            </p>
          </div>
        </div>

        {/* Trust bullets */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {['4 systems, 1 screen, zero Saturday morning tab-switching', 'Members flagged before they churn', 'Live in under 2 weeks'].map((item) => (
            <span
              key={item}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.78)', fontWeight: 500 }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(243,146,45,0.15)', border: '1px solid rgba(243,146,45,0.3)', color: '#F3922D', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>

    {briefModalOpen && <SampleBriefModal onClose={() => setBriefModalOpen(false)} />}
    </>
  );
}
