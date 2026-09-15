import Link from "next/link";
import type { Brand } from "@/data/products";
import { brandSummaries, getProductsByBrand } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { ProductGrid } from "./ProductGrid";
import { WhatsAppButton } from "./WhatsAppButton";

const heroImages: Record<Brand, string> = {
  "Mercedes-Benz": "from-zinc-950 via-zinc-900 to-red-950",
  BMW: "from-zinc-950 via-slate-900 to-blue-950",
  Audi: "from-zinc-950 via-neutral-900 to-red-950",
};

export function PartsPage({ brand }: { brand: Brand }) {
  const products = getProductsByBrand(brand);

  return (
    <main>
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
        </div>
      </section>

      <ProductGrid products={products} />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/20 sm:p-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">Need help finding a part?</h2>
            <p className="mt-3 max-w-2xl text-zinc-300">Send your vehicle model, year, engine, and required part. We will help you identify the correct category and confirm fitment details.</p>
          </div>
          <WhatsAppButton href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I need help finding a ${brand} part. My vehicle details are:`)} className="mt-6 lg:mt-0" />
        </div>
      </section>
    </main>
  );
}
