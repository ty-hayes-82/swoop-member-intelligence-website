import { theme } from '@/config/theme';
import { SectionShell } from '@/landing/ui';

const securityItems = [
  {
    icon: '🔒',
    title: 'SOC 2 Type II Compliant',
    description: 'Audited annually. Full report available under mutual NDA. Your member data meets enterprise-grade security standards.',
  },
  {
    icon: '🛡️',
    title: 'AES-256 Encryption',
    description: 'Encrypted at rest and in transit via TLS 1.3. Zero plain-text storage of member PII.',
  },
  {
    icon: '📁',
    title: 'Your Data Stays Yours',
    description: 'Member data is never used for model training across clubs. Delete everything with one request. You own the export.',
  },
  {
    icon: '👁️',
    title: 'Invisible to Members',
    description: 'Swoop is a staff-side intelligence layer. Members never see it, install it, or interact with it — ever.',
  },
];

export default function SecuritySection() {
  return (
    <SectionShell
      band="paper"
      eyebrow="Data & Security"
      title="Your members' data is safe. Full stop."
      subtitle="You're trusting us with your club's most sensitive information. Here's how we protect it."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {securityItems.map((item) => (
          <div
            key={item.title}
            style={{
              background: '#FFFFFF',
              borderRadius: 12,
              padding: '20px 24px',
              border: '1px solid rgba(17,17,17,0.08)',
              display: 'flex',
              gap: 16,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: theme.neutrals.ink,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, color: theme.neutrals.ink, margin: '0 0 6px' }}>
                {item.title}
              </p>
              <p style={{ fontSize: 14, color: theme.colors.textSecondary, lineHeight: 1.6, margin: 0 }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 28 }}>
        <p style={{ fontSize: 13, color: theme.colors.textMuted, margin: '0 0 8px' }}>
          Questions about data handling?{' '}
          <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }} style={{ color: '#B8600E', fontWeight: 600, textDecoration: 'none' }}>
            Request our security overview →
          </a>
        </p>
        <p style={{ fontSize: 12, color: theme.colors.textMuted, margin: 0 }}>
          <a href="#/privacy" onClick={() => { window.location.hash = '#/privacy'; }} style={{ color: theme.colors.textMuted, textDecoration: 'underline' }}>Privacy Policy</a>
          {' · '}
          <a href="#/terms" onClick={() => { window.location.hash = '#/terms'; }} style={{ color: theme.colors.textMuted, textDecoration: 'underline' }}>Terms of Service</a>
        </p>
      </div>
    </SectionShell>
  );
}
