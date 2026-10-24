"use client";

import { useEffect, useRef } from "react";
import { motion, animate, useInView, type Variants } from "framer-motion";
import { achievementsData } from "@/Data/achievements";

// Number ko 0 se target tak count karta hai
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  // "4.9+" -> number: "4.9", suffix: "+"
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const decimals =
    match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimals) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [inView, target, suffix, decimals, duration]);

  return (
    <span ref={ref}>
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Achievements = () => {
  return (
    <section className="flex justify-center items-center py-12 lg:py-18 px-6 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full max-w-6xl"
      >
        {achievementsData.map((item) => {
          const Icon = item.Icon;

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-start gap-3 lg:gap-4"
            >
              <Icon className="shrink-0 bg-primary text-primary-foreground h-14 w-14 lg:h-15 lg:w-15 p-3 rounded-xl" />
              <div>
                <h2 className="font-yester text-3xl">
                  <Counter value={item.value} />
                </h2>
                <p className="text-xl lg:text-2xl font-medium">{item.label}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Achievements;