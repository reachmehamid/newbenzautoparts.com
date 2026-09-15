import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { brandRoutes } from "@/data/products";
import { getGeneralWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#151716] text-[#F5F3EE]">
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="font-display text-4xl font-semibold tracking-[-0.03em]">New Benz Auto Parts</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#BDB8AE]">
            Display-only catalog for Mercedes-Benz, BMW, and Audi replacement parts. Browse categories and contact us to confirm availability, price, and fitment.
          </p>
          <p className="mt-6 border-l border-[#A88A5A] pl-4 text-sm font-semibold text-[#E8E2D6]">Display-only catalog. Contact us for availability and fitment.</p>
        </div>

        <FooterColumn title="Quick Links">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Inquiry</Link>
        </FooterColumn>

        <FooterColumn title="Brands">
          <Link href={brandRoutes["Mercedes-Benz"]}>Mercedes-Benz Parts</Link>
          <Link href={brandRoutes.BMW}>BMW Parts</Link>
          <Link href={brandRoutes.Audi}>Audi Parts</Link>
        </FooterColumn>

        <FooterColumn title="Contact">
          <Link href="mailto:info@newbenzautoparts.com" className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#A88A5A]" /> info@newbenzautoparts.com</Link>
          <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#A88A5A]" /> {whatsappDisplay}</Link>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-xs font-semibold tracking-wide text-[#8B867C]">
        Copyright © {new Date().getFullYear()} New Benz Auto Parts. All rights reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-[#A88A5A]">{title}</h3>
      <div className="grid gap-3 text-sm font-semibold text-[#D8D2C7] [&_a]:transition [&_a:hover]:text-white">{children}</div>
    </div>
  );
}
