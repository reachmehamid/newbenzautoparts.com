import type { Metadata } from "next";
import { PartsPage } from "@/components/PartsPage";

export const metadata: Metadata = {
  title: { absolute: "Mercedes-Benz Parts | New Benz Auto Parts" },
  description: "Browse Mercedes-Benz brake pads, brake discs, oil filters, air filters, and suspension parts with WhatsApp inquiry links.",
  openGraph: { title: "Mercedes-Benz Parts | New Benz Auto Parts", description: "Display-only Mercedes-Benz parts catalog with indicative fitment details." },
};

export default function MercedesPartsPage() {
  return <PartsPage brand="Mercedes-Benz" />;
}
