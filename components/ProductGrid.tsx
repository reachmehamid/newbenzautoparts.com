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
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, reference, model, category"
              className="w-full border border-[#DDD9D0] bg-white py-3.5 pl-12 pr-4 text-sm font-semibold text-[#202321] outline-none transition placeholder:text-[#9D998F] focus:border-[#A88A5A]"
            />
          </label>
        </div>

        <div className="mb-8 flex max-w-full gap-2 overflow-x-auto border-y border-[#DDD9D0] py-3" aria-label="Category filters">
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 px-4 py-2.5 text-sm font-bold transition ${selectedCategory === category ? "bg-[#202321] text-[#F5F3EE]" : "bg-white text-[#202321] hover:bg-[#ECE7DC]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm font-semibold text-[#73766F]">Showing {filtered.length} catalog items</p>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
