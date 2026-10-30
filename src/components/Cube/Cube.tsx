"use client";

import dynamic from "next/dynamic";

const CubeScene = dynamic(() => import("./CubeScene"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <div className="aspect-square w-[44%] rounded-[26%] border border-white/6 bg-[radial-gradient(circle_at_30%_22%,rgba(250,250,250,0.12),transparent_26%),linear-gradient(145deg,#22242a_0%,#15171b_45%,#090a0c_100%)] shadow-[0_28px_80px_rgba(0,0,0,0.45)]" />
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
  ariaLabel = "Interactive graphite 3D cube",
}: CubeProps) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden ${className}`}
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
