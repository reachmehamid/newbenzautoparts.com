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
    <section className="py-10 lg:py-14">
      <div className="container-site mx-auto">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#1A1A1A] md:text-2xl">{products.length} Parts Available</h2>
            <p className="mt-1 text-sm text-[#6B6B6B]">Browse our catalog or search by name, reference, or model.</p>
          </div>
          <label className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B6B6B]" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search parts..."
              className="w-full rounded-full border border-[#E5E5E3] bg-[#F5F5F3] py-2.5 pl-10 pr-4 text-sm text-[#1A1A1A] outline-none transition placeholder:text-[#999] focus:border-[#B8943E]"
            />
          </label>
        </div>

        <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
          {(["All", ...categories] as const).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#111111] text-white"
                  : "bg-[#F5F5F3] text-[#1A1A1A] hover:bg-[#E5E5E3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mb-4 text-xs font-medium text-[#6B6B6B]">Showing {filtered.length} products</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
