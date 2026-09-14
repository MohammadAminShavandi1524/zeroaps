export default function Contact() {
  return (
    <section
      id="contact-section"
      className="relative w-full border-b border-border bg-background py-28"
    >
      <div className="max-w-container-max relative z-10 mx-auto px-4 text-center md:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />

          <span className="font-mono text-[10.5px] tracking-widest text-soft uppercase">
            Deploy Worldwide
          </span>
        </div>

        <h2 className="mb-6 text-[44px] leading-[0.98] font-bold tracking-tight text-heading select-none sm:text-[68px] lg:text-[84px]">
          Ready to build?{" "}
          <span className="text-chrome">
            Let&apos;s talk.
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-[15.5px] leading-relaxed font-normal text-muted sm:text-[17px]">
          Consult with our systems architects, audit existing infrastructure
          throughput, or commission bespoke low-latency kernels.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="mailto:engineering@zeroaps.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-heading px-6 py-2.5 text-[13.5px] font-semibold text-background shadow-[0_2px_14px_var(--shadow-soft)] transition-all hover:bg-soft"
          >
            Start a Project

            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </a>

          <a
            href="mailto:contact@zeroaps.com"
            className="inline-flex items-center justify-center rounded-full border border-border-medium bg-surface-elevated px-5 py-2.5 font-mono text-[13.5px] font-medium text-soft transition-all hover:border-border-hover hover:bg-surface-track hover:text-heading"
          >
            Schedule Briefing
          </a>
        </div>
      </div>
    </section>
  );
}