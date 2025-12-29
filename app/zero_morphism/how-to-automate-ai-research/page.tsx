import Link from "next/link"

export default function HowToAutomateAIResearchPage() {
  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl font-normal mb-8">Genesis AI Labs, Inc.</h1>
      </header>

      {/* Essay Content */}
      <main className="space-y-8">
        <h1 className="text-3xl font-normal mb-8">How to fully automate AI research</h1>
        
        <div className="mb-8">
          <p className="text-base text-black mb-2">Siddhant Saxena, Research Team, AI Agents Pod</p>
          <p className="text-base text-black">March 20, 2024</p>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-black">
            With every passing month, AI models get better at most tasks that an AI researcher does in their 
            work. Yet for all these gains, today's models only assist human researchers, falling far short of 
            automating research completely. What will it take to build AI systems that can fully replace human 
            researchers, and why aren't we there yet?
          </p>

          <p className="text-base leading-relaxed text-black">
            Current AI systems present something of a paradox. Their performance on narrow research tasks already 
            exceeds that of most human researchers. However, any researcher who has worked with them quickly 
            notices the need to keep AI agents on a very short leash. Despite good benchmark scores and impressive 
            demos, there are clearly core capabilities that human researchers have that our current systems are missing.
          </p>

          <p className="text-base leading-relaxed text-black">
            We've <a href="#" className="underline hover:no-underline">previously highlighted</a> some of these shortcomings: 
            lack of reliability in complex reasoning, poor long-term planning capabilities, and overly narrow focus 
            on specific domains, among others. But why are these capabilities missing in AI systems to begin with? 
            We train them on more compute and data than humans have access to in their entire careers, and we can 
            run millions of parallel experiments, and yet it's still not enough.
          </p>

          <p className="text-base leading-relaxed text-black">
            On some level, the answer has to be that our learning algorithms have been and remain <a href="#" className="underline hover:no-underline">much less efficient</a> 
            than the human brain. Deep learning researchers often point to this and say that it's a sign the 
            field needs new paradigms. But we think there's a more specific and actionable explanation.
          </p>

          <p className="text-base leading-relaxed text-black">
            The key insight is that human researchers don't just process information—they actively construct 
            and test hypotheses through experimentation, collaborate with others, and build upon decades of 
            accumulated knowledge in sophisticated ways. Current AI systems, despite their impressive capabilities, 
            lack the integrated reasoning frameworks that allow humans to navigate uncertainty and make breakthrough discoveries.
          </p>

          <p className="text-base leading-relaxed text-black">
            At Genesis AI Labs, we're developing research environments that capture these missing elements. 
            Our approach combines <a href="#" className="underline hover:no-underline">geometric deep learning</a> for 
            understanding complex relationships, reinforcement learning for long-term planning, and generative 
            modeling for creative hypothesis generation. These aren't separate tools but integrated components 
            of a unified research framework.
          </p>

          <p className="text-base leading-relaxed text-black">
            The path forward requires building AI systems that can engage in the full research lifecycle: 
            identifying important problems, designing experiments, interpreting results, and iterating based 
            on findings. This means creating environments where AI agents can learn not just from data, but 
            from the process of discovery itself.
          </p>

          <p className="text-base leading-relaxed text-black">
            We believe this approach will unlock the next phase of AI development, where systems don't just 
            assist researchers but become capable research partners, accelerating the pace of scientific 
            discovery and bringing us closer to artificial general intelligence.
          </p>

          <div className="mt-12">
            <p className="text-base text-black mb-2">Siddhant Saxena, Research Team, AI Agents Pod</p>
            <p className="text-base text-black mb-8">March 20, 2024</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/zero_morphism" className="text-base text-black underline hover:no-underline">
            ← Back
          </Link>
        </div>
      </main>
    </div>
  )
}