/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  // Prevent resend + @react-email/render from being bundled into
  // the client/SSR page bundle — they are only needed in API routes.
  serverExternalPackages: ['resend', '@react-email/render', '@react-email/components'],
};

export default nextConfig;
