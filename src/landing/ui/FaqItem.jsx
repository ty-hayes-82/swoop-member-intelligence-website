import { theme } from '@/config/theme';

export default function FaqItem({ question, answer, defaultOpen = false }) {
  return (
    <details
      open={defaultOpen}
      style={{
        borderBottom: '1px solid rgba(17,17,17,0.1)',
        padding: '20px 0',
      }}
    >
      <summary
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          listStyle: 'none',
          WebkitListStyle: 'none',
          minHeight: 44,
          fontFamily: "'Fraunces', Georgia, serif",
          fontSize: 19,
          fontWeight: 600,
          color: theme.neutrals.ink,
          paddingRight: 4,
        }}
      >
        <span style={{ paddingRight: 20 }}>{question}</span>
        <span
          className="faq-toggle-icon"
          style={{
            color: theme.colors.accent,
            fontSize: 22,
            fontWeight: 300,
            flexShrink: 0,
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          +
        </span>
      </summary>
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
    </details>
  );
}
