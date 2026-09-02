import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      { source: '/pricing', destination: '/apply', permanent: true },
      { source: '/become-a-driver', destination: '/drive', permanent: true },
    ];
  },
};

export default nextConfig;
