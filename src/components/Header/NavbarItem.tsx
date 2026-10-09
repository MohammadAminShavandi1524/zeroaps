interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
}

export default function NavbarItem({ href, children }: NavbarItemProps) {
  return (
    <a href={href} className="transition-colors hover:text-heading">
      {children}
    </a>
  );
}
