import { theme } from '@/config/theme';
import { agents } from '@/landing/data';
import { SectionShell, Card, IconBadge } from '@/landing/ui';
import AgentsLiveDemo from './AgentsLiveDemo';

export default function AgentsSection() {
  return (
    <SectionShell
      id="agents"
      band="cream"
      eyebrow="Agents"
      title="Six AI agents working your club — live."
      subtitle="Watch what the agents surface, recommend, and protect in real time. This panel auto-cycles through real scenarios from the Swoop OS."
    >
      <AgentsLiveDemo />

      <div style={{ marginTop: 32, maxWidth: 600, marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{
          background: 'rgba(243,146,45,0.08)',
          border: '1px solid rgba(243,146,45,0.25)',
          borderRadius: 10, padding: '14px 20px',
          display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>🛡️</span>
          <p style={{ fontSize: 15, color: theme.neutrals.ink, margin: 0, lineHeight: 1.55 }}>
            <strong>GM Approval Required.</strong> Agents analyze and draft — they never text or email a member without your explicit sign-off. Every recommended action requires one tap to approve or dismiss.
          </p>
        </div>
        <div style={{
          background: 'rgba(17,17,17,0.04)',
          border: '1px solid rgba(17,17,17,0.08)',
          borderRadius: 10, padding: '14px 20px',
          display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>👤</span>
          <p style={{ fontSize: 15, color: theme.neutrals.ink, margin: 0, lineHeight: 1.55 }}>
            <strong>Invisible to your members.</strong> Swoop works entirely behind the scenes — no member-facing app, no member logins, no changes to how members interact with your club. Your members never know it's running.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: 40,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {agents.map((agent) => (
          <Card key={agent.name} interactive padded={false} style={{ padding: 18, gap: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
            <IconBadge name={agent.icon} tone="orange" />
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, margin: '2px 0 4px', color: theme.neutrals.ink }}>
                {agent.name}
              </h3>
              <p style={{ color: theme.colors.textSecondary, fontSize: 14, lineHeight: 1.55, margin: 0 }}>
                {agent.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
