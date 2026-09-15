"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { categories, type Category, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = products.filter((product) => {
    const inCategory = selectedCategory === "All" || product.category === selectedCategory;
    const haystack = `${product.name} ${product.partNumber} ${product.category} ${product.compatibleModels.join(" ")} ${product.compatibleYears}`.toLowerCase();
    return inCategory && haystack.includes(query.toLowerCase());
  });

  return (
<<<<<<< HEAD
    <section aria-label="Product catalog" className="bg-[#F5F3EE] py-16 lg:py-20">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_420px] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#A88A5A]">Catalog</p>
            <h2 className="font-display mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#202321] md:text-6xl">{products.length} catalog items</h2>
          </div>
          <label className="relative block w-full">
            <span className="sr-only">Search products</span>
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#73766F]" />
=======
    <section aria-label="Product catalog" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-700">Catalog</p>
            <h2 className="mt-2 text-3xl font-black text-zinc-950">Browse {products.length} product references</h2>
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Search products</span>
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
<<<<<<< HEAD
              placeholder="Search name, reference, model, category"
              className="w-full border border-[#DDD9D0] bg-white py-3.5 pl-12 pr-4 text-sm font-semibold text-[#202321] outline-none transition placeholder:text-[#9D998F] focus:border-[#A88A5A]"
=======
              placeholder="Search model, category, reference..."
              className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-12 pr-4 text-sm outline-none ring-red-700/20 transition focus:border-red-700 focus:ring-4"
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
            />
          </label>
        </div>

<<<<<<< HEAD
        <div className="mb-8 flex max-w-full gap-2 overflow-x-auto border-y border-[#DDD9D0] py-3" aria-label="Category filters">
=======
        <div className="mb-8 flex gap-3 overflow-x-auto pb-2" aria-label="Category filters">
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
<<<<<<< HEAD
              className={`shrink-0 px-4 py-2.5 text-sm font-bold transition ${selectedCategory === category ? "bg-[#202321] text-[#F5F3EE]" : "bg-white text-[#202321] hover:bg-[#ECE7DC]"}`}
=======
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${selectedCategory === category ? "bg-zinc-950 text-white" : "bg-white text-zinc-700 hover:bg-zinc-100"}`}
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
            >
              {category}
            </button>
          ))}
        </div>

<<<<<<< HEAD
        <p className="mb-6 text-sm font-semibold text-[#73766F]">Showing {filtered.length} catalog items</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
=======
        <p className="mb-6 text-sm font-semibold text-zinc-600">Showing {filtered.length} products</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
>>>>>>> 3e5831ed6ee6134c6c7c70118e9c9d160167bd85
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
