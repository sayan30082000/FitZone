/** @type {import('next').NextConfig} */
const nextConfig = {
  // A one-page funnel with no server logic: export plain HTML/CSS/JS to `out/`
  // so Netlify serves it as a static site.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
