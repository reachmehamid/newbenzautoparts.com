import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/data/products";
import { brandSummaries, getProductsByBrand } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { ProductGrid } from "./ProductGrid";
import { WhatsAppButton } from "./WhatsAppButton";

const brandImages: Record<Brand, string> = {
  "Mercedes-Benz": "/images/brands/mercedes-editorial-placeholder.svg",
  BMW: "/images/brands/bmw-editorial-placeholder.svg",
  Audi: "/images/brands/audi-editorial-placeholder.svg",
};

export function PartsPage({ brand }: { brand: Brand }) {
  const products = getProductsByBrand(brand);

  return (
    <main>
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
        </div>
      </section>

      <ProductGrid products={products} />

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
        </div>
      </section>
    </main>
  );
}
