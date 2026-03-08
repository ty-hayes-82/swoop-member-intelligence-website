export default function sitemap() {
  const baseUrl = 'https://swoopgolf.com'
  const pages = [
    '', '/platform', '/how-it-works', '/why-swoop', '/pricing',
    '/book-demo', '/contact',
    '/lenses/member-intelligence', '/lenses/tee-sheet-demand',
    '/lenses/fb-operations', '/lenses/staffing-labor', '/lenses/revenue-pipeline',
    '/ai-agents', '/case-studies', '/roi-calculator',
    '/for/private-clubs', '/for/country-clubs', '/for/multi-club-operators',
    '/about', '/integrations',
  ]
  return pages.map((p) => ({
    url: baseUrl + p,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1.0 : 0.8,
  }))
}
