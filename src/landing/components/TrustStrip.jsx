import { theme } from '@/config/theme';
import { Icon } from '@/landing/ui';

const stats = [
  {
    icon: 'Rocket',
    value: 'Founding partner program',
    sub: 'Open to the first 10 private clubs',
  },
  {
    icon: 'Database',
    value: '300-member Pinetree CC',
    sub: 'Live demo environment, real data',
  },
  {
    icon: 'Plug',
    value: 'Reads Jonas, ClubEssential, ForeUP + 25 more',
    sub: 'Read-only API access · 10 categories',
  },
  {
    icon: 'Zap',
    value: 'Live in under 2 weeks',
    sub: 'Week 1: connectors · Week 2: agents',
  },
];

export default function TrustStrip() {
  return (
    <>
      <div style={{ background: '#1A2E25', padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.10)' }}>
        <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.72)', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px' }}>
          Built with founding-partner club operators
        </p>
        <p style={{ textAlign: 'center', fontSize: 14, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
          Names withheld at clubs' request · Reference calls available on your walkthrough
        </p>
      </div>
      <section className="landing-section-sm" style={{ paddingTop: 56, paddingBottom: 16 }}>
        <div className="landing-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: 20,
              padding: 'clamp(20px, 3vw, 32px)',
              borderRadius: 18,
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(17,17,17,0.08)',
              boxShadow: '0 8px 20px rgba(17,17,17,0.04)',
            }}
            className="landing-trust-stats"
          >
            {stats.map((s) => (
              <div key={s.value} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: 'rgba(243,146,45,0.12)',
                    flexShrink: 0,
                  }}
                >
                  <Icon name={s.icon} size={18} color={theme.colors.accent} strokeWidth={2.25} />
                </span>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: theme.neutrals.ink,
                      lineHeight: 1.3,
                      marginBottom: 3,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12, color: theme.colors.textMuted, lineHeight: 1.45 }}>
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}