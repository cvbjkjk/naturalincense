"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchInertiaMultiplier: 2,
    });

    lenisRef.current = lenis;

    function onFrame(time: number) {
      lenis.raf(time);
      requestAnimationFrame(onFrame);
    }

    requestAnimationFrame(onFrame);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
