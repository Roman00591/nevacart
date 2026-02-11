/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  poweredByHeader: false,
}

export default nextConfig
