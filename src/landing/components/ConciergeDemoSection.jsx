import { useState, useEffect, useRef, useCallback } from 'react';
import { theme } from '@/config/theme';

// ─── DATA ────────────────────────────────────────────────────────────────────

const PERSONAS = {
  james: {
    id: 'james',
    name: 'James Whitfield',
    first: 'James',
    avatar: 'JW',
    label: 'Active',
    labelColor: '#16a34a',
    chipBg: 'rgba(22,163,74,0.08)',
    chipBorder: 'rgba(22,163,74,0.3)',
    detail: 'Full Golf · $18K revenue',
    messages: [
      { role: 'member', text: 'Book my usual Saturday 7 AM with the guys' },
      { role: 'ai',     text: 'You got it, James! Saturday 4/19 at 7am on North Course, 4 players confirmed. See you bright and early. Want me to grab your usual post-round booth?' },
      { role: 'member', text: 'Yes, booth 12 please' },
      { role: 'ai',     text: "Done! Booth 12 reserved for 10am. Chef's running the short rib special this weekend. You're all set." },
    ],
    gmNote: 'Swoop drafted this response. Your GM approved in 2 seconds.',
  },
  anne: {
    id: 'anne',
    name: 'Anne Jordan',
    first: 'Anne',
    avatar: 'AJ',
    label: 'At-Risk',
    labelColor: '#B45309',
    chipBg: 'rgba(180,83,9,0.08)',
    chipBorder: 'rgba(180,83,9,0.3)',
    detail: 'Full Golf · flagged for churn',
    messages: [
      { role: 'member', text: "Why can't I get a Saturday tee time? I've tried three times this month." },
      { role: 'ai',     text: "Anne, I'm really sorry, that's incredibly frustrating. Let me look into this right now. You've been blocked out by shotgun starts on two of those Saturdays. I've flagged this for your Head Pro and held a 9am slot next Saturday. Does that work?" },
      { role: 'member', text: 'Yes that works, thank you' },
      { role: 'ai',     text: "Confirmed, Saturday 4/19 at 9am. I've also asked the Head Pro to reach out to make this right. See you on the course!" },
    ],
    gmNote: 'Swoop flagged Anne as at-risk. Your GM reviewed and approved in 4 seconds.',
  },
  robert: {
    id: 'robert',
    name: 'Robert Callahan',
    first: 'Robert',
    avatar: 'RC',
    label: 'Unhappy',
    labelColor: '#DC2626',
    chipBg: 'rgba(220,38,38,0.08)',
    chipBorder: 'rgba(220,38,38,0.3)',
    detail: 'Corporate · declining usage',
    messages: [
      { role: 'member', text: 'Nobody ever follows up on anything here. I filed a complaint two weeks ago and heard nothing.' },
      { role: 'ai',     text: "Robert, I hear you, that's completely unacceptable. I just pulled up your March 14th complaint about the dining service. It was never routed to the F&B Director. I've escalated it now and marked it urgent. You'll hear back from management by tomorrow. I'm sorry this fell through the cracks." },
      { role: 'member', text: 'I appreciate that. Thank you.' },
      { role: 'ai',     text: "Of course. Your feedback matters, and it's exactly how we get better. I'll follow up with you directly once the F&B Director responds." },
    ],
    gmNote: 'Swoop surfaced this complaint in the morning queue. Your GM escalated in one tap.',
  },
};

const PERSONA_ORDER = ['james', 'anne', 'robert'];

// ─── TYPING DOTS ─────────────────────────────────────────────────────────────

function TypingDots() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', animation: 'concierge-bubble-ai 200ms ease-out' }}>
      <div style={{
        background: '#3A3A3C',
        borderRadius: '18px 18px 18px 4px',
        padding: '12px 16px',
        display: 'flex',
        gap: 5,
        alignItems: 'center',
      }}>
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: 6, height: 6,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.5)',
            animation: `concierge-typing-dot 1.2s ease-in-out ${i * 0.18}s infinite`,
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── TYPEWRITER BUBBLE ────────────────────────────────────────────────────────

