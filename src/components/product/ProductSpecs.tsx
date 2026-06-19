import type { Product } from '@/types';

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  const specs = [
    { label: 'Marca', value: product.brand },
    { label: 'Categoria', value: product.category },
    { label: 'Materiais', value: product.materials.join(', ') },
    { label: 'Peso', value: product.weight },
    { label: 'Drop', value: product.drop.replace('-', ' ').toUpperCase() },
  ];

  return (
    <div className="border-t border-[#1a1a1a] pt-8">
      <h3
        className="text-xs tracking-[0.3em] text-[#666666] uppercase mb-6"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        FICHA TÉCNICA
      </h3>

      <div className="space-y-4">
        {specs.map((spec) => (
          <div key={spec.label} className="flex justify-between items-baseline gap-4">
            <span
              className="text-xs text-[#666666] uppercase tracking-widest shrink-0"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {spec.label}
            </span>
            <span className="border-b border-dotted border-[#1a1a1a] flex-1 min-w-[2rem]" />
            <span
              className="text-sm text-[#c0c0c0] text-right"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
