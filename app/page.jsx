import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import TrustStrip from '@/components/TrustStrip'
import TrustedBetaStrip from '@/components/TrustedBetaStrip'
import CTASection from '@/components/CTASection'
import ProofStack from '@/components/ProofStack'
import ProductWalkthroughHero from '@/components/ProductWalkthroughHero'
import VideoPlaceholder from '@/components/VideoPlaceholder'
import MorningBriefingPreview from '@/components/MorningBriefingPreview'
import TestimonialHighlight from '@/components/TestimonialHighlight'
import {
  AtRiskRosterMock,
  RoutingComparisonMock,
  PostRoundConversionMock,
  StaffingForecastGrid,
  BoardReportPreview,
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

const automationRecipes = [
  {
    title: 'At-risk member save',
    trigger: 'Health score drops 15 points or a complaint sits unresolved 48 hours',
    action: 'Queues a GM call script, personal outreach plan, and tracked follow-up task',
    outcome: 'Protects $18K/yr in dues before the resignation letter shows up',
  },
  {
    title: 'Auto tee time offer',
    trigger: 'Retention-priority member waits more than 3 days for a Saturday slot',
    action: 'Holds the next cancellation, texts the member, and alerts the starter',
    outcome: 'Keeps high-value members on the tee sheet instead of the waitlist',
  },
  {
    title: 'Post-round dining upsell',
    trigger: 'Wind or slow-round warnings that would normally hurt dining covers',
    action: 'Sends a dining invite, reserves a table, and notifies the Grill Room lead',
    outcome: 'Recovers $5,700/month in F&B tied to slow Saturday rounds',
  },
]

export default function HomePage() {
  return (
    <div className="page-stack">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-container gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">For private-club GMs</p>
            <h1 className="hero-headline mt-4 text-4xl font-bold md:text-5xl">Know where member value is leaking before Monday gets away from you.</h1>
            <p className="mt-4 max-w-xl text-lg text-swoop-muted">Swoop combines tee sheet, POS, CRM, weather, and staffing data into one operating layer so your team can act faster and prove outcomes weekly.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-5 py-2.5 text-sm font-semibold text-white">Book a Demo</Link>
              <Link href="/platform" className="inline-flex min-h-[46px] items-center rounded-lg border border-swoop-border bg-white px-5 py-2.5 text-sm font-semibold">See Platform</Link>
            </div>
            <div className="stat-chip-row mt-4">
              <div className="stat-chip">
                <span className="stat-chip__label">Members at risk</span>
                <span className="stat-chip__value">23</span>
                <span className="stat-chip__demo">Demo data</span>
              </div>
              <div className="stat-chip">
                <span className="stat-chip__label">Tee sheet fill</span>
                <span className="stat-chip__value">87%</span>
                <span className="stat-chip__demo">Demo data</span>
              </div>
              <div className="stat-chip">
                <span className="stat-chip__label">Slot value identified</span>
                <span className="stat-chip__value">$312</span>
                <span className="stat-chip__demo">Demo data</span>
              </div>
            </div>
          </div>
          <ProductWalkthroughHero />
        </div>
      </section>

      <TrustedBetaStrip />

      <section className="px-6 -mt-6">
        <article className="responsive-card mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-8">
          <div className="mb-2 inline-flex rounded-full border border-swoop-border bg-swoop-bg px-2.5 py-1 text-[11px] font-semibold text-swoop-muted">Demo data</div>
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Whitfield micro case study</p>
          <h2 className="mt-2 text-2xl font-bold">A 6-day warning became a same-week save playbook.</h2>
          <p className="mt-3 text-sm text-swoop-muted">Whitfield’s usage decay, unresolved complaint, and dining drop were detected Monday morning; GM outreach closed by Wednesday and renewal risk returned to stable by Friday.</p>
        </article>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <VideoPlaceholder />
        </div>
      </section>

      <TrustStrip />

      <section className="px-6 py-8">
        <div className="mx-auto max-w-container">
          <h2 className="text-3xl font-bold">Interactive capability previews</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability.title} className="responsive-card rounded-2xl border border-swoop-border bg-white p-6">
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

      <section className="px-6 py-10 bg-swoop-bg/50">
        <div className="mx-auto max-w-container">
          <p className="text-sm font-semibold uppercase tracking-wider text-swoop-muted">Automation Recipes</p>
          <h2 className="mt-2 text-3xl font-bold">Pre-built workflows the team can approve in seconds.</h2>
          <p className="mt-3 max-w-3xl text-swoop-muted">Every recipe ties a live trigger to a clear action and a measurable outcome so you can show the board how the week was saved.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {automationRecipes.map((recipe) => (
              <article key={recipe.title} className="h-full rounded-2xl border border-swoop-border bg-white p-5 shadow-sm">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-swoop-muted">Trigger</dt>
                    <dd className="font-medium text-swoop-dark">{recipe.trigger}</dd>
                  </div>
                  <div>
                    <dt className="text-swoop-muted">Action</dt>
                    <dd className="font-medium text-swoop-dark">{recipe.action}</dd>
                  </div>
                  <div>
                    <dt className="text-swoop-muted">Outcome</dt>
                    <dd className="font-medium text-swoop-dark">{recipe.outcome}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="mx-auto max-w-container">
          <MorningBriefingPreview />
        </div>
      </section>

      <ProofStack
        statLabel="Retention performance"
        statValue="+21.4% retention lift"
        statContext="Oakmont Hills CC demo, week 3 (Jan 2026)"
        demoLabel="Member workflow"
        demoContext="Captured from the Oakmont Hills release"
        quote="The Monday brief gave us proof we could show the board, not just gut feel."
        ctaLabel="See your retention map"
        ctaHref="/book-demo"
      >
        <AtRiskRosterMock />
      </ProofStack>

      <TestimonialHighlight />

      <CTASection headline="See Swoop on your club scenarios." subtext="We’ll map signal, action, and board proof in one walkthrough." />

      <section className="px-6">
        <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-swoop-dark p-6 text-white">
          <p className="text-sm text-white/70">Questions before booking?</p>
          <p className="mt-2 text-xl font-semibold">Call +1-480-680-6234 or email hello@swoopgolf.com</p>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/60">All replies come from the founding team</p>
        </div>
      </section>
    </div>
  )
}
