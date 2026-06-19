'use client';

import { useState } from 'react';
import { useLenis } from 'lenis/react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useLenis((lenis) => {
    setProgress(lenis.progress);
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-[#1a1a1a]">
      <div
        className="h-full bg-[#c0c0c0] origin-left transition-none"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
