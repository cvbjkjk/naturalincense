"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function AgarwoodPiece() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.DodecahedronGeometry(0.6, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setXYZ(
        i,
        pos.getX(i) + (Math.random() - 0.5) * 0.2,
        pos.getY(i) + (Math.random() - 0.5) * 0.2,
        pos.getZ(i) + (Math.random() - 0.5) * 0.2
      );
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} geometry={geometry} scale={1.2}>
        <meshStandardMaterial
          color="#3D2B1F"
          roughness={0.9}
          metalness={0.0}
          flatShading
        />
      </mesh>
    </Float>
  );
}

function SandalwoodLog() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(0.3, 0.4, 1.0, 12);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setXYZ(
        i,
        pos.getX(i) + (Math.random() - 0.5) * 0.05,
        pos.getY(i),
        pos.getZ(i) + (Math.random() - 0.5) * 0.05
      );
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.15}>
      <mesh ref={meshRef} geometry={geometry} rotation={[0.3, 0, 0.5]}>
        <meshStandardMaterial
          color="#C4A882"
          roughness={0.85}
          metalness={0.0}
          flatShading
        />
      </mesh>
    </Float>
  );
}

function ResinFragment() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.4, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setXYZ(
        i,
        pos.getX(i) + (Math.random() - 0.5) * 0.15,
        pos.getY(i) + (Math.random() - 0.5) * 0.15,
        pos.getZ(i) + (Math.random() - 0.5) * 0.15
      );
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <Float speed={1} rotationIntensity={0.4} floatIntensity={0.3}>
      <mesh ref={meshRef} geometry={geometry} scale={0.8}>
        <meshPhysicalMaterial
          color="#D4A76A"
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.85}
          clearcoat={0.3}
        />
      </mesh>
    </Float>
  );
}

const showcases = [
  {
    id: "agarwood",
    label: "Agarwood",
    color: "#3D2B1F",
    component: AgarwoodPiece,
    description: "Resin-infused heartwood — the most precious incense material",
  },
  {
    id: "sandalwood",
    label: "Sandalwood",
    color: "#C4A882",
    component: SandalwoodLog,
    description: "Aged heartwood — creamy, warm, meditative",
  },
  {
    id: "frankincense",
    label: "Frankincense",
    color: "#D4A76A",
    component: ResinFragment,
    description: "Resin tears — bright, citrusy, sacred",
  },
];

function ShowcaseScene({ activeIndex }: { activeIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  const ActiveComponent = showcases[activeIndex].component;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} />
      <pointLight position={[0, 2, 2]} intensity={0.3} color="#FFE4B5" />

      <group ref={groupRef}>
        <ActiveComponent />
      </group>

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={1.5}
        maxDistance={5}
        autoRotate
        autoRotateSpeed={0.8}
        enableDamping
        dampingFactor={0.05}
      />
    </>
  );
}

export default function ThreeDMaterials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative z-10 py-32 md:py-48 px-8 md:px-16 lg:px-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase font-sans text-wood/60 mb-4"
          >
            Interactive Archive
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal leading-[1.15] tracking-tight"
          >
            Material
            <br />
            <span className="italic text-wood">Explorer</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/5] bg-ivory-dark border border-sand/20 rounded-sm overflow-hidden"
          >
            <Canvas
              camera={{ position: [0, 0, 3], fov: 40 }}
              dpr={[1, 1.5]}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
            >
              <ShowcaseScene activeIndex={activeIndex} />
            </Canvas>

            {/* Instructions */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.2em] uppercase font-sans text-charcoal/30">
              Drag to rotate · Scroll to zoom
            </div>
          </motion.div>

          {/* Controls */}
          <div className="space-y-8">
            {showcases.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left group transition-all duration-500 ${
                  activeIndex === index ? "" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-center gap-4 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full transition-transform duration-500 ${
                      activeIndex === index ? "scale-125" : ""
                    }`}
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-xs tracking-[0.25em] uppercase font-sans text-charcoal/50">
                    Material 0{index + 1}
                  </span>
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-serif transition-colors duration-500 ${
                    activeIndex === index ? "text-charcoal" : "text-charcoal/40"
                  }`}
                >
                  {item.label}
                </h3>
                <p className="text-sm font-sans text-charcoal/50 mt-1">
                  {item.description}
                </p>

                {index < showcases.length - 1 && (
                  <div className="w-full h-[1px] bg-sand/30 mt-6" />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
