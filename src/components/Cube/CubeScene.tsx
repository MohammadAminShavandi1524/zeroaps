// components/Cube/CubeScene.tsx

"use client";

import { Canvas, useFrame } from "@react-three/fiber";

import { ContactShadows, Environment, Lightformer } from "@react-three/drei";

import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

import { useEffect, useMemo, useRef } from "react";

import * as THREE from "three";

import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

import { useReducedMotion } from "./useReducedMotion";

type CubeSceneProps = {
  autoRotate?: boolean;
  autoTwist?: boolean;
  interactive?: boolean;
};

type Axis = "x" | "y" | "z";

type MoveSpec = {
  axis: Axis;
  layer: number;
  direction: 1 | -1;
};

const MOVE_SEQUENCE: MoveSpec[] = [
  {
    axis: "y",
    layer: 1,
    direction: 1,
  },
  {
    axis: "x",
    layer: -1,
    direction: -1,
  },
  {
    axis: "z",
    layer: 1,
    direction: 1,
  },
  {
    axis: "y",
    layer: 0,
    direction: -1,
  },
];

const CUBIE_SIZE = 0.8;

const GAP = 0.08;

const STEP = CUBIE_SIZE + GAP;

function Cubie({ mesh }: { mesh: THREE.Mesh }) {
  return <primitive object={mesh} />;
}

function CubeModel({
  autoRotate = true,
  autoTwist = true,
  interactive = true,
}: CubeSceneProps) {
  const groupRef = useRef<THREE.Group | null>(null);

  const pivotRef = useRef<THREE.Group | null>(null);

  const reducedMotion = useReducedMotion();

  const cubies = useRef<
    {
      mesh: THREE.Mesh;
      position: THREE.Vector3;
    }[]
  >([]);

  const moveIndex = useRef(0);

  const rotating = useRef(false);

  const progress = useRef(0);

  const currentMove = useRef<MoveSpec | null>(null);

  const dragging = useRef(false);

  const previous = useRef({
    x: 0,
    y: 0,
  });

  const accent =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#9100a7"
      : "#9100a7";

  const geometry = useMemo(
    () => new RoundedBoxGeometry(CUBIE_SIZE, CUBIE_SIZE, CUBIE_SIZE, 6, 0.08),
    [],
  );

  useEffect(() => {
    if (!groupRef.current) return;

    const positions = [-STEP, 0, STEP];

    positions.forEach((x) => {
      positions.forEach((y) => {
        positions.forEach((z) => {
          const material = new THREE.MeshPhysicalMaterial({
            color: "#101014",

            // حفظ ظاهر فلزی، با بازتاب کنترل‌شده‌تر
            metalness: 0.85,
            roughness: 0.34,

            // کاهش بازتاب‌های براق و دایره‌ای
            clearcoat: 0.2,
            clearcoatRoughness: 0.3,

            // کاهش شدت بازتاب محیط
            envMapIntensity: 0.45,
          });

          const mesh = new THREE.Mesh(geometry, material);

          mesh.position.set(x, y, z);

          mesh.castShadow = true;

          mesh.receiveShadow = true;

          const edge = new THREE.LineSegments(
            new THREE.EdgesGeometry(geometry),
            new THREE.LineBasicMaterial({
              color: accent,
              transparent: true,
              opacity: 0.05,
            }),
          );

          mesh.add(edge);

          groupRef.current?.add(mesh);

          cubies.current.push({
            mesh,
            position: new THREE.Vector3(x, y, z),
          });
        });
      });
    });

    return () => {
      cubies.current.forEach(({ mesh }) => {
        mesh.geometry.dispose();

        (mesh.material as THREE.Material).dispose();
      });
    };
  }, [accent, geometry]); // components/Cube/CubeScene.tsx

  const startTwist = () => {
    if (rotating.current || !autoTwist || !pivotRef.current) return;

    const move = MOVE_SEQUENCE[moveIndex.current % MOVE_SEQUENCE.length];

    currentMove.current = move;

    const selected = cubies.current.filter(
      (item) => Math.round(item.position[move.axis] / STEP) === move.layer,
    );

    selected.forEach((item) => {
      pivotRef.current?.attach(item.mesh);
    });

    progress.current = 0;

    rotating.current = true;

    moveIndex.current += 1;
  };

  useEffect(() => {
    if (!autoTwist) return;

    const timer = window.setInterval(startTwist, 2600);

    return () => {
      window.clearInterval(timer);
    };
  }, [autoTwist]);

  useEffect(() => {
    if (!interactive) return;

    const canvas = document.querySelector("canvas");

    if (!canvas) return;

    const down = (event: PointerEvent) => {
      dragging.current = true;

      previous.current = {
        x: event.clientX,
        y: event.clientY,
      };

      canvas.setPointerCapture(event.pointerId);
    };

    const move = (event: PointerEvent) => {
      if (!dragging.current) return;

      const deltaX = event.clientX - previous.current.x;

      const deltaY = event.clientY - previous.current.y;

      if (groupRef.current) {
        groupRef.current.rotation.y += deltaX * 0.008;

        groupRef.current.rotation.x += deltaY * 0.008;
      }

      previous.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const up = (event: PointerEvent) => {
      dragging.current = false;

      canvas.releasePointerCapture(event.pointerId);
    };

    canvas.addEventListener("pointerdown", down);

    canvas.addEventListener("pointermove", move);

    canvas.addEventListener("pointerup", up);

    canvas.addEventListener("pointercancel", up);

    return () => {
      canvas.removeEventListener("pointerdown", down);

      canvas.removeEventListener("pointermove", move);

      canvas.removeEventListener("pointerup", up);

      canvas.removeEventListener("pointercancel", up);
    };
  }, [interactive]);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    if (autoRotate && !dragging.current && !reducedMotion) {
      groupRef.current.rotation.y += delta * 0.25;
    }

    if (rotating.current && pivotRef.current && currentMove.current) {
      progress.current += delta * 2.8;

      const value = Math.min(progress.current, 1);

      const eased = 1 - Math.pow(1 - value, 3);

      pivotRef.current.rotation[currentMove.current.axis] =
        currentMove.current.direction * (Math.PI / 2) * eased;

      if (value >= 1) {
        pivotRef.current.rotation[currentMove.current.axis] =
          currentMove.current.direction * (Math.PI / 2);

        cubies.current.forEach((item) => {
          groupRef.current?.attach(item.mesh);

          item.position.set(
            Math.round(item.mesh.position.x / STEP) * STEP,

            Math.round(item.mesh.position.y / STEP) * STEP,

            Math.round(item.mesh.position.z / STEP) * STEP,
          );
        });

        pivotRef.current.rotation.set(0, 0, 0);

        rotating.current = false;
      }
    }
  });

  return (
    <>
      <group ref={groupRef} rotation={[0.35, -0.55, 0]}>
        <group ref={pivotRef} />

        {cubies.current.map((item, index) => (
          <Cubie key={index} mesh={item.mesh} />
        ))}
      </group>
    </>
  );
}

