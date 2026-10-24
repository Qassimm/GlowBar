import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

const BlogHero = ({ src, alt }: Props) => {
  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Image
        src={src}
        fill
        alt={alt}
        sizes="100vw"
        className="object-cover"
        priority
      />
    </section>
  );
};

export default BlogHero;