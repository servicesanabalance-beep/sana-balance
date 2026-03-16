import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['@sana-balance/ui', '@sana-balance/core'],
};

export default nextConfig;
