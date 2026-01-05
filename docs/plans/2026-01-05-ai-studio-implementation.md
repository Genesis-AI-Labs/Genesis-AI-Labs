# AI Studio Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the `/studio` page — a high-agency AI consultancy page with GIC-inspired design patterns.

**Architecture:** Single page route at `app/studio/page.tsx` composed of 7 section components. Uses Framer Motion for animations (already installed). Dark theme matching existing site.

**Tech Stack:** Next.js 14, React, TypeScript, Tailwind CSS, Framer Motion, Geist fonts

**Design Doc:** `docs/plans/2026-01-05-ai-studio-page-design.md`

---

## Task 1: Create Page Shell and Route

**Files:**
- Create: `app/studio/page.tsx`

**Step 1: Create the basic page structure**

```tsx
"use client"

import { Footer } from "@/components/footer"

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121' }}>
      <main className="relative">
        {/* Sections will be added here */}
        <div className="py-32 text-center text-white">
          <h1 className="text-4xl">Studio Page</h1>
        </div>
      </main>
      <Footer />
    </div>
  )
}
```

**Step 2: Verify the route works**

Run: `cd /Users/sidgraph/Genesis-AI-Labs && pnpm dev`

Open: `http://localhost:3000/studio`

Expected: Dark page with "Studio Page" text and footer

**Step 3: Commit**

```bash
git add app/studio/page.tsx
git commit -m "feat(studio): add page shell and route"
```

---

## Task 2: Create Shared Studio Components Directory

**Files:**
- Create: `components/studio/index.ts`

**Step 1: Create the directory and barrel export**

```ts
// components/studio/index.ts
export { StudioHero } from "./studio-hero"
export { ServicesSection } from "./services-section"
export { ProcessSection } from "./process-section"
export { ResearchSection } from "./research-section"
export { CaseStudiesSection } from "./case-studies-section"
export { FAQSection } from "./faq-section"
export { StudioCTA } from "./studio-cta"
```

**Step 2: Commit**

```bash
mkdir -p components/studio
git add components/studio/index.ts
git commit -m "feat(studio): add components barrel export"
```

---

## Task 3: Build StudioHero Component

**Files:**
- Create: `components/studio/studio-hero.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the hero component**

```tsx
"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function StudioHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    // Node animation state
    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const nodeCount = 40

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fill()

        // Draw connections
        nodes.forEach((other, j) => {
          if (i >= j) return
          const dx = node.x - other.x
          const dy = node.y - other.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 150)})`
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", updateCanvasSize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Background animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.6 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
        >
          We build AI systems that ship.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Most AI projects stall between research and production. We bridge that gap — turning ambitious ideas into working systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full border-2 border-white px-8 py-6 bg-transparent text-white text-lg font-light hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Work With Us
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Add hero to page**

Update `app/studio/page.tsx`:

```tsx
"use client"

import { Footer } from "@/components/footer"
import { StudioHero } from "@/components/studio/studio-hero"

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121' }}>
      <main className="relative">
        <StudioHero />
      </main>
      <Footer />
    </div>
  )
}
```

**Step 3: Verify visually**

Open: `http://localhost:3000/studio`

Expected: Full-height hero with animated nodes, headline, subline, and CTA button

**Step 4: Commit**

```bash
git add components/studio/studio-hero.tsx app/studio/page.tsx
git commit -m "feat(studio): add hero section with node animation"
```

---

## Task 4: Build ServicesSection Component

**Files:**
- Create: `components/studio/services-section.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the services component**

```tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  {
    title: "Full-Stack AI Products",
    description: "Complete applications from prototype to production.",
  },
  {
    title: "LLM & RAG Pipelines",
    description: "Custom language models and retrieval-augmented generation.",
  },
  {
    title: "Voice & Conversational Agents",
    description: "Natural language interfaces for support and automation.",
  },
  {
    title: "Multi-Agent Systems",
    description: "Autonomous agents that coordinate to solve complex workflows.",
  },
  {
    title: "Model Fine-Tuning",
    description: "Domain-specific optimization for your data and requirements.",
  },
  {
    title: "MLOps & Infrastructure",
    description: "Deployment, monitoring, and scaling that runs reliably.",
  },
]

