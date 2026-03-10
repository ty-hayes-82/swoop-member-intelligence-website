'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const DEFAULT_THRESHOLD = 0.05
const DEFAULT_ROOT_MARGIN = '0px 0px 200px 0px'
const FORCE_REVEAL_DELAY = 3000
const MAX_DELAY = 360
const DELAY_INCREMENT = 40

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
    const reduceMotionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    const shouldReduceMotion = reduceMotionQuery?.matches ?? false

    const handledTargets = new WeakSet()
    const pendingTargets = new Set()
    let sequentialDelay = 0

    const ensureSectionDefaults = (node, indexHint) => {
      if (!(node instanceof HTMLElement)) return
      if (node.dataset.animate === 'false' || node.dataset.animateSkip === 'true') return
      if (!node.dataset.animate && node.tagName === 'SECTION') {
        node.dataset.animate = 'fade-up'
      }
      if (!node.dataset.animateDelay && typeof indexHint === 'number') {
        node.dataset.animateDelay = String(Math.min(indexHint * DELAY_INCREMENT, MAX_DELAY))
      }
      if (node.dataset.animateOnce === undefined) {
        node.dataset.animateOnce = 'true'
      }
    }

    const observer = shouldReduceMotion
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const target = entry.target
              const animateOnce = target.dataset.animateOnce !== 'false'
              if (entry.isIntersecting) {
                target.classList.add('animate-in')
                pendingTargets.delete(target)
                if (animateOnce) observer.unobserve(target)
              } else if (!animateOnce) {
                target.classList.remove('animate-in')
                pendingTargets.add(target)
              }
            })
          },
          { threshold, rootMargin: DEFAULT_ROOT_MARGIN }
        )

    const revealPendingTargets = () => {
      pendingTargets.forEach((target) => {
        target.classList.add('animate-in')
        observer?.unobserve(target)
      })
      pendingTargets.clear()
    }

    let forceRevealTimeout = null
    const scheduleForceReveal = () => {
      if (shouldReduceMotion || !pendingTargets.size) return
      if (forceRevealTimeout) {
        window.clearTimeout(forceRevealTimeout)
      }
      forceRevealTimeout = window.setTimeout(revealPendingTargets, FORCE_REVEAL_DELAY)
    }

    const registerTarget = (target, indexHint) => {
      if (!(target instanceof HTMLElement)) return
      if (target.dataset.animate === 'false' || target.dataset.animateSkip === 'true') return
      ensureSectionDefaults(target, indexHint)
      if (handledTargets.has(target)) return

      if (!target.dataset.animateDelay) {
        const derivedDelay =
          typeof indexHint === 'number'
            ? Math.min(indexHint * DELAY_INCREMENT, MAX_DELAY)
            : Math.min(sequentialDelay, MAX_DELAY)
        target.dataset.animateDelay = String(derivedDelay)
        sequentialDelay = Math.min(sequentialDelay + DELAY_INCREMENT, MAX_DELAY)
      }

      const delayValue = normalizeDelay(target.dataset.animateDelay ?? 0)
      target.style.setProperty('--reveal-delay', `${delayValue}ms`)
      handledTargets.add(target)

      if (shouldReduceMotion) {
        target.classList.add('animate-in')
        return
      }

      pendingTargets.add(target)
      observer?.observe(target)
    }

    const sections = Array.from(document.querySelectorAll('section'))
    sections.forEach((section, index) => ensureSectionDefaults(section, index))

    const targets = Array.from(document.querySelectorAll('[data-animate]'))
    targets.forEach((target, index) => registerTarget(target, index))

    if (!shouldReduceMotion) {
      scheduleForceReveal()
    }

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return
          if (node.tagName === 'SECTION') {
            ensureSectionDefaults(node)
          }
          const newTargets = node.matches?.('[data-animate]')
            ? [node]
            : Array.from(node.querySelectorAll?.('[data-animate]') ?? [])
          newTargets.forEach((target) => registerTarget(target))
        })
      })
      if (!shouldReduceMotion) {
        scheduleForceReveal()
      }
    })

    if (document.body) {
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    if (shouldReduceMotion) {
      return () => {
        mutationObserver.disconnect()
      }
    }

    return () => {
      observer?.disconnect()
      mutationObserver.disconnect()
      if (forceRevealTimeout) {
        window.clearTimeout(forceRevealTimeout)
      }
      pendingTargets.clear()
    }
  }, [pathname, threshold])

  return null
}
