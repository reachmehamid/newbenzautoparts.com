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
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search model, category, reference..."
              className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-12 pr-4 text-sm outline-none ring-red-700/20 transition focus:border-red-700 focus:ring-4"
            />
          </label>
        </div>

        <div className="mb-8 flex gap-3 overflow-x-auto pb-2" aria-label="Category filters">
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-3 text-sm font-bold transition ${selectedCategory === category ? "bg-zinc-950 text-white" : "bg-white text-zinc-700 hover:bg-zinc-100"}`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mb-6 text-sm font-semibold text-zinc-600">Showing {filtered.length} products</p>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filtered.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
}
