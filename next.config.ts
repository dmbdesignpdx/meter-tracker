import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: false,
  typedRoutes: true,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
