import Image from "next/image";

export default function Logo() {
  return (
    <a href="#hero-section" className="flex items-center ">
      <Image
        src="/logo.jpg"
        width={180}
        height={154}
        alt="ZEROAPS"
        className="h-10 w-auto object-contain transition-transform sm:h-12 md:h-14 lg:h-16"
        priority
      />
    </a>
  );
}
