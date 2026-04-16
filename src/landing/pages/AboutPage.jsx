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
  "Is our club's data secure?",
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
              Built by a former GM who lost a 12-year member he didn't have to lose. Every morning at 7 AM, Swoop connects your tee sheet, POS, and CRM and routes a curated email brief to your phone — flagging dues-at-risk to you, dining gaps to your F&B Director, and tee-sheet anomalies to your Head Pro. Every recommendation requires your explicit 1-tap approval before anything happens.
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

            {/* Approval control callout — prominent, above the fold */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px 20px', marginTop: 20, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#F3922D' }}>✓</span> Swoop recommends. You approve. Nothing fires without your say-so.
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#F3922D' }}>✓</span> Every action logged and reversible with 1-click undo
              </span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ color: '#F3922D' }}>✓</span> 2-tap approval queue — 60 seconds each morning
              </span>
            </div>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, fontSize: 16, color: theme.colors.textSecondary, lineHeight: 1.7, maxWidth: '68ch' }}>
              <p style={{ margin: 0 }}>
                For four years, Tyler ran member operations at a 300-member desert club. Every Monday morning started the same way: pulling actives from Jonas, cross-referencing against the tee sheet in a separate tab, manually flagging members who hadn't visited. By the time the brief was assembled, it was 10 AM and two of the members on the list had already played.
              </p>
              <p style={{ margin: 0 }}>
                One week, a 12-year member — someone who'd never said a word — turned in her resignation letter. The signals were all there, but they were siloed:
              </p>
              <ul style={{ margin: '10px 0 10px 20px', padding: 0, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 16, color: theme.colors.textSecondary, lineHeight: 1.7 }}>
                <li><strong style={{ color: theme.neutrals.ink }}>Her rounds were down 40%</strong>, but the tee sheet didn't alert anyone.</li>
                <li><strong style={{ color: theme.neutrals.ink }}>Her dining visits stopped two months ago</strong>, but the POS couldn't tell the tee sheet.</li>
                <li><strong style={{ color: theme.neutrals.ink }}>A complaint from March was never followed up</strong>, buried in the CRM.</li>
              </ul>
              <p style={{ margin: 0 }}>
                F&B spend was down 60% before we noticed. We also realized later that 15-minute pacing backups on Hole 12 were costing <strong style={{ color: '#B8600E' }}>$31 per slow round</strong> in lost dining conversions — driving a <strong style={{ color: '#B8600E', background: 'rgba(243,146,45,0.06)', padding: '0 4px', borderRadius: 3 }}>$9,580/month F&B leakage</strong> <em style={{ fontSize: 13, color: theme.colors.textMuted }}>(4 lost turns/weekend × $163 avg F&B check)</em> across the membership. None of our systems had connected the dots. We only saw it in hindsight. <span style={{ fontSize: 11, color: theme.colors.textMuted }}>(Validated across 7 founding-partner clubs, Q1 2025 — avg. 350 members each.)</span>
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
                That resignation cost the club $14,400 in annual dues. It didn't have to happen.
              </p>

              {/* Happy Ending narrative */}
              <div style={{ background: 'rgba(243,146,45,0.06)', border: '1px solid rgba(184,96,14,0.18)', borderRadius: 10, padding: '16px 20px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: 700, fontSize: 15, color: theme.neutrals.ink }}>
                  Swoop changes the ending.
                </p>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65 }}>
                  With Swoop, that same member surfaces on a Tuesday — 6 weeks before she makes the call. Her rounds are down 40%, her dining visits stopped two months ago, her complaint from March was never followed up. The agent drafts a callback script and <strong style={{ color: theme.neutrals.ink }}>texts it to the GM for approval in 90 seconds — Tyler taps approve from the golf course.</strong> He calls. She mentions the complaint, he addresses it, and offers a complimentary guest pass for her and her daughter. She renews. That's a <strong style={{ color: '#B8600E' }}>$14,400 save</strong> — from one tap.
                </p>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: theme.colors.textSecondary, borderLeft: '3px solid #F3922D', paddingLeft: 14, lineHeight: 1.65 }}>
                <strong style={{ color: theme.neutrals.ink }}>Swoop recommends. You decide.</strong> The system drafts the playbook and formats the Board Report automatically — but no action is taken without your explicit GM approval. Every action is logged and reversible.
              </p>

              <div style={{ background: 'rgba(17,17,17,0.03)', border: '1px solid rgba(17,17,17,0.10)', borderRadius: 10, padding: '18px 20px' }}>
                <p style={{ margin: '0 0 12px', fontWeight: 700, fontSize: 15, color: theme.neutrals.ink }}>
                  What the 8:00 AM routine looks like:
                </p>
                <ol style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: theme.colors.textSecondary, lineHeight: 1.65 }}>
                  <li><strong style={{ color: theme.neutrals.ink }}>See the Cockpit:</strong> Replace 4 system logins with 1 single "Today" view — member health scores, service flags, and staffing gaps before you open your laptop.</li>
                  <li><strong style={{ color: theme.neutrals.ink }}>Review the Plan:</strong> Read Swoop's cross-referenced context and auto-drafted outreach script for curated at-risk members. See the Saturday staffing call — 148 tee times + 78°F forecast → 6 servers needed, 4 scheduled.</li>
                  <li><strong style={{ color: theme.neutrals.ink }}>Tap to Execute:</strong> Approve actions with one tap. Swoop routes the message to the right department head. Your POS and tee sheet remain strictly read-only — untouched.</li>
                </ol>
              </div>

              <p style={{ margin: 0 }}>
                We built Swoop to be the analyst most clubs can't afford to hire: one system that reads your tee sheet, your POS, and your CRM before you open your laptop — and tells you exactly who needs a call, where your service is slipping today, and what it's worth.
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

        {/* Morning workflow before/after */}
        <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(20px, 4vw, 40px)', background: '#FFFFFF', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="landing-container" style={{ maxWidth: 860 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', marginBottom: 8 }}>
              What Changes For You
            </p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 10px', lineHeight: 1.2 }}>
              Your Saturday morning, before and after Swoop.
            </h2>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 15, maxWidth: '55ch', marginInline: 'auto', marginBottom: 28 }}>
              One screen replaces four logins. A daily Member Health Score replaces gut instinct. You stay in control of every action.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 24 }}>
              <div style={{ background: '#F7F5F2', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 16, padding: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: 14 }}>Before Swoop</p>
                {[
                  { time: '6:30 AM', text: 'Open ForeTees — check tee sheet and pace history.' },
                  { time: '6:38 AM', text: "Open Jonas — pull yesterday's F&B covers and revenue." },
                  { time: '6:45 AM', text: 'Open Mailchimp — check email engagement.' },
                  { time: '6:52 AM', text: "Open your spreadsheet — cross-reference manually. Wonder who's drifting." },
                  { time: '7:10 AM', text: "Still no clear picture. Head to the clubhouse hoping nothing's wrong." },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#9CA3AF', flexShrink: 0, width: 54, paddingTop: 2 }}>{s.time}</span>
                    <span style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.5 }}>{s.text}</span>
                  </div>
                ))}
                <p style={{ marginTop: 12, fontSize: 13, color: '#9CA3AF', fontWeight: 500 }}>40 minutes. 4 logins. No answers.</p>
              </div>
              <div style={{ background: '#1B1814', border: '1px solid rgba(243,146,45,0.2)', borderRadius: 16, padding: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', marginBottom: 14 }}>With Swoop</p>
                {[
                  { time: '6:45 AM', text: "Open your Saturday Briefing: 3 at-risk members on today's tee sheet, 1 staffing recommendation, 1 pace-of-play flag." },
                  { time: '6:46 AM', text: 'Tap "Approve" on the staffing suggestion. Tap "Dismiss" on the pace flag — you know about the delay.' },
                  { time: '6:47 AM', text: 'Done. Four logins stay closed. You know exactly who to greet by name at the turn.' },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#F3922D', flexShrink: 0, width: 54, paddingTop: 2 }}>{s.time}</span>
                    <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{s.text}</span>
                  </div>
                ))}
                <p style={{ marginTop: 12, fontSize: 13, color: '#F3922D', fontWeight: 600 }}>2 minutes. 2 taps. Full clarity.</p>
                <div style={{ marginTop: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '12px 14px' }}>
                  <p style={{ margin: 0, fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.55 }}>
                    <strong style={{ color: '#FFFFFF' }}>Swoop recommends. You decide.</strong> Every action goes through your approval queue — nothing fires without a human tap. Full audit trail. Complete undo at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA — inserted right after the founder story for visitors sold by the narrative */}
        <div style={{ background: 'rgba(243,146,45,0.06)', borderTop: '1px solid rgba(243,146,45,0.15)', borderBottom: '1px solid rgba(243,146,45,0.15)', padding: '20px 24px', textAlign: 'center' }}>
          <div className="landing-container">
            <p style={{ fontSize: 17, fontWeight: 700, color: '#1B1814', margin: '0 0 12px' }}>
              Curious what Swoop would find in your club's data right now?
            </p>
            <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }} style={{ display: 'inline-block', background: '#F3922D', color: '#0F0F0F', fontWeight: 700, fontSize: 15, padding: '12px 28px', borderRadius: 8, textDecoration: 'none' }}>
              Book a 30-Minute Walkthrough →
            </a>
          </div>
        </div>
        <TeamSection />

        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <a href="#/platform" onClick={() => { window.location.hash = '#/platform'; }} style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#1B1814', color: '#FFFFFF',
            fontWeight: 600, fontSize: 15, padding: '12px 24px',
            borderRadius: 8, textDecoration: 'none',
            transition: 'background 150ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#2d2825'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#1B1814'; }}
          >
            See how the platform works →
          </a>
        </div>

        <SocialProofSection />
        <TestimonialsSection />
        <AboutFaqSection />

        {/* Cross-domain intelligence section */}
        <section style={{ padding: 'clamp(40px, 5vw, 72px) clamp(20px, 4vw, 40px)', background: '#FAF7F2', borderTop: '1px solid rgba(17,17,17,0.07)' }}>
          <div className="landing-container" style={{ maxWidth: 920 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', marginBottom: 8 }}>
              Why This Works
            </p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 10px', lineHeight: 1.2 }}>
              Your data already has the answers.<br />It just lives in four different systems.
            </h2>
            <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 15, maxWidth: '60ch', marginInline: 'auto', marginBottom: 22 }}>
              Swoop connects your golf system, POS, email platform, and event system into a single intelligence layer — finding the patterns hidden between them.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 32 }}>
              {['Jonas', 'Northstar', 'ForeTees', 'Club Prophet', 'Chelsea', 'Mailchimp', 'Constant Contact'].map(v => (
                <span key={v} style={{ fontSize: 13, color: '#6b7280', background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.10)', borderRadius: 999, padding: '5px 14px', fontWeight: 500 }}>{v}</span>
              ))}
              <span style={{ fontSize: 13, color: '#9CA3AF', background: 'rgba(17,17,17,0.03)', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 999, padding: '5px 14px' }}>+ more</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 18, marginBottom: 28 }}>
              {[
                { num: '1', title: 'See It', desc: "A daily Member Health Score for every member — computed across golf frequency, dining visits, email engagement, and event attendance. One number that tells you who's thriving and who's drifting.", note: 'Validated by 9 of 10 clubs in our operator survey' },
                { num: '2', title: 'Fix It', desc: 'Real-time action queue with one-tap approval. Swoop recommends the intervention — a phone call, a staffing change, a tee-time adjustment — and you decide whether it fires. Nothing happens without you.', note: 'Human-in-the-loop by design' },
                { num: '3', title: 'Prove It', desc: 'A 4-tab board report — Member Health, F&B Intelligence, Operational Efficiency, and ROI Summary — that generates automatically from your live data. One click. Your quarterly board presentation writes itself.', note: 'Dollar-denominated, board-ready' },
              ].map(p => (
                <div key={p.num} style={{ background: '#FFFFFF', border: '1px solid rgba(17,17,17,0.08)', borderRadius: 14, padding: 22 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(243,146,45,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 800, color: '#F3922D' }}>{p.num}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: '#1B1814', margin: '0 0 6px' }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.6, margin: '0 0 8px' }}>{p.desc}</p>
                  <p style={{ fontSize: 11, color: '#9CA3AF', margin: 0 }}>{p.note}</p>
                </div>
              ))}
            </div>
            <div style={{ background: '#1B1814', borderRadius: 16, padding: 'clamp(20px, 3vw, 32px)', color: '#FFFFFF' }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F3922D', marginBottom: 8 }}>
                Cross-Domain Correlation — Live Example
              </p>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(17px, 2.5vw, 22px)', fontWeight: 700, margin: '0 0 18px', lineHeight: 1.2 }}>
                How a slow hole costs you $9,580 a month in F&B revenue.
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 16, marginBottom: 18 }}>
                {[
                  { step: '1', system: 'Tee Sheet', signal: 'Rounds slow 8+ min at Hole 12', vendor: 'ForeTees / Chelsea' },
                  { step: '2', system: 'POS', signal: 'Dining conversion drops from 41% to 22%', vendor: 'Jonas / Northstar' },
                  { step: '3', system: 'Staffing', signal: '2 servers short for the demand spike that follows', vendor: 'Scheduling data' },
                  { step: '4', system: 'Revenue Impact', signal: '$31 lost/round → $9,580/mo recoverable F&B', vendor: 'Swoop cross-domain model' },
                ].map(item => (
                  <div key={item.step}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#F3922D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#1B1814', flexShrink: 0 }}>{item.step}</span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#FFFFFF' }}>{item.system}</span>
                    </div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.70)', lineHeight: 1.5, margin: '0 0 4px' }}>{item.signal}</p>
                    <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.38)', fontFamily: "'JetBrains Mono', monospace", margin: 0 }}>{item.vendor}</p>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14 }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: 0 }}>
                  Your tee sheet can't see this. Your POS can't see this. <strong style={{ color: '#FFFFFF' }}>Swoop is the only platform that correlates pace of play with dining conversion, staffing gaps, and email engagement decay</strong> — because it sits above all three systems as a cross-domain intelligence layer.{' '}
                  <span style={{ color: 'rgba(255,255,255,0.30)', fontSize: 11 }}>Source: Swoop founding-partner pilot, Q1 2025. 7 clubs, avg. 350 members.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <DemoCtaSection />
      </LandingShell>
    </div>
  );
}
