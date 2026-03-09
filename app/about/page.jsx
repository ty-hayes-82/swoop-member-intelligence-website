import { buildMetadata } from '@/lib/metadata'
import CTASection from '@/components/CTASection'

export const metadata = buildMetadata({
  title: 'About Swoop Golf',
  description: 'Swoop Golf builds AI-powered intelligence for private club General Managers. Founded by Ty Hayes in Scottsdale, AZ.',
  path: '/about',
})

const values = [
  {
    title: 'Protect the member relationship',
    detail: 'We build around the moments clubs lose trust: unresolved complaints, quiet disengagement, and missed recovery windows.',
  },
  {
    title: 'Connect systems, reduce fire drills',
    detail: 'GMs should not stitch five exports before every board conversation. We normalize the data, then make it actionable.',
  },
  {
    title: 'Operational ROI must be provable',
    detail: 'Every recommendation in Swoop is tied to measurable outcomes so leadership can fund what works.',
  },
]

const team = [
  {
    name: 'Ty Hayes',
    role: 'Founder & CEO',
    bio: 'Former club-operations operator turned product builder. Ty founded Swoop in Scottsdale to solve preventable member loss and blind-spot reporting.',
  },
  {
    name: 'Maya Kline',
    role: 'VP, Club Success',
    bio: 'Leads onboarding and intervention playbooks across private clubs and multi-property operators.',
  },
  {
    name: 'Graham Liu',
    role: 'Head of Engineering',
    bio: 'Owns the real-time data pipeline and reliability across integrations, agents, and reporting surfaces.',
  },
  {
    name: 'Sofia Delgado',
    role: 'Head of Product',
    bio: 'Translates GM workflows into product UX so daily briefings and actions stay practical, not theoretical.',
  },
]

const stack = ['Snowflake', 'Postgres', 'React Native', 'Vercel']

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6 relative overflow-hidden border-b border-swoop-border">
        <div className="absolute inset-0 z-0 opacity-80" aria-hidden>
          <div className="w-full h-full bg-[radial-gradient(circle_at_top,_rgba(243,146,45,0.24),_transparent_45%),linear-gradient(130deg,rgba(31,47,36,0.14),transparent_60%)]" />
        </div>
        <div className="max-w-container mx-auto relative z-10 max-w-4xl">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built for clubs that cannot afford invisible problems.</h1>
          <p className="text-lg text-swoop-muted max-w-3xl">
            Swoop exists to help GMs catch the warning signs they already know matter: quiet churn signals, service failures, and portfolio blind spots hidden across disconnected systems.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-container mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-swoop-border bg-swoop-bg p-8">
            <h2 className="text-2xl font-bold mb-4">Mission</h2>
            <p className="text-swoop-muted leading-relaxed">
              Give every private-club GM a single operational truth layer that turns early risk signals into timely action, measurable saves, and calmer daily operations.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Values</h2>
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-swoop-border p-5">
                <h3 className="font-semibold mb-1">{value.title}</h3>
                <p className="text-sm text-swoop-muted">{value.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Team</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((person) => (
              <article key={person.name} className="rounded-xl border border-swoop-border bg-white p-6">
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-sm text-swoop-accent font-semibold mt-1">{person.role}</p>
                <p className="mt-3 text-sm text-swoop-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto rounded-2xl border border-white/20 p-8">
          <p className="text-xs uppercase tracking-wider text-white/60 mb-2">Advisory Board</p>
          <h2 className="text-2xl font-bold mb-3">Operators and analysts who have run the job.</h2>
          <p className="text-white/75">Guided by advisors with backgrounds as private-club GM, multi-property COO, and applied data science lead for hospitality forecasting.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stack.map((item) => (
              <div key={item} className="rounded-lg border border-swoop-border bg-swoop-bg px-4 py-5 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-muted">Swoop Golf · Scottsdale, Arizona</p>
          <p className="text-swoop-muted mt-2">hello@swoopgolf.com · 480-680-6234</p>
        </div>
      </section>

      <CTASection headline="Let's talk about your club." />
    </>
  )
}
