import { theme } from '@/config/theme';

const footerColumns = [
  {
    heading: 'Product',
    links: [
      { label: 'Platform',     href: '#/platform' },
      { label: 'Pricing',      href: '#/pricing' },
      { label: 'Integrations', href: '#/platform' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',    href: '#/about' },
      { label: 'Contact',  href: '#/contact' },
      { label: 'Careers',  href: '#/contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy',    href: '#/privacy' },
      { label: 'Terms of Service',  href: '#/terms' },
    ],
  },
];

export default function LandingFooter() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(17,17,17,0.08)',
        background: theme.neutrals.paper,
        padding: '48px 0 40px',
      }}
    >
      <div
        className="landing-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 32,
        }}
      >
        {/* Brand */}
        <div style={{ minWidth: 180 }}>
          <div
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: theme.neutrals.ink,
              letterSpacing: '-0.03em',
              marginBottom: 6,
              cursor: 'pointer',
            }}
            onClick={() => { window.location.hash = '#/landing'; }}
          >
            swoop<span style={{ color: theme.colors.accent }}>.</span>
          </div>
          <p style={{ color: theme.colors.textMuted, fontSize: 13, margin: '0 0 4px' }}>
            Member retention software for private clubs.
          </p>
          <p style={{ color: theme.colors.textMuted, fontSize: 12, margin: '0 0 4px' }}>
            1240 Broad Street, Suite 300, Charleston, SC 29401
          </p>
          <a href="mailto:gm-support@swoopgolf.com" style={{ color: theme.colors.textMuted, fontSize: 12, textDecoration: 'none' }}>
            gm-support@swoopgolf.com
          </a>
        </div>

        {/* 3-column link grid */}
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.colors.textMuted, margin: '0 0 12px' }}>
                {col.heading}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {col.links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{ color: theme.colors.textSecondary, fontSize: 14, textDecoration: 'none', fontWeight: 500, minHeight: 44, display: 'inline-flex', alignItems: 'center' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Security strip */}
        <p style={{ width: '100%', fontSize: 12, color: '#6b7280', textAlign: 'center', marginTop: 32, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.10)' }}>
          Your club's data stays yours. Mutual NDA on every engagement. AES-256 at rest, TLS 1.3 in transit. SOC 2 Type II (Audit Active).
        </p>

        {/* Copyright */}
        <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: 20, marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontSize: 12, color: '#6b7280' }}>
            © {new Date().getFullYear()} Swoop Golf, Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a href="#/contact" style={{ color: '#4b5563', fontSize: 14, textDecoration: 'none', minHeight: 44, minWidth: 44, display: 'inline-flex', alignItems: 'center' }}>
              Talk to a GM who's using it →
            </a>
            <a
              href="#/contact"
              style={{ color: '#D97706', fontWeight: 700, fontSize: 14, textDecoration: 'none', minHeight: 44, minWidth: 44, display: 'inline-flex', alignItems: 'center' }}
            >
              Book a Walkthrough
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}