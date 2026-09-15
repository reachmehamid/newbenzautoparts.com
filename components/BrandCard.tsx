import { ArrowRight } from "lucide-react";
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
    <Link href={href} className="group block overflow-hidden rounded-2xl border border-[#E5E5E3] bg-white transition hover:shadow-lg">
      <article>
        <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F5F3]">
          <Image src={image} alt={title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <p className="text-[13px] text-[#6B6B6B] line-clamp-1">{description}</p>
          <ArrowRight className="h-4 w-4 shrink-0 text-[#B8943E] transition group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
}
