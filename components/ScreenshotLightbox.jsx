'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ScreenshotLightbox({
  src,
  alt,
  frameClassName = '',
  imageClassName = '',
  caption,
  badge = 'View full size',
  width = 1280,
  height = 800,
  maxHeight = 350,
}) {
  const [open, setOpen] = useState(false)
  const resolvedMaxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight
  const clampedMaxHeight = resolvedMaxHeight || '350px'
  const sharedStyles = clampedMaxHeight ? { maxHeight: clampedMaxHeight } : undefined
  const clampClasses = 'max-h-[350px]'
  const previewFrameClasses = `relative max-w-4xl mx-auto overflow-hidden border border-swoop-border bg-white ${clampClasses} ${frameClassName}`.trim()
  const previewImageClasses = `w-full h-full object-cover object-top rounded-2xl ${clampClasses} ${imageClassName}`.trim()
  const lightboxImageClasses = `w-full h-full object-cover object-top rounded-2xl ${clampClasses} ${imageClassName}`.trim()

  return (
    <>
      <div className={previewFrameClasses} style={sharedStyles}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={85}
          className={previewImageClasses}
          style={sharedStyles}
        />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-swoop-dark/80 text-white text-xs font-semibold tracking-wide shadow-lg hover:bg-swoop-dark"
          aria-label={`Expand screenshot: ${alt}`}
        >
          <span aria-hidden="true">🔍</span>
          {badge}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-swoop-dark font-bold shadow-lg hover:bg-swoop-green hover:text-swoop-dark"
              aria-label="Close screenshot"
            >
              ×
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-swoop-border" style={sharedStyles}>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={85}
                className={lightboxImageClasses}
                style={sharedStyles}
              />
            </div>
            {caption && (
              <p className="text-white/80 text-sm text-center mt-4 max-w-2xl mx-auto">{caption}</p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
