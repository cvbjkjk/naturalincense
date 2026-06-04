"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function IncenseStick() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const ashRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (glowRef.current) {
      const glowScale = 1 + Math.sin(t * 2) * 0.1;
      glowRef.current.scale.set(glowScale, glowScale, glowScale);
    }
    if (ashRef.current) {
      ashRef.current.position.y = 1.35 + Math.sin(t * 0.5) * 0.01;
    }
  });

  return (
    <group>
      {/* Incense stick body */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2.8, 16]} />
        <meshStandardMaterial
          color="#5C4033"
          roughness={0.9}
          metalness={0.0}
        />
      </mesh>

      {/* Ash at top */}
      <mesh ref={ashRef} position={[0, 1.36, 0]}>
        <cylinderGeometry args={[0.022, 0.025, 0.04, 16]} />
        <meshStandardMaterial
          color="#8B8378"
          roughness={1}
          metalness={0}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Glowing tip */}
      <mesh ref={glowRef} position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.015, 8, 8]} />
        <meshBasicMaterial color="#FF6B35" />
      </mesh>

      {/* Glow aura */}
      <pointLight position={[0, 1.4, 0]} intensity={0.3} distance={0.5} color="#FF6B35" />
    </group>
  );
}

function SmokeParticles({ count = 80 }) {
  const pointsRef = useRef<THREE.Points>(null);
  const clockRef = useRef(0);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.01 + Math.random() * 0.08;
      const heightOffset = (Math.random() - 0.5) * 0.2;

      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 1.4 + heightOffset;
      pos[i * 3 + 2] = Math.sin(angle) * radius;

      vel[i * 3] = (Math.random() - 0.5) * 0.002;
      vel[i * 3 + 1] = 0.002 + Math.random() * 0.005;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
    }

    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const delta = state.clock.getDelta();
    clockRef.current += delta;

    const pos = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      const drift = Math.sin(clockRef.current * 0.3 + i * 0.5) * 0.001;
      pos[i * 3] += velocities[i * 3] + drift;
      pos[i * 3 + 1] += velocities[i * 3 + 1] * delta * 30;
      pos[i * 3 + 2] += velocities[i * 3 + 2] + drift;

      // Reset particle when it goes too high
      if (pos[i * 3 + 1] > 3.0) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.01 + Math.random() * 0.05;
        pos[i * 3] = Math.cos(angle) * radius;
        pos[i * 3 + 1] = 1.4;
        pos[i * 3 + 2] = Math.sin(angle) * radius;
      }

      // Gentle horizontal spread
      pos[i * 3] += Math.sin(clockRef.current * 0.2 + i) * 0.0001;
      pos[i * 3 + 2] += Math.cos(clockRef.current * 0.2 + i * 0.7) * 0.0001;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#D8CBB8"
        size={0.03}
        transparent
        opacity={0.25}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function AmbientParticles({ count = 120 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 1.5 + Math.random() * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = Math.random() * 4 - 1;
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position
      .array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(state.clock.getElapsedTime() * 0.05 + i) * 0.0003;
      pos[i * 3] += Math.sin(state.clock.getElapsedTime() * 0.03 + i * 0.5) * 0.0002;
      pos[i * 3 + 2] += Math.cos(state.clock.getElapsedTime() * 0.04 + i * 0.3) * 0.0002;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C4B8A4"
        size={0.008}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 30 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <directionalLight position={[-5, -5, -5]} intensity={0.1} />

      <Float speed={0.5} rotationIntensity={0.02} floatIntensity={0.1}>
        <IncenseStick />
      </Float>

      <SmokeParticles count={80} />
      <AmbientParticles count={120} />
    </Canvas>
  );
}

export default Scene;
