import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brandRoutes } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: { absolute: "New Benz Auto Parts | Mercedes-Benz, BMW & Audi Parts" },
  description: "Explore a display-only catalog of Mercedes-Benz parts, BMW parts, Audi parts, brake pads, filters, suspension components, and engine service references.",
};

const brandHeroes = [
  {
    brand: "Mercedes-Benz",
    href: brandRoutes["Mercedes-Benz"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80",
    tagline: "Precision engineering deserves precise parts.",
  },
  {
    brand: "BMW",
    href: brandRoutes.BMW,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80",
    tagline: "The ultimate driving machine deserves the right components.",
  },
  {
    brand: "Audi",
    href: brandRoutes.Audi,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=80",
    tagline: "Vorsprung durch Technik starts with the right parts.",
  },
];

const categories = [
  { name: "Brake Pads", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", href: "/mercedes-parts" },
  { name: "Brake Discs", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80", href: "/bmw-parts" },
  { name: "Oil Filters", image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&q=80", href: "/audi-parts" },
  { name: "Air Filters", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", href: "/mercedes-parts" },
  { name: "Suspension", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", href: "/bmw-parts" },
  { name: "Spark Plugs", image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80", href: "/audi-parts" },
];

export default function HomePage() {
  return (
    <main>
      {brandHeroes.map((item) => (
        <section key={item.brand} className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
          <Image src={item.image} alt={`${item.brand} automotive parts`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
          <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-16 lg:pb-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/60">{item.brand}</p>
            <h2 className="mb-3 max-w-lg text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">{item.tagline}</h2>
            <p className="mb-6 max-w-md text-sm leading-6 text-white/70">Browse our organized catalog of replacement parts. Filter by category, confirm compatibility, and inquire directly.</p>
            <div className="flex flex-wrap gap-3">
              <Link href={item.href} className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-white/90">
                Explore {item.brand} Parts <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-10 lg:py-14">
        <div className="container-px mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88A5A]">Categories</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#202321] md:text-4xl">Browse by Part Type</h2>
            </div>
            <Link href="/mercedes-parts" className="hidden items-center gap-1 text-sm font-semibold text-[#A88A5A] hover:underline md:inline-flex">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} className="group relative overflow-hidden bg-[#F5F3EE]">
                <div className="relative h-48 overflow-hidden">
                  <Image src={cat.image} alt={`${cat.name} category`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <h3 className="text-base font-bold text-[#202321]">{cat.name}</h3>
                  <ArrowRight className="h-4 w-4 text-[#A88A5A] transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#151716] py-10 text-white lg:py-14">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Looking for a specific part?</h2>
            <p className="mt-2 max-w-xl text-sm text-white/60">Send us your vehicle model, year, and required part. We will help you check availability and fitment.</p>
          </div>
          <WhatsAppButton href={getGeneralWhatsAppUrl("Assalam o Alaikum, I am looking for a specific part. My vehicle details are:")} variant="outline" className="border-[#A88A5A] text-white hover:bg-white hover:text-[#202321] shrink-0">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </main>
  );
}
