/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },
  images: {
    domains: ['res.cloudinary.com', 'images.pexels.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
