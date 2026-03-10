'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const HIDDEN_ROUTES = new Set(['/book-demo'])

export default function MobileStickyCTA() {
  const pathname = usePathname() || ''
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const update = () => {
      if (typeof window === 'undefined') return
      const isMobile = window.matchMedia('(max-width: 767px)').matches
      if (!isMobile) {
        setVisible(false)
        return
      }
      const hero = document.querySelector('[data-hero-section]')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setVisible(rect.bottom <= 0)
        return
      }
      setVisible(window.scrollY > 320)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [mounted, pathname])

  const suppressed = Array.from(HIDDEN_ROUTES).some((route) => pathname.startsWith(route))
  if (!mounted || suppressed || !visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-swoop-border bg-white px-4 py-3 shadow-[0_-8px_24px_rgba(0,0,0,0.08)] md:hidden">
      <div className="mx-auto flex max-w-container items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-swoop-muted">Mobile demo access</p>
          <p className="text-sm font-semibold text-swoop-dark">See your retention map in 30 minutes</p>
        </div>
        <Link
          href="/book-demo"
          className="shrink-0 rounded-lg bg-swoop-dark px-4 py-2 text-sm font-semibold text-white shadow-lg"
        >
          Book a Demo
        </Link>
      </div>
    </div>
  )
}
