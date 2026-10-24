"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full pt-18 px-6 bg-linear-to-r from-[#FEC4C4] to-[#FF7477] overflow-hidden flex items-center justify-center lg:justify-start">
      {/* Background image */}
      <Image
        src="/assets/Home/Hero.webp"
        fill
        alt="Hero image"
        className="hidden lg:block object-contain object-right z-0 pointer-events-none"
        priority
      />

      <div className="relative flex flex-col gap-3 text-center lg:text-start lg:items-start">
        {/* Heading: left se right */}
        <motion.h1
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-yester text-5xl sm:text-7xl md:text-8xl 2xl:text-[150px] text-brand-gradient"
        >
          Shine Bright,
          <br /> Feel Beautiful
        </motion.h1>

        <span className="text-2xl 2xl:text-3xl max-w-lg 2xl:max-w-4xl">
          GlowBar is your one-stop beauty destination for makeup,
        </span>

        <div className="text-2xl flex justify-center lg:justify-start items-center flex-col sm:flex-row gap-3">
          <Link
            href={"/contact"}
            className="border-2 border-primary bg-primary hover:bg-transparent py-1 px-3 rounded-full text-primary-foreground hover:text-primary transition-all duration-100"
          >
            Book a call
          </Link>
          <Link
            href={"/services"}
            className="border-2 border-primary hover:bg-primary py-1 px-3 rounded-full hover:text-primary-foreground text-primary transition-all duration-100"
          >
            Explore Services
          </Link>
        </div>

        {/* Top rose: right se left, thodi rotation ke sath */}
        <motion.img
          src="/assets/rose.webp"
          alt="rose"
          initial={{ x: 150, rotate: 30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="h-18 md:h-25 lg:h-15 w-18 md:w-25 lg:w-15 absolute -top-20 sm:-top-15 lg:top-0 -right-5 md:-right-25 lg:-right-15"
        />

        {/* Bottom rose: left se right, ulti rotation ke sath */}
        <motion.img
          src="/assets/rose.webp"
          alt="rose"
          initial={{ x: -150, rotate: -60, opacity: 0 }}
          animate={{ x: 0, rotate: -30, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="h-18 sm:h-25 lg:h-35 w-18 sm:w-25 lg:w-35 absolute -bottom-22 md:-bottom-15 lg:-bottom-35 -left-5 sm:-left-15 lg:left-110"
        />
      </div>
    </section>
  );
};

export default Hero;