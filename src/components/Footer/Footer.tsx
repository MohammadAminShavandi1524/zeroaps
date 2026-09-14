const footerColumns = [
  {
    title: "Platform",
    links: [
      {
        label: "Core Engine",
        href: "#about-section",
      },
      {
        label: "Wire Relay",
        href: "#about-section",
      },
      {
        label: "Anycast Edge",
        href: "#about-section",
      },
      {
        label: "Telemetry",
        href: "#about-section",
      },
    ],
  },
  {
    title: "Protocols",
    links: [
      {
        label: "Consensus",
        href: "#expertise-section",
      },
      {
        label: "Zero-Copy",
        href: "#expertise-section",
      },
      {
        label: "eBPF Filters",
        href: "#expertise-section",
      },
      {
        label: "mTLS Mesh",
        href: "#expertise-section",
      },
    ],
  },
  {
    title: "Systems",
    links: [
      {
        label: "Apex Engine",
        href: "#projects-section",
      },
      {
        label: "Aether Pipeline",
        href: "#projects-section",
      },
      {
        label: "Vanguard HSM",
        href: "#projects-section",
      },
      {
        label: "Stack Index",
        href: "#stack-section",
      },
    ],
  },
  {
    title: "Security",
    links: [
      {
        label: "Zero-Trust",
        href: "#philosophy-section",
      },
      {
        label: "Enclaves",
        href: "#philosophy-section",
      },
      {
        label: "Formal Specs",
        href: "#philosophy-section",
      },
      {
        label: "DKIM / Ed25519",
        href: "#philosophy-section",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        label: "Team",
        href: "#team-section",
      },
      {
        label: "Philosophy",
        href: "#philosophy-section",
      },
      {
        label: "Careers",
        href: "#contact-section",
      },
      {
        label: "Contact",
        href: "mailto:contact@zeroaps.com",
      },
    ],
  },
];

const logo =
  "https://lh3.googleusercontent.com/aida/AEtjO1Vmfu7_Pwmz6qdh270kTgSjf-ZVzSe0481SP-Z0EWDwEsevp4bWSUH6XP5KX6y6tewPRe6mNwOd-9BzRz4o0jXNsT5vQmIzbPYtT54N8Fis_8tLAAzkDYqUnVQYMhbTLIgJyghdMaaXaXD-js3gUiXWwI9mnEScyVvlxBf4_oOVpzmsc42LeHVh0Vy_tmJsQBa6nXnAWrOeJhQ015X6rfXXV_ZMsPG8sD9mttX8uKWtsAMeRSMyj_HEzuSQ";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-background text-[13px] text-muted">
      {/* Monumental Wordmark */}
      <div className="flex w-full flex-col items-center justify-end overflow-hidden pt-12 select-none">
        <div className="relative mx-auto flex w-full max-w-[1440px] translate-y-[32%] items-end justify-center px-4">
          <svg
            className="h-auto w-full max-w-[1360px] overflow-visible pointer-events-none"
            fill="none"
            viewBox="0 0 1400 360"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="footerChromeFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--footer-chrome-top)" />

                <stop offset="35%" stopColor="var(--footer-chrome-mid)" />

                <stop offset="70%" stopColor="var(--surface-subtle)" />

                <stop offset="100%" stopColor="var(--background)" />
              </linearGradient>

              <linearGradient
                id="footerChromeSpecular"
                x1="0%"
                x2="100%"
                y1="0%"
                y2="50%"
              >
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />

                <stop offset="30%" stopColor="rgba(255,255,255,0.85)" />

                <stop offset="60%" stopColor="rgba(200,200,210,0.3)" />

                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="285"
              textAnchor="middle"
              fontFamily="var(--font-geist), sans-serif"
              fontSize="240"
              fontWeight="900"
              letterSpacing="-0.04em"
            >
              <tspan fill="url(#footerChromeFill)">ZEROAPS</tspan>
            </text>

            <text
              x="50%"
              y="285"
              fill="none"
              textAnchor="middle"
              fontFamily="var(--font-geist), sans-serif"
              fontSize="240"
              fontWeight="900"
              letterSpacing="-0.04em"
              strokeWidth="1.8"
            >
              <tspan stroke="url(#footerChromeSpecular)">ZEROAPS</tspan>
            </text>
          </svg>
        </div>

        <div className="relative z-20 w-full">
          <div className="h-px w-full bg-border" />

          <div
            className="h-8 w-full"
            style={{
              background:
                "linear-gradient(to bottom, var(--surface-card), var(--background))",
            }}
          />
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-container-max mx-auto px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <a href="#hero-section" className="flex items-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center rounded border border-border-strong bg-surface-card p-1">
                <img
                  src={logo}
                  alt="ZEROAPS"
                  className="h-full w-full object-contain"
                />
              </div>

              <span className="text-[15px] font-semibold tracking-tight text-heading">
                ZERO
                <span className="text-muted">APS</span>
              </span>
            </a>

            <div className="text-[12.5px] leading-relaxed font-normal text-muted">
              Autonomous Systems Engineering Lab.
              <br />
              San Francisco • London • Zurich
            </div>

            {/* Status */}
            <div className="inline-flex items-center gap-2 rounded border border-border-medium bg-surface-card px-2.5 py-1 font-mono text-[11.5px]">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-accent" />

              <span className="text-soft">All systems operational</span>
            </div>

            {/* Social */}
            <div className="mt-1 flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-7 w-7 items-center justify-center rounded border border-border-medium bg-surface-elevated text-muted transition-colors hover:bg-[var(--footer-social-hover)] hover:text-heading"
              >
                <svg
                  className="h-3.5 w-3.5 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-7 w-7 items-center justify-center rounded border border-border-medium bg-surface-elevated text-muted transition-colors hover:bg-[var(--footer-social-hover)] hover:text-heading"
              >
                <svg
                  className="h-3 w-3 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-5 lg:col-span-8">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <div className="mb-3.5 font-mono text-[11px] font-semibold tracking-wider text-heading uppercase">
                  {column.title}
                </div>

                <ul className="space-y-2 text-[12.5px]">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <a
                        href={link.href}
                        className="transition-colors hover:text-heading"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 font-mono text-[10.5px] text-dim sm:flex-row">
          <div>
            © 2026 ZEROAPS Inc. All rights reserved. High-concurrency systems
            infrastructure.
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            <a href="#" className="transition-colors hover:text-soft">
              Privacy Policy
            </a>

            <a href="#" className="transition-colors hover:text-soft">
              Security Disclosures
            </a>

            <a href="#" className="transition-colors hover:text-soft">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
