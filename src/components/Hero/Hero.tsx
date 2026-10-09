import Cube from "../Cube/Cube";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="border-border bg-background relative flex min-h-[660px] w-full items-center overflow-hidden border-b lg:min-h-[760px]"
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
            <h1 className="mb-6 flex items-center font-sans text-5xl leading-[1.05] font-bold tracking-tight select-none sm:text-6xl lg:text-7xl">
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

            <h2 className="mb-6 text-4xl">Engineering Across Layers.</h2>

            <p className="text-muted mb-9 max-w-lg text-[15.5px] leading-relaxed font-normal sm:text-[16.5px]">
              We build software, configure networks, and assess security with
              the whole system in mind.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#contact-section"
                className="bg-heading text-background hover:bg-soft inline-flex items-center justify-center rounded-full px-6 py-3 text-[13.5px] font-medium shadow-lg transition-all"
              >
                Explore our work
              </a>

              <a
                href="#who-we-are"
                className="border-border-strong bg-surface-elevated/80 text-soft hover:border-border-hover hover:text-heading inline-flex items-center justify-center rounded-full border px-6 py-3 text-[13.5px] font-medium transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[480px] w-full items-center justify-center bg-transparent select-none lg:col-span-6 lg:min-h-[580px]">
            <div className="relative my-6 flex h-[580px] w-full items-center justify-center lg:h-[640px]">
              <Cube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
