'use client'

/**
 * DailyBriefingDemo - Complete demo of Daily Briefing alerts
 * Shows 3 live alert cards with demo data from Oakmont Hills CC
 */

import AlertCard from './AlertCard';

export default function DailyBriefingDemo({ onAlertClick }) {
  const alerts = [
    {
      id: 'james-whitfield',
      priority: 'P0',
      confidence: 87,
      urgency: 'urgent',
      emoji: '⚠',
      title: 'Member Needs Attention — Preventable Resignation In Progress',
      memberName: 'James Whitfield',
      memberArchetype: 'Balanced Active',
      annualValue: 18000,
      metrics: [
        { label: 'Complaint filed', value: 'Jan 16', alert: true },
        { label: 'Follow-up status', value: 'Not resolved', alert: true },
        { label: 'How unhappy', value: 'Very unhappy', alert: true },
        { label: 'Resign risk by', value: 'Jan 22', alert: true }
      ],
      context: 'GPS showed James stopped visiting the Grill Room after Jan 12. Grill Room short-staffed Jan 16 — 40-minute wait for lunch. He filed a complaint that evening. We acknowledged it, no one followed up. He hasn\'t been back in 6 days. At risk of resigning by Jan 22.',
      recommendation: {
        action: 'Personal call from GM + complimentary round offer + F&B recovery gesture',
        owner: 'General Manager',
        dueBy: 'By end of day Jan 17',
        proofMetric: '$18K/yr dues retained, satisfaction confirmed'
      }
    },
    {
      id: 'pace-of-play',
      priority: 'P1',
      confidence: 93,
      urgency: 'warning',
      emoji: '⏱',
      title: 'Pace-of-Play Bottleneck Detected',
      memberName: 'Hole 12 Operations',
      memberArchetype: 'Slow Saturday Pattern',
      annualValue: 31000,
      metrics: [
        { label: 'Avg pace today', value: '4h 42min', alert: true },
        { label: 'Target pace', value: '4h 10min', alert: false },
        { label: 'Bottleneck hole', value: '#12 Par 4', alert: true },
        { label: 'Revenue at risk', value: '$31K/yr', alert: true }
      ],
      context: 'Hole 12 consistently runs 18 minutes slow on Saturdays. This creates cascading delays across afternoon slots. Historical data shows members who experience 2+ slow rounds reduce their play frequency by 23 percent over the next 90 days.',
      recommendation: {
        action: 'Deploy ranger to Hole 12 between 10:30 AM - 1:00 PM on Saturdays',
        owner: 'Director of Golf',
        dueBy: 'Implement next Saturday',
        proofMetric: 'Pace improves to <4h 20min, member satisfaction scores increase'
      }
    },
    {
      id: 'health-cluster',
      priority: 'P2',
      confidence: 76,
      urgency: 'warning',
      emoji: '📊',
      title: 'Member Health At-Risk Cluster',
      memberName: '8 Members',
      memberArchetype: 'Declining Engagement',
      annualValue: 144000,
      metrics: [
        { label: 'At-risk members', value: '8 total', alert: true },
        { label: 'Health score', value: '<40/100', alert: true },
        { label: 'Common signal', value: 'Engagement ↓', alert: true },
        { label: 'Combined value', value: '$144K/yr', alert: true }
      ],
      context: 'Identified 8 members with declining engagement patterns: fewer visits, reduced F&B spending, no event RSVPs in 45+ days. All show similar behavioral markers that precede resignations.',
      recommendation: {
        action: 'Send personalized recovery message via Swoop app + upcoming event invitation',
        owner: 'Membership Director',
        dueBy: 'Before 12:00 PM today',
        proofMetric: '2-3 recovery touches sent via Swoop app, response tracked'
      }
    }
  ];

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="mb-6">
        <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
          ⚡ Real-Time Cockpit
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Where is today breaking?
        </h2>
        <p className="text-gray-600">
          Live alerts from AI analysis across all five lenses
        </p>
      </div>

      {/* Alert Cards */}
      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          {...alert}
          onClick={() => onAlertClick?.(alert)}
        />
      ))}

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong className="text-gray-900">Live from the portal:</strong> These are actual components from the GM dashboard, not screenshots. The same intelligence that powers the platform — now previewed on the marketing site.
        </p>
      </div>
    </div>
  );
}
