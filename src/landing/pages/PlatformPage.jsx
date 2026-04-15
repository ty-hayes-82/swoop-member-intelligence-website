import LandingShell from '@/landing/LandingShell';
import HowItWorksSection from '@/landing/components/HowItWorksSection';
import AgentsSection from '@/landing/components/AgentsSection';
import { SectionShell, Button } from '@/landing/ui';

const toDemoPage = () => { window.location.hash = '#/contact'; };

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
          </div>
        </SectionShell>
      </div>

      <div id="howitworks">
        <HowItWorksSection />
      </div>

      <div id="agents">
        <AgentsSection />
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
