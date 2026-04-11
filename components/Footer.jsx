import Link from 'next/link'

const columns = [
  {
    title: 'Platform',
    links: [
      { href: '/platform', label: 'Overview' },
      { href: '/how-it-works', label: 'How It Works' },
      { href: '/why-swoop', label: 'Why Swoop' },
      { href: '/integrations', label: 'Integrations' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { href: '/capabilities/member-intelligence', label: 'Member Intelligence' },
      { href: '/capabilities/tee-sheet-demand', label: 'Tee Sheet & Demand' },
      { href: '/capabilities/fb-operations', label: 'F&B Operations' },
      { href: '/capabilities/staffing-labor', label: 'Staffing & Labor' },
      { href: '/capabilities/revenue-pipeline', label: 'Revenue & Pipeline' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/resources', label: 'All Resources' },
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/roi-calculator', label: 'ROI Calculator' },
      { href: '/resources/churn-prevention-guide', label: 'Churn Prevention Guide' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/contact', label: 'Contact' },
      { href: '/book-demo', label: 'Book a Demo' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/terms', label: 'Terms' },
      { href: '/privacy', label: 'Privacy' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-swoop-dark text-white/80">
      <div className="max-w-container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-swoop-green transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-6 text-sm text-white/40">
          <div>
            <p className="text-white/60 font-semibold">Swoop Golf, Inc.</p>
            <p>7702 E Doubletree Ranch Rd, Suite 300, Scottsdale, AZ 85258</p>
            <p className="mt-1">hello@swoopgolf.com</p>
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/swoopgolf" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-swoop-green transition">LinkedIn</a>
            <a href="https://x.com/swoopgolf" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-swoop-green transition">X / Twitter</a>
          </div>
          <div className="w-full text-center mt-4">
            &copy; {new Date().getFullYear()} Swoop Golf, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
