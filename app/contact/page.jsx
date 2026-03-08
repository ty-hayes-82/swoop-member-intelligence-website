import DemoForm from '@/components/DemoForm'

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Swoop Golf. Questions about the platform, pricing, or partnerships — we\'d love to hear from you.',
}

export default function ContactPage() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-container mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s talk.</h1>
          <p className="text-lg text-swoop-muted mb-8">
            Questions about the platform, pricing, integrations, or partnerships? We&apos;d love to hear from you.
          </p>
          <div className="space-y-4 text-swoop-muted">
            <p><span className="font-semibold text-swoop-text">Email:</span> hello@swoopgolf.com</p>
            <p><span className="font-semibold text-swoop-text">Location:</span> Scottsdale, Arizona</p>
          </div>
        </div>
        <div className="bg-swoop-card border border-swoop-border rounded-xl p-8">
          <DemoForm />
        </div>
      </div>
    </section>
  )
}
