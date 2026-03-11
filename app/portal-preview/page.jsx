import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { DailyBriefingDemo, HealthScoreGrid, IntelligenceScoreGauge } from '@/components/portal-previews'

export const metadata = buildMetadata({
  title: 'Live Portal Preview — Swoop Golf',
  description: 'See actual portal components in action with live demo data from Oakmont Hills CC',
  path: '/portal-preview',
})

export default function PortalPreviewPage() {
  return (
    <div className="page-stack">
      {/* Hero */}
      <section className="px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-container">
          <div className="inline-block px-4 py-2 bg-orange-500 text-gray-900 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Live Portal Components
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Not Screenshots. Actual Components.
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-6">
            These are live React components extracted directly from the member portal — the same UI that General Managers interact with daily. What you see below is exactly what your dashboard would look like.
          </p>
          <Link 
            href="/book-demo" 
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 px-6 py-3 text-sm font-semibold text-gray-900 transition"
          >
            Book a Live Demo
          </Link>
        </div>
      </section>

      {/* Daily Briefing Section */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-container">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Component 1: Daily Briefing
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Real-Time Cockpit Alerts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              AI-powered alerts that surface member risks, operational bottlenecks, and engagement patterns before they become problems. This is the first thing GMs see each morning.
            </p>
          </div>
          <DailyBriefingDemo />
        </div>
      </section>

      {/* Member Health Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-container">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Component 2: Member Health
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Early Warning System
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Real-time member health scores across your entire membership roster. Color-coded by risk level, with archetype badges and primary signals that drive intervention priorities.
            </p>
          </div>
          <HealthScoreGrid showAll={false} />
        </div>
      </section>

      {/* Intelligence Score Section */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-container">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Component 3: Intelligence Score
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Data Coverage Indicator
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              The Intelligence Score measures how much of your club's operational data flows into Swoop. Higher scores mean richer insights, earlier warnings, and more precise predictions.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <IntelligenceScoreGauge />
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="px-6 py-16 bg-gray-900 text-white">
        <div className="mx-auto max-w-container text-center">
          <h2 className="text-4xl font-bold mb-6">
            Why Live Components Matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Shows Real Quality</h3>
              <p className="text-gray-400">
                Screenshots can be mocked or staged. Live components prove the platform actually works — you're seeing the real UI with real interactions.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="text-xl font-bold mb-2">Always Up to Date</h3>
              <p className="text-gray-400">
                When we improve the portal UI, these components automatically reflect those changes. No outdated screenshots or mismatched expectations.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-2">Feel the Experience</h3>
              <p className="text-gray-400">
                Hover states, animations, and interactions give you a genuine sense of the platform's polish and attention to detail.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link 
              href="/book-demo" 
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 hover:bg-orange-600 px-8 py-4 text-base font-semibold text-gray-900 transition"
            >
              See It Live in a Demo Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
