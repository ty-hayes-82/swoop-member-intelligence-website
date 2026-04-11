'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { theme } from '@/lib/landing-theme';
import {
  problemCards, coreCapabilities, comparisonFeatures, objections,
  agents, integrationCategories, foundingPartnerBenefits,
  pricingTiers, faqItems,
} from '@/lib/landing-data';
import './landing.css';

/* ─── Shared ─── */

const pageWrap = {
  background: theme.colors.bg,
  color: theme.colors.textPrimary,
  fontFamily: theme.fonts.sans,
};

const container = {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  padding: '0 clamp(16px, 4vw, 32px)',
  boxSizing: 'border-box',
};

const fullWidth = {
  width: '100%',
  margin: '0 auto',
  padding: '0 clamp(16px, 4vw, 32px)',
  boxSizing: 'border-box',
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const NAV_LINKS = [
  { label: 'Platform', target: 'platform' },
  { label: 'Agents', target: 'agents' },
  { label: 'Pricing', target: 'pricing' },
  { label: 'Demo', target: 'demo-form' },
];

/* ─── Nav ─── */

function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="landing-nav"
      style={{
        position: 'sticky', top: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px clamp(16px, 4vw, 32px)',
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #e4e4e7' : '1px solid transparent',
        transition: 'background 200ms, border-color 200ms',
        maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}
    >
      <span
        style={{ fontWeight: 800, fontSize: '1.4rem', color: '#0F0F0F', letterSpacing: '-0.02em', cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        swoop.
      </span>
      <div className="landing-nav-links" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {NAV_LINKS.map(({ label, target }) => (
          <button
            key={target}
            onClick={() => scrollToSection(target)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500, color: '#3F3F46', padding: 0, fontFamily: 'inherit' }}
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => scrollToSection('demo-form')}
          style={{ background: '#F3922D', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 20px', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
        >
          Book a Demo
        </button>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */

const ctaBase = {
  height: 48, borderRadius: 8, fontFamily: theme.fonts.sans,
  fontWeight: 700, fontSize: '16px', padding: '0 22px',
  transition: 'all 150ms ease', border: '2px solid transparent',
};
const TEAL = '#14B8A6';

function HeroSection() {
  return (
    <section className="landing-section-padded" style={{ padding: '88px 0 80px' }}>
      <div style={{ maxWidth: 820 }}>
        <p style={{ color: theme.colors.accent, fontSize: theme.fontSize.sm, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: theme.spacing.md }}>
          The Operating System for Private Clubs
        </p>
        <h1 style={{ fontFamily: theme.fonts.serif, fontSize: 'clamp(38px, 5.5vw, 60px)', lineHeight: 1.1, marginBottom: theme.spacing.lg, maxWidth: 800 }}>
          Your members get{' '}<em style={{ color: theme.colors.accent, fontStyle: 'italic' }}>a concierge.</em><br />
          Your GM gets{' '}<em style={{ color: TEAL, fontStyle: 'italic' }}>a command center.</em>
        </h1>
        <p style={{ color: theme.colors.textSecondary, fontSize: 'clamp(17px, 2vw, 22px)', lineHeight: 1.55, maxWidth: 760, marginBottom: theme.spacing.xl }}>
          AI agents that work both sides of the club relationship. Members book,
          ask, and engage through a personal concierge. The GM sees the full
          picture, acts on coordinated intelligence, and proves the impact to
          the board.
        </p>
        <div className="landing-hero-ctas">
          <button type="button" className="landing-hero-cta"
            style={{ ...ctaBase, background: theme.colors.accent, color: '#FFFFFF', cursor: 'pointer' }}
            onClick={() => scrollToSection('demo-form')}
            onMouseEnter={(e) => { e.currentTarget.style.background = theme.colors.ctaAccentHover; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = theme.colors.accent; }}
          >
            Book a 30-Minute Demo
          </button>
          <button type="button" className="landing-hero-cta"
            style={{ ...ctaBase, background: 'transparent', color: TEAL, borderColor: TEAL, cursor: 'pointer' }}
            onClick={() => scrollToSection('product-preview')}
            onMouseEnter={(e) => { e.currentTarget.style.background = TEAL; e.currentTarget.style.color = '#FFFFFF'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = TEAL; }}
          >
            See a Day in Action
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── Product Preview ─── */

function ProductPreview() {
  return (
    <section id="product-preview" style={{ marginBottom: theme.spacing.xxl, textAlign: 'center' }}>
      <iframe
        src="https://swoop-member-portal-dev.vercel.app/#/demo/split-screen"
        style={{ width: '100%', height: 500, border: '1px solid #e4e4e7', borderRadius: 16, overflow: 'hidden' }}
        loading="lazy"
        title="Swoop platform preview"
      />
      <p style={{ color: theme.colors.textMuted, fontSize: theme.fontSize.sm, marginTop: theme.spacing.md }}>
        Live demo — member concierge on the left, GM intelligence feed on the right.
      </p>
    </section>
  );
}

/* ─── Trust Strip ─── */

const trustSignals = ['Live Demo Available', 'Live in Under 2 Weeks', 'No Rip-and-Replace', 'Data Encrypted at Rest & in Transit'];

function TrustStrip() {
  return (
    <section style={{ marginBottom: theme.spacing.xl }}>
      <p style={{ textAlign: 'center', color: theme.colors.textMuted, fontSize: theme.fontSize.sm, letterSpacing: '0.02em' }}>
        {trustSignals.join(' \u00b7 ')}
      </p>
    </section>
  );
}

/* ─── Problem Section ─── */

function ProblemSection() {
  return (
    <section className="landing-section-padded" style={{
      background: theme.colors.landingCream, borderRadius: theme.radius.xl,
      padding: 'clamp(32px, 6vw, 56px) clamp(18px, 4vw, 28px)', marginBottom: theme.spacing.xxl,
    }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.sm }}>Most clubs are flying blind.</h2>
      <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.lg, maxWidth: 640, marginBottom: theme.spacing.lg, lineHeight: 1.5 }}>
        Your tee sheet, CRM, and POS each hold a fragment. Nobody connects the dots until a member is already gone.
      </p>
      <div className="landing-problem-grid">
        {problemCards.map((card) => (
          <article key={card.title} style={{
            background: theme.colors.bgCard, border: `1px solid ${theme.colors.border}`,
            borderRadius: theme.radius.lg, padding: 'clamp(20px, 4vw, 26px)',
            boxShadow: theme.shadow.sm, display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', fontSize: theme.fontSize.xs, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.colors.textMuted }}>
              <span>{card.source}</span><span>{card.freshness}</span>
            </div>
            <h3 style={{ fontSize: theme.fontSize.lg, margin: 0 }}>{card.title}</h3>
            <p style={{ fontSize: theme.fontSize.sm, color: theme.colors.textSecondary }}>{card.summary}</p>
            {card.highlights?.length > 0 && (
              <ul style={{ margin: 0, paddingLeft: '18px', color: theme.colors.textPrimary, fontSize: theme.fontSize.sm, lineHeight: 1.5 }}>
                {card.highlights.map((h) => <li key={h} style={{ marginBottom: '4px' }}>{h}</li>)}
              </ul>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{ fontSize: theme.fontSize.xs, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.colors.textMuted }}>
                Why this surfaced
                <div style={{ fontSize: theme.fontSize.sm, fontWeight: 600, color: theme.colors.textPrimary }}>{card.why}</div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: theme.colors.accent, background: `${theme.colors.accent}12`, padding: '4px 10px', borderRadius: '999px' }}>{card.confidence}</span>
            </div>
            {card.metric && (
              <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.md, padding: '10px 12px', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                <span style={{ fontSize: '22px', fontFamily: theme.fonts.mono, fontWeight: 700 }}>{card.metric.value}</span>
                <span style={{ fontSize: theme.fontSize.xs, color: theme.colors.textMuted }}>{card.metric.label}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Inline CTA ─── */

function InlineCta({ text = 'See how it works', targetId = 'demo-form' }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: theme.spacing.xxl }}>
      <button onClick={() => scrollToSection(targetId)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        color: theme.colors.ctaAccent, textDecoration: 'none', fontWeight: 600,
        fontSize: theme.fontSize.lg, fontFamily: 'inherit',
      }}>
        {text} &rarr;
      </button>
    </div>
  );
}

/* ─── Core Capabilities ─── */

const capSvgIcons = {
  Users: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  Calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Utensils: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>,
  UsersRound: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>,
  DollarSign: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
};

function CoreCapabilitiesSection() {
  const cardRefs = useRef([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); }),
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  return (
    <section id="platform" style={{ marginBottom: theme.spacing.xxl }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.md }}>Five core capabilities. One operating view.</h2>
      <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.lg, marginBottom: theme.spacing.xl, maxWidth: 760 }}>
        Swoop combines member behavior, demand, service, labor, and revenue so your team can act with confidence instead of assumptions.
      </p>
      <div className="landing-grid-auto">
        {coreCapabilities.map((cap, i) => (
          <article key={cap.title} ref={(el) => { cardRefs.current[i] = el; }} className="reveal-up" style={{
            background: theme.colors.bgCard, border: `1px solid ${theme.colors.border}`,
            borderTop: `5px solid ${cap.color}`, borderRadius: theme.radius.lg,
            padding: '24px 20px 22px', minHeight: 260, display: 'flex', flexDirection: 'column', gap: '12px',
            transitionDelay: `${i * 90}ms`,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', flexWrap: 'wrap', fontSize: theme.fontSize.xs, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.colors.textMuted }}>
              <span>{cap.source}</span><span>{cap.freshness}</span>
            </div>
            <div style={{ height: 34, width: 34, borderRadius: theme.radius.md, background: `${cap.color}22`, color: cap.color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              {capSvgIcons[cap.icon]}
            </div>
            <div>
              <h3 style={{ fontSize: theme.fontSize.lg, marginBottom: theme.spacing.xs }}>{cap.title}</h3>
              <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.sm }}>{cap.summary}</p>
            </div>
            {cap.bullets?.length > 0 && (
              <ul style={{ margin: 0, paddingLeft: '18px', color: theme.colors.textPrimary, fontSize: theme.fontSize.sm, lineHeight: 1.5 }}>
                {cap.bullets.map((b) => <li key={b} style={{ marginBottom: '4px' }}>{b}</li>)}
              </ul>
            )}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ fontSize: theme.fontSize.xs, textTransform: 'uppercase', letterSpacing: '0.08em', color: theme.colors.textMuted }}>
                Why this surfaced
                <div style={{ fontSize: theme.fontSize.sm, fontWeight: 600, color: theme.colors.textPrimary }}>{cap.why}</div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: cap.color, background: `${cap.color}16`, padding: '4px 12px', borderRadius: '999px' }}>{cap.confidence}</span>
            </div>
            {cap.metric && (
              <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.md, padding: '12px', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px' }}>
                <span style={{ fontSize: '24px', fontFamily: theme.fonts.mono, fontWeight: 700 }}>{cap.metric.value}</span>
                <span style={{ fontSize: theme.fontSize.xs, color: theme.colors.textMuted }}>{cap.metric.label}</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Comparison ─── */

function Cell({ value }) {
  const color = value === true ? theme.colors.success : value === 'partial' ? theme.colors.warning : theme.colors.urgent;
  const symbol = value === true ? '\u2713' : value === 'partial' ? '\u25D0' : '\u2715';
  const label = value === true ? 'Yes' : value === 'partial' ? 'Partial' : 'No';
  return (
    <td style={{ textAlign: 'center', color, fontWeight: 700, fontSize: theme.fontSize.lg, padding: '12px 10px', borderBottom: `1px solid ${theme.colors.borderLight}` }}>
      <span title={label}>{symbol}</span>
    </td>
  );
}

function ComparisonSection() {
  return (
    <section style={{ marginBottom: theme.spacing.xxl }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.md }}>Built to replace patchwork ops.</h2>
      <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.xl, fontSize: theme.fontSize.lg }}>
        Swoop is not another single-point tool. It is the operating layer across member demand, service quality, labor, and revenue.
      </p>
      <div className="landing-table-wrap" style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, overflowX: 'auto', WebkitOverflowScrolling: 'touch', background: theme.colors.bgCard }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 680 }}>
          <thead>
            <tr style={{ background: theme.colors.bgDeep }}>
              {['Feature', 'Swoop', 'Waitlist Tools', 'Your CRM Alone', 'Point Solutions (ForeUP, etc.)'].map((h) => (
                <th key={h} style={{ textAlign: h === 'Feature' ? 'left' : 'center', padding: '14px 14px', fontWeight: 700, color: theme.colors.textPrimary, borderBottom: `1px solid ${theme.colors.border}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparisonFeatures.map((row) => (
              <tr key={row.feature}>
                <td style={{ padding: '12px 14px', borderBottom: `1px solid ${theme.colors.borderLight}`, fontWeight: 500 }}>{row.feature}</td>
                <Cell value={row.swoop} /><Cell value={row.waitlistTools} /><Cell value={row.crm} /><Cell value={row.sheets} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="landing-scroll-hint">Swipe horizontally to compare every column &rarr;</p>
      <div style={{ marginTop: theme.spacing.xl }}>
        <h3 style={{ fontSize: theme.fontSize.xl, marginBottom: theme.spacing.md }}>Why not just...</h3>
        <div className="landing-grid-3">
          {objections.map((item) => (
            <article key={item.question} style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, padding: '18px', background: theme.colors.bgCard }}>
              <p style={{ fontSize: theme.fontSize.lg, fontWeight: 700, marginBottom: theme.spacing.sm }}>{item.question}</p>
              <p style={{ color: theme.colors.textSecondary }}>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Agents ─── */

const agentSvgIcons = {
  UserRound: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>,
  Radar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19.07 4.93A10 10 0 0 0 2 12"/><path d="M16.24 7.76A6 6 0 0 0 6 12"/><circle cx="12" cy="12" r="2"/></svg>,
  ChefHat: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V20H6z"/><line x1="6" y1="17" x2="18" y2="17"/></svg>,
  UsersRound: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>,
  LineChart: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
  RefreshCw: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
};

function AgentsSection() {
  return (
    <section id="agents" style={{ marginBottom: theme.spacing.xxl }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.md }}>Your GM platform now has a staff.</h2>
      <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.lg, marginBottom: theme.spacing.xl }}>
        AI agents monitor your operations continuously, recommend actions, and trigger automation where your team loses time today.
      </p>
      <div className="landing-grid-3">
        {agents.map((agent) => (
          <article key={agent.name} style={{
            border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg,
            background: theme.colors.bgCard, padding: 'clamp(18px, 3vw, 22px)',
            display: 'flex', flexDirection: 'column', gap: theme.spacing.sm, height: '100%',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: theme.radius.md, background: theme.colors.bgDeep,
              color: theme.colors.textPrimary, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: theme.spacing.md,
            }}>
              {agentSvgIcons[agent.icon]}
            </div>
            <h3 style={{ fontSize: theme.fontSize.lg, marginBottom: theme.spacing.sm }}>{agent.name}</h3>
            <p style={{ color: theme.colors.textSecondary }}>{agent.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── Integrations ─── */

const swoopUnique = [
  { title: 'Real-Time Location Intelligence', desc: 'GPS and behavioral data from the Swoop member app. On-property movement patterns that no POS, tee sheet, or CRM captures.' },
  { title: 'Cross-System Behavioral Correlation', desc: "How a member's dining patterns predict their tee sheet behavior. How staffing gaps correlate with revenue drops. Your systems cannot see this alone." },
  { title: 'AI-Powered Predictive Recommendations', desc: 'Your systems collect data. Swoop interprets it and recommends specific actions with measurable outcomes \u2014 before problems become resignations.' },
  { title: 'Closed-Loop Engagement Tracking', desc: 'From signal detection to GM action to member response to outcome measurement. Your existing tools stop at the data layer. Swoop closes the loop.' },
];

function IntegrationsSection() {
  return (
    <section style={{ marginBottom: theme.spacing.xxl }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.md }}>
        Your tools manage operations. Swoop connects them and tells you what they mean together.
      </h2>
      <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.lg, marginBottom: theme.spacing.xl }}>
        These systems collect data. Swoop is the intelligence layer that connects them, adds location-aware behavioral signals, and turns cross-system patterns into actionable recommendations.
      </p>
      <div style={{ border: `2px solid ${theme.colors.ctaAccent}`, borderRadius: theme.radius.lg, background: theme.colors.bgCard, padding: 'clamp(18px, 4vw, 28px)', marginBottom: theme.spacing.xl }}>
        <p style={{ fontSize: theme.fontSize.sm, color: theme.colors.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: theme.spacing.md }}>
          What Swoop Adds That No Integration Can Provide
        </p>
        <div className="landing-grid-2" style={{ gap: 16 }}>
          {swoopUnique.map((item) => (
            <div key={item.title} style={{ borderLeft: `3px solid ${theme.colors.ctaAccent}`, paddingLeft: '14px' }}>
              <p style={{ fontWeight: 600, marginBottom: 6 }}>{item.title}</p>
              <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.sm, lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, background: theme.colors.bgCard, padding: 'clamp(18px, 4vw, 28px)', marginBottom: theme.spacing.xl }}>
        <p style={{ fontSize: theme.fontSize.lg, fontWeight: 600, textAlign: 'center', marginBottom: theme.spacing.lg }}>
          From disconnected systems to unified intelligence
        </p>
        <div className="landing-flow-grid" style={{ gap: 20 }}>
          <div>
            <p style={{ fontSize: theme.fontSize.xs, color: theme.colors.textMuted, fontWeight: 600, textTransform: 'uppercase', marginBottom: theme.spacing.sm }}>Your Systems Collect</p>
            {['Tee times', 'POS transactions', 'CRM records', 'Payroll hours', 'Email opens'].map((item) => (
              <div key={item} style={{ border: `1px solid ${theme.colors.borderLight}`, borderRadius: theme.radius.sm, padding: '8px', marginBottom: 8, fontSize: theme.fontSize.sm }}>{item}</div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: theme.colors.bgSidebar, color: theme.colors.textOnDark, borderRadius: theme.radius.md, padding: '16px', marginBottom: theme.spacing.md }}>
              <p style={{ fontSize: theme.fontSize.xs, color: theme.colors.ctaAccent, fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>Swoop Intelligence Layer</p>
              <div style={{ fontSize: theme.fontSize.sm, lineHeight: 1.8 }}>
                <p>Location data</p><p>Behavioral patterns</p><p>Cross-system correlation</p><p>AI prediction</p>
              </div>
            </div>
            <div style={{ fontSize: '32px', color: theme.colors.ctaAccent }}>&rarr;</div>
          </div>
          <div>
            <p style={{ fontSize: theme.fontSize.xs, color: theme.colors.textMuted, fontWeight: 600, textTransform: 'uppercase', marginBottom: theme.spacing.sm }}>Swoop Delivers</p>
            {[
              { label: 'Member health intelligence', color: theme.colors.lensMemberIntelligence },
              { label: 'Retention-prioritized waitlist', color: theme.colors.lensTeeSheetDemand },
              { label: 'F&B demand prediction', color: theme.colors.lensFbOperations },
              { label: 'Staffing gap alerts', color: theme.colors.lensStaffingLabor },
              { label: 'Revenue attribution', color: theme.colors.lensRevenuePipeline },
            ].map((item) => (
              <div key={item.label} style={{ borderLeft: `3px solid ${item.color}`, borderRadius: theme.radius.sm, padding: '8px 8px 8px 12px', marginBottom: 8, fontSize: theme.fontSize.sm, fontWeight: 500, background: theme.colors.bgCard }}>{item.label}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, background: theme.colors.bgCard, padding: 'clamp(18px, 4vw, 24px)', marginBottom: theme.spacing.lg }}>
        <p style={{ fontSize: theme.fontSize.sm, color: theme.colors.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: theme.spacing.md }}>28 Integrations Across 10 Categories</p>
        <div className="landing-grid-auto" style={{ gap: 12 }}>
          {integrationCategories.map((cat) => (
            <div key={cat.label} style={{ border: `1px solid ${theme.colors.borderLight}`, borderRadius: theme.radius.md, padding: '12px' }}>
              <p style={{ fontWeight: 600 }}>{cat.label}</p>
              <p style={{ color: theme.colors.textSecondary, fontFamily: theme.fonts.mono, fontSize: theme.fontSize.sm }}>{cat.systems} connected systems</p>
              <p style={{ color: theme.colors.textMuted, fontSize: theme.fontSize.sm, marginTop: 6 }}>{cat.vendors.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, background: theme.colors.bgDeep, padding: 'clamp(18px, 4vw, 24px)' }}>
        <p style={{ fontSize: theme.fontSize.sm, color: theme.colors.textMuted, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: theme.spacing.md }}>Rollout Timeline</p>
        <p style={{ fontSize: theme.fontSize.lg, marginBottom: theme.spacing.md }}>Typical launch: <span style={{ fontFamily: theme.fonts.mono }}>10 business days</span>.</p>
        <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.md }}>Week 1: connector setup, data validation, and intelligence baselines. Week 2: workflows, AI agent playbooks, and GM readiness.</p>
        <div style={{ borderRadius: theme.radius.sm, background: theme.colors.bgCard, padding: '12px', border: `1px solid ${theme.colors.border}` }}>
          <p style={{ fontFamily: theme.fonts.mono, fontWeight: 600 }}>No operational downtime.</p>
          <p style={{ color: theme.colors.textSecondary, fontSize: theme.fontSize.sm }}>Keep current systems active while Swoop comes online in parallel.</p>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─── */

function PricingCard({ tier }) {
  const isPopular = tier.badge === 'Most Popular';
  return (
    <article style={{
      background: theme.colors.bgCard, border: `1px solid ${isPopular ? theme.colors.ctaAccent : theme.colors.border}`,
      borderRadius: theme.radius.lg, padding: isPopular ? '26px 22px' : '22px',
      boxShadow: isPopular ? theme.shadow.lg : theme.shadow.sm, transform: isPopular ? 'translateY(-6px)' : 'none',
    }}>
      {isPopular && (
        <span style={{ display: 'inline-block', marginBottom: theme.spacing.sm, padding: '5px 10px', borderRadius: theme.radius.sm, background: `${theme.colors.ctaAccent}2B`, color: theme.colors.ctaAccentText, fontSize: theme.fontSize.sm, fontWeight: 700 }}>
          {tier.badge}
        </span>
      )}
      <h3 style={{ fontSize: theme.fontSize.xl, marginBottom: 6 }}>{tier.name}</h3>
      <p style={{ fontSize: theme.fontSize.xxl, margin: '0 0 4px', fontWeight: 700 }}>{tier.price}</p>
      {tier.priceAnchor && <p style={{ fontSize: theme.fontSize.sm, color: theme.colors.textMuted, margin: '0 0 10px' }}>{tier.priceAnchor}</p>}
      <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.md }}>{tier.description}</p>
      <ul style={{ margin: `0 0 ${theme.spacing.lg}`, paddingLeft: 18, color: theme.colors.textSecondary }}>
        {tier.features.map((f) => <li key={f} style={{ marginBottom: 8 }}>{f}</li>)}
      </ul>
      <button type="button" onClick={() => scrollToSection('demo-form')} style={{
        width: '100%', borderRadius: theme.radius.md, border: `1px solid ${isPopular ? theme.colors.ctaAccent : theme.colors.border}`,
        background: isPopular ? theme.colors.ctaAccent : theme.colors.bgCard, color: isPopular ? theme.colors.ctaAccentText : theme.colors.textPrimary,
        fontWeight: 700, fontFamily: theme.fonts.sans, fontSize: theme.fontSize.md, padding: '12px 14px', cursor: 'pointer',
      }}>
        {tier.cta}
      </button>
    </article>
  );
}

function PricingSection() {
  return (
    <section id="pricing" style={{ marginBottom: theme.spacing.xxl }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.sm }}>Simple pricing. No long-term contracts.</h2>
      <p style={{ color: theme.colors.textSecondary, marginBottom: theme.spacing.xl, fontSize: theme.fontSize.lg }}>Start free with your existing systems. Upgrade when you see the value.</p>
      <div className="landing-grid-3" style={{ alignItems: 'stretch' }}>
        {pricingTiers.map((tier) => <PricingCard key={tier.name} tier={tier} />)}
      </div>
    </section>
  );
}

/* ─── ROI Calculator ─── */

function RoiCalculatorSection() {
  const [members, setMembers] = useState(300);
  const [dues, setDues] = useState(8000);
  const [churn, setChurn] = useState(5);

  const atRisk = Math.round(members * (churn / 100));
  const annualLoss = atRisk * dues;
  const swoopSaves = Math.round(atRisk * 0.50);
  const recovered = swoopSaves * dues;
  const swoopProCost = 5988;
  const netGain = recovered - swoopProCost;
  const roiMultiple = recovered > 0 ? Math.round(recovered / swoopProCost) : 0;

  return (
    <section className="landing-section-padded" style={{
      margin: `${theme.spacing.xxl} 0`, borderRadius: theme.radius.xl,
      background: theme.colors.bgSidebar, color: theme.colors.bgCard, padding: '54px 28px',
    }}>
      <h2 style={{ fontSize: 'clamp(30px, 4vw, 46px)', marginBottom: theme.spacing.md, textAlign: 'center' }}>What is member turnover costing your club?</h2>
      <p style={{ color: `${theme.colors.bgCard}D9`, marginBottom: theme.spacing.xl, maxWidth: 780, fontSize: theme.fontSize.lg, textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
        Adjust the sliders to see your club&apos;s exposure &mdash; and what Swoop recovers.
      </p>
      <div className="landing-grid-2" style={{ gap: theme.spacing.xl, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.lg }}>
          {[
            { label: 'Total Members', value: members, set: setMembers, min: 100, max: 800 },
            { label: 'Avg Annual Dues', value: dues, set: setDues, min: 2000, max: 25000, step: 500, prefix: '$' },
            { label: 'Annual Turnover Rate', value: churn, set: setChurn, min: 1, max: 15, suffix: '%' },
          ].map((s) => (
            <div key={s.label}>
              <label style={{ display: 'flex', justifyContent: 'space-between', fontSize: theme.fontSize.sm, marginBottom: theme.spacing.sm, color: `${theme.colors.bgCard}B3` }}>
                <span>{s.label}</span>
                <span style={{ fontFamily: theme.fonts.mono, color: theme.colors.ctaAccent }}>{s.prefix || ''}{s.prefix ? s.value.toLocaleString() : s.value}{s.suffix || ''}</span>
              </label>
              <input type="range" min={s.min} max={s.max} step={s.step || 1} value={s.value} onChange={(e) => s.set(+e.target.value)} style={{ width: '100%', accentColor: theme.colors.ctaAccent }} />
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: theme.radius.lg, padding: theme.spacing.xl, display: 'flex', flexDirection: 'column', gap: theme.spacing.md }}>
          <div>
            <p style={{ fontSize: theme.fontSize.sm, color: `${theme.colors.bgCard}80` }}>Members at risk annually</p>
            <p style={{ fontFamily: theme.fonts.mono, fontSize: '32px', fontWeight: 700, color: theme.colors.urgent }}>{atRisk}</p>
          </div>
          <div>
            <p style={{ fontSize: theme.fontSize.sm, color: `${theme.colors.bgCard}80` }}>Annual revenue at risk</p>
            <p style={{ fontFamily: theme.fonts.mono, fontSize: '32px', fontWeight: 700, color: theme.colors.urgent }}>${annualLoss.toLocaleString()}</p>
          </div>
          <div style={{ paddingTop: theme.spacing.md, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: theme.fontSize.sm, color: `${theme.colors.bgCard}80` }}>Swoop projected saves (modeled at 40-65% early-intervention range)</p>
            <p style={{ fontSize: theme.fontSize.xs, color: `${theme.colors.bgCard}60`, marginTop: 4 }}>(based on membership organization research)</p>
            <p style={{ fontFamily: theme.fonts.mono, fontSize: '32px', fontWeight: 700, color: theme.colors.ctaAccent }}>{swoopSaves} members</p>
          </div>
          <div>
            <p style={{ fontSize: theme.fontSize.sm, color: `${theme.colors.bgCard}80` }}>Revenue recovered with Swoop</p>
            <p style={{ fontFamily: theme.fonts.mono, fontSize: '40px', fontWeight: 700, color: theme.colors.ctaAccent }}>${recovered.toLocaleString()}</p>
          </div>
          <div style={{ paddingTop: theme.spacing.md, marginTop: theme.spacing.sm, borderTop: `1px solid ${theme.colors.ctaAccent}40`, background: `${theme.colors.ctaAccent}10`, borderRadius: theme.radius.md, padding: theme.spacing.md }}>
            <p style={{ fontSize: theme.fontSize.sm, color: `${theme.colors.bgCard}80` }}>Swoop Pro annual cost</p>
            <p style={{ fontFamily: theme.fonts.mono, fontSize: '20px', fontWeight: 700, color: `${theme.colors.bgCard}CC` }}>-${swoopProCost.toLocaleString()}</p>
            <p style={{ fontSize: theme.fontSize.sm, color: `${theme.colors.bgCard}80`, marginTop: theme.spacing.sm }}>Net revenue gain</p>
            <p style={{ fontFamily: theme.fonts.mono, fontSize: '40px', fontWeight: 700, color: theme.colors.ctaAccent }}>${netGain.toLocaleString()}</p>
            <p style={{ color: `${theme.colors.ctaAccent}CC`, fontSize: theme.fontSize.sm, marginTop: theme.spacing.xs, fontWeight: 600 }}>{roiMultiple}&times; return on investment</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Social Proof ─── */

const socialIntegrations = ['Tee Sheet Platforms', 'Club Management Systems', 'POS & F&B', 'CRM & Email', 'Payroll & Scheduling', 'Finance & BI', 'Access Control', 'Web & Leads'];
const pillStyle = { display: 'inline-block', padding: '6px 14px', borderRadius: 999, background: theme.colors.bgCard, border: `1px solid ${theme.colors.border}`, fontSize: theme.fontSize.sm, fontWeight: 500 };

const metricCards = [
  { title: 'Early Warning System', metric: '6 days', subtitle: 'Average advance notice on at-risk members', description: 'Projected: Detected James Whitfield resignation risk 6 days before it happened by connecting POS spend decline, CRM complaint, and tee sheet pattern changes.' },
  { title: 'Waitlist Performance', metric: '91%', subtitle: 'Fill rate with retention-prioritized queue', description: 'Projected: Improved from 67% reactive fill rate by ranking waitlist members by retention value and match-fit, not just timestamp.' },
  { title: 'Revenue Per Slot', metric: '$312', subtitle: 'Average revenue per slot with intelligence', description: 'Projected: Increased from $187 reactive average by backfilling cancellations with high-engagement, high-F&B members first.' },
  { title: 'Dues at Risk Visibility', metric: '$1.38M', subtitle: 'Annual dues identified as at-risk in demo', description: 'Projected: 23 members flagged across health score decline, declining visits, unresolved complaints, and behavioral pattern changes.' },
];

function SocialProofSection() {
  return (
    <section style={{ marginBottom: theme.spacing.xxl }}>
      <div style={{ background: '#F3F4F6', borderRadius: theme.radius.lg, padding: '24px', marginBottom: theme.spacing.xl, textAlign: 'center' }}>
        <p style={{ fontWeight: 600, marginBottom: theme.spacing.md, color: theme.colors.textPrimary }}>Connects to the systems you already use</p>
        <ul className="landing-trust-strip" style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: theme.spacing.md }}>
          {socialIntegrations.map((c) => <li key={c} className="landing-trust-chip" style={pillStyle}>{c}</li>)}
        </ul>
        <p style={{ color: theme.colors.textMuted, fontSize: theme.fontSize.sm, margin: 0 }}>Live in under 2 weeks &middot; No rip-and-replace</p>
      </div>
      <div style={{ marginBottom: theme.spacing.xxl }}>
        <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.sm, textAlign: 'center' }}>What Swoop detects in a 300-member club</h2>
        <p style={{ color: theme.colors.textMuted, marginBottom: theme.spacing.xl, textAlign: 'center', maxWidth: 700, margin: `0 auto ${theme.spacing.xl}` }}>
          Metrics from the Pinetree CC demo environment (300 members, real system data). Founding partner case studies publishing Q2 2026.
        </p>
        <div className="landing-grid-2" style={{ gap: theme.spacing.lg }}>
          {metricCards.map((card) => (
            <article key={card.title} style={{ border: `1px solid ${theme.colors.border}`, borderLeft: `4px solid ${theme.colors.ctaAccent}`, borderRadius: theme.radius.lg, padding: '24px', background: theme.colors.bgCard }}>
              <p style={{ fontSize: theme.fontSize.sm, textTransform: 'uppercase', fontWeight: 600, color: theme.colors.textMuted, marginBottom: theme.spacing.xs }}>{card.title}</p>
              <p style={{ fontSize: '42px', fontWeight: 700, fontFamily: theme.fonts.mono, color: theme.colors.ctaAccent, marginBottom: theme.spacing.xs, lineHeight: 1 }}>{card.metric}</p>
              <p style={{ fontSize: theme.fontSize.md, fontWeight: 600, marginBottom: theme.spacing.sm, color: theme.colors.textPrimary }}>{card.subtitle}</p>
              <p style={{ fontSize: theme.fontSize.sm, color: theme.colors.textSecondary, lineHeight: 1.5 }}>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.md }}>Founding Partner Program</h2>
      <p style={{ color: theme.colors.textMuted, marginBottom: theme.spacing.lg }}>
        We&apos;re onboarding our first 10 clubs with hands-on implementation, direct roadmap input, and locked-in pricing. Be one of them.
      </p>
      <div className="landing-grid-3">
        {foundingPartnerBenefits.map((b) => (
          <article key={b.title} style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, padding: '20px', background: theme.colors.bgCard }}>
            <p style={{ fontSize: theme.fontSize.lg, marginBottom: theme.spacing.sm, fontWeight: 700 }}>{b.title}</p>
            <p style={{ color: theme.colors.textSecondary }}>{b.description}</p>
          </article>
        ))}
      </div>
      <div style={{ marginTop: theme.spacing.lg }}>
        <button onClick={() => scrollToSection('demo-form')} style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '12px 20px',
          borderRadius: theme.radius.md, background: theme.colors.ctaAccent, color: theme.colors.ctaAccentText,
          fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '16px',
        }}>
          Apply for Founding Partner
        </button>
        <p style={{ marginTop: theme.spacing.sm, color: theme.colors.textMuted, fontSize: theme.fontSize.sm }}>
          Limited founding partner spots &mdash; early clubs get direct roadmap input
        </p>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section style={{ marginBottom: theme.spacing.xxl }}>
      <h2 style={{ fontSize: theme.fontSize.xxl, marginBottom: theme.spacing.md }}>Frequently asked questions</h2>
      <div style={{ border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.lg, overflow: 'hidden', background: theme.colors.bgCard }}>
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question} style={{ borderBottom: i < faqItems.length - 1 ? `1px solid ${theme.colors.borderLight}` : 'none' }}>
              <button type="button" onClick={() => setOpenIndex(isOpen ? -1 : i)} aria-expanded={isOpen} style={{
                width: '100%', textAlign: 'left', border: 'none', padding: '16px 18px',
                background: isOpen ? theme.colors.bgDeep : theme.colors.bgCard, color: theme.colors.textPrimary,
                fontSize: theme.fontSize.md, fontFamily: theme.fonts.sans, fontWeight: 700, cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: theme.spacing.sm,
              }}>
                <span>{item.question}</span>
                <span style={{ color: theme.colors.textMuted, fontSize: theme.fontSize.lg }}>{isOpen ? '\u2212' : '+'}</span>
              </button>
              <div style={{ maxHeight: isOpen ? 400 : 0, overflow: 'hidden', transition: 'max-height 220ms ease' }}>
                <p style={{ margin: 0, padding: '0 18px 16px', color: theme.colors.textSecondary, lineHeight: 1.55 }}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Demo CTA ─── */

const DEMO_ENDPOINT = '/api/demo-request';

const inputStyle = {
  width: '100%', border: `1px solid ${theme.colors.border}`, borderRadius: theme.radius.md,
  padding: '12px 14px', fontSize: theme.fontSize.md, fontFamily: theme.fonts.sans,
  background: theme.colors.bgCard, color: theme.colors.textPrimary,
};

const demoButtonStyle = {
  minWidth: 180, height: 48, borderRadius: 8, fontFamily: theme.fonts.sans,
  fontWeight: 700, fontSize: '16px', padding: '0 24px', background: theme.colors.ctaAccent,
  color: theme.colors.ctaAccentText, border: '2px solid transparent', transition: 'background 150ms ease',
};

function DemoCtaSection() {
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    setFeedback('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch(DEMO_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.error || 'Submission failed. Please try again.');
      setStatus('success');
      setFeedback("Thanks! We'll reach out within 24 hours to schedule your walkthrough.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="demo-form" className="landing-section-padded" style={{
      margin: `${theme.spacing.xxl} 0`, borderRadius: theme.radius.xl,
      background: theme.colors.bgSidebar, color: theme.colors.bgCard, padding: '54px 28px',
    }}>
      <h2 style={{ fontSize: 'clamp(30px, 4vw, 46px)', marginBottom: theme.spacing.md }}>
        See what your club misses today and can recover tomorrow.
      </h2>
      <p style={{ color: `${theme.colors.bgCard}D9`, marginBottom: theme.spacing.sm, maxWidth: 780, fontSize: theme.fontSize.lg }}>
        Book a live walkthrough with your own operating scenarios: tee sheet leakage, at-risk members, F&amp;B staffing pressure, and revenue pipeline blind spots.
      </p>
      <p style={{ color: `${theme.colors.bgCard}D9`, marginBottom: theme.spacing.xl, maxWidth: 780 }}>
        Limited founding partner slots available &mdash; early clubs get hands-on onboarding and direct input on the roadmap.
      </p>
      <form onSubmit={handleSubmit} className="landing-grid-auto landing-demo-form" style={{ alignItems: 'end' }}>
        <label><span style={{ display: 'block', marginBottom: 6 }}>Name</span><input type="text" name="name" autoComplete="name" required style={inputStyle} /></label>
        <label><span style={{ display: 'block', marginBottom: 6 }}>Club</span><input type="text" name="club" autoComplete="organization" required style={inputStyle} /></label>
        <label><span style={{ display: 'block', marginBottom: 6 }}>Email</span><input type="email" name="email" autoComplete="email" required style={inputStyle} /></label>
        <label><span style={{ display: 'block', marginBottom: 6 }}>Phone</span><input type="tel" name="phone" autoComplete="tel" style={inputStyle} /></label>
        <button type="submit" className="landing-demo-submit"
          style={{ ...demoButtonStyle, cursor: status === 'submitting' ? 'wait' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1 }}
          disabled={status === 'submitting'}
          onMouseEnter={(e) => { if (status !== 'submitting') e.currentTarget.style.background = theme.colors.ctaAccentHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = theme.colors.ctaAccent; }}
        >
          {status === 'submitting' ? 'Submitting\u2026' : 'Book Your Demo'}
        </button>
      </form>
      {(status === 'success' || status === 'error') && feedback && (
        <p style={{ marginTop: theme.spacing.md, fontSize: theme.fontSize.sm, color: status === 'success' ? theme.colors.ctaAccent : theme.colors.urgent }} role="status">{feedback}</p>
      )}
      <p style={{ marginTop: theme.spacing.md, color: `${theme.colors.bgCard}D9`, fontSize: theme.fontSize.sm }}>No credit card required &middot; 30-minute walkthrough &middot; Cancel anytime</p>
      <p style={{ marginTop: theme.spacing.sm, color: `${theme.colors.bgCard}99`, fontSize: theme.fontSize.sm }}>
        Or email us directly: <a href="mailto:demo@swoopgolf.com" style={{ color: theme.colors.ctaAccent, textDecoration: 'underline' }}>demo@swoopgolf.com</a>
        {' \u00b7 '}Prefer to talk? <a href="tel:+14802259702" style={{ color: theme.colors.ctaAccent, textDecoration: 'underline' }}>(480) 225-9702</a>
      </p>
    </section>
  );
}

/* ─── Floating Demo CTA ─── */

function FloatingDemoCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => scrollToSection('demo-form')}
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        background: theme.colors.ctaAccent, color: '#FFFFFF',
        border: 'none', borderRadius: 12, padding: '14px 24px',
        fontWeight: 700, fontSize: '16px', fontFamily: theme.fonts.sans,
        cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
        transition: 'background 150ms ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = theme.colors.ctaAccentHover; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = theme.colors.ctaAccent; }}
    >
      Book a Demo &rarr;
    </button>
  );
}

/* ─── Main Landing Page ─── */

export default function LandingClient() {
  return (
    <div className="landing-page" style={pageWrap}>
      <LandingNav />
      <main style={container}>
        <HeroSection />
        <ProductPreview />
        <TrustStrip />
        <ProblemSection />
        <InlineCta />
        <CoreCapabilitiesSection />
        <InlineCta />
        <ComparisonSection />
        <AgentsSection />
        <IntegrationsSection />
        <PricingSection />
        <RoiCalculatorSection />
        <SocialProofSection />
        <FaqSection />
      </main>
      <div style={fullWidth}>
        <div style={{ ...container, maxWidth: 1300 }}>
          <DemoCtaSection />
        </div>
      </div>
      <FloatingDemoCta />
      <footer style={{
        borderTop: '1px solid #e4e4e7', padding: '32px clamp(16px, 4vw, 32px)',
        textAlign: 'center', color: '#6B7280', fontSize: '0.85rem',
        maxWidth: 1180, margin: '0 auto', width: '100%', boxSizing: 'border-box',
      }}>
        <div style={{ marginBottom: 8 }}>Swoop Golf &middot; Integrated Intelligence for Private Clubs</div>
      </footer>
    </div>
  );
}
