import { theme } from '@/config/theme';
import { integrationCategories } from '@/landing/data';
import { SectionShell, Card, IconBadge } from '@/landing/ui';
import { IntegrationsIllustration } from '@/landing/assets/Illustrations';

export default function IntegrationsSection() {
  return (
    <SectionShell
      band="dark"
      eyebrow="Integrations"
      title="Every system your club runs. Connected in 10 days."
      subtitle="Why not just use your POS vendor's built-in reporting? Because it only sees 33% of the member journey. Swoop sits safely above your foundational systems — Jonas, ForeTees, Northstar — to reveal cross-domain correlations they can't. System-agnostic: even matches 'James Smith' in ForeTees to 'J. Smith' in Jonas. No IT lift on your end."
    >
      <style>{`
        @media (max-width: 639px) { .integrations-ring { display: none; } .integrations-list { display: block !important; } }
        @media (min-width: 640px) { .integrations-list { display: none; } }
      `}</style>
      {/* Vendor counter-positioning — Layer 3 moat explanation */}
      <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 14, padding: '20px 24px', marginBottom: 36 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.colors.accent, marginBottom: 10 }}>
          WHY YOUR CURRENT VENDORS CAN'T DO THIS
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 14 }}>
          {[
            { vendor: 'Jonas / Club Prophet', sees: 'Tee sheet & dues', blind: 'Dining, email, events' },
            { vendor: 'Lightspeed / Toast', sees: 'POS & dining', blind: 'Rounds, pace, email' },
            { vendor: 'Mailchimp / CC', sees: 'Email opens', blind: 'Golf, dining, complaints' },
          ].map(v => (
            <div key={v.vendor} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '10px 12px' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF', marginBottom: 4 }}>{v.vendor}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>
                <span style={{ color: 'rgba(255,255,255,0.75)' }}>Sees:</span> {v.sees}<br />
                <span style={{ color: 'rgba(255,255,255,0.45)' }}>Blind to:</span> {v.blind}
              </div>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>
          <strong style={{ color: '#FFFFFF' }}>Swoop reads. Never replaces.</strong> Your Jonas, ForeTees, and Northstar installations stay fully intact. Swoop sits above them as a cross-domain intelligence layer — finding patterns no single vendor can see because each only holds one piece of the picture.
        </p>
      </div>

      <div style={{ width: '100%', margin: '0 auto 48px' }}>
        <div className="integrations-ring">
          <IntegrationsIllustration />
        </div>
        <div className="integrations-list" style={{ display: 'none' }}>
          {[
            { category: 'Tee sheet', items: 'Jonas, ClubEssentials, Northstar, ClubReady, foreUP, Club Prophet' },
            { category: 'POS', items: 'Lightspeed Golf, Square, Toast, Clover' },
            { category: 'CRM', items: 'HubSpot, Salesforce, Mailchimp' },
          ].map(g => (
            <div key={g.category} style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: '#888', marginBottom: 4 }}>{g.category.toUpperCase()}</div>
              <div style={{ fontSize: 15, color: '#FFFFFF' }}>{g.items}</div>
            </div>
          ))}
          <p style={{ fontSize: 12, color: '#888', marginTop: 16 }}>Preferred integration partner: Jonas Club Software.</p>
        </div>
      </div>

      <div
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 20,
          padding: 'clamp(24px, 4vw, 36px)',
          marginBottom: 32,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 700,
            margin: '0 0 24px',
          }}
        >
          28 Integrations Across 8 Categories
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {integrationCategories.map((category) => (
            <div
              key={category.label}
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 12,
                padding: 16,
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <p style={{ fontWeight: 700, margin: '0 0 4px', color: '#FFFFFF', fontSize: 15 }}>{category.label}</p>
              <p style={{ color: theme.colors.accent, fontFamily: theme.fonts.mono, fontSize: 13, margin: '0 0 6px' }}>
                {category.systems} connected systems
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                {category.vendors.map((v) => (
                  <span key={v} style={{ fontSize: 11, fontFamily: theme.fonts.mono, color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 4, padding: '2px 8px', whiteSpace: 'nowrap' }}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          border: `1px solid rgba(243,146,45,0.4)`,
          background: 'rgba(243,146,45,0.08)',
          borderRadius: 20,
          padding: 'clamp(24px, 4vw, 36px)',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: 32,
          alignItems: 'center',
        }}
        className="landing-integrations-timeline"
      >
        <div>
          <p
            style={{
              fontSize: 12,
              color: theme.colors.accent,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 700,
              margin: '0 0 12px',
            }}
          >
            Rollout Timeline
          </p>
          <p style={{ fontSize: 28, fontWeight: 700, color: '#FFFFFF', margin: '0 0 12px', lineHeight: 1.2 }}>
            Typical launch: <span style={{ fontFamily: theme.fonts.mono, color: theme.colors.accent }}>10 business days</span>.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.6, margin: 0 }}>
            Week 1: connector setup, data validation, and intelligence baselines. Week 2: workflows, AI agent playbooks, and GM readiness.
          </p>
        </div>
        <div
          style={{
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 14,
            padding: 22,
            border: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <p style={{ fontFamily: theme.fonts.mono, fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px', fontSize: 15 }}>
            No operational downtime.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, lineHeight: 1.55, margin: 0 }}>
            Keep current systems active while Swoop comes online in parallel.
          </p>
        </div>
      </div>

      <p style={{ fontSize: 14, color: theme.colors.textSecondary, textAlign: 'center', maxWidth: 560, margin: '24px auto 0', lineHeight: 1.6 }}>
        Swoop connects via secure, read-only API nightly syncs — requiring zero on-site agents. Your existing legacy systems keep running exactly as they do today.
      </p>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <a
          href="#/contact"
          onClick={() => { window.location.hash = '#/contact'; }}
          style={{
            display: 'inline-block', textDecoration: 'none', fontSize: 15,
            background: '#F3922D', color: '#1B1814', fontWeight: 700,
            padding: '13px 28px', borderRadius: 8,
          }}
        >
          Book a Walkthrough →
        </a>
      </div>

      <details style={{ marginTop: 32, border: '1px solid rgba(255,255,255,0.22)', borderRadius: 8, overflow: 'hidden' }}>
        <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: 15, color: '#FFFFFF', background: 'rgba(255,255,255,0.07)', padding: '14px 20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>For IT and Ops teams: Security &amp; Implementation Details</span>
          <span style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)' }}>▾</span>
        </summary>
        <div style={{ marginTop: 0, padding: '16px 20px', fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
          <p><strong style={{ color: '#FFFFFF' }}>Systems we connect to:</strong> Jonas, Club Essentials, Northstar, ClubReady, Lightspeed, foreUP, Club Prophet, Stripe, Toast, Square</p>
          <p><strong style={{ color: '#FFFFFF' }}>How data moves:</strong> Read via API or nightly SFTP. Write-back only for tee-sheet notes, CRM tasks, GM-approved messages.</p>
          <p><strong style={{ color: '#FFFFFF' }}>Security:</strong> AES-256 at rest, TLS 1.3, SSO, RBAC, 90-day audit log.</p>
          <p><strong style={{ color: '#FFFFFF' }}>AI transparency:</strong> Enterprise-grade AI with a strict zero-retention agreement. Your member data is never used to train outside systems. Every action is logged and reversible.</p>
        </div>
      </details>
    </SectionShell>
  );
}
