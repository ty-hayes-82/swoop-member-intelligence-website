import { theme } from '@/config/theme';
import LandingShell from '@/landing/LandingShell';
import RoiCalculatorSection from '@/landing/components/RoiCalculatorSection';
import PricingSection from '@/landing/components/PricingSection';
import { faqItems } from '@/landing/data';
import { SectionShell, FaqItem, Button } from '@/landing/ui';

const pricingStats = [
  { value: '65%', label: 'Avg. at-risk member retention rate', source: 'Swoop 2024 Cohort' },
  { value: '$74K', label: 'Avg. dues recovered per club in first 90 days', source: 'Swoop 2024 Cohort' },
  { value: '5 of 7', label: 'Founding clubs recovered annual cost within 60 days', source: 'Swoop 2024 Cohort' },
];

function PricingHero() {
  const scrollToRoi = () => {
    document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <SectionShell band="dark" eyebrow="PRICING"
      headerSlot={
        <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(32px, 4vw, 54px)', fontWeight: 800, color: '#FFFFFF', margin: '0 0 4px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Stop losing $74K a year in silent<br />member attrition. Start for zero.
        </h1>
      }
    >
      <div style={{ textAlign: 'center', marginTop: -8, marginBottom: 40 }}>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.82)', maxWidth: 580, margin: '0 auto 28px', lineHeight: 1.65 }}>
          5 of 7 founding-partner clubs recovered Swoop's annual cost within 60 days of their first intervention (2024 cohort). Start free. Upgrade when the ROI shows up in your own numbers.
        </p>
        <Button size="lg" onClick={scrollToRoi} style={{ background: theme.colors.accent, color: '#1B1814', border: 'none' }}>
          Calculate your ROI →
        </Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
        {pricingStats.map((s) => (
          <div
            key={s.value}
            style={{
              textAlign: 'center',
              padding: '28px 20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
            }}
          >
            <p style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, fontFamily: theme.fonts.mono, color: theme.colors.accent, margin: '0 0 8px', lineHeight: 1, letterSpacing: '-0.02em' }}>
              {s.value === '$2.1B' ? <span style={{ whiteSpace: 'nowrap' }}>$2.1B</span> : s.value}
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.82)', margin: '0 0 6px', lineHeight: 1.5 }}>
              {s.label}
            </p>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
              Source: {s.source}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

const PRICING_FAQ_QUESTIONS = new Set([
  'Do I need to replace my current software?',
  'How long does setup take?',
  "Is my members' data secure?",
  'What does the founding-partner program actually look like?',
  'What happens if we cancel?',
]);

const pricingFaqItems = faqItems.filter((item) => PRICING_FAQ_QUESTIONS.has(item.question));

const toDemoPage = () => { window.location.hash = '#/contact'; };

function PricingFaqSection() {
  return (
    <SectionShell
      band="cream"
      container="narrow"
      eyebrow="Pricing FAQ"
      title="Things GMs ask us."
    >
      <div
        style={{
          background: theme.neutrals.paper,
          borderRadius: 20,
          padding: 'clamp(12px, 3vw, 32px)',
          border: '1px solid rgba(17,17,17,0.08)',
        }}
      >
        {pricingFaqItems.map((item, idx) => (
          <FaqItem
            key={item.question}
            question={item.question}
            answer={item.answer}
            defaultOpen={idx === 0 || item.question === "Is my members' data secure?"}
          />
        ))}
      </div>
    </SectionShell>
  );
}

function PricingCtaClose() {
  return (
    <SectionShell band="dark" size="sm">
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 12px', lineHeight: 1.2 }}>
          Ready to see which of your members are at risk?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, maxWidth: 460, margin: '0 auto 24px' }}>
          30 minutes. Your real data. We'll show you exactly which members Swoop flags at a club like yours.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }}
            style={{ display: 'inline-block', background: '#F3922D', color: '#0F0F0F', fontWeight: 800, fontSize: 16, padding: '14px 32px', borderRadius: 8, textDecoration: 'none' }}>
            Book a 30-min Walkthrough →
          </a>
        </div>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 12 }}>
          No contracts · No credit card · Cancel any time
        </p>
      </div>
    </SectionShell>
  );
}

export default function PricingPage() {
  return (
    <LandingShell>
      <PricingHero />
      <RoiCalculatorSection />
      {/* Bridge: connect the ROI the visitor just calculated to the plan that recovers it */}
      <div style={{ background: 'rgba(243,146,45,0.06)', borderTop: '1px solid rgba(243,146,45,0.15)', borderBottom: '1px solid rgba(243,146,45,0.15)', padding: '20px 24px', textAlign: 'center' }}>
        <div className="landing-container">
          <p style={{ fontSize: 16, fontWeight: 700, color: '#1B1814', margin: '0 0 4px' }}>
            The <strong>Signals + Actions</strong> plan ($499/mo) is where most clubs recover 5× ROI in the first 60 days.
          </p>
          <p style={{ fontSize: 14, color: '#666', margin: 0 }}>
            Start free with Signals. Upgrade only when your own numbers say so.
          </p>
        </div>
      </div>
      <PricingSection onCtaClick={toDemoPage} />
      <PricingFaqSection />
      <PricingCtaClose />
    </LandingShell>
  );
}
