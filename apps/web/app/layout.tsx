import type { Metadata } from "next";
import { Providers } from "@/lib/providers";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollReset } from "@/components/scroll-reset";
import "./globals.css";

export const metadata: Metadata = {
  title: "SanaBalance - Praxis für ganzheitliches Wohlbefinden",
  description: "Gönnen Sie sich eine Auszeit vom Alltag und erleben Sie wohltuende Massagen und ganzheitliche Behandlungen für Ihr körperliches und seelisches Wohlbefinden.",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: '/logo.sana.balance.svg',
    apple: '/logo.sana.balance.svg',
    shortcut: '/logo.sana.balance.svg',
  },
  openGraph: {
    title: "SanaBalance - Praxis für ganzheitliches Wohlbefinden",
    description: "Gönnen Sie sich eine Auszeit vom Alltag und erleben Sie wohltuende Massagen und ganzheitliche Behandlungen für Ihr körperliches und seelisches Wohlbefinden.",
    images: [
      {
        url: '/favicon.png',
        width: 1200,
        height: 630,
        alt: 'SanaBalance Logo',
      }
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SanaBalance - Praxis für ganzheitliches Wohlbefinden",
    description: "Gönnen Sie sich eine Auszeit vom Alltag und erleben Sie wohltuende Massagen und ganzheitliche Behandlungen für Ihr körperliches und seelisches Wohlbefinden.",
    images: ['/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <ScrollReset />
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
