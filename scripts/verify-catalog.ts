import { brands, categories, products } from "../data/products";

const errors: string[] = [];
const ids = new Set<string>();

for (const product of products) {
  if (ids.has(product.id)) errors.push(`Duplicate product id: ${product.id}`);
  ids.add(product.id);
  if (!product.image) errors.push(`Missing image: ${product.id}`);
  if (!product.partNumber.startsWith("NB-")) errors.push(`Unexpected reference: ${product.id}`);
}

const expectedCategoryCounts: Record<string, number> = {
  "Mercedes-Benz / Air Filters": 17,
};

for (const brand of brands) {
  const brandProducts = products.filter((product) => product.brand === brand);
  for (const category of categories) {
    const count = brandProducts.filter((product) => product.category === category).length;
    const expected = expectedCategoryCounts[`${brand} / ${category}`] ?? 10;
    if (count !== expected)
      errors.push(`${brand} / ${category} has ${count} products, expected ${expected}`);
  }
}

if (products.length !== 157) errors.push(`Catalog has ${products.length} products, expected 157`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Catalog verified: ${products.length} products, ${brands.length} brands, ${categories.length} categories per brand.`);
