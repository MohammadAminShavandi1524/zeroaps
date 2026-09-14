import {
  Activity,
  Cpu,
  Gauge,
  LockKeyhole,
  Network,
  Timer,
  type LucideIcon,
} from "lucide-react";

interface Principle {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  highlight?: boolean;
}

const principles: Principle[] = [
  {
    icon: Timer,
    badge: "SUB-MS",
    title: "Deterministic Performance",
    description:
      "Predictable execution pipelines with strictly verified execution paths. Zero GC pauses, lock-free concurrency, and guaranteed tail latencies.",
    metricLabel: "Target Latency",
    metricValue: "<1ms P99",
    highlight: true,
  },
  {
    icon: Cpu,
    badge: "ZERO-COPY",
    title: "Zero-Allocation Primitives",
    description:
      "Arena-based memory management, custom slab allocators, and hardware-aligned cache lines to eliminate allocator jitter.",
    metricLabel: "Allocation Profile",
    metricValue: "0B Heap Path",
  },
  {
    icon: LockKeyhole,
    badge: "ED25519 & ZK",
    title: "Cryptographic Integrity",
    description:
      "End-to-end zero-trust architecture, hardware-enforced isolation, zero-knowledge verifiable audits, and continuous cryptographic attestation.",
    metricLabel: "Security Tier",
    metricValue: "Post-Quantum Ready",
    highlight: true,
  },
  {
    icon: Network,
    badge: "RAFT / CRDT",
    title: "Fault Tolerance by Design",
    description:
      "Split-brain resilient consensus protocols, deterministic simulation testing under Jepsen suites, and automatic partition healing.",
    metricLabel: "Consensus SLA",
    metricValue: "99.999% Resilience",
  },
  {
    icon: Gauge,
    badge: "HARDWARE-ALIGNED",
    title: "Mechanical Sympathy",
    description:
      "Software engineered to mirror microarchitecture reality: SIMD vectorization, cache-line prefetching, and kernel-bypass I/O via io_uring & eBPF.",
    metricLabel: "Hardware Interop",
    metricValue: "100% CPU Efficiency",
    highlight: true,
  },
  {
    icon: Activity,
    badge: "NANO-PRECISION",
    title: "Transparent Telemetry",
    description:
      "High-frequency microsecond metrics, eBPF-driven tracing across kernel boundaries, and immutable telemetry streams without observation overhead.",
    metricLabel: "Observation Imprint",
    metricValue: "Zero-Overhead Probe",
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy-section"
      className="relative w-full border-b border-border bg-background py-24"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Guiding Principles
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.1] font-bold tracking-tight text-heading sm:text-[40px]">
            Built on Absolute Precision & Determinism.{" "}
            <span className="font-normal text-dim">
              Uncompromising Systems.
            </span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            Our guiding principles in designing sub-millisecond, fault-tolerant
            infrastructure and provable telemetry boundaries.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="bento-card justify-between p-6"
              >
                <div>
                  <div className="mb-3.5 flex items-center justify-between gap-4">
                    <Icon className="h-[22px] w-[22px] text-soft" />

                    <span className="rounded border border-border-medium bg-surface-panel px-2 py-0.5 font-mono text-[10px] text-soft">
                      {principle.badge}
                    </span>
                  </div>

                  <h3 className="mb-2 text-[17px] font-semibold text-heading">
                    {principle.title}
                  </h3>

                  <p className="mb-5 text-[13px] leading-relaxed font-normal text-muted">
                    {principle.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-border pt-3 font-mono text-[10.5px]">
                  <span className="text-dim uppercase">
                    {principle.metricLabel}
                  </span>

                  <span
                    className={
                      principle.highlight
                        ? "text-right font-semibold text-heading"
                        : "text-right text-soft"
                    }
                  >
                    {principle.metricValue}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Quote */}
        <div className="bento-card relative mx-auto max-w-3xl p-8 text-center sm:p-10">
          <div className="mb-5 flex justify-center">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 fill-current text-heading"
              aria-hidden="true"
            >
              <path d="M12 1L24 22H0L12 1Z" />
            </svg>
          </div>

          <blockquote className="mb-8 text-[18px] leading-relaxed font-normal text-heading sm:text-[21px]">
            “ZEROAPS has set a new benchmark for low-latency systems and
            resilient cloud primitives. Extreme engineering precision without
            the typical enterprise bloat.”
          </blockquote>

          <div className="flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-surface-track text-sm font-bold text-heading">
              GR
            </div>

            <div className="text-left">
              <div className="text-[13.5px] font-semibold text-heading">
                Guillermo Rauch
              </div>

              <div className="font-mono text-[11px] text-muted">
                CEO, Vercel
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
