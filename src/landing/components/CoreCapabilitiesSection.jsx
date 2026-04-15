import { theme } from '@/config/theme';
import { coreCapabilities } from '@/landing/data';
import { SectionShell, Card, IconBadge } from '@/landing/ui';

const iconMap = {
  Users: 'Users',
  Calendar: 'Calendar',
  Utensils: 'Utensils',
  UsersRound: 'UsersRound',
  DollarSign: 'DollarSign',
  Send: 'Send',
  Mail: 'Mail',
};

// Outcome metric prefixes keyed by card title substring
function getOutcomePrefix(title) {
  const t = title.toLowerCase();
  if (t.includes('drift') || t.includes('resign') || t.includes('at-risk') || t.includes('dues')) {
    return 'Avg $2,400 recovered per flag. ';
  }
  if (t.includes('tee sheet') || t.includes('slot') || t.includes('fill every')) {
    return 'Saves ~6 hrs/week of AGM time. ';
  }
  if (t.includes('morning') || t.includes('brief') || t.includes('saturday')) {
    return '0 spreadsheets. 1 brief. Every system. ';
  }
  return null;
}

export default function CoreCapabilitiesSection() {
  return (
    <SectionShell
      id="platform"
      band="cream"
      eyebrow="THE PLATFORM"
      title="Six jobs Swoop does before you finish your morning coffee."
      subtitle="Member behavior, demand, service, labor, revenue, outreach — all surfaced on one page you can act from before the first tee time."
    >
      <style>{`@media (max-width: 639px) { .cap-card-body { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; } }`}</style>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}
      >
        {coreCapabilities.map((cap) => {
          const outcomePrefix = getOutcomePrefix(cap.title);
          const bodyText = cap.description || cap.summary;
          return (
          <Card key={cap.title} interactive>
            <div style={{ background: 'rgba(243,146,45,0.1)', borderRadius: 8, padding: 8, display: 'inline-flex' }}>
              <IconBadge name={iconMap[cap.icon] || 'Circle'} tone="neutral" style={{ color: '#F3922D', opacity: 0.9 }} />
            </div>
            {cap.category && (
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: theme.colors.textMuted, margin: '8px 0 2px' }}>
                {cap.category}
              </p>
            )}
            <h3 style={{ fontSize: 18, fontWeight: 700, margin: '4px 0 4px', color: theme.neutrals.ink, lineHeight: 1.3 }}>
              {cap.title}
            </h3>
            {cap.dataSources && (
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: theme.colors.textMuted, margin: '4px 0 8px', textTransform: 'uppercase' }}>
                {cap.dataSources}
              </p>
            )}
            <p className="cap-card-body" style={{ fontSize: 15, color: theme.colors.textSecondary, margin: 0, lineHeight: 1.6 }}>
              {outcomePrefix && <strong style={{ color: theme.neutrals.ink }}>{outcomePrefix}</strong>}{bodyText}
            </p>
            {cap.bullets?.length > 0 && (
              <ul
                style={{
                  margin: '8px 0 0',
                  paddingLeft: 16,
                  color: theme.colors.textSecondary,
                  fontSize: 14,
                  lineHeight: 1.65,
                }}
              >
                {cap.bullets.map((bullet) => (
                  <li key={bullet} style={{ marginBottom: 3 }}>{bullet}</li>
                ))}
              </ul>
            )}
            <div
              style={{
                marginTop: 'auto',
                paddingTop: 14,
                borderTop: '1px solid rgba(17,17,17,0.07)',
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: theme.colors.textMuted,
                  margin: 0,
                }}
              >
                READS FROM: {cap.source}
              </p>
              {cap.metric && (
                <div style={{ marginTop: 8 }}>
                  <p style={{ fontSize: 24, fontWeight: 800, fontFamily: theme.fonts.mono, color: '#D97706', margin: 0, lineHeight: 1 }}>
                    {cap.metric.value}
                  </p>
                  <p style={{ fontSize: 12, color: '#555', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', margin: '4px 0 0' }}>{cap.metric.label}</p>
                  {cap.metric.source && (
                    <p style={{ fontSize: 12, color: '#666', margin: '4px 0 0' }}>{cap.metric.source}</p>
                  )}
                </div>
              )}
            </div>
          </Card>
          );
        })}
      </div>
      {/* Mechanism transparency */}
      <div style={{ maxWidth: 680, margin: '32px auto 0', padding: '20px 24px', background: 'rgba(17,17,17,0.04)', borderRadius: 12, border: '1px solid rgba(17,17,17,0.07)' }}>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#B8600E', margin: '0 0 8px' }}>How the detection works</p>
        <p style={{ fontSize: 14, color: theme.colors.textSecondary, lineHeight: 1.65, margin: 0 }}>
          Swoop reads read-only API feeds from your tee sheet, POS, and CRM nightly. It tracks behavioral deltas across four dimensions — visit frequency, F&B spend, complaint recency, and engagement signals — and compares each member to their own 12-month baseline. When multiple signals diverge simultaneously, the risk score spikes and the morning brief flags the member with a recommended action. The model was trained on 12 months of founding-partner behavioral data from clubs ranging from 200 to 600 members.
        </p>
      </div>
      <p style={{ fontSize: 12, color: '#666', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', marginTop: 16, maxWidth: 560, marginInline: 'auto' }}>
        * Metrics represent average impact observed at a 500-member club over a trailing 90-day period.
      </p>

      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <p style={{ fontSize: 17, fontWeight: 600, color: theme.neutrals.ink, margin: '0 0 16px' }}>
          Ready to see how Swoop maps to your club?
        </p>
        <a
          href="#/contact"
          onClick={() => { window.location.hash = '#/contact'; }}
          style={{ display: 'inline-block', background: '#F3922D', color: '#1B1814', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 8, textDecoration: 'none' }}
        >
          Book the 30-Minute Walkthrough →
        </a>
      </div>
    </SectionShell>
  );
}
