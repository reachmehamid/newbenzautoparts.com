<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
import Link from "next/link";
import type { Brand } from "@/data/products";
import { brandSummaries, getProductsByBrand } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { ProductGrid } from "./ProductGrid";
import { WhatsAppButton } from "./WhatsAppButton";

<<<<<<< HEAD
const brandImages: Record<Brand, string> = {
  "Mercedes-Benz": "/images/brands/mercedes-editorial-placeholder.svg",
  BMW: "/images/brands/bmw-editorial-placeholder.svg",
  Audi: "/images/brands/audi-editorial-placeholder.svg",
=======
const heroImages: Record<Brand, string> = {
  "Mercedes-Benz": "from-zinc-950 via-zinc-900 to-red-950",
  BMW: "from-zinc-950 via-slate-900 to-blue-950",
  Audi: "from-zinc-950 via-neutral-900 to-red-950",
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
};

export function PartsPage({ brand }: { brand: Brand }) {
  const products = getProductsByBrand(brand);

  return (
    <main>
<<<<<<< HEAD
      <section className="bg-[#F5F3EE]">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:py-20">
          <div>
            <nav className="mb-8 text-sm font-semibold text-[#73766F]" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#202321]">Home</Link> <span aria-hidden="true">/</span> <span>{brand} Parts</span>
            </nav>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#A88A5A]">European Parts Catalog</p>
            <h1 className="font-display mt-4 text-6xl font-semibold leading-none tracking-[-0.055em] text-[#202321] md:text-8xl">{brand} Parts</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#73766F]">{brandSummaries[brand]} Browse categories and verify compatibility before inquiry.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I am looking for ${brand} parts. Please help me confirm availability and fitment.`)} />
              <span className="text-sm font-bold text-[#73766F]">{products.length} catalog items / 5 categories</span>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-[#DDD9D0] bg-white lg:min-h-[560px]">
            <Image src={brandImages[brand]} alt={`${brand} automotive photography placeholder`} fill className="object-cover" priority />
          </div>
=======
      <section className={`relative overflow-hidden bg-gradient-to-br ${heroImages[brand]} text-white`}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white,transparent_25%),radial-gradient(circle_at_80%_0%,#dc2626,transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav className="mb-8 text-sm text-zinc-300" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span> <span>{brand} Parts</span>
          </nav>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-300">European Parts Catalog</p>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">{brand} Parts</h1>
            <p className="mt-6 text-xl leading-9 text-zinc-300">{brandSummaries[brand]} Filter by category, search model families, and send the exact catalog reference through WhatsApp.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I am looking for ${brand} parts. Please help me confirm availability and fitment.`)} />
              <span className="text-sm font-semibold text-zinc-300">{products.length} product references • 5 categories</span>
            </div>
          </div>
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
        </div>
      </section>

      <ProductGrid products={products} />

<<<<<<< HEAD
      <section className="bg-[#F5F3EE] pb-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-8 border border-[#DDD9D0] bg-white p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-12">
            <div>
              <p className="mb-3 h-px w-14 bg-[#A88A5A]" />
              <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-[#202321]">Need help finding a part?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#73766F]">Send your vehicle model, year, engine, and required part. We will help you identify the relevant category and confirm fitment details.</p>
            </div>
            <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I need help finding a ${brand} part. My vehicle details are:`)} />
          </div>
=======
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/20 sm:p-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">Need help finding a part?</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">Send your vehicle model, year, engine, and required part. We will help you identify the correct category and confirm fitment details.</p>
          </div>
          <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I need help finding a ${brand} part. My vehicle details are:`)} className="mt-6 lg:mt-0" />
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
        </div>
      </section>
    </main>
  );
}
