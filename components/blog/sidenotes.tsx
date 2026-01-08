'use client'

import { useEffect, useState, useRef } from 'react'
import type { Sidenote } from '@/lib/sidenotes'

interface SidenotesProps {
  sidenotes: Sidenote[]
}

export function Sidenotes({ sidenotes }: SidenotesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [positions, setPositions] = useState<{ [key: number]: number }>({})

  useEffect(() => {
    const updatePositions = () => {
      const newPositions: { [key: number]: number } = {}

      sidenotes.forEach(({ id }) => {
        const ref = document.querySelector(`[data-sidenote-ref="${id}"]`)
        if (ref && containerRef.current) {
          const refRect = ref.getBoundingClientRect()
          const containerRect = containerRef.current.getBoundingClientRect()
          newPositions[id] = refRect.top - containerRect.top
        }
      })

      // Prevent overlaps by adjusting positions
      const sortedIds = Object.keys(newPositions).map(Number).sort((a, b) => newPositions[a] - newPositions[b])
      let lastBottom = 0
      const minGap = 80 // Minimum gap between sidenotes

      sortedIds.forEach((id) => {
        if (newPositions[id] < lastBottom) {
          newPositions[id] = lastBottom
        }
        lastBottom = newPositions[id] + minGap
      })

      setPositions(newPositions)
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)
    window.addEventListener('scroll', updatePositions)

    return () => {
      window.removeEventListener('resize', updatePositions)
      window.removeEventListener('scroll', updatePositions)
    }
  }, [sidenotes])

  if (sidenotes.length === 0) return <aside className="hidden lg:block" />

  return (
    <aside ref={containerRef} className="hidden lg:block relative h-full">
      {sidenotes.map(({ id, content }) => (
        <div
          key={id}
          className="absolute w-full text-sm leading-relaxed text-gray-600 transition-all duration-200"
          style={{
            top: positions[id] ?? 0,
            fontFamily: 'var(--font-serif)',
          }}
        >
          <span
            className="font-semibold text-xs mr-1"
            style={{ fontFamily: 'var(--font-sans)', verticalAlign: 'super' }}
          >
            {id}
          </span>
          {content}
        </div>
      ))}
    </aside>
  )
}
