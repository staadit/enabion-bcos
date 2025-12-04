import path from 'path';
import { createRequire } from 'module';
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';

const require = createRequire(import.meta.url);
const prismaClientDir = path.dirname(require.resolve('@prisma/client'));
const prismaEnginePath = path.join(prismaClientDir, '.prisma/client');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@enabion/core'],
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    typedRoutes: true,
    outputFileTracingIncludes: {
      '/api/health': [prismaEnginePath],
      '/api/(.*)': [prismaEnginePath],
    },
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
};

export default nextConfig;
