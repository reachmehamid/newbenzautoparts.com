import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  href: string;
  image: string;
};

export function CategoryCard({ title, href, image }: CategoryCardProps) {
  return (
    <Link href={href} className="group rounded-3xl border border-zinc-200 bg-white p-5 shadow-lg shadow-zinc-950/5 transition hover:-translate-y-1 hover:border-red-200 motion-reduce:hover:translate-y-0">
      <div className="relative mb-4 h-24 overflow-hidden rounded-2xl bg-zinc-100">
        <Image src={image} alt={`${title} category image`} fill className="object-cover transition group-hover:scale-105" />
      </div>
      <h3 className="font-black text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500">Browse catalog references</p>
    </Link>
  );
}
