"use client";

import Image from "next/image";
import HeadingTag from "../UI/HeadingTag";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

type Service = {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageForHome: string;
  imageForService: string;
  icon: string;
  List1Name: string;
  list1: {
    category: string;
    price: string;
  }[];
  List2Name: string;
  list2: {
    category: string;
    price: string;
  }[];
};

const Cards = () => {
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
    <section className="py-20 lg:py-24 px-6 flex flex-col items-center gap-20 lg:gap-28">
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
        services.map((service, index) => {
          const imageRight = index % 2 !== 0;
          return (
            <div
              key={service.id}
              className={`flex flex-col items-center gap-10 lg:gap-35 ${
                imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Image */}
              <Image
                src={service.imageForService}
                height={250}
                width={400}
                alt={service.title}
                className="rounded-4xl"
              />

              {/* Heading + description + list1 */}
              <div className="flex flex-col items-start gap-5 w-full max-w-xl">
                <HeadingTag title={service.title} Slogan={service.description} />

                <div className="flex flex-col gap-4 text-xl w-full">
                  {service.list1.map((item, i) => (
                    <p key={i} className="flex items-end gap-2 w-full">
                      <span>{item.category}</span>
                      <span className="flex-1 border-b-2 border-dashed border-primary/40 mb-1.5" />
                      <span className="font-medium">{item.price}</span>
                    </p>
                  ))}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="text-xl text-primary hover:underline"
                >
                  View all
                </Link>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Cards;