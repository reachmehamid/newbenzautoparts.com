import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { brandRoutes } from "@/data/products";
import { getGeneralWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container-site mx-auto grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-lg font-bold">New Benz Auto Parts</p>
          <p className="mt-3 text-sm leading-6 text-white/50">
            OEM and aftermarket parts for Mercedes-Benz, BMW, and Audi. Browse, inquire, and confirm fitment.
          </p>
        </div>

        <FooterCol title="Shop">
          <Link href={brandRoutes["Mercedes-Benz"]}>Mercedes-Benz</Link>
          <Link href={brandRoutes.BMW}>BMW</Link>
          <Link href={brandRoutes.Audi}>Audi</Link>
        </FooterCol>

        <FooterCol title="Help">
          <Link href="/contact">Contact Us</Link>
          <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Inquiry</Link>
          <Link href="mailto:info@newbenzautoparts.com">Email Support</Link>
        </FooterCol>

        <FooterCol title="Contact">
          <span className="flex items-center gap-2 text-white/70">
            <Phone className="h-3.5 w-3.5 text-[#B8943E]" /> {whatsappDisplay}
          </span>
          <span className="flex items-center gap-2 text-white/70">
            <Mail className="h-3.5 w-3.5 text-[#B8943E]" /> info@newbenzautoparts.com
          </span>
        </FooterCol>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-[11px] font-medium text-white/30">
        © {new Date().getFullYear()} New Benz Auto Parts. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{title}</h4>
      <div className="grid gap-2.5 text-sm text-white/70 [&_a]:transition [&_a:hover]:text-white">{children}</div>
    </div>
  );
}
