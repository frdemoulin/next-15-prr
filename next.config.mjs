/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
    staleTimes: {
      dynamic: 30,
    },
  },
};

export default nextConfig;
