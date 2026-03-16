import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/admin-panel326',
  reactCompiler: true,
  transpilePackages: ['@sana-balance/ui', '@sana-balance/core'],
};

export default nextConfig;
