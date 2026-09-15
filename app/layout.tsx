import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newbenzautoparts.com"),
  title: {
    default: "New Benz Auto Parts | Mercedes-Benz, BMW & Audi Parts",
    template: "%s | New Benz Auto Parts",
  },
  description: "Display-only catalog for Mercedes-Benz, BMW, and Audi automotive replacement parts with WhatsApp inquiries for fitment and availability.",
  openGraph: {
    title: "New Benz Auto Parts | Mercedes-Benz, BMW & Audi Parts",
    description: "Browse Mercedes-Benz, BMW, and Audi parts categories and inquire through WhatsApp.",
    url: "https://newbenzautoparts.com",
    siteName: "New Benz Auto Parts",
    images: [{ url: "/images/og.svg", width: 1200, height: 630, alt: "New Benz Auto Parts catalog" }],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
