"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=900&fit=crop&q=80"
          alt="Technology Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00a3ff]/80 to-[#4cff00]/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Floating gradient orbs */}
      {!reduceMotion && (
        <>
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#00a3ff]/30 blur-3xl float-slow pointer-events-none" />
          <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-[#4cff00]/25 blur-3xl float-slower pointer-events-none" />
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        </>
      )}

      <motion.div
        variants={container}
        initial={reduceMotion ? false : "hidden"}
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white max-w-4xl mx-auto px-4"
      >
        <motion.div variants={item} className="float-slow mb-8">
          <Image
            src="https://i.ibb.co/4ZgmKF5/Adon.png"
            alt="Adorn Soft Technologies"
            width={300}
            height={100}
            className="mx-auto drop-shadow-[0_8px_30px_rgba(0,163,255,0.4)]"
          />
        </motion.div>

        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Businesses with{" "}
          <span className="text-gradient-brand">Innovative Tech Solutions</span>
        </motion.h1>
        <motion.p variants={item} className="text-xl mb-10 text-white/90">
          Transform your business with cutting-edge digital solutions in Fort Portal, Uganda
        </motion.p>
        <motion.div variants={item}>
          <Button
            size="lg"
            className="glow-pulse bg-[#4cff00] text-black hover:bg-[#3dd600] hover:scale-105 active:scale-95 transition-transform dark:text-white dark:bg-[#00a3ff] dark:hover:bg-[#0082cc]"
            onClick={scrollToContact}
          >
            Get Started
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
      >
        <ChevronDown size={32} className="animate-scroll-hint" />
      </a>
    </section>
  );
}
