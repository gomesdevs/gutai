'use client';

import { useSyncExternalStore, useCallback } from 'react';
import type { CartItem, Product } from '@/types';

const STORAGE_KEY = 'gutai-cart';

function getCartFromStorage(): CartItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveCartToStorage(cart: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // storage full or unavailable
  }
}

let cart: CartItem[] = [];
let listeners: Array<() => void> = [];

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot() {
  return JSON.stringify(cart);
}

function getServerSnapshot() {
  return '[]';
}

// Initialize cart from localStorage on client
if (typeof window !== 'undefined') {
  cart = getCartFromStorage();
}

export function useCart() {
  const serializedCart = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const currentCart: CartItem[] = JSON.parse(serializedCart);

  const addItem = useCallback((product: Product, size?: string) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    if (existingIndex >= 0) {
      // Luxo: quantidade fixa em 1 por peça
      return;
    }

    cart = [...cart, { product, quantity: 1, size }];
    saveCartToStorage(cart);
    emitChange();
  }, []);

  const removeItem = useCallback((productId: string, size?: string) => {
    cart = cart.filter(
      (item) => !(item.product.id === productId && item.size === size)
    );
    saveCartToStorage(cart);
    emitChange();
  }, []);

  const clearCart = useCallback(() => {
    cart = [];
    saveCartToStorage(cart);
    emitChange();
  }, []);

  const totalItems = currentCart.length;
  const subtotal = currentCart.reduce((sum, item) => sum + item.product.price, 0);

  return {
    items: currentCart,
    addItem,
    removeItem,
    clearCart,
    totalItems,
    subtotal,
  };
}
