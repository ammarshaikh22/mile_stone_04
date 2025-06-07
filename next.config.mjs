/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
  },

  images: {
    domains: ['cdn.sanity.io','res.cloudinary.com'],
  }
};

export default nextConfig;
