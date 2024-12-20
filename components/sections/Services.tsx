"use client";

import { Card } from "@/components/ui/card";
import { Wifi, Monitor, Shield, Camera, Code, Database, Globe, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: <Code />,
    title: "Custom Software Development",
    description: "Tailored software solutions to solve your business challenges"
  },
  {
    icon: <Globe />,
    title: "Website Development",
    description: "Professional, responsive websites that drive results"
  },
  {
    icon: <Shield />,
    title: "IT Consultancy",
    description: "Expert guidance for your technology infrastructure"
  },
  {
    icon: <Monitor />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence"
  },
  {
    icon: <Database />,
    title: "Cloud Solutions",
    description: "Scalable cloud services for your business needs"
  },
  {
    icon: <ShoppingCart />,
    title: "E-Commerce Solutions",
    description: "Custom online stores that drive sales"
  },
  {
    icon: <Camera />,
    title: "CCTV Installation",
    description: "Professional security camera systems"
  },
  {
    icon: <Wifi />,
    title: "Network Installation",
    description: "Reliable networking infrastructure setup"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow dark:bg-gray-800">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-[#00a3ff]">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </Card>
  );
}