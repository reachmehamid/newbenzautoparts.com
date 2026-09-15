<<<<<<< HEAD
import { ArrowUpRight } from "lucide-react";
=======
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
import Image from "next/image";
import Link from "next/link";

type BrandCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function BrandCard({ title, description, href, image }: BrandCardProps) {
  return (
<<<<<<< HEAD
    <Link href={href} className="group block overflow-hidden border border-[#DDD9D0] bg-white">
      <article>
        <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E2D6]">
          <Image src={image} alt={`${title} automotive editorial photography placeholder`} fill className="object-cover grayscale-[12%] transition duration-700 group-hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151716]/78 via-[#151716]/12 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-7 text-[#F5F3EE]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#D8C7A2]">Brand Catalog</p>
            <h3 className="font-display text-5xl font-semibold tracking-[-0.04em]">{title}</h3>
          </div>
        </div>
        <div className="flex items-start justify-between gap-5 p-6">
          <p className="text-sm leading-7 text-[#73766F]">{description}</p>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#A88A5A] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </article>
    </Link>
=======
    <article className="group overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-zinc-950/5 ring-1 ring-zinc-200/70 transition hover:-translate-y-1 hover:shadow-2xl motion-reduce:hover:translate-y-0">
      <div className="relative h-64 overflow-hidden bg-zinc-900">
        <Image src={image} alt={`${title} parts category`} fill className="object-cover opacity-85 transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <h3 className="absolute bottom-6 left-6 text-3xl font-black text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="mb-6 leading-7 text-zinc-600">{description}</p>
        <Link href={href} className="inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-700">
          Explore Parts
        </Link>
      </div>
    </article>
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
  );
}
