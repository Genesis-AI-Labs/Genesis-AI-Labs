export interface Sidenote {
  id: number
  content: string
}

// Parse footnotes from markdown content
export function parseFootnotes(content: string): { cleanedContent: string; sidenotes: Sidenote[] } {
  const sidenotes: Sidenote[] = []

  // Extract footnote definitions [^1]: content
  const footnoteDefRegex = /^\[\^(\d+)\]:\s*(.+?)(?=\n\[\^|\n\n|$)/gms
  let match

  while ((match = footnoteDefRegex.exec(content)) !== null) {
    const id = parseInt(match[1], 10)
    const text = match[2].trim().replace(/\n\s+/g, ' ')
    sidenotes.push({ id, content: text })
  }

  // Remove footnote definitions from content
  let cleanedContent = content.replace(/^\[\^(\d+)\]:\s*(.+?)(?=\n\[\^|\n\n|$)/gms, '')
  cleanedContent = cleanedContent.replace(/\n{3,}/g, '\n\n').trim()

  // Convert inline footnote references [^1] to HTML spans that will render as sidenote refs
  cleanedContent = cleanedContent.replace(
    /\[\^(\d+)\]/g,
    '<sup class="sidenote-ref" data-sidenote-ref="$1">$1</sup>'
  )

  return { cleanedContent, sidenotes: sidenotes.sort((a, b) => a.id - b.id) }
}
