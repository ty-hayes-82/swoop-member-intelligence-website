import { useEffect, useState } from 'react';
import { theme } from '@/config/theme';
import { Icon } from '@/landing/ui';

const scenarios = [
  {
    agent: 'Labor Optimizer',
    iconName: 'UsersRound',
    signalLabel: 'Signal',
    signal: 'Sat lunch forecast · 95 covers vs 6 staff scheduled · 48hr window',
    action: 'Add 2 FOH shifts + alert chef to bump prep — GM approval required',
    impact: '$3,200',
    impactNote: 'Calculation: historical 18% walkout rate when cover-to-staff ratio exceeds 12:1 × avg $65 lunch cover × 95 covers',
    impactLabel: 'service failure avoided',
    confidence: 94,
    tone: 'labor',
  },
  {
    agent: 'Service Recovery',
    iconName: 'ChefHat',
    signalLabel: 'Signal',
    signal: 'Complaint aging 31d · no callback recorded · 30-day window breached',
    action: 'Draft GM callback script · flag for immediate follow-up',
    impact: '$22K',
    impactNote: 'Average annual dues value at a 300-member equity club ($8,400) × probability of non-renewal given unresolved complaint aging 30+ days',
    impactLabel: 'dues protected',
    confidence: 89,
    tone: 'service',
  },
  {
    agent: 'Member Health Score',
    iconName: 'UserRound',
    signalLabel: 'Signal',
    signal: 'Mark Henderson · rounds ↓42% · complaint unresolved 4d',
    action: 'Draft GM callback + 2-guest pass offer — one tap to approve',
    impact: '$8,400',
    impactNote: 'Annual dues value for a Silver-tier member at a 300-member private club',
    impactLabel: 'dues protected',
    confidence: 92,
    tone: 'member',
  },
  {
    agent: 'New Member Advisor',
    iconName: 'UserRound',
    signalLabel: 'Signal',
    signal: 'Kevin Harrington · Day 47 · 0 events · 1 round total · habit pattern: at risk',
    action: 'Draft welcome call + event invite before 90-day window closes',
    impact: '90-day',
    impactNote: 'New-member habit formation window: clubs that establish 3+ touchpoints in first 90 days see 4× higher 12-month retention rates',
    impactLabel: 'window still open',
    confidence: 93,
    tone: 'member',
  },
  {
    agent: 'Pace of Play Monitor',
    iconName: 'LineChart',
    signalLabel: 'Signal',
    signal: 'Hole 12 bottleneck · expected dining conversion dropping to 22% · Sat group 4',
    action: 'Dispatch beverage cart to group 4 · alert F&B to hold two tables — GM approval required',
    impact: '$31 / round',
    impactNote: 'Average post-round F&B spend lost per slow round: 19% dining conversion drop × $163 avg F&B check for a 4-player group (Pinetree CC Q1 2024)',
    impactLabel: 'dining revenue protected',
    confidence: 91,
    tone: 'revenue',
  },
  {
    agent: 'Engagement Advisor',
    iconName: 'RefreshCw',
    signalLabel: 'Signal',
    signal: '18 members · declining participation · 0 events attended YTD',
    action: 'Draft personal invite per member — GM reviews before anything sends',
    impact: '11 re-engaged',
    impactNote: '11 of 18 flagged members responded to personalized outreach within 14 days (Pinetree CC Q1 2024 pilot)',
    impactLabel: 'of 18 flagged',
    confidence: 86,
    tone: 'engagement',
  },
];

const CYCLE_MS = 4800;
const TYPE_MS = 14;

function useTypewriter(text, active) {
  const [visible, setVisible] = useState('');
  useEffect(() => {
    if (!active) {
      setVisible(text);
      return undefined;
    }
    setVisible('');
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setVisible(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, TYPE_MS);
    return () => clearInterval(id);
  }, [text, active]);
  return visible;
}

