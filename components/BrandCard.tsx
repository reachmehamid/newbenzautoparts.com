import { ArrowUpRight } from "lucide-react";
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
  );
}
