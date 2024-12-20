"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen">
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white max-w-4xl mx-auto px-4">
        <Image
          src="https://i.ibb.co/4ZgmKF5/Adon.png"
          alt="Adorn Soft Technologies"
          width={300}
          height={100}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Businesses with Innovative Tech Solutions
        </h1>
        <p className="text-xl mb-8">
          Transform your business with cutting-edge digital solutions in Fort Portal, Uganda
        </p>
        <Button 
          size="lg" 
          className="bg-[#4cff00] text-black hover:bg-[#3dd600] dark:text-white dark:bg-[#00a3ff] dark:hover:bg-[#0082cc]"
          onClick={scrollToContact}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}