"use client";

import React from "react";
import HeadingTag from "../UI/HeadingTag";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const points = [
  { id: 1, point: "Professional service" },
  { id: 2, point: "High quality products" },
  { id: 3, point: "100% satisfaction" },
];

const Bride = () => {
  return (
    <section className="py-20 lg:py-24 px-6 flex items-center justify-center overflow-hidden ">
      <div className="max-w-[1300px] mx-auto relative flex items-center justify-between flex-col lg:flex-row w-full ">
        {/* Heading + content: left se right */}
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start justify-center md:justify-start gap-5"
        >
          <HeadingTag
            title={"House of Brides"}
            Slogan={"Complete Bridal Beauty at GlowBar."}
          />

          <div className="flex flex-wrap justify-center lg:justify-start gap-2 max-w-lg">
            {points.map((p, i) => (
              <div key={i} className="flex items-center gap-1 text-xl">
                <FaCheck className="bg-primary text-primary-foreground p-1 rounded-full h-5 w-5" />
                <span>{p.point}</span>
              </div>
            ))}
          </div>

          <Link
            href={"/contact"}
            className="border-2 border-primary bg-primary hover:bg-transparent py-1 px-3 rounded-full text-primary-foreground hover:text-primary transition-all duration-100 w-fit text-2xl"
          >
            Reach out
          </Link>
        </motion.div>

        {/* Bride image: right se left (heading ke sath hi) */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden lg:block"
        >
          <Image
            src={"/assets/Home/bride.webp"}
            width={450}
            height={450}
            alt="bride"
          />
        </motion.div>

        {/* Top rose: right se left, thodi rotation ke sath */}
        <motion.img
          src="/assets/rose.webp"
          alt="rose"
          initial={{ x: 150, rotate: -15, opacity: 0 }}
          whileInView={{ x: 0, rotate: -45, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="h-18 md:h-25 lg:h-20 w-18 md:w-25 lg:w-20 hidden sm:block absolute sm:-top-20 lg:top-0 sm:right-0 md:-right-25 lg:right-110 -z-1"
        />

        {/* Bottom rose: left se right, ulti rotation ke sath */}
        <motion.img
          src="/assets/rose.webp"
          alt="rose"
          initial={{ x: -150, rotate: -60, opacity: 0 }}
          whileInView={{ x: 0, rotate: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="h-25 md:h-30 lg:h-30 w-25 md:w-30 lg:w-30 hidden sm:block absolute -bottom-10 lg:bottom-0 sm:-left-10 lg:left-130 -z-1"
        />
      </div>
    </section>
  );
};

export default Bride;