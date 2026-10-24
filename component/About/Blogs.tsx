"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import HeadingCenter from "../UI/HeadingCenter";
import { useEffect, useState } from "react";
import axios from "axios";

type Blog = {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  slug: string;
};

const gridVariants: Variants = {
  hidden: {},
  visible: {},
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
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

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogsData = async () => {
    try {
      const res = await axios.get("/api/blogs");
      setBlogs(res.data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogsData();
  }, []);

  return (
    <section className="py-20 lg:py-24 px-6 flex justify-center items-center overflow-hidden">
      <div className="relative flex flex-col items-center justify-center gap-15 w-full">
        <div className="relative flex flex-col items-center justify-center text-center">
          <HeadingCenter
            title={"Our Blogs"}
            Slogan={
              "Discover the latest beauty tips, expert advice, and inspiring ideas to elevate your self-care routine."
            }
          />
          <div className="h-30 w-68 lg:w-180 bg-primary rounded-full blur-3xl opacity-30 -z-1 top-5 left-5 absolute" />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center gap-2 py-20">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-3 w-3 rounded-full bg-primary"
                animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="flex flex-wrap justify-center items-stretch gap-15"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={cardVariants}
                className="flex flex-col rounded-2xl overflow-hidden shadow-xl shadow-black/30 bg-primary-foreground"
              >
                <Link href={`/blogs/${blog.slug}`}>
                  <Image
                    src={blog.image}
                    width={150}
                    height={250}
                    alt={blog.title}
                    className="w-full h-auto object-cover"
                  />

                  <div className="flex flex-col items-center justify-center text-center gap-3 p-2">
                    <h2 className="font-yester text-2xl text-primary max-w-xs">
                      {blog.title}
                    </h2>
                    <p className="text-xl max-w-xs">{blog.excerpt}</p>
                    <p className="text-primary">Read More</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
        <motion.img
          src="/assets/rose.webp"
          alt="Rose"
          variants={topRose}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="h-35 lg:h-30 w-35 lg:w-30 absolute hidden md:block top-30 right-0 -z-1"
        />

        <motion.img
          src="/assets/rose.webp"
          alt="Rose"
          variants={bottomRose}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="h-30 lg:h-35 w-30 lg:w-35 absolute hidden md:block bottom-0 lg:bottom-30 left-10 lg:-left-10 -z-1"
        />
      </div>
    </section>
  );
};

export default Blogs; 