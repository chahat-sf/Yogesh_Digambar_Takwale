// next.config.ts
import type { NextConfig } from "next";
import path from "path";

// If you really need it (monorepo/multiple lockfiles):
const nextConfig = {
  // point this at your repo/workspace root
  outputFileTracingRoot: path.join(__dirname, ".."),
} satisfies NextConfig;

export default nextConfig;
