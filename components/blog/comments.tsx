'use client'

import { useEffect, useRef } from 'react'

// Values come from https://giscus.app after Discussions is enabled on the repo
// and the giscus GitHub app is installed.
const GISCUS = {
  repo: 'Genesis-AI-Labs/Genesis-AI-Labs',
  repoId: 'R_kgDOQwuKhQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOQwuKhc4DHAm-',
}

interface CommentsProps {
  slug: string
}

export function Comments({ slug }: CommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !GISCUS.categoryId) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', GISCUS.repo)
    script.setAttribute('data-repo-id', GISCUS.repoId)
    script.setAttribute('data-category', GISCUS.category)
    script.setAttribute('data-category-id', GISCUS.categoryId)
    // One discussion per post, keyed by slug so it survives URL changes
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', slug)
    script.setAttribute('data-strict', '1')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', 'light')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')
    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [slug])

  if (!GISCUS.categoryId) return null

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2
        className="text-2xl font-semibold text-gray-900 mb-6"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Discussion
      </h2>
      <div ref={containerRef} />
    </section>
  )
}
