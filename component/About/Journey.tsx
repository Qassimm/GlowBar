"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

// Dono roses ek hi parent se trigger hongi (image aur text ke baad)
const rosesContainer: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.8, staggerChildren: 0 },
  },
};

// Top rose: right se left, thodi rotation ke sath
const topRose: Variants = {
  hidden: { x: 150, rotate: -15, opacity: 0 },
  visible: {
    x: 0,
    rotate: -45,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Bottom rose: left se right, ulti rotation ke sath
const bottomRose: Variants = {
  hidden: { x: -150, rotate: -60, opacity: 0 },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Journey = () => {
  return (
    <section className="flex justify-center items-center py-20 lg:py-24 px-6 overflow-hidden">
      <div className="relative flex gap-25">
        {/* Image: left se right */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <Image
            src={"/assets/About/intrior_design.webp"}
            height={550}
            width={300}
            alt="img"
            className="rounded-4xl shadow-2xl shadow-black/80"
          />
        </motion.div>

        {/* Poora text: right se left (image ke sath hi) */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-center md:text-start items-center md:items-start gap-4"
        >
          <h2 className="font-yester text-6xl sm:text-7xl md:text-8xl text-brand-gradient">
            GlowBar Journey
          </h2>
          <p className="max-w-xl text-2xl">
            Girls Bar — House of Brides was built for women who refuse to settle
            for average. From precision hair color and HydraFacials to full
            bridal transformations, every service is delivered by specialists
            who genuinely care about your results
            <br />
            Walk in. Be welcomed. Walk out transformed. That's the Glow Bar
            promise..
          </p>

          <p className="font-yester text-3xl max-w-xl">
            "The staff was amazing. They offered us tea and made us feel
            comfortable. The service was impeccable."
          </p>
          <span className="text-primary text-xl">— Zainab Moeed</span>
        </motion.div>

        {/* Dono roses: aik sath animate, image aur text ke baad */}
        <motion.div
          variants={rosesContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Top rose: right se left */}
          <motion.img
            src="/assets/rose.webp"
            alt="rose"
            variants={topRose}
            className="hidden sm:block h-20 md:h-30 w-20 md:w-30 absolute -top-20 md:-top-auto lg:top-auto -right-10 md:-right-20 lg:-right-42"
          />

          {/* Bottom rose: left se right */}
          <motion.img
            src="/assets/rose.webp"
            alt="rose"
            variants={bottomRose}
            className="hidden sm:block h-20 w-20 absolute -bottom-15 left-0 md:left-82"
          />
        </motion.div>

        <div className="bg-primary/60 h-165 w-30 rounded-[50%] blur-[80px] absolute -top-10 lg:top-0 right-45 sm:right-60 lg:right-80 rotate-32 sm:rotate-52 -z-1"/>
      </div>
    </section>
  );
};

export default Journey;