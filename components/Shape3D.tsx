"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type ShapeVariant = "knot" | "rings" | "cluster";

function usePointer() {
  const p = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      p.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      p.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return p;
}

function Knot({ color, reduce }: { color: string; reduce: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const pointer = usePointer();
  useFrame((_, dt) => {
    const m = ref.current;
    if (!m || reduce) return;
    m.rotation.x += dt * 0.2;
    m.rotation.y += dt * 0.3 + (pointer.current.x - 0) * dt * 0.4;
    m.position.y += (-pointer.current.y * 0.3 - m.position.y) * Math.min(1, dt * 2);
  });
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.1, 0.32, 160, 20, 2, 3]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
    </mesh>
  );
}

// Gyroscope: three rings spinning on different axes.
function Rings({ color, reduce }: { color: string; reduce: boolean }) {
  const refs = [useRef<THREE.Mesh>(null), useRef<THREE.Mesh>(null), useRef<THREE.Mesh>(null)];
  const pointer = usePointer();
  useFrame((_, dt) => {
    if (reduce) return;
    refs.forEach((r, i) => {
      if (!r.current) return;
      const s = 0.25 + i * 0.12;
      r.current.rotation.x += dt * s * (i % 2 ? 1 : -1);
      r.current.rotation.y += dt * s * 0.7 + pointer.current.x * dt * 0.2;
    });
  });
  return (
    <>
      {[1.9, 1.4, 0.9].map((r, i) => (
        <mesh key={r} ref={refs[i]} rotation={[i, i * 0.8, 0]}>
          <torusGeometry args={[r, 0.025, 12, 120]} />
          <meshBasicMaterial color={color} transparent opacity={0.8 - i * 0.15} />
        </mesh>
      ))}
    </>
  );
}

// Drifting polyhedra.
const SHAPES = [
  { pos: [-2.2, 1.0, 0], geo: "ico", s: 0.7 },
  { pos: [2.0, -0.8, -1], geo: "oct", s: 0.8 },
  { pos: [0.4, 1.6, -2], geo: "tet", s: 0.6 },
  { pos: [-1.0, -1.5, -1], geo: "box", s: 0.55 },
  { pos: [2.6, 1.4, -2], geo: "ico", s: 0.4 },
] as const;

function Cluster({ color, reduce }: { color: string; reduce: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = usePointer();
  useFrame(({ clock }, dt) => {
    const g = group.current;
    if (!g || reduce) return;
    const t = clock.elapsedTime;
    g.children.forEach((c, i) => {
      c.rotation.x += dt * (0.2 + i * 0.05);
      c.rotation.y += dt * (0.3 + i * 0.04);
      c.position.y = SHAPES[i].pos[1] + Math.sin(t * 0.6 + i) * 0.25;
    });
    g.rotation.y += (pointer.current.x * 0.3 - g.rotation.y) * Math.min(1, dt * 2);
    g.rotation.x += (pointer.current.y * 0.2 - g.rotation.x) * Math.min(1, dt * 2);
  });
  return (
    <group ref={group}>
      {SHAPES.map((s, i) => (
        <mesh key={i} position={[...s.pos]} scale={s.s}>
          {s.geo === "ico" && <icosahedronGeometry args={[1, 0]} />}
          {s.geo === "oct" && <octahedronGeometry args={[1, 0]} />}
          {s.geo === "tet" && <tetrahedronGeometry args={[1, 0]} />}
          {s.geo === "box" && <boxGeometry args={[1.2, 1.2, 1.2]} />}
          <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function Shape3D({ variant }: { variant: ShapeVariant }) {
  const [color, setColor] = useState("#c8ff5a");
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const read = () =>
      setColor(getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#c8ff5a");
    read();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const light = window.matchMedia("(prefers-color-scheme: light)");
    const onMotion = () => setReduce(mq.matches);
    onMotion();
    mq.addEventListener("change", onMotion);
    light.addEventListener("change", read);
    return () => {
      mq.removeEventListener("change", onMotion);
      light.removeEventListener("change", read);
    };
  }, []);

  const Scene = variant === "knot" ? Knot : variant === "rings" ? Rings : Cluster;
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      frameloop={reduce ? "demand" : "always"}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene color={color} reduce={reduce} />
    </Canvas>
  );
}
