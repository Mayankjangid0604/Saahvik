'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Monogram from './Monogram';

// WebGL bundle only loads when we actually render the canvas.
const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

/**
 * Decides between the R3F hero scene and a static monogram fallback:
 * reduced-motion users, save-data connections, and small screens get
 * the lightweight SVG instead of WebGL.
 */
export default function HeroVisual() {
  const [mode, setMode] = useState<'pending' | '3d' | 'static'>('pending');

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const smallScreen = window.matchMedia('(max-width: 760px)').matches;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saveData = connection?.saveData === true;
    setMode(reducedMotion || smallScreen || saveData ? 'static' : '3d');
  }, []);

  if (mode === '3d') {
    return (
      <div className="hero__canvas" aria-hidden="true">
        <Hero3D />
      </div>
    );
  }

  // Static fallback (also shown pre-hydration so there's never a blank flash).
  return (
    <div className="hero__fallback" aria-hidden="true">
      <Monogram size={280} transparent gold="rgba(201,166,108,0.85)" />
    </div>
  );
}
