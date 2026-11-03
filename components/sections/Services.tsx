"use client";

import { Card } from "@/components/ui/card";
import { Wifi, Monitor, Shield, Camera, Code, Database, Globe, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/Reveal";

// Define the type for each service
type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

// Array of services with type annotation
const services: Service[] = [
  {
    icon: <Code />,
    title: "Custom Software Development",
    description: "Tailored software solutions to solve your business challenges",
  },
  {
    icon: <Globe />,
    title: "Website Development",
    description: "Professional, responsive websites that drive results",
  },
  {
    icon: <Shield />,
    title: "IT Consultancy",
    description: "Expert guidance for your technology infrastructure",
  },
  {
    icon: <Monitor />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence",
  },
  {
    icon: <Database />,
    title: "Cloud Solutions",
    description: "Scalable cloud services for your business needs",
  },
  {
    icon: <ShoppingCart />,
    title: "E-Commerce Solutions",
    description: "Custom online stores that drive sales",
  },
  {
    icon: <Camera />,
    title: "CCTV Installation",
    description: "Professional security camera systems",
  },
  {
    icon: <Wifi />,
    title: "Network Installation",
    description: "Reliable networking infrastructure setup",
  },
];

// Main Services component
export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-[#00a3ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-gradient-brand">Services</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ServiceCard component with type definition
function ServiceCard({ icon, title, description }: Service) {
  return (
    <Card className="p-6 dark:bg-gray-800 hover-glow hover-shine group h-full">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 rounded-full bg-[#00a3ff]/10 text-[#00a3ff] group-hover:bg-[#4cff00]/15 group-hover:text-[#3dd600] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-[#00a3ff] transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
}
