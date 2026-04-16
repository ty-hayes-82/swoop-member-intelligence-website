import { FileBarChart } from 'lucide-react';
import { theme } from '@/config/theme';
import { agents } from '@/landing/data';
import { SectionShell, Card, IconBadge } from '@/landing/ui';
import AgentsLiveDemo from './AgentsLiveDemo';

export default function AgentsSection() {
  return (
    <SectionShell
      id="agents"
      band="cream"
      eyebrow="FIX IT · CROSS-DOMAIN INTELLIGENCE"
      title="A real-time cockpit for your entire operation."
      subtitle="Swoop connects your existing systems to surface revenue leaks and draft exact actions for your approval. Watch it work:"
    >
      <AgentsLiveDemo />

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

      {/* Board Report — "Prove It" climax */}
      <div style={{
        marginTop: 16,
        background: '#FFFFFF',
        border: '2px solid rgba(243,146,45,0.35)',
        borderRadius: 16,
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        boxShadow: '0 4px 20px rgba(243,146,45,0.1)',
      }}>
        <div style={{
          flexShrink: 0, width: 48, height: 48,
          background: 'rgba(243,146,45,0.12)',
          borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <FileBarChart size={24} color={theme.colors.accent} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: theme.neutrals.ink, margin: '0 0 4px' }}>
            One-Click Board Reports
          </h3>
          <p style={{ fontSize: 14, color: theme.colors.textSecondary, margin: 0, lineHeight: 1.55 }}>
            Generate a 4-tab ROI report — dues protected, F&B recovered, labor saved — in one click. Every action Swoop recommended, with outcomes your board can read.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
