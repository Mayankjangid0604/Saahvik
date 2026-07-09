'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import LogoWordmark from './brand/LogoWordmark';

// WebGL bundle only loads when we actually render the canvas.
const Hero3D = dynamic(() => import('./Hero3D'), { ssr: false });

/**
 * Decides between the R3F hero scene and the static wordmark lockup:
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
      <LogoWordmark width={520} />
    </div>
  );
}
