import { theme } from '@/config/theme';

export const problemCards = [
  {
    title: 'Complaint falls through the cracks',
    summary: 'Acknowledged ≠ resolved. Your complaint inbox tracks tickets, not saves.',
    highlights: [
      'James Whitfield waited 42 minutes, filed a complaint, and sat in “Acknowledged” for 6 days.',
      'No alert fired because the CRM saw a reply, not the absence of a callback.',
    ],
    source: 'Member CRM + Service Desk',
    freshness: 'Complaint aging: 6 days',
    why: 'No callback recorded · 30-day window closing · satisfaction trending negative',
    confidence: '88% confidence',
    metric: { value: '$22K', label: 'annual dues at risk' },
  },
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
    title: 'New member habits never form',
    summary: 'The 90-day window is when members decide whether the club is worth it.',
    highlights: [
      '3 members are at Day 45 with zero event visits and one round total.',
      'By the time the pattern shows up in renewals, the decision was made months ago.',
    ],
    source: 'Tee Sheet + Events + POS',
    freshness: 'Cohort updated this morning',
    why: '4/4 GMs flagged this as their #1 blind spot',
    confidence: '93% confidence',
    metric: { value: '90 days', label: 'window to build loyalty' },
  },
];

export const coreCapabilities = [
  {
    icon: 'Users',
    title: 'Know who\'s drifting before they resign.',
    category: 'Member Intelligence',
    color: theme.colors.lensMemberIntelligence,
    summary: 'Know who is drifting before they resign.',
    bullets: [
      'Ranks every member by retention value × urgency.',
      'Flags new members who haven\'t built dining, golf, and event habits by day 45 — before the 90-day window closes.',
      'Connects complaints, spend, rounds, and email engagement.',
    ],
    source: 'CRM + POS + Email',
    dataSources: 'CRM + POS + EMAIL',
    freshness: 'Updated 14 min ago',
    confidence: '92% confidence',
    why: 'Engagement down 28% & unresolved complaint',
    metric: { value: '6.4 wks', label: 'avg. early warning' },
  },
  {
    icon: 'Calendar',
    title: 'Fill every slot with the right member.',
    category: 'Tee Sheet & Demand',
    color: theme.colors.lensTeeSheetDemand,
    summary: 'Fill every slot with the member who needs it most.',
    bullets: [
      'Predict cancellations 24-72 hours ahead.',
      'Route openings to retention-priority members automatically.',
    ],
    source: 'Tee Sheet + Weather + Waitlist',
    dataSources: 'TEE SHEET + WEATHER + WAITLIST',
    freshness: 'High-risk slots recalculated 9 min ago',
    confidence: '89% confidence',
    why: 'Wind advisory + low-engagement bookings',
    metric: { value: '91%', label: 'fill rate w/ routing' },
  },
  {
    icon: 'Utensils',
    title: 'Dining frequency is the earliest churn signal.',
    category: 'F&B Operations',
    color: theme.colors.lensFbOperations,
    summary: 'F&B data tells you which members are happy — and which are leaving.',
    bullets: [
      'Members who stop dining stop renewing. Swoop surfaces the pattern 6 weeks early.',
      'Flags understaffed Saturday lunch before the service failure happens.',
    ],
    source: 'POS + Tee Sheet + Weather',
    dataSources: 'POS + TEE SHEET + WEATHER',
    freshness: 'Prep forecast updated 7 min ago',
    confidence: '86% confidence',
    why: 'F&B frequency drop preceded 3 of last 4 resignations',
    description: 'When a member stops coming to dinner, they\'re telling you something — weeks before they submit a resignation. Swoop connects dining patterns to member health scores so the signal doesn\'t get lost.',
    metric: { value: '$5.7K', label: 'monthly recovery per alert' },
  },
  {
    icon: 'UsersRound',
    title: 'Catch the Saturday lunch gap before your kitchen does.',
    category: 'Staffing & Labor',
    color: theme.colors.lensStaffingLabor,
    summary: 'Staff to predicted demand, not last week\'s template.',
    bullets: [
      'Saturday lunch: 95 covers forecast, 6 staff scheduled — Swoop flags it 48 hours early.',
      'Coverage gap alerts before the service failure, not after the complaint.',
    ],
    source: 'Scheduling + Tee Sheet',
    dataSources: 'SCHEDULING + TEE SHEET',
    freshness: 'Coverage model recalculated hourly',
    confidence: '90% confidence',
    why: 'Saturday lunch forecast 95 covers vs. 6 staff scheduled',
    metric: { value: '$14,200', label: 'Dues protected · one alert · 14 min' },
  },
  {
    icon: 'DollarSign',
    title: 'Prove the save to your board.',
    category: 'Board Report',
    color: theme.colors.lensRevenuePipeline,
    summary: 'Auto-generated board narrative. Every save attributed, every dollar sourced.',
    bullets: [
      'One click generates the report: active members, at-risk count, dues protected this month.',
      'Attribution from alert → action → dues recovered — so the board sees the ROI, not a feeling.',
    ],
    source: 'Revenue + CRM + POS',
    dataSources: 'REVENUE + CRM + POS',
    freshness: 'Board-ready report generated nightly',
    confidence: '94% confidence',
    why: '4 members saved this month via playbooks',
    metric: { value: '$251K', label: 'annualized impact', source: 'Pinetree CC founding-partner data · 300-member club · trailing 90 days' },
  },
  {
    icon: 'Send',
    title: 'Engagement & Outreach',
    color: '#F3922D',
    summary: 'The right message to the right member at the right moment.',
    bullets: [
      'Drafts callback scripts, comp offers, and re-engagement notes.',
      'Every outreach tracked back to the signal that triggered it.',
    ],
    source: 'Email + SMS + Member app',
    freshness: 'Outreach queue updated nightly',
    confidence: '87% confidence',
    why: '18 members flagged for re-engagement this week',
    metric: { value: '3.4x', label: 'response vs. blast' },
  },
];

