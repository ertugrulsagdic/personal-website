import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({ subsets: ["latin"] });

// const inter = Inter({ subsets: ["latin"] });

// usage ${orbitron.className} in className

export const metadata: Metadata = {
  title: "Ertugrul Sagdic",
  description: "Personal website of Ertugrul Sagdic, software engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex h-full flex-col bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-300 antialiased`}
      >

        <Providers>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative sm:px-8">
              <Navbar />
              <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html >
  );
}
