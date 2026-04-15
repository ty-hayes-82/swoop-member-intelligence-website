import LandingShell from '@/landing/LandingShell';
import TeamSection from '@/landing/components/TeamSection';
import TestimonialsSection from '@/landing/components/TestimonialsSection';
import SocialProofSection from '@/landing/components/SocialProofSection';
import DemoCtaSection from '@/landing/components/DemoCtaSection';
import { SectionShell, FaqItem } from '@/landing/ui';
import { faqItems } from '@/landing/data';
import { theme } from '@/config/theme';

const ABOUT_FAQ_QUESTIONS = new Set([
  'Does this work with Jonas / ClubEssentials?',
  "Is my members' data secure?",
  'How long until we\'re live?',
  'Can we cancel and keep our data?',
  'Can I try it before committing?',
  'What does Swoop cost?',
]);
const aboutFaqItems = faqItems.filter(item => ABOUT_FAQ_QUESTIONS.has(item.question));

function AboutFaqSection() {
  return (
    <SectionShell band="paper" container="narrow" eyebrow="FAQ" title="Common questions from GMs.">
      <div style={{ background: theme.neutrals.paper, borderRadius: 20, padding: 'clamp(12px, 3vw, 32px)', border: '1px solid rgba(17,17,17,0.08)' }}>
        {aboutFaqItems.map((item, idx) => (
          <FaqItem key={item.question} question={item.question} answer={item.answer} defaultOpen={idx === 0} />
        ))}
      </div>
      <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: theme.colors.textMuted }}>
        More questions?{' '}
        <a href="mailto:gm-support@swoopgolf.com" style={{ color: '#B8600E', textDecoration: 'none', fontWeight: 600 }}>
          Email us directly →
        </a>
      </p>
    </SectionShell>
  );
}

