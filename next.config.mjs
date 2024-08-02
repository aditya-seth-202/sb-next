/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['sourcebae.s3.amazonaws.com'],
        loader: "default",
        unoptimized: true
      }
};

export default nextConfig;
