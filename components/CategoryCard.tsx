import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  href: string;
  image: string;
  description?: string;
  large?: boolean;
};

export function CategoryCard({ title, href, image, description = "Review catalog references and confirm fitment before inquiry.", large = false }: CategoryCardProps) {
  return (
    <Link href={href} className={`group block overflow-hidden border border-[#DDD9D0] bg-white ${large ? "md:col-span-2" : ""}`}>
      <article className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
        <div className={`relative bg-[#F8F6F0] ${large ? "min-h-72" : "min-h-56 md:min-h-full"}`}>
          <Image src={image} alt={`${title} product photography placeholder`} fill className="object-contain p-7 transition duration-500 group-hover:scale-[1.025]" />
        </div>
        <div className="flex min-h-56 flex-col justify-between p-6">
          <div>
            <p className="mb-4 h-px w-12 bg-[#A88A5A]" />
            <h3 className="font-display text-4xl font-semibold tracking-[-0.04em] text-[#202321]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#73766F]">{description}</p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#202321]">
            Explore category <ArrowRight className="h-4 w-4 text-[#A88A5A] transition group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
