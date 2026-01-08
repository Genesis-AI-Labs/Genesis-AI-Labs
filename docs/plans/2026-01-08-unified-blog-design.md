# Unified Blog System Design

## Overview

Migrate Zero Morphism essays to a new unified blog at `/blog` with the academic 3-column design from functor-blog. Use MDX for content management.

## Project Structure

```
app/
├── blog/
│   ├── page.tsx                    # Blog index (list all posts)
│   └── [slug]/
│       └── page.tsx                # Dynamic post page (loads MDX)

content/
└── blog/
    ├── announcing-genesis-ai-labs.mdx
    ├── how-to-automate-ai-research.mdx
    ├── geometric-deep-learning-future.mdx
    ├── reinforcement-learning-environments.mdx
    ├── physics-informed-ai.mdx
    └── generative-models-research.mdx

components/
└── blog/
    ├── blog-layout.tsx             # 3-column academic grid
    ├── blog-header.tsx             # Minimal header (logo + nav)
    ├── table-of-contents.tsx       # Sticky left sidebar TOC
    ├── mdx-components.tsx          # Custom MDX renderers
    └── post-header.tsx             # Title, subtitle, author, date

lib/
└── blog.ts                         # Utilities: get posts, parse frontmatter
```

## Layout Design

3-column academic grid (functor-blog style):

```
┌─────────────────────────────────────────────────────────────┐
│  GENESIS AI LABS              Home  Blog  Studio  Contact   │
├───────────┬─────────────────────────────┬───────────────────┤
│  TABLE    │     MAIN CONTENT            │   SIDENOTES       │
│  OF       │                             │   (margin notes)  │
│  CONTENTS │  # Title                    │                   │
│           │  Subtitle                   │                   │
│  (sticky) │  Author · Date              │                   │
├───────────┴─────────────────────────────┴───────────────────┤
│                     © Genesis AI Labs 2025                  │
└─────────────────────────────────────────────────────────────┘
```

### Responsive Breakpoints

- **Desktop (>1200px):** Full 3-column layout
- **Tablet (900-1200px):** TOC + Content (sidenotes hidden)
- **Mobile (<900px):** Single column, TOC becomes horizontal pills

## MDX Configuration

### Frontmatter Format

```yaml
---
title: "Post Title"
subtitle: "Optional subtitle"
author: "Author Name"
date: "2024-01-15"
slug: "post-slug"
tags: ["tag1", "tag2"]
---
```

### Dependencies to Add

- `gray-matter` - Parse frontmatter
- `rehype-highlight` - Syntax highlighting
- `rehype-katex` + `remark-math` - Math rendering
- `rehype-slug` - Heading IDs for TOC

### Custom MDX Components

| Element | Customization |
|---------|---------------|
| `h2`, `h3` | Anchor links, TOC registration |
| `pre/code` | Syntax highlighting with language labels |
| `table` | Styled with borders, responsive wrapper |
| `img` | Wrapped in figure with caption |
| `a` | External link detection |
| `Sidenote` | Custom margin notes component |

## Blog Index Page

- Posts sorted by date (newest first)
- Card display: title, subtitle, author, date
- Hover effect with subtle lift
- Links to `/blog/[slug]`

### Utility Functions (lib/blog.ts)

- `getAllPosts()` - Read content/blog/, parse frontmatter, return sorted
- `getPostBySlug(slug)` - Return single post content + metadata

## Migration Plan

### URL Redirects

| Old URL | New URL |
|---------|---------|
| `/zero_morphism` | `/blog` |
| `/zero_morphism/announcing-genesis-ai-labs` | `/blog/announcing-genesis-ai-labs` |
| `/zero_morphism/how-to-automate-ai-research` | `/blog/how-to-automate-ai-research` |
| `/zero_morphism/geometric-deep-learning-future` | `/blog/geometric-deep-learning-future` |
| `/zero_morphism/reinforcement-learning-environments` | `/blog/reinforcement-learning-environments` |
| `/zero_morphism/physics-informed-ai` | `/blog/physics-informed-ai` |
| `/zero_morphism/generative-models-research` | `/blog/generative-models-research` |

### Post-Migration Cleanup

- Delete `app/zero_morphism/` folder
- Delete `components/zero-morphism-layout.tsx`
- Update nav links site-wide

## Styling

### Design Tokens (globals.css)

```css
:root {
  --font-serif: 'Merriweather', Georgia, serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-primary: #1A1A1A;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F3F4F6;
  --border-color: #E5E7EB;
  --accent-color: #2563EB;
}
```

### Typography

- Headings/body: Merriweather (serif)
- UI/labels: Inter (sans-serif)
- Code: JetBrains Mono

### Assets from functor-blog

- syntax-highlight.css (code block styling)
- KaTeX vendor files (math support)

## Verification

After implementation, verify on localhost:3000:
- Blog index page loads and lists all posts
- Individual post pages render correctly
- TOC navigation works
- Code highlighting works
- Responsive design works
- Old zero_morphism URLs redirect properly
