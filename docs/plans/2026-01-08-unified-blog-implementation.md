# Unified Blog System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Migrate Zero Morphism essays to a unified blog at `/blog` with academic 3-column design and MDX content management.

**Architecture:** File-based MDX content in `content/blog/`, parsed at build time with gray-matter, rendered with react-markdown. Static export compatible with `generateStaticParams`.

**Tech Stack:** Next.js 14, MDX (gray-matter + react-markdown), Tailwind CSS, rehype-highlight for syntax highlighting.

---

## Task 1: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install MDX and markdown dependencies**

Run:
```bash
cd /Users/sidgraph/Genesis-AI-Labs && npm install gray-matter react-markdown rehype-highlight rehype-slug remark-gfm
```

**Step 2: Verify installation**

Run: `npm list gray-matter react-markdown`
Expected: Shows installed versions

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add MDX and markdown dependencies"
```

---

## Task 2: Add Blog Design Tokens and Typography

**Files:**
- Modify: `app/globals.css`

**Step 1: Add design tokens and font imports**

Add to the top of `app/globals.css` (after tailwind imports):

```css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --font-serif: 'Merriweather', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-primary: #1A1A1A;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F3F4F6;
  --border-color: #E5E7EB;
  --accent-color: #2563EB;
  --code-bg: #F9FAFB;

  --max-content-width: 740px;
}
```

**Step 2: Add syntax highlighting styles**

Add after the design tokens:

```css
/* Syntax Highlighting - Atom One Light */
.hljs {
  background: var(--code-bg);
  color: #383a42;
}
.hljs-comment, .hljs-quote { color: #a0a1a7; font-style: italic; }
.hljs-keyword, .hljs-selector-tag { color: #a626a4; }
.hljs-string, .hljs-attr { color: #50a14f; }
.hljs-number, .hljs-literal { color: #986801; }
.hljs-function .hljs-title { color: #4078f2; }
.hljs-built_in { color: #c18401; }
.hljs-type, .hljs-class .hljs-title { color: #c18401; }
.hljs-variable { color: #e45649; }

/* Blog Typography */
.blog-prose {
  font-family: var(--font-serif);
  font-size: 19px;
  line-height: 1.65;
  color: var(--text-primary);
}

.blog-prose h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  text-align: center;
  font-family: var(--font-serif);
}

.blog-prose h2 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 400;
  margin-top: 3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.blog-prose h3 {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);
}

.blog-prose p {
  margin-bottom: 1.5rem;
  text-align: justify;
}

.blog-prose a {
  color: var(--text-primary);
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1px;
  text-decoration-color: var(--text-muted);
  transition: all 0.2s ease;
}

.blog-prose a:hover {
  color: var(--accent-color);
  text-decoration-color: var(--accent-color);
}

.blog-prose pre {
  background: var(--code-bg);
  border-radius: 6px;
  padding: 1.5rem;
  font-size: 0.85rem;
  border: 1px solid var(--border-color);
  overflow-x: auto;
  margin: 2rem 0;
}

.blog-prose code {
  font-family: var(--font-mono);
}

.blog-prose :not(pre) > code {
  background: var(--code-bg);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  font-size: 0.9em;
}

.blog-prose ul, .blog-prose ol {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.blog-prose li {
  margin-bottom: 0.5rem;
}

.blog-prose blockquote {
  border-left: 3px solid var(--border-color);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--text-secondary);
}

.blog-prose hr {
  border: none;
  border-top: 1px solid var(--border-color);
  margin: 3rem 0;
}

.blog-prose table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
  font-family: var(--font-sans);
  margin: 2rem 0;
}

.blog-prose th {
  text-align: left;
  border-bottom: 2px solid var(--text-primary);
  padding: 0.75rem 0.5rem;
  font-weight: 600;
}

.blog-prose td {
  border-bottom: 1px solid var(--border-color);
  padding: 0.75rem 0.5rem;
  color: var(--text-secondary);
}

.blog-prose img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 4px;
}
```

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "style: add blog typography and syntax highlighting"
```

---

## Task 3: Create Blog Utilities Library

**Files:**
- Create: `lib/blog.ts`

**Step 1: Create lib directory if needed**

Run: `mkdir -p /Users/sidgraph/Genesis-AI-Labs/lib`

**Step 2: Create blog.ts**

Create `lib/blog.ts`:

```typescript
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface PostMeta {
  slug: string
  title: string
  subtitle?: string
  author: string
  date: string
  tags?: string[]
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        subtitle: data.subtitle,
        author: data.author || 'Genesis AI Labs',
        date: data.date || '',
        tags: data.tags || [],
      }
    })

  // Sort by date descending
  return posts.sort((a, b) => {
    if (a.date < b.date) return 1
    if (a.date > b.date) return -1
    return 0
  })
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    subtitle: data.subtitle,
    author: data.author || 'Genesis AI Labs',
    date: data.date || '',
    tags: data.tags || [],
    content,
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs.readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => name.replace(/\.mdx$/, ''))
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
```

**Step 3: Commit**

```bash
git add lib/blog.ts
git commit -m "feat: add blog utilities library"
```

---

## Task 4: Create Blog Layout Component

**Files:**
- Create: `components/blog/blog-layout.tsx`

**Step 1: Create components/blog directory**

Run: `mkdir -p /Users/sidgraph/Genesis-AI-Labs/components/blog`

**Step 2: Create blog-layout.tsx**

Create `components/blog/blog-layout.tsx`:

```tsx
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
```

**Step 3: Commit**

```bash
git add components/blog/blog-layout.tsx
git commit -m "feat: add blog layout component"
```

---

## Task 5: Create Table of Contents Component

**Files:**
- Create: `components/blog/table-of-contents.tsx`

**Step 1: Create table-of-contents.tsx**

Create `components/blog/table-of-contents.tsx`:

```tsx
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
```

**Step 2: Commit**

```bash
git add components/blog/table-of-contents.tsx
git commit -m "feat: add table of contents component"
```

---

## Task 6: Create Post Header Component

**Files:**
- Create: `components/blog/post-header.tsx`

**Step 1: Create post-header.tsx**

Create `components/blog/post-header.tsx`:

```tsx
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
```

**Step 2: Commit**

```bash
git add components/blog/post-header.tsx
git commit -m "feat: add post header component"
```

---

## Task 7: Create MDX Components

**Files:**
- Create: `components/blog/mdx-components.tsx`

**Step 1: Create mdx-components.tsx**

Create `components/blog/mdx-components.tsx`:

```tsx
import type { Components } from 'react-markdown'

export const mdxComponents: Components = {
  h2: ({ children, ...props }) => {
    const id = children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    return (
      <h2 id={id} {...props}>
        {children}
      </h2>
    )
  },

  h3: ({ children, ...props }) => {
    const id = children
      ?.toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    return (
      <h3 id={id} {...props}>
        {children}
      </h3>
    )
  },

  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http')
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    )
  },

  pre: ({ children, ...props }) => (
    <pre {...props}>
      {children}
    </pre>
  ),

  code: ({ className, children, ...props }) => {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },
}
```

**Step 2: Commit**

```bash
git add components/blog/mdx-components.tsx
git commit -m "feat: add MDX components"
```

---

## Task 8: Create Blog Components Barrel Export

**Files:**
- Create: `components/blog/index.ts`

**Step 1: Create index.ts**

Create `components/blog/index.ts`:

```typescript
export { BlogLayout } from './blog-layout'
export { TableOfContents } from './table-of-contents'
export { PostHeader } from './post-header'
export { mdxComponents } from './mdx-components'
```

**Step 2: Commit**

```bash
git add components/blog/index.ts
git commit -m "feat: add blog components barrel export"
```

---

## Task 9: Create Content Directory and First MDX Post

**Files:**
- Create: `content/blog/announcing-genesis-ai-labs.mdx`

**Step 1: Create content/blog directory**

Run: `mkdir -p /Users/sidgraph/Genesis-AI-Labs/content/blog`

**Step 2: Create announcing-genesis-ai-labs.mdx**

Create `content/blog/announcing-genesis-ai-labs.mdx`:

```mdx
---
title: "Announcing Genesis AI Labs, Inc."
subtitle: "Building the future of AI research environments"
author: "Siddhant Saxena, Research Team"
date: "2024-01-15"
tags: ["company", "announcement"]
---

Today we're announcing Genesis AI Labs, a research lab focused on developing advanced AI agents, simulations, and reinforcement learning environments that will enable breakthrough discoveries in artificial intelligence and accelerate progress toward superintelligence.

We will achieve this by creating sophisticated research environments and computational frameworks that capture the full scope of what researchers need to do their work. This includes building advanced geometric deep learning systems, developing physics-informed AI models, and creating environments for training intelligent agents that can adapt and learn in complex scenarios.

We're betting that the lion's share of value from AI will come from automating complex research tasks rather than from "incremental improvements in existing systems". Currently, AI models have serious shortcomings that render most of this enormous potential out of reach. They struggle with long-term reasoning, lack robust understanding of geometric structures, and can't effectively combine multiple modalities of information without losing critical context.

To overcome these limitations, Genesis AI Labs will produce the research and computational frameworks necessary for comprehensively advancing AI capabilities. Our research environments will act as practical testbeds for real-world AI scenarios, enabling agents to learn sophisticated reasoning through advanced reinforcement learning and geometric deep learning approaches.

The potential impact here is transformative: AI research in India is rapidly growing, with significant investment in AI infrastructure and talent development. For the entire research community, the opportunities are even greater, with global AI research funding reaching unprecedented levels.

The exponential growth in AI capabilities likely to result from breakthrough research could generate vast improvements in scientific discovery, technological innovation, and our understanding of intelligence itself. Our vision is to realize this potential as quickly and safely as possible.

---

Genesis AI Labs is supported by leading researchers and institutions committed to advancing AI research in India and globally.
```

**Step 3: Commit**

```bash
git add content/blog/announcing-genesis-ai-labs.mdx
git commit -m "content: add announcing genesis ai labs post"
```

---

## Task 10: Create Remaining MDX Posts

**Files:**
- Create: `content/blog/how-to-automate-ai-research.mdx`
- Create: `content/blog/geometric-deep-learning-future.mdx`
- Create: `content/blog/reinforcement-learning-environments.mdx`
- Create: `content/blog/physics-informed-ai.mdx`
- Create: `content/blog/generative-models-research.mdx`

**Step 1: Create how-to-automate-ai-research.mdx**

Create `content/blog/how-to-automate-ai-research.mdx`:

```mdx
---
title: "How to fully automate AI research"
subtitle: "A framework for end-to-end research automation"
author: "Siddhant Saxena, Research Team, AI Agents Pod"
date: "2024-03-20"
tags: ["research", "automation", "ai-agents"]
---

With every passing month, AI models get better at most tasks that an AI researcher does in their work. Yet for all these gains, today's models only assist human researchers, falling far short of automating research completely. What will it take to build AI systems that can fully replace human researchers, and why aren't we there yet?

Current AI systems present something of a paradox. Their performance on narrow research tasks already exceeds that of most human researchers. However, any researcher who has worked with them quickly notices the need to keep AI agents on a very short leash. Despite good benchmark scores and impressive demos, there are clearly core capabilities that human researchers have that our current systems are missing.

We've previously highlighted some of these shortcomings: lack of reliability in complex reasoning, poor long-term planning capabilities, and overly narrow focus on specific domains, among others. But why are these capabilities missing in AI systems to begin with? We train them on more compute and data than humans have access to in their entire careers, and we can run millions of parallel experiments, and yet it's still not enough.

On some level, the answer has to be that our learning algorithms have been and remain much less efficient than the human brain. Deep learning researchers often point to this and say that it's a sign the field needs new paradigms. But we think there's a more specific and actionable explanation.

The key insight is that human researchers don't just process information—they actively construct and test hypotheses through experimentation, collaborate with others, and build upon decades of accumulated knowledge in sophisticated ways. Current AI systems, despite their impressive capabilities, lack the integrated reasoning frameworks that allow humans to navigate uncertainty and make breakthrough discoveries.

At Genesis AI Labs, we're developing research environments that capture these missing elements. Our approach combines geometric deep learning for understanding complex relationships, reinforcement learning for long-term planning, and generative modeling for creative hypothesis generation. These aren't separate tools but integrated components of a unified research framework.

The path forward requires building AI systems that can engage in the full research lifecycle: identifying important problems, designing experiments, interpreting results, and iterating based on findings. This means creating environments where AI agents can learn not just from data, but from the process of discovery itself.

We believe this approach will unlock the next phase of AI development, where systems don't just assist researchers but become capable research partners, accelerating the pace of scientific discovery and bringing us closer to artificial general intelligence.
```

**Step 2: Create geometric-deep-learning-future.mdx**

Create `content/blog/geometric-deep-learning-future.mdx`:

```mdx
---
title: "The upcoming breakthrough moment for Geometric Deep Learning"
subtitle: "Why geometric structure is fundamental to intelligence"
author: "Research Team, Geometric Deep Learning Pod"
date: "2024-02-10"
tags: ["geometric-deep-learning", "research", "neural-networks"]
---

Geometric Deep Learning represents one of the most promising frontiers in AI research, yet it remains underexplored compared to traditional deep learning approaches. We believe we're approaching a breakthrough moment that will fundamentally change how AI systems understand and process complex structured data.

Traditional neural networks excel at processing grid-like data such as images and sequences, but struggle with irregular, graph-structured data that represents relationships in the real world. From molecular structures to social networks, from protein folding to knowledge graphs, the most important problems in science and technology involve understanding geometric relationships.

The key insight driving our research is that geometric structure is fundamental to intelligence. Human cognition naturally operates on spatial and relational concepts. We understand the world through geometric intuitions about distance, similarity, and transformation. Current AI systems that ignore these geometric principles are missing a crucial component of intelligent reasoning.

At Genesis AI Labs, our Geometric Deep Learning Pod is developing novel architectures that can naturally handle complex geometric structures. These include graph neural networks that preserve symmetries, equivariant networks that understand transformations, and attention mechanisms that respect geometric constraints.

The applications are transformative. In drug discovery, geometric deep learning can model molecular interactions with unprecedented accuracy. In materials science, it can predict properties based on atomic arrangements. In robotics, it enables understanding of spatial relationships and manipulation tasks.

We're particularly excited about the intersection of geometric deep learning with physics-informed neural networks. By incorporating physical laws and geometric constraints directly into the learning process, we can create AI systems that not only fit data but understand the underlying principles governing natural phenomena.

The breakthrough moment is coming because we now have the computational tools, theoretical understanding, and practical applications converging simultaneously. The next generation of AI systems will be geometrically aware, capable of reasoning about structure and relationships in ways that current systems cannot.
```

**Step 3: Create reinforcement-learning-environments.mdx**

Create `content/blog/reinforcement-learning-environments.mdx`:

```mdx
---
title: "Why sophisticated RL environments are the bottleneck to AI progress"
subtitle: "The missing piece for training truly intelligent agents"
author: "AI Agents Pod, Research Team"
date: "2024-04-05"
tags: ["reinforcement-learning", "environments", "ai-agents"]
---

The current state of reinforcement learning research is constrained not by algorithmic limitations, but by the poverty of environments in which we train our agents. Most RL research today relies on simplified simulations that bear little resemblance to the complexity of real-world decision-making scenarios.

Consider the environments commonly used in RL research: Atari games, simple robotic manipulation tasks, or abstract grid worlds. While these have been valuable for developing foundational algorithms, they fail to capture the multi-scale, multi-agent, and multi-objective nature of real-world problems that we ultimately want AI systems to solve.

The gap between laboratory RL and practical applications is enormous. Real-world environments involve partial observability, non-stationary dynamics, sparse and delayed rewards, and the need to coordinate with other agents. Most importantly, they require understanding and reasoning about complex geometric and temporal relationships.

At Genesis AI Labs, we're building a new generation of RL environments that bridge this gap. Our environments simulate realistic scenarios where agents must engage in long-term planning, adapt to changing conditions, and collaborate or compete with other intelligent agents. These aren't just more complex versions of existing benchmarks—they're fundamentally different in their structure and requirements.

Our approach integrates insights from our Geometric Deep Learning Pod to create environments where spatial and relational reasoning are essential. Agents must understand not just what actions to take, but how their actions affect the geometric structure of their environment and the behavior of other agents.

The key innovation is creating environments that are compositionally complex rather than just computationally expensive. Our agents learn to decompose complex tasks into manageable components, transfer knowledge across different scenarios, and develop robust strategies that work across a wide range of conditions.

We believe that sophisticated RL environments are the missing piece that will unlock the next level of AI capabilities. By training agents in environments that capture the full complexity of real-world decision-making, we can develop AI systems that are not just powerful in narrow domains, but genuinely intelligent and adaptable.
```

**Step 4: Create physics-informed-ai.mdx**

Create `content/blog/physics-informed-ai.mdx`:

```mdx
---
title: "Physics-informed AI isn't the bottleneck to scientific progress"
subtitle: "Looking beyond constraint satisfaction to creative discovery"
author: "Deep Learning Pod, Research Team"
date: "2024-03-15"
tags: ["physics-informed-ai", "scientific-discovery", "deep-learning"]
---

There's a common misconception in the AI research community that physics-informed neural networks (PINNs) and similar approaches are the primary bottleneck preventing AI from revolutionizing scientific discovery. While these methods are important, the real bottleneck lies elsewhere: in our ability to create AI systems that can reason about uncertainty, generate novel hypotheses, and integrate knowledge across multiple scales and domains.

Physics-informed AI has made impressive strides in solving partial differential equations, modeling fluid dynamics, and predicting material properties. These successes have led many to believe that simply incorporating more physical constraints into neural networks will unlock the next level of scientific AI. But this view misses the bigger picture.

The real challenge in scientific AI is not just solving known equations more efficiently, but discovering new principles, identifying unexpected patterns, and making connections across seemingly unrelated phenomena. This requires creative reasoning capabilities that go far beyond constraint satisfaction.

Consider the greatest scientific breakthroughs in history: the discovery of DNA's structure, the development of quantum mechanics, or the theory of evolution. These weren't achieved by solving known equations more accurately, but by recognizing patterns, forming hypotheses, and making conceptual leaps that required deep understanding and creative insight.

At Genesis AI Labs, our approach to physics-informed AI goes beyond traditional PINNs. We're developing systems that can learn physical principles from data, reason about multiple competing hypotheses, and generate novel experimental designs to test their predictions. This requires integrating insights from our Geometric Deep Learning Pod and AI Agents Pod.

The key insight is that physics is not just a set of constraints to be satisfied, but a framework for understanding how the world works. AI systems that truly understand physics should be able to reason about causality, predict the effects of interventions, and generalize to new scenarios in ways that current systems cannot.

We believe the future of scientific AI lies in creating systems that combine the precision of physics-informed methods with the creativity and flexibility of general intelligence. These systems won't just solve scientific problems faster—they'll help us ask better questions and discover principles we never knew existed.
```

**Step 5: Create generative-models-research.mdx**

Create `content/blog/generative-models-research.mdx`:

```mdx
---
title: "Advanced generative models will accelerate research"
subtitle: "From pattern matching to genuine scientific creativity"
author: "Deep Learning Pod, Generative Modeling Team"
date: "2024-05-12"
tags: ["generative-models", "research", "creativity"]
---

The current generation of generative models has captured public attention with impressive text and image generation capabilities. However, we're only scratching the surface of what's possible when generative AI is properly integrated into the research process. The next breakthrough will come from models that can generate not just content, but scientific insights, experimental designs, and novel research directions.

Today's generative models excel at pattern matching and interpolation within their training distributions. While impressive, this limits their utility for research, where the goal is often to discover patterns that haven't been seen before or to extrapolate beyond existing knowledge. Research requires genuine creativity and reasoning, not just sophisticated pattern completion.

The key insight driving our work is that effective generative models for research must understand the underlying structure of scientific knowledge. This means going beyond surface-level text generation to models that can reason about causal relationships, understand experimental design principles, and generate hypotheses that are both novel and testable.

At Genesis AI Labs, we're developing generative models that integrate insights from our other research pods. By combining geometric deep learning with generative modeling, we can create systems that understand the structural relationships in scientific data. By incorporating reinforcement learning, we can train models to generate research strategies that maximize long-term scientific progress.

Our approach focuses on compositional generation—models that can break down complex research problems into manageable components, generate solutions for each component, and then combine these solutions in novel ways. This mirrors how human researchers approach complex problems, building on existing knowledge while making creative leaps.

The applications are transformative. Imagine generative models that can propose new molecular structures with desired properties, design experiments to test specific hypotheses, or identify unexpected connections between different fields of research. These aren't just tools for automating existing research processes—they're partners in the discovery process itself.

We believe that advanced generative models will fundamentally change how research is conducted, accelerating the pace of discovery and enabling researchers to explore possibilities that would be impossible to investigate manually. The future of research is not just human or artificial intelligence, but the creative collaboration between both.
```

**Step 6: Commit all posts**

```bash
git add content/blog/
git commit -m "content: migrate all zero morphism essays to mdx"
```

---

## Task 11: Create Blog Index Page

**Files:**
- Modify: `app/blog/page.tsx`

**Step 1: Update blog/page.tsx**

Replace `app/blog/page.tsx`:

```tsx
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
```

**Step 2: Commit**

```bash
git add app/blog/page.tsx
git commit -m "feat: implement blog index page"
```

---

## Task 12: Create Dynamic Blog Post Page

**Files:**
- Create: `app/blog/[slug]/page.tsx`

**Step 1: Create directory**

Run: `mkdir -p /Users/sidgraph/Genesis-AI-Labs/app/blog/[slug]`

**Step 2: Create page.tsx**

Create `app/blog/[slug]/page.tsx`:

```tsx
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'
import { BlogLayout, PostHeader, TableOfContents, mdxComponents } from '@/components/blog'

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

  return (
    <BlogLayout>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(200px,1fr)_minmax(auto,740px)_minmax(200px,1fr)] gap-8 lg:gap-16 py-16">
          {/* Left Column: TOC */}
          <TableOfContents content={post.content} />

          {/* Center Column: Content */}
          <article className="min-w-0">
            <PostHeader
              title={post.title}
              subtitle={post.subtitle}
              author={post.author}
              date={post.date}
            />

            <div className="blog-prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeSlug]}
                components={mdxComponents}
              >
                {post.content}
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

          {/* Right Column: Sidenotes placeholder */}
          <aside className="hidden lg:block">
            {/* Reserved for sidenotes - can be implemented later */}
          </aside>
        </div>
      </div>
    </BlogLayout>
  )
}
```

**Step 3: Commit**

```bash
git add app/blog/[slug]/page.tsx
git commit -m "feat: implement dynamic blog post page"
```

---

## Task 13: Add URL Redirects

**Files:**
- Modify: `next.config.mjs`

**Step 1: Update next.config.mjs**

Replace `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/zero_morphism',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/zero_morphism/announcing-genesis-ai-labs',
        destination: '/blog/announcing-genesis-ai-labs',
        permanent: true,
      },
      {
        source: '/zero_morphism/how-to-automate-ai-research',
        destination: '/blog/how-to-automate-ai-research',
        permanent: true,
      },
      {
        source: '/zero_morphism/geometric-deep-learning-future',
        destination: '/blog/geometric-deep-learning-future',
        permanent: true,
      },
      {
        source: '/zero_morphism/reinforcement-learning-environments',
        destination: '/blog/reinforcement-learning-environments',
        permanent: true,
      },
      {
        source: '/zero_morphism/physics-informed-ai',
        destination: '/blog/physics-informed-ai',
        permanent: true,
      },
      {
        source: '/zero_morphism/generative-models-research',
        destination: '/blog/generative-models-research',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
```

**Note:** Redirects don't work with static export. For static hosting, we'll create redirect HTML files or handle via hosting config. For now, keep the old pages until we verify the new blog works, then delete them.

**Step 2: Commit**

```bash
git add next.config.mjs
git commit -m "config: add zero morphism redirect mappings"
```

---

## Task 14: Build and Test

**Step 1: Run development server**

Run: `cd /Users/sidgraph/Genesis-AI-Labs && npm run dev`

**Step 2: Verify in browser**

Test these URLs on localhost:3000:
- `/blog` - Should show list of 6 posts
- `/blog/announcing-genesis-ai-labs` - Should show full post with TOC
- `/blog/how-to-automate-ai-research` - Should show full post
- Check TOC scroll highlighting works
- Check responsive design (resize browser)

**Step 3: Run build**

Run: `npm run build`
Expected: Build succeeds with all blog pages generated

**Step 4: Commit verification**

```bash
git add -A
git commit -m "feat: complete unified blog implementation"
```

---

## Task 15: Cleanup Old Zero Morphism Files (Optional - After Verification)

**Files:**
- Delete: `app/zero_morphism/` (entire directory)
- Delete: `components/zero-morphism-layout.tsx`

**Step 1: Delete old files**

Run:
```bash
rm -rf /Users/sidgraph/Genesis-AI-Labs/app/zero_morphism
rm /Users/sidgraph/Genesis-AI-Labs/components/zero-morphism-layout.tsx
```

**Step 2: Commit cleanup**

```bash
git add -A
git commit -m "chore: remove deprecated zero morphism files"
```

---

## Summary

After completing all tasks:
- 6 blog posts migrated to MDX format
- Academic 3-column layout with sticky TOC
- Syntax highlighting for code blocks
- Responsive design (desktop/tablet/mobile)
- Clean blog index page
- Old URLs documented for redirect handling

**Total commits:** 15
**Estimated implementation time:** Tasks are bite-sized for incremental progress
