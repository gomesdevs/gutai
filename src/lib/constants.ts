export const BRANDS = [
  'Balenciaga',
  'Chrome Hearts',
  'Rick Owens',
  'Enfants Riches Déprimés',
  'Vetements',
  'Maison Margiela',
  'Diesel',
  'Acne Studios',
  'Alexander McQueen',
  'Ambush',
  'Amiri',
  "Arc'teryx",
  'Marc Jacobs',
  'SAINT Mxxxxx',
  'Yohji Yamamoto',
] as const;

export type Brand = (typeof BRANDS)[number];

export const HYBRID_CATEGORIES = {
  'Skins / Upper Layers': 'T-shirts, Hoodies',
  'Lower Constructs': 'Trousers, Shorts',
  'Shells / Armor': 'Jackets, Outerwear',
  'Groundwear / Artifacts': 'Sneakers, Boots',
  'Hardware / Relics': 'Accessories, Silver',
  'The Vault / Echoes': 'Archive, Past Drops',
} as const;

export const MEMBERSHIP_TIERS = {
  standard: {
    name: 'Standard',
    benefits: ['Access to main drops'],
  },
  vault: {
    name: 'Vault Access',
    benefits: ['Early access', 'The Vault / Echoes archive'],
  },
  'inner-circle': {
    name: 'Inner Circle',
    benefits: ['All benefits', 'Exclusive content', 'Priority support'],
  },
} as const;
