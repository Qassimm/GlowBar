"use client";
import { FaStar } from "react-icons/fa";
import { testimonialData } from "@/Data/Testimoial";
import { motion, type Variants } from "framer-motion";
import HeadingCenter from "../UI/HeadingCenter";

const rosesContainer: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.8, staggerChildren: 0 },
  },
};

const topRose: Variants = {
  hidden: { x: 150, rotate: -15, opacity: 0 },
  visible: {
    x: 0,
    rotate: -45,
    opacity: 0.9,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const bottomRose: Variants = {
  hidden: { x: -150, rotate: -30, opacity: 0 },
  visible: {
    x: 0,
    rotate: 0,
    opacity: 0.9,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Testimonial = () => {
  return (
    <section className="relative px-6 py-20 md:py-0 overflow-x-clip">
      <div className="relative flex items-center justify-center text-center md:sticky md:top-0 md:h-screen">
        
        <HeadingCenter
          title={"Word of Beauty"}
          Slogan={"Trusted by Beauty Influencers Across Pakistan"}
        />
        <motion.div
          variants={rosesContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="hidden md:block absolute inset-0 pointer-events-none"
        >
          <motion.img
            src="/assets/rose.webp"
            alt="Rose"
            variants={topRose}
            className="h-35 lg:h-50 w-35 lg:w-50 absolute top-30 right-10 lg:right-30"
          />

          <motion.img
            src="/assets/rose.webp"
            alt="Rose"
            variants={bottomRose}
            className="h-30 lg:h-45 w-30 lg:w-45 absolute bottom-30 left-0 lg:left-30"
          />
        </motion.div>
      </div>
      <div className="relative z-10 mt-10 flex flex-col items-center gap-8 max-w-6xl mx-auto md:-mt-[100vh] md:block md:pt-[70vh] md:pb-[30vh]">
        {testimonialData.map((item, index) => {
          const isRight = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`flex items-center justify-center md:min-h-[150vh] ${
                isRight ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div className="p-4 w-fit max-w-full flex flex-col items-start justify-center gap-5 rounded-2xl bg-brand-from/90 backdrop-blur-2xl text-primary-foreground">
                <div className="flex gap-2">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <FaStar key={i} className="h-6 w-6" />
                  ))}
                </div>

                <p className="max-w-sm md:max-w-[240px] text-xl">
                  "{item.description}"
                </p>

                <span className="text-2xl">{item.title}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
