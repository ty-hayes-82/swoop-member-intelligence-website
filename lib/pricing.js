export const PRICING_PLAN_ORDER = ['free', 'pro', 'club']

export const PLAN_PRICING = {
  free: {
    label: 'Free',
    monthly: 0,
    display: '$0',
  },
  pro: {
    label: 'Pro',
    monthly: 499,
    display: '$499/mo',
  },
  club: {
    label: 'Club',
    monthly: 1499,
    display: '$1,499/mo',
  },
}

export const PRICING_SUMMARY = {
  currency: 'USD',
  offerCount: PRICING_PLAN_ORDER.length,
}

export const PRO_ANNUAL_COST = PLAN_PRICING.pro.monthly * 12