function timeLabel(offsetSec) {
  const d = new Date(Date.now() - offsetSec * 1000);
  const h = d.getHours().toString().padStart(2, '0');
  const m = d.getMinutes().toString().padStart(2, '0');
  const s = d.getSeconds().toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function AgentsLiveDemo() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(true); // default true = static on first paint

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches); // real value after mount — enables animation if motion is OK
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % scenarios.length), CYCLE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const current = scenarios[index];
  const typedSignal = useTypewriter(current.signal, !reduceMotion);

  // Feed = last 4 scenarios in reverse chronological order
  const feed = [0, 1, 2, 3].map((offset) => {
    const idx = (index - offset + scenarios.length) % scenarios.length;
    return { ...scenarios[idx], offsetSec: offset * 17 + 3, isNew: offset === 0 };
  });

  return (
    <>
    <div
      style={{
        background: theme.neutrals.ink,
        borderRadius: 22,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 28px 64px rgba(17,17,17,0.2)',
        color: '#FFFFFF',
        fontFamily: theme.fonts.sans,
      }}
    >
      {/* Titlebar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          background: 'rgba(255,255,255,0.03)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#B5956A',
              boxShadow: '0 0 0 0 rgba(181,149,106,0.7)',
              animation: reduceMotion ? 'none' : 'landing-pulse 2s infinite',
            }}
          />
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.04em' }}>
            LIVE · 6 INTELLIGENCE STREAMS
          </span>
        </div>
        <span
          style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.5)',
            fontFamily: theme.fonts.mono,
          }}
        >
          swoop.os / agents / stream
        </span>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.35fr)',
          gap: 0,
        }}
        className="landing-agents-demo-grid"
      >
        {/* Activity feed */}
        <div
          style={{
            borderRight: '1px solid rgba(255,255,255,0.08)',
            padding: '18px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            minHeight: 340,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: 4,
            }}
          >
            Activity feed
          </div>
          {feed.map((item, i) => (
            <div
              key={`${index}-${i}`}
              style={{
                display: 'flex',
                gap: 10,
                padding: '10px 12px',
                borderRadius: 10,
                background: item.isNew ? 'rgba(243,146,45,0.1)' : 'rgba(255,255,255,0.03)',
                border: item.isNew ? '1px solid rgba(243,146,45,0.35)' : '1px solid rgba(255,255,255,0.06)',
                opacity: 1 - i * 0.15,
                animation: reduceMotion || i !== 0 ? 'none' : 'landing-feed-in 420ms ease-out',
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Icon name={item.iconName} size={16} color={theme.colors.accent} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: '#FFFFFF' }}>{item.agent}</span>
                  <span
                    style={{
                      fontSize: 10,
                      color: 'rgba(255,255,255,0.4)',
                      fontFamily: theme.fonts.mono,
                    }}
                  >
                    {timeLabel(item.offsetSec)}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.45,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.signal}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Focused scenario */}
        <div
          key={index}
          style={{
            padding: '22px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            minHeight: 340,
            animation: reduceMotion ? 'none' : 'landing-scenario-in 500ms ease-out',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'rgba(243,146,45,0.15)',
                  border: '1px solid rgba(243,146,45,0.35)',
                }}
              >
                <Icon name={current.iconName} size={20} color={theme.colors.accent} />
              </span>
              <div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Agent
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, color: '#FFFFFF' }}>{current.agent}</div>
              </div>
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: theme.colors.accent,
                padding: '6px 10px',
                borderRadius: 999,
                background: 'rgba(243,146,45,0.15)',
                border: '1px solid rgba(243,146,45,0.35)',
                fontFamily: theme.fonts.mono,
              }}
            >
              {current.confidence}% CONFIDENCE
            </div>
          </div>

          {/* Signal */}
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              borderLeft: `3px solid ${theme.colors.accent}`,
              borderRadius: 10,
              padding: '12px 14px',
              background: 'rgba(255,255,255,0.03)',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                marginBottom: 6,
              }}
            >
              Detected signal
            </div>
            <div
              style={{
                fontSize: 14,
                color: '#FFFFFF',
                fontFamily: theme.fonts.mono,
                lineHeight: 1.5,
                minHeight: 42,
              }}
            >
              {typedSignal}
              {!reduceMotion && typedSignal.length < current.signal.length && (
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 14,
                    background: theme.colors.accent,
                    marginLeft: 2,
                    verticalAlign: 'middle',
                    animation: 'landing-blink 1s infinite',
                  }}
                />
              )}
            </div>
          </div>

          {/* Recommended action */}
          <div
            style={{
              background: 'rgba(243,146,45,0.08)',
              border: '1px solid rgba(243,146,45,0.3)',
              borderRadius: 10,
              padding: '14px 16px',
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: theme.colors.accent,
                textTransform: 'uppercase',
                marginBottom: 6,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Icon name="ArrowRight" size={12} color={theme.colors.accent} />
              Recommended action
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#FFFFFF', lineHeight: 1.4 }}>
              {current.action}
            </div>
          </div>

          {/* Impact */}
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: 12,
              paddingTop: 8,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              marginTop: 'auto',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  marginBottom: 2,
                }}
              >
                Projected impact
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>
                {current.impactLabel}
              </div>
            </div>
            <div
              title={current.impactNote}
              style={{
                fontSize: 32,
                fontWeight: 800,
                fontFamily: theme.fonts.mono,
                color: theme.colors.accent,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                cursor: current.impactNote ? 'help' : 'default',
                borderBottom: current.impactNote ? '1px dashed rgba(243,146,45,0.5)' : 'none',
              }}
            >
              {current.impact}
            </div>
          </div>
        </div>
      </div>

      {/* Scenario pager */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          justifyContent: 'center',
          padding: '14px 20px 18px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {scenarios.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show scenario ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? 28 : 8,
              height: 8,
              borderRadius: 999,
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              background: i === index ? theme.colors.accent : 'rgba(255,255,255,0.2)',
              transition: 'width 300ms ease, background 300ms ease',
            }}
          />
        ))}
      </div>
    </div>

    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', textAlign: 'center', marginTop: 24, fontStyle: 'italic', background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '8px 16px', display: 'inline-block', margin: '24px auto 0', width: 'fit-content' }}>
      Dollar values reflect actual outcomes from the Pinetree CC Q3 2023 founding-partner deployment (300-member club, 90 days). Service failure formula: 30 at-risk covers × $106 avg dining ticket = $3,180 (rounded to $3.2K); based on 18% walkout rate at 12:1 cover-to-staff ratio. Pace of Play $31/round: 19% dining conversion drop × $163 avg F&B check for a 4-player group = $30.97. Member Health Score values reflect average annual dues at a 300-member equity club.
    </p>
    <div style={{ textAlign: 'center', marginTop: 16 }}>
      <p style={{ fontSize: 17, color: theme.colors.textSecondary, margin: '0 0 16px' }}>
        These six intelligence streams run 24/7 for every member. Want to see them working for your club?
      </p>
      <a href="#/contact" onClick={() => { window.location.hash = '#/contact'; }}
        style={{ display: 'inline-block', background: '#F3922D', color: '#1B1814', fontWeight: 700, fontSize: 16, padding: '14px 32px', borderRadius: 8, textDecoration: 'none' }}>
        Book the 30-Minute Walkthrough →
      </a>
    </div>
    </>
  );
}
