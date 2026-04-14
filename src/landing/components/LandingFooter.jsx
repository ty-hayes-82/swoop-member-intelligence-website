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
          <p style={{ color: theme.colors.textMuted, fontSize: 12, margin: 0 }}>
            demo@swoopgolf.com
          </p>
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
        <p className="text-gray-500 text-xs text-center mt-8 w-full border-t border-black/10 pt-4">
          Your club's data stays yours. Mutual NDA on every pilot. AES-256 at rest, TLS 1.3 in transit. SOC 2 Type II in progress (Q3 2026).
        </p>

        {/* Copyright */}
        <div className="w-full border-t border-black/5 pt-5 mt-5 flex justify-between items-center flex-wrap gap-4">
          <span className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Swoop Golf, Inc. All rights reserved.
          </span>
          <div className="flex gap-4 items-center">
            <a href="#/contact" className="text-gray-600 hover:text-amber-600 inline-block min-h-[44px] min-w-[44px] p-2 -ml-2 text-sm transition-colors">
              Talk to a GM who's using it →
            </a>
            <a
              href="#/contact"
              className="text-amber-600 font-bold text-sm min-h-[44px] min-w-[44px] p-2 hover:text-amber-700 transition-colors"
              style={{ textDecoration: 'none' }}
            >
              Book a Walkthrough
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}