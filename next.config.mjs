/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '.',
  },
  async rewrites() {
    return [
      {
        source: '/btrc-tariff',
        destination: '/files/BTRC_Tariff_Delta.pdf',
      },
    ]
  },
}

export default nextConfig
