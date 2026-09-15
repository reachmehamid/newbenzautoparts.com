import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, LayoutGrid, MessageCircle, ShieldCheck } from "lucide-react";
import { BrandCard } from "@/components/BrandCard";
import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { brandRoutes } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "New Benz Auto Parts | Mercedes-Benz, BMW & Audi Parts",
  description: "Explore a display-only catalog of Mercedes-Benz parts, BMW parts, Audi parts, brake pads, filters, suspension components, and engine service references.",
};

const brandCards = [
  { title: "Mercedes-Benz", href: brandRoutes["Mercedes-Benz"], image: "/images/brands/mercedes.svg", description: "Organized replacement part references for selected Mercedes-Benz car and SUV model families." },
  { title: "BMW", href: brandRoutes.BMW, image: "/images/brands/bmw.svg", description: "Browse BMW service, braking, filtration, and suspension references by model family." },
  { title: "Audi", href: brandRoutes.Audi, image: "/images/brands/audi.svg", description: "Find Audi catalog references for selected sedans, sportbacks, and SUVs." },
];

const reasons = [
  { title: "European Vehicle Focus", text: "The catalog is structured around Mercedes-Benz, BMW, and Audi part categories.", icon: Car },
  { title: "Organized Parts Catalog", text: "Browse by brand, category, model family, compatible years, and catalog reference.", icon: LayoutGrid },
  { title: "Model Compatibility Information", text: "Each listing includes indicative compatibility notes to guide your inquiry.", icon: ShieldCheck },
  { title: "Direct WhatsApp Assistance", text: "Send the exact product details through WhatsApp for availability and fitment confirmation.", icon: MessageCircle },
];

const featuredCategories = [
  ["Brake Pads", "/images/products/brake-pads.svg"],
  ["Brake Discs", "/images/products/brake-discs.svg"],
  ["Oil Filters", "/images/products/oil-filters.svg"],
  ["Air Filters", "/images/products/air-filters.svg"],
  ["Suspension Parts", "/images/products/suspension-parts.svg"],
  ["Spark Plugs", "/images/products/spark-plugs.svg"],
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(185,28,28,0.45),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,0.12),transparent_25%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-red-300">Mercedes-Benz • BMW • Audi</p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">Premium European Auto Parts, Made Easy to Find.</h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">Explore quality replacement parts for Mercedes-Benz, BMW, and Audi. Find the right category, check compatibility, and send us your inquiry.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/mercedes-parts" className="rounded-full bg-red-700 px-5 py-3 text-sm font-black text-white transition hover:bg-red-600">Explore Mercedes Parts</Link>
              <Link href="/bmw-parts" className="rounded-full bg-white px-5 py-3 text-sm font-black text-zinc-950 transition hover:bg-zinc-200">Explore BMW Parts</Link>
              <Link href="/audi-parts" className="rounded-full bg-white/10 px-5 py-3 text-sm font-black text-white ring-1 ring-white/20 transition hover:bg-white/20">Explore Audi Parts</Link>
              <Link href="/contact" className="rounded-full bg-transparent px-5 py-3 text-sm font-black text-white ring-1 ring-white/25 transition hover:bg-white/10">Contact Us</Link>
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] bg-zinc-900 shadow-2xl shadow-black/40 ring-1 ring-white/10">
              <Image src="/images/hero-parts.svg" alt="Premium automotive parts arranged in a dark showroom style" fill priority className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Choose Brand" title="Browse by European vehicle brand" description="Start with your vehicle brand, then filter by part category and model family." align="center" />
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {brandCards.map((brand) => <BrandCard key={brand.title} {...brand} />)}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="A clearer way to inquire about parts" description="The site is designed to help customers share accurate part details before a WhatsApp conversation begins." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="rounded-3xl bg-white p-6 shadow-lg shadow-zinc-950/5 ring-1 ring-zinc-200/70">
                  <Icon className="mb-5 h-8 w-8 text-red-700" />
                  <h3 className="text-lg font-black text-zinc-950">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Categories" title="Featured parts categories" description="Common replacement categories for European vehicles." />
            <Link href="/mercedes-parts" className="inline-flex items-center gap-2 text-sm font-black text-red-700">Browse Parts <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {featuredCategories.map(([title, image]) => <CategoryCard key={title} title={title} image={image} href="/mercedes-parts" />)}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300">Parts Inquiry</p>
          <h2 className="mt-4 text-4xl font-black md:text-6xl">Looking for a specific part?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-300">Send us your vehicle model, year, and required part. Our team will help you check availability and fitment.</p>
          <div className="mt-8"><WhatsAppButton href={getGeneralWhatsAppUrl("Assalam o Alaikum, I am looking for a specific part. My vehicle details are:")} >Chat on WhatsApp</WhatsAppButton></div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg leading-8 text-zinc-700">New Benz Auto Parts provides a display-only catalog for Mercedes-Benz parts, BMW parts, and Audi parts, including brake pads, filters, suspension components, engine parts references, and other automotive replacement parts. Use the catalog to prepare your inquiry and confirm the exact fitment before ordering.</p>
        </div>
      </section>
    </main>
  );
}
