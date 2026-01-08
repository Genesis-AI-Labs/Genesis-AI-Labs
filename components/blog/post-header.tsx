import { formatDate } from '@/lib/blog'

interface PostHeaderProps {
  title: string
  subtitle?: string
  author: string
  date: string
}

export function PostHeader({ title, subtitle, author, date }: PostHeaderProps) {
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
        className="text-sm text-gray-500"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        By <span className="text-gray-900 font-medium">{author}</span>
        {' · '}
        {formatDate(date)}
      </div>
    </header>
  )
}
