import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'

export const metadata = buildMetadata({
  title: 'Integrations',
  description: 'Your club systems finally talking to each other — tee sheet, POS, CRM, email, and on-property signals in one intelligence layer.',
  path: '/integrations',
})

const categories = [
  {
    title: 'Tee Sheet Systems',
    icon: '⛳',
    systems: 'ForeTees · Club Prophet · EZLinks · Golf Genius',
    why: 'See demand patterns, predict cancellations, and optimize yield per slot. Without tee sheet data Swoop can&apos;t forecast your most valuable asset.',
    reads: 'Tee times, bookings, cancellations, no-shows, member preferences',
  },
  {
    title: 'Point of Sale',
    icon: '🧾',
    systems: 'Northstar · Jonas Club · Clubessential',
    why: 'Dining spend is the second strongest engagement signal after rounds played. A member who stops dining is 3× more likely to resign within 6 months.',
    reads: 'Transaction history, dining frequency, average check, outlet preferences',
  },
  {
    title: 'CRM & Membership Management',
    icon: '👥',
    systems: 'Clubessential · Memberplanet · Clubster · Privit',
    why: 'Membership type, tenure, renewal dates, and communication history create the baseline for every health score.',
    reads: 'Member profiles, membership status, renewal dates, contact history',
  },
  {
    title: 'Email Marketing',
    icon: '✉️',
    systems: 'Constant Contact · Mailchimp · HubSpot · Campaign Monitor',
    why: 'Email open rates are an early warning system. A member who stops opening emails has already mentally checked out.',
    reads: 'Campaign sends, opens, clicks, unsubscribes by member',
  },
  {
    title: 'Scheduling & Labor',
    icon: '📅',
    systems: 'HotSchedules · 7shifts · Deputy · When I Work',
    why: 'Aligning staff coverage with predicted demand prevents both overstaffing waste and understaffing complaints.',
    reads: 'Shift schedules, labor hours, department coverage',
  },
  {
    title: 'Accounting & Finance',
    icon: '📈',
    systems: 'Sage Intacct · QuickBooks · Club Prophet',
    why: 'Connect dues revenue, ancillary spend, and cost data so ROI calculations use real numbers, not estimates.',
    reads: 'Revenue by category, dues billing, accounts receivable',
  },
]

const faqs = [
  {
    q: 'How long does integration setup take?',
    a: 'Most clubs connect their core systems within two weeks. We handle the mapping while you keep operating.',
  },
  {
    q: 'What if my system isn&apos;t listed?',
    a: 'Swoop supports API, SFTP, and secure CSV workflows. If a vendor can export data, we can ingest it.',
  },
  {
    q: 'Is any data written back to our systems?',
    a: 'No. All connections are read-only by default so nothing overwrites your source of truth.',
  },
  {
    q: 'Who handles the technical setup?',
    a: 'Our integrations team provisions connectors, monitors sync health, and works directly with your vendors if needed.',
  },
  {
    q: 'Can I disconnect at any time?',
    a: 'Yes. Disconnect immediately inside Swoop or revoke the API credential from your system. Your environment remains isolated.',
  },
]

