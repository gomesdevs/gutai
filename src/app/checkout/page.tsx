'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/ui/NoiseOverlay';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/hooks/useCart';

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsProcessing(true);
    // Simula processamento e redireciona para success
    setTimeout(() => {
      clearCart();
      window.location.href = '/checkout/success';
    }, 1500);
  }

  if (items.length === 0 && !isProcessing) {
    return (
      <div className="flex flex-col min-h-screen">
        <NoiseOverlay />
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
          <p
            className="text-lg text-[#666666] mb-4"
            style={{ fontFamily: 'var(--font-gothic)' }}
          >
            Nenhum artefato selecionado.
          </p>
          <Link
            href="/"
            className="text-xs text-[#8a8a8a] hover:text-[#c0c0c0] transition-colors uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            &larr; Voltar ao cofre
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NoiseOverlay />
      <Navigation />

      <div className="flex-1 py-24 px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Coluna esquerda — Resumo do pedido */}
          <div>
            <h1
              className="text-3xl font-bold tracking-tighter mb-8"
              style={{ fontFamily: 'var(--font-gothic)' }}
            >
              RESUMO DO PEDIDO
            </h1>

            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-[#1a1a1a]"
                >
                  <div className="w-16 h-20 bg-[#141010] border border-[#1a1a1a] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs text-[#8a8a8a] uppercase tracking-widest mb-1"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {item.product.brand}
                    </p>
                    <p
                      className="text-sm text-[#e8e8e8] truncate"
                      style={{ fontFamily: 'var(--font-gothic)' }}
                    >
                      {item.product.name}
                    </p>
                    {item.size && (
                      <p
                        className="text-xs text-[#666666] mt-1"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        TAM: {item.size}
                      </p>
                    )}
                  </div>
                  <p
                    className="text-sm text-[#c0c0c0] shrink-0"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {item.product.price} EUR
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-baseline mt-8 pt-6 border-t border-[#1a1a1a]">
              <span
                className="text-xs text-[#666666] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Total
              </span>
              <span
                className="text-2xl font-bold text-[#c0c0c0]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {subtotal} EUR
              </span>
            </div>
          </div>

          {/* Coluna direita — Formulário de pagamento */}
          <div>
            <h2
              className="text-sm tracking-[0.3em] text-[#666666] uppercase mb-8"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              PAGAMENTO
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  className="block text-xs text-[#666666] uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  NOME COMPLETO
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#8a8a8a] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-xs text-[#666666] uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#8a8a8a] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  placeholder="seu@email.com"
                />
              </div>

              {/* Número do cartão */}
              <div>
                <label
                  className="block text-xs text-[#666666] uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  NÚMERO DO CARTÃO
                </label>
                <input
                  type="text"
                  required
                  maxLength={19}
                  className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#8a8a8a] focus:outline-none transition-colors"
                  style={{ fontFamily: 'var(--font-mono)' }}
                  placeholder="4242 4242 4242 4242"
                />
              </div>

              {/* Validade + CVC */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-xs text-[#666666] uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    VALIDADE
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#8a8a8a] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-mono)' }}
                    placeholder="MM/AA"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-[#666666] uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={4}
                    className="w-full bg-transparent border border-[#1a1a1a] px-4 py-3 text-sm text-[#e8e8e8] focus:border-[#8a8a8a] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-mono)' }}
                    placeholder="123"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full mt-8"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processando...' : 'Confirmar Pagamento'}
              </Button>

              <p
                className="text-xs text-[#333333] text-center mt-4"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Pagamento simulado — nenhum valor será cobrado.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
