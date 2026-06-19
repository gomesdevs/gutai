import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { HeroManifesto } from '@/components/home/HeroManifesto';
import { EditorialSection } from '@/components/home/EditorialSection';
import { DropPreview } from '@/components/home/DropPreview';
import { BrandsStrip } from '@/components/home/BrandsStrip';
import { ScrollProgress } from '@/components/home/ScrollProgress';
import { drops } from '@/lib/products';

export default function Home() {
  const activeDrop = drops[0];

  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />
      <ScrollProgress />
      <Navigation />

      {/* 1. Hero / Manifesto — tela cheia */}
      <HeroManifesto />

      {/* 2. Editorial strip — parallax */}
      <EditorialSection
        label="Manifesto"
        title="Peso é Conceito."
        description="Cada fibra carrega intenção. Cada costura é uma sentença. Não vestimos — declaramos."
      />

      {/* 3. Drop Preview — narrativa + peças */}
      <DropPreview drop={activeDrop} />

      {/* 4. Marcas — strip tipográfica */}
      <BrandsStrip />

      {/* 5. Editorial strip 2 */}
      <EditorialSection
        label="Filosofia"
        title="Contra o Ordinário."
        description="GUTAI não é moda. É resistência. Cada artefato é um documento vivo contra o descartável."
      />

      <Footer />
    </div>
  );
}
