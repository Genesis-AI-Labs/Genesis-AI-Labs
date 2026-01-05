# AI Studio Page Design

**Date:** 2026-01-05
**Route:** `/studio`
**Status:** Approved

## Overview

A new page for Genesis AI Labs positioning the company as a high-agency AI studio. Avoids generic "consultancy" framing. Inspired by General Intelligence Company's restrained, confident aesthetic while maintaining Genesis's dark theme identity.

## Design Philosophy

**Blend approach:**
- Keep: Dark theme (#212121), glassmorphism accents, existing color palette
- Adopt from GIC: Full-width sections, generous whitespace, Lottie-style animations, problem→solution framing, restrained confidence, high-agency tone

**High-agency principles:**
- Confidence through restraint — minimal decoration, trusts the viewer
- Terse, authoritative copy — no over-explaining
- Problem → Solution framing — acknowledge pain, then resolve
- Generous whitespace — let content breathe
- Sophisticated animations — purposeful, not decorative

## Target Audience

- Enterprises needing reliable, scalable AI solutions
- Startups wanting to ship AI products quickly
- Sophisticated buyers who don't need hand-holding

---

## Page Sections

### 1. Hero

**Layout:** Full-width, centered, generous vertical padding. Confidence through restraint.

**Headline:** "We build AI systems that ship."

**Subline:**
> Most AI projects stall between research and production. We bridge that gap — turning ambitious ideas into working systems.

**CTA:** "Work With Us" (single button)

**Visual:** Subtle Lottie-style animation — abstract nodes/lines connecting and flowing. Suggests coordination, systems thinking. Purposeful, not decorative.

**Notes:**
- No "AI Studio" label in hero — let work speak
- Nav can say "Studio" but page leads with outcome
- No cluttered info cards

---

### 2. Services

**Layout:** Full-width, two-column split. Left: bold statement (sticky). Right: services list (scrollable).

**Left column (sticky on scroll):**

**Headline:** "End-to-end AI engineering."

**Supporting statement:**
> From first prototype to scaled production. We don't hand off decks — we ship systems.

**Right column (list with hover reveals):**

```
Full-Stack AI Products          →
LLM & RAG Pipelines            →
Voice & Conversational Agents  →
Multi-Agent Systems            →
Model Fine-Tuning              →
MLOps & Infrastructure         →
```

**On hover/click:** Brief one-line expansion appears inline below:

| Service | Expansion |
|---------|-----------|
| Full-Stack AI Products | Complete applications from prototype to production. |
| LLM & RAG Pipelines | Custom language models and retrieval-augmented generation. |
| Voice & Conversational Agents | Natural language interfaces for support and automation. |
| Multi-Agent Systems | Autonomous agents that coordinate to solve complex workflows. |
| Model Fine-Tuning | Domain-specific optimization for your data and requirements. |
| MLOps & Infrastructure | Deployment, monitoring, and scaling that runs reliably. |

**Notes:**
- Services stated, not over-explained
- Assumes visitor is sophisticated
- High agency = trusting them to ask if curious

---

### 3. Process

**Layout:** Problem → Solution framing. Two distinct blocks with generous separation.

**Block 1: The Problem**

**Small label:** "THE GAP"

**Headline:** "AI prototypes don't become products."

**Copy:**
> Proof-of-concepts sit in notebooks. Demos impress but don't deploy. Internal teams lack the specialized muscle to cross the production threshold.

**Visual:** Animated diagram — scattered nodes, disconnected, flickering (suggests fragmentation).

**Block 2: The Solution**

**Small label:** "OUR APPROACH"

**Headline:** "Research meets engineering. Continuously."

**Four phases (minimal horizontal text blocks):**

| Discovery | Design | Build | Scale |
|-----------|--------|-------|-------|
| Understand the real problem. | Architecture from first principles. | Ship weekly. Iterate fast. | Stay engaged as you grow. |

**Below phases:**
> This isn't a handoff. We stay with you.

**Visual:** Same nodes, now connected by flowing lines, stable (suggests coordination achieved).

---

### 4. Research Connection

**Layout:** Full-width, centered. Single narrative block. Let the statement breathe.

**Small label:** "WHY US"

**Headline:** "We do the research others cite."

**Copy (3 short paragraphs, generous line spacing):**

> Genesis runs active research pods — System 2 reasoning, next-gen architectures, embodied intelligence, agentic safety.

> Papers get published. But more importantly, findings ship into client systems before they're commoditized.

> You're not hiring implementers. You're hiring the source.

**Visual:** Subtle Lottie animation — abstract "flow" from research (nodes pulsing) into production (stable, connected system).

**Micro-interaction:** On hover over "the source", subtle line draws to "Explore Research →" link (homepage #research).

**Notes:**
- No bullet lists or research area breakdown
- Homepage covers research pods — this page asserts advantage and moves on
- High agency = not over-proving

---

### 5. Case Studies

**Layout:** Full-width. 3 large horizontal project blocks stacked vertically. Alternating image/text sides.

**Small label:** "WORK"

**Headline:** "Systems in production."

**Project 1: HyperSym**

| Left (Visual) | Right (Content) |
|---------------|-----------------|
| Abstract visual / screenshot | **HyperSym** |
| | Industrial simulation, automated. |
| | "20x faster model development." |
| | `Multi-Agent · NLP · Simulation` |
| | → getsimworks.com |

**Project 2: Functor**

| Left (Content) | Right (Visual) |
|----------------|----------------|
| **Functor** | Abstract visual / screenshot |
| Proactive memory, ambient intelligence. | |
| "Your memory as a thinking partner." | |
| `LLM · Embeddings · Real-time` | |
| → aifunctor.com | |

**Project 3: CUA [VENV]**

| Left (Visual) | Right (Content) |
|---------------|-----------------|
| Abstract visual / screenshot | **CUA [VENV]** |
| | Vision-language-action for robotics. |
| | "Bridging sim-to-real." |
| | `VLA · Embodied AI · RL` |
| | Coming Soon |

**Hover:** Subtle scale (1.02), arrow/link underlines.

**Notes:**
- Large, confident presentation
- Each project gets breathing room
- Alternating layout creates rhythm
- Flagship products displayed as such

---

### 6. FAQ

**Layout:** Full-width, two-column. Left: section label (narrow, sticky). Right: accordion.

**Left column:**

**Small label:** "QUESTIONS"

**Single line:**
> The basics, answered.

**Right column (accordion):**

Clean text rows. Click to expand. `+` rotates to `×` on open. No decorative icons.

| Question | Answer |
|----------|--------|
| How do engagements start? | A conversation. If there's fit, we scope a 2-4 week first phase to validate before committing further. |
| What does pricing look like? | Project-based or retainer. First conversation is free. Clear proposal after we understand the problem. |
| Do you work with early-stage startups? | Yes. Pre-seed to enterprise. What matters is the problem and your commitment to ship. |
| How is Genesis different? | Active research pods. We publish, then ship findings into client systems before they're mainstream. |
| What's your stack? | Python-first. PyTorch, HuggingFace, LangChain, vector DBs, modern MLOps. Tools follow problems, not hype. |
| Do you provide ongoing support? | Yes. Continuous partnership. Most clients stay engaged for iteration and scaling. |

**Notes:**
- Answers short, direct
- No over-explaining
- Assumes reader is smart

---

### 7. CTA

**Layout:** Full-width, centered. Maximum whitespace. Single focal point. No decorative backgrounds.

**Headline:** "Let's build."

**CTA button:** "Start a Conversation"

**Below button (small, muted):**
> studio@genesisai.in

**Visual:** Lottie animation final state — all nodes connected, stable, gently pulsing. "The system is ready, just needs you."

**Hover on button:** Subtle expansion, background shifts to white, text inverts to dark.

**Notes:**
- No supporting paragraph
- No trust badges or stats
- Page has made the case — this is just the door
- Pure confidence close

---

## Technical Implementation

### Route
`app/studio/page.tsx`

### Components to Create

| Component | Purpose |
|-----------|---------|
| `StudioHero` | Full-width hero with Lottie background |
| `ServicesSection` | Two-column sticky/scroll with hover reveals |
| `ProcessSection` | Problem→Solution blocks with animations |
| `ResearchSection` | Centered narrative with Lottie visual |
| `CaseStudiesSection` | Alternating full-width project blocks |
| `FAQSection` | Two-column accordion |
| `StudioCTA` | Minimal centered close |

### Animations

Lottie-style animations needed:
1. **Hero:** Abstract nodes connecting, flowing
2. **Process - Problem:** Scattered, disconnected nodes flickering
3. **Process - Solution:** Same nodes, now connected and stable
4. **Research:** Flow from pulsing research nodes to stable production
5. **CTA:** All nodes connected, gently pulsing

Consider using:
- Lottie files (lottiefiles.com)
- Framer Motion for simpler animations
- Custom canvas if matching existing hero style

### Navigation Update

Add "STUDIO" link to menu in `app/page.tsx`:
```tsx
<Link href="/studio" className="block text-lg font-light hover:text-gray-600 transition-colors">
  STUDIO
</Link>
```

### Styling Notes

- Maintain dark theme (#212121)
- Generous padding: `py-24` to `py-32` between sections
- Typography: `font-light` for headlines, slightly heavier for body
- Muted text: `text-gray-400` for secondary content
- Small labels: `text-xs tracking-widest uppercase text-gray-500`
- Transitions: `transition-all duration-300` standard

## References

- General Intelligence Company (generalintelligencecompany.com) — layout patterns, high-agency tone, Lottie animations, problem→solution framing
- Cortivo.ai — "AI studio" positioning concept
- Existing Genesis site — dark theme, glassmorphism elements, typography
