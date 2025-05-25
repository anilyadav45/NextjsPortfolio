"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#3B82F6] dark:border-[#60A5FA]">
              <Image
                src="/profile.jpeg"
                alt="Anil Yadav"
                fill
                className="object-cover scale-150"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#3B82F6] dark:text-[#60A5FA]">
              Computer Science Enthusiast from Nepal, Studying in India
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              I’m a CSE student originally from Nepal, currently pursuing my
              degree at JNTUA in Andhra Pradesh, India.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-[#F1F5F9] dark:bg-[#1E293B] px-4 py-2 rounded-lg">
                <span className="font-semibold">Location:</span> India
              </div>
              <div className="bg-[#F1F5F9] dark:bg-[#1E293B] px-4 py-2 rounded-lg">
                <span className="font-semibold">Study:</span> Computer Science
              </div>
              <div className="bg-[#F1F5F9] dark:bg-[#1E293B] px-4 py-2 rounded-lg">
                <span className="font-semibold">Interests:</span> MERN Stack,
                Java, DSA
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