export function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left column - sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs tracking-widest uppercase text-gray-500">
                What We Build
              </span>
              <span className="h-px w-12 bg-gray-600"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              End-to-end AI engineering.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              From first prototype to scaled production. We don't hand off decks — we ship systems.
            </p>
          </div>

          {/* Right column - services list */}
          <div className="space-y-0">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="border-b border-gray-800 cursor-pointer"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="py-6 flex items-center justify-between group">
                  <span className="text-lg sm:text-xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {service.title}
                  </span>
                  <span className="text-2xl text-gray-500 group-hover:text-white transition-colors">
                    →
                  </span>
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to page**

Update `app/studio/page.tsx`:

```tsx
"use client"

import { Footer } from "@/components/footer"
import { StudioHero } from "@/components/studio/studio-hero"
import { ServicesSection } from "@/components/studio/services-section"

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121' }}>
      <main className="relative">
        <StudioHero />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
```

**Step 3: Verify visually**

Expected: Two-column layout with sticky left, expandable services on right

**Step 4: Commit**

```bash
git add components/studio/services-section.tsx app/studio/page.tsx
git commit -m "feat(studio): add services section with expandable items"
```

---

## Task 5: Build ProcessSection Component

**Files:**
- Create: `components/studio/process-section.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the process component**

```tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const phases = [
  { name: "Discovery", description: "Understand the real problem." },
  { name: "Design", description: "Architecture from first principles." },
  { name: "Build", description: "Ship weekly. Iterate fast." },
  { name: "Scale", description: "Stay engaged as you grow." },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-32"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              The Gap
            </span>
            <span className="h-px w-12 bg-gray-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-8 tracking-tight max-w-3xl">
            AI prototypes don't become products.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            Proof-of-concepts sit in notebooks. Demos impress but don't deploy. Internal teams lack the specialized muscle to cross the production threshold.
          </p>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Our Approach
            </span>
            <span className="h-px w-12 bg-gray-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 tracking-tight max-w-3xl">
            Research meets engineering. Continuously.
          </h2>

          {/* Phases */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-left"
              >
                <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                  {phase.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Partnership note */}
          <div className="border-t border-gray-800 pt-8">
            <p className="text-lg text-gray-400 italic">
              This isn't a handoff. We stay with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Add to page**

Update imports and add `<ProcessSection />` after `<ServicesSection />`

**Step 3: Verify visually**

Expected: Problem statement, then solution with 4 phases and partnership note

**Step 4: Commit**

```bash
git add components/studio/process-section.tsx app/studio/page.tsx
git commit -m "feat(studio): add process section with problem-solution framing"
```

---

## Task 6: Build ResearchSection Component

**Files:**
- Create: `components/studio/research-section.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the research component**

```tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"

export function ResearchSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Why Us
            </span>
            <span className="h-px w-12 bg-gray-600"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-12 tracking-tight">
            We do the research others cite.
          </h2>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              Genesis runs active research pods — System 2 reasoning, next-gen architectures, embodied intelligence, agentic safety.
            </p>
            <p>
              Papers get published. But more importantly, findings ship into client systems before they're commoditized.
            </p>
            <p className="text-white">
              You're not hiring implementers.{" "}
              <Link
                href="/#research"
                className="underline underline-offset-4 hover:text-gray-300 transition-colors"
              >
                You're hiring the source.
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Add to page**

Update imports and add `<ResearchSection />` after `<ProcessSection />`

**Step 3: Verify visually**

Expected: Centered section with bold research claim and link to main site

**Step 4: Commit**

```bash
git add components/studio/research-section.tsx app/studio/page.tsx
git commit -m "feat(studio): add research connection section"
```

---

## Task 7: Build CaseStudiesSection Component

**Files:**
- Create: `components/studio/case-studies-section.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the case studies component**

```tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "HyperSym",
    tag: "Enterprise",
    headline: "Industrial simulation, automated.",
    outcome: "20x faster model development.",
    tech: ["Multi-Agent", "NLP", "Simulation"],
    link: "https://www.getsimworks.com",
    image: "/HyperSym_x_banner.png",
  },
  {
    title: "Functor",
    tag: "Startup",
    headline: "Proactive memory, ambient intelligence.",
    outcome: "Your memory as a thinking partner.",
    tech: ["LLM", "Embeddings", "Real-time"],
    link: "https://aifunctor.com",
    image: "/functor_abstract art.png",
  },
  {
    title: "CUA [VENV]",
    tag: "Research",
    headline: "Vision-language-action for robotics.",
    outcome: "Bridging sim-to-real.",
    tech: ["VLA", "Embodied AI", "RL"],
    link: null,
    image: "/cua_venv_abstract_art.png",
  },
]

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs tracking-widest uppercase text-gray-500">
              Work
            </span>
            <span className="h-px w-12 bg-gray-600"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            Systems in production.
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-xs tracking-widest uppercase text-gray-500 mb-4 block">
                  {project.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-400 mb-2">
                  {project.headline}
                </p>
                <p className="text-base text-gray-500 mb-4">
                  "{project.outcome}"
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-gray-300 transition-colors inline-flex items-center"
                  >
                    → {project.link.replace("https://", "").replace("www.", "")}
                  </a>
                ) : (
                  <span className="text-sm text-gray-500">Coming Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to page**

Update imports and add `<CaseStudiesSection />` after `<ResearchSection />`

**Step 3: Verify visually**

Expected: 3 alternating project showcases with images and details

**Step 4: Commit**

```bash
git add components/studio/case-studies-section.tsx app/studio/page.tsx
git commit -m "feat(studio): add case studies section with 3 projects"
```

---

## Task 8: Build FAQSection Component

**Files:**
- Create: `components/studio/faq-section.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the FAQ component**

```tsx
"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const faqs = [
  {
    question: "How do engagements start?",
    answer:
      "A conversation. If there's fit, we scope a 2-4 week first phase to validate before committing further.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Project-based or retainer. First conversation is free. Clear proposal after we understand the problem.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. Pre-seed to enterprise. What matters is the problem and your commitment to ship.",
  },
  {
    question: "How is Genesis different?",
    answer:
      "Active research pods. We publish, then ship findings into client systems before they're mainstream.",
  },
  {
    question: "What's your stack?",
    answer:
      "Python-first. PyTorch, HuggingFace, LangChain, vector DBs, modern MLOps. Tools follow problems, not hype.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Continuous partnership. Most clients stay engaged for iteration and scaling.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-xs tracking-widest uppercase text-gray-500">
                Questions
              </span>
              <span className="h-px w-12 bg-gray-600"></span>
            </div>
            <p className="text-lg text-gray-400">The basics, answered.</p>
          </motion.div>

          {/* Right column - accordion */}
          <div className="lg:col-span-2">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-lg text-white font-light group-hover:text-gray-300 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to page**

Update imports and add `<FAQSection />` after `<CaseStudiesSection />`

**Step 3: Verify visually**

Expected: Two-column layout with sticky label and expandable FAQ accordion

**Step 4: Commit**

```bash
git add components/studio/faq-section.tsx app/studio/page.tsx
git commit -m "feat(studio): add FAQ section with accordion"
```

---

## Task 9: Build StudioCTA Component

**Files:**
- Create: `components/studio/studio-cta.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create the CTA component**

```tsx
"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

export function StudioCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-32 sm:py-48 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-12 tracking-tight">
            Let's build.
          </h2>

          <a
            href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full border-2 border-white px-10 py-6 bg-transparent text-white text-lg font-light hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Start a Conversation
            </Button>
          </a>

          <p className="mt-8 text-sm text-gray-500">
            studio@genesisai.in
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Add to page**

Update imports and add `<StudioCTA />` after `<FAQSection />`

**Step 3: Verify visually**

Expected: Large centered headline, button, and email - maximum whitespace

**Step 4: Commit**

```bash
git add components/studio/studio-cta.tsx app/studio/page.tsx
git commit -m "feat(studio): add final CTA section"
```

---

## Task 10: Add Navigation Header

**Files:**
- Create: `components/studio/studio-header.tsx`
- Modify: `app/studio/page.tsx`

**Step 1: Create minimal header component**

```tsx
"use client"

import Link from "next/link"
import { useState } from "react"

export function StudioHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-white"></div>
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/#research"
              className="text-sm text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Research
            </Link>
            <Link
              href="/#products"
              className="text-sm text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Products
            </Link>
            <a
              href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-white/70 transition-colors"
            >
              Contact
            </a>
            <button
              className="flex flex-col space-y-1 sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`h-0.5 w-6 bg-white transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#212121] pt-20 px-4 sm:hidden">
          <nav className="space-y-6">
            <Link href="/" className="block text-lg text-white" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/#research" className="block text-lg text-white" onClick={() => setIsMenuOpen(false)}>
              Research
            </Link>
            <Link href="/#products" className="block text-lg text-white" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <a
              href="https://calendar.app.google/z9S8nPy1DW6XgX18A"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
```

**Step 2: Add header to page**

Update `app/studio/page.tsx` to include `<StudioHeader />` at the top of the component

**Step 3: Verify visually**

Expected: Fixed header with logo dots, nav links, and mobile menu

**Step 4: Commit**

```bash
git add components/studio/studio-header.tsx app/studio/page.tsx
git commit -m "feat(studio): add navigation header"
```

---

## Task 11: Update Main Site Navigation

**Files:**
- Modify: `app/page.tsx:227-267` (navigation menu section)

**Step 1: Add STUDIO link to navigation menu**

Find the nav section in `app/page.tsx` and add after BLOG link:

```tsx
<Link href="/studio" className="block text-lg font-light hover:text-gray-600 transition-colors">
  STUDIO
</Link>
```

**Step 2: Verify navigation**

Open: `http://localhost:3000`

Click hamburger menu, verify STUDIO link appears and navigates correctly

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat(nav): add STUDIO link to main site navigation"
```

---

## Task 12: Update Barrel Export and Final Cleanup

**Files:**
- Modify: `components/studio/index.ts`

**Step 1: Ensure all exports are present**

```ts
export { StudioHero } from "./studio-hero"
export { ServicesSection } from "./services-section"
export { ProcessSection } from "./process-section"
export { ResearchSection } from "./research-section"
export { CaseStudiesSection } from "./case-studies-section"
export { FAQSection } from "./faq-section"
export { StudioCTA } from "./studio-cta"
export { StudioHeader } from "./studio-header"
```

**Step 2: Final page assembly verification**

Final `app/studio/page.tsx` should be:

```tsx
"use client"

import { Footer } from "@/components/footer"
import {
  StudioHeader,
  StudioHero,
  ServicesSection,
  ProcessSection,
  ResearchSection,
  CaseStudiesSection,
  FAQSection,
  StudioCTA,
} from "@/components/studio"

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121' }}>
      <StudioHeader />
      <main className="relative">
        <StudioHero />
        <ServicesSection />
        <ProcessSection />
        <ResearchSection />
        <CaseStudiesSection />
        <FAQSection />
        <StudioCTA />
      </main>
      <Footer />
    </div>
  )
}
```

**Step 3: Full page test**

Run: `pnpm dev`

Test all sections, animations, mobile responsiveness, and links

**Step 4: Final commit**

```bash
git add .
git commit -m "feat(studio): complete AI Studio page implementation"
```

---

## Task 13: Build Verification

**Step 1: Run production build**

```bash
cd /Users/sidgraph/Genesis-AI-Labs && pnpm build
```

Expected: Build succeeds with no errors

**Step 2: Test production build locally**

```bash
pnpm start
```

Open: `http://localhost:3000/studio`

Verify all sections render correctly

**Step 3: Final commit if any fixes needed**

```bash
git add .
git commit -m "fix(studio): production build fixes"
```

---

## Summary

| Task | Component | Key Feature |
|------|-----------|-------------|
| 1 | Page shell | Route setup |
| 2 | Directory | Barrel exports |
| 3 | StudioHero | Node animation, headline, CTA |
| 4 | ServicesSection | Two-column, expandable list |
| 5 | ProcessSection | Problem→Solution, 4 phases |
| 6 | ResearchSection | Centered narrative |
| 7 | CaseStudiesSection | 3 alternating projects |
| 8 | FAQSection | Two-column accordion |
| 9 | StudioCTA | Minimal closing |
| 10 | StudioHeader | Fixed navigation |
| 11 | Main nav | STUDIO link |
| 12 | Cleanup | Final assembly |
| 13 | Build | Verification |

**Total: 13 tasks, ~30 commits**
