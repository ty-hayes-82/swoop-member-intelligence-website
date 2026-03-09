'use client'
import { useState } from 'react'
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

const companyLinks = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const navItems = [
  { label: 'Platform', href: '/platform', children: platformLinks },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Swoop', href: '/why-swoop' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Company', children: companyLinks },
]

export default function StickyNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-swoop-border">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-swoop-dark">
          Swoop
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href || item.children?.[0]?.href || '/'}
                className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition inline-flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M3 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full mt-3 hidden group-hover:block bg-white border border-swoop-border rounded-xl shadow-lg min-w-[220px]">
                  <div className="py-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2 text-sm text-swoop-muted hover:text-swoop-dark hover:bg-swoop-bg transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            href="/book-demo"
            className="ml-2 px-6 py-3 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg hover:bg-swoop-green-hover transition"
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
        <nav className="md:hidden border-t border-swoop-border bg-white px-6 py-4 space-y-4">
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
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className="block py-1 text-sm text-swoop-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/book-demo"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-6 py-3 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg"
            >
              Book a Demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
