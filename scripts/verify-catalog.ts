import { brands, categories, products } from "../data/products";

const errors: string[] = [];
const ids = new Set<string>();

for (const product of products) {
  if (ids.has(product.id)) errors.push(`Duplicate product id: ${product.id}`);
  ids.add(product.id);
  if (!product.image) errors.push(`Missing image: ${product.id}`);
  if (!product.partNumber.startsWith("NB-")) errors.push(`Unexpected reference: ${product.id}`);
}

for (const brand of brands) {
  const brandProducts = products.filter((product) => product.brand === brand);
  if (brandProducts.length !== 50) errors.push(`${brand} has ${brandProducts.length} products, expected 50`);
  for (const category of categories) {
    const count = brandProducts.filter((product) => product.category === category).length;
    if (count !== 10) errors.push(`${brand} / ${category} has ${count} products, expected 10`);
  }
}

if (products.length !== 150) errors.push(`Catalog has ${products.length} products, expected 150`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Catalog verified: ${products.length} products, ${brands.length} brands, ${categories.length} categories per brand.`);
