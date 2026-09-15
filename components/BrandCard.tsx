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
  );
}
