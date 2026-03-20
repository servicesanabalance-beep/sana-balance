import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import { Providers } from "@/lib/providers";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollReset } from "@/components/scroll-reset";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-sans',
});

const serif = Noto_Serif({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sanabalance.ch'),
  title: {
    default: "SanaBalance Massagen Grabs – Massage Grabs, St. Gallen",
    template: "%s | SanaBalance Massagen Grabs",
  },
  description: "SanaBalance in Grabs (St. Gallen): Professionelle Massagen – Klassische Massage, Wellness, Dorn & Breuss, Sportmassage und Mobile Massage bei Ihnen zu Hause. Jetzt Termin buchen!",
  keywords: [
    "Massage Grabs",
    "Masseur Grabs",
    "Massage St. Gallen",
    "Massage Werdenberg",
    "Klassische Massage",
    "Wellness Massage",
    "Dorn Breuss Massage",
    "Sportmassage",
    "Mobile Massage",
    "Hausmassage",
    "SanaBalance",
    "Thomas Grobler",
    "Massage Termin",
    "Massage Vorarlberg",
    "Massage Liechtenstein",
  ],
  authors: [{ name: 'Thomas Grobler', url: 'https://www.sanabalance.ch' }],
  creator: 'Thomas Grobler',
  alternates: {
    canonical: 'https://www.sanabalance.ch',
  },
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
    title: "SanaBalance Massagen Grabs – Massage Grabs, St. Gallen",
    description: "Professionelle Massagen in Grabs (St. Gallen): Klassische Massage, Wellness, Dorn & Breuss, Sportmassage und Mobile Massage. Jetzt Termin buchen!",
    url: 'https://www.sanabalance.ch',
    siteName: 'SanaBalance Massagen',
    images: [
      {
        url: '/sana_massage.png',
        width: 1200,
        height: 630,
        alt: 'SanaBalance Massagen Grabs',
      }
    ],
    locale: 'de_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SanaBalance Massagen Grabs – Massage Grabs, St. Gallen",
    description: "Professionelle Massagen in Grabs (St. Gallen). Klassische Massage, Wellness, Dorn & Breuss, Sportmassage, Mobile Massage. Jetzt buchen!",
    images: ['/sana_massage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <body className={`${inter.variable} ${serif.variable} font-sans`}>
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <ScrollReset />
          <Providers>{children}</Providers>
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
