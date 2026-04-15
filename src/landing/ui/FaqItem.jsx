import { useState } from 'react';
import { theme } from '@/config/theme';

export default function FaqItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(17,17,17,0.1)',
        padding: '20px 0',
        background: open ? 'rgba(17,17,17,0.02)' : 'transparent',
        transition: 'background 150ms',
        borderRadius: open ? 4 : 0,
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          minHeight: 44,
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 19,
          fontWeight: 600,
          color: theme.neutrals.ink,
          width: '100%',
          background: 'none',
          border: 'none',
          padding: '0 4px 0 0',
          textAlign: 'left',
        }}
        aria-expanded={open}
      >
        <span style={{ paddingRight: 20 }}>{question}</span>
        <span
          style={{
            color: open ? '#6b7280' : theme.colors.accent,
            fontSize: 22,
            fontWeight: 300,
            flexShrink: 0,
            userSelect: 'none',
            lineHeight: 1,
            transition: 'color 150ms',
          }}
        >
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.65,
            color: theme.colors.textSecondary,
            margin: '12px 0 0',
            maxWidth: 760,
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}
