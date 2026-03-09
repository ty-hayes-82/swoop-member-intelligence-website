const SITE_URL = 'https://swoopgolf.com'
const DEFAULT_IMAGE = '/screenshots/member-intelligence.png'

export function buildMetadata({ title, description, path, image = DEFAULT_IMAGE }) {
  const normalizedPath = path === '/' ? '/' : `/${String(path || '').replace(/^\/+/, '')}`
  const canonical = new URL(normalizedPath, SITE_URL).toString()
  const imageUrl = new URL(image, SITE_URL).toString()

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Swoop Golf',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
