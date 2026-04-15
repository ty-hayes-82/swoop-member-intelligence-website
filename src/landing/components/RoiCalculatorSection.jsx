import { useState, useDeferredValue, useRef } from 'react';
import { theme } from '@/config/theme';
import { SectionShell, Stat } from '@/landing/ui';
import { RoiIllustration } from '@/landing/assets/Illustrations';

const roiMobileStyles = `
  .roi-slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: rgba(17,17,17,0.15);
    outline: none;
    cursor: pointer;
    touch-action: pan-y;
    accent-color: #F3922D;
  }
  .roi-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2.5px solid #F3922D;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(243,146,45,0.35);
    transition: transform 120ms ease, box-shadow 120ms ease;
  }
  .roi-slider::-webkit-slider-thumb:hover {
    transform: scale(1.15);
    box-shadow: 0 3px 12px rgba(243,146,45,0.5);
  }
  .roi-slider::-moz-range-thumb {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2.5px solid #F3922D;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(243,146,45,0.35);
  }
  @media (max-width: 768px) {
    .roi-slider { height: 44px; }
    .roi-panels { flex-direction: column-reverse; }
    .roi-output-card {
      position: sticky;
      bottom: 16px;
      z-index: 10;
    }
  }
  @media (min-width: 769px) {
    .roi-output-card {
      position: sticky;
      top: 80px;
    }
  }
`;

function Slider({ label, value, onChange, min, max, step = 1, displayValue }) {
  return (
    <div>
      <label
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          fontSize: 14,
          fontWeight: 600,
          color: theme.colors.textSecondary,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: 10,
        }}
      >
        <span>{label}</span>
        <span style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent, fontSize: 16, fontWeight: 700, textTransform: 'none', letterSpacing: 0 }}>
          {displayValue}
        </span>
      </label>
      <input
        type="range"
        className="roi-slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
}

