import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Proxy PostHog via /ingest pra escapar de adblock e manter same-origin.
  // Padrão usado nas demais landings da Kaleidos (sequencia-viral etc.).
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
  // PostHog faz requests com path interno; evita trailing-slash redirect.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
