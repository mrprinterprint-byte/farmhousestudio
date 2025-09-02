import Image from "next/image";

interface HeroSectionProps {
  src: string;
  alt: string;
}

export default function HeroSection({ src, alt }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={src}
        alt={alt}
        fill
        className=""
        priority
      />
    </section>
  );
}
