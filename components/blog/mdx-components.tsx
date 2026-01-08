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
