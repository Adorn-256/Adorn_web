"use client";

import { Card } from "@/components/ui/card";
import { Award, Users, Target, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/Reveal";
import { CountUp } from "@/components/animated/CountUp";

const stats = [
  { end: 50, suffix: "+", label: "Projects Completed" },
  { end: 100, suffix: "%", label: "Client Satisfaction" },
  { end: 24, suffix: "/7", label: "Support" },
];

const values = [
  {
    icon: Target,
    title: "Our Vision",
    text: "To be a leading tech agency in Africa, delivering excellence in technology and customer satisfaction.",
  },
  {
    icon: Award,
    title: "Our Mission",
    text: "To empower businesses with transformative, cost-effective, and user-friendly technology solutions that drive growth and success.",
  },
  {
    icon: Users,
    title: "Our Values",
    text: "Innovation, integrity, and customer satisfaction are at the core of everything we do.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40 dark:opacity-10 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a3ff] mb-3">
                <Rocket size={16} /> About Us
              </span>
              <h2 className="text-4xl font-bold mb-6">
                Who <span className="text-gradient-brand">We Are</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-10">
                At Adorn Soft Tech, we are passionate about solving challenges through technology. Founded with a mission to empower businesses, we specialize in providing innovative, scalable, and efficient tech solutions in Fort Portal, Uganda.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="text-center p-4 rounded-xl hover:bg-[#00a3ff]/5 transition-colors"
                  >
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      className="text-3xl md:text-4xl font-bold text-[#00a3ff] block"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.12} x={24} y={0}>
                <Card className="p-6 dark:bg-gray-800 hover-glow group">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-[#00a3ff]/10 text-[#00a3ff] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <value.icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{value.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{value.text}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
