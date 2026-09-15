"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/mercedes-parts", label: "Mercedes Parts" },
  { href: "/bmw-parts", label: "BMW Parts" },
  { href: "/audi-parts", label: "Audi Parts" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-zinc-800 text-lg font-black shadow-lg shadow-red-950/30">
            NB
          </span>
          <span>
            <span className="block text-base font-black leading-tight tracking-tight">New Benz</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">Auto Parts</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active ? "bg-white text-zinc-950" : "text-zinc-300 hover:bg-white/10 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <WhatsAppButton href={getGeneralWhatsAppUrl()} className="px-4 py-2" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-zinc-950 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${pathname === item.href ? "bg-white text-zinc-950" : "text-zinc-300 hover:bg-white/10"}`}
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