export const comparisonFeatures = [
  {
    feature: 'Member health intelligence',
    swoop: true,
    waitlistTools: false,
    crm: 'partial',
    sheets: false,
  },
  {
    feature: 'Retention-prioritized waitlist',
    swoop: true,
    waitlistTools: 'partial',
    crm: false,
    sheets: false,
  },
  {
    feature: 'Cross-system analytics',
    swoop: true,
    waitlistTools: 'partial',
    crm: 'partial',
    sheets: false,
  },
  {
    feature: 'AI-drafted action recommendations (GM-approved)',
    swoop: true,
    waitlistTools: false,
    crm: false,
    sheets: false,
  },
  {
    feature: 'Real-time behavioral data',
    swoop: true,
    waitlistTools: 'partial',
    crm: 'partial',
    sheets: false,
  },
  {
    feature: 'Closed-loop engagement',
    swoop: true,
    waitlistTools: 'partial',
    crm: 'partial',
    sheets: false,
  },
  {
    feature: 'Manual approval inbox (every action GM-approved)',
    swoop: true,
    waitlistTools: false,
    crm: false,
    sheets: false,
  },
];

export const agents = [
  {
    icon: 'UserRound',
    name: 'Member Health Score',
    description: 'Detects the quiet resignation sequence — email opens drop, then golf frequency dips, then dining goes silent — weeks before any single system notices. Drafts GM-approved interventions before members resign.',
  },
  {
    icon: 'Radar',
    name: 'Demand Optimizer',
    description: 'Balances waitlists and tee sheet gaps to recover lost yield — e.g., re-booking 3 cancelled tee times recovers $450 in F&B spend that would have walked out the door.',
  },
  {
    icon: 'ChefHat',
    name: 'Service Recovery',
    description: 'Drafts personalized recovery actions for unresolved complaints — e.g., comping a $14 round of drinks to save a $12K/yr membership before the 30-day window closes.',
  },
  {
    icon: 'UsersRound',
    name: 'Labor Optimizer',
    description: 'Forecasts staffing gaps and recommends coverage shifts to protect service quality and margin.',
  },
  {
    icon: 'LineChart',
    name: 'Revenue Analyst',
    description: 'Flags cross-domain leakage incumbents miss — like the $31 per round lost in F&B dining conversions directly linked to Hole 12 pace-of-play bottlenecks. Recommends high-confidence margin actions.',
  },
  {
    icon: 'RefreshCw',
    name: 'Engagement Advisor',
    description: "Spots members who haven't visited in 30 days and drafts a personal, GM-approved invite to get them back.",
  },
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
  {
    title: 'Hands-on Onboarding',
    description:
      'Our team configures your integrations, trains your staff, and validates your data in the first 2 weeks.',
  },
  {
    title: 'Shape the Roadmap',
    description:
      'Monthly calls with our product team. Your feature requests get priority. Your workflows drive development.',
  },
  {
    title: 'Locked-in Pricing',
    description:
      'Founding partners keep their launch rate for life, even as the platform grows and pricing increases.',
  },
];

export const objections = [
  {
    question: 'Why not just use a standalone waitlist tool?',
    answer:
      "Standalone waitlist tools fill cancelled slots — one function from one data source. Swoop gives you cross-system intelligence: which members to prioritize, what their dining and engagement patterns predict, and how to close the loop with personalized outreach. Waitlist software is a feature. Swoop is the operating layer.",
  },
  {
    question: 'Why not just use my CRM reports?',
    answer:
      "Your CRM stores records. Swoop connects records across systems — tee sheet, POS, member engagement, staffing — and turns the gaps between them into actionable intelligence. A CRM tells you who resigned. Swoop tells you who's about to.",
  },
  {
    question: 'Why not build dashboards in Excel?',
    answer:
      "You can build a dashboard. You can't build prediction. Swoop's AI agents monitor behavioral signals in real time and recommend interventions before problems become resignations. Spreadsheets report the past. Swoop protects the future.",
  },
];

