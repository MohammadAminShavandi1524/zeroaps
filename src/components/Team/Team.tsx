const teamMembers = [
  {
    name: "Amir",
    tag: "FOUNDER",
    role: "Founder & Principal Architect",
    description:
      "Ex-kernel & high-concurrency systems architect. Spearheaded fault-tolerant topologies, zero-copy pipelines, and cloud primitives.",
    handle: "@masoud",
    location: "San Francisco",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdTD7kWY5xI4H49yUxG07wL7upKuKl2uMxditGOT5CHHWz-c-0zJJ30rt90NuEKaH40N7FGj6q1noBC8hKXGNrm3GSZy1w6O2A77qeW5s5hf535Mz9mg9Ba6wHbu8qwt12Gr47r0TZ4V41Gx9jT_zaDvjKmf46Dt7ynwCz_4FGutUkh4C9h5x7sWcONyUDytPI1JXg9tkYkoNQZjyuk78m3gCtUyLJBwe-NhMrGgF4_Ha9M3o1HQGosOiYoXddcenfiX8",
  },
  {
    name: "Sajad",
    tag: "INFRA",
    role: "VP Cloud Infrastructure",
    description:
      "Multi-region egress mesh orchestrator, low-latency edge topology, and distributed failover delivering 99.999% SLA across 160+ PoPs.",
    handle: "@amin_cloud",
    location: "London",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD8TgFcJwri4hKlTHKu0zGZQBU1o4FjqltNI-40CPGev8gOWe_aDiGDpSe3p17CSBB0r9jBDV1rAneM7ZOTJcbw9m9tmm-X9QjzE_iTIiGETCo-ZLXg-I3OpFn6UucEB8KXsGz0oF8m5oe6rAmEi0h__eKs3Dg8nUAFpnKtlE1RnyX8Xg_ILUloRWmQ4yeLnfG9RFBdZ6_niaB1tGgUiVuDQJk6ordo5VUB7zyM-zxEJeOmdo87KIsv30e-FskVQVN1nR4",
  },
  {
    name: "Masoud",
    tag: "CRYPTO",
    role: "Head of Cryptography",
    description:
      "Ed25519 payload signing algorithms, hardware-enforced micro-sandboxing, automated DKIM key rotation, and zero-trust verification.",
    handle: "@sajad_sec",
    location: "Zurich",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjvXamICyXOelAoQJbWK55dVm7mdXJHnoflbhngzPCtTk41ZTT1cRrFGL23iO3ID_aqrClPxTmN_juCVCQR5mOCIjPLRPqUfONfmQXa14RytSON5u3Vquiey3bhd2Fvm9AsUNUlIyOV2v3jTSwxDpxckmA3vgZ42uliF0OjYd38yiMQmfqYGoGOb8lRe9KKvN2AoRF8Vt4bf_A286z7SLNXgFK0gJeGnpLrY1OQEptaPh1XIw0xvUTUvz-ibzVZJIlOzE",
  },
  {
    name: "Sina",
    tag: "CORE",
    role: "Lead Core Protocols",
    description:
      "Compiler optimizations, custom async event-loop runtimes, ultra-fast serialization routines, and microsecond telemetry engineering.",
    handle: "@sina_proto",
    location: "Berlin",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA-SRkGoKf0QgHZmE-4BfK9KkAnoMxkRnTYIjzPIBbavZwQFmz4p3PetrkfOZa-MWBcUVZ8ozI9RSvgKboEBNpaHbzmuVgklLBLgEc0VJQi2xpRY6No3EF93prc4IOUU6XQgsDUVBTIRvdztJVEmNkfSpkkoRdwGUaSQkxa271VwA8c4Ob9_2lxZg4MII9vQ47OsfgUAi8nsdxsFRDMRe0ELfqSOKMVquHU-CAEbo8o7kPVyRDcG76qfgJNjBClOjEaGTM",
  },
  {
    name: "Amin",
    tag: "DX",
    role: "Lead Developer Experience",
    description:
      "Modern developer ergonomics, type-safe API SDKs in Rust/TypeScript/Go, interactive CLI tools, and sub-second onboarding workflows.",
    handle: "@amir_dx",
    location: "Toronto",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpBfDWyvcrEiP6-KT-kvptXpBEMFdLjO5VdWx_yBgQA_0XLdvyaCgfaJzVt8yvQQC9dF3ceboNIEUC-Iw5eQf4pJSgEUBVLLBMW0i8TNm_u-X9COss53rxog13hPdjWB2eTQVoM8hMukPozgCRYsPf2Clt3uNFfDEj7MsOgnpm3uYq7wSrotVXMG7NNWR9KOPVUQNmCYru-2zGtg5AfMju5tkTJP7KHDkokDd0X2qQjMFOhnyHxw5NoWe-pD2EuNnk26c",
  },
];

export default function Team() {
  return (
    <section
      id="team-section"
      className="relative w-full border-b border-border bg-background py-24"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <div className="mb-3.5 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />

            <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
              Team & Leadership
            </span>
          </div>

          <h2 className="mb-4 text-[30px] leading-[1.1] font-bold tracking-tight text-heading sm:text-[40px]">
            Engineered by Obsessed Builders.{" "}
            <span className="font-normal text-dim">
              Autonomous Infrastructure.
            </span>
          </h2>

          <p className="text-[15.5px] leading-relaxed font-normal text-muted">
            A distributed core of systems architects, cryptography researchers,
            and compiler engineers building the backbone for mission-critical
            communications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <article
              key={`${member.name}-${member.role}`}
              className="bento-card group justify-between p-4"
            >
              <div>
                <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-lg border border-border bg-surface-stage">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-semibold text-heading">
                    {member.name}
                  </h3>

                  <span className="rounded border border-border-medium bg-surface-panel px-1.5 py-0.5 font-mono text-[9.5px] text-soft">
                    {member.tag}
                  </span>
                </div>

                <div className="mb-2 font-mono text-[11px] text-muted">
                  {member.role}
                </div>

                <p className="text-[12px] leading-relaxed font-normal text-muted">
                  {member.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2 border-t border-border pt-2 font-mono text-[10.5px]">
                <span className="text-dim">{member.handle}</span>

                <span className="text-muted">{member.location}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
