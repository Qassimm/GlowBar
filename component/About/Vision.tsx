"use client"; 

import { motion, type Variants } from "framer-motion";
import { visionData } from "@/Data/vision";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }, // har card 0.2s ke gap se animate hoga
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 60 }, // neeche se start
  show: {
    opacity: 1,
    y: 0, // apni jagah par ooper aa jaye
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Vision = () => {
  return (
    <section className="py-20 lg:py-24 px-6 flex justify-center items-center">
      <motion.div
        className="flex flex-wrap justify-center gap-15"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {visionData.map(({ id, title, description }) => (
          <motion.div
            key={id}
            variants={card}
            className="flex flex-col items-center text-center gap-4 p-5 bg-brand-from text-primary-foreground rounded-2xl"
          >
            <h1 className="font-yester text-5xl">“{title}”</h1>
            <p className="text-2xl text-center max-w-[250px]">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Vision;