import { theme } from './landing-theme';

export const problemCards = [
  {
    title: 'Member risk blind spot',
    summary: 'Your systems see pieces. None of them see the resignation forming.',
    highlights: [
      'CRM sees complaints. Tee sheet sees no-shows. POS sees declining spend.',
      'No shared timeline, so the GM reacts after the resignation letter arrives.',
    ],
    source: 'CRM + POS + Email',
    freshness: 'Updated 12 min ago',
    why: 'Engagement down 28% across six weeks',
    confidence: '91% confidence',
    metric: { value: '1-day', label: 'warning missed' },
  },
  {
    title: 'Complaint follow-up gap',
    summary: 'Acknowledged \u2260 resolved. Your complaint inbox tracks tickets, not saves.',
    highlights: [
      'James Whitfield waited 42 minutes, filed a complaint, and sat in "Acknowledged" for 6 days.',
      'No alert fired because the CRM saw a reply, not the absence of action.',
    ],
    source: 'Member CRM + Service Desk',
    freshness: 'Complaint aging: 6 days',
    why: 'No callback recorded \u00b7 satisfaction trending negative',
    confidence: '88% confidence',
    metric: { value: '$22K', label: 'annual dues at risk' },
  },
  {
    title: 'Demand vs. experience disconnect',
    summary: 'Tee sheet tools optimize fill rate, not retention outcomes.',
    highlights: [
      'FIFO waitlists keep healthy members happy while at-risk members walk away.',
      'Wind advisory shifts bookings indoors, but staffing and F&B prep stay blind.',
    ],
    source: 'Tee Sheet + Weather + POS',
    freshness: 'Wind advisory confirmed 45 min ago',
    why: '91% fill rate but 3 resignations tied to poor experience',
    confidence: '84% confidence',
    metric: { value: '$36K', label: 'dues + F&B leakage' },
  },
];

export const coreCapabilities = [
  {
    icon: 'Users',
    title: 'Member Intelligence',
    color: theme.colors.lensMemberIntelligence,
    summary: 'Know who is drifting before they resign.',
    bullets: [
      'Ranks every member by retention value \u00d7 urgency.',
      'Connects complaints, spend, rounds, and email engagement.',
    ],
    source: 'CRM + POS + Email',
    freshness: 'Updated 14 min ago',
    confidence: '92% confidence',
    why: 'Engagement down 28% & unresolved complaint',
    metric: { value: '6.4 wks', label: 'avg. early warning' },
  },
  {
    icon: 'Calendar',
    title: 'Tee Sheet & Demand',
    color: theme.colors.lensTeeSheetDemand,
    summary: 'Fill every slot with the member who needs it most.',
    bullets: [
      'Predict cancellations 24-72 hours ahead.',
      'Route openings to retention-priority members automatically.',
    ],
    source: 'Tee Sheet + Weather + Waitlist',
    freshness: 'High-risk slots recalculated 9 min ago',
    confidence: '89% confidence',
    why: 'Wind advisory + low-engagement bookings',
    metric: { value: '91%', label: 'fill rate w/ routing' },
  },
  {
    icon: 'Utensils',
    title: 'F&B Operations',
    color: theme.colors.lensFbOperations,
    summary: 'Tie culinary prep to what golf & weather already know.',
    bullets: [
      'Forecast post-round dining conversion by tee block.',
      'Flag pace-of-play issues before they crush the Grill Room.',
    ],
    source: 'POS + Tee Sheet + Weather',
    freshness: 'Prep forecast updated 7 min ago',
    confidence: '86% confidence',
    why: 'Rounds running 4:45 \u00b7 patio demand spiking',
    metric: { value: '$5.7K', label: 'monthly F&B upside' },
  },
  {
    icon: 'UsersRound',
    title: 'Staffing & Labor',
    color: theme.colors.lensStaffingLabor,
    summary: 'Staff to predicted demand, not static templates.',
    bullets: [
      'Coverage gap alerts 48 hours before service windows.',
      'Overtime + labor cost per dollar tracked in real time.',
    ],
    source: 'Scheduling + Tee Sheet',
    freshness: 'Coverage model recalculated hourly',
    confidence: '90% confidence',
    why: 'Saturday lunch forecast 95 covers vs. 6 staff scheduled',
    metric: { value: '223x', label: 'ROI on alert' },
  },
  {
    icon: 'DollarSign',
    title: 'Revenue & Pipeline',
    color: theme.colors.lensRevenuePipeline,
    summary: 'Show the board which actions protected revenue.',
    bullets: [
      'Attribution from alert \u2192 action \u2192 dues protected.',
      'Pipeline insights tie guest play to future memberships.',
    ],
    source: 'Revenue + CRM + POS',
    freshness: 'Board-ready report generated nightly',
    confidence: '94% confidence',
    why: '4 members saved this month via playbooks',
    metric: { value: '$251K', label: 'annualized impact' },
  },
];

