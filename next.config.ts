import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Impede que o Next.js ignore erros de lint durante builds
    ignoreDuringBuilds: false
  }
}

export default nextConfig
