import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import {
  AtRiskRosterMock,
  RoutingComparisonMock,
  PostRoundConversionMock,
  StaffingForecastGrid,
  BoardReportPreview,
  SourceBadgeRow,
} from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Swoop Golf — Club Intelligence for General Managers',
  description: 'AI-powered intelligence for private club General Managers. See what your club misses today and recover it tomorrow.',
  path: '/',
})

const capabilities = [
  {
    title: 'Member intelligence',
    text: 'Find at-risk households before they submit resignations.',
    href: '/capabilities/member-intelligence',
    mock: <AtRiskRosterMock />,
  },
  {
    title: 'Tee sheet demand',
    text: 'Route cancellations with retention logic instead of FIFO.',
    href: '/capabilities/tee-sheet-demand',
    mock: <RoutingComparisonMock />,
  },
  {
    title: 'F&B guest experience',
    text: 'Lift post-round conversion through timing-aware offers.',
    href: '/capabilities/fb-operations',
    mock: <PostRoundConversionMock />,
  },
  {
    title: 'Staffing and service',
    text: 'Forecast coverage gaps 48 hours ahead.',
    href: '/capabilities/staffing-labor',
    mock: <StaffingForecastGrid />,
  },
  {
    title: 'Revenue pipeline',
    text: 'Show which actions protected ARR and moved board metrics.',
    href: '/capabilities/revenue-pipeline',
    mock: <BoardReportPreview />,
  },
]

const demoTestimonials = [
  {
    name: 'Lena Ortiz',
    role: 'GM · Demo scenario',
    club: 'Stonebrook Country Club',
    quote: '“Seeing the Monday save queue convinced our board that the risk list is actionable, not theoretical.”',
    metric: '$168K protected ARR demo',
  },
  {
    name: 'Marcus Bell',
    role: 'COO · Demo scenario',
    club: 'Riverbend Portfolio',
    quote: '“The demo proved how staff routing and revenue attribution meet in one report — it felt like a real Monday pulse.”',
    metric: '14pt service-level lift demo',
  },
  {
    name: 'Hannah Patel',
    role: 'F&B Director · Demo scenario',
    club: 'Foothills Club',
    quote: '“Post-round conversion went from theory to playbook because the demo tied signals to scripts and comps I could hand to my team.”',
    metric: '+12pt conversion demo',
  },
]

function LocationIntelligenceHeroCard() {
  return (
    <div className="rounded-2xl border border-swoop-border bg-white p-4 shadow-xl">
      <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Location intelligence</p>
      <div className="mt-4 grid grid-cols-[1fr_220px] gap-4">
        <div className="rounded-xl border border-swoop-border bg-swoop-bg p-3">
          <p className="text-xs text-swoop-muted">Live member flow</p>
          <div className="mt-3 grid grid-cols-6 gap-1">
            {Array.from({ length: 36 }).map((_, idx) => (
              <span
                key={idx}
                className="h-6 rounded"
                style={{ backgroundColor: `rgba(31,47,36,${((idx % 6) + 2) / 10})` }}
              />
            ))}
          </div>
          <div className="mt-3">
            <SourceBadgeRow />
          </div>
        </div>
        <div className="space-y-2">
          {[
            'Grill queue risk at 12:45 PM',
            'Starter bottleneck on holes 8-10',
            'Pro shop conversion window 2:15 PM',
          ].map((item) => (
            <div key={item} className="rounded-lg border border-swoop-border bg-swoop-bg px-3 py-2 text-xs text-swoop-muted">{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">For private-club GMs</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">Know where member value is leaking before Monday gets away from you.</h1>
            <p className="mt-4 max-w-xl text-lg text-swoop-muted">Swoop combines tee sheet, POS, CRM, weather, and staffing data into one operating layer so your team can act faster and prove outcomes weekly.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-5 py-2.5 text-sm font-semibold text-white">Book a Demo</Link>
              <Link href="/platform" className="inline-flex min-h-[46px] items-center rounded-lg border border-swoop-border bg-white px-5 py-2.5 text-sm font-semibold">See Platform</Link>
            </div>
          </div>
          <LocationIntelligenceHeroCard />
        </div>
      </section>

      <section className="px-6 -mt-6">
        <article className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="mb-2 inline-flex rounded-full border border-swoop-border bg-swoop-bg px-2.5 py-1 text-[11px] font-semibold text-swoop-muted">Demo data</div>
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Whitfield micro case study</p>
          <h2 className="mt-2 text-2xl font-bold">A 6-day warning became a same-week save playbook.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Whitfield’s usage decay, unresolved complaint, and dining drop were detected Monday morning; GM outreach closed by Wednesday and renewal risk returned to stable by Friday.</p>
        </article>
      </section>

      <TrustStrip />

      <section className="px-6 py-10">
        <div className="mx-auto max-w-container">
          <h2 className="text-3xl font-bold">Interactive capability previews</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability.title} className="rounded-2xl border border-swoop-border bg-white p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{capability.title}</h3>
                    <p className="text-sm text-swoop-muted">{capability.text}</p>
                  </div>
                  <Link href={capability.href} className="text-sm font-semibold text-swoop-accent">Explore →</Link>
                </div>
                {capability.mock}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Demo testimonials</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {demoTestimonials.map((item) => (
              <article key={item.name} className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-sm">
                <div className="mb-2 inline-flex rounded-full border border-swoop-border bg-white px-2 py-0.5 text-[11px] font-semibold text-swoop-muted">Demo scenario</div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-swoop-muted">{item.role} · {item.club}</p>
                <p className="mt-3 text-swoop-muted leading-relaxed">{item.quote}</p>
                <p className="mt-3 text-xs font-semibold">{item.metric}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProofStack
        statLabel="Retention performance"
        statValue="21% lift in retention"
        demoLabel="Member workflow"
        quote="The Monday signal-to-action loop made retention measurable, not anecdotal."
        ctaLabel="See your retention map"
        ctaHref="/book-demo"
      >
        <AtRiskRosterMock />
      </ProofStack>

      <CTASection headline="See Swoop on your club scenarios." subtext="We’ll map signal, action, and board proof in one walkthrough." />

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-swoop-dark p-6 text-white">
          <p className="text-sm text-white/70">Questions before booking?</p>
          <p className="mt-2 text-xl font-semibold">Call +1-480-680-6234 or email hello@swoopgolf.com</p>
        </div>
      </section>
    </div>
  )
}
