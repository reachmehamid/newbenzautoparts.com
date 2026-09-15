import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Car, LayoutGrid, MessageCircle, ShieldCheck } from "lucide-react";
import { BrandCard } from "@/components/BrandCard";
import { CategoryCard } from "@/components/CategoryCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { brandRoutes } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "New Benz Auto Parts | Mercedes-Benz, BMW & Audi Parts" },
  description: "Explore a display-only catalog of Mercedes-Benz parts, BMW parts, Audi parts, brake pads, filters, suspension components, and engine service references.",
};

const brandCards = [
  { title: "Mercedes-Benz", href: brandRoutes["Mercedes-Benz"], image: "/images/brands/mercedes-editorial-placeholder.svg", description: "Replacement part references for selected Mercedes-Benz passenger cars, coupes, and SUVs." },
  { title: "BMW", href: brandRoutes.BMW, image: "/images/brands/bmw-editorial-placeholder.svg", description: "A structured BMW catalog for service, braking, filtration, and suspension inquiries." },
  { title: "Audi", href: brandRoutes.Audi, image: "/images/brands/audi-editorial-placeholder.svg", description: "Audi catalog references arranged by category, model family, and indicative fitment range." },
];

const reasons = [
  { title: "European Vehicle Focus", text: "The catalog is structured around Mercedes-Benz, BMW, and Audi replacement part categories.", icon: Car },
  { title: "Organized Catalog", text: "Each listing includes category, model family, compatible years, and an internal catalog reference.", icon: LayoutGrid },
  { title: "Compatibility Context", text: "Fitment notes help you prepare the right vehicle details before contacting us.", icon: ShieldCheck },
  { title: "Direct WhatsApp Inquiry", text: "Product buttons generate a message with the exact catalog details for easier follow-up.", icon: MessageCircle },
];

const featuredCategories = [
  { title: "Brake Pads", image: "/images/categories/brake-pads-photo-placeholder.svg", href: "/mercedes-parts", description: "Front and rear axle brake pad references for selected European models.", large: true },
  { title: "Brake Discs", image: "/images/categories/brake-discs-photo-placeholder.svg", href: "/bmw-parts", description: "Disc rotor references with axle and vehicle compatibility context." },
  { title: "Oil Filters", image: "/images/categories/oil-filter-photo-placeholder.svg", href: "/audi-parts", description: "Engine service filter references for selected model families." },
  { title: "Air Filters", image: "/images/categories/air-filter-photo-placeholder.svg", href: "/mercedes-parts", description: "Intake filter references organized by brand and model family." },
  { title: "Suspension Parts", image: "/images/categories/suspension-photo-placeholder.svg", href: "/bmw-parts", description: "Suspension component references with fitment notes for inquiry." },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-[#F5F3EE]">
        <div className="container-px mx-auto grid max-w-7xl gap-10 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-20">
          <div className="relative z-10 py-8 lg:py-16">
            <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.32em] text-[#A88A5A]">European Automotive Parts</p>
            <h1 className="font-display max-w-3xl text-6xl font-semibold leading-[0.88] tracking-[-0.06em] text-[#202321] md:text-8xl lg:text-9xl">The Right Parts for Exceptional Cars.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#73766F]">Explore a curated catalog of replacement parts for Mercedes-Benz, BMW, and Audi. Find your category, review vehicle compatibility, and contact us directly.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/mercedes-parts" className="inline-flex items-center justify-center rounded-full bg-[#202321] px-6 py-3 text-sm font-bold text-[#F5F3EE] transition hover:bg-[#151716]">
                Explore Parts
              </Link>
              <WhatsAppButton href={getGeneralWhatsAppUrl()} variant="outline">WhatsApp Inquiry</WhatsAppButton>
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden border border-[#DDD9D0] bg-white lg:min-h-[690px]">
            <Image src="/images/hero/parts-showroom-photo-placeholder.svg" alt="Automotive parts photography replacement placeholder" fill priority className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <SectionHeading eyebrow="Choose Brand" title="Browse by marque." description="Start with the vehicle brand, then filter by part category and model family." />
            <p className="text-sm leading-7 text-[#73766F] lg:max-w-md lg:justify-self-end">The catalog is display-only. Confirm model year, engine, and OEM reference before ordering any replacement part.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {brandCards.map((brand) => <BrandCard key={brand.title} {...brand} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F3EE] py-20 lg:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading eyebrow="Catalog" title="Explore the Parts Catalog." description="A focused set of service and replacement categories for Mercedes-Benz, BMW, and Audi vehicles." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => <CategoryCard key={category.title} {...category} />)}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article key={reason.title} className="border border-[#DDD9D0] bg-[#F8F6F0] p-6">
                  <Icon className="mb-8 h-6 w-6 text-[#A88A5A]" />
                  <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#202321]">{reason.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#73766F]">{reason.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#151716] py-20 text-[#F5F3EE] lg:py-28">
        <div className="container-px mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-[#A88A5A]">Parts Inquiry</p>
            <h2 className="font-display mt-4 max-w-3xl text-6xl font-semibold leading-none tracking-[-0.055em] md:text-8xl">Looking for a specific part?</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#C8C2B7]">Send us your vehicle model, year, and required part. We will help you check availability and fitment.</p>
          </div>
          <WhatsAppButton href={getGeneralWhatsAppUrl("Assalam o Alaikum, I am looking for a specific part. My vehicle details are:")} variant="outline" className="border-[#A88A5A] text-[#F5F3EE] hover:bg-[#F5F3EE] hover:text-[#202321]">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </section>

      <section className="bg-[#F5F3EE] py-14">
        <div className="container-px mx-auto max-w-4xl">
          <p className="text-center text-base leading-8 text-[#73766F]">New Benz Auto Parts provides a display-only catalog for Mercedes-Benz parts, BMW parts, and Audi parts, including brake pads, filters, suspension components, engine parts references, and other automotive replacement parts. Use the catalog to prepare your inquiry and confirm exact fitment before ordering.</p>
        </div>
      </section>
    </main>
  );
}
