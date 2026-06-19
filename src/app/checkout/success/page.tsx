import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Pedido Confirmado — GUTAI',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />

      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
        <p
          className="text-xs tracking-[0.3em] text-[#666666] uppercase mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          PAGAMENTO CONFIRMADO
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          style={{ fontFamily: 'var(--font-gothic)' }}
        >
          ARTEFATO SECURED
        </h1>

        <p
          className="text-lg text-[#8a8a8a] max-w-md mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Welcome to the club.
        </p>

        <p
          className="text-sm text-[#666666] max-w-sm mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Seu pedido foi registrado. Nenhum pacote foi enviado — este é um portfólio.
        </p>

        <div className="flex gap-4">
          <Button href="/">Voltar ao Início</Button>
          <Button variant="ghost" href="/drop/cofre-digital-01">
            Ver o Drop
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
