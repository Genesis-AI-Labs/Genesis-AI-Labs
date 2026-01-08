import Link from 'next/link'

interface BlogLayoutProps {
  children: React.ReactNode
}

export function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-gray-800 hover:text-black no-underline"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Genesis AI Labs
          </Link>
          <nav className="flex gap-8" style={{ fontFamily: 'var(--font-sans)' }}>
            <Link href="/" className="text-sm text-gray-800 hover:text-gray-500 no-underline">
              Home
            </Link>
            <Link href="/blog" className="text-sm text-gray-800 hover:text-gray-500 no-underline">
              Blog
            </Link>
            <Link href="/studio" className="text-sm text-gray-800 hover:text-gray-500 no-underline">
              Studio
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 py-8 text-center text-sm text-gray-500" style={{ fontFamily: 'var(--font-sans)' }}>
          Genesis AI Labs © {new Date().getFullYear()}
          <br />
          <Link href="/about" className="text-gray-500 hover:text-gray-700 no-underline">About</Link>
          {' · '}
          <Link href="/careers" className="text-gray-500 hover:text-gray-700 no-underline">Careers</Link>
        </div>
      </footer>
    </div>
  )
}
