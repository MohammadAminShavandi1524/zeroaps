import ExpertiseArtwork from "./ExpertiseArtwork";

type ExpertiseVariant = "monitoring" | "development" | "network" | "security";

interface ExpertiseItem {
  title: string;
  description: string;
  artwork: ExpertiseVariant;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Monitoring & Automation Systems Design",
    description:
      "Automated workflows, real-time metrics telemetry, and scalable backend event bridges.",
    artwork: "monitoring",
  },
  {
    title: "Intelligent Website & Software Development",
    description:
      "High-performance web apps, resilient distributed microservices, and reactive APIs.",
    artwork: "development",
  },
  {
    title: "Network, System Design & Support",
    description:
      "Robust cloud routing, edge load balancing, Zero-Trust defense, and continuous support.",
    artwork: "network",
  },
  {
    title: "Security, Cryptography & Design",
    description:
      "Formally verified crypto primitives, attack surface hardening, and precision interface systems.",
    artwork: "security",
  },
];

function ExpertiseCard({ title, description, artwork }: ExpertiseItem) {
  return (
    <article className="group relative isolate flex min-h-[350px] flex-col overflow-hidden rounded-[14px] border border-[#242427] bg-[#0B0B0D] transition-colors duration-300 hover:border-[#38383D] sm:min-h-[370px]">
      {/* Background Artwork */}
      <ExpertiseArtwork variant={artwork} />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2.5 px-5 pt-5">
        <h3 className="text-primary text-[18px] leading-[1.4] font-semibold tracking-[-0.025em]">
          {title}
        </h3>

        <p className="text-secondary max-w-[270px] text-[14px] leading-[1.65] font-normal">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
    </article>
  );
}

export default function Expertise() {
  return (
    <section
      id="expertise-section"
      className="border-border bg-background relative w-full border-b py-20 lg:py-24"
    >
      <div className="max-w-container-max mx-auto w-full px-4 md:px-8">
        {/* Section Heading */}
        <div className="mb-11 max-w-4xl">
          <h2 className="text-primary mb-3 text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.045em]">
            Engineered Across Four Core Disciplines.
          </h2>

          <p className="text-secondary text-[13px] leading-relaxed font-normal sm:text-[14px]">
            We design, build, connect, and secure modern digital infrastructure
            from end to end.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item) => (
            <ExpertiseCard key={item.artwork} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
