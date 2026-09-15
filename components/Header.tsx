"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

const navItems = [
  { href: "/", label: "Home" },
<<<<<<< HEAD
  { href: "/mercedes-parts", label: "Mercedes" },
  { href: "/bmw-parts", label: "BMW" },
  { href: "/audi-parts", label: "Audi" },
  { href: "/contact", label: "Contact" },
=======
  { href: "/mercedes-parts", label: "Mercedes Parts" },
  { href: "/bmw-parts", label: "BMW Parts" },
  { href: "/audi-parts", label: "Audi Parts" },
  { href: "/contact", label: "Contact Us" },
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-50 border-b border-[#DDD9D0]/80 bg-[#F5F3EE]/95 backdrop-blur-xl">
      <nav className="container-px mx-auto flex max-w-7xl items-center justify-between py-3.5" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center border border-[#A88A5A]/55 bg-[#202321] text-sm font-extrabold tracking-tight text-[#F5F3EE]">NB</span>
          <span className="leading-none">
            <span className="font-display block text-xl font-semibold tracking-[-0.03em] text-[#202321]">New Benz</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.28em] text-[#73766F]">Auto Parts</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={`text-sm font-bold transition ${active ? "text-[#A88A5A]" : "text-[#202321] hover:text-[#A88A5A]"}`}>
=======
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
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
<<<<<<< HEAD
          <WhatsAppButton href={getGeneralWhatsAppUrl()} className="px-4 py-2.5" />
=======
          <WhatsAppButton href={getGeneralWhatsAppUrl()} className="px-4 py-2" />
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
<<<<<<< HEAD
          className="grid h-11 w-11 place-items-center border border-[#DDD9D0] text-[#202321] lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
=======
          className="rounded-xl border border-white/10 p-2 text-white lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
        </button>
      </nav>

      {open ? (
<<<<<<< HEAD
        <div className="border-t border-[#DDD9D0] bg-[#F5F3EE] px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
=======
        <div className="border-t border-white/10 bg-zinc-950 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
<<<<<<< HEAD
                className={`px-3 py-3 text-sm font-bold ${pathname === item.href ? "bg-white text-[#A88A5A]" : "text-[#202321]"}`}
=======
                className={`rounded-xl px-4 py-3 text-sm font-semibold ${pathname === item.href ? "bg-white text-zinc-950" : "text-zinc-300 hover:bg-white/10"}`}
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
              >
                {item.label}
              </Link>
            ))}
<<<<<<< HEAD
            <WhatsAppButton href={getGeneralWhatsAppUrl()} className="mt-3 w-full" />
=======
            <WhatsAppButton href={getGeneralWhatsAppUrl()} className="mt-2 w-full" />
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
          </div>
        </div>
      ) : null}
    </header>
  );
}
