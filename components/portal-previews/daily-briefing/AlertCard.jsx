'use client'

/**
 * AlertCard - Live portal preview component
 * Extracted from member portal: /data/swoop-member-portal/src/features/daily-briefing/
 * Adapted for marketing website with Tailwind CSS
 */

export default function AlertCard({ 
  priority = 'P0',
  confidence = 87,
  title,
  memberName,
  memberArchetype,
  annualValue,
  urgency = 'urgent', // 'urgent' | 'warning' | 'info'
  metrics = [],
  context,
  recommendation,
  onClick,
  emoji = '⚠'
}) {
  const urgencyStyles = {
    urgent: {
      bg: 'bg-red-50',
      border: 'border-red-300',
      badge: 'bg-red-100 text-red-800',
      text: 'text-red-700',
      heading: 'text-red-900'
    },
    warning: {
      bg: 'bg-orange-50',
      border: 'border-orange-300',
      badge: 'bg-orange-100 text-orange-800',
      text: 'text-orange-700',
      heading: 'text-orange-900'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-300',
      badge: 'bg-blue-100 text-blue-800',
      text: 'text-blue-700',
      heading: 'text-blue-900'
    }
  };

  const styles = urgencyStyles[urgency] || urgencyStyles.warning;

  return (
    <div 
      className={`${styles.bg} ${styles.border} border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg`}
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className={`${styles.badge} text-xs uppercase tracking-wider font-bold inline-block px-3 py-1 rounded-full mb-2`}>
            {emoji} {title}
          </div>
          <h3 className={`text-xl font-semibold ${styles.heading} mb-1`}>
            {memberName} <span className="text-gray-600 font-normal">· {memberArchetype}</span>
          </h3>
          <p className="text-sm text-gray-600">
            ${annualValue.toLocaleString()}/yr in dues
          </p>
        </div>
        <div className="text-right text-sm text-gray-500 flex flex-col items-end gap-1">
          <span className={`${styles.badge} text-xs font-bold px-2 py-1 rounded`}>
            {priority}
          </span>
          <span className="text-xs text-gray-500">
            {confidence}% confidence
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
              <div className={`text-sm font-bold ${metric.alert ? styles.text : 'text-gray-900'}`}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Context */}
      {context && (
        <div className="text-sm text-gray-700 leading-relaxed mb-4">
          <strong className="text-gray-900">What happened: </strong>
          {context}
        </div>
      )}

      {/* Recommendation */}
      {recommendation && (
        <div className="bg-white rounded-lg p-4 border-2 border-gray-200">
          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">
            💡 Recommended Action
          </div>
          <div className="text-sm text-gray-900 font-medium mb-2">
            {recommendation.action}
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-gray-600">
            <div>
              <span className="font-semibold">Owner:</span> {recommendation.owner}
            </div>
            <div>
              <span className="font-semibold">Due:</span> {recommendation.dueBy}
            </div>
          </div>
          {recommendation.proofMetric && (
            <div className="text-xs text-gray-500 mt-2 pt-2 border-t border-gray-200">
              <span className="font-semibold">Proof metric:</span> {recommendation.proofMetric}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
