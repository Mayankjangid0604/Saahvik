'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center, Float, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#c9a66c';
const GOLD_DEEP = '#8c6a3f';

/** The gold "S" monogram, slowly rotating. */
function MonogramS() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.25;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0} floatIntensity={0.5}>
        <Center>
          <Text3D
            font="/fonts/gentilis_bold.typeface.json"
            size={2.1}
            height={0.45}
            curveSegments={16}
            bevelEnabled
            bevelThickness={0.06}
            bevelSize={0.05}
            bevelSegments={4}
          >
            S
            <meshStandardMaterial
              color="#dcbd85"
              metalness={0.8}
              roughness={0.25}
              emissive={GOLD_DEEP}
              emissiveIntensity={0.22}
            />
          </Text3D>
        </Center>
        {/* thin gold ring framing the monogram */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.1, 0.022, 16, 96]} />
          <meshStandardMaterial color={GOLD} metalness={0.9} roughness={0.3} />
        </mesh>
      </Float>
    </group>
  );
}

/** Subtle gold-dust particle field. */
function GoldDust({ count = 350 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={GOLD}
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.65}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 42 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 5]} intensity={1.9} color="#ffe9c4" />
      <pointLight position={[-6, -3, 4]} intensity={0.5} color={GOLD} />
      <group position={[2.4, 0, 0]}>
        <MonogramS />
      </group>
      <GoldDust />
    </Canvas>
  );
}
