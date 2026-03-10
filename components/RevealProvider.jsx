'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const DEFAULT_THRESHOLD = 0.05
const DEFAULT_ROOT_MARGIN = '0px 0px 200px 0px'
const FORCE_REVEAL_DELAY = 3000

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
    const reduceMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const shouldReduceMotion = reduceMotionQuery?.matches ?? false
    sections.forEach((section, index) => {
      if (section.dataset.animate === 'false' || section.dataset.animateSkip === 'true') return
      if (!section.dataset.animate) section.dataset.animate = 'fade-up'
      if (!section.dataset.animateDelay) section.dataset.animateDelay = String(Math.min(index * 40, 360))
      if (section.dataset.animateOnce === undefined) section.dataset.animateOnce = 'true'
    })

    const targets = Array.from(document.querySelectorAll('[data-animate]'))
    if (!targets.length) return

    const pendingTargets = new Set(targets)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target
        const animateOnce = target.dataset.animateOnce !== 'false'
        if (entry.isIntersecting) {
          target.classList.add('animate-in')
          pendingTargets.delete(target)
          if (animateOnce) observer.unobserve(target)
        } else if (!animateOnce) {
          target.classList.remove('animate-in')
        }
      })
    }, { threshold, rootMargin: DEFAULT_ROOT_MARGIN })

    let forceRevealTimeout = null
    if (!shouldReduceMotion) {
      forceRevealTimeout = window.setTimeout(() => {
        pendingTargets.forEach((target) => {
          target.classList.add('animate-in')
        })
        pendingTargets.clear()
      }, FORCE_REVEAL_DELAY)
    }

    targets.forEach((target) => {
      const delay = normalizeDelay(target.dataset.animateDelay ?? 0)
      target.style.setProperty('--reveal-delay', `${delay}ms`)
      if (shouldReduceMotion) {
        target.classList.add('animate-in')
        pendingTargets.delete(target)
        return
      }
      observer.observe(target)
    })

    if (shouldReduceMotion) {
      return () => {}
    }

    return () => {
      observer.disconnect()
      if (forceRevealTimeout) {
        window.clearTimeout(forceRevealTimeout)
      }
      pendingTargets.clear()
    }
  }, [pathname, threshold])

  return null
}
