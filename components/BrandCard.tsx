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
          <Image src={image} alt={`${title} automotive editorial photography`} fill className="object-cover grayscale-[12%] transition duration-700 group-hover:scale-[1.035]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151716]/78 via-[#151716]/12 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-[#F5F3EE]">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D8C7A2]">Brand Catalog</p>
            <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
          </div>
        </div>
        <div className="flex items-start justify-between gap-4 p-4">
          <p className="text-[13px] leading-5 text-[#73766F]">{description}</p>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[#A88A5A] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </article>
    </Link>
  );
}
