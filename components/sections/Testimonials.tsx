"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/Reveal";

const testimonials = [
  {
    name: "Joseph Mukasa",
    role: "Small Business Owner",
    content: "Adorn Soft Tech exceeded our expectations with their excellent service and timely delivery. Our website looks amazing and functions flawlessly.",
    company: "Local Retail Store"
  },
  {
    name: "Esther Namugga",
    role: "Marketing Manager",
    content: "The team at Adorn Soft Tech is incredibly professional and responsive. They transformed our digital marketing strategy, and we've seen significant growth in leads.",
    company: "Tech Startup"
  },
  {
    name: "David Okello",
    role: "CEO",
    content: "Their expertise in CCTV installation and networking has greatly improved our security infrastructure. Highly recommended!",
    company: "Security Firm"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            What Our <span className="text-gradient-brand">Clients Say</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card className="p-6 relative hover-glow h-full group">
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#00a3ff] to-[#4cff00] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                <Quote className="text-[#00a3ff] mb-4 group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300" size={24} />
                <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-[#00a3ff]">{testimonial.company}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
