"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 dark:bg-gray-800">
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
    </motion.div>
  );
}