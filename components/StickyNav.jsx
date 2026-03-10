'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

const platformLinks = [
  { label: 'Platform Overview', href: '/platform' },
  { label: 'Member Intelligence', href: '/capabilities/member-intelligence' },
  { label: 'Tee Sheet & Demand', href: '/capabilities/tee-sheet-demand' },
  { label: 'F&B Operations', href: '/capabilities/fb-operations' },
  { label: 'Staffing & Labor', href: '/capabilities/staffing-labor' },
  { label: 'Revenue & Pipeline', href: '/capabilities/revenue-pipeline' },
  { label: 'AI Agents', href: '/ai-agents' },
  { label: 'Integrations', href: '/integrations' },
]

const integrationMenu = [
  { label: 'Tee Sheet & Booking', href: '/integrations#tee-sheet', type: 'heading' },
  { label: 'Leading tee sheet platforms', href: '/integrations#tee-sheet', nested: true },
  { label: 'Legacy booking tools', href: '/integrations#tee-sheet', nested: true },
  { label: 'POS & Dining', href: '/integrations#pos-fb', type: 'heading' },
  { label: 'Traditional club management suites', href: '/integrations#pos-fb', nested: true },
  { label: 'Modern dining & bar POS', href: '/integrations#pos-fb', nested: true },
  { label: 'Member CRM', href: '/integrations#member-crm', type: 'heading' },
  { label: 'Membership databases', href: '/integrations#member-crm', nested: true },
  { label: 'Marketing automation & comms', href: '/integrations#member-crm', nested: true },
  { label: 'Staffing & Labor', href: '/integrations#staffing', type: 'heading' },
  { label: 'Labor forecasting platforms', href: '/integrations#staffing', nested: true },
  { label: 'Time & attendance systems', href: '/integrations#staffing', nested: true },
  { label: 'Communication', href: '/integrations#communications', type: 'heading' },
  { label: 'SMS & email infrastructure', href: '/integrations#communications', nested: true },
  { label: 'Member engagement tools', href: '/integrations#communications', nested: true },
  { label: 'Payment', href: '/integrations#payments', type: 'heading' },
  { label: 'Payments & accounting stacks', href: '/integrations#payments', nested: true },
];

const companyLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const navItems = [
  { label: 'Platform', href: '/platform', children: platformLinks },
  { label: 'Integrations', href: '/integrations', children: integrationMenu },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Swoop', href: '/why-swoop' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', children: companyLinks },
]

export default function StickyNav() {
  const [open, setOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownTimeout = useRef()

  useEffect(() => () => clearTimeout(dropdownTimeout.current), [])

  const openDropdown = (label) => {
    if (!label) return
    clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const closeDropdown = () => {
    clearTimeout(dropdownTimeout.current)
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-swoop-border">
      <div className="sticky-nav-inner max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-swoop-dark">
          Swoop
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children ? openDropdown(item.label) : null}
              onMouseLeave={() => item.children ? closeDropdown() : null}
            >
              <Link
                href={item.href || item.children?.[0]?.href || '/'}
                className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition inline-flex items-center gap-1"
                onFocus={() => item.children ? openDropdown(item.label) : null}
                onBlur={() => item.children ? closeDropdown() : null}
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div
                  className={`absolute left-0 top-full pt-2 ${activeDropdown === item.label ? 'block' : 'hidden'}`}
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <div className="bg-white border border-swoop-border rounded-xl shadow-lg min-w-[220px] py-3">
                    {item.children.map((child) => (
                      child.type === 'heading' ? (
                        <div key={child.label} className="px-5 pt-3 pb-1 text-[11px] font-bold uppercase tracking-wider text-swoop-muted/80">
                          {child.label}
                        </div>
                      ) : (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block ${child.nested ? 'pl-8 pr-5' : 'px-5'} py-2 text-sm text-swoop-muted hover:text-swoop-dark hover:bg-swoop-bg transition`}
                        >
                          {child.label}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/book-demo"
            className="ml-2 px-6 py-3 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg hover:bg-swoop-green-hover transition touch-target"
          >
            Book a Demo
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 text-swoop-dark min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sticky-nav-mobile md:hidden border-t border-swoop-border bg-white px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href || item.children?.[0]?.href || '/'}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold text-swoop-dark"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-1 ml-4 border-l border-swoop-border/60 pl-4 space-y-1">
                  {item.children.map((child) => (
                    child.type === 'heading' ? (
                      <div key={child.label} className="text-[11px] font-bold uppercase tracking-wider text-swoop-muted/80 pt-2">
                        {child.label}
                      </div>
                    ) : (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className={`block py-1 text-sm ${child.nested ? 'pl-4 text-swoop-muted/90' : 'text-swoop-muted'}`}
                      >
                        {child.label}
                      </Link>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/book-demo"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-6 py-3 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg touch-target"
            >
              Book a Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
