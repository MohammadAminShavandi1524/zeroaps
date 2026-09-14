const projects = [
  {
    metricLabel: "Throughput SLA",
    metricStatus: "1.4M tx/s",
    metricValue: "380µs",
    metricDescription: "P99.99 Settle Duration Under Load",
    category: "Financial Infrastructure",
    title: "Apex Global Settlement Engine",
    description:
      "Sub-millisecond multi-region consensus protocol processing $4.2B daily volume with zero data loss under Byzantine network partitions.",
    stack: "Rust, Tokio, eBPF, Raft",
    version: "v3.8-PROD",
    accentStatus: false,
  },
  {
    metricLabel: "Ingestion Velocity",
    metricStatus: "Active",
    metricValue: "45M evt/s",
    metricDescription: "Vectorized Zero-Copy Aggregation",
    category: "Streaming Engine",
    title: "Aether Stream Pipeline",
    description:
      "High-density streaming engine aggregating 45M edge events per second with in-memory zero-copy SIMD columnar aggregation.",
    stack: "ClickHouse, Arrow, DPDK",
    version: "v2.1-LIVE",
    accentStatus: true,
  },
  {
    metricLabel: "Hardware Attestation",
    metricStatus: "SEC-0",
    metricValue: "0B Leak",
    metricDescription: "ZK-SNARK Formally Proved Sandbox",
    category: "Cryptography & Enclaves",
    title: "Vanguard Hardware-Isolated HSM",
    description:
      "Formally verified microkernel enclave providing cryptographic signing, automated multi-party threshold rotations, and HSM attestation.",
    stack: "ZK-SNARKs, SGX/SEV",
    version: "ENCLAVE-SEC",
    accentStatus: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects-section"
      className="relative w-full border-b border-border bg-background py-24"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Selected Projects
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.1] font-bold tracking-tight text-heading sm:text-[40px]">
            Mission-Critical Engineering Shipped.{" "}
            <span className="font-normal text-dim">Flagship Systems.</span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            Explore high-throughput engines, cryptographic sandboxes, and
            low-latency infrastructure built for enterprise scale.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="bento-card group">
              {/* Visual Stage */}
              <div className="perforated-grill relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-border bg-surface-stage p-5">
                <div className="relative w-full max-w-[300px] space-y-2 rounded-xl border border-border-medium bg-surface-elevated p-3.5 shadow-2xl">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-muted">{project.metricLabel}</span>

                    <span
                      className={`font-semibold ${
                        project.accentStatus ? "text-accent" : "text-heading"
                      }`}
                    >
                      {project.metricStatus}
                    </span>
                  </div>

                  <div className="font-mono text-3xl font-semibold tracking-tight text-heading">
                    {project.metricValue}
                  </div>

                  <div className="font-mono text-[10.5px] text-dim">
                    {project.metricDescription}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col justify-between p-6">
                <div>
                  <div className="mb-1 font-mono text-[10px] tracking-widest text-muted uppercase">
                    {project.category}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-heading transition-colors group-hover:text-soft">
                    {project.title}
                  </h3>

                  <p className="mb-4 text-[13px] leading-relaxed font-normal text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-border pt-3 text-[12.5px]">
                  <span className="font-mono text-muted">{project.stack}</span>

                  <span className="shrink-0 font-mono text-[10.5px] text-dim">
                    {project.version}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
