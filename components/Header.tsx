"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/mercedes-parts", label: "Mercedes-Benz" },
  { href: "/bmw-parts", label: "BMW" },
  { href: "/audi-parts", label: "Audi" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-[#111111] px-4 py-2 text-center text-[11px] font-medium tracking-wide text-white/80">
        Mercedes-Benz · BMW · Audi — Inquire via WhatsApp for availability &amp; fitment
      </div>

      <div className="border-b border-[#E5E5E3]">
        <nav className="container-site mx-auto flex items-center justify-between py-4" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111111] text-[11px] font-bold text-white">NB</span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[15px] font-bold text-[#1A1A1A]">New Benz</span>
              <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">Auto Parts</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                    active ? "bg-[#111111] text-white" : "text-[#1A1A1A] hover:bg-[#F5F5F3]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-[#B8943E] px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#A07E30] sm:inline-flex"
            >
              Chat on WhatsApp
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E3] text-[#1A1A1A] transition hover:bg-[#F5F5F3] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="border-b border-[#E5E5E3] bg-white px-4 py-4 lg:hidden">
          <div className="container-site mx-auto grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  pathname === item.href ? "bg-[#F5F5F3] text-[#B8943E]" : "text-[#1A1A1A] hover:bg-[#F5F5F3]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#B8943E] px-5 py-3 text-center text-sm font-bold text-white"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
