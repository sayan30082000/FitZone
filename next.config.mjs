/** @type {import('next').NextConfig} */
const nextConfig = {
  // A one-page funnel with no server logic: export plain HTML/CSS/JS to `out/`
  // so Netlify serves it as a static site.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      // Only our own CSS. Without the condition the loader also rewrites the
      // CSS that next/font generates, which breaks the font URLs on Netlify.
      "*.css": {
        condition: { not: "foreign" },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
