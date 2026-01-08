import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/blog'
import { BlogLayout } from '@/components/blog'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <BlogLayout>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="mb-12">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Blog
          </h1>
          <p
            className="text-lg text-gray-600"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Insights on AI research, reinforcement learning, and building the future of intelligent systems.
          </p>
        </header>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block no-underline">
                <div className="p-6 -mx-6 rounded-lg transition-colors hover:bg-gray-50">
                  <h2
                    className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {post.title}
                  </h2>
                  {post.subtitle && (
                    <p
                      className="text-gray-600 mb-3"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {post.subtitle}
                    </p>
                  )}
                  <p
                    className="text-sm text-gray-500"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {post.author} · {formatDate(post.date)}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="text-gray-500 text-center py-12">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </BlogLayout>
  )
}
