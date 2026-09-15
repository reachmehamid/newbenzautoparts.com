import type { Product } from "@/data/products";

export const whatsappNumber = "923074672066";
export const whatsappDisplay = "+92 307 4672066";
export const whatsappBaseUrl = `https://wa.me/${whatsappNumber}`;

export function getWhatsAppUrl(product: Product): string {
  const message = `Assalam o Alaikum, I am interested in this product from New Benz Auto Parts.

Brand: ${product.brand}
Category: ${product.category}
Product: ${product.name}
Part Reference: ${product.partNumber}
Compatible Models: ${product.compatibleModels.join(", ")}
Compatible Years: ${product.compatibleYears}

Please confirm availability, price, and compatibility with my vehicle.

Thank you.`;

  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export function getGeneralWhatsAppUrl(message = "Assalam o Alaikum, I would like to inquire about auto parts from New Benz Auto Parts.") {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
