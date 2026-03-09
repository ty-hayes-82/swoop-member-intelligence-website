import Link from 'next/link'
import CTASection from '@/components/CTASection'
import Image from 'next/image'

export const metadata = {
  title: 'Oakmont Hills CC — The James Whitfield Story',
  description: 'How Swoop detected a $22K/yr resignation risk 6 days before it happened — by connecting signals across tee sheet, POS, and CRM.',
}

export default function OakmontHillsPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6 bg-swoop-dark text-white relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=1600&q=80"
            alt="Country club exterior at dusk"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>
        <div className="max-w-container mx-auto max-w-3xl relative z-10">
          <Link href="/case-studies" className="text-sm text-white/50 hover:text-white/80 transition mb-4 inline-block">← Back to Case Studies</Link>
          <p className="text-swoop-green font-mono text-sm mb-4">DEMO SCENARIO · OAKMONT HILLS CC · SCOTTSDALE, AZ</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">You had 6 days. Your tee sheet software never told you.</h1>
          <p className="text-xl text-white/70">The story of James Whitfield — and the $22,000/year resignation that should never have happened.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto max-w-3xl prose-lg">
          <div className="space-y-8 text-lg leading-relaxed text-swoop-text">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6">
              <p className="text-sm font-bold text-swoop-muted uppercase tracking-wider mb-3">The Member</p>
              <p><strong>James Whitfield</strong> has been a member at Oakmont Hills for 12 years. He plays twice a week, dines at the Grill Room after every round, and his family uses the pool all summer. His annual value to the club: <strong className="font-mono text-swoop-dark">$22,000</strong>.</p>
            </div>

            <div className="border-l-4 border-swoop-border pl-6">
              <p className="font-bold mb-2">January 3 — First signal</p>
              <p className="text-swoop-muted">Grill Room is short-staffed on Friday lunch. James waits 35 minutes for his usual post-round burger. He doesn&apos;t complain — yet. His POS spend is normal. Tee sheet shows his usual Saturday booking.</p>
            </div>

            <div className="border-l-4 border-swoop-border pl-6">
              <p className="font-bold mb-2">January 9 — Second signal</p>
              <p className="text-swoop-muted">Another short-staffed Friday. James waits 40 minutes. This time he skips dessert and leaves early. His POS check drops from $47 to $28. Tee sheet still normal.</p>
            </div>

            <div className="border-l-4 border-lens-staffing pl-6">
              <p className="font-bold mb-2">January 16 — The complaint</p>
              <p className="text-swoop-muted">Third Friday in a row. James waits 42 minutes. He files a formal complaint about pace of service. The complaint is acknowledged by email. <strong className="text-red-500">No one follows up.</strong></p>
            </div>

            <div className="bg-swoop-green/10 border border-swoop-green/30 rounded-xl p-6">
              <p className="text-sm font-bold text-swoop-green uppercase tracking-wider mb-3">⚡ Swoop flags James — January 16</p>
              <p>Swoop connects three signals across three systems: declining F&B spend (POS), unresolved complaint (CRM), and consistent booking pattern about to break (tee sheet). Health score drops from 78 to 42. <strong>Member Pulse recommends: GM personal call within 24 hours.</strong></p>
            </div>

            <div className="border-l-4 border-red-400 pl-6">
              <p className="font-bold mb-2 text-red-500">January 22 — Without Swoop</p>
              <p className="text-swoop-muted">James resigns. His resignation letter cites &quot;declining service quality.&quot; The club loses $22,000/year in dues, plus an estimated $8,000/year in F&B and guest fees. His 12-year tenure ends over three understaffed Fridays and one unresolved complaint.</p>
            </div>

            <div className="bg-swoop-dark text-white rounded-xl p-8 text-center">
              <p className="text-5xl font-bold font-mono text-swoop-green mb-4">6 days</p>
              <p className="text-xl">That&apos;s how much warning Swoop gave you. Your tee sheet saw bookings. Your POS saw checks. Your CRM saw a complaint. <strong>Only Swoop saw a member about to leave.</strong></p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 text-center">
              <p className="font-mono text-3xl font-bold text-red-500">$22K/yr</p>
              <p className="text-sm text-swoop-muted mt-2">Revenue lost</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 text-center">
              <p className="font-mono text-3xl font-bold text-swoop-green">6 days</p>
              <p className="text-sm text-swoop-muted mt-2">Early warning</p>
            </div>
            <div className="bg-swoop-card border border-swoop-border rounded-xl p-6 text-center">
              <p className="font-mono text-3xl font-bold text-swoop-accent">1 call</p>
              <p className="text-sm text-swoop-muted mt-2">Intervention needed</p>
            </div>
          </div>

          <p className="text-sm text-swoop-muted mt-8 text-center">This scenario uses simulated data from the Oakmont Hills CC demo environment. Real founding partner case studies will be published as clubs onboard.</p>
        </div>
      </section>

      <CTASection headline="Don't let this happen at your club." subtext="Book a demo. We'll show you James Whitfield's story with your own scenarios." />
    </>
  )
}
