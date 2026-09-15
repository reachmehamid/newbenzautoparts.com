import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#E5E5E3] bg-white transition hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-[#F5F5F3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B8943E]">{product.category}</p>
        <h3 className="mt-1 text-sm font-bold leading-snug text-[#1A1A1A]">{product.name}</h3>
        <p className="mt-1 font-mono text-[11px] text-[#6B6B6B]">{product.partNumber}</p>

        <div className="mt-3 grid gap-2 text-[12px]">
          <div>
            <span className="font-semibold text-[#1A1A1A]">Models: </span>
            <span className="text-[#6B6B6B]">{product.compatibleModels.join(", ")}</span>
          </div>
          <div>
            <span className="font-semibold text-[#1A1A1A]">Years: </span>
            <span className="text-[#6B6B6B]">{product.compatibleYears}</span>
          </div>
        </div>

        <p className="mt-3 text-[12px] leading-5 text-[#6B6B6B] line-clamp-2">{product.description}</p>

        <div className="mt-auto pt-4">
          <Link
            href={getWhatsAppUrl(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#E5E5E3] bg-[#F5F5F3] px-4 py-2.5 text-[12px] font-bold text-[#1A1A1A] transition hover:border-[#B8943E] hover:bg-[#B8943E] hover:text-white"
          >
            Inquire on WhatsApp
          </Link>
        </div>
      </div>
    </article>
  );
}
