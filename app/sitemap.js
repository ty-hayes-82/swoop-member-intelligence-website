export default function sitemap() {
  const baseUrl = 'https://swoopgolf.com'
  const pages = [
    '', '/platform', '/how-it-works', '/why-swoop', '/pricing',
    '/book-demo', '/contact', '/about', '/integrations',
    '/capabilities/member-intelligence', '/capabilities/tee-sheet-demand',
    '/capabilities/fb-operations', '/capabilities/staffing-labor', '/capabilities/revenue-pipeline',
    '/ai-agents',
    '/case-studies', '/case-studies/oakmont-hills',
    '/roi-calculator',
    '/resources', '/resources/churn-prevention-guide', '/resources/cost-of-churn',
    '/for/private-clubs', '/for/country-clubs', '/for/multi-club-operators',
    '/for/general-managers', '/for/ownership-board', '/for/directors-of-golf',
    '/features/member-health', '/features/demand-optimization', '/features/ai-agents', '/features/cross-system-intelligence',
  ]
  return pages.map((p) => ({
    url: baseUrl + p,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1.0 : 0.8,
  }))
}
