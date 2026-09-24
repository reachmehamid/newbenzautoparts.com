export type Brand = "Mercedes-Benz" | "BMW" | "Audi";

export type Product = {
  id: string;
  brand: Brand;
  category: string;
  name: string;
  partNumber: string;
  description: string;
  compatibleModels: string[];
  compatibleYears: string;
  image: string;
  fitmentNote: string;
};

export const categories = [
  "Brake Pads",
  "Brake Discs",
  "Oil Filters",
  "Air Filters",
  "Suspension Parts",
] as const;

export type Category = (typeof categories)[number];

export const brands = ["Mercedes-Benz", "BMW", "Audi"] as const;

export const brandRoutes: Record<Brand, string> = {
  "Mercedes-Benz": "/mercedes-parts",
  BMW: "/bmw-parts",
  Audi: "/audi-parts",
};

export const brandSummaries: Record<Brand, string> = {
  "Mercedes-Benz":
    "Browse organized Mercedes-Benz replacement part references for selected sedans, coupes, and SUVs.",
  BMW: "Explore BMW replacement part references arranged by category, model family, and indicative fitment range.",
  Audi: "Find Audi part references for common service and suspension categories across selected model families.",
};

const categoryImages: Record<Category, string> = {
  "Brake Pads": "/images/products/brake-pad-photo-placeholder.svg",
  "Brake Discs": "/images/products/brake-disc-photo-placeholder.svg",
  "Oil Filters": "/images/products/oil-filter-photo-placeholder.svg",
  "Air Filters": "/images/products/air-filter-photo-placeholder.svg",
  "Suspension Parts": "/images/products/suspension-photo-placeholder.svg",
};

const mercedesBrakePadImages: Record<string, string> = {
  "C-Class W205": "/images/products/mercedes/brake-pads-c-class-w205.jpg",
  "E-Class W213": "/images/products/mercedes/brake-pads-e-class-w213.jpg",
  "S-Class W222": "/images/products/mercedes/brake-pads-s-class-w222.jpg",
  "A-Class W177": "/images/products/mercedes/brake-pads-a-class-w177.jpg",
  "GLA H247": "/images/products/mercedes/brake-pads-gla-h247.jpg",
  "GLC X253": "/images/products/mercedes/brake-pads-glc-x253.jpg",
  "GLE W167": "/images/products/mercedes/brake-pads-gle-w167.jpg",
  "GLS X167": "/images/products/mercedes/brake-pads-gls-x167.jpg",
  "CLA C118": "/images/products/mercedes/brake-pads-cla-c118.jpg",
  "GLC Coupe C253": "/images/products/mercedes/brake-pads-glc-coupe-c253.jpg",
};

const fitmentNote =
  "Compatibility is indicative. Please confirm your vehicle model, year, engine, and OEM part number before ordering.";

type ModelSpec = {
  model: string;
  generation: string;
  years: string;
};

const modelSpecs: Record<Brand, ModelSpec[]> = {
  "Mercedes-Benz": [
    { model: "C-Class", generation: "W205", years: "2015-2021" },
    { model: "E-Class", generation: "W213", years: "2017-2023" },
    { model: "S-Class", generation: "W222", years: "2014-2020" },
    { model: "A-Class", generation: "W177", years: "2019-2024" },
    { model: "GLA", generation: "H247", years: "2021-2024" },
    { model: "GLC", generation: "X253", years: "2016-2022" },
    { model: "GLE", generation: "W167", years: "2020-2024" },
    { model: "GLS", generation: "X167", years: "2020-2024" },
    { model: "CLA", generation: "C118", years: "2020-2024" },
    { model: "GLC Coupe", generation: "C253", years: "2017-2023" },
  ],
  BMW: [
    { model: "1 Series", generation: "F40", years: "2020-2024" },
    { model: "2 Series", generation: "G42", years: "2022-2024" },
    { model: "3 Series", generation: "G20", years: "2019-2024" },
    { model: "4 Series", generation: "G22", years: "2021-2024" },
    { model: "5 Series", generation: "G30", years: "2017-2023" },
    { model: "7 Series", generation: "G11/G12", years: "2016-2022" },
    { model: "X1", generation: "F48", years: "2016-2022" },
    { model: "X3", generation: "G01", years: "2018-2024" },
    { model: "X5", generation: "G05", years: "2019-2024" },
    { model: "X6", generation: "G06", years: "2020-2024" },
  ],
  Audi: [
    { model: "A3", generation: "8Y", years: "2021-2024" },
    { model: "A4", generation: "B9", years: "2016-2024" },
    { model: "A5", generation: "F5", years: "2018-2024" },
    { model: "A6", generation: "C8", years: "2019-2024" },
    { model: "A7", generation: "C8", years: "2019-2024" },
    { model: "A8", generation: "D5", years: "2018-2024" },
    { model: "Q2", generation: "GA", years: "2017-2024" },
    { model: "Q3", generation: "F3", years: "2019-2024" },
    { model: "Q5", generation: "FY", years: "2018-2024" },
    { model: "Q7", generation: "4M", years: "2016-2024" },
  ],
};

