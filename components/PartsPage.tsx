import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/data/products";
import { brandSummaries, getProductsByBrand } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { ProductGrid } from "./ProductGrid";
import { WhatsAppButton } from "./WhatsAppButton";

const brandImages: Record<Brand, string> = {
  "Mercedes-Benz": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80",
  BMW: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80",
  Audi: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=80",
};

export function PartsPage({ brand }: { brand: Brand }) {
  const products = getProductsByBrand(brand);

  return (
    <main>
      <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
        <Image src={brandImages[brand]} alt={`${brand} automotive`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
        <div className="container-px relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end pb-10 lg:pb-14">
          <nav className="mb-4 text-sm font-semibold text-white/50" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link> <span aria-hidden="true">/</span> <span className="text-white/70">{brand} Parts</span>
          </nav>
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-[#A88A5A]">European Parts Catalog</p>
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">{brand} Parts</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">{brandSummaries[brand]}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I am looking for ${brand} parts. Please help me confirm availability and fitment.`)} />
            <span className="text-xs font-semibold text-white/50">{products.length} items / 5 categories</span>
          </div>
        </div>
      </section>

      <ProductGrid products={products} />

      <section className="bg-[#F5F3EE] pb-10 lg:pb-14">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-5 border border-[#DDD9D0] bg-white p-6 md:grid-cols-[1fr_auto] md:items-center lg:p-8">
            <div>
              <p className="mb-2 h-px w-10 bg-[#A88A5A]" />
              <h2 className="text-xl font-bold text-[#202321]">Need help finding a part?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#73766F]">Send your vehicle model, year, engine, and required part. We will help you confirm fitment.</p>
            </div>
            <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I need help finding a ${brand} part. My vehicle details are:`)} />
          </div>
        </div>
      </section>
    </main>
  );
}
