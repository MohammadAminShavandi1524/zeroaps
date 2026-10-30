export default function About() {
  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="border-border bg-background relative w-full border-b"
    >
      <div className="max-w-container-max mx-auto w-full px-4 py-24 md:px-8 md:py-32 lg:py-36">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {/* Section Label */}
          <div className="md:col-span-4">
            <h2
              id="about-heading"
              className="text-primary font-sans text-[16px] leading-relaxed font-medium tracking-[0.03em] uppercase [word-spacing:0.05em] sm:text-[17px]"
            >
              Who we are
            </h2>
          </div>

          {/* Main Description */}
          <div className="md:col-span-8">
            <div className="text-primary flex max-w-[720px] flex-col gap-6 font-sans text-[clamp(1.5rem,2.25vw,1.875rem)] leading-[1.35] font-normal tracking-[-0.035em]">
              <p>
                ZeroAPS is a small technical team working across programming,
                network engineering, and cybersecurity.
              </p>

              <p>
                Software depends on infrastructure. Network configuration
                affects access and reliability. Security depends on how both are
                designed and used.
              </p>

              <p>
                We approach them together: understand the environment, make
                technical choices explicit, and build systems that can be tested
                and maintained.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
