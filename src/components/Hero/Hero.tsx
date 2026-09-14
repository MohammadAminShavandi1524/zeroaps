import RubiksCube from "@/components/RubiksCube/RubiksCube";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative flex min-h-[660px] w-full items-center overflow-hidden border-b border-border bg-background lg:min-h-[760px]"
    >
      <div className="resend-diagonal-sheen pointer-events-none absolute inset-0 z-0" />

      <div
        className="pointer-events-none absolute top-1/2 right-[5%] z-0 h-[620px] w-[620px] -translate-y-1/2 rounded-full opacity-50 lg:right-[10%]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(143,166,247,0.04) 30%, rgba(15,16,22,0.6) 55%, transparent 75%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-0 right-0 z-0 h-[420px] w-[420px] opacity-30"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-container-max relative z-10 mx-auto w-full px-4 py-16 md:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="relative flex flex-col items-start lg:col-span-6">
            <div className="pointer-events-none absolute top-1/3 -right-6 hidden select-none font-mono text-sm text-accent/40 lg:flex">
              +
            </div>

            <a
              href="#contact-section"
              className="group mb-7 inline-flex items-center gap-2 rounded-full border border-border-medium bg-surface-overlay/80 px-3.5 py-1 shadow-sm backdrop-blur-md transition hover:border-border-strong"
            >
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-accent" />

              <span className="text-[12.5px] font-medium tracking-tight text-soft">
                Join us at ZEROAPS Forward
              </span>

              <span className="ml-0.5 font-mono text-xs text-accent transition-transform group-hover:translate-x-0.5">
                ›
              </span>
            </a>

            <h1 className="mb-6 flex select-none items-center font-sans text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span
                className="bg-clip-text font-bold tracking-tight text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, var(--heading), var(--hero-chrome-mid), var(--hero-chrome-bottom))",
                }}
              >
                ZERO
              </span>

              <span
                className="bg-clip-text font-bold tracking-tight text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, var(--accent-light), var(--accent-mid), var(--accent-deep))",
                }}
              >
                APS
              </span>
            </h1>

            <p className="mb-9 max-w-lg text-[15.5px] leading-relaxed font-normal text-muted sm:text-[16.5px]">
              The autonomous engineering lab & software primitives for
              ultra-resilient distributed systems. Zero-copy memory pipelines,
              deterministic consensus, and sub-millisecond cloud edge execution.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact-section"
                className="inline-flex items-center justify-center rounded-full bg-heading px-6 py-3 text-[13.5px] font-medium text-background shadow-lg transition-all hover:bg-soft"
              >
                Get started
              </a>

              <a
                href="#about-section"
                className="inline-flex items-center justify-center rounded-full border border-border-strong bg-surface-elevated/80 px-6 py-3 text-[13.5px] font-medium text-soft transition-all hover:border-border-hover hover:text-heading"
              >
                Documentation
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[480px] w-full items-center justify-center select-none lg:col-span-6 lg:min-h-[580px]">
            <div className="relative my-6 flex h-[580px] w-full items-center justify-center lg:h-[640px]">
              <RubiksCube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
