"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";

type Language = "ts" | "go" | "rust" | "py" | "curl";

const tabs: { id: Language; label: string }[] = [
  { id: "ts", label: "TypeScript" },
  { id: "go", label: "Go" },
  { id: "rust", label: "Rust" },
  { id: "py", label: "Python" },
  { id: "curl", label: "cURL" },
];

const snippets: Record<Language, string> = {
  ts: `// TypeScript / Node.js ESM runtime
import { ZeroapsClient } from '@zeroaps/core';

const client = new ZeroapsClient({
  apiKey: process.env.ZEROAPS_SECRET_KEY,
  topology: 'anycast-mesh',
  deterministic: true
});

const consensus = await client.relays.dispatch({
  channel: 'settlement.mesh.primary',
  payload: {
    txId: '0x98f82a...94f',
    volume: 4200000
  },
  quorumTarget: 'sub-ms'
});

console.log(consensus.verifiedLatency); // < 380µs SLA`,

  go: `// Go Wire-speed Client
package main

import (
  "context"
  "github.com/zeroaps/zeroaps-go/mesh"
)

func main() {
  relay := mesh.NewRelay(mesh.Config{
    Cluster: "mesh.zeroaps.internal",
    KernelBypass: true,
  })

  ack, _ := relay.DispatchZeroCopy(
    context.Background(),
    []byte("SIG_0x42"),
  )

  println(ack.LatencyNanos) // 124000ns
}`,

  rust: `// Rust Tokio Zero-Copy Driver
use zeroaps::{MeshNode, TopologyStrategy};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
  let mut node = MeshNode::bind_ring(
    "/dev/zeroaps_dma0",
    TopologyStrategy::Deterministic
  ).await?;

  let receipt = node
    .commit_payload(&[0xFE, 0x14, 0x88])
    .await?;

  assert!(receipt.is_settled_sub_ms());

  Ok(())
}`,

  py: `# Python AsyncIO Micro-Runtime
import asyncio
from zeroaps import AsyncZeroapsRelay

async def main():
  relay = AsyncZeroapsRelay(
    token="za_live_prod_9918",
    enforce_zk=True
  )

  receipt = await relay.dispatch_event(
    stream="aether.timeseries",
    vector=[12.4, 99.8, 45.1]
  )

  print(f"Consensus latency: {receipt.latency_ms}ms")

asyncio.run(main())`,

  curl: `# Direct Anycast Edge HTTP/3 Dispatch
curl -X POST https://api.zeroaps.com/v3/relays/dispatch \\
  -H "Authorization: Bearer za_live_049f7b1" \\
  -H "Content-Type: application/x-protobuf" \\
  -H "Zero-SLA-Target: sub-ms" \\
  -d '{"mesh":"settlement.primary","quorum":5}'`,
};

export default function SdkTerminal() {
  const [activeTab, setActiveTab] = useState<Language>("ts");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippets[activeTab]);

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bento-card w-full overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-surface-card px-4 py-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          {tabs.map((tab) => {
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded px-3 py-1 font-mono text-[12px] transition-colors ${
                  active
                    ? "border border-border-strong bg-surface-track text-heading"
                    : "text-muted hover:text-heading"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[10.5px] text-dim">
            sdk-v3.8-verified
          </span>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded border border-border-medium bg-surface-control px-2.5 py-1 font-mono text-[11px] text-soft transition-all hover:border-border-hover"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}

            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-surface-subtle p-5">
        <pre className="m-0 min-w-[720px] font-mono text-[12.5px] leading-relaxed text-soft">
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>
    </div>
  );
}
