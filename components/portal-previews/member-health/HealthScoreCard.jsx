'use client'

/**
 * HealthScoreCard - Individual member health score display
 * Extracted from member portal: /data/swoop-member-portal/src/features/member-health/
 * Adapted for marketing website with Tailwind CSS
 */

export default function HealthScoreCard({ 
  memberName,
  score,
  archetype,
  riskSignal,
  annualValue,
  status = 'watch' // 'healthy' | 'watch' | 'at-risk' | 'critical'
}) {
  const statusStyles = {
    healthy: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      scoreBg: 'bg-green-100',
      scoreText: 'text-green-800',
      badge: 'bg-green-500'
    },
    watch: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      scoreBg: 'bg-blue-100',
      scoreText: 'text-blue-800',
      badge: 'bg-blue-500'
    },
    'at-risk': {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      scoreBg: 'bg-orange-100',
      scoreText: 'text-orange-800',
      badge: 'bg-orange-500'
    },
    critical: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      scoreBg: 'bg-red-100',
      scoreText: 'text-red-800',
      badge: 'bg-red-500'
    }
  };

  const styles = statusStyles[status] || statusStyles.watch;

  // Archetype badge colors
  const archetypeColors = {
    'Pillar Member': 'bg-purple-100 text-purple-800',
    'Social Member': 'bg-pink-100 text-pink-800',
    'Weekend Warrior': 'bg-blue-100 text-blue-800',
    'Family Champion': 'bg-green-100 text-green-800',
    'VIP Executive': 'bg-gray-800 text-white',
    'Balanced Active': 'bg-orange-100 text-orange-800',
    'Ghost Member': 'bg-gray-200 text-gray-600'
  };

  const archetypeBadge = archetypeColors[archetype] || 'bg-gray-100 text-gray-800';

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-lg p-4 hover:shadow-md transition-all`}>
      {/* Header with score */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 truncate mb-1">
            {memberName}
          </h4>
          <span className={`${archetypeBadge} text-xs px-2 py-1 rounded-full inline-block`}>
            {archetype}
          </span>
        </div>
        <div className={`${styles.scoreBg} ${styles.scoreText} text-2xl font-bold font-mono px-3 py-2 rounded-lg`}>
          {score}
        </div>
      </div>

      {/* Risk signal */}
      {riskSignal && (
        <div className="text-xs text-gray-600 mb-2">
          <span className="font-semibold">Primary signal:</span> {riskSignal}
        </div>
      )}

      {/* Annual value */}
      {annualValue && (
        <div className="text-xs text-gray-500">
          ${annualValue.toLocaleString()}/yr in dues
        </div>
      )}

      {/* Status indicator dot */}
      <div className="mt-3 pt-3 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className={`${styles.badge} w-2 h-2 rounded-full`}></div>
          <span className="text-xs text-gray-600 font-medium capitalize">
            {status.replace('-', ' ')}
          </span>
        </div>
      </div>
    </div>
  );
}
