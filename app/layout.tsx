import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://augovia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Augovia | Strategy & Advisory for Pharma & Biotech",
  description:
    "Augovia provides senior strategic advisory and hands-on execution support to Pharma and Biotech leaders across strategy, commercial excellence, transformation and interim leadership.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Augovia | Strategy & Advisory for Pharma & Biotech",
    description:
      "Senior strategic advisory and hands-on execution support for Pharma and Biotech leaders.",
    url: siteUrl,
    siteName: "Augovia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Augovia | Strategy & Advisory for Pharma & Biotech",
    description:
      "Senior strategic advisory and hands-on execution support for Pharma and Biotech leaders.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
