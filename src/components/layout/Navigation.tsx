'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/drop/cofre-digital-01', label: 'Drop Ativo' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

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
    </>
  );
}
