/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If your GitHub Pages URL is username.github.io/repo-name, uncomment and set basePath:
  // basePath: '/repo-name',
  // trailingSlash: true,
}

export default nextConfig