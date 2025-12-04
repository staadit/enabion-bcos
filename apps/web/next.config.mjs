import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@enabion/core'],
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    typedRoutes: true,
    outputFileTracingIncludes: {
      '/api/health': [path.join(process.cwd(), '../../node_modules/.prisma')],
      '/api/(.*)': [path.join(process.cwd(), '../../node_modules/.prisma')],
    },
  },
};

export default nextConfig;
