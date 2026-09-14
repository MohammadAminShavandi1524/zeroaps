import {
  Activity,
  Cpu,
  Globe2,
  LockKeyhole,
  Network,
  Terminal,
} from "lucide-react";

export default function Expertise() {
  return (
    <section
      id="expertise-section"
      className="relative w-full border-b border-border bg-background py-24"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Showcase Bento Stage
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.08] font-bold tracking-tight text-heading sm:text-[42px]">
            Engineered for Extreme Performance.{" "}
            <span className="font-normal text-dim">Core Disciplines.</span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            From low-level systems programming to fault-tolerant distributed
            networks and zero-knowledge cryptographic primitives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ExpertiseCard
            icon={<Network className="mb-3 h-6 w-6 text-soft" />}
            title="Distributed Systems & Consensus"
            description="Decentralized consensus engines, zero-copy socket routing, and sub-millisecond replication protocols resilient to network partitions."
          >
            <div className="relative w-full max-w-[300px] space-y-2.5 rounded-xl border border-border-medium bg-surface-elevated p-3.5 shadow-2xl">
              <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                <span className="flex items-center gap-1.5 font-medium text-heading">
                  <span className="status-pulse h-1.5 w-1.5 rounded-full bg-accent" />
                  Quorum Reach
                </span>

                <span>P99 SLA</span>
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <span className="font-mono text-3xl font-semibold tracking-tight text-heading">
                  99.999%
                </span>

                <span className="font-mono text-[11px] text-muted">
                  &lt; 380µs
                </span>
              </div>

              <div className="h-7 w-full">
                <svg
                  viewBox="0 0 280 28"
                  className="h-full w-full fill-none stroke-accent"
                >
                  <path
                    d="M 0 22 L 40 20 L 80 14 L 120 18 L 160 8 L 200 11 L 240 4 L 280 6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between border-t border-border-subtle pt-1 font-mono text-[10px] text-dim">
                <span>Nodes: 32/32 Healthy</span>
                <span className="font-semibold text-accent">Synced</span>
              </div>
            </div>
          </ExpertiseCard>

          <ExpertiseCard
            icon={<Cpu className="mb-3 h-6 w-6 text-soft" />}
            title="Kernel & Systems Architecture"
            description="Direct memory mapping, io_uring asynchronous event loops, and custom hypervisor extensions tailored for ultra-low latency execution."
          >
            <div className="relative w-full max-w-[300px] space-y-2 rounded-xl border border-border-medium bg-surface-elevated p-3 shadow-2xl">
              <EventRow
                color="var(--accent)"
                title="packet.delivered"
                time="2ms ago"
              />
              <EventRow
                color="var(--muted)"
                title="route.rebalanced"
                time="14ms ago"
              />
              <EventRow
                color="var(--accent-cyan)"
                title="kernel.dma_ack"
                time="32ms ago"
              />
            </div>
          </ExpertiseCard>

          <ExpertiseCard
            icon={<LockKeyhole className="mb-3 h-6 w-6 text-soft" />}
            title="Applied Cryptography & Security"
            description="Provable security guarantees, tamper-evident audit logs, hardware enclave micro-sandboxing, and automated key rotation at global scale."
          >
            <div className="relative w-full max-w-[300px] space-y-2 rounded-xl border border-border-medium bg-surface-elevated p-3.5 shadow-2xl">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-muted">Enclave Attestation</span>

                <span className="font-medium text-accent">VERIFIED</span>
              </div>

              <div className="space-y-1 rounded border border-border-subtle bg-surface-subtle p-2.5 font-mono text-[10.5px]">
                <MetricRow label="Curve:" value="Ed25519-Dalek" />
                <MetricRow label="Proof:" value="zk-SNARK Groth16" />
                <MetricRow label="Entropy:" value="Hardware TRNG" />
              </div>

              <div className="text-right font-mono text-[10px] text-dim">
                0B Key Leakage Surface
              </div>
            </div>
          </ExpertiseCard>

          <ExpertiseCard
            icon={<Globe2 className="mb-3 h-6 w-6 text-soft" />}
            title="Edge Compute & Ingress Routing"
            description="Multi-region edge execution grids with intelligent traffic steering, instantaneous peer failover, and zero cold-start micro-runtimes."
          >
            <div className="relative w-full max-w-[300px] space-y-2.5 rounded-xl border border-border-medium bg-surface-elevated p-3.5 shadow-2xl">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-muted">Anycast Mesh</span>
                <span className="font-medium text-heading">160+ PoPs</span>
              </div>

              <div className="space-y-1.5 font-mono text-[11px]">
                <LocationRow location="iad-1 (US-East)" latency="< 1.8ms" />
                <LocationRow location="fra-2 (Frankfurt)" latency="< 3.2ms" />
                <LocationRow location="hnd-1 (Tokyo)" latency="< 7.4ms" />
              </div>
            </div>
          </ExpertiseCard>

          <ExpertiseCard
            icon={<Activity className="mb-3 h-6 w-6 text-soft" />}
            title="High-Throughput Streaming"
            description="High-density time-series aggregation, vectorized columnar processing, and real-time anomaly detection pipelines running at line rate."
          >
            <div className="relative w-full max-w-[300px] space-y-2 rounded-xl border border-border-medium bg-surface-elevated p-3.5 shadow-2xl">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-muted">Stream Ingestion</span>
                <span className="font-semibold text-heading">45M evt/s</span>
              </div>

              <ProgressMetric
                label="Vector SIMD"
                value="92%"
                width="92%"
                bright
              />

              <ProgressMetric
                label="eBPF Filter Queue"
                value="0.02%"
                width="14%"
              />
            </div>
          </ExpertiseCard>

          <ExpertiseCard
            icon={<Terminal className="mb-3 h-6 w-6 text-soft" />}
            title="Developer Experience & SDKs"
            description="Flawless API boundaries, native multi-language SDK runtimes, hermetic CLI toolchains, and interactive live sandboxes for rapid delivery."
          >
            <div className="relative w-full max-w-[300px] space-y-1.5 rounded-xl border border-border-medium bg-surface-elevated p-3 font-mono text-[11px] shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-border-subtle pb-1 text-[10px] text-dim">
                <span className="h-2 w-2 rounded-full bg-surface-dot" />
                <span className="h-2 w-2 rounded-full bg-surface-dot" />
                <span className="h-2 w-2 rounded-full bg-surface-dot" />

                <span className="ml-1 text-muted">zeroaps-cli v3.8</span>
              </div>

              <div className="text-muted">$ zeroaps deploy --env=prod</div>

              <div className="text-accent">✓ Mesh verified (160/160 PoPs)</div>

              <div className="text-heading">✓ State committed in 240µs</div>
            </div>
          </ExpertiseCard>
        </div>
      </div>
    </section>
  );
}

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}

