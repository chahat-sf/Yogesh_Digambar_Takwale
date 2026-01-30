// next.config.ts
import type { NextConfig } from "next";

// If you really need it (monorepo/multiple lockfiles):
const nextConfig = {
  // point this at your repo/workspace root
    output: "standalone",
} satisfies NextConfig;

export default nextConfig;
