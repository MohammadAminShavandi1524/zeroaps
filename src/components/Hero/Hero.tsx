import Cube from "../Cube/Cube";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="border-border bg-background relative flex min-h-[660px] w-full items-center overflow-hidden border-b lg:min-h-[760px]"
    >
      {/* Background atmosphere */}
      <div className="resend-diagonal-sheen pointer-events-none absolute inset-0 z-0" />

      <div
        className="pointer-events-none absolute top-1/2 right-[5%] z-0 h-[620px] w-[620px] -translate-y-1/2 rounded-full opacity-40 lg:right-[10%]"
        style={{
          background:
            "radial-gradient(circle, rgba(250,250,250,0.055) 0%, rgba(161,161,170,0.025) 35%, rgba(20,20,20,0.35) 60%, transparent 75%)",
        }}
      />

      <div className="max-w-container-max relative z-10 mx-auto w-full px-4 py-16 md:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Hero Content */}
          <div className="relative flex flex-col items-start lg:col-span-6">
            <h1 className="mb-5 font-sans text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.05] font-bold tracking-[-0.045em] select-none">
              <span className="text-primary block">Engineering</span>

              <span
                className="block bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #BDBDC3 0%, #A7A7AD 48%, #85858E 100%)",
                }}
              >
                Across Layers.
              </span>
            </h1>

            <p className="text-secondary mb-9 max-w-[440px] text-[14px] leading-[1.8] font-normal sm:text-[15px]">
              We build software, configure networks, and assess security with
              the whole system in mind.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#projects-section"
                className="bg-primary text-neutral hover:bg-tertiary inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-[13px] font-medium transition-colors duration-200"
              >
                Explore our work
              </a>

              <a
                href="#contact-section"
                className="text-secondary hover:text-primary inline-flex min-h-11 items-center justify-center px-1 text-[13px] font-medium transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Interactive 3D Cube */}
          <div className="relative flex min-h-[400px] w-full items-center justify-center bg-transparent select-none lg:col-span-6 lg:min-h-[580px]">
            <div className="relative my-6 flex h-[440px] w-full items-center justify-center sm:h-[520px] lg:h-[640px]">
              <Cube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
