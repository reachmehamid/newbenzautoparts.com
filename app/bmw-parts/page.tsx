import type { Metadata } from "next";
import { PartsPage } from "@/components/PartsPage";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: { absolute: "BMW Parts | New Benz Auto Parts" },
=======
  title: "BMW Parts | New Benz Auto Parts",
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
  description: "Browse BMW brake pads, brake discs, oil filters, air filters, and suspension parts with WhatsApp inquiry links.",
  openGraph: { title: "BMW Parts | New Benz Auto Parts", description: "Display-only BMW parts catalog with indicative fitment details." },
};

export default function BmwPartsPage() {
  return <PartsPage brand="BMW" />;
}
