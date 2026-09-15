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

export function CategoryCard({ title, href, image, description = "Browse catalog references and confirm fitment.", large = false }: CategoryCardProps) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-2xl border border-[#E5E5E3] bg-white transition hover:shadow-lg ${large ? "md:col-span-2" : ""}`}>
      <article className="grid h-full md:grid-cols-[1.1fr_0.9fr]">
        <div className={`relative overflow-hidden bg-[#F5F5F3] ${large ? "min-h-56" : "min-h-44 md:min-h-full"}`}>
          <Image src={image} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        </div>
        <div className="flex min-h-44 flex-col justify-between p-5">
          <div>
            <h3 className="text-lg font-bold text-[#1A1A1A]">{title}</h3>
            <p className="mt-1.5 text-[13px] leading-5 text-[#6B6B6B]">{description}</p>
          </div>
          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#B8943E]">
            Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
}
