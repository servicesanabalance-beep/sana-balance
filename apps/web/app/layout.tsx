import type { Metadata } from "next";
import { Providers } from "@/lib/providers";
import { CookieConsent } from "@/components/cookie-consent";
import { ScrollReset } from "@/components/scroll-reset";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sana Balance - Praxis für ganzheitliches Wohlbefinden",
  description: "Gönnen Sie sich eine Auszeit vom Alltag und erleben Sie wohltuende Massagen und ganzheitliche Behandlungen für Ihr körperliches und seelisches Wohlbefinden.",
  icons: {
    icon: '/logo.sana.balance.svg',
    apple: '/logo.sana.balance.svg',
    shortcut: '/logo.sana.balance.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <ScrollReset />
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  );
}
