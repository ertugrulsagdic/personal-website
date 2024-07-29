import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import getLocale from "@/locales";

const orbitron = Orbitron({ subsets: ["latin"] });

// const inter = Inter({ subsets: ["latin"] });

// usage ${orbitron.className} in className

export const metadata: Metadata = {
  title: "Ertugrul Sagdic",
  description: "Personal website of Ertugrul Sagdic, software engineer",
};

export default async function RootLayout({
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const translations = await getLocale(params.locale);
  return (
    <html lang={params.locale}>
      <body
        className={`flex h-full flex-col bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300 antialiased print:bg-white print:dark:bg-inherit`}
        suppressHydrationWarning={true}
      >

        <Providers>
          <div className="fixed inset-0 flex justify-center sm:px-8 print:hidden">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative flex flex-col sm:px-8 min-h-lvh ">
              <Navbar locale={params.locale} translations={translations.navbar} />
              <main className="flex-1">
                {children}
              </main>
            <Footer translations={translations.footer} />
          </div>
        </Providers>
      </body>
    </html >
  );
}
