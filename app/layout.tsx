import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
