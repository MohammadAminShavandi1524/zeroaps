type ArtworkVariant = "monitoring" | "development" | "network" | "security";

interface ExpertiseArtworkProps {
  variant: ArtworkVariant;
}

export default function ExpertiseArtwork({ variant }: ExpertiseArtworkProps) {
  const baseClass =
    "pointer-events-none absolute inset-x-0 bottom-0 h-[72%] w-full overflow-hidden";

  switch (variant) {
    case "monitoring":
      return (
        <div className={baseClass} aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(25,53,68,0.22),transparent_75%)]" />

          <svg
            viewBox="0 0 240 270"
            preserveAspectRatio="xMidYMax slice"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <defs>
              <linearGradient id="monitoring-bars" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#27282D" stopOpacity="0" />
                <stop offset="100%" stopColor="#27282D" stopOpacity=".68" />
              </linearGradient>
            </defs>

            {Array.from({ length: 8 }, (_, index) => (
              <rect
                key={index}
                x={index * 32 - 4}
                y="0"
                width="20"
                height="270"
                fill="url(#monitoring-bars)"
              />
            ))}
          </svg>
        </div>
      );

    case "development":
      return (
        <div className={baseClass} aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(65,49,101,0.13),transparent_75%)]" />

          <svg
            viewBox="0 0 240 270"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 h-full w-full"
            fill="none"
            stroke="#36343D"
            strokeWidth="1.5"
          >
            <path d="M120 16 L232 250 H8 Z" />
            <path d="M120 68 L205 250 H35 Z" />
            <path d="M120 120 L178 250 H62 Z" />
          </svg>
        </div>
      );

    case "network":
      return (
        <div className={baseClass} aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(24,65,54,0.15),transparent_75%)]" />

          <svg
            viewBox="0 0 240 270"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 h-full w-full"
            fill="none"
            stroke="#26332F"
            strokeWidth="1.5"
          >
            <path d="M8 250 A112 112 0 0 1 232 250" />
            <path d="M38 250 A82 82 0 0 1 202 250" />
            <path d="M68 250 A52 52 0 0 1 172 250" />
          </svg>
        </div>
      );

    case "security":
      return (
        <div className={baseClass} aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(76,39,35,0.13),transparent_75%)]" />

          <svg
            viewBox="0 0 240 270"
            preserveAspectRatio="xMidYMax meet"
            className="absolute inset-0 h-full w-full"
            fill="none"
            stroke="#393335"
            strokeWidth="1.5"
          >
            <rect x="16" y="38" width="208" height="234" rx="70" />
            <rect x="48" y="78" width="144" height="194" rx="54" />
            <rect x="80" y="118" width="80" height="154" rx="35" />
          </svg>
        </div>
      );
  }
}
