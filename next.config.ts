import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.amaressentialoils.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ichwane.com',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
