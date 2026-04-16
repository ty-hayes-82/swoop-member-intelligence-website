import { theme } from '@/config/theme';
import { foundingPartnerBenefits } from '@/landing/data';
import { SectionShell, Card, Button, IconBadge, Stat } from '@/landing/ui';

const metricCards = [
  {
    title: 'Early Warning System',
    metric: '42 days',
    subtitle: 'Average advance notice on at-risk members',
    description: 'Detected James Whitfield resignation risk 42 days before it happened by connecting POS spend decline, CRM complaint, and tee sheet pattern changes. (Email unsubscribe → Golf rounds drop 20% → Dining spend stops)',
  },
  {
    title: 'Pace-to-Dining Link',
    metric: '$31',
    subtitle: 'dining revenue gap per slow round of golf',
    description: 'Identified the correlation between Hole 12 pace delays (>4.5hrs) and zero post-round F&B spend — surfaced by cross-referencing tee sheet and POS data that each system keeps in a separate silo.',
  },
  {
    title: 'Revenue Per Slot',
    metric: '$312',
    subtitle: 'Average revenue per slot with intelligence',
    description: 'Increased from $187 reactive average by correlating tee sheet gaps with POS dining history — automatically surfacing high-spend members to fill prime-time slots first.',
  },
  {
    title: 'Dues at Risk Visibility',
    metric: '$1.38M',
    subtitle: 'in protected member lifetime value — 23 flagged members',
    description: '23 members × $15K avg annual dues × 4-yr LTV = $1.38M protected. Flagged by cross-referencing health score decline, visit frequency, and unresolved service complaints at Pinetree CC.',
  },
];

const benefitIcons = ['Handshake', 'Compass', 'Lock'];

export default function SocialProofSection({ onCtaClick }) {
  return (
    <SectionShell
      band="cream"
      eyebrow="PROOF"
      title="Intelligence in action."
      subtitle="Metrics from our Pinetree CC founding-partner deployment — 300 members, live ForeUP + Jonas + Toast integration, 90-day analysis window."
    >
      <style>{`@media (max-width: 639px) { .metric-grid-mobile { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
      <div
        className="landing-metric-grid metric-grid-mobile"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
          marginBottom: 16,
        }}
      >
        {metricCards.map((card) => (
          <Card key={card.title} interactive>
            <p
              style={{
                fontSize: 11,
                textTransform: 'uppercase',
                fontWeight: 700,
                color: theme.colors.textMuted,
                margin: 0,
                letterSpacing: '0.1em',
              }}
            >
              {card.title}
            </p>
            <p
              style={{
                fontSize: 52,
                fontWeight: 800,
                fontFamily: theme.fonts.mono,
                color: theme.colors.accent,
                margin: '4px 0 0',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {card.metric}
            </p>
            <p style={{ fontSize: 16, fontWeight: 700, color: theme.neutrals.ink, margin: '8px 0 0' }}>
              {card.subtitle}
            </p>
            <p style={{ fontSize: 14, color: theme.colors.textSecondary, lineHeight: 1.55, margin: 0 }}>
              {card.description}
            </p>
          </Card>
        ))}
      </div>
      <p style={{ fontSize: 12, color: theme.colors.textMuted, textAlign: 'center', margin: '0 0 64px', fontStyle: 'italic' }}>
        Source: Pinetree CC founding-partner data · 300 active members · real system data (ForeUP + Jonas + Toast) · 90-day analysis period (Q4 2023)
      </p>

      <div
        style={{
          background: theme.neutrals.paper,
          border: `2px solid ${theme.colors.accent}`,
          borderRadius: 24,
          padding: 'clamp(32px, 5vw, 56px)',
          position: 'relative',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 999,
              background: theme.colors.accent,
              color: '#1B1814',
              fontSize: 11,
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: 16,
            }}
          >
            Founding Partner Program
          </span>
          <h3
            style={{
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 700,
              color: theme.neutrals.ink,
              margin: '0 0 12px',
              letterSpacing: '-0.02em',
            }}
          >
            Join the Founding Partner Program.
          </h3>
          <p style={{ color: theme.colors.textSecondary, fontSize: 17, maxWidth: 620, margin: '0 auto' }}>
            A small cohort of clubs gets hands-on onboarding, direct roadmap influence, and pricing locked for life.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
            marginBottom: 32,
          }}
        >
          {foundingPartnerBenefits.map((benefit, idx) => (
            <div key={benefit.title} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
                <IconBadge name={benefitIcons[idx] || 'Star'} tone="orange" />
              </div>
              <p style={{ fontSize: 17, fontWeight: 700, margin: '0 0 6px', color: theme.neutrals.ink }}>
                {benefit.title}
              </p>
              <p style={{ color: theme.colors.textSecondary, fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: '#B8600E', margin: '0 0 12px' }}>
            Only 3 of 10 founding-partner spots remaining.
          </p>
          <Button
            onClick={onCtaClick ?? (() => { window.location.hash = '#/contact'; })}
          >
            Claim a Founding Partner Spot →
          </Button>
          <p style={{ marginTop: 14, color: theme.colors.textMuted, fontSize: 13 }}>
            Limited founding partner spots — early clubs get direct roadmap input
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
