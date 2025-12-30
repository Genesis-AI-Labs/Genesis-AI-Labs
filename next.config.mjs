/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath removed for custom domain - site is served at root
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
}

export default nextConfig