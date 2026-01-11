"use client"

import { Footer } from "@/components/footer"
import {
  StudioHeader,
  StudioHero,
  ServicesSection,
  ProcessSection,
  ResearchSection,
  CaseStudiesSection,
  TestimonialsSection,
  FAQSection,
  StudioCTA,
} from "@/components/studio"

export default function StudioPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      <StudioHeader />
      <main className="relative">
        <StudioHero />
        <ServicesSection />
        <ProcessSection />
        <ResearchSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <StudioCTA />
      </main>
      <Footer />
    </div>
  )
}
