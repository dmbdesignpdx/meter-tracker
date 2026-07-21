import type { NextConfig } from "next";

import { Url } from "@/data/meta";

const nextConfig: NextConfig = {
  reactCompiler: true,
  trailingSlash: false,
  typedRoutes: true,
  experimental: {
    inlineCss: true,
  },
  allowedDevOrigins: [Url.NETWORK],
};

export default nextConfig;
