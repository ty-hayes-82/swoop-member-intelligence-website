import { theme } from '@/config/theme';
import { pricingTiers } from '@/landing/data';
import { SectionShell, Card, Button, Icon } from '@/landing/ui';

const pricingMobileStyles = `
  @media (max-width: 768px) {
    .pricing-grid { grid-template-columns: 1fr !important; }
    .pricing-card-featured { order: -1; transform: none !important; }
  }
`;

function PricingCard({ tier, onCtaClick }) {
  const isPopular = !!tier.badge;
  const handleCta = onCtaClick ?? (() =>
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));

  return (
    <Card
      featured={isPopular}
      interactive={!isPopular}
      className={isPopular ? 'pricing-card-featured' : undefined}
      style={{
        padding: isPopular ? 36 : 28,
        position: 'relative',
        ...(isPopular && {
          transform: 'translateY(-8px)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
          border: '2px solid #F3922D',
          zIndex: 10,
        }),
      }}
    >
      {isPopular && (
        <span
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '6px 16px',
            borderRadius: 999,
            background: theme.colors.accent,
            color: '#1B1814',
            fontSize: 11,
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            boxShadow: '0 6px 16px rgba(243,146,45,0.4)',
          }}
        >
          {tier.badge}
        </span>
      )}
      {isPopular && tier.badgeFootnote && (
        <p style={{ fontSize: 11, color: theme.colors.textMuted, margin: '20px 0 -4px', textAlign: 'center', fontStyle: 'italic' }}>
          {tier.badgeFootnote}
        </p>
      )}
      <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, color: theme.neutrals.ink }}>{tier.name}</h3>
      <p style={{ fontSize: 42, margin: '4px 0 0', fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: theme.neutrals.ink, letterSpacing: '-0.02em', lineHeight: 1 }}>
        {tier.price}
      </p>
      <p style={{ color: theme.colors.textSecondary, fontSize: 15, lineHeight: 1.55, margin: '0 0 8px' }}>
        {tier.description}
        {tier.price === '$499/mo' && (
          <> <strong>Stop sorting spreadsheets. Start saving dues.</strong></>
        )}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'grid', gap: 10 }}>
        {tier.features.map((feature) => (
          <li
            key={feature}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 10,
              fontSize: 14,
              color: theme.neutrals.ink,
              lineHeight: 1.5,
            }}
          >
            <Icon name="Check" size={18} color={theme.colors.accent} strokeWidth={3} style={{ flexShrink: 0, marginTop: 2 }} />
            {feature}
          </li>
        ))}
      </ul>
      {tier.technical && (
        <div style={{ marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: 12, color: '#666' }}>
          <strong style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Technical</strong>
          <p style={{ margin: '6px 0 0' }}>{tier.technical}</p>
        </div>
      )}

      {tier.price === '$0/mo' && (
        <>
          <p style={{ fontSize: 13, color: '#6b7280', fontWeight: 500, textAlign: 'center', margin: '0 0 4px' }}>
            Free forever. No credit card required.
          </p>
          <button
            onClick={handleCta}
            style={{
              width: '100%', marginTop: 8, padding: '13px 20px', borderRadius: 8,
              border: '2px solid #1B1814', background: 'transparent',
              color: '#1B1814', fontWeight: 700, fontSize: 15,
              cursor: 'pointer', fontFamily: theme.fonts.sans,
            }}
          >
            Book a Setup Call →
          </button>
          <p style={{ fontSize: 12, color: '#6b7280', textAlign: 'center', margin: '8px 0 0' }}>
            Instant access — connects to your systems in minutes.
          </p>
        </>
      )}
      {tier.price === '$499/mo' && (
        <div style={{ background: 'rgba(243,146,45,0.07)', border: '1px solid rgba(243,146,45,0.20)', borderRadius: 8, padding: '12px 14px', marginBottom: 16, fontSize: 12, color: '#555', fontStyle: 'italic', lineHeight: 1.6 }}>
          "Alert: The Smith family hasn't visited in 21 days. Suggested action: Call James Smith to offer a complimentary tee time. Confidence: 91%."
        </div>
      )}
      {tier.price === '$499/mo' && (
        <>
          <button
            onClick={handleCta}
            style={{
              width: '100%', marginTop: 24, padding: '13px 20px', borderRadius: 8,
              border: 'none', background: theme.colors.accent,
              color: '#1B1814', fontWeight: 700, fontSize: 15,
              cursor: 'pointer', fontFamily: theme.fonts.sans,
              boxShadow: '0 4px 14px rgba(243,146,45,0.35)',
            }}
          >
            Book a 30-Min Walkthrough →
          </button>
          <p style={{ fontSize: 12, textAlign: 'center', color: theme.colors.textMuted, marginTop: 10, fontWeight: 500 }}>
            Your systems connect in minutes. Your first brief arrives in 10 days.
          </p>
        </>
      )}
      {tier.price === '$1,499/mo' && (
        <button
          onClick={handleCta}
          style={{
            width: '100%', marginTop: 24, padding: '13px 20px', borderRadius: 8,
            border: '1px solid #d1d5db', background: 'transparent',
            color: '#1B1814', fontWeight: 700, fontSize: 15,
            cursor: 'pointer', fontFamily: theme.fonts.sans,
            transition: 'border-color 150ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1B1814'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; }}
        >
          Book a Premium Walkthrough →
        </button>
      )}
    </Card>
  );
}

export default function PricingSection({ onCtaClick }) {
  return (
    <SectionShell
      id="pricing"
      band="paper"
      eyebrow="THE TERMS"
      title="Start at zero. Upgrade when the math shows up."
      subtitle="No long-term contract. Cancel at the end of any month."
    >
      <style>{pricingMobileStyles}</style>

      {/* Trust bar — IT objection handled before buyer sees pricing */}
      <div style={{ maxWidth: 600, margin: '0 auto 32px', background: 'rgba(243,146,45,0.08)', border: '1px solid rgba(243,146,45,0.25)', borderRadius: 10, padding: '14px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontWeight: 700, color: '#1B1814', fontSize: 15 }}>
          Live in 14 days · Zero IT required · Cancel any time
        </p>
      </div>

      <div
        className="pricing-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: 28,
          alignItems: 'stretch',
          paddingTop: 8,
        }}
      >
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} onCtaClick={onCtaClick} />
        ))}
      </div>

      {/* Zero Implementation Fees callout */}
      <div style={{ maxWidth: 640, margin: '40px auto 0', textAlign: 'center', padding: '20px 24px', background: 'rgba(17,17,17,0.03)', borderRadius: 10, border: '1px solid rgba(17,17,17,0.08)' }}>
        <p style={{ margin: 0, fontSize: 15, color: theme.neutrals.ink, lineHeight: 1.6 }}>
          <strong>Zero Implementation Fees.</strong> Swoop's onboarding team maps your read-only APIs (yes, even legacy Jonas servers) at no extra cost. No hidden IT invoices.
        </p>
      </div>

      {/* Reassurance strip */}
      <div style={{ textAlign: 'center', marginTop: 40, paddingTop: 32, borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        <p style={{ fontSize: 14, color: theme.colors.textMuted, margin: 0 }}>
          Most clubs are live in under 2 weeks · No IT team required · Month-to-month, cancel any time
        </p>
      </div>
    </SectionShell>
  );
}