import { theme } from '@/config/theme';
import DemoCtaSection from '@/landing/components/DemoCtaSection';
import MobileStickyCta from '@/landing/components/MobileStickyCta';
import ErrorBoundary from '@/landing/components/ErrorBoundary';
import '@/landing/landing.css';

const leaveWithItems = [
  'A ranked list of your top 5 member retention gaps — replacing 4 disconnected system views with one prioritized action list.',
  'A Board-ready Revenue Leakage Report — revealing cross-domain blind spots, including the exact $31/round dining revenue lost to slow pace-of-play.',
  'Immediate service signals — e.g., "Add a patio server Saturday based on tee-sheet pace bottlenecks" to maintain daily service consistency.',
  'Benchmarks vs. 7 founding-partner clubs (anonymized, your club not identified).',
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
          Because your POS doesn't talk to your tee sheet, you're missing the complete picture of every member. Swoop connects them — and your CRM — to catch the quiet signs of disengagement before anyone resigns. <strong style={{ color: theme.neutrals.ink }}>Turn 4 daily system logins into a single 60-second morning briefing.</strong> In 30 minutes, you see exactly who's at risk — using your club's real data, not a generic demo.
        </p>
        <p
          style={{
            fontSize: 'clamp(17px, 1.6vw, 20px)',
            lineHeight: 1.6,
            color: theme.colors.textSecondary,
            margin: '0 0 28px',
          }}
        >
          In 30 minutes, Swoop generates a unified Member Health Score for your club. Once live, your morning starts with a single briefing — not four system logins. Every recommended action requires a 2-tap approval from your phone; nothing ever reaches a member without your explicit sign-off. You leave with a prioritized action list, not a pitch deck. <strong style={{ color: theme.neutrals.ink }}>See it. Fix it. Prove it.</strong>
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
              key={item}
              style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 16, color: theme.neutrals.ink, lineHeight: 1.5 }}
            >
              <span style={{ color: '#B8600E', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        {/* Anchor CTA — scroll to form */}
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
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
            <p><strong>Write-back scope (walkthrough/trial):</strong> None — strictly read-only during pilot. Full production deployments strictly limit write-back to CRM tasks and GM-approved messages (approved with two taps from your phone). We never modify financial records.</p>
            <p><strong>Security:</strong> AES-256 at rest, TLS 1.3 in transit, RBAC, 90-day audit log. SOC 2 Type II (Audit Active — Targeting Q4 2026).</p>
            <p><strong>AI Privacy:</strong> Zero-retention architecture. Your club's member data is never used to improve insights for other clubs or shared with any third party. Every action is logged and reversible.</p>
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
