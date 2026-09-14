const technologies = [
  {
    short: "Rs",
    name: "Rust",
    description: "Zero-cost memory safety, SIMD vectorization.",
    meta: "v1.82 Core",
  },
  {
    short: "Go",
    name: "Golang",
    description: "High-concurrency goroutines & mesh relays.",
    meta: "v1.23 Mesh",
  },
  {
    short: "eB",
    name: "eBPF",
    description: "In-kernel tracing & XDP packet filtering.",
    meta: "Kernel Hook",
  },
  {
    short: "CH",
    name: "ClickHouse",
    description: "Columnar analytics handling 10B+ daily events.",
    meta: "Sub-sec P95",
  },
  {
    short: "K8",
    name: "Kubernetes",
    description: "Autoscaling multi-region cluster topologies.",
    meta: "Anycast Grid",
  },
  {
    short: "Ed",
    name: "Ed25519 / ZK",
    description: "Hardware-isolated enclave cryptographic signing.",
    meta: "Zero-Trust",
  },
  {
    short: "Zg",
    name: "Zig",
    description: "Deterministic low-level memory controllers.",
    meta: "Comptime",
  },
  {
    short: "WA",
    name: "WASM",
    description: "Sandboxed micro-runtimes running at global edge.",
    meta: "Sub-ms Boot",
  },
  {
    short: "En",
    name: "Envoy",
    description: "Dynamic traffic routing & mTLS proxy layers.",
    meta: "Mesh Core",
  },
  {
    short: "Lx",
    name: "Linux Kernel",
    description: "Custom io_uring & memory-mapped architectures.",
    meta: "Bypass I/O",
  },
  {
    short: "Tk",
    name: "Tokio",
    description: "Asynchronous non-blocking runtime engine.",
    meta: "Event Loop",
  },
  {
    short: "Ar",
    name: "Apache Arrow",
    description: "Vectorized in-memory SIMD data frames.",
    meta: "SIMD Speed",
  },
];

export default function Stack() {
  return (
    <section
      id="stack-section"
      className="relative w-full border-b border-border bg-background py-24"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Ecosystem & Tools
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.1] font-bold tracking-tight text-heading sm:text-[40px]">
            Engineered with Precision.{" "}
            <span className="font-normal text-dim">Our Technology Stack.</span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            Purpose-built architectures and battle-tested primitives powering
            low-latency systems and mission-critical cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className="flex min-h-[180px] flex-col justify-between rounded-xl border border-border border-t-border-strong bg-surface-subtle p-4 transition-all hover:border-border-strong"
            >
              <div>
                <div className="mb-1 font-mono text-[11px] font-bold text-soft uppercase">
                  {technology.short}
                </div>

                <h3 className="text-[14.5px] font-semibold text-heading">
                  {technology.name}
                </h3>

                <p className="mt-1 text-[11.5px] leading-snug font-normal text-muted">
                  {technology.description}
                </p>
              </div>

              <div className="mt-3 border-t border-border pt-2 font-mono text-[10px] text-dim">
                {technology.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
