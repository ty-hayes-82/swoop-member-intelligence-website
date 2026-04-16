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

      <div id="proveit">
        <SectionShell
          band="paper"
          eyebrow="PROVE IT · THE QUARTERLY REVIEW"
          title="A 4-tab board report that writes itself."
          subtitle="Stop spending days building spreadsheets for your board meeting. Swoop generates a dollar-quantified ROI report — every at-risk membership saved and staffing gap closed — in one click."
        >
          <div style={{
            background: '#1B1814',
            borderRadius: 20,
            padding: 'clamp(24px, 3vw, 40px)',
            maxWidth: 860,
            marginInline: 'auto',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 24px 60px rgba(15,15,15,0.3)',
          }}>
            {/* Report header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 18, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', letterSpacing: '0.1em' }}>swoop.os / board</p>
                <p style={{ margin: '4px 0 0', fontSize: 17, fontWeight: 700, color: '#FFFFFF' }}>Q3 Board Impact Report</p>
              </div>
              <div style={{ background: '#F3922D', color: '#1B1814', fontWeight: 700, fontSize: 13, padding: '8px 18px', borderRadius: 8, cursor: 'default' }}>
                Export to PDF
              </div>
            </div>
            {/* KPI grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { label: 'At-Risk Dues Protected', value: '$33,600', sub: '4 members · Q3' },
                { label: 'F&B Leakage Recovered', value: '$9,580 / mo', sub: 'pace-of-play correlation' },
                { label: 'Service Failures Avoided', value: '14 Shifts', sub: 'Labor Optimizer · 90 days' },
              ].map(kpi => (
                <div key={kpi.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '18px 20px' }}>
                  <p style={{ margin: '0 0 6px', fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{kpi.label}</p>
                  <p style={{ margin: '0 0 4px', fontSize: 26, fontWeight: 800, color: '#F3922D', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>{kpi.value}</p>
                  <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>{kpi.sub}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', fontStyle: 'italic' }}>
              Illustrative example based on Pinetree CC 90-day founding-partner deployment · 300 active members
            </p>
          </div>
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 16 }}>Ready to see what Swoop would find at your club?</p>
            <button
              onClick={toDemoPage}
              style={{ background: '#F3922D', color: '#0A0F0D', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 8, border: 'none', cursor: 'pointer' }}
            >
              Book a 30-Min Walkthrough →
            </button>
          </div>
        </SectionShell>
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
