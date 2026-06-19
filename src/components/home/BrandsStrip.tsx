const brands = [
  'Balenciaga',
  'Chrome Hearts',
  'Rick Owens',
  'Maison Margiela',
  'Maison Margiela',
] as const;

export function BrandsStrip() {
  return (
    <section className="py-24 overflow-hidden border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <p
          className="text-xs tracking-[0.3em] text-[#666666] uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          MARCAS
        </p>
      </div>

      {/* Strip horizontal tipográfica */}
      <div className="flex items-center gap-12 whitespace-nowrap px-8">
        {brands.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-[#1a1a1a] hover:text-[#8a8a8a] transition-colors duration-500 cursor-default select-none"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
