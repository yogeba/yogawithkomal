/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      {
        source: "/postpartum-yoga-online",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
