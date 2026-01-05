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
