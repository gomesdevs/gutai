export interface Product {
  id: string;
  name: string;
  functionalName: string;
  brand: string;
  drop: string;
  price: number;
  description: string;
  materials: string[];
  weight: string;
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
  name: string;
  launchDate: Date;
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
