import Image from "next/image";
import type { Product } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col border border-[#DDD9D0] bg-white">
      <div className="relative h-44 border-b border-[#DDD9D0] bg-[#F8F6F0]">
        <Image src={product.image} alt={`${product.name} product image`} fill className="object-contain p-4" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A88A5A]">{product.category}</p>
        <h3 className="text-base font-bold leading-tight text-[#202321]">{product.name}</h3>
        <p className="mt-1.5 font-mono text-[11px] font-semibold text-[#73766F]">{product.partNumber}</p>

        <dl className="mt-3 grid gap-2 border-y border-[#DDD9D0] py-3 text-[13px]">
          <div>
            <dt className="font-semibold text-[#202321]">Compatible models</dt>
            <dd className="mt-0.5 leading-5 text-[#73766F]">{product.compatibleModels.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#202321]">Compatible years</dt>
            <dd className="mt-0.5 leading-5 text-[#73766F]">{product.compatibleYears}</dd>
          </div>
        </dl>

        <p className="mt-3 text-[13px] leading-5 text-[#5E615B]">{product.description}</p>
        <p className="mt-2 bg-[#F5F3EE] p-2.5 text-[11px] leading-4 text-[#73766F]"><strong className="text-[#202321]">Verify fitment:</strong> {product.fitmentNote}</p>
        <div className="mt-auto pt-3">
          <WhatsAppButton href={getWhatsAppUrl(product)} className="w-full py-2 text-xs" />
        </div>
      </div>
    </article>
  );
}
