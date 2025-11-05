import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/painel',
        permanent: true, // 301 redirect
      },
    ]
  },
}
