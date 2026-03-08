import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'Why Swoop',
  description: 'Standalone waitlist tools fill tee times. Swoop fills tee times with the right members — and proves the revenue impact of every decision.',
}

const objections = [
  {
    question: 'Why not just use a standalone waitlist tool?',
    answer: 'Standalone waitlist tools fill cancelled slots — one function from one data source. Swoop gives you cross-system intelligence: which members to prioritize, what their dining and engagement patterns predict, and how to close the loop with personalized outreach. Waitlist software is a feature. Swoop is the operating layer.',
  },
  {
    question: 'Why not just use my CRM reports?',
    answer: "Your CRM stores records. Swoop connects records across systems — tee sheet, POS, member engagement, staffing — and turns the gaps between them into actionable intelligence. A CRM tells you who resigned. Swoop tells you who's about to.",
  },
  {
    question: 'Why not build dashboards in Excel?',
    answer: "You can build a dashboard. You can't build prediction. Swoop's AI agents monitor behavioral signals in real time and recommend interventions before problems become resignations. Spreadsheets report the past. Swoop protects the future.",
  },
]

export default function WhySwoopPage() {
  return (
    <>
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-container mx-auto text-center">
          <p className="text-swoop-accent text-sm font-bold uppercase tracking-wider mb-4">Why Swoop</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Standalone waitlist tools fill tee times.<br />Swoop fills them with the right members.
          </h1>
          <p className="text-lg text-swoop-muted max-w-2xl mx-auto">
            And proves the revenue impact of every decision.
          </p>
        </div>
      </section>

      {/* James Whitfield story */}
      <section className="py-20 px-6 bg-swoop-dark text-white">
        <div className="max-w-container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">The story your tee sheet software never told you.</h2>
          <div className="space-y-6 text-white/80 text-lg leading-relaxed">
            <p>James Whitfield has been a member for 12 years. He plays twice a week, dines at the grill room after every round, and his family uses the pool all summer. He&apos;s worth $22,000 a year to your club.</p>
            <p>On January 16th, James complained about pace of play. The complaint went into your system. Nobody followed up.</p>
            <p className="text-swoop-green font-semibold text-xl">Swoop flagged James on January 16th. You had 6 days to act.</p>
            <p>On January 22nd, James resigned. $22,000 per year — gone. Your tee sheet software never told you he was at risk. Your CRM had the complaint but no one connected it to his declining visits. Your POS showed his F&B spend had dropped 40% in two months. No single system saw the full picture.</p>
            <p className="text-2xl font-bold text-white">Swoop did. Six days before anyone else.</p>
          </div>
        </div>
      </section>

      {/* Objection handling */}
      <section className="py-20 px-6">
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">But what about...</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {objections.map((o) => (
              <div key={o.question} className="bg-swoop-card border border-swoop-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">{o.question}</h3>
                <p className="text-swoop-muted leading-relaxed">{o.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="See the difference for yourself." subtext="30 minutes. Your scenarios. Real intelligence." />
    </>
  )
}