export default function CubeScene({
  autoRotate = true,
  autoTwist = true,
  interactive = true,
}: CubeSceneProps) {
  const accent =
    typeof window !== "undefined"
      ? getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#9100a7"
      : "#9100a7";

  return (
    <Canvas
      className="absolute inset-0"
      camera={{
        position: [4.65, 3.55, 6.5],
        fov: 33,
      }}
      dpr={[1, 1.75]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.15,
      }}
      shadows
    >
      <ambientLight intensity={0.7} />

      <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow />

      <pointLight position={[-4, -2, 5]} color={accent} intensity={1.8} />

      <CubeModel
        autoRotate={autoRotate}
        autoTwist={autoTwist}
        interactive={interactive}
      />

      <Environment>
        <Lightformer intensity={2} position={[0, 5, -5]} scale={[5, 5, 1]} />

        <Lightformer
          intensity={1.5}
          position={[-5, 1, 2]}
          scale={[2, 2, 2]}
          color={accent}
        />
      </Environment>

      <ContactShadows
        position={[0, -1.9, 0]}
        opacity={0.45}
        scale={7}
        blur={2.5}
        far={5}
      />

      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.25}
          luminanceSmoothing={0.8}
          mipmapBlur
        />

        <Vignette eskil={false} offset={0.35} darkness={0.55} />
      </EffectComposer>
    </Canvas>
  );
}
