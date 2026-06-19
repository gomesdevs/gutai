import Link from 'next/link';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

export function ProductCard({ product, featured = false }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group block ${featured ? 'md:col-span-2' : ''}`}
    >
      <div
        className={`bg-[#141010] border border-[#1a1a1a] mb-4 transition-all duration-300 group-hover:border-[#8a8a8a] group-hover:shadow-[4px_4px_0_#8a8a8a] ${
          featured ? 'aspect-[4/5]' : 'aspect-[3/4]'
        }`}
      />
      <div className="flex justify-between items-start gap-4">
        <div>
          <p
            className="text-xs tracking-widest text-[#8a8a8a] uppercase mb-1"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {product.brand}
          </p>
          <p
            className="text-sm text-[#e8e8e8] tracking-tight"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            {product.name}
          </p>
          <p
            className="text-xs text-[#666666] mt-1"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {product.functionalName}
          </p>
        </div>
        <p
          className="text-sm text-[#c0c0c0] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {product.price} EUR
        </p>
      </div>
    </Link>
  );
}
