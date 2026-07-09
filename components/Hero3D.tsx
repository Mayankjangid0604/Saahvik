'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Float, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#c9a96e';
const GOLD_DEEP = '#8c6a3f';

/**
 * The extruded gold SAAHVIK wordmark — faces the viewer and leans
 * gently toward the cursor (dampened parallax), floating on a slow
 * breathing motion.
 */
function Wordmark() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -state.pointer.y * 0.16, 3, dt);
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, state.pointer.x * 0.28, 3, dt);
    g.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.09;
  });

  return (
    <group ref={group}>
      <Center>
        <Text3D
          font="/fonts/gentilis_bold.typeface.json"
          size={1.06}
          height={0.3}
          curveSegments={14}
          bevelEnabled
          bevelThickness={0.045}
          bevelSize={0.032}
          bevelSegments={4}
          letterSpacing={0.16}
        >
          SAAHVIK
          {/* polished brass — bright specular gold like the brand render.
              Metalness stays moderate: with no env-map, full metal goes dull. */}
          <meshStandardMaterial
            color="#f5d68e"
            metalness={0.65}
            roughness={0.22}
            emissive="#a4762f"
            emissiveIntensity={0.42}
          />
        </Text3D>
      </Center>
    </group>
  );
}

/** Faceted gold shards drifting around the wordmark. */
function Shards({ count = 9 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        pos: [
          Math.sin((i / count) * Math.PI * 2) * (4.6 + (i % 3) * 0.9),
          ((i % 5) - 2) * 0.85,
          -1.6 - (i % 4) * 0.9,
        ] as [number, number, number],
        scale: 0.07 + (i % 4) * 0.035,
        speed: 0.6 + (i % 3) * 0.35,
      })),
    [count],
  );

  return (
    <>
      {items.map((s, i) => (
        <Float key={i} speed={s.speed} rotationIntensity={2.2} floatIntensity={1.6}>
          <mesh position={s.pos} scale={s.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={GOLD}
              metalness={0.95}
              roughness={0.18}
              emissive={GOLD_DEEP}
              emissiveIntensity={0.35}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
}

/** Gold-dust particle field. */
function GoldDust({ count = 420 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 11;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 9 - 1;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.016;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={GOLD}
        size={0.032}
        sizeAttenuation
        transparent
        opacity={0.6}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.6], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      {/* warm key light, cool rim, gold under-glow */}
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 7, 6]} intensity={2.8} color="#fff0cf" />
      <directionalLight position={[-5, -2, 5]} intensity={0.9} color="#ffd98f" />
      <directionalLight position={[-6, 2, -4]} intensity={0.4} color="#7fa0c8" />
      <pointLight position={[0, -4, 3]} intensity={0.6} color={GOLD} />
      <group position={[0, 0.55, 0]}>
        <Wordmark />
      </group>
      <Shards />
      <GoldDust />
    </Canvas>
  );
}
