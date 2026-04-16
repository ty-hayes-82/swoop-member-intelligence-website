import { theme } from '@/config/theme';
import DemoCtaSection from '@/landing/components/DemoCtaSection';
import MobileStickyCta from '@/landing/components/MobileStickyCta';
import ErrorBoundary from '@/landing/components/ErrorBoundary';
import '@/landing/landing.css';

const leaveWithItems = [
  { label: 'A ranked list of your top 5 member retention and revenue leakage gaps', text: 'Computed across golf, dining, email, and event data — ranked by dollar impact. Your highest-risk members surfaced before your first meeting of the day.' },
  { label: 'Benchmarks vs. 7 founding-partner clubs (anonymized)', text: 'F&B utilization vs. rounds played, dining conversion rates, and pace-of-play impact — compared to clubs your size so you know exactly where you stand.' },
  { label: 'A Board-ready Revenue Leakage Report', text: 'Exact operational blind spots — like the $31 in lost dining revenue per slow round — calculated by cross-referencing your tee sheet against same-day POS data. Average founding-partner club: $9,580/month in recoverable F&B.' },
  { label: 'A preview of your new daily cockpit', text: 'See how you\'ll replace 4 separate system logins with a single 60-second morning briefing — Member Health Scores, F&B alerts, and staffing flags, all in one ranked view.' },
];

function ContactHeroPanel() {
  return (
    <section
      className="landing-section-sm"
      style={{ background: '#FAF7F2', borderBottom: '1px solid rgba(17,17,17,0.07)' }}
    >
      <div className="landing-container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 16px', color: theme.neutrals.ink, letterSpacing: '-0.02em' }}>
          Find the Members You're About to Lose.<br /><span style={{ color: '#B8600E' }}>Before They Resign.</span>
        </h1>
        <p
          style={{
            fontSize: 'clamp(17px, 1.6vw, 20px)',
            lineHeight: 1.6,
            color: theme.colors.textSecondary,
            margin: '0 0 20px',
          }}
        >
          The first time you realize a 10-year member is unhappy shouldn't be the day their resignation
          letter lands on your desk.
        </p>
        <p
          style={{
            fontSize: 'clamp(17px, 1.6vw, 20px)',
            lineHeight: 1.6,
            color: theme.colors.textSecondary,
            margin: '0 0 20px',
          }}
        >
          Swoop connects your tee sheet, POS, email, and event data — four systems that have never talked to each other — and shows you exactly who's quietly disengaging <strong>before</strong> anyone resigns. In 30 minutes, you'll see your own club's numbers — not a generic demo. You leave with a prioritized action list, not a pitch deck.
        </p>
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#B8600E',
            margin: '0 0 14px',
          }}
        >
          What you'll leave with
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {leaveWithItems.map((item) => (
            <li
              key={item.text}
              style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 16, color: theme.neutrals.ink, lineHeight: 1.5 }}
            >
              <span style={{ color: '#B8600E', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
              <span>{item.label && <strong style={{ color: '#B8600E' }}>{item.label}:</strong>} {item.text}</span>
            </li>
          ))}
        </ul>
        {/* Dollar stat callouts */}
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, maxWidth: 480 }}>
          {[
            { val: '$31', label: 'lost dining revenue per slow round', sup: '1' },
            { val: '$9,580/mo', label: 'avg. recoverable F&B leakage', sup: '2' },
            { val: '$47K+', label: 'avg. revenue identified per walkthrough', sup: '3' },
          ].map(s => (
            <div key={s.val} style={{ background: 'rgba(243,146,45,0.07)', border: '1px solid rgba(184,96,14,0.18)', borderRadius: 8, padding: '10px 8px', textAlign: 'center' }}>
              <p style={{ margin: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 17, fontWeight: 800, color: theme.neutrals.ink, lineHeight: 1.1 }}>{s.val}</p>
              <p style={{ margin: '4px 0 0', fontSize: 10, color: theme.colors.textMuted, lineHeight: 1.4 }}>{s.label}<sup style={{ color: '#B8600E' }}>{s.sup}</sup></p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10, color: theme.colors.textMuted, maxWidth: 480, lineHeight: 1.6, margin: '6px 0 0' }}>
          <sup>1</sup> Pace-of-play × dining conversion, 7 founding-partner clubs. Fast round: 41% conversion, slow round: 22%. Delta × $163 avg check = $31.{' '}
          <sup>2</sup> Mean F&B leakage from pace-of-play + staffing misalignment, n=7 clubs, Q4 2024–Q1 2025.{' '}
          <sup>3</sup> Combined member-attrition and F&B leakage identified. Range: $28K–$71K. Individual results vary.
        </p>

        {/* Anchor CTA — scroll to form */}
        <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#demo-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => {
                const firstInput = document.querySelector('#demo-form input[name="name"]');
                firstInput?.focus();
              }, 500);
            }}
            style={{
              display: 'inline-block', background: '#F3922D', color: '#0F0F0F',
              fontWeight: 700, fontSize: 16, padding: '14px 32px',
              borderRadius: 8, textDecoration: 'none',
            }}
          >
            Book My 30-Minute Walkthrough →
          </a>
          <span style={{ fontSize: 13, color: theme.colors.textMuted }}>Free · No credit card · No IT lift</span>
        </div>
      </div>
    </section>
  );
}

