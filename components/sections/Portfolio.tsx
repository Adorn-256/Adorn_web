"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animated/Reveal";

const clientWebsites = [
  {
    name: "GoodForest Uganda",
    url: "https://goodforestsuganda.org/",
    logo: "https://goodforestsuganda.org/wp-content/uploads/2026/01/cropped-loggoe-2.png",
  },
  {
    name: "Musingi Engineering",
    url: "https://musingiengineering.com/",
    logo: "https://musingiengineering.com/wp-content/uploads/2025/11/cropped-NEW-LOGO-MUSINGI-scaled-3-768x659.png",
  },
  {
    name: "Greenshero LTD",
    url: "https://www.greensheroltd.com/",
    logo: "https://www.greensheroltd.com/assets/images/logo-header.svg",
  },
  {
    name: "Rest-Africa",
    url: "https://rest-africa.org/",
    logo: "https://rest-africa.org/wp-content/uploads/2025/11/cropped-REST_AFRICA__LOGO_2025_ALL_VERSIONS_003-02-removebg-preview-296x107.png",
  },
];

const projects = [
  {
    title: "RideShare App",
    description: "A custom carpooling app that simplifies ride-sharing in Uganda",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=60",
    category: "Mobile App"
  },
  {
    title: "E-Commerce Platform",
    description: "User-friendly online store for a local retail business",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=60",
    category: "Web Development"
  },
  {
    title: "Educational Platform",
    description: "Robust e-learning platform for a Ugandan education startup",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
    category: "Web Application"
  },
  {
    title: "CRM System",
    description: "Custom CRM solution for business management",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    category: "Software Development"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-gradient-brand">Portfolio</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover-glow h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    <span className="p-2 rounded-full bg-[#4cff00] text-black translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#00a3ff] mb-2 block">{project.category}</span>
                  <h3 className="font-bold mb-2 group-hover:text-[#00a3ff] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Online client websites */}
        <Reveal className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Our <span className="text-gradient-brand">Online Client Websites</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientWebsites.map((site, index) => (
              <motion.a
                key={site.name}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="p-6 dark:bg-gray-800 hover-glow hover-shine flex flex-col items-center gap-4 h-full">
                  <div className="h-16 w-full flex items-center justify-center grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={site.logo}
                      alt={`${site.name} logo`}
                      width={140}
                      height={64}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>
                  <div className="w-full border-t pt-3 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="font-bold truncate group-hover:text-[#00a3ff] transition-colors">{site.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{site.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</p>
                    </div>
                    <ArrowUpRight size={18} className="text-gray-400 group-hover:text-[#00a3ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
