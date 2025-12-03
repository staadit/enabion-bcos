/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@enabion/core'],
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