function TechDisclosurePanel() {
  return (
    <section className="landing-section-sm" style={{ background: '#FAF7F2', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
      <div className="landing-container" style={{ maxWidth: 640 }}>
        <details open style={{ border: '1px solid rgba(17,17,17,0.12)', borderRadius: 16, padding: '18px 24px', maxWidth: 640, marginInline: 'auto', background: '#fff' }}>
          <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: 15, letterSpacing: '-0.01em', color: theme.neutrals.ink, display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
            <span>Data handling &amp; security details</span>
            <span style={{ fontSize: 18, color: theme.colors.accent, fontWeight: 300, flexShrink: 0, marginLeft: 12 }}>+</span>
          </summary>
          <div style={{ marginTop: 16, fontSize: 14, lineHeight: 1.8 }}>
            <p><strong>Your data stays yours.</strong> Mutual NDA on every engagement. We are a data processor, not a controller.</p>
            <p><strong>Systems we read from:</strong> Jonas, Clubessential, Northstar, ClubReady, Lightspeed, foreUP, Club Prophet, Stripe. Because no single vendor owns all your data, Swoop reads across all of them to find the compound leakage that siloed systems miss.</p>
            <p><strong>Write-back scope (Post-Pilot):</strong> Your 30-minute pilot is strictly read-only — we access nothing and touch nothing. Full production deployments limit write-back to CRM tasks and messages requiring explicit 2-tap GM approval. We never modify financial records.</p>
            <p><strong>Security:</strong> AES-256 at rest, TLS 1.3 in transit, RBAC, 90-day audit log. SOC 2 Type II (Audit Active — Targeting Q4 2026).</p>
            <p><strong>AI Data Privacy:</strong> Enterprise-grade AI with a zero-retention agreement. Member PII never trains any model. 100% human-in-the-loop manual approval — Swoop never acts on its own. Every action is logged and reversible.</p>
            <p><strong>Cancellation:</strong> Data export within 5 business days. All club data deleted within 30 days on request.</p>
          </div>
        </details>
      </div>
    </section>
  );
}

function MinimalHeader() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(250,247,242,0.97)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(17,17,17,0.08)',
      padding: '16px clamp(20px, 4vw, 40px)',
      display: 'flex', alignItems: 'center',
    }}>
      <span
        style={{ fontWeight: 800, fontSize: 22, color: theme.neutrals.ink, letterSpacing: '-0.03em', cursor: 'pointer', marginRight: 'auto' }}
        onClick={() => { window.location.hash = '#/landing'; }}
      >
        swoop<span style={{ color: theme.colors.accent }}>.</span>
      </span>
      <a
        href="#/landing"
        onClick={() => { window.location.hash = '#/landing'; }}
        style={{ fontSize: 13, color: theme.colors.textMuted, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}
      >
        ← Back to Home
      </a>
    </header>
  );
}

function MinimalFooter() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(17,17,17,0.08)',
      padding: '20px clamp(20px, 4vw, 40px)',
      display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
      background: theme.neutrals.paper,
      fontSize: 12, color: '#6b7280',
    }}>
      <span>© {new Date().getFullYear()} Swoop Golf, Inc. · Scottsdale, AZ · <a href="mailto:gm-support@swoopgolf.com" style={{ color: '#6b7280', textDecoration: 'none' }}>gm-support@swoopgolf.com</a></span>
      <div style={{ display: 'flex', gap: 16 }}>
        <a href="#/privacy" style={{ color: '#6b7280', textDecoration: 'none' }}>Privacy Policy</a>
        <a href="#/terms" style={{ color: '#6b7280', textDecoration: 'none' }}>Terms of Service</a>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  return (
    <div className="landing-page" style={{ color: theme.neutrals.ink, fontFamily: theme.fonts.sans }}>
      <MinimalHeader />
      <main>
        <ErrorBoundary>
          <ContactHeroPanel />
          <DemoCtaSection ctaLabel="Request My 30-Min Walkthrough →" />
          <TechDisclosurePanel />
        </ErrorBoundary>
      </main>
      <MinimalFooter />
      <MobileStickyCta />
    </div>
  );
}
