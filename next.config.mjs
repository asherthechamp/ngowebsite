/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
  i18n: {
    locales: ["en-US", "am-ET"],
    defaultLocale: "en-US",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en/home",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/en/home",
        permanent: true,
      },
    ];
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
};

export default nextConfig;
