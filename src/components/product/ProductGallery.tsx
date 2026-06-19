'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ProductImage } from '@/types';

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Imagem principal */}
      <div className="aspect-[3/4] bg-[#141010] border border-[#1a1a1a] relative overflow-hidden">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4">
          <span
            className="text-xs text-[#8a8a8a] bg-[#0a0a0a]/80 px-2 py-1 tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {images[activeIndex].type}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'w-16 h-20 bg-[#141010] border relative overflow-hidden transition-colors',
                index === activeIndex ? 'border-[#c0c0c0]' : 'border-[#1a1a1a]'
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
