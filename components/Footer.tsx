<<<<<<< HEAD
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
=======
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { brandRoutes } from "@/data/products";
import { getGeneralWhatsAppUrl, whatsappDisplay } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-zinc-800 font-black">NB</span>
            <div>
              <p className="font-black">New Benz Auto Parts</p>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">European Parts Catalog</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-zinc-400">
            Display-only catalog for Mercedes-Benz, BMW, and Audi replacement parts. Browse categories and contact us to confirm availability, price, and fitment.
          </p>
          <p className="mt-4 text-sm font-semibold text-zinc-300">Display-only catalog — Contact us for availability and fitment.</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Quick Links</h3>
          <div className="grid gap-3 text-sm text-zinc-300">
            <Link href="/">Home</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Inquiry</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">Brand Links</h3>
          <div className="grid gap-3 text-sm text-zinc-300">
            <Link href={brandRoutes["Mercedes-Benz"]}>Mercedes-Benz Parts</Link>
            <Link href={brandRoutes.BMW}>BMW Parts</Link>
            <Link href={brandRoutes.Audi}>Audi Parts</Link>
          </div>
          <div className="mt-6 grid gap-3 text-sm text-zinc-300">
            <Link href="mailto:info@newbenzautoparts.com" className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@newbenzautoparts.com</Link>
            <Link href={getGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"><Phone className="h-4 w-4" /> {whatsappDisplay}</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-zinc-500">
        <p>Copyright © {new Date().getFullYear()} New Benz Auto Parts. All rights reserved.</p>
        <div className="mt-4"><WhatsAppButton href={getGeneralWhatsAppUrl()} variant="outline" className="border-zinc-700 text-zinc-200 hover:border-red-700" /></div>
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
      </div>
    </footer>
  );
}
<<<<<<< HEAD

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-[#A88A5A]">{title}</h3>
      <div className="grid gap-3 text-sm font-semibold text-[#D8D2C7] [&_a]:transition [&_a:hover]:text-white">{children}</div>
    </div>
  );
}
=======
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
