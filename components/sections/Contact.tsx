"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-[#00a3ff]" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-gray-600">+256 700 123 456</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="text-[#00a3ff]" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-gray-600">info@adornsofttech.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#00a3ff]" />
                <div>
                  <p className="font-bold">Location</p>
                  <p className="text-gray-600">Fort Portal, Uganda</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button className="w-full bg-[#00a3ff] hover:bg-[#0082cc]">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}