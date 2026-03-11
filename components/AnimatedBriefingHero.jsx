'use client'

/**
 * AnimatedBriefingHero - Cycling Daily Briefing alerts for hero section
 * Rotates through 3 key alerts with fade-in/out transitions
 */

import { useState, useEffect } from 'react';
import AlertCard from './portal-previews/daily-briefing/AlertCard';

export default function AnimatedBriefingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const alerts = [
    {
      id: 'james-whitfield',
      priority: 'P0',
      confidence: 87,
      urgency: 'urgent',
      emoji: '⚠️',
      title: 'Member Needs Attention',
      memberName: 'James Whitfield',
      memberArchetype: 'Balanced Active',
      annualValue: 18000,
      metrics: [
        { label: 'Complaint filed', value: 'Jan 16', alert: true },
        { label: 'Follow-up status', value: 'Not resolved', alert: true },
        { label: 'Resign risk by', value: 'Jan 22', alert: true },
        { label: 'Member value', value: '$18K/yr', alert: true }
      ],
      context: 'GPS showed James stopped visiting the Grill Room after Jan 12. He filed a complaint Jan 16 — no follow-up. At risk of resigning by Jan 22.',
      recommendation: {
        action: 'Personal call from GM + recovery gesture',
        owner: 'General Manager',
        dueBy: 'End of day Jan 17',
        proofMetric: '$18K/yr dues retained'
      }
    },
    {
      id: 'pace-of-play',
      priority: 'P1',
      confidence: 93,
      urgency: 'warning',
      emoji: '⏱️',
      title: 'Pace-of-Play Bottleneck',
      memberName: 'Hole 12 Operations',
      memberArchetype: 'Saturday Pattern',
      annualValue: 31000,
      metrics: [
        { label: 'Avg pace today', value: '4h 42min', alert: true },
        { label: 'Target pace', value: '4h 10min', alert: false },
        { label: 'Bottleneck hole', value: '#12 Par 4', alert: true },
        { label: 'Revenue at risk', value: '$31K/yr', alert: true }
      ],
      context: 'Hole 12 runs 18min slow on Saturdays. Members who experience 2+ slow rounds reduce play frequency by 23% over next 90 days.',
      recommendation: {
        action: 'Deploy ranger to Hole 12 (10:30 AM - 1:00 PM Saturdays)',
        owner: 'Director of Golf',
        dueBy: 'Next Saturday',
        proofMetric: 'Pace improves to <4h 20min'
      }
    },
    {
      id: 'health-cluster',
      priority: 'P2',
      confidence: 76,
      urgency: 'warning',
      emoji: '📊',
      title: 'At-Risk Member Cluster',
      memberName: '8 Members',
      memberArchetype: 'Declining Engagement',
      annualValue: 144000,
      metrics: [
        { label: 'At-risk members', value: '8 total', alert: true },
        { label: 'Health score', value: '<40/100', alert: true },
        { label: 'Common signal', value: 'Engagement ↓', alert: true },
        { label: 'Combined value', value: '$144K/yr', alert: true }
      ],
      context: '8 members with declining engagement: fewer visits, reduced F&B spending, no event RSVPs in 45+ days. Similar behavioral markers that precede resignations.',
      recommendation: {
        action: 'Send personalized recovery message + event invitation',
        owner: 'Membership Director',
        dueBy: 'Before 12:00 PM today',
        proofMetric: '2-3 recovery touches sent, response tracked'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // Wait for fade-out, then change content
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % alerts.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [alerts.length]);

  return (
    <div className="relative">
      {/* Live Demo Badge */}
      <div className="absolute -top-3 left-4 z-10">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-bold text-green-800 shadow-lg border-2 border-green-200">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          LIVE DEMO
        </span>
      </div>

      {/* Animated Alert Card Container */}
      <div 
        className={`transition-all duration-500 ${
          isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden">
          <AlertCard {...alerts[currentIndex]} />
        </div>
      </div>

      {/* Cycle Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {alerts.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(idx);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex 
                ? 'w-8 bg-green-500' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`View alert ${idx + 1}`}
          />
        ))}
      </div>

      {/* Helper text */}
      <p className="text-center text-xs text-gray-500 mt-3">
        Cycling through 3 live alerts • Click dots to jump between alerts
      </p>
    </div>
  );
}
