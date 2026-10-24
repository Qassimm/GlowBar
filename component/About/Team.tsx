"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { motion, type Variants } from "framer-motion";
import { teamData } from "@/Data/team";
import HeadingCenter from "../UI/HeadingCenter";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { y: 80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Team = () => {
  return (
    <section className="py-20 lg:py-24 px-6 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-15">
        {/* Heading: left se right */}

          <HeadingCenter
            title={"Our Team"}
            Slogan={"The Hands Behind Your Glow."}
          />

        {/* Cards: stagger, neeche se ooper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-15 max-w-6xl"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="group relative w-70 h-96 rounded-4xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src={member.image}
                fill
                alt={member.name}
                sizes="288px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient: neeche se start, ooper jaate transparent */}
              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/50 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Text: neeche */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col gap-1 text-primary-foreground opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                <h3 className="font-yester text-3xl">{member.name}</h3>
                <p className="text-lg font-medium">{member.title}</p>
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base hover:underline w-fit"
                >
                  <FaInstagram className="h-5 w-5" />@{member.instagram}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;