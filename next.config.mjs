/** @type {import('next').NextConfig} */
const nextConfig = {
  // A one-page funnel with no server logic: export plain HTML/CSS/JS to `out/`
  // so Netlify serves it as a static site.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      // Only our own CSS; the font stylesheets in node_modules don't need Tailwind.
      "*.css": {
        condition: { not: "foreign" },
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
