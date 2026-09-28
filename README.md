# New Benz Auto Parts

Display-only catalog website for New Benz Auto Parts, built with Next.js App Router, TypeScript, Tailwind CSS, and local catalog data.

## Design System

- **Palette:** clean white, warm gray (#F5F5F3), dark (#111111), gold accent (#B8943E)
- **Typography:** DM Sans (clean, modern sans-serif)
- **Style:** Shopify-inspired storefront — soft shadows, rounded cards, minimal borders, hover effects

## Pages

- `/` — Home
- `/mercedes-parts` — Mercedes-Benz parts catalog
- `/bmw-parts` — BMW parts catalog
- `/audi-parts` — Audi parts catalog
- `/contact` — WhatsApp inquiry contact page

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run verify:catalog
npm run build
npm start
```

## Catalog

Product data is stored in `data/products.ts` and generates 150 product records:

- Mercedes-Benz: 50 products
- BMW: 50 products
- Audi: 50 products
- 5 categories per brand
- 10 products per category

Part references use illustrative internal catalog references such as `NB-MB-BP-001`. They are not verified OEM numbers.

## WhatsApp Inquiries

Product and general inquiry links use:

- Number: `+92 307 4672066`
- URL format: `https://wa.me/923074672066`

Product cards generate pre-filled WhatsApp messages with brand, category, product name, part reference, compatible models, and compatible years.

## Images

Brand and category images use Unsplash automotive photography. Product images are local SVG placeholders in `public/images/products/`. Replace with licensed photography before publication.

## GitHub

```bash
git init
git add .
git commit -m "Build New Benz Auto Parts website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/new-benz-auto-parts.git
git push -u origin main
```

## Vercel Deployment

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the default Next.js settings.
4. Deploy.

## Limitations

- No backend or database is configured.
- The contact form opens WhatsApp with encoded inquiry details instead of sending email.
- Catalog compatibility is indicative and must be confirmed with vehicle model, year, engine, and OEM reference before ordering.
- Product images are neutral placeholders awaiting licensed photography.
