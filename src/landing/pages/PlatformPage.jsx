import LandingShell from '@/landing/LandingShell';
import HowItWorksSection from '@/landing/components/HowItWorksSection';
import AgentsSection from '@/landing/components/AgentsSection';
import SeeItSection from '@/landing/components/SeeItSection';
import { SectionShell, Button } from '@/landing/ui';

const toDemoPage = () => { window.location.hash = '#/contact'; };

export default function PlatformPage() {
  return (
    <LandingShell>
      <div id="problem">
        <SectionShell
          band="dark"
          eyebrow="SEE IT · THE VISIBILITY GAP"
          subtitle="Your POS sees dining. Your tee sheet sees golf. Your CRM sees complaints in isolation. No single vendor sees the member quitting all three. Swoop sits above Jonas, ForeTees, and Northstar — correlating cross-domain behavior to catch revenue leaks and quiet resignations that single systems structurally can't detect. Zero replacement required."
          headerSlot={
            <>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, color: '#FFFFFF', margin: '0 0 8px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                Your POS sees dining. Your tee sheet sees golf.<br />
                <span style={{ color: '#F3922D' }}>Neither sees the member quitting both.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', margin: '0 0 4px' }}>
                Swoop is the intelligence layer above your existing stack — catching at-risk members <strong style={{ color: '#F3922D' }}>6.4 weeks earlier*</strong> than standard manual reporting by assigning a dynamic <strong style={{ color: '#FFFFFF' }}>Member Health Score</strong> that correlates golf, dining, email, and billing in real time. Protecting an average of $42,000 in dues and F&B margin every month.
              </p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.38)', margin: '4px 0 0', fontFamily: "'JetBrains Mono', monospace" }}>
                *Detection-to-intervention timing across 4 founding-partner clubs (avg. 340 members each), Q4 2024–Q1 2025. Compared to clubs using manual single-system reports.
              </p>
            </>
          }
        >
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <Button size="lg" onClick={toDemoPage} style={{ background: '#F3922D', color: '#0A0F0D', border: 'none' }}>
                Book a 30-Min Walkthrough →
              </Button>
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>Takes 2 minutes. No credit card required. Adds to your existing software — <strong style={{ color: 'rgba(255,255,255,0.65)' }}>no rip-and-replace required.</strong></span>
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.40)', marginTop: 4, fontFamily: "'JetBrains Mono', monospace" }}>
              At a $32K average member LTV, one retention saves more than 5 years of Swoop.
            </p>
          </div>
        </SectionShell>
      </div>

      {/* Integration banner — names the Layer 3 data sources explicitly */}
      <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', background: '#1A1A1A', padding: '12px 0' }}>
        <div className="landing-container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>
            Reading real-time signals directly from{' '}
            <span style={{ color: '#FFFFFF' }}>Jonas</span>,{' '}
            <span style={{ color: '#FFFFFF' }}>Northstar</span>,{' '}
            <span style={{ color: '#FFFFFF' }}>ForeTees</span>,{' '}
            <span style={{ color: '#FFFFFF' }}>Club Prophet</span>,{' '}
            and your existing stack
          </p>
        </div>
      </div>

      <SeeItSection />

      {/* Cross-domain moat — why no single vendor can do this */}
      <section style={{ background: '#FAF7F2', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)', borderBottom: '1px solid rgba(17,17,17,0.06)' }}>
        <div className="landing-container" style={{ maxWidth: 960 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', margin: '0 0 10px' }}>
            The Intelligence Layer
          </p>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 14px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Your tee sheet knows rounds.<br />Your POS knows spend.<br />Neither knows both.
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 16, maxWidth: '58ch', marginInline: 'auto', marginBottom: 40, lineHeight: 1.6 }}>
            Swoop is the intelligence layer that sits above all four systems — connecting signals no single vendor can see. You keep Jonas. You keep ForeTees. Swoop reads them all.
          </p>

          {/* Architecture visual */}
          <div style={{ maxWidth: 760, margin: '0 auto 36px' }}>
            {/* Swoop layer */}
            <div style={{ background: '#1B1814', borderRadius: '14px 14px 0 0', padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(243,146,45,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 16 }}>⚡</span>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#FFFFFF' }}>Swoop — Cross-Domain Intelligence Layer</p>
                <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>Reads all four systems overnight · Finds patterns that live between them · Delivers ranked, dollar-quantified actions by morning</p>
              </div>
              <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, color: '#F3922D', background: 'rgba(243,146,45,0.12)', padding: '4px 10px', borderRadius: 999, flexShrink: 0, whiteSpace: 'nowrap' }}>
                Read-only
              </span>
            </div>
            {/* Connector lines */}
            <div style={{ background: '#1B1814', padding: '0 24px 4px', display: 'flex', gap: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{ width: 1, height: 16, background: 'rgba(243,146,45,0.4)' }} />
                ))}
              </div>
            </div>
            {/* System cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
              {[
                { name: 'Tee Sheet', sees: 'Rounds, pace, no-shows', vendors: 'ForeTees · Chelsea · Club Prophet' },
                { name: 'POS / F&B', sees: 'Dining spend, covers, conversion', vendors: 'Jonas · Northstar · Toast' },
                { name: 'CRM / Email', sees: 'Engagement, complaints, email opens', vendors: 'ClubEssential · Mailchimp' },
                { name: 'Billing', sees: 'Dues status, payment history', vendors: 'Jonas · Northstar · ClubPoint' },
              ].map((sys, i) => (
                <div key={sys.name} style={{
                  background: '#FFFFFF', padding: '14px 12px',
                  borderRadius: i === 0 ? '0 0 0 14px' : i === 3 ? '0 0 14px 0' : 0,
                  border: '1px solid rgba(17,17,17,0.08)',
                  borderTop: 'none', borderLeft: i > 0 ? 'none' : '1px solid rgba(17,17,17,0.08)',
                }}>
                  <p style={{ margin: '0 0 4px', fontSize: 12, fontWeight: 700, color: '#1B1814' }}>{sys.name}</p>
                  <p style={{ margin: '0 0 4px', fontSize: 11, color: '#6b7280', lineHeight: 1.4 }}>Sees: {sys.sees}</p>
                  <p style={{ margin: 0, fontSize: 10, color: '#9CA3AF', lineHeight: 1.3 }}>{sys.vendors}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Correlation examples */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 16 }}>
            {[
              {
                insight: 'Slow rounds kill dining revenue',
                chain: 'ForeTees → Jonas POS',
                detail: 'Rounds over 4:20 drop dining conversion from 41% to 22% — $31/round invisible to any single system. Swoop sees the connection because it reads both.',
              },
              {
                insight: 'Quiet resignations start in email',
                chain: 'CRM → Tee Sheet → POS',
                detail: 'Email opens fall, then rounds decline, then dining stops. No single system tracks all three. Swoop catches the first domino 6+ weeks early.',
              },
              {
                insight: 'Staffing gaps cause member churn',
                chain: 'Tee Sheet → POS → CRM',
                detail: "Saturday's tee sheet predicts Saturday's dining demand. When staffing doesn't match, service complaints spike 72 hours later. Three systems, one insight.",
              },
            ].map(corr => (
              <div key={corr.insight} style={{ background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 12, padding: '18px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#1B1814', margin: 0 }}>{corr.insight}</p>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#B8600E', background: 'rgba(184,96,14,0.08)', padding: '2px 8px', borderRadius: 4, flexShrink: 0 }}>{corr.chain}</span>
                </div>
                <p style={{ fontSize: 13, color: '#6b7280', margin: 0, lineHeight: 1.55 }}>{corr.detail}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', fontSize: 13, color: '#9CA3AF', marginTop: 20, lineHeight: 1.5 }}>
            Swoop connects to Jonas, Northstar, Club Prophet, ForeTees, Chelsea, and ClubPoint — reading your data without changing your workflows. No system replacement. No member-facing changes.
          </p>
        </div>
      </section>

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
                { label: 'At-Risk Dues Protected', value: '$33,600', sub: '4 members · Q3', source: '[CRM + Tee Sheet]', note: '4 members × avg $8,400 annual dues.' },
                { label: 'F&B Leakage Recovered', value: '$9,580 / mo', sub: 'pace-of-play correlation', source: '[Tee Sheet + POS]', note: '$31/round × ~309 slow rounds/month. $31 = 19% conversion drop × $163 avg F&B check.' },
                { label: 'Service Failures Avoided', value: '14 Shifts', sub: 'Labor Optimizer · 90 days', source: '[Tee Sheet + Scheduling]', note: 'Proactive staffing adjustments before service gaps occurred.' },
              ].map(kpi => (
                <div key={kpi.label} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '18px 20px' }}>
                  <p style={{ margin: '0 0 6px', fontSize: 11, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{kpi.label}</p>
                  <p style={{ margin: '0 0 2px', fontSize: 26, fontWeight: 800, color: '#F3922D', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1 }}>{kpi.value}</p>
                  <p style={{ margin: '0 0 4px', fontSize: 11, color: 'rgba(255,255,255,0.35)', fontStyle: 'italic' }}>{kpi.sub}</p>
                  <p style={{ margin: 0, fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: 'rgba(255,255,255,0.25)' }}>{kpi.source}</p>
                  <p style={{ margin: '2px 0 0', fontSize: 10, color: 'rgba(255,255,255,0.22)', fontStyle: 'italic', lineHeight: 1.4 }}>{kpi.note}</p>
                </div>
              ))}
            </div>
            <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.3)', textAlign: 'center', fontStyle: 'italic' }}>
              Illustrative example based on Pinetree CC 90-day founding-partner deployment · 300 active members · Q3 2024.
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
        <SectionShell band="dark" size="sm" eyebrow="PROVE IT · THE MONTHLY BOARD REPORT">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: 12, lineHeight: 1.15 }}>
              Stop managing spreadsheets. <span style={{ color: '#F3922D' }}>Generate your Board Report with one click.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, margin: '0 auto 24px', maxWidth: 480 }}>
              Swoop automatically tracks every dollar saved and margin gained. Generate a 4-tab Board Report that justifies your subscription before your first quarterly meeting.
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
