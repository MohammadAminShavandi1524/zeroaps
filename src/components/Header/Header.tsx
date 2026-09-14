export default function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl transition-all">
      <div className="max-w-container-max mx-auto flex h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">
          <a href="#hero-section" className="group flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-md border border-border-strong bg-surface-card p-1 shadow-inner transition-colors group-hover:border-border-hover">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1Vmfu7_Pwmz6qdh270kTgSjf-ZVzSe0481SP-Z0EWDwEsevp4bWSUH6XP5KX6y6tewPRe6mNwOd-9BzRz4o0jXNsT5vQmIzbPYtT54N8Fis_8tLAAzkDYqUnVQYMhbTLIgJyghdMaaXaXD-js3gUiXWwI9mnEScyVvlxBf4_oOVpzmsc42LeHVh0Vy_tmJsQBa6nXnAWrOeJhQ015X6rfXXV_ZMsPG8sD9mttX8uKWtsAMeRSMyj_HEzuSQ"
                alt="ZEROAPS"
                className="h-full w-full rounded-sm object-contain"
              />
            </div>

            <div className="flex items-baseline text-base font-semibold tracking-tight">
              <span className="font-bold tracking-tight text-heading">
                ZERO
              </span>

              <span className="font-bold tracking-tight text-muted">APS</span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-[13px] font-normal text-muted md:flex">
            <a
              href="#about-section"
              className="transition-colors hover:text-heading"
            >
              Platform
            </a>

            <a
              href="#expertise-section"
              className="transition-colors hover:text-heading"
            >
              Discipline
            </a>

            <a
              href="#process-section"
              className="transition-colors hover:text-heading"
            >
              Process
            </a>

            <a
              href="#projects-section"
              className="transition-colors hover:text-heading"
            >
              Showcase
            </a>

            <a
              href="#stack-section"
              className="transition-colors hover:text-heading"
            >
              Stack
            </a>

            <a
              href="#team-section"
              className="transition-colors hover:text-heading"
            >
              Team
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact-section"
            className="hidden px-2.5 py-1 font-mono text-[12.5px] text-muted transition-colors hover:text-heading sm:inline-block"
          >
            Console
          </a>

          <a
            href="#contact-section"
            className="inline-flex items-center justify-center rounded-full bg-heading px-3.5 py-1.5 text-[12.5px] font-medium text-background shadow-[0_1px_8px_var(--shadow-soft)] transition-all hover:bg-soft hover:shadow-[0_2px_14px_var(--shadow-hover)]"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
