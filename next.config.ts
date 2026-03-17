import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output as static export where possible
  // Remove this line if you add server-side features (API routes, etc.)
  // output: "export",

  // Strict mode for catching bugs early
  reactStrictMode: true,
};

export default nextConfig;
