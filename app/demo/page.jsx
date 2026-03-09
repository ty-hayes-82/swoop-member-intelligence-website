import { buildMetadata } from '@/lib/metadata'
import Link from 'next/link'
import { SchedulerMock } from '@/components/CapabilityMocks'

export const metadata = buildMetadata({
  title: 'Demo',
  description: 'Schedule a Swoop walkthrough with available time slots and direct contact fallback.',
  path: '/demo',
})

export default function DemoPage() {
  return (
    <div className="space-y-12 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-container grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-swoop-accent">Demo</p>
          <h1 className="mt-4 text-4xl font-bold">Book a walkthrough time that fits your week.</h1>
          <p className="mt-4 text-swoop-muted">Choose a slot and we will send a confirmation email with attendee details, agenda, and prep notes.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/book-demo" className="inline-flex rounded-lg bg-swoop-dark px-4 py-2 text-sm font-semibold text-white">Open full intake form</Link>
            <a href="mailto:hello@swoopgolf.com" className="inline-flex rounded-lg border border-swoop-border px-4 py-2 text-sm font-semibold">Email fallback</a>
          </div>
        </div>
        <SchedulerMock />
      </div>
      <div className="mx-auto max-w-container rounded-2xl border border-swoop-border bg-white p-6 text-sm text-swoop-muted">
        Direct fallback: +1-480-680-6234 or hello@swoopgolf.com
      </div>
    </div>
  )
}