export default function IntegrationsPage() {
  return (
    <div style={{ background: '#030a07', color: '#F8FAFC', fontFamily: 'var(--font-sans)', padding: '60px 24px 100px', display: 'flex', flexDirection: 'column', gap: '70px' }}>
      <section style={{ display: 'flex', flexDirection: 'column', gap: '18px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: 0 }}>Your Club Systems Finally Talking to Each Other</h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: 720, margin: '0 auto' }}>
          Swoop connects your tee sheet, POS, CRM, email, and on-property signals into one intelligence layer. No rip-and-replace. Read-only connections. Live in 2 weeks.
        </p>
      </section>

      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          padding: '40px',
          borderRadius: '32px',
          background: 'linear-gradient(135deg, #0f2f1e, #03140b)',
          border: '1px solid rgba(74,222,128,0.3)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.45)',
        }}
      >
        <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p style={{ fontSize: '12px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', margin: 0 }}>
            Featured Integration
          </p>
          <h2 style={{ fontSize: '34px', margin: 0 }}>Location Intelligence — Only from Swoop</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
            Most platforms stop at transactional data. Swoop adds a spatial layer — understanding where members spend time on property, which zones are underutilized, and how foot traffic correlates with spend. This is the signal no one else captures.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'On-property movement patterns and zone utilization',
              'Correlate location with dining spend and event attendance',
              'Identify members who visit but disengage from key amenities',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 10px rgba(74,222,128,0.8)' }} />
                <span style={{ fontSize: '15px' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            flex: '1 1 360px',
            minWidth: '320px',
            background: 'rgba(1,6,5,0.65)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '24px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', width: 200, height: 200, borderRadius: '50%', background: 'rgba(74,222,128,0.18)', top: -40, right: -60 }} />
          <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px' }}>Property Map (Simulated)</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[ '#1B4332', '#2D6A4F', '#40916C', '#95D5B2', '#52B788', '#4C956C' ].map((color, index) => (
              <div key={color} style={{
                height: 80,
                borderRadius: '16px',
                background: color,
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 600,
              }}>
                Zone {index + 1}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {[
              { label: 'North Range', value: '+34% spend' },
              { label: 'Grill Room', value: '92% capacity' },
              { label: 'Family Pool', value: 'Underutilized' },
            ].map((chip) => (
              <span key={chip.label} style={{ padding: '6px 12px', borderRadius: '999px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px' }}>
                {chip.label} · {chip.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
        {categories.map((category) => (
          <div key={category.title} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '30px' }}>{category.icon}</div>
            <h3 style={{ margin: 0 }}>{category.title}</h3>
            <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>{category.systems}</p>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{category.why}</p>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)' }}>What Swoop reads</div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{category.reads}</p>
          </div>
        ))}
      </section>

      <section style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '28px', border: '1px solid rgba(255,255,255,0.08)', padding: '36px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ margin: 0, textAlign: 'center', fontSize: '26px' }}>How it works</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {[
            { title: 'Step 1', detail: 'You provide API credentials or CSV exports — we handle the rest.' },
            { title: 'Step 2', detail: 'Swoop maps your data to our unified member model in 48 hours.' },
            { title: 'Step 3', detail: 'Intelligence starts flowing into your Daily Briefing immediately.' },
          ].map((step, index) => (
            <div key={step.title} style={{ borderRadius: '20px', border: '1px solid rgba(255,255,255,0.08)', padding: '18px', background: 'rgba(0,0,0,0.3)' }}>
              <div style={{ fontSize: '13px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{step.title}</div>
              <p style={{ fontSize: '15px', lineHeight: 1.6 }}>{step.detail}</p>
              <div style={{ fontSize: '40px', fontWeight: 700, color: 'rgba(255,255,255,0.12)' }}>{index + 1}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'rgba(0,0,0,0.35)', borderRadius: '28px', border: '1px solid rgba(255,255,255,0.08)', padding: '36px' }}>
        <h3 style={{ marginTop: 0 }}>Security & Trust</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            'All connections are read-only by default',
            'Data encrypted at rest (AES-256) and in transit (TLS 1.3)',
            'SOC 2 Type II certification on roadmap Q3 2026',
            'No cross-club data sharing ever',
            'Your data stays in your dedicated environment',
          ].map((point) => (
            <li key={point} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ADE80' }} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((faq) => (
          <details key={faq.q} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)', padding: '14px 18px' }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{faq.q}</summary>
            <p style={{ marginTop: '10px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{faq.a}</p>
          </details>
        ))}
      </section>

      <section style={{ textAlign: 'center', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)', background: 'linear-gradient(135deg, #02150d, #010203)' }}>
        <h3 style={{ fontSize: '30px', marginBottom: '12px' }}>See Your Systems Connected</h3>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '24px', fontSize: '16px' }}>Book a demo to watch your tee sheet, POS, CRM, and on-property signals load into Swoop&apos;s intelligence layer.</p>
        <Link
          href="/book-demo"
          style={{
            padding: '14px 38px',
            borderRadius: '999px',
            background: '#4ADE80',
            color: '#04130d',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 20px 60px rgba(74,222,128,0.35)',
          }}
        >
          Book a Demo
        </Link>
      </section>
    </div>
  )
}