export const comparisonFeatures = [
  { feature: 'Member health intelligence', swoop: true, waitlistTools: false, crm: 'partial', sheets: 'partial' },
  { feature: 'Retention-prioritized waitlist', swoop: true, waitlistTools: 'partial', crm: false, sheets: false },
  { feature: 'Cross-system analytics', swoop: true, waitlistTools: 'partial', crm: 'partial', sheets: 'partial' },
  { feature: 'AI agent automation', swoop: true, waitlistTools: false, crm: false, sheets: false },
  { feature: 'Real-time behavioral data', swoop: true, waitlistTools: 'partial', crm: 'partial', sheets: true },
  { feature: 'Closed-loop engagement', swoop: true, waitlistTools: 'partial', crm: 'partial', sheets: false },
];

export const agents = [
  { icon: 'UserRound', name: 'Member Pulse', description: 'Detects early disengagement signals and proposes interventions before members resign.' },
  { icon: 'Radar', name: 'Demand Optimizer', description: 'Balances waitlist demand, cancellation prediction, and tee sheet fill optimization.' },
  { icon: 'ChefHat', name: 'Service Recovery', description: 'Surfaces unresolved complaints and drafts recovery actions before resignation windows close.' },
  { icon: 'UsersRound', name: 'Labor Optimizer', description: 'Forecasts staffing gaps and recommends coverage shifts to protect service quality and margin.' },
  { icon: 'LineChart', name: 'Revenue Analyst', description: 'Flags preventable revenue leakage and recommends high-confidence margin actions.' },
  { icon: 'RefreshCw', name: 'Engagement Autopilot', description: 'Monitors declining participation and proposes targeted outreach for member reactivation.' },
];

export const integrationCategories = [
  { label: 'Tee Sheet & Booking', systems: 4, description: 'Leading tee sheet platforms', vendors: ['ForeUP', 'Lightspeed Golf', 'Club Prophet', 'Tee-On'] },
  { label: 'Member CRM', systems: 3, description: 'Club management systems', vendors: ['Northstar', 'Jonas Club', 'Clubessential'] },
  { label: 'POS & F&B', systems: 5, description: 'Point-of-sale platforms', vendors: ['Toast', 'Square', 'Lightspeed', 'POSitouch', 'Jonas F&B'] },
  { label: 'Communications', systems: 4, description: 'Email & SMS providers', vendors: ['Mailchimp', 'Constant Contact', 'Twilio', 'SendGrid'] },
  { label: 'Staffing & Payroll', systems: 3, description: 'Payroll & scheduling platforms', vendors: ['ADP', '7shifts', 'Paychex'] },
  { label: 'Finance & BI', systems: 4, description: 'Accounting & analytics tools', vendors: ['QuickBooks', 'Sage Intacct', 'Club Benchmarking', 'PivotTable'] },
  { label: 'Web & Lead Capture', systems: 2, description: 'Marketing & CRM platforms', vendors: ['HubSpot', 'Memberplanet'] },
  { label: 'Access & Activity', systems: 3, description: 'Access control systems', vendors: ['Brivo', 'Keri Systems', 'GateKeeper'] },
];

export const foundingPartnerBenefits = [
  { title: 'Hands-on Onboarding', description: 'Our team configures your integrations, trains your staff, and validates your data in the first 2 weeks.' },
  { title: 'Shape the Roadmap', description: 'Monthly calls with our product team. Your feature requests get priority. Your workflows drive development.' },
  { title: 'Locked-in Pricing', description: 'Founding partners keep their launch rate for life, even as the platform grows and pricing increases.' },
];

export const objections = [
  { question: 'Why not just use a standalone waitlist tool?', answer: "Standalone waitlist tools fill cancelled slots \u2014 one function from one data source. Swoop gives you cross-system intelligence: which members to prioritize, what their dining and engagement patterns predict, and how to close the loop with personalized outreach. Waitlist software is a feature. Swoop is the operating layer." },
  { question: 'Why not just use my CRM reports?', answer: "Your CRM stores records. Swoop connects records across systems \u2014 tee sheet, POS, member engagement, staffing \u2014 and turns the gaps between them into actionable intelligence. A CRM tells you who resigned. Swoop tells you who\u2019s about to." },
  { question: 'Why not build dashboards in Excel?', answer: "You can build a dashboard. You can\u2019t build prediction. Swoop\u2019s AI agents monitor behavioral signals in real time and recommend interventions before problems become resignations. Spreadsheets report the past. Swoop protects the future." },
];

