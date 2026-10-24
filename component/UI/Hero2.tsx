"use client";

import { motion } from "framer-motion";

type Hero1Props = {
  title: string;
  description: string;
  className?: string;
};

const Hero2 = ({ title, description, className = "" }: Hero1Props) => {
  return (
    <section
      className={`relative  w-full overflow-hidden flex items-center justify-center px-6  bg-pink-200 py-24  ${className}`}
    >
      {/* Content overlay ke upar */}
      <div className="relative z-10 flex flex-col md: justify-center items-center gap-5 mt-20 md:mt-25">
        {/* Heading: left se right */}
        <motion.h2
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-yester text-7xl md:text-8xl 2xl:text-9xl text-primary text-center"
        >
          {title}
        </motion.h2>

        <span className="text-2xl 2xl:text-4xl max-w-lg 2xl:max-w-2xl text-center">
          {description}
        </span>

      </div>
        <img
          src="/assets/rose.webp"
          alt="Rose"
          className="h-15 md:h-30 lg:h-45 w-15 md:w-30 lg:w-45 absolute top-20 right-5 lg:right-30 -rotate-45"
        />
        <img
          src="/assets/rose.webp"
          alt="Rose"
          className="h-15 md:h-30 lg:h-45 w-15 md:w-30 lg:w-45 absolute bottom-10 left-5 lg:left-30 "
        />
    </section>
  );
};

export default Hero2;
