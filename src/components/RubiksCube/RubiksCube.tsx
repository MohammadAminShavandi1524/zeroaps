"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RubiksCube() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const rootStyles = getComputedStyle(document.documentElement);

    const getColor = (variable: string, fallback: string) => {
      return rootStyles.getPropertyValue(variable).trim() || fallback;
    };

    const heading = getColor("--heading", "#ffffff");
    const accent = getColor("--accent", "#8fa6f7");
    const accentStrong = getColor("--accent-strong", "#8086ff");
    const cubeBody = getColor("--cube-body", "#151515");
    const cubeEdge = getColor("--cube-edge", "#8fa6f7");

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );

    camera.position.set(0, 0, 8.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(container.clientWidth, container.clientHeight);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(heading, 0.85);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(heading, 1.8);
    directionalLight.position.set(6, 9, 7);
    scene.add(directionalLight);

    const accentDirectionalLight = new THREE.DirectionalLight(accent, 1.2);
    accentDirectionalLight.position.set(-6, -4, -5);
    scene.add(accentDirectionalLight);

    const pointLight = new THREE.PointLight(accentStrong, 2.5, 25);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const cubeGroup = new THREE.Group();

    cubeGroup.rotation.x = 0.35;
    cubeGroup.rotation.y = -0.55;

    scene.add(cubeGroup);

    const pivot = new THREE.Group();
    cubeGroup.add(pivot);

    const cubies: THREE.Mesh[] = [];

    const spacing = 1.05;
    const coordinates = [-spacing, 0, spacing];

    const boxGeometry = new THREE.BoxGeometry(0.96, 0.96, 0.96);

    const edgesGeometry = new THREE.EdgesGeometry(boxGeometry);

    const cubieMaterial = new THREE.MeshStandardMaterial({
      color: cubeBody,
      metalness: 0.9,
      roughness: 0.2,
    });

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: cubeEdge,
      transparent: true,
      opacity: 0.4,
    });

    coordinates.forEach((x) => {
      coordinates.forEach((y) => {
        coordinates.forEach((z) => {
          const cubie = new THREE.Mesh(boxGeometry, cubieMaterial.clone());

          cubie.position.set(x, y, z);

          const edges = new THREE.LineSegments(edgesGeometry, edgeMaterial);

          cubie.add(edges);

          cubeGroup.add(cubie);
          cubies.push(cubie);
        });
      });
    });

    let isRotating = false;
    let rotationProgress = 0;

    let currentAxis: "x" | "y" | "z" = "y";
    let currentTargetAngle = 0;

    let currentSliceCubies: THREE.Mesh[] = [];

    const triggerRandomSliceTurn = () => {
      if (isRotating) return;

      const axes: Array<"x" | "y" | "z"> = ["x", "y", "z"];

      currentAxis = axes[Math.floor(Math.random() * axes.length)];

      const sliceCoordinate =
        coordinates[Math.floor(Math.random() * coordinates.length)];

      currentTargetAngle = (Math.random() > 0.5 ? 1 : -1) * (Math.PI / 2);

      currentSliceCubies = cubies.filter((cubie) => {
        return Math.abs(cubie.position[currentAxis] - sliceCoordinate) < 0.45;
      });

      if (!currentSliceCubies.length) return;

      pivot.rotation.set(0, 0, 0);
      pivot.position.set(0, 0, 0);

      currentSliceCubies.forEach((cubie) => {
        pivot.attach(cubie);
      });

      rotationProgress = 0;
      isRotating = true;
    };

    const sliceInterval = window.setInterval(triggerRandomSliceTurn, 2500);

    let isDragging = false;

    let previousPointer = {
      x: 0,
      y: 0,
    };

    const getPointerPosition = (event: MouseEvent | TouchEvent) => {
      if ("touches" in event && event.touches.length) {
        return {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }

      const mouseEvent = event as MouseEvent;

      return {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      };
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      isDragging = true;

      previousPointer = getPointerPosition(event);

      container.classList.remove("cursor-grab");
      container.classList.add("cursor-grabbing");
    };

    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const pointer = getPointerPosition(event);

      const deltaX = pointer.x - previousPointer.x;
      const deltaY = pointer.y - previousPointer.y;

      cubeGroup.rotation.y += deltaX * 0.008;
      cubeGroup.rotation.x += deltaY * 0.008;

      previousPointer = pointer;
    };

    const handlePointerUp = () => {
      isDragging = false;

      container.classList.remove("cursor-grabbing");
      container.classList.add("cursor-grab");
    };

    container.addEventListener("mousedown", handlePointerDown);

    window.addEventListener("mousemove", handlePointerMove);

    window.addEventListener("mouseup", handlePointerUp);

    container.addEventListener("touchstart", handlePointerDown, {
      passive: true,
    });

    window.addEventListener("touchmove", handlePointerMove, {
      passive: true,
    });

    window.addEventListener("touchend", handlePointerUp);

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();

    let animationFrame = 0;

    const animate = () => {
      animationFrame = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!isDragging) {
        cubeGroup.rotation.y += 0.003;

        cubeGroup.rotation.x += Math.sin(elapsed * 0.5) * 0.0006;
      }

      if (isRotating) {
        rotationProgress += 4.2 * delta;

        if (rotationProgress >= 1) {
          pivot.rotation[currentAxis] = currentTargetAngle;

          currentSliceCubies.forEach((cubie) => {
            cubeGroup.attach(cubie);

            cubie.position.x = Math.round(cubie.position.x / spacing) * spacing;

            cubie.position.y = Math.round(cubie.position.y / spacing) * spacing;

            cubie.position.z = Math.round(cubie.position.z / spacing) * spacing;

            cubie.rotation.x =
              Math.round(cubie.rotation.x / (Math.PI / 2)) * (Math.PI / 2);

            cubie.rotation.y =
              Math.round(cubie.rotation.y / (Math.PI / 2)) * (Math.PI / 2);

            cubie.rotation.z =
              Math.round(cubie.rotation.z / (Math.PI / 2)) * (Math.PI / 2);
          });

          pivot.rotation.set(0, 0, 0);

          currentSliceCubies = [];
          isRotating = false;
        } else {
          const progress = 1 - Math.pow(1 - Math.min(rotationProgress, 1), 3);

          pivot.rotation[currentAxis] = currentTargetAngle * progress;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.clearInterval(sliceInterval);

      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);

      container.removeEventListener("mousedown", handlePointerDown);
      container.removeEventListener("touchstart", handlePointerDown);

      cubies.forEach((cubie) => {
        if (Array.isArray(cubie.material)) {
          cubie.material.forEach((material) => material.dispose());
        } else {
          cubie.material.dispose();
        }
      });

      boxGeometry.dispose();
      edgesGeometry.dispose();
      cubieMaterial.dispose();
      edgeMaterial.dispose();

      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[450px] w-full cursor-grab md:h-[520px]"
    />
  );
}
