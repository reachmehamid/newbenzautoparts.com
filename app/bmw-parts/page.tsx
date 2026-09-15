import type { Metadata } from "next";
import { PartsPage } from "@/components/PartsPage";

export const metadata: Metadata = {
  title: { absolute: "BMW Parts | New Benz Auto Parts" },
  description: "Browse BMW brake pads, brake discs, oil filters, air filters, and suspension parts with WhatsApp inquiry links.",
  openGraph: { title: "BMW Parts | New Benz Auto Parts", description: "Display-only BMW parts catalog with indicative fitment details." },
};

export default function BmwPartsPage() {
  return <PartsPage brand="BMW" />;
}