function ExpertiseCard({
  icon,
  title,
  description,
  children,
}: ExpertiseCardProps) {
  return (
    <div className="bento-card group">
      <div className="perforated-grill relative flex min-h-[220px] items-center justify-center overflow-hidden border-b border-border bg-surface-subtle p-5">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
          }}
        />

        {children}
      </div>

      <div className="flex flex-grow flex-col justify-between p-6">
        <div>
          {icon}

          <h3 className="mb-2 text-lg font-medium tracking-tight text-heading md:text-xl">
            {title}
          </h3>

          <p className="text-sm leading-relaxed font-normal text-muted">
            {description}
          </p>
        </div>

        <a
          href="#projects-section"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-soft transition-colors hover:text-heading"
        >
          Learn more
          <span>→</span>
        </a>
      </div>
    </div>
  );
}

interface EventRowProps {
  color: string;
  title: string;
  time: string;
}

function EventRow({ color, title, time }: EventRowProps) {
  return (
    <div className="flex items-center justify-between rounded border border-border-subtle bg-surface-subtle p-2 font-mono text-[11px]">
      <div className="flex items-center gap-2">
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: color }}
        />

        <span className="text-[11px] text-soft">{title}</span>
      </div>

      <span className="text-[10px] text-dim">{time}</span>
    </div>
  );
}

interface MetricRowProps {
  label: string;
  value: string;
}

function MetricRow({ label, value }: MetricRowProps) {
  return (
    <div className="flex justify-between text-dim">
      <span>{label}</span>
      <span className="text-soft">{value}</span>
    </div>
  );
}

interface LocationRowProps {
  location: string;
  latency: string;
}

function LocationRow({ location, latency }: LocationRowProps) {
  return (
    <div className="flex items-center justify-between rounded border border-border-subtle bg-surface-subtle p-1.5">
      <span className="text-soft">{location}</span>
      <span className="text-accent">{latency}</span>
    </div>
  );
}

interface ProgressMetricProps {
  label: string;
  value: string;
  width: string;
  bright?: boolean;
}

function ProgressMetric({
  label,
  value,
  width,
  bright = false,
}: ProgressMetricProps) {
  return (
    <div className="space-y-1 pt-1">
      <div className="flex items-center justify-between font-mono text-[10px] text-dim">
        <span>{label}</span>
        <span className="text-soft">{value}</span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-track">
        <div
          className={`h-full rounded-full ${
            bright ? "bg-heading" : "bg-muted"
          }`}
          style={{ width }}
        />
      </div>
    </div>
  );
}
