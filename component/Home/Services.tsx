"use client";

import HeadingTag from "../UI/HeadingTag";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import ServiceCards from "../UI/ServiceCards";

type Service = {
  id: number;
  title: string;
  slug: string;
  imageForHome: string;
  icon: string;
};

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchServicesData = async () => {
    try {
      const res = await axios.get("/api/services");
      setServices(res.data);
    } catch (error) {
      console.error("Failed to fetch services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchServicesData();
  }, []);

  return (
    <section className="py-20 lg:py-24 px-6 flex flex-col items-center overflow-hidden">
      <div className="relative flex flex-col gap-10 lg:gap-15">
        {/* Heading */}
        <HeadingTag
          title={"What We Offer!"}
          Slogan={"All Things Beauty, All in One Place."}
        />

        {/* Cards */}
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
          <div className="flex flex-wrap justify-center items-center gap-8">
            {services.slice(0, 4).map((service) => (
              <ServiceCards
                key={service.id}
                id={service.id}
                title={service.title}
                slug={service.slug}
                imageForHome={service.imageForHome}
                icon={service.icon}
              />
            ))}
          </div>
        )}

        {/* View services */}
        <Link
          href="/services"
          className="text-xl text-primary font-medium flex items-center justify-center lg:justify-end gap-1 hover:underline"
        >
          View services details
          <FaLongArrowAltRight className="h-5 w-5" />
        </Link>

        {/* Rose */}
        <motion.img
          src="/assets/rose.webp"
          alt="rose"
          initial={{ x: 150, rotate: -15, opacity: 0 }}
          whileInView={{ x: 0, rotate: -45, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="h-18 md:h-25 lg:h-30 w-18 md:w-25 lg:w-30 hidden sm:block absolute md:top-105 lg:top-10 md:right-10 lg:right-10 -z-1"
        />
      </div>
    </section>
  );
};

export default Services;