import type { NextConfig } from "next";

const legacySolutionAnchors: Record<string, string> = {
  "strategize-launch": "strategize",
  "build-awareness": "awareness",
  "thought-leader": "thought-leadership",
  perform: "perform",
  network: "network",
  "generate-business": "generate",
};

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    // Pinned so a stray lockfile in a parent folder (for example the Windows home directory) is ignored.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
  },
  async redirects() {
    return [
      // Live-site "Learn More" links point at these URLs, which return 404 today.
      ...Object.entries(legacySolutionAnchors).map(([slug, anchor]) => ({
        source: `/solutions/${slug}`,
        destination: `/solutions#${anchor}`,
        permanent: false,
      })),
      { source: "/services", destination: "/solutions", permanent: false },
      { source: "/blog/:slug", destination: "/insights/:slug", permanent: false },
      { source: "/blog", destination: "/insights", permanent: false },
    ];
  },
};

export default nextConfig;
