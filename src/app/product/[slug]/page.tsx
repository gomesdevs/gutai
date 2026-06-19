import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Badge } from '@/components/ui/Badge';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductSpecs } from '@/components/product/ProductSpecs';
import { AddToCart } from '@/components/product/AddToCart';
import { getProductBySlug, products } from '@/lib/products';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — GUTAI`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />
      <Navigation />

      {/* Breadcrumb / link de retorno */}
      <div className="pt-24 pb-4 px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href={`/drop/${product.drop}`}
            className="inline-flex items-center gap-2 text-xs text-[#8a8a8a] hover:text-[#c0c0c0] transition-colors uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span>&larr;</span>
            <span>Drop COFRE DIGITAL</span>
          </Link>
        </div>
      </div>

      {/* PDP Editorial */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Coluna esquerda — Gallery */}
          <ProductGallery images={product.images} />

          {/* Coluna direita — Info */}
          <div className="flex flex-col gap-8">
            {/* Badge + Marca */}
            <div className="flex items-center gap-4">
              <Badge>{product.category}</Badge>
              <span
                className="text-xs text-[#666666] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {product.brand}
              </span>
            </div>

            {/* Título */}
            <div>
              <h1
                className="text-4xl md:text-5xl font-bold tracking-tighter mb-2"
                style={{ fontFamily: 'var(--font-gothic)' }}
              >
                {product.name}
              </h1>
              <p
                className="text-sm text-[#666666]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {product.functionalName}
              </p>
            </div>

            {/* Preço */}
            <p
              className="text-3xl font-bold text-[#c0c0c0]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {product.price} EUR
            </p>

            {/* Descrição */}
            <p
              className="text-base text-[#8a8a8a] leading-relaxed"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {product.description}
            </p>

            {/* Seletor de tamanho + Adicionar ao carrinho */}
            <AddToCart product={product} />

            {/* Specs */}
            <ProductSpecs product={product} />
          </div>
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
