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
