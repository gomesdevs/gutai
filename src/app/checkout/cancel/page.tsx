import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Pagamento Cancelado — GUTAI',
};

export default function CheckoutCancelPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <p
          className="text-xs tracking-[0.3em] text-[#666666] uppercase mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          PAGAMENTO CANCELADO
        </p>

        <h1
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-8"
          style={{ fontFamily: 'var(--font-gothic)' }}
        >
          O COFRE PERMANECE
        </h1>

        <p
          className="text-lg text-[#8a8a8a] max-w-md mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Nada foi perdido. Os artefatos esperam.
        </p>

        <div className="flex gap-4">
          <Button href="/">Voltar ao Início</Button>
          <Button variant="ghost" href="/drop/cofre-digital-01">
            Explorar o Drop
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
