import { Barlow, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
