import LandingShell from '@/landing/LandingShell';
import CoreCapabilitiesSection from '@/landing/components/CoreCapabilitiesSection';
import HowItWorksSection from '@/landing/components/HowItWorksSection';
import AgentsSection from '@/landing/components/AgentsSection';
import SaveStorySection from '@/landing/components/SaveStorySection';
import IntegrationsSection from '@/landing/components/IntegrationsSection';
import ComparisonSection from '@/landing/components/ComparisonSection';
import SecuritySection from '@/landing/components/SecuritySection';
import InlineCta from '@/landing/components/InlineCta';
import { SectionShell, Button } from '@/landing/ui';
import { theme } from '@/config/theme';

const toDemoPage = () => { window.location.hash = '#/contact'; };

const subNavItems = [
  { label: 'Capabilities', anchor: 'platform' },
  { label: 'How it works', anchor: 'howitworks' },
  { label: 'Agents', anchor: 'agents' },
  { label: 'Integrations', anchor: 'integrations' },
  { label: 'Comparison', anchor: 'compare' },
  { label: 'Pricing', anchor: 'pricing' },
];

export default function PlatformPage() {
  return (
    <LandingShell>
      <div id="problem">
        <SectionShell
          band="dark"
          eyebrow="Platform"
          subtitle="Your existing systems, unified overnight. One dashboard showing exactly who's drifting, why, and the exact move to make."
          headerSlot={
            <>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Stop guessing who's drifting.<br />
                <span style={{ color: 'rgba(255,255,255,0.72)' }}>Start protecting your dues.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', margin: '0 0 4px' }}>
                Swoop catches at-risk members <strong style={{ color: '#F3922D' }}>6.4 weeks earlier</strong> than traditional methods — on average, across founding-partner clubs.
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.60)', fontWeight: 500, margin: '8px 0 0', fontStyle: 'italic' }}>
                70% of GMs learn about member dissatisfaction only after a complaint arrives. Swoop flips that ratio.
              </p>
            </>
          }
        >
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <Button size="lg" onClick={toDemoPage} style={{ background: '#F3922D', color: '#0A0F0D', border: 'none' }}>
                Book a 30-Min Walkthrough →
              </Button>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>Takes 2 minutes. No credit card required.</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 16 }}>
              Plans scale seamlessly. <strong style={{ color: 'rgba(255,255,255,0.82)', fontWeight: 600 }}>Starting at $499/mo.</strong>
            </p>
            <div style={{ marginTop: 12 }}>
              <a
                href="#/contact"
                onClick={toDemoPage}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  padding: '10px 22px', borderRadius: 8,
                  border: '1.5px solid rgba(243,146,45,0.5)',
                  color: '#F3922D', fontWeight: 600, fontSize: 14,
                  textDecoration: 'none',
                  transition: 'background 150ms',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(243,146,45,0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                Request a sample morning brief for your club type →
              </a>
            </div>
          </div>
        </SectionShell>
      </div>

      {/* Sticky pill sub-nav */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 150,
        display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto',
        padding: '10px 16px', background: 'rgba(250,247,242,0.96)',
        borderBottom: '1px solid rgba(17,17,17,0.06)',
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(17,17,17,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap', flexShrink: 0 }}>Jump to:</span>
        {subNavItems.map(({ label, anchor }) => (
          <a key={anchor} href={`#${anchor}`} style={{
            whiteSpace: 'nowrap', padding: '6px 14px',
            borderRadius: 999, border: '1px solid rgba(17,17,17,0.12)',
            fontSize: 13, textDecoration: 'none', color: '#1B1814',
            minHeight: 44, display: 'inline-flex', alignItems: 'center',
          }}>{label}</a>
        ))}
      </div>

      <div id="platform">
        {/* Survey stat strip — storyboard Story 1/2/3 validation */}
        <div style={{ background: '#FAF7F2', borderTop: '1px solid rgba(17,17,17,0.06)', padding: '32px clamp(20px,4vw,40px)' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24, textAlign: 'center' }}>
            {[
              { stat: '70%', label: 'of GMs spend 2–5 hrs/week bridging system gaps manually' },
              { stat: '90%', label: 'value daily member health scores — only 10% have them today' },
              { stat: '80%', label: 'of clubs run F&B at a loss with no line-item visibility into why' },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p style={{ fontSize: 44, fontWeight: 800, fontFamily: theme.fonts.mono, color: theme.colors.accent, margin: '0 0 6px', lineHeight: 1, letterSpacing: '-0.02em' }}>{stat}</p>
                <p style={{ fontSize: 14, color: '#555', margin: 0, lineHeight: 1.5 }}>{label}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: '#999', textAlign: 'center', margin: '20px 0 0', fontStyle: 'italic' }}>
            Source: Swoop GM Survey, 2024 — 47 private club GMs across the US
          </p>
        </div>
        <CoreCapabilitiesSection />
      </div>
      <InlineCta text="See these six capabilities with your club's data →" href="#/contact" />
      <div id="howitworks">
        <HowItWorksSection />
      </div>
      <InlineCta text="Get a sample daily brief for your club →" href="#/contact" />
      <div id="agents">
        <AgentsSection />
      </div>
      <InlineCta text="See the agents working live with your numbers →" href="#/contact" />
      <SaveStorySection />

      {/* Three storyboard use-case scenarios */}
      <div style={{ background: '#FAF7F2', padding: 'clamp(48px,6vw,80px) clamp(20px,4vw,40px)', borderTop: '1px solid rgba(17,17,17,0.06)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', margin: '0 0 8px', textAlign: 'center' }}>
            THREE WAYS SWOOP PAYS FOR ITSELF
          </p>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(26px,3vw,38px)', fontWeight: 800, color: '#111', textAlign: 'center', margin: '0 0 40px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Pick the scenario that sounds most like your Monday morning.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                number: '01',
                role: 'Director of Golf / GM',
                title: 'The Saturday Morning Briefing',
                hook: '4 systems, 4 logins. Nobody checks all four on a Saturday morning.',
                body: 'Swoop delivers one screen before the first tee time: rounds booked, weather, at-risk members on today\'s sheet, and a staffing gap in the dining room — all in one sentence. One tap to approve the fix.',
                stat: '$31 per slow round recovered in post-round dining',
              },
              {
                number: '02',
                role: 'General Manager',
                title: 'The Quiet Resignation Catch',
                hook: 'The CRM says active. The tee sheet says booked. Only the health score reveals the decay.',
                body: 'Email engagement fades first, golf frequency follows, dining stops last. Swoop reads the arc across all three systems simultaneously — and surfaces the member 6.4 weeks before they resign.',
                stat: '$32K annual dues. One comp dinner. Member renewed.',
              },
              {
                number: '03',
                role: 'GM / F&B Committee',
                title: 'The Board Meeting Number',
                hook: '80% of clubs run F&B at a loss. Nobody can tell the board where the money is going.',
                body: 'Swoop decomposes the leakage to the dollar: pace of play ($5,760), understaffed Fridays ($3,400), weather no-shows ($420). A pre-built 4-tab board report ships with every number sourced and attributed.',
                stat: '$9,580/month found — before the board meeting',
              },
            ].map(({ number, role, title, hook, body, stat }) => (
              <div key={number} style={{ background: '#FFFFFF', borderRadius: 16, padding: '28px 24px', border: '1px solid rgba(17,17,17,0.08)', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: theme.colors.accent, letterSpacing: '0.1em' }}>{number} · {role}</span>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 800, color: '#111', margin: 0, lineHeight: 1.2 }}>{title}</h3>
                <p style={{ fontSize: 14, fontStyle: 'italic', color: '#555', margin: 0, lineHeight: 1.6, borderLeft: '2px solid rgba(243,146,45,0.4)', paddingLeft: 12 }}>"{hook}"</p>
                <p style={{ fontSize: 14, color: '#444', lineHeight: 1.65, margin: 0 }}>{body}</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: theme.colors.accent, marginTop: 'auto', paddingTop: 12, borderTop: '1px solid rgba(17,17,17,0.07)' }}>{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mid-page CTA */}
      <SectionShell band="sand" size="sm">
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', margin: '0 0 12px' }}>
            TYPICAL CLUB LIVE IN 2 WEEKS
          </p>
          <p style={{ fontSize: 20, fontWeight: 700, color: theme.neutrals.ink, margin: '0 0 20px', fontFamily: "'Fraunces', Georgia, serif" }}>
            Want to see it with your data?
          </p>
          <Button size="md" onClick={toDemoPage}>
            Book a 30-minute walkthrough →
          </Button>
        </div>
      </SectionShell>
      <div id="integrations">
        <IntegrationsSection />
      </div>
      <div id="compare">
        <ComparisonSection />
      </div>
      <SecuritySection />
      {/* FAQ link — helps skeptical buyers find objection handling without leaving the page */}
      <div style={{ textAlign: 'center', padding: '16px 0 8px', borderTop: '1px solid rgba(17,17,17,0.06)' }}>
        <p style={{ fontSize: 14, color: '#666', margin: 0 }}>
          Still have questions?{' '}
          <a href="#/about" onClick={() => { window.location.hash = '#/about'; }} style={{ color: '#B8600E', fontWeight: 600, textDecoration: 'none' }}>
            See answers to common GM questions →
          </a>
        </p>
      </div>
      <div id="pricing">
        <SectionShell band="dark" size="sm">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.15 }}>
              Stop managing spreadsheets. Start protecting your dues.
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, margin: '0 auto 24px', maxWidth: 480 }}>
              Give us 30 minutes. We'll show you how Swoop pays for itself before your first board meeting of the quarter.
            </p>
            <Button size="lg" onClick={toDemoPage}>
              Book the walkthrough →
            </Button>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', marginTop: 14 }}>
              Plans scale seamlessly with your club size. ROI visible in 30 days.
            </p>
          </div>
        </SectionShell>
      </div>
    </LandingShell>
  );
}
