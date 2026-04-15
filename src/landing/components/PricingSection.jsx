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
        <p style={{ fontSize: 12, color: theme.colors.textMuted, margin: '20px 0 -4px', textAlign: 'center', fontStyle: 'italic' }}>
          {tier.badgeFootnote}
        </p>
      )}
      <h3 style={{ fontSize: 19, fontWeight: 700, margin: 0, color: theme.neutrals.ink }}>{tier.name}</h3>
      <p style={{ fontSize: 42, margin: '4px 0 0', fontWeight: 800, fontFamily: "'JetBrains Mono', monospace", color: theme.neutrals.ink, letterSpacing: '-0.02em', lineHeight: 1 }}>
        {tier.price}
      </p>
      <p style={{ color: theme.colors.textSecondary, fontSize: 16, lineHeight: 1.6, margin: '0 0 8px' }}>
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
              fontSize: 16,
              color: theme.neutrals.ink,
              lineHeight: 1.6,
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
              border: '1px solid #d1d5db', background: 'transparent',
              color: '#555', fontWeight: 600, fontSize: 15,
              cursor: 'pointer', fontFamily: theme.fonts.sans,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1B1814'; e.currentTarget.style.color = '#1B1814'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.color = '#555'; }}
          >
            Book a Walkthrough →
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
            Book a Walkthrough →
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
            border: '2px solid #1B1814', background: 'transparent',
            color: '#1B1814', fontWeight: 700, fontSize: 15,
            cursor: 'pointer', fontFamily: theme.fonts.sans,
            transition: 'all 150ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1B1814'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1B1814'; }}
        >
          Book a Walkthrough →
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
      eyebrow="PLANS"
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

      {/* Inline reassurance — objection handling at the decision point */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', marginTop: 28 }}>
        {[
          '✓ Integrates with Jonas, ForeUP, Toast & 35+ more — no rip and replace',
          '✓ No long-term contracts — cancel at the end of any month',
          '✓ Zero implementation fees — our team maps your APIs at no extra cost',
          '✓ Live in under 2 weeks — no IT team required',
        ].map((item) => (
          <span key={item} style={{ fontSize: 13, color: '#555', display: 'flex', alignItems: 'center', gap: 0 }}>
            {item}
          </span>
        ))}
      </div>

      {/* Reassurance strip */}
      <div style={{ textAlign: 'center', marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(17,17,17,0.07)' }}>
        <p style={{ fontSize: 14, color: theme.colors.textMuted, margin: 0 }}>
          Questions? Email{' '}
          <a href="mailto:gm-support@swoopgolf.com" style={{ color: '#B8600E', textDecoration: 'none', fontWeight: 600 }}>
            gm-support@swoopgolf.com
          </a>
          {' '}· We respond within 4 business hours.
        </p>
      </div>
    </SectionShell>
  );
}