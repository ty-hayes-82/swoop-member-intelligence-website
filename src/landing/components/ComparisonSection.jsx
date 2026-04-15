import { theme } from '@/config/theme';
import { comparisonFeatures, objections } from '@/landing/data';
import { SectionShell, ComparisonTable, Card } from '@/landing/ui';

const mobileComparisonStyles = `
  @media (max-width: 768px) {
    .comparison-table { display: none !important; }
    .comparison-mobile { display: block !important; }
  }
  @media (min-width: 769px) {
    .comparison-mobile { display: none !important; }
  }
`;

const columns = [
  { key: 'swoop', label: 'Swoop', highlight: true },
  { key: 'waitlistTools', label: 'Jonas + ClubEssentials + spreadsheets' },
  { key: 'crm', label: 'Your CRM' },
  { key: 'sheets', label: 'Spreadsheets' },
];

export default function ComparisonSection() {
  return (
    <SectionShell
      band="paper"
      eyebrow="THE COMPARISON"
      title="One page replaces four logins."
      subtitle="Waitlist tools fill slots. CRMs store records. Spreadsheets report the past. Swoop ranks today's members, today's demand, and today's moves."
    >
      <style>{mobileComparisonStyles}</style>
      <div className="comparison-table">
        <ComparisonTable features={comparisonFeatures} columns={columns} />
      </div>
      <div className="comparison-mobile">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {comparisonFeatures.map((feature) => (
            <div key={feature.feature} style={{ background: '#111A16', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '16px 20px' }}>
              <h4 style={{ fontWeight: 700, fontSize: 15, color: '#FFFFFF', margin: '0 0 12px' }}>{feature.feature}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Swoop</span>
                <span style={{ fontSize: 16 }}>{feature.swoop ? '✅' : '❌'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Jonas + Spreadsheets</span>
                <span style={{ fontSize: 16 }}>{feature.waitlistTools === true ? '✅' : feature.waitlistTools === 'partial' ? '⚠️' : '❌'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Your CRM</span>
                <span style={{ fontSize: 16 }}>{feature.crm === true ? '✅' : feature.crm === 'partial' ? '⚠️' : '❌'}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>Spreadsheets</span>
                <span style={{ fontSize: 16 }}>{feature.sheets ? '✅' : '❌'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p
        className="landing-scroll-hint"
        style={{
          margin: '12px 4px 0',
          fontSize: 12,
          color: theme.colors.textMuted,
          textAlign: 'right',
          fontWeight: 500,
        }}
      >
        ← swipe to compare every column →
      </p>
      <p style={{ fontSize: 12, color: '#666', marginTop: 12, fontStyle: 'italic' }}>
        Comparison based on published feature matrices as of {new Date().getFullYear()}.
      </p>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <p style={{ fontSize: 17, color: theme.colors.textSecondary, margin: '0 0 16px' }}>
          Swoop does what none of these can do alone.
        </p>
        <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }}
          style={{ display: 'inline-block', background: '#F3922D', color: '#0F0F0F', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 8, textDecoration: 'none' }}>
          See it in 30 minutes →
        </a>
      </div>

      <div style={{ marginTop: 72 }}>
        <h3
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 28,
            color: theme.neutrals.ink,
            textAlign: 'center',
            letterSpacing: '-0.01em',
          }}
        >
          Why not just&hellip;
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          {objections.map((item) => (
            <a
              key={item.question}
              href="#agents"
              style={{ textDecoration: 'none', display: 'block' }}
              className="objection-card-link"
            >
              <Card interactive style={{ height: '100%' }}>
                <p style={{ fontSize: 18, fontWeight: 700, margin: '0 0 12px', color: theme.neutrals.ink, lineHeight: 1.35 }}>
                  {item.question}
                </p>
                <p style={{ color: theme.colors.textSecondary, fontSize: 15, lineHeight: 1.6, margin: 0 }}>
                  {item.answer}
                </p>
                <span style={{ fontSize: 14, color: '#F3922D', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4, marginTop: 12 }}>
                  See how Swoop handles this <span style={{ display: 'inline-block', transition: 'transform 150ms' }}>→</span>
                </span>
              </Card>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }}
            style={{ display: 'inline-block', background: '#F3922D', color: '#0F0F0F', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 8, textDecoration: 'none' }}>
            Every objection answered. Book the walkthrough →
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
