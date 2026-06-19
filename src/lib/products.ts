import type { Product, Drop } from '@/types';

export const products: Product[] = [
  {
    id: 'skin-001',
    slug: 'deconstructed-tee-type-i',
    name: 'Deconstructed Tee / Type I',
    functionalName: 'Oversized T-Shirt',
    brand: 'Rick Owens',
    category: 'Skins / Upper Layers',
    drop: 'cofre-digital-01',
    price: 420,
    description:
      'Algodão pesado com corte assimétrico. costura exposta como declaração de intenção. não é uma camiseta — é uma pele.',
    materials: ['100% algodão pima', 'costura flatlock'],
    weight: '280gsm',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [{ src: '/products/skin-001.jpg', alt: 'Deconstructed Tee preto com corte assimétrico', type: 'editorial' }],
    featured: true,
  },
  {
    id: 'shell-001',
    slug: 'armored-shell-type-iv',
    name: 'Armored Shell / Type IV',
    functionalName: 'Oversized Jacket',
    brand: 'Balenciaga',
    category: 'Shells / Armor',
    drop: 'cofre-digital-01',
    price: 1850,
    description:
      'casaco que abraça como armadura. nylon técnico com forro de seda. cada costura é uma cicatriz calculada.',
    materials: ['nylon técnico', 'forro de seda', 'zíper YKK'],
    weight: '920gsm',
    sizes: ['M', 'L', 'XL'],
    images: [{ src: '/products/shell-001.jpg', alt: 'Casaco preto armored shell com textura técnica', type: 'editorial' }],
    featured: true,
  },
  {
    id: 'lower-001',
    slug: 'phantom-trouser-type-ii',
    name: 'Phantom Trouper / Type II',
    functionalName: 'Wide Leg Trousers',
    brand: 'Maison Margiela',
    category: 'Lower Constructs',
    drop: 'cofre-digital-01',
    price: 680,
    description:
      'calça que desaparece e reaparece. corte largo que move com o corpo. algodão que sussurra quando você caminha.',
    materials: ['100% algodão', 'botões de osso'],
    weight: '420gsm',
    sizes: ['S', 'M', 'L'],
    images: [{ src: '/products/lower-001.jpg', alt: 'Calça preta wide leg com corte assimétrico', type: 'editorial' }],
    featured: false,
  },
  {
    id: 'ground-001',
    slug: 'ground-artifact-type-v',
    name: 'Ground Artifact / Type V',
    functionalName: 'Platform Sneakers',
    brand: 'Maison Margiela',
    category: 'Groundwear / Artifacts',
    drop: 'cofre-digital-01',
    price: 950,
    description:
      'sapato que marca o chão. solado grosso como fundação. couro envelhecido que conta história antes de vivê-la.',
    materials: ['couro bovino', 'solado de borracha', 'cadarço encerado'],
    weight: '680gsm',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    images: [{ src: '/products/ground-001.jpg', alt: 'Sneaker preto platform com solado grosso', type: 'editorial' }],
    featured: true,
  },
  {
    id: 'hardware-001',
    slug: 'relic-chain-type-i',
    name: 'Relic Chain / Type I',
    functionalName: 'Silver Necklace',
    brand: 'Chrome Hearts',
    category: 'Hardware / Relics',
    drop: 'cofre-digital-01',
    price: 1200,
    description:
      'corrente que não pede licença. prata 925 com acabamento oxidado. cada elo é um nó de rebeldia.',
    materials: ['prata 925', 'acabamento oxidado'],
    weight: '145gsm',
    sizes: ['U'],
    images: [{ src: '/products/hardware-001.jpg', alt: 'Corrente prata Chrome Hearts com acabamento oxidado', type: 'editorial' }],
    featured: false,
  },
];

export const drops: Drop[] = [
  {
    id: 'cofre-digital-01',
    slug: 'cofre-digital-01',
    name: 'COFRE DIGITAL',
    launchDate: '2025.07',
    products,
    isExclusive: false,
    accessTiers: ['standard'],
    description:
      'Artefatos para quem entende peso. Cada peça é um documento de rebeldia, uma sentença contra o ordinário.',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getDropBySlug(slug: string): Drop | undefined {
  return drops.find((d) => d.slug === slug);
}

export function getProductsByDrop(dropId: string): Product[] {
  return products.filter((p) => p.drop === dropId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
