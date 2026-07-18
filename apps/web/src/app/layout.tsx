import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";

import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const siteTitle = `${siteConfig.name} — Poemas, textos e reflexões`;
const shareImage = "/opengraph-image";
const browserIcon = "/site/logos/logo.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteTitle,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,
  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.fullName,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.fullName,
  publisher: siteConfig.name,

  icons: {
    icon: [
      {
        url: browserIcon,
        type: "image/png",
      },
    ],
    shortcut: browserIcon,
    apple: [
      {
        url: browserIcon,
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    title: siteTitle,
    description: siteConfig.description,
    url: siteConfig.url,

    images: [
      {
        url: shareImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Poemas, textos e reflexões`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteConfig.description,

    images: [
      {
        url: shareImage,
        alt: `${siteConfig.name} — Poemas, textos e reflexões`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
