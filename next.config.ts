/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['randomuser.me'], // Allow external images from randomuser.me
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8009/api/:path*',
      },
    ];
  },
};

export default nextConfig;