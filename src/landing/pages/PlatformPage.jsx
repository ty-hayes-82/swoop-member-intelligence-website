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
          band="cream"
          eyebrow="Platform"
          subtitle="One dashboard shows which members are drifting, why, and what to do next — assembled from your existing systems overnight."
          headerSlot={
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#111111', margin: '0 0 4px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Stop guessing who's drifting.<br /> Start protecting your dues.
            </h2>
          }
        >
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <Button size="lg" onClick={toDemoPage}>
              Book a 30-Min Walkthrough →
            </Button>
            <p style={{ fontSize: 13, color: theme.colors.textMuted, marginTop: 10 }}>
              Plans scale seamlessly. <strong style={{ color: theme.neutrals.ink, fontWeight: 600 }}>Starting at $499/mo.</strong>
            </p>
          </div>
        </SectionShell>
      </div>

      {/* Sticky pill sub-nav */}
      <div style={{
        position: 'sticky', top: 64, zIndex: 150,
        display: 'flex', gap: 8, overflowX: 'auto',
        padding: '10px 16px', background: 'rgba(250,247,242,0.96)',
        borderBottom: '1px solid rgba(17,17,17,0.06)',
      }}>
        {subNavItems.map(({ label, anchor }) => (
          <a key={anchor} href={`#${anchor}`} style={{
            whiteSpace: 'nowrap', padding: '6px 14px',
            borderRadius: 999, border: '1px solid rgba(17,17,17,0.12)',
            fontSize: 13, textDecoration: 'none', color: '#1B1814',
          }}>{label}</a>
        ))}
      </div>

      <div id="platform">
        <CoreCapabilitiesSection />
      </div>
      <InlineCta text="See these six capabilities with your club's data →" targetId="demo-form" />
      <div id="howitworks">
        <HowItWorksSection />
      </div>
      <div id="agents">
        <AgentsSection />
      </div>
      <InlineCta text="See the agents working live with your numbers →" targetId="demo-form" />
      <SaveStorySection />
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
      <div id="pricing">
        <SectionShell band="dark" size="sm">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.15 }}>
              Ready to change how you run your club?
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
