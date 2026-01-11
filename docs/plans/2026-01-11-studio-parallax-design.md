# Studio Page Parallax Backgrounds Design

## Overview

Add subtle parallax scrolling effects to the Studio page background images, creating depth and visual polish.

## Goal

Background images move ~15% slower than page scroll, creating an elegant "floating" depth effect without being distracting.

## Sections Affected

| Section | Image | Effect |
|---------|-------|--------|
| StudioHero | studio1.png | Background rises as user scrolls down |
| ServicesSection | studio2.png | Same parallax, creates continuity |
| ProcessSection | studio4.png | Orb appears to float |
| StudioCTA | studio3.png | Lotus gently rises into view |

## Technical Approach

### Implementation Pattern

Each section uses Framer Motion's `useScroll` and `useTransform`:

```tsx
const sectionRef = useRef(null)
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start end", "end start"]
})
const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
```

Applied to background div:

```tsx
<motion.div style={{ y: backgroundY }} className="absolute inset-0 ...">
  {/* existing background image styles */}
</motion.div>
```

### Mobile Handling

Reduced parallax intensity on mobile devices:

```tsx
const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
const parallaxAmount = isMobile ? "8%" : "15%"
```

### Performance

- Uses `translateY` transforms (GPU-accelerated)
- No layout thrashing
- Framer Motion handles SSR safely

## What Changes

- Background `<div>` becomes `<motion.div>`
- New `style={{ y: backgroundY }}` prop added
- Section containers need `ref={sectionRef}`

## What Stays the Same

- All gradient overlays
- Opacity values
- Background positioning
- Existing animations on content

## Out of Scope (YAGNI)

- Horizontal parallax
- Different speeds per section
- Parallax on text/content
- Intersection observer fallback

## Files to Modify

1. `components/studio/studio-hero.tsx`
2. `components/studio/services-section.tsx`
3. `components/studio/process-section.tsx`
4. `components/studio/studio-cta.tsx`
