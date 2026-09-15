"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/mercedes-parts", label: "Mercedes" },
  { href: "/bmw-parts", label: "BMW" },
  { href: "/audi-parts", label: "Audi" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDD9D0]/80 bg-[#F5F3EE]/95 backdrop-blur-xl">
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-3" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center border border-[#A88A5A]/55 bg-[#202321] text-xs font-black tracking-tight text-[#F5F3EE]">NB</span>
          <span className="leading-none">
            <span className="block text-base font-bold tracking-tight text-[#202321]">New Benz</span>
            <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[#73766F]">Auto Parts</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`text-[13px] font-semibold transition ${active ? "text-[#A88A5A]" : "text-[#202321] hover:text-[#A88A5A]"}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton href={getGeneralWhatsAppUrl()} className="px-4 py-2 text-xs" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-9 w-9 place-items-center border border-[#DDD9D0] text-[#202321] lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[#DDD9D0] bg-[#F5F3EE] px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm font-semibold ${pathname === item.href ? "bg-white text-[#A88A5A]" : "text-[#202321]"}`}
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton href={getGeneralWhatsAppUrl()} className="mt-2 w-full" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
