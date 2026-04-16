import { theme } from '@/config/theme';
import { agents } from '@/landing/data';
import { SectionShell, Card, IconBadge } from '@/landing/ui';
import AgentsLiveDemo from './AgentsLiveDemo';

export default function AgentsSection() {
  return (
    <SectionShell
      id="agents"
      band="cream"
      eyebrow="FIX IT · LAYER 3 INTELLIGENCE"
      title="Zero blind spots across your entire operation."
      subtitle="Incumbent systems are siloed — your POS doesn't talk to your tee sheet, and your tee sheet doesn't know what members order in the dining room. Swoop sits above them. It correlates historical habits with real-time signals from your existing stack — whether you use Jonas, ForeTees, Northstar, or Club Prophet — to find the cross-domain patterns single-system vendors physically cannot see. Watch it draft a specific, human-reviewable playbook:"
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
            <strong>GM Approval Required.</strong> Agents analyze and draft — they never act without your explicit sign-off. One tap to approve, and Swoop automatically routes the action to the right department head or drafts the intervention into your outbox. Full audit logs and a 5-minute undo window keep you in total command.
          </p>
        </div>
        <div style={{
          background: 'rgba(17,17,17,0.04)',
          border: '1px solid rgba(17,17,17,0.08)',
          borderRadius: 10, padding: '14px 20px',
          display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>⚡</span>
          <p style={{ fontSize: 15, color: theme.neutrals.ink, margin: 0, lineHeight: 1.55 }}>
            <strong>Instant Execution.</strong> Once you tap approve, Swoop automatically routes the action to the right department head — or drafts the intervention email directly into your outbox. Zero back-and-forth. Invisible to your members.
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
