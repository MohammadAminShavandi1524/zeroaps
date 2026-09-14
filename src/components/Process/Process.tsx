const processItems = [
  {
    number: "01",
    title: "Deterministic Modeling",
    description:
      "TLA+ formal specification of consensus rules, state space boundary verification, and memory safety contracts prior to implementation.",
    footer: "Formal State Proving",
  },
  {
    number: "02",
    title: "Kernel-Bypassed Prototyping",
    description:
      "Hardware-aligned low-level implementation utilizing direct memory arenas, lock-free ring buffers, and io_uring concurrency primitives.",
    footer: "0B Allocation Path",
  },
  {
    number: "03",
    title: "Stress & Fuzz Simulation",
    description:
      "Deterministic simulation testing via Jepsen suites, simulated network split-brains, bit flips, and Byzantine adversarial scenarios.",
    footer: "Chaos Validation",
  },
  {
    number: "04",
    title: "Global Low-Latency Deploy",
    description:
      "Phased zero-downtime rollouts across multi-region BGP Anycast nodes with autonomous health probes and automatic partition healing.",
    footer: "<12ms Global Hop",
  },
];

export default function Process() {
  return (
    <section
      id="process-section"
      className="relative w-full border-b border-border bg-background py-24"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Engineering Lifecycle
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.1] font-bold tracking-tight text-heading sm:text-[40px]">
            Deterministic by Design.{" "}
            <span className="font-normal text-dim">Our 4-Stage Lifecycle.</span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            How we take complex distributed systems from formal specification to
            battle-tested worldwide deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processItems.map((item) => (
            <article
              key={item.number}
              className="bento-card justify-between p-6"
            >
              <div>
                <div className="mb-3 font-mono text-[24px] font-bold text-faint">
                  {item.number}
                </div>

                <h3 className="mb-2 text-[16.5px] font-semibold text-heading">
                  {item.title}
                </h3>

                <p className="mb-4 text-[13px] leading-relaxed font-normal text-muted">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-border pt-3 font-mono text-[11px] text-soft">
                {item.footer}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
