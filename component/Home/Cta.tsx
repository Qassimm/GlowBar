"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";

// Dono roses ek hi parent se trigger hongi
const rosesContainer: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.8, staggerChildren: 0 },
  },
};

// Right wali rose: right se left (rotation fixed -65°)
const rightRose: Variants = {
  hidden: { x: 150, rotate: -65, opacity: 0 },
  visible: {
    x: 0,
    rotate: -65,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Left wali rose: left se right (rotation fixed 10°)
const leftRose: Variants = {
  hidden: { x: -150, rotate: 10, opacity: 0 },
  visible: {
    x: 0,
    rotate: 10,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Cta = () => {
  return (
    <section className="relative min-h-screen w-full py-24 px-6 overflow-hidden flex flex-col items-center justify-center">
      <Image
        src="/assets/red_background.webp"
        fill
        alt="Hero image"
        className="object-cover z-0 pointer-events-none"
        priority
      />
      <div className="relative text-primary-foreground flex flex-col items-center justify-center gap-6 z-10">
        {/* Heading: neeche se ooper */}
        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-yester text-6xl sm:text-7xl md:text-8xl 2xl:text-[150px] text-center text-primary-foreground max-w-2xl 2xl:max-w-5xl"
        >
          Begin your clinical beauty journey.
        </motion.h1>

        <p className="text-xl md:text-2xl text-center text-primary-foreground mt-6 max-w-2xl">
          Elevate your beauty with <span className="font-yester">GlowBar</span>{" "}
          where expert care, luxurious treatments, and personalized services
          come together to reveal your natural glow.
        </p>

        <Link
          href={"/booking"}
          className="text-xl sm:text-2xl border-2 border-primary-foreground bg-primary-foreground hover:bg-transparent py-1 px-3 rounded-full text-primary hover:text-primary-foreground transition-all duration-100 flex items-center gap-2"
        >
          Secure your appointment
          <FaLongArrowAltRight className="h-5 w-5" />
        </Link>

        {/* Dono roses: aik sath animate */}
        <motion.div
          variants={rosesContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Right wali rose: right se left */}
          <motion.img
            src="/assets/whiteRose.webp"
            alt="rose"
            variants={rightRose}
            className="h-40 md:h-45 lg:h-80 w-40 md:w-45 lg:w-80 hidden sm:block absolute sm:top-70 lg:top-40 sm:right-0 md:-right-10 lg:-right-80 z-1"
          />

          {/* Left wali rose: left se right */}
          <motion.img
            src="/assets/whiteRose.webp"
            alt="rose"
            variants={leftRose}
            className="md:h-25 lg:h-50 md:w-25 lg:w-50 hidden md:block absolute md:top-25 lg:top-0 md:-left-15 lg:-left-80 z-1"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;