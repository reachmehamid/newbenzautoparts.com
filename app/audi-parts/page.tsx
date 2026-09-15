import type { Metadata } from "next";
import { PartsPage } from "@/components/PartsPage";

export const metadata: Metadata = {
  title: { absolute: "Audi Parts | New Benz Auto Parts" },
  description: "Browse Audi brake pads, brake discs, oil filters, air filters, and suspension parts with WhatsApp inquiry links.",
  openGraph: { title: "Audi Parts | New Benz Auto Parts", description: "Display-only Audi parts catalog with indicative fitment details." },
};

export default function AudiPartsPage() {
  return <PartsPage brand="Audi" />;
}
