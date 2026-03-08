'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function StickyNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-swoop-border">
      <div className="max-w-container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-swoop-dark">
          Swoop
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/platform" className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition">Platform</Link>
          <Link href="/pricing" className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition">Pricing</Link>
          <Link href="/resources" className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition">Resources</Link>
          <Link href="/why-swoop" className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition">Why Swoop</Link>
          <Link href="/how-it-works" className="text-sm font-medium text-swoop-muted hover:text-swoop-dark transition">How It Works</Link>
          <Link
            href="/book-demo"
            className="ml-4 px-6 py-3 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg hover:bg-swoop-green-hover transition"
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
        <nav className="md:hidden border-t border-swoop-border bg-white px-6 py-4 space-y-2">
          <Link href="/platform" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-swoop-muted">Platform</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-swoop-muted">Pricing</Link>
          <Link href="/resources" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-swoop-muted">Resources</Link>
          <Link href="/why-swoop" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-swoop-muted">Why Swoop</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-swoop-muted">How It Works</Link>
          <Link href="/book-demo" onClick={() => setOpen(false)} className="block mt-2 text-center px-6 py-3 bg-swoop-green text-swoop-dark text-sm font-semibold rounded-lg">Book a Demo</Link>
        </nav>
      )}
    </header>
  )
}
