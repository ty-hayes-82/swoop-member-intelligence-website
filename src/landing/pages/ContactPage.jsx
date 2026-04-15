import { theme } from '@/config/theme';
import DemoCtaSection from '@/landing/components/DemoCtaSection';
import MobileStickyCta from '@/landing/components/MobileStickyCta';
import ErrorBoundary from '@/landing/components/ErrorBoundary';
import '@/landing/landing.css';

const leaveWithItems = [
  'A ranked list of your top 5 member retention and revenue leakage gaps',
  'Benchmarks vs. the 7 founding-partner clubs (anonymized, your club not identified)',
  'A Board-ready Revenue Leakage Report — exact operational blind spots, including F&B staffing vs. pace of play',
  'Your data under mutual NDA. We never share club data across engagements. Deleted within 30 days if you don\u2019t move forward.',
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
            margin: '0 0 28px',
          }}
        >
          The first time you realize a 10-year member is unhappy shouldn't be the day their resignation
          letter lands on your desk. In 30 minutes, we use Layer 3 cross-domain synthesis to connect
          your tee sheet and POS — and show you exactly who's quietly disengaging before anyone resigns.
          You leave with a prioritized action list, not a pitch deck.
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
            <p><strong>Systems we read from:</strong> Jonas, Club Essentials, Northstar, ClubReady, Lightspeed, foreUP, Club Prophet, Stripe.</p>
            <p><strong>Write-back scope:</strong> Only tee-sheet notes, CRM tasks, and GM-approved messages. We never modify financial records.</p>
            <p><strong>Security:</strong> AES-256 at rest, TLS 1.3 in transit, RBAC, 90-day audit log. SOC 2 Type II (Audit Active).</p>
            <p><strong>AI:</strong> Anthropic Claude API with zero-retention agreement. Member PII never trains any model. Every action is logged and reversible.</p>
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
      {/* Nav hidden on /contact to maintain 1:1 attention ratio on this BOFU page */}
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
