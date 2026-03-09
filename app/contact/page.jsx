import { buildMetadata } from '@/lib/metadata'
import DemoForm from '@/components/DemoForm'

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch with Swoop Golf. Questions about the platform, pricing, or partnerships — we\'d love to hear from you.',
  path: '/contact',
})

const faqs = [
  {
    question: 'How fast can we get a response?',
    answer: 'We reply to every inbound request within 1 business day, and enterprise inquiries typically get same-day routing.',
  },
  {
    question: 'Do you support portfolio operators with multiple clubs?',
    answer: 'Yes. We support single-club and multi-property groups, with dedicated onboarding and centralized reporting workflows.',
  },
  {
    question: 'Can we talk live before booking a full demo?',
    answer: 'Yes. Call us directly or use concierge chat for a quick triage conversation before your full walkthrough.',
  },
]

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <section className="py-20 md:py-28 px-6 border-b border-swoop-border relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80" aria-hidden>
          <div className="w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(243,146,45,0.2),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(74,222,128,0.12),_transparent_55%)]" />
        </div>
        <div className="max-w-container mx-auto relative z-10">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Talk to the Swoop team.</h1>
          <p className="text-lg text-swoop-muted max-w-3xl mb-8">
            Questions on integrations, pricing, enterprise rollout, or pilot planning? Reach us directly and we&apos;ll route you to the right team quickly.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-swoop-border bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-1">Direct email</p>
              <p className="font-semibold">hello@swoopgolf.com</p>
            </div>
            <div className="rounded-xl border border-swoop-border bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-1">Phone</p>
              <p className="font-semibold">480-680-6234</p>
            </div>
            <div className="rounded-xl border border-swoop-border bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-1">Concierge chat</p>
              <p className="font-semibold">In-app + web concierge</p>
            </div>
            <div className="rounded-xl border border-swoop-border bg-white p-4">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-1">Enterprise</p>
              <p className="font-semibold">enterprise@swoopgolf.com</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-swoop-dark px-3 py-1 text-white">Office Hours: Mon–Fri, 7:00 AM–6:00 PM MST</span>
            <span className="rounded-full border border-[#4ADE80] bg-[#4ADE80]/10 px-3 py-1 font-semibold text-[#1F2F24]">Response Time Guarantee: within 1 business day</span>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div id="contact-form" className="bg-swoop-card border border-swoop-border rounded-xl p-8 shadow-lg">
            <DemoForm />
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border border-swoop-border bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-2">Talk to us now</p>
              <a href="tel:+14806806234" className="block rounded-lg bg-swoop-dark px-4 py-3 text-white text-sm font-semibold mb-3">Call 480-680-6234</a>
              <a href="mailto:hello@swoopgolf.com" className="block rounded-lg border border-swoop-border px-4 py-3 text-sm font-semibold">Start concierge chat / email</a>
            </div>
            <div className="rounded-xl border border-swoop-border bg-white p-6">
              <p className="text-xs uppercase tracking-wider text-swoop-muted mb-2">Office</p>
              <p className="font-semibold">Scottsdale, AZ</p>
              <p className="text-sm text-swoop-muted mt-2">Serving private clubs across the U.S.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-xl border border-swoop-border bg-white p-6">
                <h3 className="font-semibold mb-2">{item.question}</h3>
                <p className="text-sm text-swoop-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
