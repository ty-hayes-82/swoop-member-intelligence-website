import { buildMetadata } from '@/lib/metadata'
import AudiencePage from '@/components/AudiencePage.jsx'

export const metadata = buildMetadata({
  title: 'For Multi-Club Operators',
  description: 'Portfolio intelligence across every property in one view.',
  path: '/for/multi-club-operators',
})

export default function MultiClubOperatorsPage() {
  const hero = {
    title: 'One dashboard across every property',
    subtitle: 'Compare retention, dues exposure, staffing, and ROI in a single command center instead of chasing spreadsheets.',
    supportText: 'Portfolio template ready for 5+ clubs',
    miniDashboard: {
      title: 'Portfolio Pulse',
      subtitle: 'Troon Group · Week 3',
      pill: '5 Clubs',
      rows: [
        { label: 'North Ridge', detail: 'Health 82 · dues at risk $42K', value: 'Healthy', color: '#4ADE80' },
        { label: 'Silver Mesa', detail: 'Health 67 · dues at risk $151K', value: 'Monitor', color: '#FBBF24' },
        { label: 'Canyon Vista', detail: 'Health 59 · staffing gap F&B', value: 'Act now', color: '#F97316' },
        { label: 'Board packet', detail: 'Auto export Friday 3 PM', value: 'Ready', color: '#60A5FA' },
      ],
    },
  }

  const painPoints = [
    {
      icon: '📈',
      title: 'Each club reports differently',
      text: 'Swoop normalizes health scoring, dues exposure, and saves so you can compare properties objectively.',
    },
    {
      icon: '🧩',
      title: 'No cross-property benchmarking',
      text: 'Spot which club is holding back retention or revenue and replicate wins instantly.',
    },
    {
      icon: '⏱️',
      title: 'Board wants consolidated view now',
      text: 'Generate a portfolio briefing in 15 minutes instead of a three-day fire drill.',
    },
  ]

  const mondayItems = [
    { label: 'Portfolio health snapshot', detail: '5 properties · average score 78', color: '#4ADE80' },
    { label: 'High-risk dues', detail: '$210K concentrated in 2 clubs', color: '#F87171' },
    { label: 'Capital project pipeline', detail: '3 funded initiatives with live ROI tracking', color: '#FBBF24' },
    { label: 'Board-ready exports', detail: 'Schedule auto delivery every Friday', color: '#60A5FA' },
  ]

  const fridayMetrics = [
    { label: 'Properties monitored', value: '5', trend: 'Unified view', trendColor: '#60A5FA' },
    { label: 'Dashboard logins', value: '1', trend: 'single sign-on for execs', trendColor: '#4ADE80' },
    { label: 'Portfolio review time', value: '15 min', trend: 'Down from 2 hours', trendColor: '#4ADE80' },
    { label: 'Saves this quarter', value: '18', trend: '+6 vs last quarter', trendColor: '#FBBF24' },
  ]

  const dashboard = {
    title: 'Portfolio command workbook',
    subtitle: 'Every property, one interface. Drill down or roll up instantly.',
    metrics: [
      { label: 'Avg health score', value: '78', fill: 0.78, barColor: '#4ADE80' },
      { label: 'At-risk dues', value: '$210K', fill: 0.45, barColor: '#F97316' },
      { label: 'Playbooks per club', value: '3.4', fill: 0.68, barColor: '#60A5FA' },
    ],
    table: {
      columns: ['Club', 'Health', 'Commentary'],
      rows: [
        { cells: ['North Ridge', '82', 'Stable — replicating Oakmont saves'] },
        { cells: ['Silver Mesa', '67', 'Needs service recovery assist'], },
        { cells: ['Canyon Vista', '59', 'Escalate staffing plan'], },
      ],
    },
  }

  const testimonial = {
    quote: 'Swoop became our truth source. The board stopped chasing five versions of the truth across five GMs.',
    name: 'Rachel Park',
    title: 'VP Operations',
    club: 'Troon Group',
  }

  const metrics = [
    { value: '5', label: 'Properties monitored', accent: '#60A5FA' },
    { value: '1', label: 'Unified dashboard', accent: '#4ADE80' },
    { value: '15 min', label: 'Portfolio review', accent: '#FBBF24' },
  ]

  const faq = [
    {
      question: 'How does pricing work for multiple clubs?',
      answer: 'We price per property with portfolio discounts so you can roll out one by one or all at once.',
    },
    {
      question: 'Can we limit what each GM sees?',
      answer: 'Yes. Give execs the full view while each GM only sees their property plus benchmarks.',
    },
    {
      question: 'Does Swoop replace our ERP or accounting tools?',
      answer: 'No. Swoop focuses on member intelligence, retention, and operational ROI. Finance systems stay in place.',
    },
    {
      question: 'How do we onboard five clubs quickly?',
      answer: 'We run a parallel cutover: connect feeds for all clubs, then light up the portfolio dashboard once validation is complete.',
    },
  ]

  const cta = {
    headline: 'Operate every property with the same clarity.',
    subtext: 'See how fast your exec team can audit retention, dues exposure, and capital ROI across the entire network.',
    buttonText: 'Book a Portfolio Demo',
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
