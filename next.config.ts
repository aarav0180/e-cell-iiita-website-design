import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, "src/visual-edits/component-tagger-loader.js");

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER],
      },
    },
  },
  eslint: {
    // 🚫 Skip ESLint checks during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // 🚫 Skip TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
