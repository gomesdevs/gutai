'use client';

import { cn } from '@/lib/utils';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSelect }: SizeSelectorProps) {
  const isOneSize = sizes.length === 1 && sizes[0] === 'U';

  if (isOneSize) {
    return (
      <div>
        <p
          className="text-xs text-[#666666] uppercase tracking-widest mb-3"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          TAMANHO ÚNICO
        </p>
      </div>
    );
  }

  return (
    <div>
      <p
        className="text-xs text-[#666666] uppercase tracking-widest mb-3"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        TAMANHO
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSelect(size)}
            className={cn(
              'min-w-[3rem] px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-200',
              'font-mono font-bold',
              selectedSize === size
                ? 'bg-[#c0c0c0] text-[#0a0a0a] border-[#c0c0c0]'
                : 'bg-transparent text-[#8a8a8a] border-[#1a1a1a] hover:border-[#8a8a8a]'
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