export const pricingTiers = [
  {
    name: 'Signals',
    price: '$0/mo',
    description:
      'Swoop reads your systems and tells you who\'s at risk. You decide what to do.',
    features: [
      'Unified member health dashboard — replaces manual checks across 4 separate system logins',
      'Daily member health scores',
      'Risk + complaint + demand alerts',
      '90-day new member cohort alerts',
      'Up to 3 system integrations',
      'Email support',
    ],
    cta: 'Start on Signals (free)',
    technical: 'Up to 3 integrations, daily refresh, 30-day data lookback, 1 seat',
  },
  {
    name: 'Signals + Actions',
    price: '$499/mo',
    badge: 'Founding-Partner Pick',
    badgeFootnote: 'Most popular for private clubs with 200–500 members.',
    description:
      'Signals tells you who\'s at risk. Actions tells you exactly what to do: the callback script, comp offer, and staffing shift — in plain English. Your team acts, not sorts.',
    features: [
      'Everything in Signals',
      'Replaces 4 morning system logins with 1 ranked daily action list',
      'Real-Time GM Cockpit — see tee sheet, staffing, and pace live',
      'Cross-Domain Morning Briefing (mobile-ready, 6 AM, read in under 60s)',
      '1-click action approval — human in the loop, you stay in total control',
      'Pace-of-play to dining conversion alerts',
      'Service consistency execution across F&B and Golf',
      'Action History Log — full audit trail of every approved action',
      '1-Click Board Report Generator',
      'Up to 10 integrations',
      'Priority support',
    ],
    cta: 'Book the 30-minute walkthrough',
    technical: 'Up to 10 integrations, hourly refresh, 12-month data history, 5 seats, CSV export',
  },
  {
    name: 'Signals + Actions + Enterprise',
    price: '$1,499/mo',
    description:
      'For multi-property clubs and boards that need full attribution, unlimited integrations, and a dedicated success partner.',
    features: [
      'Everything in Signals + Actions',
      'Unlimited system integrations',
      'Custom board report templates',
      'Dedicated success manager',
      'SSO + SAML single sign-on',
      '99.9% uptime SLA',
    ],
    cta: 'Talk to us about Enterprise',
    technical: 'Unlimited integrations, 15-min refresh, 36-month retention, SSO+SAML, 99.9% SLA',
  },
];

