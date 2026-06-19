import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { getFeaturedProducts } from '@/lib/products';
import type { Drop } from '@/types';

interface DropPreviewProps {
  drop: Drop;
}

export function DropPreview({ drop }: DropPreviewProps) {
  const featured = getFeaturedProducts().slice(0, 3);

  return (
    <section className="py-32 px-8 border-t border-[#1a1a1a] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Badge>DROP ATIVO</Badge>
          <span
            className="text-xs text-[#666666]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {drop.launchDate}
          </span>
        </div>

        <h2
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          style={{ fontFamily: 'var(--font-gothic)' }}
        >
          {drop.name}
        </h2>

        <p
          className="text-lg text-[#8a8a8a] max-w-2xl mb-16"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {drop.description}
        </p>

        {/* Peças em destaque — layout editorial assimétrico */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {featured.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className={`group block ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div
                className={`bg-[#141010] border border-[#1a1a1a] mb-4 transition-all duration-300 group-hover:border-[#8a8a8a] group-hover:shadow-[4px_4px_0_#8a8a8a] ${
                  index === 0 ? 'aspect-[4/5]' : 'aspect-[3/4]'
                }`}
              />
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
                {product.price} EUR
              </p>
            </Link>
          ))}
        </div>

        <Link
          href={`/drop/${drop.slug}`}
          className="inline-flex items-center gap-2 text-sm text-[#c0c0c0] tracking-widest uppercase hover:text-[#e8e8e8] transition-colors"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Ver todas as peças
          <span className="text-lg">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}
