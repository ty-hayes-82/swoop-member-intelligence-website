import { buildMetadata } from '@/lib/metadata'
import AudiencePage from '@/components/AudiencePage.jsx'

export const metadata = buildMetadata({
  title: 'For Ownership & Board',
  description: 'Portfolio-grade visibility for dues revenue, member health, and retention ROI.',
  path: '/for/ownership-board',
})

export default function OwnershipBoardPage() {
  const hero = {
    title: 'Finally see what your dues revenue actually looks like',
    subtitle: 'Live dues at risk, membership health, and ROI on every spend show up before the quarterly packet.',
    supportText: 'Board-ready in two weeks',
    miniDashboard: {
      title: 'Portfolio Health — January',
      subtitle: '5 clubs · $9.4M dues',
      pill: 'Board View',
      rows: [
        { label: 'Oakmont Hills', detail: 'At-risk dues $216K · 12 saves', value: '↑ 3.2x ROI', color: '#4ADE80' },
        { label: 'Stone Creek', detail: 'Renewal rate 91% · watch list 18', value: 'Hold steady', color: '#FBBF24' },
        { label: 'Silver Mesa', detail: 'Critical dues $84K · staffing gap', value: 'Escalate', color: '#F87171' },
        { label: 'Next action', detail: 'Approve retention fund reallocation', value: 'Vote today', color: '#60A5FA' },
      ],
    },
  }

  const painPoints = [
    {
      icon: '🔍',
      title: 'No visibility into member health',
      text: 'Board decks show last quarter. Swoop shows today&apos;s members at risk so governance decisions are proactive.',
    },
    {
      icon: '📄',
      title: 'Reactive board reports',
      text: 'You wait for anecdotes from each GM. Swoop normalizes every metric so you compare apples to apples.',
    },
    {
      icon: '💸',
      title: 'Can&apos;t quantify retention ROI',
      text: 'Every outreach, staffing decision, and comp offer ties back to dues protected so funding conversations are objective.',
    },
  ]

  const mondayItems = [
    { label: 'Portfolio dues at risk', detail: '$633K flagged across 5 clubs', color: '#F87171' },
    { label: 'Capital ask readiness', detail: '3 initiatives show modeled payback within 9 months', color: '#4ADE80' },
    { label: 'Unresolved escalations', detail: '2 clubs over SLA on service recovery', color: '#FBBF24' },
    { label: 'Board packet status', detail: 'Auto-generated Friday at 3:00 PM', color: '#60A5FA' },
  ]

  const fridayMetrics = [
    { label: 'Renewal rate', value: '94%', trend: '+2 pts vs last quarter', trendColor: '#4ADE80' },
    { label: 'Dues protected', value: '$633K', trend: 'Attributed to retention playbooks', trendColor: '#60A5FA' },
    { label: 'ROI on spend', value: '3.2x', trend: 'Playbooks vs dues saved', trendColor: '#4ADE80' },
    { label: 'Escalations closed', value: '11', trend: 'Board visibility in <24h', trendColor: '#FBBF24' },
  ]

  const dashboard = {
    title: 'Board report snapshot',
    subtitle: 'Compare every club side by side. See dues, health score, and risk trajectory instantly.',
    metrics: [
      { label: 'Portfolio health score', value: '78', fill: 0.78, barColor: '#4ADE80' },
      { label: 'Critical dues exposure', value: '$112K', fill: 0.4, barColor: '#F97316' },
      { label: 'Playbooks active', value: '14', fill: 0.6, barColor: '#60A5FA' },
    ],
    table: {
      columns: ['Club', 'Renewal', 'Dues at risk'],
      rows: [
        { cells: ['Oakmont Hills', '96%', '$216K · trending down'] },
        { cells: ['Stone Creek', '91%', '$84K · stable'] },
        { cells: ['Silver Mesa', '88%', '$151K · needs action'] },
      ],
    },
  }

  const testimonial = {
    quote: 'We stopped arguing about anecdotes and started looking at one set of numbers. That changed every board conversation overnight.',
    name: 'James Morrison',
    title: 'Board President',
    club: 'Pinnacle Club',
  }

  const metrics = [
    { value: '$633K', label: 'Dues protected', accent: '#4ADE80' },
    { value: '94%', label: 'Renewal rate', accent: '#60A5FA' },
    { value: '3.2x', label: 'ROI first year', accent: '#FBBF24' },
  ]

  const faq = [
    {
      question: 'How does Swoop normalize data across clubs?',
      answer: 'We ingest tee sheet, POS, CRM, and staffing for each property, then apply the same health scoring and revenue math so comparisons are fair.',
    },
    {
      question: 'Will this replace our finance system?',
      answer: 'No. Swoop layers on top to show dues exposure, retention ROI, and operational signals that finance systems cannot see.',
    },
    {
      question: 'Can we export board-ready packets?',
      answer: 'Yes. One click exports PDF, slide, or web packet with live metrics, commentary, and ROI trails.',
    },
    {
      question: 'How do capital/funding decisions show ROI?',
      answer: 'Every initiative (staffing, outreach, comp offers) logs costs and dues saved so you can justify or reject spend confidently.',
    },
  ]

  const cta = {
    headline: 'Give your board the numbers before the meeting even starts.',
    subtext: 'See dues at risk, renewals, and ROI tied to every plan so funding decisions are backed by proof.',
    buttonText: 'Book a Board Demo',
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
