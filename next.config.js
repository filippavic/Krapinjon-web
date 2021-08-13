module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
    deviceSizes: [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  i18n: {
    locales: ["hr"],
    defaultLocale: "hr",
  },
};
