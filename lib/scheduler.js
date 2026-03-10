const FALLBACK_SCHEDULER_URL = 'https://calendly.com/swoopgolf/30min'

const LEGACY_SLUGS = [
  'calendly.com/swoopgolf/club-intelligence-walkthrough',
  'calendly.com/swoopgolf/club-intelligence-walkthrough/',
]

export function resolveSchedulerUrl(rawUrl) {
  if (typeof rawUrl !== 'string') {
    return FALLBACK_SCHEDULER_URL
  }

  const trimmed = rawUrl.trim()
  if (!trimmed) {
    return FALLBACK_SCHEDULER_URL
  }

  const normalized = trimmed.startsWith('http') ? trimmed : `https://${trimmed.replace(/^\/+/, '')}`
  const sanitized = normalized.replace(/\/+$/, '')
  const lower = sanitized.toLowerCase()

  if (LEGACY_SLUGS.some((legacy) => lower.includes(legacy))) {
    return FALLBACK_SCHEDULER_URL
  }

  try {
    const resolved = new URL(sanitized)
    return resolved.toString()
  } catch (err) {
    return FALLBACK_SCHEDULER_URL
  }
}

export function getSchedulerUrl(overrideUrl) {
  return resolveSchedulerUrl(overrideUrl ?? process.env.NEXT_PUBLIC_SCHEDULER_URL)
}

export { FALLBACK_SCHEDULER_URL }
