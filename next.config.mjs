/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Note: redirects don't work with static export
  // Documented here for future server-side deployment
  // async redirects() {
  //   return [
  //     { source: '/zero_morphism', destination: '/blog', permanent: true },
  //     { source: '/zero_morphism/announcing-genesis-ai-labs', destination: '/blog/announcing-genesis-ai-labs', permanent: true },
  //     { source: '/zero_morphism/how-to-automate-ai-research', destination: '/blog/how-to-automate-ai-research', permanent: true },
  //     { source: '/zero_morphism/geometric-deep-learning-future', destination: '/blog/geometric-deep-learning-future', permanent: true },
  //     { source: '/zero_morphism/reinforcement-learning-environments', destination: '/blog/reinforcement-learning-environments', permanent: true },
  //     { source: '/zero_morphism/physics-informed-ai', destination: '/blog/physics-informed-ai', permanent: true },
  //     { source: '/zero_morphism/generative-models-research', destination: '/blog/generative-models-research', permanent: true },
  //   ]
  // },
}

export default nextConfig
