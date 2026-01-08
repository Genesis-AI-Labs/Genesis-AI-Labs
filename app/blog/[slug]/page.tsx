import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import { parseFootnotes } from '@/lib/sidenotes'
import { BlogLayout, PostHeader, TableOfContents, mdxComponents, Sidenotes } from '@/components/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Parse footnotes from content
  const { cleanedContent, sidenotes } = parseFootnotes(post.content)

  return (
    <BlogLayout>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,1fr)_minmax(auto,740px)_minmax(200px,1fr)] gap-8 lg:gap-16 py-16">
          {/* Left Column: TOC */}
          <TableOfContents content={cleanedContent} />

          {/* Center Column: Content */}
          <article className="min-w-0">
            <PostHeader
              title={post.title}
              subtitle={post.subtitle}
              author={post.author}
              date={post.date}
              banner={post.banner}
            />

            <div className="blog-prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeSlug]}
                components={mdxComponents}
              >
                {cleanedContent}
              </ReactMarkdown>
            </div>

            {/* Post Footer */}
            <footer className="mt-16 pt-8 border-t border-gray-200">
              <a
                href="/blog"
                className="text-gray-600 hover:text-gray-900 no-underline"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                ← Back to all posts
              </a>
            </footer>
          </article>

          {/* Right Column: Sidenotes */}
          <Sidenotes sidenotes={sidenotes} />
        </div>
      </div>
    </BlogLayout>
  )
}
