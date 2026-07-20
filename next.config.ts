import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/exect.io",
  assetPrefix: "/exect.io",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
