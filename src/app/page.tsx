import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { drops } from '@/lib/products';

export default function Home() {
  const activeDrop = drops[0];

  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />
      <Navigation />

      {/* Hero — Full-screen manifesto */}
      <section className="h-screen flex flex-col items-center justify-center relative px-8">
        <div className="max-w-4xl text-center">
          <h1
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            GUTAI
          </h1>
          <p
            className="text-xl md:text-2xl text-[#8a8a8a] tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Artefatos para quem entende peso.
          </p>
          <p
            className="text-lg md:text-xl text-[#666666] mt-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Se você sabe, você sabe.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-[#8a8a8a] animate-pulse" />
        </div>
      </section>

      {/* Brands — Editorial strip */}
      <section className="py-32 px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-sm tracking-[0.3em] text-[#666666] mb-16"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            MARCAS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Balenciaga', 'Chrome Hearts', 'Rick Owens', 'Maison Margiela'].map(
              (brand) => (
                <div key={brand} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-[#141010] border border-[#1a1a1a] mb-4 transition-all group-hover:border-[#8a8a8a] group-hover:shadow-[4px_4px_0_#8a8a8a]" />
                  <p
                    className="text-xs tracking-widest text-[#8a8a8a] uppercase"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {brand}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Current Drop — Event */}
      <section className="py-32 px-8 border-t border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Badge>DROP ATIVO</Badge>
            <span
              className="text-xs text-[#666666]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {activeDrop.launchDate}
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            {activeDrop.name}
          </h2>

          <p
            className="text-lg text-[#8a8a8a] max-w-2xl mb-16"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {activeDrop.description}
          </p>

          {/* Countdown placeholder */}
          <div className="flex gap-8 mb-16">
            {['00', '12', '34', '56'].map((value, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-6xl font-bold text-[#c0c0c0] mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {value}
                </div>
                <div className="text-xs text-[#666666] tracking-widest uppercase">
                  {['Dias', 'Horas', 'Min', 'Seg'][i]}
                </div>
              </div>
            ))}
          </div>

          <Button href={`/drop/${activeDrop.slug}`}>
            Entrar no Cofre
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
