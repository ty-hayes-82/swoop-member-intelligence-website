import { buildMetadata } from '@/lib/metadata'
import AudiencePage from '@/components/AudiencePage.jsx'

export const metadata = buildMetadata({
  title: 'For General Managers',
  description: 'Give your GM team a single command center so nothing slips through the cracks.',
  path: '/for/general-managers',
})

export default function GeneralManagersPage() {
  const hero = {
    title: 'Stop managing your club by gut feel',
    subtitle: 'Swoop pulls tee sheet, POS, staffing, and complaints into a single daily plan so you wake up knowing exactly what to do.',
    supportText: 'Live Oakmont Hills CC demo available',
    miniDashboard: {
      title: 'Daily Briefing — Today 6:00 AM',
      subtitle: 'Oakmont Hills CC · Demo Env',
      pill: 'LIVE',
      rows: [
        { label: 'James Whitfield', detail: 'Complaint unresolved · Grill Room', value: 'Urgent', color: '#F87171' },
        { label: 'Anne Jordan', detail: 'Rounds down 75% · Tee time 8:14 AM', value: 'Call Today', color: '#FBBF24' },
        { label: 'Staffing Gap', detail: 'Lunch shift short 2 servers', value: 'Fill ASAP', color: '#4ADE80' },
        { label: 'Agent Inbox', detail: '6 actions waiting for approval', value: 'Open Inbox', color: '#60A5FA' },
      ],
    },
  }

  const painPoints = [
    {
      icon: '🎯',
      title: 'Where is today at risk of breaking?',
      text: '“I manage by anecdotes and lagging reports — I can’t see what’s about to break until it’s too late.” Swoop surfaces staffing gaps, pacing issues, and complaints before 7 AM.',
    },
    {
      icon: '💰',
      title: 'What ops failures are costing you F&B spend?',
      text: '“I know my F&B numbers, but I can’t connect a bad hole-9 experience to a lost dinner.” Swoop traces pace of play to post-round covers to revenue impact.',
    },
    {
      icon: '🔍',
      title: 'Which members are quietly drifting away?',
      text: '“I can see rounds and spend, but I can’t see when a good member is quietly drifting away.” Swoop catches disengagement across touchpoints weeks before resignation.',
    },
  ]

  const mondayItems = [
    { label: 'Grill Room complaint aging 6 days', detail: 'Assign recovery and comp dinner for James Whitfield', color: '#F87171' },
    { label: 'Wind advisory at noon', detail: 'Add marshals + alert F&B that golfers will stay inside', color: '#FBBF24' },
    { label: 'Two at-risk members on today\'s tee sheet', detail: 'Membership Director to greet Anne Jordan & Robert Callahan', color: '#4ADE80' },
    { label: 'Agent Inbox', detail: '6 AI recommendations awaiting GM approval', color: '#60A5FA' },
  ]

  const fridayMetrics = [
    { label: 'Dues protected', value: '$54K', trend: '+$18K vs last week', trendColor: '#4ADE80' },
    { label: 'Service incidents closed', value: '5 of 6', trend: '1 escalated to F&B', trendColor: '#FBBF24' },
    { label: 'Staffing accuracy', value: '92%', trend: '+6 pts week over week', trendColor: '#4ADE80' },
    { label: 'Board packet status', value: 'Ready', trend: 'Export queued automatically', trendColor: '#60A5FA' },
  ]

  const dashboard = {
    title: 'Operations command center — live',
    subtitle: 'Every view in one panel: member health, demand, F&B, staffing.',
    metrics: [
      { label: 'At-risk members', value: '34', fill: 0.68, barColor: '#F97316' },
      { label: 'Dues at stake', value: '$540K', fill: 0.82, barColor: '#F87171' },
      { label: 'Service SLA', value: '92%', fill: 0.92, barColor: '#4ADE80' },
    ],
    table: {
      columns: ['Member', 'Score', 'Next move'],
      rows: [
        { cells: ['James Whitfield', '42', 'GM call + service recovery today'] },
        { cells: ['Anne Jordan', '38', 'Assign ambassador for post-round lunch'] },
        { cells: ['Robert Callahan', '41', 'Invite to Chef\'s table + review dues risk'] },
      ],
    },
  }

  const testimonial = {
    quote: 'Swoop is the first system that tells me what is about to break instead of applauding what already happened.',
    name: 'Sarah Chen',
    title: 'General Manager',
    club: 'Desert Ridge CC',
  }

  const metrics = [
    { value: '89%', label: 'Retention rate', accent: '#4ADE80' },
    { value: '4', label: 'Saves this month', accent: '#FBBF24' },
    { value: '22 min', label: 'Avg daily review', accent: '#60A5FA' },
  ]

  const faq = [
    {
      question: 'How fast can we get live data inside the briefing?',
      answer: 'Most clubs connect tee sheet + POS + complaints within 10 business days. The Monday briefing starts populating as soon as the feeds sync.',
    },
    {
      question: 'Will Swoop replace our existing dashboards?',
      answer: 'Keep whatever BI stacks you already purchased. Swoop is the operational layer that routes actions and tracks ROI.',
    },
    {
      question: 'Who approves AI recommendations?',
      answer: 'You do. Agents tee up the math. Nothing routes without a human hitting Approve.',
    },
    {
      question: 'Can board members log in?',
      answer: 'Yes. They get a portfolio-grade view showing dues at risk, saves, and ROI tied to every initiative.',
    },
  ]

  const cta = {
    headline: 'Ready to run Monday like a pro and show receipts on Friday?',
    subtext: 'Book a 30 minute session and we will load your assumptions into the live briefing so you can see the plan before next weekend.',
    buttonText: 'Book a Demo',
  }

  return (
    <AudiencePage
      hero={hero}
      painPoints={painPoints}
      mondayItems={mondayItems}
      fridayMetrics={fridayMetrics}
      dashboard={dashboard}
      testimonial={testimonial}
      metrics={metrics}
      faq={faq}
      cta={cta}
    />
  )
}
