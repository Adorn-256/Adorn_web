"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export function TeamLeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-16"
    >
      <Card className="p-8 dark:bg-gray-800">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80"
              alt="Team Leader"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">A Word from Our Team Leader</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              "At Adorn Soft Tech, we believe in the transformative power of technology. Our journey began with a vision to bridge the digital divide in Fort Portal and beyond. Every day, we work tirelessly to turn innovative ideas into practical solutions that drive business growth and efficiency.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our commitment to excellence and customer satisfaction has helped us build lasting relationships with our clients. We're not just service providers; we're partners in your digital transformation journey."
            </p>
            <div>
              <h4 className="font-bold text-[#00a3ff]">John Doe</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}