"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Hero1Props = {
  image: string;
  title: string;
  description: string;
  button1: string;
  button1Link:string;
  button2: string;
  button2Link:string;
  className?: string;
  
};

const Hero1 = ({
  image,
  title,
  description,
  button1,
  button1Link,
  button2,
  button2Link,
  className = "",
}: Hero1Props) => {
  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 ${className}`}
    >
      {/* Background image (prop se) */}
      <Image
        src={image}
        fill
        alt={title}
        className="object-cover z-0 pointer-events-none"
        priority
      />

      {/* Content overlay ke upar */}
      <div className="relative z-10 flex flex-col md: justify-center items-center gap-5 text-primary-foreground mt-20 md:mt-25">
        {/* Heading: left se right */}
        <motion.h2
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-yester text-5xl sm:text-7xl md:text-8xl 2xl:text-9xl text-primary-foreground text-center"
        >
          {title}
        </motion.h2>

        <span className="text-2xl 2xl:text-4xl max-w-lg 2xl:max-w-2xl text-center">
          {description}
        </span>

        <div className="text-2xl flex justify-center lg:justify-start items-center flex-col sm:flex-row gap-3">
          <Link
            href={button1Link}
            className="border-2 border-primary-foreground bg-primary-foreground hover:bg-transparent py-1 px-3 rounded-full text-primary hover:text-primary-foreground transition-all duration-100"
          >
            {button1}
          </Link>
          <Link
            href={button2Link}
            className="border-2 border-primary-foreground hover:bg-primary-foreground py-1 px-3 rounded-full hover:text-primary text-primary-foreground transition-all duration-100"
          >
            {button2}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero1;