const categoryCopy: Record<Category, { name: string; description: string }> = {
  "Brake Pads": {
    name: "Brake Pad Set",
    description:
      "replacement brake pad set intended for selected applications. Confirm axle position, engine, model year, and OEM reference before inquiry.",
  },
  "Brake Discs": {
    name: "Brake Disc Rotor",
    description:
      "replacement brake disc rotor reference for selected applications. Confirm disc diameter, axle position, engine, and OEM reference before inquiry.",
  },
  "Oil Filters": {
    name: "Engine Oil Filter",
    description:
      "engine oil filter reference for selected service applications. Confirm engine code, model year, and OEM reference before inquiry.",
  },
  "Air Filters": {
    name: "Engine Air Filter",
    description:
      "engine air filter reference for selected intake applications. Confirm engine variant, model year, and OEM reference before inquiry.",
  },
  "Suspension Parts": {
    name: "Suspension Component",
    description:
      "replacement suspension component reference for selected chassis applications. Confirm side, axle, trim, and OEM reference before inquiry.",
  },
};

const brandCodes: Record<Brand, string> = {
  "Mercedes-Benz": "MB",
  BMW: "BMW",
  Audi: "AUD",
};

const categoryCodes: Record<Category, string> = {
  "Brake Pads": "BP",
  "Brake Discs": "BD",
  "Oil Filters": "OF",
  "Air Filters": "AF",
  "Suspension Parts": "SP",
};

const axleLabels: Partial<Record<Category, string[]>> = {
  "Brake Pads": ["Front Axle", "Rear Axle"],
  "Brake Discs": ["Front Axle", "Rear Axle"],
  "Suspension Parts": ["Front", "Rear", "Left Side", "Right Side"],
};

function buildProduct(brand: Brand, category: Category, spec: ModelSpec, index: number): Product {
  const copy = categoryCopy[category];
  const label = axleLabels[category]?.[index % axleLabels[category]!.length];
  const prefix = label ? `${label} ` : "";
  const partNumber = `NB-${brandCodes[brand]}-${categoryCodes[category]}-${String(index + 1).padStart(3, "0")}`;
  const modelKey = `${spec.model} ${spec.generation}`;
  const image =
    brand === "Mercedes-Benz" && category === "Brake Pads"
      ? mercedesBrakePadImages[modelKey] ?? categoryImages[category]
      : categoryImages[category];

  return {
    id: `${brandCodes[brand].toLowerCase()}-${categoryCodes[category].toLowerCase()}-${String(index + 1).padStart(3, "0")}`,
    brand,
    category,
    name: `${prefix}${copy.name} for ${spec.model} ${spec.generation}`,
    partNumber,
    description: `${prefix}${copy.description}`,
    compatibleModels: [`${spec.model} ${spec.generation}`],
    compatibleYears: spec.years,
    image,
    fitmentNote,
  };
}

export const products: Product[] = brands.flatMap((brand) =>
  categories.flatMap((category) =>
    modelSpecs[brand].map((spec, index) => buildProduct(brand, category, spec, index)),
  ),
);

export function getProductsByBrand(brand: Brand) {
  return products.filter((product) => product.brand === brand);
}

export function getProductsByBrandAndCategory(brand: Brand, category: Category) {
  return products.filter((product) => product.brand === brand && product.category === category);
}
