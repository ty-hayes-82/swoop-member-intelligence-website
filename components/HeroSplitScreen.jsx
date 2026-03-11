'use client'

/**
 * HeroSplitScreen - Split-screen product hero for homepage
 * Left: Headline + subheadline + CTAs + trust metrics
 * Right: Live Daily Briefing component (actual product UI)
 */

import Link from 'next/link'
import { DailyBriefingDemo } from './portal-previews'
import AnimatedStat from './AnimatedStat'

export default function HeroSplitScreen() {
  const trustMetrics = [
    { label: 'Retention lift', value: '+21%', note: 'Oakmont Hills CC · Week 3' },
    { label: 'Members saved', value: '6', note: 'Personal outreach in 10 days', accent: true },
    { label: 'Tee sheet fill', value: '91%', note: 'Retention-prioritized routing' },
  ]

  return (
    <section 
      className="relative px-6 py-20 md:py-28 lg:py-36 overflow-hidden" 
      data-animate="fade-up" 
      data-hero-section
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-gray-50 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_50%)] -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(74,222,128,0.05),_transparent_60%)] -z-10"></div>
      
      <div className="mx-auto max-w-container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">
              For private-club General Managers
            </p>
            
            <h1 className="mt-4 text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-swoop-dark" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Stop firefighting. Start orchestrating.
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl leading-relaxed text-gray-600 max-w-xl">
              The Real-Time Cockpit that shows you where today is breaking — before members feel it.
            </p>
            
            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link 
                href="/book-demo" 
                className="inline-flex items-center justify-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white cta-primary-dark hover:bg-swoop-dark/90 transition-colors"
              >
                See the Daily Briefing
              </Link>
              <Link 
                href="/pricing" 
                className="inline-flex items-center justify-center rounded-lg border-2 border-swoop-dark px-6 py-3 text-sm font-semibold text-swoop-dark hover:bg-swoop-dark/5 transition-colors"
              >
                See Pricing
              </Link>
            </div>
            
            <p className="mt-3 text-sm text-swoop-muted">
              Next live demo openings: Tuesday 11:00 AM MT · Thursday 2:00 PM MT
            </p>
            
            {/* Trust Metrics */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {trustMetrics.map((stat, index) => (
                <div
                  key={stat.label}
                  data-animate="fade-up"
                  data-animate-delay={String(200 + index * 80)}
                  className={`hover-lift rounded-2xl border p-4 transition-all ${
                    stat.accent 
                      ? 'border-swoop-green/40 bg-swoop-green/5' 
                      : 'border-swoop-border bg-white'
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[1.2px] text-swoop-muted">
                    {stat.label}
                  </p>
                  <p className={`mt-2 text-2xl font-bold ${
                    stat.accent ? 'text-swoop-green-hover' : 'text-swoop-dark'
                  }`}>
                    <AnimatedStat value={stat.value} />
                  </p>
                  <p className="text-xs text-swoop-muted mt-1">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Product Screenshot/Demo */}
          <div 
            className="relative"
            data-animate="fade-scale" 
            data-animate-delay="200"
          >
            {/* Browser Chrome Frame */}
            <div className="overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-2xl">
              {/* Browser Chrome Top Bar */}
              <div className="flex items-center gap-2 border-b border-gray-200 bg-gray-50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-3 flex-1 rounded bg-white px-3 py-1 text-xs text-gray-500 border border-gray-200">
                  portal.swoopgolf.com/daily-briefing
                </div>
                {/* Live Demo Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold text-green-800 border border-green-200">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  LIVE DEMO
                </span>
              </div>
              
              {/* Product Content */}
              <div className="bg-white p-6 max-h-[600px] overflow-y-auto">
                <DailyBriefingDemo />
              </div>
            </div>
            
            {/* Demo Context Badge */}
            <div className="mt-4 text-center">
              <span className="inline-block rounded-full bg-gray-100 px-4 py-2 text-xs font-semibold text-gray-700">
                OAKMONT HILLS CC (JAN 2026) — Demo Data
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
