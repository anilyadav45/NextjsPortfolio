"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#111827]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#3B82F6] dark:bg-[#60A5FA] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-[#475569] dark:text-[#CBD5E1]">
            Feel free to reach out to me for collaborations or just a friendly
            chat.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3 space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-[#F1F5F9] dark:bg-[#1E293B] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#3B82F6] dark:bg-[#60A5FA] p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-[#475569] dark:text-[#CBD5E1]">
                    rebelanil885@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F1F5F9] dark:bg-[#1E293B] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#3B82F6] dark:bg-[#60A5FA] p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-[#475569] dark:text-[#CBD5E1]">
                    +91 8125305482
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F1F5F9] dark:bg-[#1E293B] p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#3B82F6] dark:bg-[#60A5FA] p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-[#475569] dark:text-[#CBD5E1]">
                    Chitoor, Ap, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/anilyadav45"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F1F5F9] dark:bg-[#1E293B] p-3 rounded-full hover:bg-[#3B82F6] hover:text-white dark:hover:bg-[#60A5FA] transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/anilyadav4577/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F1F5F9] dark:bg-[#1E293B] p-3 rounded-full hover:bg-[#3B82F6] hover:text-white dark:hover:bg-[#60A5FA] transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <form
              action="https://formsubmit.co/el/cezaza"
              method="POST"
              className="bg-[#F1F5F9] dark:bg-[#1E293B] p-8 rounded-xl shadow-md"
            >
              {/* Hidden fields for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://your-portfolio-site.com/thankyou"
              />
              <input
                type="hidden"
                name="_subject"
                value="New message from your portfolio!"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Anil Ydv"
                    className="w-full p-3 bg-white dark:bg-[#111827] border-0 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="anil45@example.com"
                    className="w-full p-3 bg-white dark:bg-[#111827] border-0 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  required
                  placeholder="How can I help you?"
                  className="w-full p-3 bg-white dark:bg-[#111827] border-0 rounded-md"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full p-3 bg-white dark:bg-[#111827] border-0 rounded-md resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white font-medium rounded-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