export default function AboutPage() {
  return (
    /* Outer div resets any parent flex/height constraints so the landing
       page can scroll normally. global.css sets #root to display:flex /
       height:100% which would clip content on desktop without this. */
    <div style={{ display: 'block', width: '100%', minHeight: '100vh' }}>
      <LandingShell>
        {/* Page hero — dark charcoal for visual authority and brand consistency */}
        <SectionShell band="dark" size="sm">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#B5956A', marginBottom: 12,
            }}>
              Built for Club GMs & COOs
            </div>
            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.15, margin: '0 0 16px', color: '#FFFFFF' }}>
              Your members are telling you they're leaving. Swoop makes sure you hear it — 6 weeks early.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, margin: '0 0 0', maxWidth: '65ch', marginInline: 'auto' }}>
              Built by a former GM who lost a 12-year member he didn't have to lose. Every morning, Swoop connects your tee sheet, POS, and CRM and tells you exactly who needs a call — before you open your laptop.
            </p>
            <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }} style={{
              display: 'inline-block', background: '#F3922D', color: '#0F0F0F',
              fontWeight: 700, fontSize: 16, padding: '14px 32px',
              borderRadius: 8, textDecoration: 'none', marginTop: 16,
            }}>
              See What Swoop Finds at Your Club →
            </a>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 10 }}>
              No contracts · No credit card · 30 minutes
            </p>
          </div>
        </SectionShell>

        {/* Origin story */}
        <SectionShell band="paper" size="sm">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', marginBottom: 12 }}>
              Why we built this
            </p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: theme.neutrals.ink, margin: '0 0 12px', lineHeight: 1.2 }}>
              I was the GM. These were my spreadsheets.
            </h2>
            {/* Credential badge — visible BEFORE the narrative so authority hits immediately */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {['Former GM · 4 years in private club ops', 'Co-built with Jonas integration partners', 'Backed by hospitality tech operators'].map(badge => (
                <span key={badge} style={{ fontSize: 12, fontWeight: 700, color: '#B8600E', background: 'rgba(243,146,45,0.08)', border: '1px solid rgba(184,96,14,0.2)', borderRadius: 999, padding: '4px 12px' }}>
                  {badge}
                </span>
              ))}
            </div>
            {/* TL;DR for skimmers — captures authority before the full narrative */}
            <div style={{ background: 'rgba(243,146,45,0.07)', border: '1px solid rgba(184,96,14,0.2)', borderRadius: 8, padding: '12px 16px', marginBottom: 20 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, color: theme.neutrals.ink }}>
                TL;DR: 4 years as a club GM. Lost a 12-year member I didn't have to lose. Built the tool I wish I had.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 16, color: theme.colors.textSecondary, lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>
                For four years, Tyler ran member operations at a 300-member desert club. Every Monday morning started the same way: pulling actives from Jonas, cross-referencing against the tee sheet in a separate tab, manually flagging members who hadn't visited. By the time the brief was assembled, it was 10 AM and two of the members on the list had already played.
              </p>
              <p style={{ margin: 0 }}>
                One week, a 12-year member — someone who'd never said a word — turned in her resignation letter. The signals were all there: no rounds in six weeks, a complaint two months prior, F&B spend down 60%. None of our systems had connected them. We only saw it in hindsight.
              </p>

              {/* Pull quote for visual break */}
              <blockquote style={{
                margin: '8px 0',
                padding: '16px 20px',
                borderLeft: '4px solid #F3922D',
                background: 'rgba(243,146,45,0.05)',
                borderRadius: '0 8px 8px 0',
                fontFamily: "'Fraunces', Georgia, serif",
                fontSize: 18,
                fontStyle: 'italic',
                color: theme.neutrals.ink,
                lineHeight: 1.6,
              }}>
                "The data was all there. It just lived in four different systems with no one to read across all of them."
              </blockquote>

              <p style={{ margin: 0 }}>
                That resignation cost the club $14,400 in annual dues. It didn't have to happen. We built Swoop to be the analyst most clubs can't afford to hire: one system that reads your tee sheet, your POS, and your CRM before you open your laptop — and tells you exactly who needs a call, what to say, and what it's worth.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: theme.neutrals.ink }}>
                Founded 2023 · Scottsdale, AZ · Backed by former club GMs and hospitality tech operators.
              </p>
              <p style={{ margin: 0, fontSize: 14, color: theme.colors.textMuted }}>
                Questions? Email us directly: <a href="mailto:gm-support@swoopgolf.com" style={{ color: '#B8600E', textDecoration: 'underline' }}>gm-support@swoopgolf.com</a>
              </p>
            </div>
          </div>
        </SectionShell>

        {/* Mid-page CTA — inserted right after the founder story for visitors sold by the narrative */}
        <div style={{ background: 'rgba(243,146,45,0.06)', borderTop: '1px solid rgba(243,146,45,0.15)', borderBottom: '1px solid rgba(243,146,45,0.15)', padding: '20px 24px', textAlign: 'center' }}>
          <div className="landing-container">
            <p style={{ fontSize: 17, fontWeight: 700, color: '#1B1814', margin: '0 0 12px' }}>
              Curious what Swoop would find in your club's data right now?
            </p>
            <a href="#/pricing" onClick={() => { window.location.hash = '#/pricing'; }} style={{ display: 'inline-block', background: '#F3922D', color: '#0F0F0F', fontWeight: 700, fontSize: 15, padding: '12px 28px', borderRadius: 8, textDecoration: 'none' }}>
              See What It Costs and What You Get →
            </a>
          </div>
        </div>
        <TeamSection />

        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <a href="#/platform" style={{ fontSize: 16, fontWeight: 600, color: '#B8600E', textDecoration: 'none' }}>
            See how the platform works →
          </a>
        </div>

        <SocialProofSection />
        <TestimonialsSection />
        <AboutFaqSection />

        <DemoCtaSection />
      </LandingShell>
    </div>
  );
}
