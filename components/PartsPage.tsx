import Image from "next/image";
import Link from "next/link";
import type { Brand } from "@/data/products";
import { brandSummaries, getProductsByBrand } from "@/data/products";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import { ProductGrid } from "./ProductGrid";

const brandImages: Record<Brand, string> = {
  "Mercedes-Benz": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&q=80",
  BMW: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1920&q=80",
  Audi: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1920&q=80",
};

export function PartsPage({ brand }: { brand: Brand }) {
  const products = getProductsByBrand(brand);

  return (
    <main>
      {/* Brand Hero */}
      <section className="relative h-[50vh] min-h-[360px] w-full overflow-hidden bg-[#111111]">
        <Image src={brandImages[brand]} alt={`${brand} vehicle`} fill className="object-cover opacity-50" priority />
        <div className="container-site relative z-10 mx-auto flex h-full flex-col justify-end pb-10 lg:pb-14">
          <nav className="mb-3 text-xs font-medium text-white/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/70">Home</Link>
            <span className="mx-1.5">/</span>
            <span className="text-white/60">{brand}</span>
          </nav>
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8943E]">Parts Catalog</p>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">{brand} Parts</h1>
          <p className="mt-2 max-w-xl text-sm text-white/50">{brandSummaries[brand]}</p>
          <div className="mt-4 flex items-center gap-3">
            <Link
              href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I am looking for ${brand} parts.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#B8943E] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#A07E30]"
            >
              Inquire on WhatsApp
            </Link>
            <span className="text-xs text-white/40">{products.length} products</span>
          </div>
        </div>
      </section>

      <ProductGrid products={products} />

      {/* Bottom CTA */}
      <section className="border-t border-[#E5E5E3] py-10">
        <div className="container-site mx-auto flex flex-col items-start gap-4 rounded-2xl bg-[#F5F5F3] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-lg font-bold text-[#1A1A1A]">Need help finding a {brand} part?</h2>
            <p className="mt-1 text-sm text-[#6B6B6B]">Send your vehicle details and required part. We will confirm fitment.</p>
          </div>
          <Link
            href={getGeneralWhatsAppUrl(`Assalam o Alaikum, I need help finding a ${brand} part. My vehicle details are:`)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-[#111111] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#333]"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
