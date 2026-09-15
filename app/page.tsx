import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Truck, MessageCircle, CheckCircle } from "lucide-react";
import { brandRoutes, getProductsByBrand } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "New Benz Auto Parts — Mercedes-Benz, BMW & Audi Parts" },
  description: "Browse OEM and aftermarket parts for Mercedes-Benz, BMW, and Audi. Check availability and fitment via WhatsApp.",
};

const brands = [
  {
    name: "Mercedes-Benz",
    href: brandRoutes["Mercedes-Benz"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    count: 30,
  },
  {
    name: "BMW",
    href: brandRoutes.BMW,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    count: 30,
  },
  {
    name: "Audi",
    href: brandRoutes.Audi,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    count: 30,
  },
];

const features = [
  { icon: CheckCircle, title: "Genuine & OEM Parts", desc: "Verified parts from trusted suppliers" },
  { icon: Shield, title: "Fitment Guarantee", desc: "We confirm compatibility before you commit" },
  { icon: MessageCircle, title: "Quick WhatsApp Response", desc: "Get answers within minutes" },
  { icon: Truck, title: "Fast Dispatch", desc: "Prompt shipping across Pakistan" },
];

export default function HomePage() {
  const mercedes = getProductsByBrand("Mercedes-Benz").slice(0, 4);
  const bmw = getProductsByBrand("BMW").slice(0, 4);
  const audi = getProductsByBrand("Audi").slice(0, 4);
  const allFeatured = [...mercedes, ...bmw, ...audi].slice(0, 8);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-[#111111]">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
          alt="Luxury car in studio"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="container-site relative z-10 mx-auto flex h-full flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#B8943E]">New Benz Auto Parts</p>
          <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] text-white md:text-5xl lg:text-6xl">
            Mercedes-Benz, BMW &amp; Audi Parts
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-white/60 md:text-base md:leading-7">
            Browse our catalog of OEM and aftermarket parts. Inquire via WhatsApp to confirm availability, pricing, and fitment.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/mercedes-parts" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#111111] transition hover:bg-white/90">
              Shop Mercedes Parts
            </Link>
            <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 lg:py-16">
        <div className="container-site mx-auto">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8943E]">Our Brands</p>
              <h2 className="mt-1 text-2xl font-bold text-[#1A1A1A] md:text-3xl">Shop by Brand</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <Link key={b.name} href={b.href} className="group relative h-72 overflow-hidden rounded-2xl bg-[#111111]">
                <Image src={b.image} alt={b.name} fill className="object-cover opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{b.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{b.count} products</p>
                </div>
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition group-hover:bg-[#B8943E]">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-[#F5F5F3] py-12 lg:py-16">
        <div className="container-site mx-auto">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8943E]">Featured</p>
              <h2 className="mt-1 text-2xl font-bold text-[#1A1A1A] md:text-3xl">Popular Parts</h2>
            </div>
            <Link href="/mercedes-parts" className="hidden items-center gap-1.5 text-sm font-semibold text-[#B8943E] hover:underline md:inline-flex">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {allFeatured.map((p, i) => (
              <Link key={i} href={brandRoutes[p.brand]} className="group rounded-2xl bg-white transition hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-[#F5F5F3]">
                  <Image src={p.image} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8943E]">{p.brand}</p>
                  <h3 className="mt-1 text-sm font-bold text-[#1A1A1A]">{p.name}</h3>
                  <p className="mt-0.5 text-xs text-[#6B6B6B]">{p.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-[#E5E5E3] py-10">
        <div className="container-site mx-auto grid grid-cols-2 gap-6 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F5F5F3]">
                <f.icon className="h-5 w-5 text-[#B8943E]" />
              </div>
              <h4 className="text-sm font-bold text-[#1A1A1A]">{f.title}</h4>
              <p className="mt-1 text-xs text-[#6B6B6B]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container-site mx-auto">
          <div className="overflow-hidden rounded-2xl bg-[#111111] p-8 md:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Can not find what you need?</h2>
              <p className="mt-2 max-w-md text-sm text-white/50">Send us your vehicle details and the part you are looking for. We will help you find it.</p>
            </div>
            <Link
              href={getGeneralWhatsAppUrl("Assalam o Alaikum, I am looking for a specific part. My vehicle details are:")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#B8943E] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#A07E30] lg:mt-0"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
