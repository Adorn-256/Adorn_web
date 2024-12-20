"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

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
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative">
              <Quote className="text-[#00a3ff] mb-4" size={24} />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-sm text-[#00a3ff]">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}