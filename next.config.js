/** @type {import('next').NextConfig} */
const nextConfig = {
  //add hostname to images
  images: {
    domains: ["localhost", "avatars.dicebear.com"],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
