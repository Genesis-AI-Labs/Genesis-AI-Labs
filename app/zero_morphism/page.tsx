import { ZeroMorphismLayout } from "@/components/zero-morphism-layout";

export default function ZeroMorphismPage() {
  return (
    <ZeroMorphismLayout>
      {/* Main Content */}
      <div className="space-y-6">
        <p className="text-base leading-relaxed text-black">
          We are a software company that builds RL environments and sells them to the leading AI labs. Our 
          RL environments simulate real-world work scenarios. Models are dropped into these environments 
          and tasked with completing objectives, such as building a new design feature, refactoring a codebase, 
          or debugging an application. Their work is graded based on how successfully they perform these 
          tasks. These grades serve as reward signals during training, teaching models how to complete real-world tasks effectively.
        </p>

        <p className="text-base leading-relaxed text-black">
          While we build RL environments, we don't train models directly. Instead, AI labs use our RL 
          environments for training. We don't plan to release any consumer-facing products in the foreseeable 
          future. Our current focus is automating software engineering, but our long-term goal is to enable the 
          automation of all valuable work in the economy. Our selection of essays below helps explain our 
          vision and worldview:
        </p>
      </div>

      {/* Essays Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-normal mb-6">Essays</h2>
        <ul className="space-y-3">
          <li>
            <a href="/zero_morphism/announcing-genesis-ai-labs" className="text-base text-black underline hover:no-underline">
              Announcing Genesis AI Labs, Inc.
            </a>
          </li>
          <li>
            <a href="/zero_morphism/how-to-automate-ai-research" className="text-base text-black underline hover:no-underline">
              How to fully automate AI research
            </a>
          </li>
          <li>
            <a href="/zero_morphism/geometric-deep-learning-future" className="text-base text-black underline hover:no-underline">
              The upcoming breakthrough moment for Geometric Deep Learning
            </a>
          </li>
          <li>
            <a href="/zero_morphism/reinforcement-learning-environments" className="text-base text-black underline hover:no-underline">
              Why sophisticated RL environments are the bottleneck to AI progress
            </a>
          </li>
          <li>
            <a href="/zero_morphism/physics-informed-ai" className="text-base text-black underline hover:no-underline">
              Physics-informed AI isn't the bottleneck to scientific progress
            </a>
          </li>
          <li>
            <a href="/zero_morphism/generative-models-research" className="text-base text-black underline hover:no-underline">
              Advanced generative models will accelerate research
            </a>
          </li>
        </ul>
      </section>
    </ZeroMorphismLayout>
  )
}