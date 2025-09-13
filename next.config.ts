import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    
    turbo: false, // 👈 disable Turbopack
  },
};

export default nextConfig;