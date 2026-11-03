"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/animated/Reveal";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+256 700 123 456" },
  { icon: Mail, label: "Email", value: "info@adornsofttech.com" },
  { icon: MapPin, label: "Location", value: "Fort Portal, Uganda" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4cff00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <Reveal>
          <h2 className="text-4xl font-bold text-center mb-16">
            Get in <span className="text-gradient-brand">Touch</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal x={-24} y={0}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={info.label} className="flex items-start space-x-4 group">
                    <div className="p-2 rounded-lg bg-[#00a3ff]/10 text-[#00a3ff] group-hover:scale-110 transition-transform duration-300">
                      <info.icon />
                    </div>
                    <div>
                      <p className="font-bold">{info.label}</p>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Card className="p-6 hover-glow">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Your Name" className="focus:ring-[#00a3ff] focus:border-[#00a3ff] transition-all" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" className="focus:ring-[#00a3ff] focus:border-[#00a3ff] transition-all" />
                </div>
                <div>
                  <Input placeholder="Subject" className="focus:ring-[#00a3ff] focus:border-[#00a3ff] transition-all" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" className="h-32 focus:ring-[#00a3ff] focus:border-[#00a3ff] transition-all" />
                </div>
                <Button className="w-full bg-[#00a3ff] hover:bg-[#0082cc] hover:shadow-lg hover:shadow-[#00a3ff]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all group">
                  <Send size={16} className="mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
