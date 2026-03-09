import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'
import IntegrationStatusGrid from '@/components/IntegrationStatusGrid'

export const metadata = buildMetadata({
  title: 'Integrations',
  description: 'Connect your tee sheet, POS, CRM, staffing, and communication systems to Swoop. Unlock cross-system intelligence, predictive alerts, and location-aware data no vendor exposes on its own.',
  path: '/integrations',
})

const STATUS_STYLES = {
  partner: 'bg-emerald-100 text-emerald-700',
  available: 'bg-sky-100 text-sky-700',
  'coming soon': 'bg-slate-200 text-slate-600',
}

const categories = [
  {
    id: 'tee-sheet',
    icon: '⛳',
    name: 'Tee Sheet & Booking',
    description: 'Your tee sheet knows who booked. Swoop ties that behavior to retention risk, waitlists, and pace in real time.',
    vendors: [
      {
        slug: 'foretees',
        name: 'ForeTees',
        status: 'Partner',
        logo: '“FT” badge or tee sheet grid icon',
        connection: 'REST API + booking/cancellation webhooks + CSV fallback',
        setup: '1–2 business days',
        reads: [
          'teeTimes: booking_id, member_id, tee_time_at, status, party_size',
          'waitlist: requested_slot, alternates, created_at',
          'pacing (optional): round_duration_min, per-hole pace signals',
          'player roster + guest history: visit frequency, recency',
        ],
        insights: [
          'Pace of play → post-round dining conversion loss (ForeTees + POS)',
          'Cancellation prediction + pre-staged backfill (ForeTees + Member Health + Weather)',
          'Demand heatmap + redistribution recommendations (ForeTees + Member preferences)',
        ],
      },
      {
        slug: 'foreup',
        name: 'ForeUP',
        status: 'Coming Soon',
        logo: 'Tee icon with calendar grid',
        connection: 'Polling API + CSV fallback',
        setup: '2–5 business days',
        reads: [
          'Bookings + cancellations with guest IDs',
          'Guest history and round completions (where exposed)',
        ],
        insights: [
          'Demand heatmaps and no-show prediction workflows',
          'Retention-prioritized slot routing just like ForeTees connectors',
        ],
      },
    ],
  },
  {
    id: 'pos-fb',
    icon: '🍽️',
    name: 'POS & Dining',
    description: 'Ticket time, outlet demand, and F&B spend become predictive once they are correlated with pace, weather, and staffing.',
    vendors: [
      {
        slug: 'jonas-pos',
        name: 'Jonas POS',
        status: 'Partner',
        logo: '“J” badge / receipt icon',
        connection: 'REST API or SFTP exports + optional closed-check webhooks + CSV fallback',
        setup: '2–4 business days',
        reads: [
          'checks: check_id, member_id, outlet, opened_at, closed_at, covers, total_amount',
          'lineItems (phase 2): item category preferences',
          'tenders (phase 2): payment method and house charge flags',
        ],
        insights: [
          'Post-round conversion by archetype + pace (POS + Tee Sheet + Member Health)',
          'Understaffing → ticket time → revenue loss (POS + Staffing)',
          'Minimum-spend compliance + obligation behavior (POS + CRM)',
        ],
      },
      {
        slug: 'square-pos',
        name: 'Square',
        status: 'Coming Soon',
        logo: 'Square outline icon',
        connection: 'REST API + order/payment webhooks + CSV fallback',
        setup: '1–2 business days',
        reads: [
          'Orders + payments with outlet/location context',
          'Covers + tender types for preference modeling',
        ],
        insights: [
          'Post-round dining conversion + pacing impact (Square + ForeTees)',
          'Outlet demand forecasting tied to weather + staffing',
        ],
      },
      {
        slug: 'toast',
        name: 'Toast',
        status: 'Coming Soon',
        logo: 'Receipt / toast slice icon',
        connection: 'REST API + kitchen ticket timing + CSV fallback',
        setup: '2–4 business days',
        reads: [
          'Orders/checks, guest counts, revenue centers',
          'Kitchen ticket timing (optional) for service telemetry',
        ],
        insights: [
          'Ticket time + staffing correlation (POS + 7shifts)',
          'Outlet-specific revenue protection playbooks',
        ],
      },
    ],
  },
  {
    id: 'member-crm',
    icon: '👥',
    name: 'Member CRM',
    description: 'CRM systems provide roster, dues, and household context — fuel for health scoring and dues-at-risk exposure.',
    vendors: [
      {
        slug: 'northstar',
        name: 'Northstar',
        status: 'Partner',
        logo: 'Star/compass icon',
        connection: 'REST API + daily sync + membership-status webhooks + CSV fallback',
        setup: '1–3 business days',
        reads: [
          'members: member_id, name, status, join_date, membership_class',
          'balances + dues schedule, delinquency flags',
          'households/segments for attribution',
        ],
        insights: [
          'Booking decline → resignation risk (CRM + Tee Sheet)',
          'Dues-at-risk exposure + ROI framing (CRM + Analytics)',
          'Household-level dining + activity attribution (CRM + POS + Tee Sheet)',
        ],
      },
      {
        slug: 'clubessential',
        name: 'Clubessential',
        status: 'Available',
        logo: 'Shield / clubhouse icon',
        connection: 'REST API or exports + CSV fallback',
        setup: '2–5 business days',
        reads: [
          'Member roster + status + dues schedule',
          'Households and events/participation (module-dependent)',
        ],
        insights: [
          'Household-corrected engagement scoring (CRM + POS + Tee Sheet)',
          'Minimum-spend risk detection (CRM + POS)',
        ],
      },
      {
        slug: 'club-prophet',
        name: 'Club Prophet',
        status: 'Coming Soon',
        logo: '“CP” badge',
        connection: 'API or export pipeline + CSV fallback',
        setup: 'TBD',
        reads: [
          'Members, dues, households, segments (capability targets)',
        ],
        insights: [
          'Same CRM-based intelligence targets as Northstar/Clubessential',
        ],
      },
    ],
  },
  {
    id: 'staffing',
    icon: '🧑‍🍳',
    name: 'Staffing & Labor',
    description: 'Labor coverage must match demand forecasts. Staffing connectors feed Swoop the data to predict gaps and overtime risk.',
    vendors: [
      {
        slug: '7shifts',
        name: '7shifts',
        status: 'Partner',
        logo: 'Shift grid icon',
        connection: 'REST API + 15-min polling + optional webhooks + CSV fallback',
        setup: '1–2 business days',
        reads: [
          'Schedules/shifts: department, scheduled_start/end, headcount',
          'Clock events (optional): actual vs. scheduled',
        ],
        insights: [
          'Understaffed prime windows → complaints + churn (Staffing + Feedback + Member Health)',
          'Labor coverage vs. predicted demand (Staffing + Tee Sheet + POS + Weather)',
        ],
      },
      {
        slug: 'adp',
        name: 'ADP Payroll',
        status: 'Available',
        logo: 'Payroll/check icon',
        connection: 'OAuth REST API (marketplace) + CSV fallback',
        setup: '1–2 weeks (vendor approval + credentials)',
        reads: [
          'Workers, time cards, pay distributions: hours, overtime, department assignments, blended labor cost',
        ],
        insights: [
          'Revenue-per-labor-hour by outlet/time block (Payroll + POS + Demand)',
          'Overtime risk prediction during high-demand weather windows (Payroll + Weather + Tee Sheet)',
        ],
      },
      {
        slug: 'clubready',
        name: 'ClubReady',
        status: 'Available',
        logo: 'Roster icon',
        connection: 'REST API (where available) + CSV fallback',
        setup: '2–4 business days',
        reads: [
          'Shifts, coverage, and roles',
        ],
        insights: [
          'Demand-weighted coverage alerts similar to 7shifts (Staffing + Tee Sheet + POS)',
        ],
      },
    ],
  },
  {
    id: 'communications',
    icon: '💬',
    name: 'Communication & Engagement',
    description: 'Email/SMS data closes the loop between outreach and behavior change.',
    vendors: [
      {
        slug: 'twilio',
        name: 'Twilio',
        status: 'Available',
        logo: 'Phone/chat bubble icon',
        connection: 'REST API + delivery callbacks',
        setup: '1–2 business days',
        reads: [
          'Delivery status + inbound reply metadata (phase 3)',
          'Campaign metadata for attribution',
        ],
        insights: [
          'Closed-loop attribution: outreach sent → behavior change (Comms + Tee Sheet + POS)',
          'Staff alerts + concierge notifications tied to live location signals',
        ],
      },
      {
        slug: 'mailchimp',
        name: 'Mailchimp',
        status: 'Available',
        logo: 'Envelope / megaphone icon',
        connection: 'REST API + daily sync + CSV fallback',
        setup: '1 business day',
        reads: [
          'Campaign sends + reports',
          'Per-member open/click events (where available)',
        ],
        insights: [
          'Email decay → churn risk (Email + CRM + Activity)',
          'Archetype-specific content resonance (Email + Member Health)',
        ],
      },
      {
        slug: 'hubspot',
        name: 'HubSpot',
        status: 'Available',
        logo: 'Hub/spoke icon',
        connection: 'REST API + webhooks + CSV fallback',
        setup: '1–2 business days',
        reads: [
          'Contacts, deals, and form submissions',
        ],
        insights: [
          'Web lead + guest round attribution for revenue pipeline',
        ],
      },
    ],
  },
  {
    id: 'payments',
    icon: '💳',
    name: 'Payments & Minimums',
    description: 'Transaction-level payment data lets Swoop enforce minimums and surface hidden spend patterns.',
    vendors: [
      {
        slug: 'square-payments',
        name: 'Square Payments',
        status: 'Coming Soon',
        logo: 'Square outline icon',
        connection: 'REST API + payment webhooks + CSV fallback',
        setup: '1–2 business days',
        reads: [
          'Payments/orders with timestamps, outlet, and amount',
        ],
        insights: [
          'Minimum-spend compliance + obligation behavior (Payments + CRM)',
          'Spend by household/segment across outlets (Payments + Member Health)',
        ],
      },
    ],
  },
]

