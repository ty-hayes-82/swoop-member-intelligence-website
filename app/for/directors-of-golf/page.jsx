import { buildMetadata } from '@/lib/metadata'
import AudiencePage from '@/components/AudiencePage.jsx'

export const metadata = buildMetadata({
  title: 'For Directors of Golf',
  description: 'Demand intelligence so every tee time is filled at maximum yield.',
  path: '/for/directors-of-golf',
})

export default function DirectorsOfGolfPage() {
  const hero = {
    title: 'Fill every tee time at maximum yield',
    subtitle: 'Predict cancellations, reroute waitlists, and protect your best members before the slot disappears.',
    supportText: 'Demand heatmap ready to preview',
    miniDashboard: {
      title: 'Demand Pulse — Saturday',
      subtitle: '7:00 AM to 11:00 AM peak',
      pill: '⛳ Tee Sheet',
      rows: [
        { label: 'Cancellation forecast', detail: '5 high-risk slots · $8.7K revenue', value: 'Fill now', color: '#F97316' },
        { label: 'Priority waitlist', detail: 'Anne Jordan · Kevin Hurst · Linda Leonard', value: 'Notify first', color: '#FBBF24' },
        { label: 'Post-round dining', detail: 'Wind advisory pushes golfers inside', value: '+20% covers', color: '#4ADE80' },
        { label: 'No-show shield', detail: 'Auto reroute in 15 min if unconfirmed', value: 'Armed', color: '#60A5FA' },
      ],
    },
  }

  const painPoints = [
    {
      icon: '📵',
      title: 'Cancellation no-shows waste prime slots',
      text: 'Predictive alerts fire 48 hours ahead so you can reroute the tee time before the weather app does.',
    },
    {
      icon: '🗓️',
      title: 'No demand visibility beyond 48 hours',
      text: 'Heatmaps show demand spikes a week out so you can adjust pricing or create overflow events.',
    },
    {
      icon: '📋',
      title: 'Waitlist lives in a manual spreadsheet',
      text: 'Swoop ranks the list by retention impact, acceptance rate, and spend so the right member gets the call.',
    },
  ]

  const mondayItems = [
    { label: '5 high-risk cancellations', detail: 'Wind and travel alerts triggered auto-fill workflow', color: '#F87171' },
    { label: 'Retention-priority queue', detail: 'Notify Anne, Kevin, and Linda before FIFO list', color: '#FBBF24' },
    { label: 'Yield target', detail: 'Weekend slots priced to $127 avg · 94% booked', color: '#60A5FA' },
    { label: 'Dining coordination', detail: 'F&B staffed for 20% post-round spike', color: '#4ADE80' },
  ]

  const fridayMetrics = [
    { label: 'Utilization', value: '94%', trend: 'Peak hours over target', trendColor: '#4ADE80' },
    { label: 'Revenue per slot', value: '$127', trend: '+$18 vs last month', trendColor: '#60A5FA' },
    { label: 'No-shows prevented', value: '15', trend: '40% fewer than last week', trendColor: '#4ADE80' },
    { label: 'Priority fills', value: '7', trend: 'All at-risk members saved', trendColor: '#FBBF24' },
  ]

  const dashboard = {
    title: 'Demand heatmap',
    subtitle: 'Visualize every slot by utilization, yield, and waitlist pressure.',
    metrics: [
      { label: 'Saturday 7-9 AM fill', value: '100%', fill: 1, barColor: '#4ADE80' },
      { label: 'Weekday opportunity', value: '72%', fill: 0.72, barColor: '#60A5FA' },
      { label: 'Waitlist priority', value: '18', fill: 0.5, barColor: '#FBBF24' },
    ],
    table: {
      columns: ['Slot', 'Demand', 'Action'],
      rows: [
        { cells: ['Sat 7:24', 'Oversubscribed · 11 waitlist', 'Retention-first alert sent'] },
        { cells: ['Sat 8:16', 'High risk cancellation', 'Anne Jordan reassigned'] },
        { cells: ['Tue 10:32', 'Underutilized', 'Push weekday clinic offer'] },
      ],
    },
  }

  const testimonial = {
    quote: 'We finally stopped guessing who should get the next slot. The system routes it to the member we can&apos;t afford to lose.',
    name: 'Mike Torres',
    title: 'Director of Golf',
    club: 'Scottsdale National',
  }

  const metrics = [
    { value: '94%', label: 'Utilization', accent: '#4ADE80' },
    { value: '$127', label: 'Per slot peak', accent: '#60A5FA' },
    { value: '40%', label: 'Fewer no-shows', accent: '#FBBF24' },
  ]

  const faq = [
    {
      question: 'How does Swoop predict cancellations?',
      answer: 'We combine tee sheet history, weather, player behavior, and travel data to assign a probability to each booking.',
    },
    {
      question: 'Can I still override the waitlist?',
      answer: 'Absolutely. The system teed up the math, but you choose who gets the slot. Override with one click.',
    },
    {
      question: 'Does this tie into F&B and events?',
      answer: 'Yes. Post-round dining, clinics, and events automatically adjust staffing and offers based on the demand signal.',
    },
    {
      question: 'Will this work with my existing tee sheet?',
      answer: 'We integrate with the major tee sheet platforms and handle the automation layer for you.',
    },
  ]

  const cta = {
    headline: 'Turn cancellations into your best retention tool.',
    subtext: 'See the demand heatmap, priority queue, and auto-fill workflow using your own play volume assumptions.',
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
