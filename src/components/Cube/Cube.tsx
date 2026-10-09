// components/Cube/Cube.tsx

"use client";

import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("./CubeScene"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="aspect-square w-[42%] rounded-[28%] bg-gradient-to-br from-[#1d2025] to-[#090a0c]" />
    </div>
  ),
});

export type CubeProps = {
  className?: string;
  autoRotate?: boolean;
  autoTwist?: boolean;
  interactive?: boolean;
  ariaLabel?: string;
};

export default function Cube({
  className = "",
  autoRotate = true,
  autoTwist = true,
  interactive = true,
  ariaLabel = "Interactive metallic 3D cube",
}: CubeProps) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden ${className} `}
      role="img"
      aria-label={ariaLabel}
    >
      <CubeScene
        autoRotate={autoRotate}
        autoTwist={autoTwist}
        interactive={interactive}
      />
    </div>
  );
}
