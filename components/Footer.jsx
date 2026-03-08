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
    title: 'Lenses',
    links: [
      { href: '/lenses/member-intelligence', label: 'Member Intelligence' },
      { href: '/lenses/tee-sheet-demand', label: 'Tee Sheet & Demand' },
      { href: '/lenses/fb-operations', label: 'F&B Operations' },
      { href: '/lenses/staffing-labor', label: 'Staffing & Labor' },
      { href: '/lenses/revenue-pipeline', label: 'Revenue & Pipeline' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/case-studies', label: 'Case Studies' },
      { href: '/roi-calculator', label: 'ROI Calculator' },
      { href: '/blog', label: 'Blog' },
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
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Swoop Golf · All rights reserved
        </div>
      </div>
    </footer>
  )
}
