import Link from "next/link"

export default function ReinforcementLearningEnvironmentsPage() {
  return (
    <div className="min-h-screen bg-white px-8 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <h1 className="text-4xl font-normal mb-8">Genesis AI Labs, Inc.</h1>
      </header>

      {/* Essay Content */}
      <main className="space-y-8">
        <h1 className="text-3xl font-normal mb-8">Why sophisticated RL environments are the bottleneck to AI progress</h1>
        
        <div className="mb-8">
          <p className="text-base text-black mb-2">AI Agents Pod, Research Team</p>
          <p className="text-base text-black">April 5, 2024</p>
        </div>

        <div className="space-y-6">
          <p className="text-base leading-relaxed text-black">
            The current state of reinforcement learning research is constrained not by algorithmic limitations, 
            but by the poverty of environments in which we train our agents. Most RL research today relies on 
            simplified simulations that bear little resemblance to the complexity of real-world decision-making scenarios.
          </p>

          <p className="text-base leading-relaxed text-black">
            Consider the environments commonly used in RL research: Atari games, simple robotic manipulation 
            tasks, or abstract grid worlds. While these have been valuable for developing foundational algorithms, 
            they fail to capture the multi-scale, multi-agent, and multi-objective nature of real-world problems 
            that we ultimately want AI systems to solve.
          </p>

          <p className="text-base leading-relaxed text-black">
            The gap between laboratory RL and practical applications is enormous. Real-world environments involve 
            <a href="#" className="underline hover:no-underline">partial observability</a>, non-stationary dynamics, 
            sparse and delayed rewards, and the need to coordinate with other agents. Most importantly, they require 
            understanding and reasoning about complex geometric and temporal relationships.
          </p>

          <p className="text-base leading-relaxed text-black">
            At Genesis AI Labs, we're building a new generation of RL environments that bridge this gap. Our 
            environments simulate realistic scenarios where agents must engage in long-term planning, adapt to 
            changing conditions, and collaborate or compete with other intelligent agents. These aren't just 
            more complex versions of existing benchmarks—they're fundamentally different in their structure and requirements.
          </p>

          <p className="text-base leading-relaxed text-black">
            Our approach integrates insights from our Geometric Deep Learning Pod to create environments where 
            spatial and relational reasoning are essential. Agents must understand not just what actions to take, 
            but how their actions affect the geometric structure of their environment and the behavior of other agents.
          </p>

          <p className="text-base leading-relaxed text-black">
            The key innovation is creating environments that are <a href="#" className="underline hover:no-underline">compositionally complex</a> 
            rather than just computationally expensive. Our agents learn to decompose complex tasks into manageable 
            components, transfer knowledge across different scenarios, and develop robust strategies that work 
            across a wide range of conditions.
          </p>

          <p className="text-base leading-relaxed text-black">
            We believe that sophisticated RL environments are the missing piece that will unlock the next level 
            of AI capabilities. By training agents in environments that capture the full complexity of real-world 
            decision-making, we can develop AI systems that are not just powerful in narrow domains, but genuinely 
            intelligent and adaptable.
          </p>

          <div className="mt-12">
            <p className="text-base text-black mb-2">AI Agents Pod, Research Team</p>
            <p className="text-base text-black mb-8">April 5, 2024</p>
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