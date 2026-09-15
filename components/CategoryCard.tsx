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
        <div className={`relative bg-[#F8F6F0] ${large ? "min-h-60" : "min-h-44 md:min-h-full"}`}>
          <Image src={image} alt={`${title} product photography`} fill className="object-contain p-5 transition duration-500 group-hover:scale-[1.025]" />
        </div>
        <div className="flex min-h-44 flex-col justify-between p-5">
          <div>
            <p className="mb-3 h-px w-10 bg-[#A88A5A]" />
            <h3 className="text-xl font-bold tracking-tight text-[#202321]">{title}</h3>
            <p className="mt-2 text-[13px] leading-5 text-[#73766F]">{description}</p>
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#202321]">
            Explore category <ArrowRight className="h-3.5 w-3.5 text-[#A88A5A] transition group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
