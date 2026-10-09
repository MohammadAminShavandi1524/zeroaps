import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="border-border bg-background/70 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-xl transition-all">
      <div className="max-w-container-max mx-auto flex min-h-14 items-center justify-between px-4 py-2.5 md:px-8">
        <div className="w-30 flex justify-center">
          <Logo />
        </div>

        <Navbar />

        <div className="w-30 flex justify-center">
          <a
            href="#contact-section"
            className="bg-heading text-background hover:bg-soft inline-flex items-center justify-center rounded-full px-4 py-2 text-[15px] font-medium shadow-[0_1px_8px_var(--shadow-soft)] transition-all hover:shadow-[0_2px14px_var(--shadow-hover)]"
          >
            Get in touch
          </a>
        </div>


      </div>
    </header>
  );
}
