"use client"

import { Footer } from "@/components/footer"
import { StudioHero } from "@/components/studio/studio-hero"
import { ServicesSection } from "@/components/studio/services-section"
import { ProcessSection } from "@/components/studio/process-section"
import { ResearchSection } from "@/components/studio/research-section"
import { CaseStudiesSection } from "@/components/studio/case-studies-section"
import { FAQSection } from "@/components/studio/faq-section"
import { StudioCTA } from "@/components/studio/studio-cta"

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#212121' }}>
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
