'use client'

import { useEffect, useState } from 'react'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const matches: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2]
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

      matches.push({ id, text, level })
    }

    setHeadings(matches)
  }, [content])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66% 0px' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <aside className="hidden lg:block sticky top-32 pr-8" style={{ fontFamily: 'var(--font-serif)' }}>
      <h3
        className="text-xs uppercase tracking-widest text-gray-400 mb-4"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        Table of Contents
      </h3>
      <nav>
        <ul className="border-l border-gray-200 space-y-3">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`
                  block text-sm leading-snug no-underline transition-all duration-200
                  ${level === 3 ? 'pl-6' : 'pl-4'}
                  border-l-2 -ml-[1px]
                  ${activeId === id
                    ? 'text-gray-900 border-gray-900 font-semibold'
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
