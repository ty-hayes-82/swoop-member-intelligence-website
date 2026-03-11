'use client'

/**
 * IntelligenceScoreGauge - Data coverage indicator
 * Extracted from member portal: /data/swoop-member-portal/src/features/integrations/
 * Shows the 57/100 Intelligence Score with color coding
 */

export default function IntelligenceScoreGauge({ 
  score = 57, 
  connectedSystems = 6,
  totalSystems = 10,
  dataPointsSynced = 3720
}) {
  // Score thresholds match portal logic
  const getScoreColor = (score) => {
    if (score < 40) return { bg: 'bg-red-100', text: 'text-red-800', ring: 'ring-red-400', label: 'Limited Coverage', emoji: '🔴' };
    if (score < 70) return { bg: 'bg-yellow-100', text: 'text-yellow-800', ring: 'ring-yellow-400', label: 'Good Coverage', emoji: '🟡' };
    return { bg: 'bg-green-100', text: 'text-green-800', ring: 'ring-green-400', label: 'Excellent Coverage', emoji: '🟢' };
  };

  const colorScheme = getScoreColor(score);

  // Calculate arc percentage for visual gauge
  const percentage = score;
  const radius = 80;
  const circumference = radius * Math.PI; // Half circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-8">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Intelligence Score
        </h3>
        <p className="text-sm text-gray-600">
          Data coverage across all five lenses
        </p>
      </div>

      {/* Gauge Visual */}
      <div className="flex flex-col items-center mb-6">
        <div className="relative w-48 h-24">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Colored arc based on score */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={colorScheme.text.replace('text-', '#').replace('-800', '')}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000"
            />
          </svg>
          {/* Center score */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <div className="text-5xl font-bold font-mono text-gray-900">
              {score}
            </div>
            <div className="text-lg text-gray-500 font-medium">
              / 100
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className={`${colorScheme.bg} ${colorScheme.text} px-4 py-2 rounded-full text-sm font-semibold mt-4`}>
          {colorScheme.emoji} {colorScheme.label}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold font-mono text-gray-900">
            {connectedSystems}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Connected
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold font-mono text-gray-900">
            {totalSystems}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Available
          </div>
        </div>
        <div className="text-center p-3 bg-gray-50 rounded-lg">
          <div className="text-2xl font-bold font-mono text-gray-900">
            {(dataPointsSynced / 1000).toFixed(1)}K
          </div>
          <div className="text-xs text-gray-600 mt-1">
            Data points
          </div>
        </div>
      </div>

      {/* Connected systems list */}
      <div className="border-t border-gray-200 pt-4">
        <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-3">
          Connected Systems
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { name: 'ForeTees', icon: '⛳', status: 'connected' },
            { name: 'Clubessential POS', icon: '🧾', status: 'connected' },
            { name: 'Jonas Club CRM', icon: '👥', status: 'connected' },
            { name: 'HubSpot', icon: '✉️', status: 'connected' },
            { name: 'ADP Workforce', icon: '📅', status: 'connected' },
            { name: 'QuickBooks', icon: '📊', status: 'connected' },
            { name: 'Club Caddie', icon: '⛳', status: 'available' },
            { name: 'Northstar POS', icon: '🧾', status: 'available' },
            { name: 'Mailchimp', icon: '✉️', status: 'available' },
            { name: 'Club Prophet', icon: '📊', status: 'available' }
          ].map((system, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2 text-xs p-2 rounded ${
                system.status === 'connected' 
                  ? 'bg-green-50 text-green-800' 
                  : 'bg-gray-50 text-gray-500'
              }`}
            >
              <span>{system.icon}</span>
              <span className="font-medium truncate">{system.name}</span>
              {system.status === 'connected' && (
                <span className="ml-auto">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer explainer */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-xs text-gray-700 leading-relaxed">
          <strong className="text-gray-900">How it works:</strong> Intelligence Score measures how much of your club's operational data flows into Swoop. Higher scores mean richer insights, earlier warnings, and more precise member health predictions.
        </p>
      </div>
    </div>
  );
}
