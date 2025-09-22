import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Add security headers
  async headers() {
    return [
      {
        source: "/(.*)", // all routes
        headers: [
          { key: "X-Frame-Options", value: "DENY" }, // prevent clickjacking
          { key: "X-Content-Type-Options", value: "nosniff" }, // prevent MIME type sniffing
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }, // control referrer
          { key: "Permissions-Policy", value: "geolocation=(), microphone=()" }, // limit access to browser features
          { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self'; object-src 'none'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;" }, // basic CSP
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }, // force HTTPS
        ],
      },
    ];
  },
};

export default nextConfig;