function TypewriterBubble({ text, onDone }) {
  const [showDots, setShowDots] = useState(true);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let cancelled = false;

    const dotTimer = setTimeout(() => {
      if (cancelled) return;
      setShowDots(false);
      let i = 0;
      const interval = setInterval(() => {
        if (cancelled) { clearInterval(interval); return; }
        i += 2;
        const next = Math.min(i, text.length);
        setDisplayed(text.slice(0, next));
        if (next >= text.length) {
          clearInterval(interval);
          if (!cancelled) onDone();
        }
      }, 14);
    }, 420);

    return () => {
      cancelled = true;
      clearTimeout(dotTimer);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps — run once on mount

  if (showDots) return <TypingDots />;

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', animation: 'concierge-bubble-ai 200ms ease-out' }}>
      <div style={{
        background: '#3A3A3C',
        color: 'rgba(255,255,255,0.92)',
        borderRadius: '18px 18px 18px 4px',
        padding: '10px 14px',
        maxWidth: '85%',
        fontSize: 14,
        lineHeight: 1.5,
        fontFamily: theme.fonts.sans,
        wordBreak: 'break-word',
      }}>
        {displayed}
        {displayed.length < text.length && (
          <span style={{
            display: 'inline-block',
            width: 2,
            height: '0.9em',
            background: 'rgba(255,255,255,0.6)',
            marginLeft: 2,
            verticalAlign: 'text-bottom',
            animation: 'landing-blink 1s step-end infinite',
          }} />
        )}
      </div>
    </div>
  );
}

// ─── PERSONA CHIP ─────────────────────────────────────────────────────────────

function PersonaChip({ persona, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      className="concierge-persona-chip"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '10px 18px',
        borderRadius: 999,
        border: `1.5px solid ${isActive ? persona.chipBorder : 'rgba(17,17,17,0.12)'}`,
        background: isActive ? persona.chipBg : 'transparent',
        cursor: 'pointer',
        transition: 'all 150ms',
        boxShadow: isActive ? `0 0 0 1.5px ${persona.chipBorder}` : 'none',
        fontFamily: 'inherit',
      }}
    >
      <span style={{
        width: 26, height: 26, borderRadius: '50%',
        background: '#F3922D',
        color: '#FFFFFF',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 10, fontWeight: 800,
        fontFamily: theme.fonts.mono,
        flexShrink: 0,
      }}>
        {persona.avatar}
      </span>
      <span style={{
        fontSize: 13, fontWeight: 700,
        color: isActive ? '#1B1814' : '#6b7280',
        whiteSpace: 'nowrap',
      }}>
        {persona.name}
      </span>
      <span style={{
        fontSize: 10, fontWeight: 700,
        color: persona.labelColor,
        background: persona.chipBg,
        border: `1px solid ${persona.chipBorder}`,
        borderRadius: 999,
        padding: '2px 8px',
        whiteSpace: 'nowrap',
      }}>
        {persona.label}
      </span>
    </button>
  );
}

// ─── GM BRIDGE PANEL ─────────────────────────────────────────────────────────

