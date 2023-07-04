/** @type {import('next').NextConfig} */
const nextConfig = {
  //add hostname to images
  images: {
    domains: [
      "localhost",
      "avatars.dicebear.com",
      "s3.ap-south-1.amazonaws.com",
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
