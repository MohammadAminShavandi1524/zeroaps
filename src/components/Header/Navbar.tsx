import NavbarItem from "./NavbarItem";

const items = [
  {
    label: "Who we are",
    href: "#about-section",
  },
  {
    label: "Expertise",
    href: "#expertise-section",
  },
  {
    label: "Process",
    href: "#process-section",
  },
  {
    label: "Projects",
    href: "#projects-section",
  },
  {
    label: "Stack",
    href: "#stack-section",
  },
  {
    label: "Team",
    href: "#team-section",
  },
];

export default function Navbar() {
  return (
    <nav className="hidden items-center gap-6 text-[15px] font-normal text-muted md:flex">
      {items.map((item) => (
        <NavbarItem key={item.label} href={item.href}>
          {item.label}
        </NavbarItem>
      ))}
    </nav>
  );
}
