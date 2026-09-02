import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      { source: '/pricing', destination: '/estimate', permanent: true },
      { source: '/become-a-driver', destination: '/drive', permanent: true },
      { source: '/story', destination: '/about', permanent: true },
      { source: '/pledge', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
