import React from 'react'

import imageOgimage from '@images/common/ogimage.jpg'
import favicon from '@static/favicon.ico'

interface HeadProps {
  title: string
  description: string
  url?: string
  image?: string
}

export const Head: React.FC<HeadProps> = (props) => {
  if (typeof window === 'undefined') return null

  const { title, description, image } = props
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const { href, origin } = new URL(url)

  return (
    <>
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="blog" />
      <meta property="og:site_name" content="在之邨雲阿須速理 Portfolio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={image ? image : `${origin}${imageOgimage}`}
      />
      <meta property="og:url" content={href} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href={favicon} sizes="any" />
      <meta name="description" content={description} />
      <title>{title}</title>
    </>
  )
}