function VendorCard({ vendor }) {
  const statusKey = vendor.status.toLowerCase()
  const badgeClass = STATUS_STYLES[statusKey] || STATUS_STYLES['available']

  return (
    <div id={vendor.slug} className="bg-white border border-swoop-border rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-lg transition">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-swoop-muted mb-1">{vendor.logo}</p>
          <h3 className="text-xl font-semibold">{vendor.name}</h3>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
          {vendor.status}
        </span>
      </div>
      <div className="text-sm text-swoop-muted space-y-1">
        <p><strong>Connection:</strong> {vendor.connection}</p>
        <p><strong>Setup time:</strong> {vendor.setup}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-swoop-muted mb-2">What Swoop reads</p>
          <ul className="text-sm text-swoop-muted space-y-1">
            {vendor.reads.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-swoop-green mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-swoop-muted mb-2">Cross-system insights unlocked</p>
          <ul className="text-sm text-swoop-muted space-y-1">
            {vendor.insights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-swoop-green mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function IntegrationsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-container mx-auto text-center space-y-6">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Integrations</p>
          <h1 className="text-4xl md:text-5xl font-bold">Connect Your Club. Unlock Intelligence.</h1>
          <p className="text-lg text-swoop-muted max-w-3xl mx-auto">
            The systems you already run — ForeTees, Jonas, Northstar, Square, 7shifts, Twilio, and more — feed Swoop the data it needs to predict churn, optimize demand, and prove ROI. No rip-and-replace. Live in under two weeks.
          </p>
          <div className="bg-swoop-green/10 border-2 border-swoop-green rounded-2xl p-6 md:p-8">
            <p className="text-base font-semibold mb-2 text-swoop-dark">No API? No problem.</p>
            <p className="text-sm text-swoop-muted">Every connector has a CSV/Excel fallback. Start with manual exports while credentials are approved, then flip to API once ready.</p>
          </div>
        </div>
      </section>

      {categories.map((category) => (
        <section key={category.id} id={category.id} className="py-20 px-6 bg-swoop-bg/40">
          <div className="max-w-container mx-auto space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-swoop-border flex items-center justify-center text-2xl shadow-sm">
                {category.icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold">{category.name}</h2>
                <p className="text-swoop-muted">{category.description}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {category.vendors.map((vendor) => (
                <VendorCard key={vendor.slug} vendor={vendor} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="csv" className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto space-y-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-swoop-green">No API? No problem</p>
            <h2 className="text-3xl font-bold mt-3">CSV Import Hub keeps onboarding moving.</h2>
            <p className="text-white/70 max-w-3xl mx-auto mt-3">
              Start with CSV/Excel while API access is pending. The Import Hub includes templates, field validation, and upload history so your team has clean data from day one.
              Supported formats: CSV, XLSX, TSV.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-white/20 bg-white/5 p-5">
              <p className="font-semibold mb-2">Template library</p>
              <p className="text-white/70">Pre-mapped columns for fast data prep by operational category.</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/5 p-5">
              <p className="font-semibold mb-2">Validation checks</p>
              <p className="text-white/70">Required fields, date normalization, duplicate detection, and row-level errors before import.</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/5 p-5">
              <p className="font-semibold mb-2">Import history</p>
              <p className="text-white/70">Track every upload, user, status, and correction cycle in one audit log.</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Members', 'Tee Sheet', 'F&B', 'Staffing', 'Events', 'Communications'].map((label) => (
              <button key={label} type="button" disabled className="cursor-not-allowed rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white/70">
                {label} template (Coming soon)
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-10 rounded-full bg-swoop-green" />
            <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider">Live status</p>
          </div>
          <h2 className="text-3xl font-bold mb-4">28 integrations. One intelligence layer.</h2>
          <p className="text-swoop-muted mb-8 max-w-3xl">Founding partners get immediate access to the connectors below. New systems are added based on customer demand — tell us what you run and we’ll plug it in.</p>
          <IntegrationStatusGrid />
        </div>
      </section>

      <CTASection
        headline="Get connected without ripping anything out."
        subtext="Map your stack with our team. We’ll show you exactly how Swoop ingests each system and what intelligence you unlock on day one."
      />
    </>
  )
}
