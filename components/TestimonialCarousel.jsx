'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import DemoDisclosure from '@/components/DemoDisclosure'

export default function TestimonialCarousel({ items }) {
  if (!items?.length) return null

  return (
    <Splide
      aria-label="Testimonials and case studies"
      options={{
        type: 'loop',
        gap: '1.25rem',
        autoplay: true,
        interval: 5500,
        pauseOnHover: true,
        pagination: true,
        arrows: false,
      }}
    >
      {items.map((entry) => (
        <SplideSlide key={`${entry.person}-${entry.metric}`}>
          <article className="hover-lift responsive-card rounded-2xl border border-white/20 bg-white/5 p-5 text-white">
            {entry.badge && (
              <span className="inline-flex rounded-full border border-white/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">{entry.badge}</span>
            )}
            <p className="mt-3 text-sm leading-relaxed text-white/90">“{entry.quote}”</p>
            <p className="mt-3 text-xs text-white/70">{entry.person} — {entry.role}</p>
            <p className="mt-3 text-base font-semibold text-white">{entry.metric}</p>
            {entry.remark && <p className="mt-1 text-xs text-white/70">{entry.remark}</p>}
            <DemoDisclosure tone="dark" className="mt-3 text-[11px]" />
          </article>
        </SplideSlide>
      ))}
    </Splide>
  )
}
