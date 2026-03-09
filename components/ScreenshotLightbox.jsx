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
  lightboxMaxHeight = '85vh',
  objectPosition = 'top',
}) {
  const [open, setOpen] = useState(false)

  const previewCapPx = 350
  const parsedPreviewMax =
    typeof maxHeight === 'number'
      ? maxHeight
      : Number.isNaN(Number.parseInt(maxHeight, 10))
        ? previewCapPx
        : Number.parseInt(maxHeight, 10)
  const previewMaxHeightValue = `${Math.min(parsedPreviewMax, previewCapPx)}px`
  const resolvedLightboxMaxHeight =
    typeof lightboxMaxHeight === 'number'
      ? `${lightboxMaxHeight}px`
      : lightboxMaxHeight || '85vh'
  const aspectRatio = width && height ? `${width} / ${height}` : '4 / 3'

  const previewStyle = {
    maxHeight: previewMaxHeightValue,
    width: '100%',
    aspectRatio,
  }
  const lightboxStyle = {
    maxHeight: resolvedLightboxMaxHeight,
    width: '100%',
    aspectRatio,
  }

  const basePreviewClasses = 'relative max-w-4xl mx-auto overflow-hidden border border-swoop-border bg-white rounded-3xl'
  const previewClampClasses = 'max-h-[350px]'
  const lightboxClampClasses = 'max-h-[85vh]'
  const previewFrameClasses = `${basePreviewClasses} ${previewClampClasses} ${frameClassName}`.trim()
  const imageBaseClasses = 'w-full h-full object-cover'
  const previewImageClasses = `${imageBaseClasses} ${imageClassName} ${previewClampClasses} object-cover`.trim()
  const lightboxImageClasses = `${imageBaseClasses} ${imageClassName} ${lightboxClampClasses} object-cover`.trim()

  const imagePreviewStyle = {
    maxHeight: previewMaxHeightValue,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition,
  }

  const imageLightboxStyle = {
    maxHeight: resolvedLightboxMaxHeight,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition,
  }

  return (
    <>
      <div className={previewFrameClasses} style={previewStyle}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          quality={85}
          className={previewImageClasses}
          style={imagePreviewStyle}
          sizes="(max-width: 768px) 100vw, 1200px"
          loading="lazy"
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
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6" role="dialog" aria-modal="true">
          <div className="relative max-w-5xl w-full">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white text-swoop-dark font-bold shadow-lg hover:bg-swoop-green hover:text-swoop-dark"
              aria-label="Close screenshot"
            >
              ×
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-swoop-border" style={lightboxStyle}>
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={85}
                className={lightboxImageClasses}
                style={imageLightboxStyle}
                sizes="(max-width: 768px) 100vw, 1200px"
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
