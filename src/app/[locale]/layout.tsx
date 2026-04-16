import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Masthead from "@/components/Masthead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getLocale from "@/locales";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
  title: "Ertugrul Sagdic — Field Notes",
  description: "Field Notes — the engineering journal of Ertugrul Sagdic.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const translations = await getLocale(params.locale);
  return (
    <html lang={params.locale} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body
        className="grain flex h-full flex-col bg-paper dark:bg-graphite text-ink dark:text-cream antialiased print:bg-white print:dark:bg-inherit"
        suppressHydrationWarning={true}
      >
        <Providers>
          <div className="relative z-10 flex flex-col min-h-lvh">
            <Masthead locale={params.locale} />
            <Navbar locale={params.locale} translations={translations.navbar} />
            <main className="flex-1">{children}</main>
            <Footer translations={translations.footer} />
            <SpeedInsights />
            <Analytics />
          </div>
        </Providers>
      </body>
    </html>
  );
}