export const faqItems = [
  {
    question: "Why can't my POS or tee sheet build this?",
    answer:
      "Your POS sees dining. Your tee sheet sees golf. Neither talks to the other. Single-system vendors are structurally blind to cross-domain correlations — like how a 24-minute pace-of-play delay on Hole 12 impacts post-round dining conversions. Swoop is the only Layer 3 intelligence platform that normalizes data across all your siloed legacy systems to give you a single, unified Member Health Score. Your existing vendors can't do this without access to each other's data — which they don't have and won't share.",
  },
  {
    question: 'Can we cancel and keep our data?',
    answer:
      'You do, always. Data export is provided within 5 business days. All club data is deleted within 30 days of cancellation on request. No lock-in, no data hostage, no penalty.',
  },
  {
    question: 'How long until we\'re live?',
    answer:
      'Most clubs are live in under 2 weeks. We connect to your existing tee sheet, POS, and CRM — no rip-and-replace required.',
  },
  {
    question: 'Does this work with Jonas / ClubEssentials?',
    answer:
      'Yes — and all four of our founding-partner clubs run on Jonas. Today, Swoop connects via CSV export from Jonas (standard reports, no IT required). Your data is in Swoop in under 10 minutes. Native Jonas API sync is on our near-term roadmap. If you\'re on ClubEssential, ForeUP, or another system, ask us — we support 28 platforms across 10 categories.',
  },
  {
    question: 'My club is on a 3-year Jonas contract — can I still use Swoop?',
    answer:
      'Yes. Swoop connects to Jonas via CSV export — no API contract changes, no IT involvement, no renegotiation with Jonas. You export a standard Jonas report and we ingest it. Both run simultaneously, unchanged.',
  },
  {
    question: 'Does this need board approval?',
    answer:
      'Most GMs start on the free tier and get board buy-in using the first Saturday brief. The data speaks for itself.',
  },
  {
    question: 'Who owns the data if we leave?',
    answer:
      'You do, always. Data export provided within 5 business days. All club data deleted within 30 days of cancellation on request.',
  },
  {
    question: 'Do I need to replace my current software?',
    answer:
      'No. Swoop sits on top of your existing systems to find the blind spots they miss — like how a slow round on ForeTees causes lost dining revenue in Jonas. We connect via API and support 35+ integrations across 8 categories.',
  },
  {
    question: 'What does my morning routine look like with Swoop?',
    answer:
      'At 7:00 AM, you receive a mobile-friendly Cross-Domain Morning Briefing. It highlights the 1–3 members who need attention today and suggests the exact staffing adjustments needed for today\'s F&B volume — based on your real tee sheet and POS data. Review in 60 seconds, approve actions with one tap, and start your day.',
  },
  {
    question: "Why can't my existing POS or tee sheet give me these insights?",
    answer:
      "Because they don't talk to each other. Jonas knows what members eat. ForeTees knows when they play. Northstar knows who complained. But none of them share a timeline — so when a member's rounds drop, then dining stops, then they go quiet, no single system sees the full decay sequence. Swoop is the only platform that correlates cross-domain data in real time to spot hidden churn and F&B leakage before it happens.",
  },
  {
    question: "What if I don't have a tee sheet system?",
    answer:
      "You can still use Swoop's member intelligence, F&B, and staffing capabilities with manual data entry or CSV import. Tee sheet analytics activate when you connect a supported booking system.",
  },
  {
    question: "Is our club's data secure?",
    answer:
      'Yes. Swoop operates on read-only API access. Your data is isolated per club, encrypted at rest (AES-256) and in transit (TLS 1.3). It is never commingled with other clubs, used to train external systems, or shared with any third party.',
  },
  {
    question: 'Will this spam my staff with too many alerts?',
    answer:
      'No. Swoop is an intelligence filter, not a dashboard. It surfaces 1–3 high-confidence interventions per day per department, ranked strictly by revenue impact. We eliminate noise; we don\'t add to it.',
  },
  {
    question: 'Can I try it before committing?',
    answer:
      'Absolutely. Our Free tier gives you health scores with no credit card required. Pro includes a 14-day trial.',
  },
  {
    question: 'What makes Swoop different from standalone waitlist tools?',
    answer:
      'Standalone waitlist tools fill cancelled tee times — one function, one system. Swoop is a full intelligence platform that connects members, demand, service, labor, and revenue with AI agents, behavioral data, and closed-loop engagement. Waitlist software is a feature; Swoop is the operating layer.',
  },
  {
    question: 'What does the founding-partner program actually look like?',
    answer:
      'Six months. Your data, your members, your systems. We connect your tee sheet, POS, and CRM in week one. Your GM gets a daily brief starting day two. At the end, you have a board deck with every save attributed, every dollar traced. Founding-partner clubs get locked-in pricing for life.',
  },
  {
    question: 'What happens if we cancel?',
    answer:
      'Month-to-month, cancel any time. Your data exports in one click — member records, action history, and board reports stay yours. No lock-in, no data hostage, no penalty.',
  },
  {
    question: 'What does Swoop cost?',
    answer:
      'Founding-partner pricing starts at $499/month, locked for life. Standard plans run $499–$1,499/mo depending on club size and tier. No setup fees. No long-term contracts.',
  },
  {
    question: 'Who owns our member data?',
    answer:
      'You do, always. Swoop operates on read-only API access. Your data is isolated per club, encrypted at rest (AES-256) and in transit (TLS 1.3). It is never commingled with other clubs or shared with any third party.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Month-to-month. Cancel any time in the first 90 days for a full refund. After that, 30 days written notice. Your data exports in one click and your member records stay yours.',
  },
  {
    question: 'How does Swoop handle complaint follow-through?',
    answer:
      'Swoop tracks the gap between "acknowledged" and "resolved." When a complaint sits unresolved for 30 days with no GM callback recorded, Swoop escalates it automatically — surfaces the member\'s full engagement history and drafts a callback script for one-tap GM approval. This 30-day window alert was the single most consistently cited daily pain across all four of our founding-partner GMs.',
  },
  {
    question: 'Can we talk to a reference club before deciding?',
    answer:
      'Yes. We will connect you with a founding-partner GM for a 20-minute peer call — no NDA, no sales involvement. Just one GM talking to another.',
  },
  {
    question: 'What integrations are available on day one?',
    answer:
      '28 integrations across 10 categories. Tee Sheet: ForeUP, Club Prophet, Lightspeed Golf. CRM: ClubEssential, Northstar. POS: Toast, Square, Lightspeed Restaurant, POSitouch. Jonas Club connects via CSV export on day one — no IT required, live in under 10 minutes. Native Jonas API sync is on our near-term roadmap. Ask us if you do not see your stack listed.',
  },
];
