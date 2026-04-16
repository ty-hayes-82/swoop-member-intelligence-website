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
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 18, lineHeight: 1.55, margin: '0 0 8px', maxWidth: 520 }}>
              <strong style={{ color: '#FFFFFF' }}>See It. Fix It. Prove It.</strong> Book a live walkthrough with your own operating scenarios: tee sheet leakage, at-risk members, F&B staffing pressure, <strong style={{ color: '#FFFFFF' }}>service consistency gaps</strong>, and revenue pipeline blind spots.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.55, margin: '0 0 16px', maxWidth: 520 }}>
              We connect securely before the call so you see a live GM cockpit surface the exact moment a member's habits change — using your real numbers. Jonas, Northstar, ForeTees: all unlocked, none replaced. See how replacing 4 separate system logins with one daily briefing lets you take action in under 60 seconds.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, margin: '0 0 32px' }}>
              Go from 6 hours pulling reports to a 20-minute board meeting — generate a 4-tab, dollar-quantified ROI report in one click.
            </p>

            {/* Testimonial */}
            <div style={{ marginBottom: 32, borderLeft: '2px solid #F3922D', paddingLeft: 20 }}>
              <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontStyle: 'italic', lineHeight: 1.65, margin: 0, color: '#FFFFFF' }}>
                &ldquo;Swoop flagged a key member we were about to lose. One dinner comp and a follow-up call saved a 4-member family group worth $32K in annual dues <span style={{ opacity: 0.65, fontSize: 16 }}>(retaining a 14-year family — 4-year household LTV)</span>.&rdquo;
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.60)', marginTop: 10 }}>
                — Robert Torres, GM &middot; Meridian Hills CC &middot; 340-member equity private club
              </p>
              <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.10)', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: '#F3922D', fontSize: 16, flexShrink: 0, marginTop: 1 }}>🛡</span>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.5 }}>
                  <strong style={{ color: '#FFFFFF' }}>Human in the loop:</strong> Swoop recommends. You decide. 100% manual approval on all member-facing actions.
                </p>
              </div>
            </div>

            {/* What happens next */}
            <div style={{ padding: '20px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
              <strong style={{ fontSize: 14, color: '#FFFFFF', display: 'block', marginBottom: 6 }}>How the 30-minute pilot works:</strong>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: '0 0 10px', lineHeight: 1.5 }}>We don't replace your systems; we sit on top of them to connect the dots.</p>
              <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
                <li>We confirm your slot within 1 business day</li>
                <li>
                  Keep your Jonas or Northstar. We safely sit on top to find the revenue they miss.{' '}
                  <strong style={{ color: '#F3922D' }}>Zero IT required.</strong>
                  <span style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.72)', marginTop: 4 }}>
                    Safe pilot — zero write-access to financial records. Reversible and secure.
                  </span>
                </li>
                <li style={{ color: '#FFFFFF', fontWeight: 600 }}>You stay in control. Every system action is logged, reversible, and requires your explicit GM approval before anything touches a member.</li>
                <li>30-min call — you leave with a prioritized Revenue Leakage report and a board-ready ROI preview.</li>
                <li>Go Live — your Morning Briefing arrives daily at 6 AM. Review 3 curated member and service alerts, approve actions with two taps. Average GM time: 4 minutes.</li>
                <li style={{ color: '#F3922D', fontWeight: 600 }}><strong style={{ color: '#FFFFFF' }}>Daily Cockpit Execution</strong> — Keep insights flowing in one unified morning view. <strong style={{ color: '#FFFFFF' }}>100% GM Control:</strong> Swoop recommends actions, but only executes with your 2-tap approval. Snooze alerts, edit scripts, or dismiss flags instantly.</li>
              </ol>
            </div>

            <p style={{ marginTop: 16, color: 'rgba(255,255,255,0.75)', fontSize: 13 }}>
              Prefer email?{' '}
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
                  <p style={{ textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 8 }}>
                    Keep your POS. Keep your tee sheet. Swoop simply adds intelligence on top.
                  </p>
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