function GmBridgePanel({ persona, visible }) {
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : 'translateY(8px)',
      transition: 'opacity 600ms ease, transform 600ms ease',
      pointerEvents: visible ? 'auto' : 'none',
      marginTop: 16,
      background: 'rgba(243,146,45,0.07)',
      border: '1px solid rgba(243,146,45,0.22)',
      borderRadius: 12,
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
    }}>
      {/* GM avatar with checkmark */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: '#1B1814',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 10, fontWeight: 800, color: '#F3922D',
          fontFamily: theme.fonts.mono,
        }}>
          GM
        </div>
        <div style={{
          position: 'absolute', bottom: -2, right: -2,
          width: 12, height: 12, borderRadius: '50%',
          background: '#16a34a',
          border: '2px solid #FFFFFF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: 7, color: '#FFFFFF', lineHeight: 1 }}>✓</span>
        </div>
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: '0 0 2px', fontSize: 10, fontWeight: 700, color: '#B8600E', textTransform: 'uppercase', letterSpacing: '0.10em', fontFamily: theme.fonts.mono }}>
          Swoop Drafted · GM Approved
        </p>
        <p style={{ margin: '0 0 4px', fontSize: 13, color: '#1B1814', fontWeight: 600 }}>
          {persona.gmNote}
        </p>
        <p style={{ margin: '0 0 2px', fontSize: 11, color: '#9CA3AF', fontFamily: theme.fonts.mono }}>
          Swoop drafted &rsaquo; GM reviewed &rsaquo; Sent to {persona.first}
        </p>
        <p style={{ margin: 0, fontSize: 11, color: '#B8600E', lineHeight: 1.4 }}>
          Every preference, complaint, and booking appended to {persona.first}'s session — the concierge remembers everything, from day one through year ten.
        </p>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function ConciergeDemoSection() {
  const [activePersona, setActivePersona] = useState('james');
  const [visibleIndices, setVisibleIndices] = useState([]);
  const [typingIndex, setTypingIndex] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true); // default true until JS runs

  const sequenceRef = useRef(0); // increments on each persona change to cancel stale callbacks
  const scrollRef = useRef(null);

  const persona = PERSONAS[activePersona];

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener?.('change', handler);
    return () => mq.removeEventListener?.('change', handler);
  }, []);

  // Start/restart animation sequence on persona or reduceMotion change
  useEffect(() => {
    const seq = ++sequenceRef.current;

    setVisibleIndices([]);
    setTypingIndex(null);
    setIsComplete(false);

    if (reduceMotion) {
      setVisibleIndices([0, 1, 2, 3]);
      setIsComplete(true);
      return;
    }

    const t1 = setTimeout(() => {
      if (sequenceRef.current !== seq) return;
      setVisibleIndices([0]);

      const t2 = setTimeout(() => {
        if (sequenceRef.current !== seq) return;
        setTypingIndex(1);
      }, 900);

      return () => clearTimeout(t2);
    }, 600);

    return () => { clearTimeout(t1); };
  }, [activePersona, reduceMotion]);

  // Auto-scroll message list to bottom when new content appears
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIndices, typingIndex]);

  // Called by TypewriterBubble when its typing animation finishes
  const handleTypingDone = useCallback((doneIndex) => {
    const seq = sequenceRef.current;
    if (doneIndex === 1) {
      setVisibleIndices(prev => (prev.includes(1) ? prev : [...prev, 1]));
      setTypingIndex(null);
      const t = setTimeout(() => {
        if (sequenceRef.current !== seq) return;
        setVisibleIndices(prev => (prev.includes(2) ? prev : [...prev, 2]));
        const t2 = setTimeout(() => {
          if (sequenceRef.current !== seq) return;
          setTypingIndex(3);
        }, 800);
        return () => clearTimeout(t2);
      }, 1200);
      return () => clearTimeout(t);
    }
    if (doneIndex === 3) {
      setVisibleIndices(prev => (prev.includes(3) ? prev : [...prev, 3]));
      setTypingIndex(null);
      setIsComplete(true);
    }
  }, []);

  const handlePersonaClick = (id) => {
    if (id !== activePersona) setActivePersona(id);
  };

  return (
    <section style={{ background: '#FFFFFF', padding: 'clamp(48px, 6vw, 80px) clamp(20px, 4vw, 40px)', borderTop: '1px solid rgba(17,17,17,0.07)', borderBottom: '1px solid rgba(17,17,17,0.07)' }}>

      {/* Injected keyframes */}
      <style>{`
        @keyframes concierge-bubble-member {
          from { opacity: 0; transform: translateX(10px) scale(0.97); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes concierge-bubble-ai {
          from { opacity: 0; transform: translateX(-10px) scale(0.97); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes concierge-typing-dot {
          0%, 60%, 100% { opacity: 0.2; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
        @media (max-width: 480px) {
          .concierge-persona-chip { padding: 8px 12px !important; }
          .concierge-persona-chip span:last-child { display: none; }
        }
      `}</style>

      <div className="landing-container" style={{ maxWidth: 640 }}>

        {/* Section header */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#B8600E', textAlign: 'center', marginBottom: 8 }}>
          Member Experience
        </p>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800, color: '#1B1814', textAlign: 'center', margin: '0 0 10px', lineHeight: 1.2 }}>
          What your members actually see.
        </h2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 15, maxWidth: '52ch', marginInline: 'auto', marginBottom: 32, lineHeight: 1.6 }}>
          The concierge handles bookings, complaints, and questions by text. Your GM approves every response in seconds. Members just feel heard.
        </p>

        {/* Persona chips */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          {PERSONA_ORDER.map(id => (
            <PersonaChip
              key={id}
              persona={PERSONAS[id]}
              isActive={activePersona === id}
              onClick={() => handlePersonaClick(id)}
            />
          ))}
        </div>

        {/* Phone mockup */}
        <div style={{ maxWidth: 360, margin: '0 auto' }}>
          <div style={{
            background: '#111111',
            borderRadius: 36,
            border: '1px solid rgba(17,17,17,0.14)',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.1)',
          }}>

            {/* Phone header */}
            <div style={{
              background: '#1C1C1E',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              padding: '14px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: '#F3922D',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: '#FFFFFF',
                fontFamily: theme.fonts.mono,
                flexShrink: 0,
              }}>
                {persona.avatar}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#FFFFFF', lineHeight: 1.2 }}>{persona.name}</p>
                <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.3 }}>Swoop AI Concierge</p>
              </div>
              <span style={{
                fontSize: 9, fontFamily: theme.fonts.mono, color: 'rgba(255,255,255,0.35)',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 4, padding: '3px 7px',
                whiteSpace: 'nowrap', flexShrink: 0,
              }}>
                Powered by Swoop
              </span>
            </div>

            {/* Message list */}
            <div
              ref={scrollRef}
              style={{
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                minHeight: 260,
                maxHeight: 300,
                overflowY: 'auto',
                background: '#111111',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {/* Committed visible messages */}
              {visibleIndices.map(idx => {
                const msg = persona.messages[idx];
                const isMember = msg.role === 'member';
                return (
                  <div key={`${activePersona}-${idx}`} style={{
                    display: 'flex',
                    justifyContent: isMember ? 'flex-end' : 'flex-start',
                    animation: isMember ? 'concierge-bubble-member 240ms ease-out' : 'concierge-bubble-ai 240ms ease-out',
                  }}>
                    <div style={{
                      background: isMember ? '#248A3D' : '#3A3A3C',
                      color: 'rgba(255,255,255,0.95)',
                      borderRadius: isMember ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                      padding: '10px 14px',
                      maxWidth: '85%',
                      fontSize: 14,
                      lineHeight: 1.5,
                      fontFamily: theme.fonts.sans,
                      wordBreak: 'break-word',
                    }}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}

              {/* Currently typing AI bubble */}
              {typingIndex !== null && !visibleIndices.includes(typingIndex) && (
                <TypewriterBubble
                  key={`${activePersona}-typing-${typingIndex}`}
                  text={persona.messages[typingIndex].text}
                  onDone={() => handleTypingDone(typingIndex)}
                />
              )}
            </div>

            {/* Phone footer / fake input */}
            <div style={{
              background: '#1C1C1E',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              padding: '10px 14px 16px',
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: 20,
                padding: '9px 16px',
                fontSize: 13,
                color: 'rgba(255,255,255,0.25)',
                fontFamily: theme.fonts.sans,
              }}>
                Message
              </div>
              <p style={{ margin: '8px 0 0', textAlign: 'center', fontSize: 10, fontFamily: theme.fonts.mono, color: 'rgba(255,255,255,0.2)' }}>
                Powered by Swoop AI
              </p>
            </div>
          </div>

          {/* GM Bridge Panel */}
          <GmBridgePanel persona={persona} visible={isComplete} />
        </div>

        {/* Section CTA */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 14, lineHeight: 1.6 }}>
            Every text your members receive. Every response your GM approves. All in one platform.
          </p>
          <a
            href="#/contact"
            onClick={(e) => { e.preventDefault(); window.location.hash = '#/contact'; }}
            style={{
              display: 'inline-block',
              background: '#F3922D', color: '#1B1814',
              fontWeight: 700, fontSize: 15,
              padding: '13px 28px',
              borderRadius: 8, textDecoration: 'none',
            }}
          >
            See It Running at Your Club →
          </a>
          <p style={{ margin: '10px 0 0', fontSize: 12, color: '#9CA3AF' }}>
            No contracts · No credit card · 30 minutes
          </p>
        </div>

      </div>
    </section>
  );
}
