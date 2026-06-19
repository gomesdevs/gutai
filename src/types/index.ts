export interface Product {
  id: string;
  slug: string;
  name: string;
  functionalName: string;
  brand: string;
  category: 'Skins / Upper Layers' | 'Lower Constructs' | 'Shells / Armor' | 'Groundwear / Artifacts' | 'Hardware / Relics';
  drop: string;
  price: number;
  description: string;
  materials: string[];
  weight: string;
  sizes: string[];
  images: ProductImage[];
  featured: boolean;
}

export interface ProductImage {
  src: string;
  alt: string;
  type: 'editorial' | 'ghost-mannequin' | 'xray';
}

export interface Drop {
  id: string;
  slug: string;
  name: string;
  launchDate: string;
  products: Product[];
  isExclusive: boolean;
  accessTiers: MembershipTier[];
  description: string;
}

export type MembershipTier = 'standard' | 'vault' | 'inner-circle';

export interface Member {
  id: string;
  email: string;
  tier: MembershipTier;
  joinedAt: Date;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}
