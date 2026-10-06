"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

// A rotating "neural network" sphere: nodes on a Fibonacci sphere, linked to near neighbours.
function Network({ color, reduce }: { color: string; reduce: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const { positions, lines } = useMemo(() => {
    const n = 70;
    const pts: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      pts.push(new THREE.Vector3(Math.cos(t) * r, y, Math.sin(t) * r).multiplyScalar(1.6));
    }
    const seg: number[] = [];
    for (let i = 0; i < n; i++)
      for (let j = i + 1; j < n; j++)
        if (pts[i].distanceTo(pts[j]) < 0.85) seg.push(...pts[i].toArray(), ...pts[j].toArray());
    return {
      positions: new Float32Array(pts.flatMap((p) => p.toArray())),
      lines: new Float32Array(seg),
    };
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g || reduce) return;
    g.rotation.y += dt * 0.15;
    g.rotation.x += (pointer.current.y * 0.4 - g.rotation.x) * Math.min(1, dt * 2);
    g.position.x += (pointer.current.x * 0.3 - g.position.x) * Math.min(1, dt * 2);
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={color} size={0.07} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.28} />
      </lineSegments>
      <mesh>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const [color, setColor] = useState("#c8ff5a");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const read = () =>
      setColor(getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#c8ff5a");
    read();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dark = window.matchMedia("(prefers-color-scheme: light)");
    setReduce(mq.matches);
    const onMotion = () => setReduce(mq.matches);
    mq.addEventListener("change", onMotion);
    dark.addEventListener("change", read);
    return () => {
      mq.removeEventListener("change", onMotion);
      dark.removeEventListener("change", read);
    };
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      frameloop={reduce ? "demand" : "always"}
      gl={{ antialias: true, alpha: true }}
    >
      <Network color={color} reduce={reduce} />
    </Canvas>
  );
}
