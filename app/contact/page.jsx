import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import DemoForm from '@/components/DemoForm'
import SchedulerEmbed from '@/components/SchedulerEmbed'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Reach Swoop directly by phone, email, or scheduling block.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="space-y-12 px-6 py-20 md:py-28">
      <section className="mx-auto max-w-container">
        <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Contact</p>
        <h1 className="mt-4 text-4xl font-bold">Get a live response from the Swoop team.</h1>
        <p className="mt-4 text-swoop-muted">Direct phone and email are monitored during business hours. Live response SLA: under 1 business day.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-swoop-border bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-swoop-muted">Phone</p>
            <p className="mt-1 font-semibold">+1-480-680-6234</p>
          </div>
          <div className="rounded-xl border border-swoop-border bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-swoop-muted">Email</p>
            <p className="mt-1 font-semibold">hello@swoopgolf.com</p>
          </div>
          <div className="rounded-xl border border-swoop-border bg-white p-4">
            <p className="text-xs uppercase tracking-wider text-swoop-muted">SLA</p>
            <p className="mt-1 font-semibold">&lt; 1 business day</p>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-swoop-border bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">What to expect</p>
          <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
            <li>• We respond within 1 business day.</li>
            <li>• Your inquiry goes to our club success team — not a call center.</li>
            <li>• We will schedule a brief intro call if there's a fit.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-container gap-8 lg:grid-cols-[1fr_360px]">
        <div className="rounded-2xl border border-swoop-border bg-white p-8">
          <DemoForm origin="contact" />
        </div>
        <aside className="space-y-4">
          <SchedulerEmbed
            title="Drop directly on our calendar"
            description="Same Calendly embed as the demo page. Pick a time and get instant confirmation + Zoom link."
          />
          <div className="rounded-2xl border border-swoop-border bg-white p-4 text-sm text-swoop-muted">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Automatic confirmation</p>
            <p className="mt-2 font-semibold text-swoop-dark">Subject: “We're confirmed for your Swoop call”</p>
            <p className="mt-1">Email includes presenter, meeting link, and agenda — delivered immediately after you submit or schedule.</p>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-4 text-sm text-swoop-muted">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Internal notification</p>
            <p className="mt-2">Ops channel ping: “Contact form submitted — respond within SLA.”</p>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-container">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#4ADE80]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#147A3E]">Monday — how we route inquiries</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Club success triages every submission.</li>
              <li>• We review your context before replying so the first response is useful.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-6 shadow-sm border-t-4 border-[#F97316]">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#AF4C0B]">Friday — what you have in hand</p>
            <ul className="mt-4 space-y-2 text-sm text-swoop-muted">
              <li>• Follow-up summary of what we discussed.</li>
              <li>• Clear next steps if we mutually see fit.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container">
        <div className="rounded-2xl border border-swoop-border bg-white p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Response SLA artifact</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              { label: 'Email', value: '1 business day' },
              { label: 'Demo request', value: 'Same day' },
              { label: 'Support', value: '4 hours' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-swoop-border bg-swoop-bg p-4 text-center">
                <p className="text-xs uppercase tracking-wider text-swoop-muted">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-swoop-dark">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container">
        <div className="rounded-2xl border border-swoop-border bg-white p-8">
          <h2 className="text-2xl font-bold">Contact FAQ</h2>
          <div className="mt-6 space-y-4">
            {[
              { question: 'Is there a sales team?', answer: 'Our club success team handles everything end-to-end.' },
              { question: 'Where are you based?', answer: 'Scottsdale, Arizona.' },
              { question: 'Can I visit?', answer: 'Yes — by appointment so we can plan a productive session.' },
            ].map((item) => (
              <details key={item.question} className="rounded-xl border border-swoop-border bg-swoop-bg p-4">
                <summary className="cursor-pointer text-sm font-semibold text-swoop-dark">{item.question}</summary>
                <p className="mt-2 text-sm text-swoop-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container pb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Prefer to skip the form?</h2>
        <p className="text-swoop-muted mb-6">Book a demo and we'll show you the platform while we answer your questions.</p>
        <Link href="/book-demo" className="inline-flex min-h-[46px] items-center rounded-lg bg-swoop-dark px-6 py-3 text-sm font-semibold text-white">
          Book a Demo
        </Link>
      </section>
    </div>
  )
}
