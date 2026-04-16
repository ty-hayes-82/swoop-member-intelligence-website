import { theme } from '@/config/theme';
import { SectionShell, Card } from '@/landing/ui';

const team = [
  {
    name: 'Tyler Hayes',
    title: 'Co-founder & CEO',
    priorRole: 'Former Member Ops Director, private club operations (2019–2023)',
    linkedinUrl: 'https://linkedin.com/in/tylerhayes',
    bio: 'I ran member ops at a 300-member desert club before writing a line of code. I built Swoop because the GM tools I needed didn\'t exist.',
  },
  {
    name: 'Jordan Mitchell',
    title: 'Co-founder & CTO',
    priorRole: 'Former Hospitality Data Lead, tech operations (2015–2023)',
    linkedinUrl: 'https://linkedin.com/in/jordanmitchell',
    bio: 'Eight years turning complex hospitality data into clear operational signals. I mapped the 12 months of club-specific behavioral playbooks that power the Swoop daily briefing.',
  },
  {
    name: 'Alex Chen',
    title: 'Head of Club Success',
    priorRole: 'Former Director of Operations Analytics, enterprise hospitality (2017–2023)',
    linkedinUrl: 'https://linkedin.com/in/alexchen',
    bio: 'Six years turning enterprise data into daily operational workflows. Now I do the same thing for GMs — your onboarding and your morning brief come from me personally.',
  },
];

export default function TeamSection() {
  return (
    <SectionShell
      band="cream"
      eyebrow="Who you'll work with"
      title="An extension of your team, not a disruption to it."
      subtitle="Every founding-partner club gets a dedicated point of contact — reachable by call, text, or email — from onboarding through your first board review. You're not a ticket number."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          marginBottom: 48,
        }}
      >
        {(team ?? []).map(member => {
          const slug = member.name.toLowerCase().replace(/\s+/g, '-');
          return (
          <Card key={member.name} interactive style={{ padding: 28, gap: 16 }}>
            <div style={{ position: 'relative', width: 80, height: 80, marginBottom: 16 }}>
              <img
                src={`/images/team/${slug}.webp`}
                alt={member.name}
                style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(181,149,106,0.4)', display: 'block' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                style={{
                  display: 'none',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  background: 'rgba(181,149,106,0.15)',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#B5956A',
                  border: '2px solid rgba(181,149,106,0.3)',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              >
                {member.name.charAt(0)}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 17, fontWeight: 700, color: theme.neutrals.ink, margin: '0 0 2px' }}>
                {member.name}
              </p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#B8600E', margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {member.title}
              </p>
              <div style={{ marginTop: 4, marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: '#595959' }}>{member.priorRole}</span>
              </div>
              <p style={{ fontSize: 14, color: theme.colors.textSecondary, lineHeight: 1.65, margin: '0 0 8px' }}>
                {member.bio}
              </p>
              {member.linkedinUrl && (
                <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer"
                   style={{ fontSize: 13, color: '#B8600E', textDecoration: 'none', display: 'inline-block' }}>
                  LinkedIn →
                </a>
              )}
            </div>
          </Card>
          );
        })}
      </div>

      {/* Moat */}
      <div
        style={{
          background: theme.neutrals.ink,
          borderRadius: 20,
          padding: 'clamp(24px, 4vw, 40px)',
          gap: 32,
          alignItems: 'center',
        }}
        className="landing-split"
      >
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: theme.colors.accent,
              margin: '0 0 6px',
            }}
          >
            Layer 3 Intelligence.
          </p>
          <p style={{ fontSize: 10, fontWeight: 700, color: theme.colors.accent, textTransform: 'uppercase', letterSpacing: '0.14em', margin: '0 0 12px', opacity: 0.7 }}>
            See It · Fix It · Prove It.
          </p>
          <h3
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(22px, 2.5vw, 30px)',
              fontWeight: 700,
              color: '#FFFFFF',
              margin: '0 0 14px',
              letterSpacing: '-0.02em',
            }}
          >
            Why single-system vendors miss the full picture.
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15, lineHeight: 1.65, margin: 0 }}>
            A POS vendor only sees transactions; a tee sheet only sees bookings. Only a Layer 3 platform sees the complete member. Swoop isn't just an integration — it's a cross-domain intelligence layer that correlates signals Jonas, ForeTees, and Northstar were never built to connect.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 14 }}>
          {[
            { stat: '03', label: 'operational domains correlated (Golf, F&B, CRM)' },
            { stat: '2M+', label: 'club-specific member interactions synthesized' },
            { stat: '✓', label: 'Compatible with Jonas, ClubEssentials, Northstar, and more' },
          ].map(s => (
            <div
              key={s.stat}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                padding: '14px 18px',
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                  fontFamily: theme.fonts.mono,
                  color: theme.colors.accent,
                  lineHeight: 1,
                  minWidth: 60,
                }}
              >
                {s.stat}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14 }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
