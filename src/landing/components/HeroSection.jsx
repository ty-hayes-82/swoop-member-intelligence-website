import { theme } from '@/config/theme';
import { Button } from '@/landing/ui';

const proofColumns = [
  {
    eyebrow: 'SEE IT',
    headline: 'Know who\'s drifting — six days early.',
    body: 'Swoop connects your tee sheet, POS, and CRM into a single member health score. At-risk members surface automatically.',
  },
  {
    eyebrow: 'FIX IT',
    headline: 'One-tap intervention before the problem compounds.',
    body: 'Swoop drafts the callback script, the comp offer, and the staffing shift. Your team acts instead of sorting spreadsheets.',
  },
  {
    eyebrow: 'PROVE IT',
    headline: 'Board-ready attribution. Not a feeling.',
    body: 'Every save is tracked. Every dollar is sourced. One click generates the report your board wants to see.',
  },
];

export default function HeroSection({ onDemoClick }) {
  const goToDemoForm = onDemoClick ?? (() => {
    document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  const seeHowItWorks = () => {
    document.getElementById('see-it')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      style={{
        background: theme.colors.heroGreen || '#1A2E20',
        paddingTop: 'clamp(72px, 9vw, 120px)',
        paddingBottom: 'clamp(72px, 9vw, 120px)',
      }}
    >
      <div className="landing-container">
        {/* Eyebrow */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: theme.colors.brass || '#B5956A',
            margin: '0 0 20px',
            textAlign: 'center',
          }}
        >
          Member Retention Software for Private Clubs
        </p>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-serif text-white font-bold max-w-4xl mx-auto leading-tight text-center mb-6">
          Your tee sheet, POS, and CRM each see part of the picture.{' '}
          <span className="text-amber-500 italic">Swoop assembles it into one 6 AM brief.</span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(255,255,255,0.70)',
            margin: '0 auto 16px',
            maxWidth: 560,
            textAlign: 'center',
          }}
        >
          Most software tells you what happened. Swoop tells you what to do next.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 mb-4">
          <button onClick={goToDemoForm} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto">
            Book a Walkthrough
          </button>
          <button onClick={seeHowItWorks} className="text-white border border-white/30 hover:bg-white/10 px-8 py-3 rounded-md font-semibold text-lg transition-colors w-full sm:w-auto min-h-[44px] min-w-[44px]">
            See a sample brief
          </button>
        </div>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 8, textAlign: 'center', marginBottom: 16 }}>
          No credit card · No IT lift · Live in 2 weeks · 3 founding-partner slots left for Q2
        </p>

        <div className="mt-8 mb-12 flex justify-center">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-lg inline-flex">
            <img src="/avatars/pinetree-gm.jpg" alt="GM Headshot" className="w-12 h-12 rounded-full" />
            <div className="text-left">
              <p className="text-white font-semibold">"Recovered $74K in dues in our first 90 days."</p>
              <p className="text-gray-400 text-sm">John Doe, GM at PineTree CC</p>
            </div>
          </div>
        </div>

        {/* Trust bullets */}
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
          {['Live in under 2 weeks', 'Members flagged before they churn', 'Works with systems you already have'].map((item) => (
            <span
              key={item}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
              {item}
            </span>
          ))}
        </div>

        {/* Proof columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.10)',
          }}
        >
          {proofColumns.map((col, idx) => (
            <div
              key={col.eyebrow}
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRight: idx < proofColumns.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                padding: 'clamp(24px, 3vw, 36px)',
              }}
            >
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.colors.brass || '#B5956A', margin: '0 0 12px' }}>
                {col.eyebrow}
              </p>
              <h3 style={{ fontFamily: theme.fonts.serif, fontSize: 17, fontWeight: 700, color: '#FFFFFF', margin: '0 0 10px', lineHeight: 1.3 }}>
                {col.headline}
              </h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, margin: 0 }}>
                {col.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}