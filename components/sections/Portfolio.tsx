"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

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
    <section id="portfolio" className="py-20 bg-gray-51">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-[#00a3ff] mb-2 block">{project.category}</span>
                <h3 className="font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}