'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useLenis } from 'lenis/react';

interface EditorialSectionProps {
  label: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function EditorialSection({
  label,
  title,
  description,
  imageUrl,
  imageAlt,
}: EditorialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLenis(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    if (rect.top < viewportHeight && rect.bottom > 0) {
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const translateY = (progress - 0.5) * 60;
      imageRef.current.style.transform = `translateY(${translateY}px)`;
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Texto */}
        <div>
          <p
            className="text-xs tracking-[0.3em] text-[#666666] uppercase mb-6"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {label}
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            {title}
          </h2>
          <p
            className="text-lg text-[#8a8a8a] leading-relaxed max-w-lg"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {description}
          </p>
        </div>

        {/* Imagem editorial */}
        <div
          ref={imageRef}
          className="aspect-[3/4] bg-[#141010] border border-[#1a1a1a] relative overflow-hidden"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt || title}
              className="w-full h-full object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-xs text-[#333333] tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Editorial
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