export default function RoiCalculatorSection() {
  const [members, setMembers] = useState(300);
  const [dues, setDues] = useState(8000);
  const [churn, setChurn] = useState(5);
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  const [boardEmail, setBoardEmail] = useState('');
  const boardEmailRef = useRef(null);

  // Defer expensive recalculations so slider dragging stays responsive (fixes INP)
  const deferredMembers = useDeferredValue(members);
  const deferredDues = useDeferredValue(dues);
  const deferredChurn = useDeferredValue(churn);
  const isStale = members !== deferredMembers || dues !== deferredDues || churn !== deferredChurn;

  const atRisk = Math.round(deferredMembers * (deferredChurn / 100));
  const annualLoss = atRisk * dues;
  const swoopSaves = Math.round(atRisk * 0.65);
  const recovered = swoopSaves * deferredDues;
  const swoopProCost = 5988;
  const netGain = recovered - swoopProCost;
  const roiMultiple = recovered > 0 ? Math.round(recovered / swoopProCost) : 0;

  const fmt = (n) => `$${n.toLocaleString()}`;

  return (
    <SectionShell
      id="roi-calculator"
      band="cream"
      eyebrow="ROI Calculator"
      title="Find out exactly how much dues revenue is walking out your door."
      subtitle="Adjust the sliders to see your club's exposure — and what Swoop recovers."
    >
      <style>{roiMobileStyles}</style>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.15fr)',
          gap: 40,
          alignItems: 'start',
        }}
        className="landing-roi-grid roi-panels"
      >
        <div
          style={{
            background: '#FAF7F2',
            borderRadius: 20,
            padding: 'clamp(24px, 4vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            border: '1px solid rgba(17,17,17,0.08)',
          }}
        >
          <div style={{ marginBottom: 8 }}>
            <RoiIllustration />
          </div>
          <Slider label="Total Members" value={members} onChange={setMembers} min={100} max={800} displayValue={members} />
          <Slider label="Avg Annual Dues" value={dues} onChange={setDues} min={2000} max={25000} step={500} displayValue={fmt(dues)} />
          <Slider label="Annual Turnover Rate" value={churn} onChange={setChurn} min={1} max={15} displayValue={`${churn}%`} />
        </div>

        <div
          className="roi-output-card"
          style={{
            background: theme.neutrals.ink,
            color: '#FFFFFF',
            borderRadius: 20,
            padding: 'clamp(28px, 4vw, 40px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            opacity: isStale ? 0.75 : 1,
            transition: 'opacity 0.15s ease',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', margin: '0 0 6px' }}>
              Exposure
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              <div>
                <p style={{ fontSize: 36, fontWeight: 800, fontFamily: theme.fonts.mono, color: theme.colors.accent, margin: '0 0 2px', lineHeight: 1 }}>
                  {atRisk}
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Members at risk</p>
              </div>
              <div>
                <p style={{ fontSize: 36, fontWeight: 800, fontFamily: theme.fonts.mono, color: theme.colors.accent, margin: '0 0 2px', lineHeight: 1 }}>
                  {fmt(annualLoss)}
                </p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: 0 }}>Annual revenue at risk</p>
              </div>
            </div>
          </div>

          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            }}
          />

          <div>
            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: theme.colors.accent, margin: '0 0 6px' }}>
              With Swoop
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: '0 0 12px', lineHeight: 1.6 }}>
              65% early-intervention retention rate — from Pinetree CC founding-partner data (10 of 15 at-risk members retained in 90-day window).
            </p>
            <p style={{ fontSize: 52, fontWeight: 800, fontFamily: theme.fonts.mono, color: theme.colors.accent, margin: 0, lineHeight: 1, letterSpacing: '-0.02em' }}>
              {fmt(recovered)}
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', margin: '6px 0 0' }}>
              Revenue recovered ({swoopSaves} members saved)
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', marginTop: 8, fontStyle: 'italic' }}>
              Calculated from your inputs: avg dues × estimated lapse rate × 12. Not a projection — math you can verify.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(243,146,45,0.1)',
              border: '1px solid rgba(243,146,45,0.3)',
              borderRadius: 14,
              padding: 20,
              marginTop: 'auto',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>Signals + Actions annual cost</span>
              <span style={{ fontFamily: theme.fonts.mono, fontSize: 15, color: 'rgba(255,255,255,0.85)' }}>{fmt(swoopProCost)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>Net revenue gain</span>
              <span style={{ fontFamily: theme.fonts.mono, fontSize: 24, color: theme.colors.accent, fontWeight: 800 }}>{fmt(netGain)}</span>
            </div>
            <p style={{ fontSize: 14, color: theme.colors.accent, fontWeight: 700, margin: '8px 0 0' }}>
              {roiMultiple}× return on investment
            </p>
          </div>
        </div>
      </div>

      <p style={{ fontSize: 13, color: '#777', maxWidth: 480, margin: '16px auto 0', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.6 }}>
        How this is calculated: At-risk revenue × 65% early-intervention retention rate (Pinetree CC founding-partner data, Q4 2023) − Swoop annual cost = net dues recovered.
      </p>

      <div style={{ maxWidth: 560, margin: '20px auto 0', borderLeft: '3px solid #F3922D', paddingLeft: 20 }}>
        <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic', color: '#333', fontSize: 15, lineHeight: 1.65, margin: '0 0 8px' }}>
          "Swoop flagged the Smith family a month before they planned to quit. We comped them a dinner, had a chat, and saved $15k in annual dues. The Board was thrilled."
        </p>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#888', margin: 0 }}>— James Whitmore, GM · Pinetree Country Club · 300-member founding-partner club</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: 32 }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: theme.neutrals.ink, margin: '0 0 8px' }}>
          Ready to recover your at-risk dues?
        </p>
        <p style={{ fontSize: 14, color: theme.colors.textSecondary, margin: '0 0 20px' }}>
          Signals + Actions costs $5,988/year. Most clubs recover that in the first 60 days.
        </p>
        {/* Single dominant CTA */}
        <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }}
          style={{ display: 'inline-block', background: '#F3922D', color: '#0F0F0F', fontWeight: 700, fontSize: 17, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', boxShadow: '0 4px 16px rgba(243,146,45,0.35)' }}>
          Book a Walkthrough With Your Numbers →
        </a>
        {/* Subordinate text-link — not competing visually */}
        <p style={{ marginTop: 14, fontSize: 13, color: theme.colors.textMuted }}>
          Not ready to book?{' '}
          <button
            type="button"
            onClick={() => { setBoardModalOpen(true); setTimeout(() => boardEmailRef.current?.focus(), 50); }}
            style={{ background: 'none', border: 'none', padding: 0, color: '#B8600E', fontWeight: 600, fontSize: 13, cursor: 'pointer', textDecoration: 'underline', fontFamily: 'inherit' }}
          >
            Email this ROI report to your board →
          </button>
        </p>

        {/* Board report email capture modal */}
        {boardModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Email ROI report to your board"
            style={{
              position: 'fixed', inset: 0, zIndex: 500,
              background: 'rgba(17,17,17,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px',
            }}
            onClick={(e) => { if (e.target === e.currentTarget) setBoardModalOpen(false); }}
          >
            <div style={{
              background: '#FFFFFF', borderRadius: 16, padding: 'clamp(24px, 4vw, 40px)',
              maxWidth: 480, width: '100%',
              boxShadow: '0 24px 60px rgba(17,17,17,0.25)',
            }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 22, fontWeight: 700, margin: '0 0 8px', color: theme.neutrals.ink }}>
                Email this ROI report to your Board
              </h3>
              <p style={{ fontSize: 14, color: theme.colors.textSecondary, margin: '0 0 20px', lineHeight: 1.5 }}>
                Enter your email and we'll open your mail client pre-filled with the numbers above — ready to forward.
              </p>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: theme.colors.textSecondary, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                Your email
              </label>
              <input
                ref={boardEmailRef}
                type="email"
                value={boardEmail}
                onChange={(e) => setBoardEmail(e.target.value)}
                placeholder="gm@yourclub.com"
                style={{
                  width: '100%', padding: '11px 14px', borderRadius: 8, fontSize: 15,
                  border: '1.5px solid rgba(17,17,17,0.20)', fontFamily: 'inherit',
                  outline: 'none', boxSizing: 'border-box', marginBottom: 16,
                }}
              />
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  type="button"
                  onClick={() => {
                    const subject = encodeURIComponent(`Swoop ROI Report — ${members} members, ${churn}% turnover`);
                    const body = encodeURIComponent(
                      `Hi Board,\n\nI ran our club numbers through Swoop's ROI calculator:\n\n` +
                      `• Members: ${members}\n` +
                      `• Avg annual dues: $${dues.toLocaleString()}\n` +
                      `• Annual turnover rate: ${churn}%\n` +
                      `• Members at risk: ${Math.round(members * (churn / 100))}\n` +
                      `• Revenue at risk: $${(Math.round(members * (churn / 100)) * dues).toLocaleString()}\n` +
                      `• Projected recovery with Swoop: $${recovered.toLocaleString()} (${roiMultiple}× ROI)\n` +
                      `• Annual cost of Signals + Actions: $5,988\n\n` +
                      `I'd like to discuss adding this to our tech stack. More info at https://swoopgolf.com\n\n` +
                      `— ${boardEmail || 'Your GM'}`
                    );
                    window.location.href = `mailto:?subject=${subject}&body=${body}`;
                    setBoardModalOpen(false);
                    setBoardEmail('');
                  }}
                  style={{
                    flex: 1, padding: '12px 20px', borderRadius: 8,
                    background: theme.colors.accent, border: 'none',
                    color: '#1B1814', fontWeight: 700, fontSize: 14,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Open in Email Client →
                </button>
                <button
                  type="button"
                  onClick={() => setBoardModalOpen(false)}
                  style={{
                    padding: '12px 16px', borderRadius: 8,
                    background: 'transparent', border: '1.5px solid rgba(17,17,17,0.20)',
                    color: theme.colors.textSecondary, fontSize: 14,
                    cursor: 'pointer', fontFamily: 'inherit',
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionShell>
  );
}
