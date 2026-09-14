import { BadgeCheck, Gauge, Globe2 } from "lucide-react";

import SdkTerminal from "./SdkTerminal";

export default function About() {
  return (
    <section
      id="about-section"
      className="relative w-full border-b border-border bg-background py-20"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Autonomous Infrastructure
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.1] font-bold tracking-tight text-heading sm:text-[40px]">
            Architected for Absolute Reliability.{" "}
            <span className="font-normal text-dim">
              Next-Era Software Primitives.
            </span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            Eliminating communication blackouts and non-deterministic cloud
            failures. We replace legacy, bloated packet relays with wire-speed
            memory pipelines, autonomous routing heuristics, and microsecond
            edge consensus.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="bento-card justify-between p-7 lg:col-span-7">
            <div>
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
                  Mission Core
                </span>

                <span className="inline-flex items-center gap-1.5 rounded border border-border-medium bg-surface-panel px-2.5 py-0.5 font-mono text-[10.5px] text-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Deterministic Wire Protocol
                </span>
              </div>

              <h3 className="mb-2.5 text-[20px] font-semibold text-heading">
                Fault-Tolerant Distributed Topologies
              </h3>

              <p className="mb-6 text-[14px] leading-relaxed font-normal text-muted">
                Designed for high-frequency trading platforms, multi-region
                real-time sync, and mission-critical cloud pipelines. Every
                layer operates without garbage collection pauses, unbounded
                thread queues, or central points of failure.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3.5 border-t border-border pt-5 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface-subtle p-3.5">
                <div className="mb-1 font-mono text-[10.5px] text-dim uppercase">
                  Failover Time
                </div>

                <div className="font-mono text-[16px] font-semibold text-heading">
                  Sub-millisecond
                </div>

                <p className="mt-1 text-[11.5px] text-dim">
                  Instantaneous peer consensus with zero state drift.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-surface-subtle p-3.5">
                <div className="mb-1 font-mono text-[10.5px] text-dim uppercase">
                  Memory Pipeline
                </div>

                <div className="font-mono text-[16px] font-semibold text-heading">
                  Zero-Copy Relays
                </div>

                <p className="mt-1 text-[11.5px] text-dim">
                  Direct kernel-bypass DMA packet dispatch.
                </p>
              </div>
            </div>
          </div>

          <div className="bento-card justify-between p-7 lg:col-span-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-wider text-muted uppercase">
                Global SLA
              </span>

              <span className="font-mono text-[10.5px] text-dim">
                v3.8 Edge Mesh
              </span>
            </div>

            <div className="my-auto space-y-3.5">
              <div className="flex items-center justify-between rounded-xl border border-border bg-surface-card p-3.5">
                <div>
                  <div className="font-mono text-[24px] leading-tight font-bold text-heading">
                    99.999%
                  </div>

                  <div className="font-mono text-[11.5px] text-dim">
                    Verified Production SLA
                  </div>
                </div>

                <BadgeCheck className="h-5.5 w-5.5 text-muted" />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border bg-surface-card p-3.5">
                <div>
                  <div className="font-mono text-[24px] leading-tight font-bold text-heading">
                    &lt;12ms
                  </div>

                  <div className="font-mono text-[11.5px] text-dim">
                    Global P99 Ingress Latency
                  </div>
                </div>

                <Gauge className="h-5.5 w-5.5 text-accent" />
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border bg-surface-card p-3.5">
                <div>
                  <div className="font-mono text-[24px] leading-tight font-bold text-heading">
                    160+
                  </div>

                  <div className="font-mono text-[11.5px] text-dim">
                    Anycast Edge Points of Presence
                  </div>
                </div>

                <Globe2 className="h-5.5 w-5.5 text-muted" />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-5 font-mono text-[11px]">
              <span className="text-dim">Autonomous Edge Routing</span>

              <span className="text-soft">Active & Scaled</span>
            </div>
          </div>
        </div>

        <SdkTerminal />
      </div>
    </section>
  );
}
