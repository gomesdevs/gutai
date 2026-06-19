'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/Button';
import { SizeSelector } from '@/components/product/SizeSelector';
import type { Product } from '@/types';

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes.length === 1 ? product.sizes[0] : undefined
  );
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-4">
      <SizeSelector
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSelect={setSelectedSize}
      />
      <Button
        onClick={handleAdd}
        className="w-full md:w-auto"
        disabled={product.sizes.length > 1 && !selectedSize}
      >
        {added ? 'Adicionado' : 'Adicionar ao Cofre'}
      </Button>
    </div>
  );
}
