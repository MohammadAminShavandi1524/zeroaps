import type { CSSProperties } from "react";

interface ProcessArtworkProps {
  index: number;
}

const sideFadeStyle: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 6%, black 96%, rgba(0,0,0,0.65) 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 6%, black 96%, rgba(0,0,0,0.65) 100%)",
};

const CENTER_X = 280;

export default function ProcessArtwork({ index }: ProcessArtworkProps) {
  return (
    <div
      data-process-artwork
      aria-hidden="true"
      className="pointer-events-none absolute right-0 bottom-0 hidden h-[370px] w-1/2 max-w-[560px] overflow-hidden md:block"
    >
      <div className="absolute inset-0" style={sideFadeStyle}>
        {/* Shared background illumination */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 76% 110%, rgba(95,99,151,0.24) 0%, rgba(35,40,70,0.12) 45%, transparent 80%)",
          }}
        />

        <svg
          viewBox="0 0 560 370"
          preserveAspectRatio="xMidYMax meet"
          className="absolute inset-0 h-full w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 01 - Vertical lines */}
          {index === 0 && (
            <>
              <defs>
                <linearGradient
                  id="process-lines-fill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#151825" stopOpacity="0" />
                  <stop offset="55%" stopColor="#222942" stopOpacity=".18" />
                  <stop offset="100%" stopColor="#7277AA" stopOpacity=".42" />
                </linearGradient>
              </defs>

              {Array.from({ length: 9 }, (_, i) => {
                const x = 20 + i * 60;

                return (
                  <g key={i}>
                    <rect
                      x={x}
                      y="0"
                      width="58"
                      height="370"
                      fill="url(#process-lines-fill)"
                      opacity={0.3 + i * 0.07}
                    />

                    <line
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="370"
                      stroke="#9EA5CA"
                      strokeWidth="0.8"
                      strokeOpacity={0.035 + i * 0.018}
                    />
                  </g>
                );
              })}
            </>
          )}

          {/* 02 - Nested triangles */}
          {index === 1 && (
            <g strokeWidth="1">
              <path
                d={`M${CENTER_X} -12 L574 370 H-14 Z`}
                fill="#222637"
                fillOpacity=".36"
                stroke="#69718E"
                strokeOpacity=".25"
              />

              <path
                d={`M${CENTER_X} 72 L508 370 H52 Z`}
                fill="#30364F"
                fillOpacity=".56"
                stroke="#8288AD"
                strokeOpacity=".28"
              />

              <path
                d={`M${CENTER_X} 162 L438 370 H122 Z`}
                fill="#454D6E"
                fillOpacity=".72"
                stroke="#A2A5C8"
                strokeOpacity=".3"
              />

              <path
                d={`M${CENTER_X} 246 L369 370 H191 Z`}
                fill="#696D91"
                fillOpacity=".72"
                stroke="#B0B3D0"
                strokeOpacity=".34"
              />
            </g>
          )}

          {/* 03 - Nested circles */}
          {index === 2 && (
            <g strokeWidth="1">
              <circle
                cx={CENTER_X}
                cy="398"
                r="320"
                fill="#222637"
                fillOpacity=".36"
                stroke="#69718E"
                strokeOpacity=".25"
              />

              <circle
                cx={CENTER_X}
                cy="398"
                r="253"
                fill="#30364F"
                fillOpacity=".56"
                stroke="#8288AD"
                strokeOpacity=".28"
              />

              <circle
                cx={CENTER_X}
                cy="398"
                r="185"
                fill="#454D6E"
                fillOpacity=".72"
                stroke="#A2A5C8"
                strokeOpacity=".3"
              />

              <circle
                cx={CENTER_X}
                cy="398"
                r="118"
                fill="#696D91"
                fillOpacity=".72"
                stroke="#B0B3D0"
                strokeOpacity=".34"
              />
            </g>
          )}

          {/* 04 - Nested rounded rectangles */}
          {index === 3 && (
            <g strokeWidth="1">
              <rect
                x="10"
                y="96"
                width="540"
                height="430"
                rx="158"
                fill="#222637"
                fillOpacity=".36"
                stroke="#69718E"
                strokeOpacity=".25"
              />

              <rect
                x="77"
                y="166"
                width="406"
                height="360"
                rx="118"
                fill="#30364F"
                fillOpacity=".56"
                stroke="#8288AD"
                strokeOpacity=".28"
              />

              <rect
                x="144"
                y="236"
                width="272"
                height="290"
                rx="84"
                fill="#454D6E"
                fillOpacity=".72"
                stroke="#A2A5C8"
                strokeOpacity=".3"
              />

              <rect
                x="211"
                y="306"
                width="138"
                height="220"
                rx="49"
                fill="#696D91"
                fillOpacity=".72"
                stroke="#B0B3D0"
                strokeOpacity=".34"
              />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
