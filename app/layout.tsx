import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newbenzautoparts.com"),
  title: {
    default: "New Benz Auto Parts — Mercedes-Benz, BMW & Audi Parts",
    template: "%s | New Benz Auto Parts",
  },
  description: "Browse OEM and aftermarket parts for Mercedes-Benz, BMW, and Audi. Check availability and fitment via WhatsApp.",
  openGraph: {
    title: "New Benz Auto Parts — Mercedes-Benz, BMW & Audi Parts",
    description: "Browse Mercedes-Benz, BMW, and Audi parts. Inquire via WhatsApp.",
    url: "https://newbenzautoparts.com",
    siteName: "New Benz Auto Parts",
    images: [{ url: "/images/og.svg", width: 1200, height: 630, alt: "New Benz Auto Parts" }],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
