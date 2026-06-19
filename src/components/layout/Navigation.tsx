'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';
import { CartDrawer } from '@/components/cart/CartDrawer';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/drop/cofre-digital-01', label: 'Drop Ativo' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      {/* Hamburger button — fixo canto superior esquerdo */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed top-6 left-6 z-50 flex flex-col gap-1.5 p-2',
          'mix-blend-difference'
        )}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <span
          className={cn(
            'block w-6 h-0.5 bg-[#e8e8e8] transition-all duration-300',
            isOpen && 'rotate-45 translate-y-2'
          )}
        />
        <span
          className={cn(
            'block w-6 h-0.5 bg-[#e8e8e8] transition-all duration-300',
            isOpen && 'opacity-0'
          )}
        />
        <span
          className={cn(
            'block w-6 h-0.5 bg-[#e8e8e8] transition-all duration-300',
            isOpen && '-rotate-45 -translate-y-2'
          )}
        />
      </button>

      {/* Cart button — fixo canto superior direito */}
      <button
        onClick={() => setIsCartOpen(true)}
        className={cn(
          'fixed top-6 right-6 z-50 p-2',
          'mix-blend-difference'
        )}
        aria-label="Abrir carrinho"
      >
        <div className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#e8e8e8]"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {totalItems > 0 && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 bg-[#c0c0c0] text-[#0a0a0a] text-[10px] font-bold flex items-center justify-center"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {/* Overlay full-screen */}
      <nav
        className={cn(
          'fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center',
          'transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                'text-4xl md:text-6xl font-bold tracking-tighter text-[#e8e8e8]',
                'hover:text-[#c0c0c0] transition-colors duration-200'
              )}
              style={{ fontFamily: 'var(--font-gothic)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Marca no canto inferior */}
        <p
          className="absolute bottom-8 text-xs text-[#666666] tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          GUTAI &copy; 2025
        </p>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
