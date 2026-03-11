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
          <article className="hover-lift responsive-card rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 text-white shadow-2xl">
            {entry.badge && (
              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                {entry.badge}
              </span>
            )}
            
            {/* Large quote icon */}
            <div className="mt-4 mb-3">
              <svg className="w-10 h-10 text-white/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
            </div>
            
            {/* Enhanced quote text */}
            <p className="text-lg md:text-xl leading-relaxed text-white font-medium italic">
              "{entry.quote}"
            </p>
            
            {/* Divider */}
            <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Author info with avatar placeholder */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/30 flex items-center justify-center text-white font-bold text-lg">
                {entry.person.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">{entry.person}</p>
                <p className="text-xs text-white/70 mt-0.5">{entry.role}</p>
              </div>
            </div>
            
            {/* Prominent metric highlight */}
            <div className="mt-5 rounded-xl border border-white/20 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">Key Result</p>
              <p className="text-xl font-bold text-white">{entry.metric}</p>
              {entry.remark && <p className="mt-2 text-xs text-white/70 leading-relaxed">{entry.remark}</p>}
            </div>
            
            <DemoDisclosure tone="dark" className="mt-4 text-[11px]" />
          </article>
        </SplideSlide>
      ))}
    </Splide>
  )
}
