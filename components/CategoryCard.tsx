<<<<<<< HEAD
import { ArrowRight } from "lucide-react";
=======
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  href: string;
  image: string;
<<<<<<< HEAD
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
=======
};

export function CategoryCard({ title, href, image }: CategoryCardProps) {
  return (
    <Link href={href} className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-950/5 transition hover:-translate-y-1 hover:border-red-200 motion-reduce:hover:translate-y-0">
      <div className="relative mb-4 h-24 overflow-hidden rounded-2xl bg-zinc-100">
        <Image src={image} alt={`${title} category image`} fill className="object-cover transition group-hover:scale-105" />
      </div>
      <h3 className="font-black text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500">Browse catalog references</p>
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
    </Link>
  );
}
