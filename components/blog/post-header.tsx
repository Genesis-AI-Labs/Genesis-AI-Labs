import Image from 'next/image'
import { formatDate } from '@/lib/blog'

interface PostHeaderProps {
  title: string
  subtitle?: string
  author: string
  date: string
  banner?: string
}

export function PostHeader({ title, subtitle, author, date, banner }: PostHeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1
        className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold leading-tight tracking-tight mb-4"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className="text-lg sm:text-xl text-gray-600 italic max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {subtitle}
        </p>
      )}

      <div
        className="text-sm text-gray-500 mb-8"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        By <span className="text-gray-900 font-medium">{author}</span>
        {' · '}
        {formatDate(date)}
      </div>

      {banner && (
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden">
          <Image
            src={banner}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
    </header>
  )
}
