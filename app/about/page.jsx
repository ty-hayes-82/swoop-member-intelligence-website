import CTASection from '@/components/CTASection'
import { LiveOpsPreviewGrid } from '@/components/ProductMockups'

export const metadata = {
  title: 'About Swoop Golf',
  description: 'Swoop Golf builds AI-powered intelligence for private club General Managers. Founded by Ty Hayes in Scottsdale, AZ.',
}

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6 relative overflow-hidden border-b border-swoop-border">
        <div className="absolute inset-0 z-0 opacity-70" aria-hidden>
          <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(243,146,45,0.18),_transparent_60%),linear-gradient(135deg,rgba(15,23,42,0.08),transparent)]" />
        </div>
        <div className="max-w-container mx-auto max-w-3xl relative z-10">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We believe every GM deserves to see what&apos;s coming.</h1>
          <div className="mb-8">
            <LiveOpsPreviewGrid />
          </div>
          <div className="space-y-6 text-lg text-swoop-muted leading-relaxed">
            <p>Private clubs run on relationships. The GM knows every member by name, remembers their drink order, and notices when they haven&apos;t been in lately. That instinct is powerful — but it doesn&apos;t scale.</p>
            <p>When you&apos;re managing 300 members across 5 systems, the signals that matter most — the complaint that went unresolved, the declining visits that precede a resignation, the staffing gap that costs you a loyal member — get buried in data no single person can track.</p>
            <p>Swoop exists to give GMs superhuman visibility. Not to replace their judgment — to amplify it. We connect the systems clubs already run, surface the signals that matter, and recommend specific actions with measurable outcomes.</p>
            <p>We built Swoop because we&apos;ve seen too many clubs lose members they could have saved. Not because of bad service — because of invisible problems that nobody connected until it was too late.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">Our principles</h2>
          <div className="space-y-6">
            {[
              { title: 'GM-first design', desc: 'Every screen answers the question a GM would actually ask. No data science dashboards. No vanity metrics. Actionable intelligence in GM language.' },
              { title: 'Connect, don\'t replace', desc: 'We integrate with 28 systems across 10 categories. Your club already invested in tee sheet software, POS systems, and member CRM. We make them work together.' },
              { title: 'Human-in-the-loop', desc: 'AI recommends. GMs decide. Every action shows expected impact and reasoning. We never automate away the relationship.' },
              { title: 'Honest metrics', desc: 'We give competitors credit where it\'s earned. We label demo data clearly. We don\'t inflate numbers to close deals. Trust is the product.' },
            ].map((p) => (
              <div key={p.title} className="border-l-4 border-swoop-green pl-6">
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-swoop-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-muted">Swoop Golf · Scottsdale, Arizona</p>
          <p className="text-swoop-muted mt-2">hello@swoopgolf.com</p>
        </div>
      </section>

      <CTASection headline="Let's talk about your club." />
    </>
  )
}
