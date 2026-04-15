import { theme } from '@/config/theme';
import { Icon } from '@/landing/ui';

export default function InlineCta({ text = 'See how it works', targetId = 'demo-form', href }) {
  const onClick = href ? undefined : (event) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ textAlign: 'center', padding: '24px 0' }}>
      <a
        href={href || `#${targetId}`}
        onClick={href ? (() => { window.location.hash = href.startsWith('#/') ? href : href; }) : onClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          color: '#B8600E',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: 16,
          borderBottom: '2px solid #B8600E',
          paddingBottom: 4,
        }}
      >
        {text}
        <Icon name="ArrowRight" size={18} color="#B8600E" />
      </a>
    </div>
  );
}