export const pricingTiers = [
  {
    name: 'Free \u2014 Health Scores',
    price: '$0/mo',
    description: 'Connect your existing systems. See member health scores and basic risk alerts powered by integration data alone.',
    features: ['Health score dashboard', 'Basic risk alerts', 'Up to 3 system integrations', 'Email support'],
    cta: 'Start Free',
  },
  {
    name: 'Pro \u2014 Intelligence Dashboard',
    price: '$499/mo',
    priceAnchor: 'Less than $17/day',
    badge: 'Most Popular',
    description: 'Full platform access with cross-system intelligence. Optional member app integration for richer behavioral data.',
    features: ['Complete platform access', 'Cross-system intelligence', 'AI agent recommendations', 'Up to 10 integrations', 'Priority support'],
    cta: 'Start 14-Day Trial',
  },
  {
    name: 'Club \u2014 Full Platform',
    price: '$1,499/mo',
    description: 'Everything in Pro plus the Swoop member app, GPS behavioral data, push notifications, and closed-loop engagement.',
    features: ['Everything in Pro', 'Swoop member app included', 'GPS + real-time behavioral data', 'Push notification channel', 'Closed-loop engagement tracking', 'Dedicated success manager'],
    cta: 'Book a Demo',
  },
];

export const testimonial = {
  quote: "In the first two weeks the platform identified $1.38M in at-risk dues and flagged three members who appeared happy but were quietly disengaging. Cross-system intelligence caught what disconnected dashboards never could.",
  author: 'Pilot Results \u2014 Pinetree Country Club (300 members)',
  org: '$1.38M at-risk dues identified \u00b7 3 silent-churn members flagged \u00b7 91% tee-sheet fill rate',
  note: 'Based on 90-day pilot with imported club data. Metrics reflect projected outcomes from real integration data, not self-reported surveys.',
};

export const teamMembers = [
  {
    name: 'Tyler Hayes',
    title: 'CEO',
    background: 'Former club-tech operator who ran member experience at a 300-member desert club. 10+ years building and scaling SaaS platforms in the private club vertical.',
    linkedin: 'https://www.linkedin.com/in/tylerhayes',
  },
  {
    name: 'Jordan Mitchell',
    title: 'CTO',
    background: 'Former engineering lead at Agilysys (hospitality-tech, NASDAQ: AGYS). ML/AI specialist with 8 years building behavioral prediction systems for hospitality and travel.',
    linkedin: null,
  },
  {
    name: 'Alex Chen',
    title: 'Head of Product',
    background: 'Former product lead at Salesforce Industries. 6 years turning complex operational data into simple, actionable workflows for enterprise verticals.',
    linkedin: null,
  },
];

export const tamData = {
  headline: 'Why Now',
  stats: [
    { value: '3,000+', label: 'Private clubs in the US with 200+ members' },
    { value: '$2.1B', label: 'Annual dues revenue at risk from preventable churn' },
    { value: '67%', label: 'Of clubs still rely on disconnected point solutions' },
  ],
  narrative: 'The private club industry is at an AI inflection point. Clubs have spent a decade digitizing operations \u2014 tee sheets, POS, CRM \u2014 but no platform connects those systems into a single intelligence layer. The data exists. The integrations exist. What is missing is the brain. Swoop is that brain.',
  teamAdvantage: 'Unfair advantage: proprietary cross-system intelligence from pilot data, exclusive Jonas integration partnership, and the first MCP-native club platform with 46 production tools.',
};

export const faqItems = [
  { question: 'How long does setup take?', answer: 'Most clubs are live in under 2 weeks. We connect to your existing tee sheet, POS, and CRM \u2014 no rip-and-replace required.' },
  { question: 'Do I need to replace my current software?', answer: 'No. Swoop sits on top of your existing systems and connects via API. We support 28 integrations across 10 categories.' },
  { question: "What if I don't have a tee sheet system?", answer: "You can still use Swoop\u2019s member intelligence, F&B, and staffing capabilities with manual data entry or CSV import. Tee sheet analytics activate when you connect a supported booking system." },
  { question: "Is my members' data secure?", answer: 'Yes. Enterprise-grade encryption in transit and at rest. We never share member data with third parties. SOC 2 certification is in progress.' },
  { question: 'Can I try it before committing?', answer: 'Absolutely. Our Free tier gives you health scores with no credit card required. Pro includes a 14-day trial.' },
  { question: 'What makes Swoop different from standalone waitlist tools?', answer: 'Standalone waitlist tools fill cancelled tee times \u2014 one function, one system. Swoop is a full intelligence platform that connects members, demand, service, labor, and revenue with AI agents, behavioral data, and closed-loop engagement. Waitlist software is a feature; Swoop is the operating layer.' },
];
