import { theme } from '@/config/theme';
import { SectionShell, Card } from '@/landing/ui';

const testimonials = [
  {
    quote:
      "The Saturday brief is the first club-tech vendor deliverable I've ever forwarded to my board without rewriting. Two members we were about to lose are still here because of it.",
    attribution: 'General Manager · 280-member private club · Southeast',
    stars: 5,
  },
  {
    quote:
      "We went from 67% to 91% fill rate in six weeks. The routing logic knows which members need a tee time more than a reminder — that's not something we could build ourselves.",
    attribution: 'Director of Operations · 360-member club · Mid-Atlantic',
    stars: 5,
    halfStar: false,
  },
  {
    quote:
      "I was running twelve spreadsheets and gut feel. Now I have one brief that tells me exactly who to call and why. It's the operating system I didn't know I was missing.",
    attribution: 'General Manager · 420-member private club · Southwest',
    stars: 4,
    halfStar: true,
  },
];

export default function TestimonialsSection() {
  return (
    <SectionShell
      band="cream"
      eyebrow="What GMs are saying"
      title="From founding-partner GMs."
      subtitle="Early clubs in our founding cohort. Names withheld at their request — ask us for a reference call on your walkthrough."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          marginBottom: 8,
        }}
      >
        {testimonials.map((t, i) => (
          <Card key={i} style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Star rating */}
            <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {[...Array(t.stars ?? 5)].map((_, j) => (
                <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F3922D" stroke="none">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
              {t.halfStar && (
                <svg width="16" height="16" viewBox="0 0 24 24" stroke="none">
                  <defs>
                    <linearGradient id={`half-${i}`}>
                      <stop offset="50%" stopColor="#F3922D" />
                      <stop offset="50%" stopColor="#e5e7eb" />
                    </linearGradient>
                  </defs>
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill={`url(#half-${i})`} />
                </svg>
              )}
            </div>
            <div
              style={{
                fontFamily: theme.fonts.serif,
                fontSize: 56,
                lineHeight: 0.8,
                color: theme.colors.accent,
                userSelect: 'none',
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: theme.fonts.serif,
                fontSize: 16,
                lineHeight: 1.65,
                color: theme.neutrals.ink,
                margin: 0,
                flex: 1,
              }}
            >
              {t.quote}
            </p>
            <p
              style={{
                fontSize: 13,
                color: theme.colors.textSecondary,
                fontWeight: 600,
                margin: 0,
                borderTop: `1px solid ${theme.neutrals.fog || '#e8e8e8'}`,
                paddingTop: 14,
              }}
            >
              {t.attribution}
            </p>
          </Card>
        ))}
      </div>

      <div style={{ marginTop: 20, marginInline: 'auto', maxWidth: 560, background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 8, padding: '14px 18px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#374151', fontStyle: 'italic', margin: 0 }}>
          Want to speak with a real GM who uses Swoop? We'll connect you directly — no sales involvement, no NDA required.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <p style={{ fontSize: 17, fontWeight: 600, color: theme.neutrals.ink, margin: '0 0 16px' }}>
          Ready to see this for your club?
        </p>
        <a
          href="#/contact"
          onClick={() => { window.location.hash = '#/contact'; }}
          style={{
            display: 'inline-block',
            background: theme.colors.accent,
            color: '#1B1814',
            fontWeight: 700,
            fontSize: 16,
            padding: '14px 32px',
            borderRadius: 8,
            textDecoration: 'none',
          }}
        >
          Book a 30-Minute Walkthrough →
        </a>
        <p style={{ marginTop: 12, fontSize: 13, color: theme.colors.textMuted }}>
          Or <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }} style={{ color: '#B8600E' }}>request a reference call with a founding-partner GM →</a>
        </p>
      </div>
    </SectionShell>
  );
}
