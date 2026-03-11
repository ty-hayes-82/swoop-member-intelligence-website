'use client'

/**
 * HealthScoreGrid - Member health score distribution display
 * Shows the Early Warning System in action with real portal styling
 */

import HealthScoreCard from './HealthScoreCard';

export default function HealthScoreGrid({ showAll = false }) {
  const members = [
    // Critical (score < 30)
    {
      memberName: 'Michael Patterson',
      score: 24,
      archetype: 'Pillar Member',
      riskSignal: 'No rounds in 45 days, 3 missed events',
      annualValue: 22000,
      status: 'critical'
    },
    {
      memberName: 'Sarah Chen',
      score: 27,
      archetype: 'Social Member',
      riskSignal: 'Dining spend down 67%, no clubhouse visits',
      annualValue: 18000,
      status: 'critical'
    },
    {
      memberName: 'Robert Morrison',
      score: 29,
      archetype: 'VIP Executive',
      riskSignal: 'Email engagement 0%, complaint filed Jan 8',
      annualValue: 28000,
      status: 'critical'
    },

    // At Risk (30-39)
    {
      memberName: 'James Whitfield',
      score: 31,
      archetype: 'Balanced Active',
      riskSignal: 'Complaint filed Jan 16, not resolved',
      annualValue: 18000,
      status: 'at-risk'
    },
    {
      memberName: 'Linda Thompson',
      score: 34,
      archetype: 'Weekend Warrior',
      riskSignal: 'Round frequency down 40% vs last quarter',
      annualValue: 16000,
      status: 'at-risk'
    },
    {
      memberName: 'David Park',
      score: 36,
      archetype: 'Family Champion',
      riskSignal: 'Family bookings stopped, kids not playing',
      annualValue: 24000,
      status: 'at-risk'
    },
    {
      memberName: 'Jennifer Martinez',
      score: 38,
      archetype: 'Social Member',
      riskSignal: 'Event RSVPs down, dining solo only',
      annualValue: 19000,
      status: 'at-risk'
    },
    {
      memberName: 'Thomas Wilson',
      score: 39,
      archetype: 'Pillar Member',
      riskSignal: 'Rounds down 30%, no F&B spend in 2 weeks',
      annualValue: 21000,
      status: 'at-risk'
    },

    // Watch (40-59)
    {
      memberName: 'Emily Rodriguez',
      score: 42,
      archetype: 'Weekend Warrior',
      riskSignal: 'Slight engagement decline, monitoring',
      annualValue: 17000,
      status: 'watch'
    },
    {
      memberName: 'Christopher Lee',
      score: 48,
      archetype: 'Balanced Active',
      riskSignal: 'Round pace slower than preference',
      annualValue: 18000,
      status: 'watch'
    },
    {
      memberName: 'Amanda Foster',
      score: 53,
      archetype: 'Social Member',
      riskSignal: 'Normal activity, slight F&B decrease',
      annualValue: 19500,
      status: 'watch'
    },
    {
      memberName: 'Daniel Cooper',
      score: 56,
      archetype: 'Family Champion',
      riskSignal: 'Stable engagement, event attendance variable',
      annualValue: 23000,
      status: 'watch'
    }
  ];

  // Filter to show fewer cards if showAll is false
  const displayMembers = showAll ? members : members.slice(0, 8);

  // Calculate totals
  const criticalCount = members.filter(m => m.status === 'critical').length;
  const atRiskCount = members.filter(m => m.status === 'at-risk').length;
  const watchCount = members.filter(m => m.status === 'watch').length;
  const totalValue = members.reduce((sum, m) => sum + m.annualValue, 0);
  const atRiskValue = members
    .filter(m => m.status === 'critical' || m.status === 'at-risk')
    .reduce((sum, m) => sum + m.annualValue, 0);

  return (
    <div className="space-y-6">
      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
          <div className="text-3xl font-bold text-red-900 font-mono">{criticalCount}</div>
          <div className="text-sm text-red-700 font-semibold">Critical</div>
          <div className="text-xs text-red-600 mt-1">Immediate action</div>
        </div>
        <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-4">
          <div className="text-3xl font-bold text-orange-900 font-mono">{atRiskCount}</div>
          <div className="text-sm text-orange-700 font-semibold">At Risk</div>
          <div className="text-xs text-orange-600 mt-1">This week</div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <div className="text-3xl font-bold text-blue-900 font-mono">{watchCount}</div>
          <div className="text-sm text-blue-700 font-semibold">Watch</div>
          <div className="text-xs text-blue-600 mt-1">Monitoring</div>
        </div>
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
          <div className="text-2xl font-bold text-gray-900">${(atRiskValue/1000).toFixed(0)}K</div>
          <div className="text-sm text-gray-700 font-semibold">At Risk</div>
          <div className="text-xs text-gray-600 mt-1">Annual dues</div>
        </div>
      </div>

      {/* Section Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Early Warning System
        </h3>
        <p className="text-gray-600">
          Real-time member health scores across {members.length} members — sorted by risk
        </p>
      </div>

      {/* Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMembers.map((member, idx) => (
          <HealthScoreCard key={idx} {...member} />
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong className="text-gray-900">Live portal components:</strong> These health score cards are extracted directly from the member portal UI. The same visual system that GMs use daily — now showcased on the marketing site.
        </p>
      </div>
    </div>
  );
}
