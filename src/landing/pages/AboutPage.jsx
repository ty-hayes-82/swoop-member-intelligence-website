import LandingShell from '@/landing/LandingShell';
import TeamSection from '@/landing/components/TeamSection';
import TestimonialsSection from '@/landing/components/TestimonialsSection';
import SocialProofSection from '@/landing/components/SocialProofSection';
import FaqSection from '@/landing/components/FaqSection';
import DemoCtaSection from '@/landing/components/DemoCtaSection';
import { SectionShell } from '@/landing/ui';
import { theme } from '@/config/theme';

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
              The operating intelligence layer your tee sheet, POS, and CRM were never designed to give you.
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.82)', lineHeight: 1.65, margin: '0 0 0', maxWidth: '65ch', marginInline: 'auto' }}>
              Every morning before your first tee time, Swoop reads your data overnight and delivers one brief telling you exactly which members need a call, which revenue gaps are open today, and what to do about both.
            </p>
            <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }} style={{
              display: 'inline-block', background: '#F3922D', color: '#0F0F0F',
              fontWeight: 700, fontSize: 16, padding: '14px 32px',
              borderRadius: 8, textDecoration: 'none', marginTop: 16,
            }}>
              Book a Walkthrough
            </a>
          </div>
        </SectionShell>

        {/* Origin story */}
        <SectionShell band="paper" size="sm">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', marginBottom: 12 }}>
              Why we built this
            </p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 2.8vw, 32px)', fontWeight: 800, color: theme.neutrals.ink, margin: '0 0 20px', lineHeight: 1.2 }}>
              I was the GM. These were my spreadsheets.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 16, color: theme.colors.textSecondary, lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>
                Before founding Swoop, Tyler ran member operations at a 300-member desert club for four years. Every Monday morning started the same way: pulling actives from Jonas, cross-referencing against the tee sheet in a separate tab, manually flagging members who hadn't checked in. By the time the brief was assembled, it was 10 AM and two of the members on the list had already played.
              </p>
              <p style={{ margin: 0 }}>
                The data existed. The signals were there. The problem was that nothing connected them automatically, and no one had the four hours each week to do it manually.
              </p>
              <p style={{ margin: 0 }}>
                We built Swoop to be the analyst that most clubs can't afford to hire: one system that reads your tee sheet, your POS, and your CRM before you open your laptop — and tells you exactly who needs a call, what to say, and what it's worth.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: theme.neutrals.ink }}>
                Founded 2023 · Scottsdale, AZ · Backed by former club GMs and hospitality tech operators.
              </p>
            </div>
          </div>
        </SectionShell>

        <TeamSection />

        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <a href="#/platform" style={{ fontSize: 16, fontWeight: 600, color: '#B8600E', textDecoration: 'none' }}>
            See how the platform works →
          </a>
        </div>

        <SocialProofSection />
        <TestimonialsSection />
        <FaqSection />

        <DemoCtaSection />
      </LandingShell>
    </div>
  );
}
