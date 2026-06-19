import { notFound } from 'next/navigation';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Badge } from '@/components/ui/Badge';
import { ProductCard } from '@/components/product/ProductCard';
import { getDropBySlug, drops } from '@/lib/products';
import type { Metadata } from 'next';

interface DropPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return drops.map((drop) => ({ slug: drop.slug }));
}

export async function generateMetadata({ params }: DropPageProps): Promise<Metadata> {
  const { slug } = await params;
  const drop = getDropBySlug(slug);
  if (!drop) return {};

  return {
    title: `${drop.name} — GUTAI`,
    description: drop.description,
  };
}

export default async function DropPage({ params }: DropPageProps) {
  const { slug } = await params;
  const drop = getDropBySlug(slug);

  if (!drop) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />
      <Navigation />

      {/* Header editorial do drop */}
      <section className="pt-32 pb-16 px-8">
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

          <h1
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            {drop.name}
          </h1>

          <p
            className="text-lg text-[#8a8a8a] max-w-2xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {drop.description}
          </p>
        </div>
      </section>

      {/* Listagem editorial — layout assimétrico */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {drop.products.map((product, index) => (
              <div
                key={product.id}
                className={index % 3 === 0 ? 'md:col-span-2' : ''}
              >
                <ProductCard
                  product={product}
                  featured={index % 3 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
