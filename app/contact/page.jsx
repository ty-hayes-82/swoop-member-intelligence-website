import { buildMetadata } from '@/lib/metadata'
import DemoForm from '@/components/DemoForm'
import { SchedulerMock } from '@/components/CapabilityMocks'

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
      </section>

      <section className="mx-auto grid max-w-container gap-8 lg:grid-cols-[1fr_320px]">
        <div className="rounded-2xl border border-swoop-border bg-white p-8">
          <DemoForm />
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-swoop-border bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Drop on calendar</p>
            <div className="mt-3">
              <SchedulerMock />
            </div>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-4 text-sm text-swoop-muted">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Automatic confirmation</p>
            <p className="mt-2 font-semibold text-swoop-dark">Subject: “We\'re confirmed for your Swoop call”</p>
            <p className="mt-1">Email includes presenter, Zoom link, and agenda — sent instantly after you pick a slot.</p>
          </div>
          <div className="rounded-2xl border border-swoop-border bg-white p-4 text-sm text-swoop-muted">
            <p className="text-xs font-semibold uppercase tracking-wider text-swoop-muted">Internal notification</p>
            <p className="mt-2">Ops channel note: “Contact form submitted by GM · respond inside 1 business day.”</p>
          </div>
        </aside>
      </section>
    </div>
  )
}
