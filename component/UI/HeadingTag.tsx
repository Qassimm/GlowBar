import { motion } from "framer-motion";

type HeadingTagProp = {
  title: String;
  Slogan: String;
  className?: String;
};

const HeadingTag = ({ title, Slogan, className }: HeadingTagProp) => {
  return (
    <motion.div
      initial={{ x: -120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col items-center justify-center lg:items-start text-center lg:text-start ${className}`}
    >
      <h1
        className={`font-yester text-6xl sm:text-7xl md:text-8xl 2xl:text-[150px] text-brand-gradient text-center lg:text-start  ${className}`}
      >
        {title}
      </h1>
      <span
        className={`text-2xl 2xl:text-3xl max-w-lg 2xl:max-w-4xl  ${className}`}
      >
        {Slogan}
      </span>
      <div className=" h-30 w-68 lg:w-180 bg-primary  rounded-full blur-3xl opacity-30 -z-1 top-5 left-5 absolute" />
    </motion.div>
  );
};

export default HeadingTag;
