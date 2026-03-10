'use client'

import { useEffect, useRef, useState } from 'react'

function parseValue(value) {
  if (!value) return { sign: '', number: 0, decimals: 0, suffix: '' }
  const match = String(value).match(/([+-]?)([0-9]+(?:\.[0-9]+)?)(.*)/)
  if (!match) return { sign: '', number: Number(value) || 0, decimals: 0, suffix: '' }
  const [, sign, num, suffix] = match
  const decimals = num.includes('.') ? num.split('.')[1].length : 0
  return { sign, number: Number(num), decimals, suffix: suffix ?? '' }
}

export default function AnimatedStat({ value, duration = 1400 }) {
  const { sign, number, decimals, suffix } = parseValue(value)
  const [display, setDisplay] = useState(() => `${sign}${number === 0 ? '0' : '0'}${suffix}`)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const current = number * progress
      const formatted = `${sign}${current.toFixed(decimals).replace(/\.0+$/, '')}${suffix}`
      setDisplay(formatted)
      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        setDisplay(`${sign}${number}${suffix}`)
      }
    }

    requestAnimationFrame(tick)
  }, [number, sign, suffix, decimals, duration])

  return <span>{display}</span>
}
