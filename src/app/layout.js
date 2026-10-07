// Fonts are self-hosted from npm (@fontsource) instead of next/font/google:
// next/font's Google fetch fails in Netlify's build, and this way the build
// needs no network access at all. Latin subset only, just the weights we use.
import "@fontsource/barlow/latin-400.css";
import "@fontsource/barlow/latin-600.css";
import "@fontsource/barlow/latin-700.css";
import "@fontsource/barlow/latin-800.css";
import "@fontsource/barlow/latin-900.css";
import "@fontsource/barlow/latin-900-italic.css";
import "@fontsource/barlow-condensed/latin-700.css";
import "@fontsource/barlow-condensed/latin-800.css";
import "@fontsource/barlow-condensed/latin-900.css";
import "@fontsource-variable/inter";
import "./globals.css";

export const metadata = {
  title: "FitZone Studio — Transform Your Body, Transform Your Life",
  description:
    "Premium personal training and group fitness classes. HIIT, yoga, spin, boxing, nutrition coaching and a recovery suite. Start your free week today.",
  openGraph: {
    title: "FitZone Studio",
    description: "Premium personal training and group fitness classes. Your first week is free.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0d0f14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
