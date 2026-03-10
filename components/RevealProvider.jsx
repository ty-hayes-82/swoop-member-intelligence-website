'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const DEFAULT_THRESHOLD = 0.2

const normalizeDelay = (value) => {
  const parsed = Number(value)
  if (!Number.isFinite(parsed)) return 0
  return Math.max(0, parsed)
}

export default function RevealProvider({ threshold = DEFAULT_THRESHOLD }) {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    if (!root.classList.contains('reveal-enabled')) {
      root.classList.add('reveal-enabled')
    }
    return () => root.classList.remove('reveal-enabled')
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'))
    sections.forEach((section, index) => {
      if (section.dataset.animate === 'false' || section.dataset.animateSkip === 'true') return
      if (!section.dataset.animate) section.dataset.animate = 'fade-up'
      if (!section.dataset.animateDelay) section.dataset.animateDelay = String(Math.min(index * 40, 360))
      if (section.dataset.animateOnce === undefined) section.dataset.animateOnce = 'true'
    })

    const targets = Array.from(document.querySelectorAll('[data-animate]'))
    if (!targets.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target
        const animateOnce = target.dataset.animateOnce !== 'false'
        if (entry.isIntersecting) {
          target.classList.add('animate-in')
          if (animateOnce) observer.unobserve(target)
        } else if (!animateOnce) {
          target.classList.remove('animate-in')
        }
      })
    }, { threshold })

    targets.forEach((target) => {
      const delay = normalizeDelay(target.dataset.animateDelay ?? 0)
      target.style.setProperty('--reveal-delay', `${delay}ms`)
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [pathname, threshold])

  return null
}
