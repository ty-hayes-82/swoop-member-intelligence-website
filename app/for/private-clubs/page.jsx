import { buildMetadata } from '@/lib/metadata'
import AudiencePage from '@/components/AudiencePage.jsx'

export const metadata = buildMetadata({
  title: 'For Private Clubs',
  description: 'Give every member a personalized, proactive experience.',
  path: '/for/private-clubs',
})

export default function PrivateClubsPage() {
  const hero = {
    title: 'Your members expect you to know them',
    subtitle: 'Swoop tracks every preference, activity, and signal so outreach feels bespoke even with 300 members.',
    supportText: 'Oakmont-style member profiles included',
    miniDashboard: {
      title: 'Member Profile — Anne Jordan',
      subtitle: 'Weekend Warrior · Joined 2016',
      pill: 'Health 38',
      rows: [
        { label: 'Activity', detail: 'Rounds down 75% · dining minimum only', value: 'Declining', color: '#F97316' },
        { label: 'Preferences', detail: 'Prefers early tee + doubles espresso', value: 'Remember', color: '#4ADE80' },
        { label: 'Next touch', detail: 'Invite to Chef&apos;s table Friday', value: 'Scheduled', color: '#60A5FA' },
        { label: 'Notes', detail: 'Loved the Sept tasting · mention kids returning', value: 'Personal', color: '#FBBF24' },
      ],
    },
  }

  const painPoints = [
    {
      icon: '🧾',
      title: 'Can&apos;t remember 300 preferences',
      text: 'Member timelines store every note, complaint, and win so you never rely on memory.',
    },
    {
      icon: '📉',
      title: 'Miss engagement drops until too late',
      text: 'Health scores flag withdrawal in golf, dining, email, and events weeks earlier.',
    },
    {
      icon: '🤖',
      title: 'Generic outreach feels impersonal',
      text: 'Swoop drafts context-rich outreach and tracks who followed up so every touchpoint feels white-glove.',
    },
  ]

  const mondayItems = [
    { label: 'Top 10 households', detail: 'Personalized actions queued for each member', color: '#4ADE80' },
    { label: 'Service recovery list', detail: '3 members need a follow-up before Friday', color: '#F87171' },
    { label: 'Event invitations', detail: 'Wine dinner seats held for members with low dining spend', color: '#FBBF24' },
    { label: 'Ambassador assignments', detail: 'Pair new member tours with high NPS ambassadors', color: '#60A5FA' },
  ]

  const fridayMetrics = [
    { label: 'Member satisfaction', value: '98%', trend: '+4 pts vs last quarter', trendColor: '#4ADE80' },
    { label: 'Personal saves', value: '12', trend: 'Logged with ROI math', trendColor: '#60A5FA' },
    { label: 'Member profiles', value: '300', trend: 'Fully enriched', trendColor: '#FBBF24' },
    { label: 'Outreach coverage', value: '100%', trend: 'All high-value households touched weekly', trendColor: '#4ADE80' },
  ]

  const dashboard = {
    title: 'Member intimacy dashboard',
    subtitle: 'See every household, their engagement trend, and the next personal touch.',
    metrics: [
      { label: 'Households engaged', value: '272', fill: 0.9, barColor: '#4ADE80' },
      { label: 'Complaints unresolved', value: '2', fill: 0.2, barColor: '#F97316' },
      { label: 'Upcoming invites', value: '18', fill: 0.6, barColor: '#60A5FA' },
    ],
    table: {
      columns: ['Member', 'Health', 'Next action'],
      rows: [
        { cells: ['Anne Jordan', '38', 'Chef&apos;s table invite Friday'] },
        { cells: ['Robert Callahan', '41', 'Concierge call re: F&B experience'] },
        { cells: ['Linda Foster', '52', 'Remind about couples golf + babysitting'] },
      ],
    },
  }

  const testimonial = {
    quote: 'Our membership director finally has one place to prep before every conversation. Members feel like we remembered everything.',
    name: 'David Chen',
    title: 'Membership Director',
    club: 'Augusta Pines',
  }

  const metrics = [
    { value: '300', label: 'Member profiles', accent: '#60A5FA' },
    { value: '12', label: 'Personal saves', accent: '#4ADE80' },
    { value: '98%', label: 'Member satisfaction', accent: '#FBBF24' },
  ]

  const faq = [
    {
      question: 'Can we log personal notes and reminders?',
      answer: 'Yes. Every profile tracks notes, promised gestures, and context. Alerts remind staff before the next visit.',
    },
    {
      question: 'How does outreach get tracked?',
      answer: 'Swoop auto-assigns owners, drafts messages, and records who actually completed the touchpoint.',
    },
    {
      question: 'Will members see this data?',
      answer: 'No. This is an internal system to keep your team aligned and proactive.',
    },
    {
      question: 'Do we need more staff to manage it?',
      answer: 'No. Swoop eliminates the manual spreadsheets so your existing team can focus on relationships.',
    },
  ]

  const cta = {
    headline: 'Give every member the white-glove experience they expect.',
    subtext: 'See how health scores, personal notes, and outreach reminders flow into one member timeline.',
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
