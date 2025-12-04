import path from 'path';
import { withPrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';

/** @type {import('next').NextConfig} */
const baseConfig = {
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

export default withPrismaPlugin(baseConfig);
