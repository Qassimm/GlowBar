import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ServiceProps = {
  id: number;
  title: string;
  slug: string;
  imageForHome: string;
  icon: string;
};

const cardVariants: Variants = {
  hidden: {
    y: 80,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ServiceCards = ({
  imageForHome,
  title,
  icon,
  slug,
  id,
}: ServiceProps) => {
  return (
    <Link href={`/services/${slug}`} key={id}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-75 h-75 rounded-4xl overflow-hidden flex items-end"
      >
        <Image
          src={imageForHome}
          fill
          alt={title}
          className="object-cover pointer-events-none opacity-85"
          sizes="300px"
        />

        <div className="relative z-10 p-4 flex items-center gap-3">
          <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center">
            <Image
              src={icon}
              width={30}
              height={30}
              alt={title}
            />
          </div>

          <h3 className="text-primary font-bold text-2xl">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};

export default ServiceCards;