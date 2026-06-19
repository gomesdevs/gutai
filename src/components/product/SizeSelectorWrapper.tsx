'use client';

import { useState } from 'react';
import { SizeSelector } from './SizeSelector';

interface SizeSelectorWrapperProps {
  sizes: string[];
}

export function SizeSelectorWrapper({ sizes }: SizeSelectorWrapperProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  return (
    <SizeSelector
      sizes={sizes}
      selectedSize={selectedSize}
      onSelect={setSelectedSize}
    />
  );
}
