import { useState } from 'react';
import { Lock, ShieldCheck, FileSignature } from 'lucide-react';
import { theme } from '@/config/theme';
import { Button, Input } from '@/landing/ui';

const DEMO_ENDPOINT = import.meta.env.VITE_DEMO_ENDPOINT || 'https://swoopgolf.com/api/demo-request';
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || null;

export default function DemoCtaSection({ ctaLabel = 'Book a Walkthrough' }) {
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch(DEMO_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.error || 'Submission failed. Please try again.');
      }
      setStatus('success');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section
      id="demo-form"
      className="landing-band landing-band-dark landing-section"
      style={{
        background: '#141210',
      }}
    >
      <div className="landing-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: 'clamp(32px, 5vw, 72px)',
            alignItems: 'start',
          }}
          className="landing-demo-hero"
        >
          {/* Left column — value prop + social proof + next steps */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', margin: '0 0 12px' }}>
              SEE IT &rarr; FIX IT &rarr; PROVE IT
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 'clamp(34px, 4.5vw, 56px)',
                fontWeight: 700,
                color: '#FFFFFF',
                margin: '0 0 20px',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textWrap: 'balance',
              }}
            >
              See what Swoop would find at your club — in 30 minutes.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, lineHeight: 1.55, margin: '0 0 16px', maxWidth: 520 }}>
              Your POS only sees dining. Your tee sheet only sees golf. Swoop connects them to find the $9,580/month leakage hiding in the gaps. Go from 6 hours pulling reports to a 20-minute board meeting — generate a 4-tab, dollar-quantified ROI report in one click.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, margin: '0 0 32px' }}>
              We connect to your tee sheet before the call so you see exactly what Swoop surfaces for a club like yours.
            </p>

            {/* Testimonial */}
            <div style={{ marginBottom: 32, borderLeft: '2px solid #F3922D', paddingLeft: 20 }}>
              <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontStyle: 'italic', lineHeight: 1.65, margin: 0, color: '#FFFFFF' }}>
                &ldquo;Swoop flagged a high-value corporate account we were about to lose. One dinner comp and a follow-up call saved $32K in lifetime dues.&rdquo;
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.60)', marginTop: 10 }}>
                — Robert Torres, GM &middot; Meridian Hills CC &middot; 340-member equity private club
              </p>
            </div>

            {/* What happens next */}
            <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
              <strong style={{ fontSize: 14, color: '#FFFFFF', display: 'block', marginBottom: 10 }}>What happens next:</strong>
              <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>We confirm your slot within 1 business day</li>
                <li>
                  Keep your Jonas or Northstar. We safely sit on top to find the revenue they miss.{' '}
                  <strong style={{ color: '#F3922D' }}>Zero IT required.</strong>
                  <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.72)', marginTop: 4 }}>
                    Safe pilot — zero write-access to financial records. Reversible and secure.
                  </span>
                </li>
                <li>30-min call — you keep the prioritized action list regardless</li>
              </ol>
            </div>

            <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
              No credit card · 30 minutes · Your club's own data
            </p>
            <p style={{ marginTop: 8, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
              Or email us at{' '}
              <a href="mailto:founders@swoopgolf.com" style={{ color: theme.colors.accent, textDecoration: 'underline' }}>
                founders@swoopgolf.com
              </a>
            </p>
          </div>

          {/* Right column — founder badge + form */}
          <div>
            {/* Founder authority badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <div style={{ width: 48, height: 48, background: '#1B1814', border: '2px solid rgba(243,146,45,0.4)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F3922D', fontWeight: 800, fontSize: 14, flexShrink: 0, fontFamily: "'JetBrains Mono', monospace" }}>
                TH
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 14, color: '#FFFFFF', fontWeight: 600 }}>Built by Tyler Hayes</p>
                <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>Former GM, 300-member desert club</p>
              </div>
            </div>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 20,
              padding: 'clamp(24px, 3vw, 36px)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <p style={{ color: theme.colors.accent, fontWeight: 700, fontSize: 18, marginBottom: 12 }}>
                  Request received — you're all set!
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 24 }}>
                  We'll confirm your slot within 1 business day.
                </p>
                {CALENDLY_URL ? (
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: theme.colors.accent,
                      color: '#1B1814',
                      fontWeight: 700,
                      fontSize: 15,
                      padding: '13px 28px',
                      borderRadius: 8,
                      textDecoration: 'none',
                    }}
                  >
                    Pick a Time on Our Calendar →
                  </a>
                ) : (
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 13 }}>
                    Check your email — Tyler will send you a calendar link shortly.
                  </p>
                )}
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="landing-demo-form-row">
                    <Input tone="dark" name="name" label="Full Name" type="text" autoComplete="name" required style={{ fontSize: 16, minHeight: 48 }} />
                    <Input tone="dark" name="club" label="Club" type="text" autoComplete="organization" placeholder="e.g., Pine Valley Golf Club" required style={{ fontSize: 16, minHeight: 48 }} />
                  </div>
                  <Input tone="dark" name="email" type="email" inputMode="email" label="Work Email" autoComplete="email" required style={{ fontSize: 16, minHeight: 48 }} />
                  <Button
                    type="submit"
                    size="lg"
                    block
                    disabled={status === 'submitting'}
                    className="bg-amber-600 hover:bg-amber-700 text-[#1B1814] border-none transition-colors"
                    style={{ marginTop: 6, opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'wait' : 'pointer' }}
                  >
                    {status === 'submitting' ? 'Submitting…' : ctaLabel}
                  </Button>
                </form>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px', marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>
                    <Lock size={14} color="#F3922D" strokeWidth={2} /> AES-256 Encrypted
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>
                    <ShieldCheck size={14} color="#F3922D" strokeWidth={2} /> SOC 2 Active
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>
                    <FileSignature size={14} color="#F3922D" strokeWidth={2} /> Mutual NDA
                  </span>
                </div>

                {status === 'error' && feedback && (
                  <p role="status" style={{ marginTop: 14, fontSize: 14, color: '#ef4444' }}>
                    {feedback}
                  </p>
                )}
              </>
            )}
          </div>
          </div>{/* end right column outer wrapper */}
        </div>
      </div>
    </section>
  );
}
