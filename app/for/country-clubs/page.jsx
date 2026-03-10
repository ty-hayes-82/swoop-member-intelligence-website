import { buildMetadata } from '@/lib/metadata'
import AudiencePage from '@/components/AudiencePage.jsx'

export const metadata = buildMetadata({
  title: 'For Country Clubs',
  description: 'Connect golf, dining, pool, tennis, and events in one intelligence layer.',
  path: '/for/country-clubs',
})

export default function CountryClubsPage() {
  const hero = {
    title: 'Golf, dining, pool, tennis — finally connected',
    subtitle: 'Unify every department so staffing, covers, and events react to the same signals.',
    supportText: 'Cross-department dashboard included',
    miniDashboard: {
      title: 'Cross-Department Pulse',
      subtitle: 'Oakmont Country Club · Live',
      pill: '4 Departments',
      rows: [
        { label: 'Golf', detail: 'Wind advisory noon · 5 cancellations predicted', value: 'Adjust tee sheet', color: '#60A5FA' },
        { label: 'Dining', detail: 'Post-round covers +22% expected', value: 'Add staff', color: '#4ADE80' },
        { label: 'Pool / Tennis', detail: 'Family event tonight · 145 RSVPs', value: 'Confirm setup', color: '#FBBF24' },
        { label: 'Events', detail: 'Chef&apos;s tasting sold out · upsell wine pairing', value: 'Ready', color: '#F97316' },
      ],
    },
  }

  const painPoints = [
    {
      icon: '🧩',
      title: 'Departments operate in silos',
      text: 'Swoop shares the same signals with golf, dining, events, and pool so everyone plans together.',
    },
    {
      icon: '🍽️',
      title: 'F&B doesn&apos;t know golfer patterns',
      text: 'Post-round conversion data flows straight into cover forecasts.',
    },
    {
      icon: '🎉',
      title: 'Events team guesses attendance',
      text: 'Member health + RSVP history predicts turnout so staffing and prep are accurate.',
    },
  ]

  const mondayItems = [
    { label: 'Golf signals', detail: 'Wind + travel adjustments pushed to F&B', color: '#60A5FA' },
    { label: 'Dining staffing', detail: 'Lunch shift up 20% from cross-sell campaigns', color: '#4ADE80' },
    { label: 'Events prep', detail: 'Tonight&apos;s tasting at 145 covers · assign ambassadors', color: '#F97316' },
    { label: 'Pool / Tennis', detail: 'Family weekend forecasted · add concierge desk', color: '#FBBF24' },
  ]

  const fridayMetrics = [
    { label: 'Departments connected', value: '4', trend: 'Golf · F&B · Events · Amenities', trendColor: '#60A5FA' },
    { label: 'Cover accuracy', value: '95%', trend: '145 predicted · 147 served', trendColor: '#4ADE80' },
    { label: 'Event attendance lift', value: '2.1x', trend: 'Targeted outreach vs blast', trendColor: '#FBBF24' },
    { label: 'Staffing variance', value: '-8%', trend: 'Fewer surprise gaps', trendColor: '#4ADE80' },
  ]

  const dashboard = {
    title: 'Cross-department dashboard',
    subtitle: 'One pane of glass for golf, dining, pool, and tennis.',
    metrics: [
      { label: 'Golf utilization', value: '91%', fill: 0.91, barColor: '#60A5FA' },
      { label: 'Dining conversion', value: '41%', fill: 0.41, barColor: '#4ADE80' },
      { label: 'Event RSVPs', value: '145', fill: 0.8, barColor: '#FBBF24' },
    ],
    table: {
      columns: ['Department', 'Signal', 'Action'],
      rows: [
        { cells: ['Golf', 'Wind advisory noon', 'Add marshals · alert dining'] },
        { cells: ['Dining', '22% more post-round covers', 'Open east dining room'] },
        { cells: ['Events', '145 RSVPs · 32 high value guests', 'Seat by loyalty tier'] },
      ],
    },
  }

  const testimonial = {
    quote: 'Our COO dashboard finally shows how golf decisions impact dining and events. The teams plan together instead of blaming each other.',
    name: 'Linda Foster',
    title: 'COO',
    club: 'Oakmont Country Club',
  }

  const metrics = [
    { value: '4', label: 'Departments connected', accent: '#60A5FA' },
    { value: '145', label: 'Cover accuracy 95%', accent: '#4ADE80' },
    { value: '2.1x', label: 'Event attendance lift', accent: '#FBBF24' },
  ]

  const faq = [
    {
      question: 'How do departments share data?',
      answer: 'Swoop ties tee sheet, POS, locker check-ins, and RSVP feeds together with alerts routed to each leader.',
    },
    {
      question: 'Can we keep existing staffing tools?',
      answer: 'Yes. Swoop pushes recommendations into whatever task or scheduling tool you already use.',
    },
    {
      question: 'Does this work for seasonal amenities?',
      answer: 'Absolutely. Pool, tennis, spa, and childcare trends are monitored just like golf and dining.',
    },
    {
      question: 'How does this help events sell out?',
      answer: 'Member health plus preference data means invites go to the right households, increasing RSVP rates by more than 2x.',
    },
  ]

  const cta = {
    headline: 'Give every department the same source of truth.',
    subtext: 'Watch golf signals cascade into dining, events, and amenities in one live view.',
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
