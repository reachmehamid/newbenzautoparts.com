import Image from "next/image";
import type { Product } from "@/data/products";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ product }: { product: Product }) {
  return (
<<<<<<< HEAD
    <article className="flex h-full flex-col border border-[#DDD9D0] bg-white">
      <div className="relative h-56 border-b border-[#DDD9D0] bg-[#F8F6F0]">
        <Image src={product.image} alt={`${product.name} product image placeholder`} fill className="object-contain p-5" sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#A88A5A]">{product.category}</p>
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#202321]">{product.name}</h3>
        <p className="mt-3 font-mono text-xs font-semibold text-[#73766F]">{product.partNumber}</p>

        <dl className="mt-5 grid gap-3 border-y border-[#DDD9D0] py-4 text-sm">
          <div>
            <dt className="font-bold text-[#202321]">Compatible models</dt>
            <dd className="mt-1 leading-6 text-[#73766F]">{product.compatibleModels.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-bold text-[#202321]">Compatible years</dt>
            <dd className="mt-1 leading-6 text-[#73766F]">{product.compatibleYears}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm leading-7 text-[#5E615B]">{product.description}</p>
        <p className="mt-4 bg-[#F5F3EE] p-3 text-xs leading-5 text-[#73766F]"><strong className="text-[#202321]">Verify fitment:</strong> {product.fitmentNote}</p>
        <div className="mt-auto pt-5">
          <WhatsAppButton href={getWhatsAppUrl(product)} className="w-full py-2.5" />
=======
    <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-xl shadow-zinc-950/5 ring-1 ring-zinc-200/70">
      <div className="relative h-48 bg-zinc-100">
        <Image src={product.image} alt={`${product.name} reference image`} fill className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-zinc-950 px-3 py-1 text-xs font-bold text-white">{product.brand}</span>
          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">{product.category}</span>
        </div>
        <h3 className="text-lg font-black leading-snug text-zinc-950">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{product.description}</p>
        <dl className="mt-4 grid gap-3 text-sm">
          <div>
            <dt className="font-bold text-zinc-950">Compatible Models</dt>
            <dd className="text-zinc-600">{product.compatibleModels.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-bold text-zinc-950">Compatible Years</dt>
            <dd className="text-zinc-600">{product.compatibleYears}</dd>
          </div>
          <div>
            <dt className="font-bold text-zinc-950">Part Reference</dt>
            <dd className="font-mono text-zinc-600">{product.partNumber}</dd>
          </div>
        </dl>
        <p className="mt-4 rounded-2xl bg-zinc-50 p-3 text-xs leading-5 text-zinc-500"><strong className="text-zinc-800">Verify Fitment:</strong> {product.fitmentNote}</p>
        <div className="mt-auto pt-5">
          <WhatsAppButton href={getWhatsAppUrl(product)} className="w-full" />
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
        </div>
      </div>
    </article>
  );
}
