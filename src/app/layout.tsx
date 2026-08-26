import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Campus Virtual | CADCC",
  description: "Campus Virtual del Club Atlético Defensores Central Córdoba",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cadcc-bg">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
