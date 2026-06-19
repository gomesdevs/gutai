'use client';

import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, subtotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/60 transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-[#0a0a0a] border-l border-[#1a1a1a]',
          'flex flex-col transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]">
          <h2
            className="text-sm tracking-[0.3em] text-[#c0c0c0] uppercase"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            COFRE
          </h2>
          <button
            onClick={onClose}
            className="text-[#8a8a8a] hover:text-[#c0c0c0] transition-colors text-lg"
            aria-label="Fechar carrinho"
          >
            &times;
          </button>
        </div>

        {/* Itens */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p
                className="text-lg text-[#666666] mb-2"
                style={{ fontFamily: 'var(--font-gothic)' }}
              >
                O cofre está vazio.
              </p>
              <p
                className="text-xs text-[#333333]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                O peso espera.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-[#1a1a1a]"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-24 bg-[#141010] border border-[#1a1a1a] shrink-0" />

                  {/* Info */}
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
                    <div className="flex items-center justify-between mt-3">
                      <p
                        className="text-sm text-[#c0c0c0]"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        {item.product.price} EUR
                      </p>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-xs text-[#666666] hover:text-[#c0c0c0] transition-colors uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer — subtotal + CTA */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#1a1a1a] space-y-4">
            <div className="flex justify-between items-baseline">
              <span
                className="text-xs text-[#666666] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Subtotal
              </span>
              <span
                className="text-xl font-bold text-[#c0c0c0]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {subtotal} EUR
              </span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className={cn(
                'w-full inline-flex items-center justify-center',
                'bg-[#c0c0c0] text-[#0a0a0a] border-4 border-[#c0c0c0]',
                'px-6 py-3 font-mono font-bold text-xs uppercase tracking-[0.1em]',
                'transition-all duration-200',
                'hover:bg-[#0a0a0a] hover:text-[#c0c0c0] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0_#c0c0c0]'
              )}
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
