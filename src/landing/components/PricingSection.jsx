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
        height: '100%',
        boxSizing: 'border-box',
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
      {tier.price === '$0/mo' && (
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280', margin: '0 0 4px' }}>Phase 1: See It</p>
      )}
      {tier.price === '$499/mo' && (
        <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', margin: '0 0 4px' }}>Phase 2: Fix It &amp; Prove It</p>
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
              border: '1px solid rgba(243,146,45,0.4)', background: 'rgba(243,146,45,0.08)',
              color: '#92400e', fontWeight: 700, fontSize: 15,
              cursor: 'pointer', fontFamily: theme.fonts.sans,
              transition: 'all 150ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,146,45,0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(243,146,45,0.08)'; }}
          >
            Get Your Free Member Health Report →
          </button>
          <p style={{ fontSize: 12, color: '#6b7280', textAlign: 'center', margin: '8px 0 0' }}>
            Keep Jonas. Keep your tee sheet. We connect on top — no IT required.
          </p>
        </>
      )}
      {tier.price === '$499/mo' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          <div style={{ background: 'rgba(243,146,45,0.07)', border: '1px solid rgba(243,146,45,0.20)', borderRadius: 8, padding: '12px 14px' }}>
            <p style={{ fontSize: 12, color: '#555', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, margin: '0 0 10px' }}>
              "Alert: The Smith family played 3 rounds but skipped post-round dining due to 5-hour pace. Suggested action: Offer complimentary appetizers on next visit."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(243,146,45,0.15)', paddingTop: 10 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#B8600E' }}>Impact: $8,000 dues at risk</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: '#F3922D', background: 'rgba(243,146,45,0.15)', padding: '3px 10px', borderRadius: 4 }}>✓ Approve &amp; Send Draft</span>
            </div>
          </div>
          <div style={{ background: 'rgba(243,146,45,0.07)', border: '1px solid rgba(243,146,45,0.20)', borderRadius: 8, padding: '12px 14px' }}>
            <p style={{ fontSize: 12, color: '#555', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, margin: '0 0 8px' }}>
              "Alert: 42-min backup at Hole 12 · Sat lunch rush incoming. Dining conversion dropping to 22% vs 41% baseline — $31/round at risk for 200+ rounds today."
            </p>
            <p style={{ fontSize: 12, color: '#555', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.6, margin: 0 }}>
              Suggested action: Deploy beverage cart to Hole 13 tee box + alert F&B to hold 6 tables for post-round wave.
            </p>
          </div>
          <p style={{ fontSize: 11, color: '#6b7280', lineHeight: 1.55, margin: '6px 0 0' }}>
            Full approval history · 24-hour undo window · Every action logged and reversible · Jonas + ForeTees + Northstar correlated — no single system required
          </p>
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
      title="Pricing that pays for itself."
      subtitle="Choose the plan that fits your team's bandwidth."
    >
      <style>{pricingMobileStyles}</style>

      {/* ROI anchor — context before pricing cards */}
      <p style={{ textAlign: 'center', fontSize: 16, color: theme.colors.textSecondary, margin: '0 0 10px', maxWidth: 560, marginInline: 'auto' }}>
        Pays for itself the day you save a single $32K LTV member — or plug one Saturday lunch leak.
      </p>

      {/* Trust bar — IT objection handled before buyer sees pricing */}
      <div style={{ maxWidth: 600, margin: '0 auto 24px', background: 'rgba(243,146,45,0.08)', border: '1px solid rgba(243,146,45,0.25)', borderRadius: 10, padding: '14px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontWeight: 700, color: '#1B1814', fontSize: 15 }}>
          Live in 14 days · Zero IT required · Cancel any time
        </p>
      </div>

      {/* Cross-domain moat block — why your POS can't do this */}
      <div style={{ maxWidth: 760, margin: '0 auto 36px', background: '#1B1814', borderRadius: 16, padding: 'clamp(20px, 3vw, 32px)', color: '#FFFFFF' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', margin: '0 0 10px' }}>
          Why Your POS Can't Show You This
        </p>
        <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: '#FFFFFF', margin: '0 0 12px', lineHeight: 1.2 }}>
          Your tee sheet sees golf. Your POS sees dining. Neither sees the $31 you lose per slow round — because they've never been introduced.
        </h3>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.70)', margin: '0 0 16px', lineHeight: 1.6 }}>
          When pace of play at Hole 12 exceeds 4:20, post-round dining conversion drops from 41% to 22%. That's $31 in lost F&B revenue per round — invisible in Jonas, invisible in ForeTees, invisible in Northstar, because it lives in the space <em>between</em> those systems. Swoop connects them overnight.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 16px' }}>
          {['Jonas', 'ForeTees', 'Northstar', 'Club Prophet', 'Chelsea', 'ClubPoint', '30+ more'].map(v => (
            <span key={v} style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 999, padding: '3px 10px', fontWeight: 500 }}>{v}</span>
          ))}
        </div>
        <p style={{ margin: '12px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.30)', fontStyle: 'italic' }}>
          Illustrative: based on 300-member club, 200 Saturday rounds/month. $31 = 19% dining-conversion drop × $163 avg F&B check. Source: Pinetree CC founding-partner deployment, Q1 2024.
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

      {/* Layer 3 moat statement */}
      <div style={{ maxWidth: 560, margin: '28px auto 0', textAlign: 'center' }}>
        <p style={{ fontSize: 17, fontWeight: 600, color: theme.neutrals.ink, lineHeight: 1.4, margin: 0 }}>
          Your POS sees dining. Your tee sheet sees golf.{' '}
          <span style={{ color: '#B8600E' }}>Swoop sees how they connect to save at-risk dues.</span>
        </p>
      </div>

      {/* Inline reassurance — objection handling at the decision point */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', marginTop: 20 }}>
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
          <a href="mailto:founders@swoopgolf.com" style={{ color: '#B8600E', textDecoration: 'none', fontWeight: 600 }}>
            founders@swoopgolf.com
          </a>
          {' '}· We respond within 4 business hours.
        </p>
      </div>
    </SectionShell>
  );
}